
import React, { useState } from 'react';
import { TravelItem } from '../types';
import Button from '../components/Button';

interface BookingStep2Props {
  item: TravelItem | null;
  onBack: () => void;
  onNext: () => void;
}

const BookingStep2: React.FC<BookingStep2Props> = ({ item, onBack, onNext }) => {
  const [selectedRoom, setSelectedRoom] = useState('Standard Room');

  const rooms = [
    { name: 'Standard Room', price: 'RM350', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=400' },
    { name: 'Deluxe King Room', price: 'RM450', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4df85b?auto=format&fit=crop&q=80&w=400' },
    { name: 'Executive Suite', price: 'RM650', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400' }
  ];

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden box-border">
      <div className="flex items-center p-6 pt-10 border-b border-slate-50 dark:border-slate-800 flex-shrink-0">
        <button onClick={onBack} className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-800 dark:text-slate-100 active:scale-90 transition-all">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="flex-grow text-center font-bold text-lg text-slate-800 dark:text-slate-100 pr-10">Select Room</span>
      </div>

      <div className="p-6 flex-grow overflow-y-auto no-scrollbar pb-[140px]">
        <div className="flex items-center gap-0 mb-10 px-4">
          <div className="w-10 h-10 rounded-full bg-[#00D1FF] flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-100">1</div>
          <div className="flex-grow h-1 bg-[#00D1FF] mx-1 rounded-full opacity-50"></div>
          <div className="w-10 h-10 rounded-full bg-[#00D1FF] flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-100">2</div>
          <div className="flex-grow h-1 bg-slate-100 dark:bg-slate-800 mx-1 rounded-full"></div>
          <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-300 dark:text-slate-600 font-bold">3</div>
        </div>

        <h2 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-8 uppercase tracking-widest text-[10px]">Room Type</h2>
        
        <div className="space-y-6">
          {rooms.map(room => (
            <div 
              key={room.name} 
              onClick={() => setSelectedRoom(room.name)}
              className={`bg-white dark:bg-slate-900 rounded-[32px] overflow-hidden border transition-all cursor-pointer active:scale-[0.98] ${
                selectedRoom === room.name 
                  ? 'border-[#00D1FF] ring-2 ring-cyan-50 dark:ring-cyan-900/10 shadow-lg' 
                  : 'border-slate-50 dark:border-slate-800 shadow-sm'
              }`}
            >
              <div className="h-44 relative">
                <img src={room.image} className="w-full h-full object-cover" alt={room.name} />
                {selectedRoom === room.name && (
                  <div className="absolute top-4 right-4 bg-[#00D1FF] w-8 h-8 rounded-full flex items-center justify-center text-white border-2 border-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                )}
              </div>
              <div className="p-6 flex justify-between items-center">
                 <div>
                   <h3 className="text-lg font-black text-slate-800 dark:text-slate-100">{room.name}</h3>
                   <div className="flex gap-4 mt-2">
                      <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 text-xs font-bold">
                         <svg className="w-4 h-4 text-[#00D1FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M3 10h18M7 15h1M11 15h1M3 10V4h18v6m0 0v10H3V10"/></svg>
                         1 Bed
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 text-xs font-bold">
                         <svg className="w-4 h-4 text-[#00D1FF]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                         2 Guest
                      </div>
                   </div>
                 </div>
                 <div className="text-right">
                    <p className="text-[#00D1FF] font-black text-2xl">{room.price}</p>
                    <p className="text-slate-300 dark:text-slate-600 text-[10px] font-bold uppercase tracking-widest">/ Night</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unified Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[1000] h-[110px] bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 flex items-start pt-4 px-8 pb-[safe-area-inset-bottom]">
        <button 
          onClick={onNext} 
          className="w-full h-[58px] bg-[#00D1FF] text-white font-black text-lg tracking-wide rounded-[30px] shadow-[0_12px_30px_rgba(0,200,255,0.3)] active:scale-95 transition-all"
        >
          Confirm Room Selection
        </button>
      </div>
    </div>
  );
};

export default BookingStep2;
