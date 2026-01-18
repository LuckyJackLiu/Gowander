
import React from 'react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex items-center p-6 pt-10 mb-6">
        <button onClick={onBack} className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-800">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="flex-grow text-center font-bold text-lg text-slate-800 pr-12 tracking-tight">Terms of Service</span>
      </div>

      <div className="flex-grow overflow-y-auto px-8 no-scrollbar pb-10">
         <h1 className="text-3xl font-bold text-slate-800 mb-8">Privacy Policy</h1>
         
         <div className="flex items-center gap-4 mb-10">
            <div className="bg-cyan-50 text-[#00D1FF] px-4 py-3 rounded-full font-bold text-base">
               v1.1.0
            </div>
            <span className="text-slate-400 font-medium text-lg">Published February 2025</span>
         </div>

         <button className="flex items-center gap-3 bg-white border border-slate-200 rounded-[32px] px-8 py-5 font-bold text-slate-700 shadow-sm mb-12 active:bg-slate-50 transition-colors">
            <svg className="w-7 h-7 text-[#00D1FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20zm0-15v6m0 0l-3-3m3 3l3-3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Download PDF
         </button>

         <div className="space-y-10 text-slate-400 text-lg leading-relaxed font-medium">
            <p>
               Protecting your privacy is a top priority of our delivery application. We understand that you trust us with your personal information, and we take this responsibility seriously.
            </p>
            <p>
               When you use our application, we collect and use information only when necessary to provide our services and improve your experience. This may include information such as your name, address, and delivery details. We also use cookies and similar technologies to personalize your experience and track usage data.
            </p>
            <p>
               We do not sell your personal information to third parties. We only share your information with trusted partners and service providers when it is necessary to deliver our services. We take reasonable measures to protect your information from unauthorized access, disclosure, or misuse.
            </p>
            <p>
               If you have any questions or concerns about our privacy policy, please feel free to reach out to our support team.
            </p>
         </div>
      </div>
    </div>
  );
};

export default TermsOfService;
