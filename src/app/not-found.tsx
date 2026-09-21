import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-3xl font-extrabold text-[#2bbcff] mb-6">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
        Page Not Found
      </h1>
      <p className="text-slate-400 max-w-md mb-8 text-sm">
        The requested endpoint or cluster node could not be located on the Kaelixo Cloud mesh network.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#245bff] via-[#7a42ff] to-[#FF0052] text-white font-medium text-sm flex items-center gap-2 hover:opacity-95 transition-opacity"
      >
        <ArrowLeft className="w-4 h-4" />
        Return to Home
      </Link>
    </div>
  );
}
