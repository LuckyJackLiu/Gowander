
import React, { useState } from 'react';
import Button from '../components/Button';

interface VerifyPhoneProps {
  onBack: () => void;
  onContinue: () => void;
}

const VerifyPhone: React.FC<VerifyPhoneProps> = ({ onBack, onContinue }) => {
  const [phone, setPhone] = useState('');

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-950 transition-colors duration-300 p-8">
      <button onClick={onBack} className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-800 dark:text-slate-100 self-start mb-10 active:bg-slate-100 dark:active:bg-slate-700 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
      </button>

      <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4 tracking-tight">Verify phone number</h2>
      <p className="text-slate-500 dark:text-slate-400 text-lg mb-12">We'll call or text you to verify your phone number.</p>

      <div className="flex gap-4 mb-12">
        <div className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] px-4 py-4 w-[110px]">
           <img src="https://flagcdn.com/w80/my.png" alt="MY" className="w-8 rounded-sm shadow-sm" />
           <span className="font-bold text-slate-700 dark:text-slate-100">+60</span>
           <svg className="w-4 h-4 text-slate-300 dark:text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div className="flex-grow bg-[#F8FAFC] dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[24px] px-6 py-4 focus-within:ring-2 focus-within:ring-[#00D1FF] transition-all">
            <input 
              type="tel" 
              inputMode="numeric"
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              className="bg-transparent border-none outline-none w-full text-xl font-black text-slate-800 dark:text-slate-100 tracking-wider"
              placeholder="Phone number"
            />
        </div>
      </div>

      <div className="mt-auto">
        <Button onClick={onContinue} disabled={phone.length < 5} className="mb-4 h-16 rounded-[24px] text-lg font-black shadow-xl shadow-cyan-100 dark:shadow-none">
          Continue
        </Button>
        <div className="h-4"></div>
      </div>
    </div>
  );
};

export default VerifyPhone;
