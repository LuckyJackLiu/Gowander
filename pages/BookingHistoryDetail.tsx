
import React from 'react';
import { TravelItem } from '../types';
import Button from '../components/Button';

interface BookingHistoryDetailProps {
  item: TravelItem | null;
  onBack: () => void;
  onWriteReview: () => void;
}

const BookingHistoryDetail: React.FC<BookingHistoryDetailProps> = ({ item, onBack, onWriteReview }) => {
  if (!item) return null;

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex items-center p-6 pt-10">
        <button onClick={onBack} className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-800">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="flex-grow text-center font-bold text-xl text-slate-800 pr-12">Booking Details</span>
      </div>

      <div className="p-6 overflow-y-auto no-scrollbar pb-10">
        <img src={item.image} className="w-full h-56 object-cover rounded-[32px] mb-6 shadow-sm" alt={item.title} />
        
        <h2 className="text-2xl font-bold text-slate-800 mb-2">{item.title}</h2>
        <div className="flex items-center justify-between mb-4">
           <div className="flex items-center gap-1 text-slate-500 font-bold">
              <span>8.5/10 Very Good</span>
              <button className="text-[#00D1FF] ml-2 flex items-center gap-0.5">View All Reviews <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
           </div>
           <div className="bg-[#00D1FF] text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest">Completed</div>
        </div>

        <div className="flex gap-4 mb-8">
           <Button variant="outline" className="flex-1 rounded-[24px] py-4">Book Again</Button>
           <Button onClick={onWriteReview} className="flex-1 rounded-[24px] py-4 shadow-xl shadow-cyan-100">Write a Review</Button>
        </div>

        <div className="relative rounded-[32px] overflow-hidden mb-4 shadow-sm">
           <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" className="w-full h-48 object-cover opacity-60" />
           <div className="absolute inset-0 bg-cyan-100/20"></div>
           {/* Marker Mock */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white px-3 py-1 rounded-lg shadow-xl text-[8px] font-bold border border-slate-50 flex items-center gap-1">
                 <div className="w-3 h-3 bg-purple-500 rounded flex items-center justify-center text-white"><svg className="w-2 h-2" fill="currentColor" viewBox="0 0 24 24"><path d="M7 13v-2h14v2H7zm0-7h14v2H7V6zm0 14h14v-2H7v2zM3 13V5h2v8H3zm0 6v-4h2v4H3z"/></svg></div>
                 Mataking Island
              </div>
              <div className="w-0.5 h-3 bg-white mx-auto shadow-sm"></div>
           </div>
        </div>
        <p className="text-slate-500 text-sm font-bold flex items-center gap-2 mb-10">
           <svg className="w-5 h-5 text-[#00D1FF]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
           Mataking island, Malaysia
        </p>

        <h3 className="text-xl font-bold text-slate-800 mb-6 uppercase tracking-widest">Details</h3>
        <div className="flex gap-4">
           <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
           </div>
           <div>
              <p className="text-slate-400 text-sm font-bold">Booking ID</p>
              <p className="text-slate-800 font-bold text-lg">21119861596345</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BookingHistoryDetail;
