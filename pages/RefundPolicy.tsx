
import React from 'react';
import Button from '../components/Button';

interface RefundPolicyProps {
  onBack: () => void;
  onContinue: () => void;
}

const RefundPolicy: React.FC<RefundPolicyProps> = ({ onBack, onContinue }) => {
  const sections = [
    { title: "1. Full Refund", text: "If you are not satisfied with the product within 30 days of purchase, you may request a full refund. Refunds will be processed within 7 business days." },
    { title: "2. Partial Refund", text: "If you request a refund within 30 days of purchase and the product meets the refund conditions, a partial refund will be issued based on the product price (after deducting applicable service fees or taxes)." },
    { title: "3. Non-Refundable Items", text: "Certain products, such as customized items or services that have already been used, are not eligible for a refund. Please refer to our Terms and Conditions for more details." },
    { title: "4. Refund Timeframe", text: "All refund requests must be submitted within 30 days of purchase. Requests submitted after this period will not be accepted." }
  ];

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex items-center p-6 pt-10 mb-6">
        <button onClick={onBack} className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-800">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="flex-grow text-center font-bold text-xl text-slate-800 pr-12 tracking-tight">Refund Policy</span>
      </div>

      <div className="flex-grow overflow-y-auto px-8 no-scrollbar pb-10 space-y-10">
         {sections.map(s => (
           <div key={s.title}>
             <h3 className="text-2xl font-black text-slate-800 mb-4">{s.title}</h3>
             <p className="text-slate-400 text-lg leading-relaxed font-medium">{s.text}</p>
           </div>
         ))}
      </div>

      <div className="p-8 pb-10">
        <Button onClick={onContinue} className="h-16 text-lg rounded-[32px] shadow-xl shadow-cyan-100">Continue</Button>
      </div>
    </div>
  );
};

export default RefundPolicy;
