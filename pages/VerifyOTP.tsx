
import React, { useState, useRef, useEffect } from 'react';
import Button from '../components/Button';

interface VerifyOTPProps {
  onBack: () => void;
  onConfirm: () => void;
}

const VerifyOTP: React.FC<VerifyOTPProps> = ({ onBack, onConfirm }) => {
  const [otpValue, setOtpValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 5);
    setOtpValue(val);
  };

  const otpArray = [...otpValue.padEnd(5, ' ')].slice(0, 5);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-950 transition-colors duration-300 p-8">
      <button onClick={onBack} className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-800 dark:text-slate-100 self-start mb-10 transition-colors active:scale-90">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
      </button>

      <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4 tracking-tight">Verify Account</h2>
      <p className="text-slate-500 dark:text-slate-400 text-lg mb-12">
        Enter the verification code sent to your phone ending in ****666
      </p>

      <div className="relative flex justify-between gap-3 mb-8">
        {/* Hidden Input for handling the actual typing */}
        <input 
          ref={inputRef}
          type="tel" 
          inputMode="numeric" 
          className="absolute inset-0 opacity-0 cursor-default"
          value={otpValue}
          onChange={handleChange}
          autoFocus
        />
        
        {otpArray.map((digit, i) => {
          const isActive = i === otpValue.length;
          const isFilled = i < otpValue.length;
          
          return (
            <div
              key={i}
              className={`w-14 h-14 bg-slate-50 dark:bg-slate-900 border rounded-full flex items-center justify-center text-2xl font-black text-slate-800 dark:text-slate-100 transition-all ${
                isActive ? 'border-[#00D1FF] ring-2 ring-cyan-50 dark:ring-cyan-900/20' : 'border-slate-100 dark:border-slate-800'
              } ${isFilled ? 'border-[#00D1FF]/40' : ''}`}
            >
              {digit !== ' ' ? digit : ''}
              {isActive && <div className="w-0.5 h-6 bg-[#00D1FF] animate-pulse"></div>}
            </div>
          );
        })}
      </div>

      <button className="text-[#00D1FF] font-black text-lg text-left mb-auto hover:underline transition-all">
        Resend code?
      </button>

      <div className="pb-8">
        <Button 
          onClick={onConfirm} 
          disabled={otpValue.length < 5} 
          className="h-16 rounded-[24px] text-lg font-black shadow-xl shadow-cyan-100 dark:shadow-none"
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default VerifyOTP;
