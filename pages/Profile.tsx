
import React from 'react';
import { AuthStep } from '../types';

interface ProfileProps {
  onNavigate: (step: AuthStep) => void;
  onLogout: () => void;
  theme: string;
}

const Profile: React.FC<ProfileProps> = ({ onNavigate, onLogout, theme }) => {
  const avatarUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBbWenkKMDHsMo9_UUtlxN-KFrL-U4bTDNw&s";

  const menuItems = [
    { id: 'Personal Information', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', step: 'personal-info' as AuthStep },
    { id: 'Change Password', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', step: 'change-password-method' as AuthStep },
    { id: 'Notifications & Sounds', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9', step: 'notification-settings' as AuthStep },
    { id: 'Theme', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z', step: 'theme-selection' as AuthStep, extra: theme.charAt(0).toUpperCase() + theme.slice(1) },
    { id: 'Address', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', step: 'addresses' as AuthStep },
  ];

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900 transition-colors">
      <div className="p-8 pb-4">
        <div className="bg-[#F8FAFC] dark:bg-slate-800 rounded-[40px] p-6 shadow-sm flex items-center gap-5 border border-slate-50 dark:border-slate-700">
           <div className="relative">
             <img src={avatarUrl} className="w-20 h-20 rounded-full object-cover border-4 border-white dark:border-slate-900 shadow-xl" />
           </div>
           <div className="flex-grow">
             <h2 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">Jack Lau</h2>
             <p className="text-sm font-medium text-slate-400">0123456789@gmail.com</p>
           </div>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto px-8 no-scrollbar pb-24">
        <div className="py-6">
           <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-[0.2em] mb-8">General</h3>
           <div className="space-y-2">
             {menuItems.map(item => (
               <div key={item.id} onClick={() => onNavigate(item.step)} className="flex items-center gap-5 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 group cursor-pointer transition-all active:scale-[0.98]">
                  <div className="w-12 h-12 rounded-full border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-[#00D1FF] group-hover:border-cyan-100 bg-white dark:bg-slate-900 transition-colors shadow-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d={item.icon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="flex-grow font-bold text-slate-700 dark:text-slate-200 text-lg">{item.id}</span>
                  {item.extra && <span className="text-sm font-bold text-slate-400 mr-2">{item.extra}</span>}
                  <svg className="w-5 h-5 text-slate-200 dark:text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M9 5l7 7-7 7"/></svg>
               </div>
             ))}
           </div>
           <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-[0.2em] mt-12 mb-8">Support</h3>
           <div className="space-y-2">
              <div onClick={() => onNavigate('help-support')} className="flex items-center gap-5 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 group cursor-pointer transition-all active:scale-[0.98]">
                  <div className="w-12 h-12 rounded-full border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 bg-white dark:bg-slate-900 shadow-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <span className="flex-grow font-bold text-slate-700 dark:text-slate-200 text-lg">Help & Support</span>
              </div>
              <div onClick={onLogout} className="flex items-center gap-5 p-3 rounded-2xl hover:bg-red-50 dark:hover:bg-red-900/10 group cursor-pointer transition-all active:scale-[0.98]">
                  <div className="w-12 h-12 rounded-full border border-red-50 flex items-center justify-center text-red-400 bg-white dark:bg-slate-900 shadow-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
                  </div>
                  <span className="flex-grow font-bold text-red-500 text-lg">Log Out</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
