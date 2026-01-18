
import React, { useState } from 'react';
import Button from '../components/Button';

interface NotificationsListProps {
  onBack: () => void;
  onSettings: () => void;
}

const NotificationsList: React.FC<NotificationsListProps> = ({ onBack, onSettings }) => {
  const [isEmpty, setIsEmpty] = useState(false); // Set to true to view empty state

  const notifications = [
    { title: 'Extra Discount with China Merchants Bank Credit Car', desc: 'Extra Discount with China Merchants Bank...', time: '1 hours ago', type: 'discount' },
    { title: 'Payment Successful', desc: 'You have successfully purchased a travel...', time: '2 hours ago', type: 'success' },
    { title: 'This Month’s Limited-Time Offer!', desc: 'Big discounts this month!', time: '8 hours ago', type: 'discount' }
  ];

  if (isEmpty) {
    return (
      <div className="flex flex-col h-screen bg-white">
        <div className="flex items-center p-6 pt-10">
          <button onClick={onBack} className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-800">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <span className="flex-grow text-center font-bold text-lg text-slate-800 pr-10">Notifications</span>
        </div>
        <div className="flex-grow flex flex-col items-center justify-center p-12 text-center">
           <div className="relative w-64 h-64 mb-10 flex items-center justify-center">
             <div className="absolute inset-0 bg-cyan-50/50 rounded-full scale-110 animate-pulse"></div>
             <div className="relative w-48 h-48 bg-white rounded-[40px] shadow-2xl flex items-center justify-center border border-slate-50">
                <svg className="w-24 h-24 text-[#00D1FF] opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-dashed border-[#00D1FF] rounded-full animate-spin-slow opacity-20"></div>
             </div>
           </div>
           <h2 className="text-2xl font-bold text-slate-800 mb-4">No Notifications</h2>
           <p className="text-slate-400 text-sm mb-12 max-w-[260px] leading-relaxed">
             You have no notifications at the moment. Updates and promotions will appear here.
           </p>
           <Button onClick={onSettings} className="px-10 h-16 rounded-[24px]">Notification Settings</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex items-center p-6 pt-10 border-b border-slate-50">
        <button onClick={onBack} className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-800">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="flex-grow text-center font-bold text-lg text-slate-800 pr-10">Notifications</span>
      </div>

      <div className="flex-grow overflow-y-auto no-scrollbar">
        <div className="px-6 py-6">
           <div className="flex items-center justify-between mb-6">
             <h3 className="text-base font-black text-slate-800 uppercase tracking-widest">Today</h3>
             <button onClick={() => setIsEmpty(true)} className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">Clear All</button>
           </div>
           <div className="space-y-4">
             {notifications.map((n, i) => (
               <div key={i} className="flex gap-4 p-5 bg-white hover:bg-slate-50 rounded-[32px] transition-all cursor-pointer border border-slate-50 shadow-sm active:scale-[0.98]">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${n.type === 'discount' ? 'bg-cyan-50 text-[#00D1FF]' : 'bg-blue-50 text-blue-500'}`}>
                    {n.type === 'discount' ? (
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 7h.01M7 3h10c.55 0 1 .45 1 1v16l-6-4-6 4V4c0-.55.45-1 1-1z" strokeWidth="2"/></svg>
                    ) : (
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2"/></svg>
                    )}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-slate-700 text-sm leading-snug mb-1">{n.title}</h4>
                    <p className="text-[11px] text-slate-400 mb-2 leading-tight">{n.desc}</p>
                    <span className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">{n.time}</span>
                  </div>
               </div>
             ))}
           </div>

           <h3 className="text-base font-black text-slate-800 mt-12 mb-6 uppercase tracking-widest">Yesterday</h3>
           <div className="space-y-4 opacity-70">
              <div className="flex gap-4 p-5 rounded-[32px] border border-transparent">
                 <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-300 flex items-center justify-center">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2"/></svg>
                 </div>
                 <div className="flex-grow">
                    <h4 className="font-bold text-slate-600 text-sm">Earlier Notification Item</h4>
                    <p className="text-[11px] text-slate-400">Previous alerts or system updates...</p>
                    <span className="text-[10px] text-slate-300 font-bold uppercase">Yesterday</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsList;
