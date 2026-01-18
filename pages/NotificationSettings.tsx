
import React, { useState } from 'react';

interface NotificationSettingsProps {
  onBack: () => void;
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({ onBack }) => {
  const [settings, setSettings] = useState({
    promotions: true,
    newDeals: false,
    announcements: true,
    payments: false,
    emailPromotions: true,
    instructorAnnouncements: true
  });

  const Toggle = ({ active, onToggle }: { active: boolean, onToggle: () => void }) => (
    <div 
      onClick={onToggle}
      className={`w-14 h-8 rounded-full transition-all relative cursor-pointer ${active ? 'bg-[#00D1FF]' : 'bg-slate-100 dark:bg-slate-800'}`}
    >
      <div className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-all ${active ? 'left-7' : 'left-1'}`}></div>
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="flex items-center p-6 pt-10 border-b border-slate-50 dark:border-slate-800 flex-shrink-0">
        <button onClick={onBack} className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-800 dark:text-slate-100 active:scale-90 transition-all">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="flex-grow text-center font-black text-2xl text-slate-800 dark:text-slate-100 pr-10 tracking-tight">Notification Settings</span>
      </div>

      <div className="p-8 space-y-12 flex-grow overflow-y-auto no-scrollbar">
        <section>
          <h3 className="text-xs font-black text-slate-300 dark:text-slate-600 mb-8 uppercase tracking-[0.2em]">Application Alerts</h3>
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-black text-lg text-slate-700 dark:text-slate-200">Promotions</span>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight mt-0.5">Discounts & travel offers</p>
              </div>
              <Toggle active={settings.promotions} onToggle={() => setSettings({...settings, promotions: !settings.promotions})} />
            </div>
            <div className="flex items-center justify-between border-t border-slate-50 dark:border-slate-900 pt-8">
              <div>
                <span className="font-black text-lg text-slate-700 dark:text-slate-200">New Deals</span>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight mt-0.5">Flash sales for members</p>
              </div>
              <Toggle active={settings.newDeals} onToggle={() => setSettings({...settings, newDeals: !settings.newDeals})} />
            </div>
            <div className="flex items-center justify-between border-t border-slate-50 dark:border-slate-900 pt-8">
              <div>
                <span className="font-black text-lg text-slate-700 dark:text-slate-200">Announcements</span>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight mt-0.5">Travel news & updates</p>
              </div>
              <Toggle active={settings.announcements} onToggle={() => setSettings({...settings, announcements: !settings.announcements})} />
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xs font-black text-slate-300 dark:text-slate-600 mb-8 uppercase tracking-[0.2em]">Email Preferences</h3>
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-black text-lg text-slate-700 dark:text-slate-200">Newsletters</span>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight mt-0.5">Monthly travel guides</p>
              </div>
              <Toggle active={settings.emailPromotions} onToggle={() => setSettings({...settings, emailPromotions: !settings.emailPromotions})} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NotificationSettings;
