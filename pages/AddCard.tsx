
import React from 'react';
import Button from '../components/Button';

interface AddCardProps {
  onBack: () => void;
}

const AddCard: React.FC<AddCardProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex items-center p-6 pt-10 mb-4">
        <button onClick={onBack} className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-800">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="flex-grow text-center font-bold text-lg text-slate-800 pr-12 tracking-tight">Add New Card</span>
      </div>

      <div className="flex-grow overflow-y-auto px-8 space-y-8 no-scrollbar pb-10">
         <div>
            <label className="block text-lg font-bold text-slate-800 mb-4">Card Number</label>
            <input 
              placeholder="Enter card number" 
              className="w-full bg-slate-50 border-none rounded-[32px] py-6 px-8 text-xl font-medium outline-none focus:ring-2 focus:ring-[#00D1FF] transition-all placeholder:text-slate-300" 
            />
         </div>

         <div>
            <label className="block text-lg font-bold text-slate-800 mb-4">Cardholder Name</label>
            <input 
              placeholder="Enter cardholder name" 
              className="w-full bg-slate-50 border-none rounded-[32px] py-6 px-8 text-xl font-medium outline-none focus:ring-2 focus:ring-[#00D1FF] transition-all placeholder:text-slate-300" 
            />
         </div>

         <div className="grid grid-cols-2 gap-6">
            <div>
               <label className="block text-lg font-bold text-slate-800 mb-4">Expiry Date</label>
               <input 
                 placeholder="MM / YY" 
                 className="w-full bg-slate-50 border-none rounded-[32px] py-6 px-8 text-xl font-medium outline-none focus:ring-2 focus:ring-[#00D1FF] transition-all placeholder:text-slate-300 text-center" 
               />
            </div>
            <div>
               <label className="block text-lg font-bold text-slate-800 mb-4">CVV</label>
               <input 
                 placeholder="CVV" 
                 className="w-full bg-slate-50 border-none rounded-[32px] py-6 px-8 text-xl font-medium outline-none focus:ring-2 focus:ring-[#00D1FF] transition-all placeholder:text-slate-300 text-center" 
               />
            </div>
         </div>
      </div>

      <div className="p-8 border-t border-slate-50">
         <Button className="h-16 text-lg rounded-[32px]">Add New Card</Button>
      </div>
    </div>
  );
};

export default AddCard;
