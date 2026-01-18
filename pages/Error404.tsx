
import React from 'react';
import Button from '../components/Button';

interface Error404Props {
  onBack: () => void;
}

const Error404: React.FC<Error404Props> = ({ onBack }) => {
  return (
    <div className="flex flex-col h-screen bg-white p-8">
      <div className="flex-grow flex flex-col items-center justify-center text-center">
         <div className="relative w-72 h-48 mb-16 flex items-center justify-center">
            {/* Visual matches image 3: Box with dots and circles */}
            <div className="absolute inset-0 border-[3px] border-slate-100 rounded-[32px] overflow-hidden">
               <div className="absolute top-4 right-4 grid grid-cols-4 gap-1.5 opacity-20">
                  {[...Array(12)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>)}
               </div>
               <div className="absolute bottom-4 left-4 grid grid-cols-4 gap-1.5 opacity-20">
                  {[...Array(8)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>)}
               </div>
               <div className="absolute top-8 left-8 flex gap-3 opacity-20">
                  <div className="w-3 h-3 rounded-full border-2 border-slate-400"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  <div className="w-10 h-3 rounded-full bg-slate-100"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
               </div>
               <div className="absolute bottom-10 right-10 w-20 h-0.5 bg-slate-100"></div>
            </div>
            
            <div className="absolute -top-3 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 right-1/3 w-2 h-2 bg-slate-200 rounded-full"></div>
            <div className="absolute top-1/2 -right-3 w-4 h-4 bg-cyan-400 rounded-full opacity-60"></div>
            <div className="absolute top-1/3 left-6 w-10 h-10 bg-[#00D1FF] rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-200">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="4"/></svg>
            </div>

            <h1 className="text-8xl font-black text-[#00D1FF] tracking-tighter z-10 drop-shadow-sm">404</h1>
         </div>

         <h2 className="text-4xl font-black text-slate-800 mb-6 tracking-tight">Error 404</h2>
         <p className="text-slate-400 text-xl font-medium max-w-[200px] leading-relaxed">Please try again later</p>
      </div>

      <div className="pb-10">
         <Button onClick={onBack} className="h-16 text-lg tracking-wide rounded-[32px]">
            Back to Home
         </Button>
      </div>
    </div>
  );
};

export default Error404;
