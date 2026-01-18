
import React, { useState } from 'react';
import Button from '../components/Button';

interface VerifyResetCodeProps {
  onBack: () => void;
  onVerify: () => void;
}

const VerifyResetCode: React.FC<VerifyResetCodeProps> = ({ onBack, onVerify }) => {
  const [code, setCode] = useState<string[]>(['', '', '', '']);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNumClick = (num: number | string) => {
    if (activeIdx < 4) {
      const newCode = [...code];
      newCode[activeIdx] = num.toString();
      setCode(newCode);
      setActiveIdx(prev => Math.min(prev + 1, 4));
    }
  };

  const handleDelete = () => {
    if (activeIdx > 0) {
      const newCode = [...code];
      const targetIdx = activeIdx === 4 ? 3 : activeIdx - 1;
      newCode[targetIdx] = '';
      setCode(newCode);
      setActiveIdx(prev => Math.max(prev - 1, 0));
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-950 p-8 transition-colors duration-300">
      <button onClick={onBack} className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-800 dark:text-slate-100 self-start mb-10 shadow-sm active:scale-90 transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>

      <h1 className="text-4xl font-black text-slate-800 dark:text-slate-100 mb-6 tracking-tighter">Enter verification code</h1>
      <p className="text-slate-500 dark:text-slate-400 text-lg mb-12 font-medium">The code has been sent to +60 012****6789</p>

      <div className="flex justify-between gap-4 mb-10 px-8">
        {code.map((val, i) => (
          <div 
            key={i} 
            className={`w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-900 border flex items-center justify-center text-3xl font-black transition-all ${
              i === activeIdx 
                ? 'border-[#00D1FF] ring-4 ring-cyan-50 dark:ring-cyan-900/20 text-[#00D1FF]' 
                : 'border-slate-100 dark:border-slate-800 text-slate-800 dark:text-slate-100'
            }`}
          >
            {val}
            {i === activeIdx && <div className="w-0.5 h-8 bg-[#00D1FF] animate-pulse absolute"></div>}
          </div>
        ))}
      </div>

      <p className="text-slate-400 dark:text-slate-600 font-black text-center mb-10 uppercase tracking-widest text-xs">
        Resend code in <span className="text-[#00D1FF]">55 seconds</span>
      </p>

      <div className="mb-10">
        <Button onClick={onVerify} disabled={code.some(c => c === '')}>Verify</Button>
      </div>

      {/* iOS Style Custom Number Pad */}
      <div className="grid grid-cols-3 gap-3 bg-slate-100 dark:bg-slate-900/50 p-3 rounded-[40px] mt-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'del'].map((num, i) => {
           if (num === '') return <div key={i} className="h-14"></div>;
           
           return (
             <button 
                key={i} 
                onClick={() => num === 'del' ? handleDelete() : handleNumClick(num)}
                className="h-14 bg-white dark:bg-slate-800 rounded-2xl shadow-sm font-black text-xl text-slate-800 dark:text-slate-100 flex items-center justify-center active:scale-90 transition-all hover:bg-slate-50 dark:hover:bg-slate-700"
             >
               {num === 'del' ? (
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM18 9l-6 6m0-6l6 6"/></svg>
               ) : num}
             </button>
           );
        })}
      </div>
    </div>
  );
};

export default VerifyResetCode;
