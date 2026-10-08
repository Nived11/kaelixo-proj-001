import { useState } from 'react';
import api from '../api/axios';
import { extractError, ParsedError } from '../utils/extractError';

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const useSubmitEnquiry = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [globalError, setGlobalError] = useState<string | null>(null);

  const submitEnquiry = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    setIsSuccess(false);
    setFieldErrors({});
    setGlobalError(null);

    try {
      const response = await api.post('/enquiries/', data);
      
      if (response.status === 201) {
        setIsSuccess(true);
        return true; 
      }
    } catch (error) {
      const { globalError: gErr, fieldErrors: fErrs } = extractError(error);
      setGlobalError(gErr);
      setFieldErrors(fErrs);
    } finally {
      setIsSubmitting(false);
    }
    return false;
  };

  return { 
    submitEnquiry, 
    isSubmitting, 
    isSuccess, 
    setIsSuccess,
    fieldErrors, 
    setFieldErrors,
    globalError, 
    setGlobalError 
  };
};
