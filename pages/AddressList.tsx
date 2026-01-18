
import React, { useState } from 'react';
import Button from '../components/Button';

interface AddressListProps {
  onBack: () => void;
  onAdd: () => void;
}

const AddressList: React.FC<AddressListProps> = ({ onBack, onAdd }) => {
  const [selected, setSelected] = useState(0);

  const addresses = [
    { 
      name: 'Jack Lau', 
      phone: '0123456789', 
      detail: 'No. 1999, Jalan Bukit Bintang, 55100 Kuala Lumpur, Malaysia' 
    },
    { 
      name: 'Andy He', 
      phone: '0987654321', 
      detail: 'No. 5458, Jalan Tun Razak, 50400 Kuala Lumpur, Malaysia' 
    }
  ];

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="flex items-center p-6 pt-10 border-b border-slate-50 dark:border-slate-800 flex-shrink-0">
        <button onClick={onBack} className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-800 dark:text-slate-100 transition-all active:scale-90">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="flex-grow text-center font-black text-2xl text-slate-800 dark:text-slate-100 tracking-tight">Saved Addresses</span>
        <button onClick={onAdd} className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 dark:text-slate-500 active:scale-90 transition-all">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6v12M6 12h12" strokeWidth="3" strokeLinecap="round"/></svg>
        </button>
      </div>

      <div className="flex-grow overflow-y-auto px-6 py-12 no-scrollbar pb-32">
        <div className="space-y-12">
          {addresses.map((addr, idx) => (
            <div key={idx} onClick={() => setSelected(idx)} className="flex gap-6 items-start cursor-pointer group">
               <div className={`w-16 h-16 rounded-3xl flex items-center justify-center flex-shrink-0 transition-all shadow-sm ${selected === idx ? 'bg-[#00D1FF] text-white shadow-cyan-100 dark:shadow-none' : 'bg-cyan-50 dark:bg-cyan-900/10 text-[#00D1FF]'}`}>
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
               </div>
               <div className="flex-grow">
                  <div className="flex justify-between items-center mb-1">
                     <h4 className="text-xl font-black text-slate-800 dark:text-slate-100">{addr.name}</h4>
                     <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${selected === idx ? 'border-[#00D1FF]' : 'border-slate-200 dark:border-slate-800 group-hover:border-slate-300'}`}>
                        {selected === idx && <div className="w-3.5 h-3.5 bg-[#00D1FF] rounded-full"></div>}
                     </div>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 font-bold text-base mb-4 tracking-tight uppercase text-xs">{addr.phone}</p>
                  <p className="text-slate-400 dark:text-slate-500 text-lg leading-relaxed font-medium mb-6">{addr.detail}</p>
                  <div className="flex gap-4">
                    <button className="px-10 py-3 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 text-slate-400 font-black text-xs uppercase tracking-widest active:scale-95 transition-all">
                      Edit
                    </button>
                    <button className="px-10 py-3 rounded-2xl bg-white dark:bg-slate-900 border-2 border-red-50 dark:border-red-900/20 text-red-400/60 font-black text-xs uppercase tracking-widest active:scale-95 transition-all">
                      Remove
                    </button>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddressList;
