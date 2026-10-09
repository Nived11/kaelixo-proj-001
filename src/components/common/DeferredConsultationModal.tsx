"use client";
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import type { ModalType } from './ConsultationModal';
const ConsultationModal = dynamic(() => import('./ConsultationModal'), { ssr: false });
export default function DeferredConsultationModal() {
  const [request, setRequest] = useState<{ type: ModalType; sequence: number } | null>(null);
  useEffect(() => {
    const open = (event: Event) => {
      const type = (event as CustomEvent).detail?.type;
      setRequest(previous => ({ type: type === 'demo' || type === 'consultation' ? type : 'enquiry', sequence: (previous?.sequence ?? 0) + 1 }));
    };
    window.addEventListener('open-consultation-modal', open);
    return () => window.removeEventListener('open-consultation-modal', open);
  }, []);
  return request ? <ConsultationModal request={request} /> : null;
}
