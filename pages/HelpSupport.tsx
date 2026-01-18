
import React, { useState } from 'react';

interface HelpSupportProps {
  onBack: () => void;
}

const HelpSupport: React.FC<HelpSupportProps> = ({ onBack }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const faqs = [
    { id: 0, q: "How do I search for listings in the app?", a: "Simply use the search bar on the discover screen to find your dream destination." },
    { id: 1, q: "How to book an experience", a: "Most listings can be booked instantly with a credit card or digital wallet." },
    { id: 2, q: "I made an incorrect payment", a: "Please contact our live chat support immediately for refund assistance within 24 hours." },
    { id: 3, q: "Credit card transaction failed?", a: "Check your card limit and expiry date, or try another payment method like WeChat Pay." }
  ];

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="flex items-center p-6 pt-10 mb-2 flex-shrink-0">
        <button onClick={onBack} className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-800 dark:text-slate-100 active:scale-90 transition-all shadow-sm">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="flex-grow text-center font-black text-2xl text-slate-800 dark:text-slate-100 pr-12 tracking-tight">Help Center</span>
      </div>

      <div className="px-6 mb-8 flex-shrink-0">
        <div className="bg-[#00D1FF] rounded-[48px] p-8 text-center shadow-2xl shadow-cyan-100 dark:shadow-none">
           <h2 className="text-3xl font-black text-white mb-2 tracking-tighter">How can we help?</h2>
           <p className="text-white/80 text-[10px] mb-8 font-black uppercase tracking-widest leading-relaxed">Search for answers instantly</p>
           <div className="relative">
              <div className="absolute inset-y-0 left-5 flex items-center text-slate-400">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              </div>
              <input 
                type="text" 
                placeholder="Find a solution..." 
                className="w-full bg-white rounded-3xl py-4 pl-14 pr-12 text-slate-700 font-bold outline-none shadow-xl border-none transition-all focus:ring-4 focus:ring-white/20"
              />
           </div>
        </div>
      </div>

      <div className="px-6 flex gap-4 mb-10 flex-shrink-0">
         <button className="flex-grow bg-white dark:bg-slate-900 border border-slate-50 dark:border-slate-800 rounded-[32px] py-5 flex items-center justify-center gap-3 font-black text-slate-700 dark:text-slate-200 active:scale-95 transition-all shadow-sm">
            <svg className="w-6 h-6 text-[#00D1FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
            Support
         </button>
         <button className="flex-grow bg-[#00D1FF] rounded-[32px] py-5 flex items-center justify-center gap-3 font-black text-white active:scale-95 transition-all shadow-xl shadow-cyan-100 dark:shadow-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            Live Chat
         </button>
      </div>

      <div className="flex-grow overflow-y-auto px-6 pb-12 no-scrollbar">
         <h3 className="text-xs font-black text-slate-300 dark:text-slate-600 mb-8 uppercase tracking-[0.2em]">Popular FAQ</h3>
         <div className="space-y-6">
            {faqs.map(faq => (
               <div key={faq.id} className="bg-slate-50 dark:bg-slate-900/50 rounded-[28px] overflow-hidden border border-slate-50 dark:border-slate-800/50 transition-all">
                  <button 
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between text-left p-6 gap-4"
                  >
                     <span className={`font-black text-base leading-tight transition-colors ${openFaq === faq.id ? 'text-[#00D1FF]' : 'text-slate-600 dark:text-slate-400'}`}>{faq.q}</span>
                     <svg className={`w-5 h-5 text-slate-300 dark:text-slate-700 transition-transform duration-300 ${openFaq === faq.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-6 pb-8 text-slate-400 dark:text-slate-500 text-sm font-medium leading-relaxed animate-slide-up">
                       {faq.a}
                    </div>
                  )}
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default HelpSupport;
