
import React from 'react';
import Button from '../components/Button';

interface ChangePasswordMethodProps {
  onBack: () => void;
  onContinue: () => void;
}

const ChangePasswordMethod: React.FC<ChangePasswordMethodProps> = ({ onBack, onContinue }) => {
  return (
    <div className="flex flex-col h-screen bg-white p-8">
      <div className="flex items-center mb-10">
        <button onClick={onBack} className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-800 active:bg-slate-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <span className="flex-grow text-center font-bold text-lg text-slate-800 pr-12">Change Password</span>
      </div>

      <div className="flex flex-col items-center mb-10">
         <div className="w-64 h-64 bg-cyan-50 rounded-full flex items-center justify-center relative mb-6">
            <svg className="w-32 h-32 text-[#00D1FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
            <div className="absolute bottom-4 right-10 w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center">
               <svg className="w-6 h-6 text-[#00D1FF]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            </div>
         </div>
         <p className="text-slate-500 text-center font-medium px-4">
           To reset your password, please choose a contact method.
         </p>
      </div>

      <div className="space-y-4">
         <div className="bg-white border-2 border-[#00D1FF] rounded-[32px] p-6 flex items-center gap-6 shadow-xl shadow-cyan-100/30 cursor-pointer">
            <div className="w-14 h-14 bg-cyan-50 rounded-full flex items-center justify-center text-[#00D1FF]">
               <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </div>
            <div>
              <p className="text-slate-300 text-xs mb-1 font-bold">Via Email:</p>
              <p className="font-bold text-slate-700">infoul* * * ul@gmail.com</p>
            </div>
         </div>

         <div className="bg-slate-50 border border-slate-100 rounded-[32px] p-6 flex items-center gap-6 cursor-pointer hover:bg-slate-100 transition-colors">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-400">
               <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            </div>
            <div>
              <p className="text-slate-300 text-xs mb-1 font-bold">Via Phone:</p>
              <p className="font-bold text-slate-700">+60 0123456789</p>
            </div>
         </div>
      </div>

      <div className="mt-auto">
        <Button onClick={onContinue} className="h-16 text-lg rounded-[24px]">Continue</Button>
      </div>
    </div>
  );
};

export default ChangePasswordMethod;
