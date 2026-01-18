
import React from 'react';
import { BookingInfo } from '../types';
import Button from '../components/Button';

interface BookingDetailsProps {
  bookingInfo: BookingInfo;
  setBookingInfo: (info: BookingInfo) => void;
  onBack: () => void;
}

const BookingDetails: React.FC<BookingDetailsProps> = ({ bookingInfo, setBookingInfo, onBack }) => {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-slate-950 transition-colors">
      <div className="flex items-center p-6 pt-10 border-b border-slate-50 dark:border-slate-800">
        <button onClick={onBack} className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-800 dark:text-slate-100 active:scale-90 transition-all">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="flex-grow text-center font-bold text-lg text-slate-800 dark:text-slate-100 pr-10 tracking-tight">Booking Details</span>
      </div>

      <div className="p-8 space-y-10 flex-grow overflow-y-auto no-scrollbar">
        <div>
          <label className="block text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Full Name</label>
          <input 
            value={bookingInfo.name} 
            onChange={(e) => setBookingInfo({...bookingInfo, name: e.target.value})}
            className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-[32px] py-6 px-8 text-xl font-semibold outline-none focus:ring-2 focus:ring-[#00D1FF] dark:text-white transition-all" 
          />
        </div>

        <div>
          <label className="block text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Phone Number</label>
          <div className="flex gap-4">
             <div className="bg-slate-50 dark:bg-slate-900 rounded-[32px] py-6 px-6 flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-300">
               <img src="https://flagcdn.com/w20/my.png" className="w-6 h-4" />
               +60 <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2"/></svg>
             </div>
             <input 
              value={bookingInfo.phone} 
              onChange={(e) => setBookingInfo({...bookingInfo, phone: e.target.value})}
              className="flex-grow bg-slate-50 dark:bg-slate-900 border-none rounded-[32px] py-6 px-8 text-xl font-semibold outline-none focus:ring-2 focus:ring-[#00D1FF] dark:text-white" 
            />
          </div>
        </div>

        <div>
          <label className="block text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Email Address</label>
          <input 
            value={bookingInfo.email} 
            onChange={(e) => setBookingInfo({...bookingInfo, email: e.target.value})}
            className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-[32px] py-6 px-8 text-xl font-semibold outline-none focus:ring-2 focus:ring-[#00D1FF] dark:text-white" 
          />
        </div>

        <div>
          <label className="block text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Gender</label>
          <div className="flex gap-10">
             <label className="flex items-center gap-4 cursor-pointer group">
                <div onClick={() => setBookingInfo({...bookingInfo, gender: 'Male'})} className={`w-10 h-10 rounded-full border-4 flex items-center justify-center transition-all ${bookingInfo.gender === 'Male' ? 'border-[#00D1FF]' : 'border-slate-200 dark:border-slate-800 group-hover:border-slate-300 dark:group-hover:border-slate-700'}`}>
                  {bookingInfo.gender === 'Male' && <div className="w-5 h-5 bg-[#00D1FF] rounded-full"></div>}
                </div>
                <span className={`text-xl font-semibold transition-colors ${bookingInfo.gender === 'Male' ? 'text-[#00D1FF]' : 'text-slate-500 dark:text-slate-500'}`}>Male</span>
             </label>
             <label className="flex items-center gap-4 cursor-pointer group">
                <div onClick={() => setBookingInfo({...bookingInfo, gender: 'Female'})} className={`w-10 h-10 rounded-full border-4 flex items-center justify-center transition-all ${bookingInfo.gender === 'Female' ? 'border-[#00D1FF]' : 'border-slate-200 dark:border-slate-800 group-hover:border-slate-300 dark:group-hover:border-slate-700'}`}>
                  {bookingInfo.gender === 'Female' && <div className="w-5 h-5 bg-[#00D1FF] rounded-full"></div>}
                </div>
                <span className={`text-xl font-semibold transition-colors ${bookingInfo.gender === 'Female' ? 'text-[#00D1FF]' : 'text-slate-500 dark:text-slate-500'}`}>Female</span>
             </label>
          </div>
        </div>
      </div>

      <div className="mt-auto p-8 bg-white dark:bg-slate-950 border-t border-slate-50 dark:border-slate-900">
        <Button onClick={onBack} className="h-16 rounded-[28px] shadow-xl shadow-cyan-100 dark:shadow-none">Save & Continue</Button>
      </div>
    </div>
  );
};

export default BookingDetails;
