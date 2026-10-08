import { isAxiosError } from 'axios';

export interface ParsedError {
  globalError: string | null;
  fieldErrors: Record<string, string[]>;
}

export const extractError = (error: unknown): ParsedError => {
  let globalError: string | null = null;
  let fieldErrors: Record<string, string[]> = {};

  if (isAxiosError(error) && error.response) {
    if (error.response.status === 400 && error.response.data?.errors) {
      fieldErrors = error.response.data.errors;
    } else if (error.response.status === 429) {
      globalError = "Too many requests. Please wait a minute before retrying.";
    } else {
      globalError = "Failed to submit enquiry. Please try again later.";
    }
  } else {
    globalError = "Network error. Please check your connection.";
  }

  return { globalError, fieldErrors };
};
