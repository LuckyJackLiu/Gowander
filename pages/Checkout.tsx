
import React from 'react';
import { TravelItem, BookingInfo } from '../types';
import Button from '../components/Button';

interface CheckoutProps {
  item: TravelItem | null;
  bookingInfo: BookingInfo;
  onBack: () => void;
  onCheckout: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ item, bookingInfo, onBack, onCheckout }) => {
  if (!item) return null;

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden box-border">
      <div className="flex items-center p-6 pt-10 border-b border-slate-50 dark:border-slate-800 flex-shrink-0">
        <button onClick={onBack} className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-800 dark:text-slate-100 active:scale-90 transition-all">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="flex-grow text-center font-bold text-lg text-slate-800 dark:text-slate-100 pr-10">Confirmation</span>
      </div>

      <div className="p-6 overflow-y-auto no-scrollbar flex-grow pb-[140px]">
        <h2 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-6 uppercase tracking-widest text-[10px]">Booking Summary</h2>
        
        <div className="bg-slate-50 dark:bg-slate-900 rounded-[32px] p-4 flex gap-4 mb-8 border border-slate-100 dark:border-slate-800">
          <img src={item.image} className="w-32 h-24 rounded-2xl object-cover shadow-sm" alt={item.title} />
          <div className="flex-grow py-1 overflow-hidden">
             <div className="flex justify-between items-start">
               <h3 className="font-black text-slate-800 dark:text-slate-100 text-sm truncate">{item.title}</h3>
               <div className="flex items-center gap-1 text-[10px] font-bold text-orange-400">
                 <span>★</span> 4.8
               </div>
             </div>
             <p className="text-slate-400 dark:text-slate-500 text-[10px] flex items-center gap-1 mt-1 font-bold uppercase truncate">
               <svg className="w-3 h-3 text-[#00D1FF]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
               {item.location.split(',')[0]}
             </p>
             <p className="text-[10px] text-slate-300 dark:text-slate-600 mt-2 font-black uppercase">Jan 16 — Jan 18</p>
          </div>
        </div>

        <div className="space-y-6 mb-10">
           <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-6 rounded-[28px] border border-slate-50 dark:border-slate-800">
             <div>
               <p className="text-slate-300 dark:text-slate-600 text-[10px] font-black uppercase mb-1">Room Selected</p>
               <h4 className="font-black text-slate-700 dark:text-slate-200">Standard King Room</h4>
             </div>
             <div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl flex items-center justify-center text-[#00D1FF]">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M3 12l2-2m0 0l7-7 7-7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3"/></svg>
             </div>
           </div>

           <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-6 rounded-[28px] border border-slate-50 dark:border-slate-800">
             <div>
               <p className="text-slate-300 dark:text-slate-600 text-[10px] font-black uppercase mb-1">Guest Details</p>
               <h4 className="font-black text-slate-700 dark:text-slate-200">{bookingInfo.name}</h4>
             </div>
             <div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl flex items-center justify-center text-[#00D1FF]">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
             </div>
           </div>
        </div>

        <div className="border-t border-slate-50 dark:border-slate-900 pt-8">
           <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-8 uppercase tracking-widest text-[10px]">Payment Details</h4>
           <div className="flex items-center gap-4 mb-8 p-4 bg-green-50/30 dark:bg-green-900/10 rounded-2xl border border-green-100/50 dark:border-green-900/20">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-200 dark:shadow-none">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.38 15.41L6.7 13.5l1.41-1.41 2.51 2.51 5.38-5.38 1.41 1.41-6.79 6.78z"/></svg>
              </div>
              <span className="font-black text-slate-700 dark:text-slate-200">WeChat Pay</span>
              <span className="ml-auto text-green-500 font-bold text-xs uppercase">Selected</span>
           </div>

           <div className="space-y-4 mb-10 px-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400 dark:text-slate-600 font-bold uppercase text-[10px] tracking-widest">Subtotal</span>
                <span className="font-black text-slate-800 dark:text-slate-100">RM213.9</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400 dark:text-slate-600 font-bold uppercase text-[10px] tracking-widest">Tax & Fees</span>
                <span className="font-black text-slate-800 dark:text-slate-100">RM1.6</span>
              </div>
              <div className="flex justify-between text-sm text-green-500">
                <span className="font-bold uppercase text-[10px] tracking-widest">Promo Applied</span>
                <span className="font-black">-RM5.3</span>
              </div>
           </div>

           <div className="border-t border-dashed border-slate-200 dark:border-slate-800 pt-8 flex justify-between items-center mb-6">
              <span className="text-slate-400 dark:text-slate-600 font-black uppercase text-[10px] tracking-widest">Total Price</span>
              <span className="text-3xl font-black text-[#00D1FF] tracking-tighter">RM 209.3</span>
           </div>
        </div>
      </div>

      {/* Unified Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[1000] h-[110px] bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 flex items-start pt-4 px-8 pb-[safe-area-inset-bottom]">
        <button 
          onClick={onCheckout} 
          className="w-full h-[58px] bg-[#00D1FF] text-white font-black text-lg tracking-wide rounded-[30px] shadow-[0_12px_30px_rgba(0,200,255,0.3)] active:scale-95 transition-all"
        >
          Confirm & Pay
        </button>
      </div>
    </div>
  );
};

export default Checkout;
