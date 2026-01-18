
import React, { useState } from 'react';
import Button from '../components/Button';

interface AddAddressProps {
  onBack: () => void;
}

const AddAddress: React.FC<AddAddressProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex items-center p-6 pt-10 mb-4">
        <button onClick={onBack} className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-800">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="flex-grow text-center font-bold text-lg text-slate-800 pr-12 tracking-tight">Add New Address</span>
      </div>

      <div className="flex-grow overflow-y-auto px-8 space-y-8 no-scrollbar pb-10">
         <div>
            <label className="block text-lg font-bold text-slate-800 mb-4">Address</label>
            <input 
              placeholder="Enter address" 
              className="w-full bg-slate-50 border-none rounded-[32px] py-6 px-8 text-xl font-medium outline-none focus:ring-2 focus:ring-[#00D1FF] transition-all placeholder:text-slate-300" 
            />
         </div>

         <div>
            <label className="block text-lg font-bold text-slate-800 mb-4">City</label>
            <input 
              placeholder="Enter city" 
              className="w-full bg-slate-50 border-none rounded-[32px] py-6 px-8 text-xl font-medium outline-none focus:ring-2 focus:ring-[#00D1FF] transition-all placeholder:text-slate-300" 
            />
         </div>

         <div>
            <label className="block text-lg font-bold text-slate-800 mb-4">Country</label>
            <div className="relative">
                <input 
                  placeholder="Choose your country" 
                  readOnly
                  className="w-full bg-slate-50 border-none rounded-[32px] py-6 px-8 text-xl font-medium outline-none cursor-pointer placeholder:text-slate-300" 
                />
                <div className="absolute inset-y-0 right-8 flex items-center text-slate-400">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
            </div>
         </div>

         <div>
            <label className="block text-lg font-bold text-slate-800 mb-4">Postal Code</label>
            <input 
              placeholder="Enter postal code" 
              className="w-full bg-slate-50 border-none rounded-[32px] py-6 px-8 text-xl font-medium outline-none focus:ring-2 focus:ring-[#00D1FF] transition-all placeholder:text-slate-300" 
            />
         </div>

         <div>
            <label className="block text-lg font-bold text-slate-800 mb-4">Detailed Address</label>
            <textarea 
              placeholder="Enter detailed address" 
              className="w-full h-48 bg-slate-50 border-none rounded-[32px] py-6 px-8 text-xl font-medium outline-none focus:ring-2 focus:ring-[#00D1FF] transition-all resize-none placeholder:text-slate-300" 
            ></textarea>
         </div>
      </div>

      <div className="p-8 border-t border-slate-50">
         <Button className="h-16 text-lg rounded-[32px]">Save</Button>
      </div>
    </div>
  );
};

export default AddAddress;
