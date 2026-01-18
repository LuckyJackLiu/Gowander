
import React from 'react';
import { BookingInfo } from '../types';
import Button from '../components/Button';

interface PersonalInfoProps {
  onBack: () => void;
  bookingInfo: BookingInfo;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ onBack, bookingInfo }) => {
  const avatarUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBbWenkKMDHsMo9_UUtlxN-KFrL-U4bTDNw&s";

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="flex items-center p-6 pt-10 border-b border-slate-50 dark:border-slate-800 flex-shrink-0">
        <button onClick={onBack} className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-800 dark:text-slate-100 active:scale-90 transition-all">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="flex-grow text-center font-black text-2xl text-slate-800 dark:text-slate-100 pr-12 tracking-tight">My Profile</span>
      </div>

      <div className="flex-grow overflow-y-auto px-8 no-scrollbar pt-10 pb-32">
        <div className="flex flex-col items-center mb-16">
           <div className="relative">
              <div className="w-40 h-40 rounded-full p-2 border-2 border-dashed border-[#00D1FF]/40 mb-2 bg-[#F5F5F5] dark:bg-slate-800">
                <img src={avatarUrl} className="w-full h-full rounded-full object-cover shadow-2xl" alt="avatar" />
              </div>
              <button className="absolute bottom-4 right-2 w-11 h-11 bg-[#00D1FF] rounded-full flex items-center justify-center text-white border-4 border-white dark:border-slate-900 shadow-xl active:scale-90 transition-all">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><circle cx="12" cy="13" r="3"/></svg>
              </button>
           </div>
           <h3 className="text-xl font-black text-slate-800 dark:text-white mt-4">Profile Photo</h3>
           <p className="text-xs font-bold text-slate-300 dark:text-slate-600 uppercase tracking-widest mt-1">Tap to update</p>
        </div>

        <div className="space-y-12">
           <div>
              <label className="block text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-[0.2em] mb-4">Full Name</label>
              <input 
                defaultValue={bookingInfo.name}
                className="w-full bg-[#F8FAFC] dark:bg-slate-900 border-none rounded-[28px] py-6 px-8 text-xl font-black text-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-[#00D1FF] transition-all" 
              />
           </div>

           <div>
              <label className="block text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-[0.2em] mb-4">Email Address</label>
              <input 
                defaultValue={bookingInfo.email}
                className="w-full bg-[#F8FAFC] dark:bg-slate-900 border-none rounded-[28px] py-6 px-8 text-xl font-black text-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-[#00D1FF]" 
              />
           </div>

           <div>
              <label className="block text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-[0.2em] mb-4">Phone Contact</label>
              <div className="flex gap-4">
                 <div className="bg-[#F8FAFC] dark:bg-slate-900 rounded-[28px] py-6 px-6 flex items-center gap-2 font-black text-slate-700 dark:text-slate-200 border border-transparent">
                   <img src="https://flagcdn.com/w20/my.png" className="w-6 h-4 rounded-sm" alt="MY" />
                   <span className="text-lg">+60</span>
                 </div>
                 <input 
                  defaultValue={bookingInfo.phone}
                  className="flex-grow bg-[#F8FAFC] dark:bg-slate-900 border-none rounded-[28px] py-6 px-8 text-xl font-black text-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-[#00D1FF]" 
                />
              </div>
           </div>
        </div>
      </div>

      <div className="p-8 pb-10 bg-white dark:bg-slate-950 border-t border-slate-50 dark:border-slate-900 absolute bottom-0 left-0 right-0 z-20">
         <Button onClick={onBack} className="h-16 text-lg font-black tracking-wide rounded-[28px] shadow-xl shadow-cyan-100 dark:shadow-none">Apply Updates</Button>
      </div>
    </div>
  );
};

export default PersonalInfo;
