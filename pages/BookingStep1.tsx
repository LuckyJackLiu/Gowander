
import React from 'react';
import { TravelItem, BookingInfo } from '../types';
import Button from '../components/Button';

interface BookingStep1Props {
  item: TravelItem | null;
  bookingInfo: BookingInfo;
  onBack: () => void;
  onEditDetails: () => void;
  onNext: () => void;
}

const BookingStep1: React.FC<BookingStep1Props> = ({ item, bookingInfo, onBack, onEditDetails, onNext }) => {
  if (!item) return null;

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-slate-900 transition-colors relative overflow-hidden">
      <div className="flex items-center p-6 pt-10 flex-shrink-0">
        <button onClick={onBack} className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-800 dark:text-slate-100 shadow-sm active:scale-90 transition-all">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="flex-grow text-center font-bold text-lg text-slate-800 dark:text-slate-100 pr-10">Booking</span>
      </div>

      <div className="p-6 flex-grow overflow-y-auto no-scrollbar pb-[140px]">
        <div className="flex items-center gap-0 mb-8 px-4">
          <div className="w-10 h-10 rounded-full bg-[#00C8FF] flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-100">1</div>
          <div className="flex-grow h-1 bg-slate-100 dark:bg-slate-800 mx-1 rounded-full"></div>
          <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-300 dark:text-slate-600 font-bold">2</div>
          <div className="flex-grow h-1 bg-slate-100 dark:bg-slate-800 mx-1 rounded-full"></div>
          <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-300 dark:text-slate-600 font-bold">3</div>
        </div>

        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 tracking-tight uppercase text-xs tracking-[0.2em]">Hotel Info</h2>
        <div className="bg-white dark:bg-slate-800 rounded-[32px] p-4 flex gap-4 border border-slate-50 dark:border-slate-700 shadow-sm mb-6">
          <img src={item.image} className="w-24 h-24 rounded-2xl object-cover shadow-sm" />
          <div className="flex-grow py-1 overflow-hidden">
             <div className="flex justify-between items-start">
               <h3 className="font-black text-slate-800 dark:text-slate-100 truncate text-sm">{item.title}</h3>
               <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
                 <span className="text-yellow-400">★</span> {item.rating}
               </div>
             </div>
             <p className="text-slate-400 dark:text-slate-500 text-[10px] flex items-center gap-1 mt-1 font-bold uppercase">
               <svg className="w-3 h-3 text-[#00C8FF]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
               {item.location.split(',')[0]}
             </p>
             <div className="mt-auto">
               <span className="text-[#00C8FF] font-black text-xl">{item.price}</span>
               <span className="text-slate-300 dark:text-slate-600 text-[10px] ml-1 font-bold">/ person</span>
             </div>
          </div>
        </div>

        <div className="bg-cyan-50/40 dark:bg-cyan-900/10 rounded-[24px] p-4 flex gap-4 mb-8 border border-cyan-100/50 dark:border-cyan-900/20">
          <div className="w-6 h-6 rounded-full bg-[#00C8FF] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2.5"/></svg>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold leading-relaxed uppercase tracking-tight">
            Non-refundable booking. Cancellation fees apply. <button className="text-[#00C8FF] underline">Details</button>
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-50 dark:border-slate-700 rounded-[32px] p-6 shadow-sm mb-6 relative">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-black text-slate-800 dark:text-slate-100">Booking Details</h3>
            <button onClick={onEditDetails} className="w-10 h-10 flex items-center justify-center bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-2xl shadow-sm active:scale-90 transition-all">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
          <p className="text-base font-black text-slate-700 dark:text-slate-300 mb-6">{bookingInfo.name}</p>
          <div className="space-y-4">
             <div className="flex items-center gap-4 text-slate-400 dark:text-slate-500">
               <div className="w-10 h-10 bg-cyan-50 dark:bg-cyan-900/20 text-[#00C8FF] rounded-2xl flex items-center justify-center shadow-sm">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
               </div>
               <span className="text-sm font-bold">{bookingInfo.email}</span>
             </div>
             <div className="flex items-center gap-4 text-slate-400 dark:text-slate-500">
               <div className="w-10 h-10 bg-cyan-50 dark:bg-cyan-900/20 text-[#00C8FF] rounded-2xl flex items-center justify-center shadow-sm">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
               </div>
               <span className="text-sm font-bold">{bookingInfo.phone}</span>
             </div>
          </div>
        </div>
      </div>

      {/* Unified Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[1000] h-[110px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 flex items-start pt-4 px-8 pb-[safe-area-inset-bottom]">
        <button 
          onClick={onNext} 
          className="w-full h-[58px] bg-[#00C8FF] text-white font-black text-lg tracking-wide rounded-[30px] shadow-[0_12px_30px_rgba(0,200,255,0.3)] active:scale-95 transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookingStep1;
