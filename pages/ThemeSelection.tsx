
import React from 'react';

interface ThemeSelectionProps {
  onBack: () => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const ThemeSelection: React.FC<ThemeSelectionProps> = ({ onBack, theme, setTheme }) => {
  const options = [
    { 
      id: 'light', 
      label: 'Light Mode', 
      icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
      desc: 'Optimized for day viewing'
    },
    { 
      id: 'dark', 
      label: 'Dark Mode', 
      icon: 'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z',
      desc: 'Easy on the eyes in low light'
    }
  ];

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-slate-900 transition-colors">
      <div className="flex items-center p-6 pt-10 mb-4">
        <button onClick={onBack} className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-800 dark:text-white">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="flex-grow text-center font-bold text-lg text-slate-800 dark:text-white pr-12">Theme Settings</span>
      </div>

      <div className="p-8 flex-grow">
        <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-2">Choose Appearance</h2>
        <p className="text-slate-400 dark:text-slate-500 mb-10 font-medium">Select a display style that works for you.</p>

        <div className="space-y-6">
          {options.map((opt) => (
            <label 
              key={opt.id} 
              className={`flex items-center gap-5 p-6 rounded-[32px] border cursor-pointer transition-all active:scale-[0.98] ${
                theme === opt.id 
                  ? 'border-[#00D1FF] bg-cyan-50/20 dark:bg-cyan-900/10 shadow-lg shadow-cyan-100/30' 
                  : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900'
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                theme === opt.id ? 'bg-[#00D1FF] text-white' : 'bg-slate-50 dark:bg-slate-800 text-slate-400'
              }`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d={opt.icon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-lg font-black text-slate-800 dark:text-white">{opt.label}</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">{opt.desc}</p>
              </div>

              <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                theme === opt.id ? 'border-[#00D1FF]' : 'border-slate-200 dark:border-slate-700'
              }`}>
                {theme === opt.id && <div className="w-4 h-4 bg-[#00D1FF] rounded-full"></div>}
              </div>
              <input 
                type="radio" 
                name="theme" 
                className="hidden" 
                checked={theme === opt.id} 
                onChange={() => setTheme(opt.id as 'light' | 'dark')}
              />
            </label>
          ))}
        </div>
      </div>

      <div className="p-8 pb-10">
        <button 
          onClick={onBack}
          className="w-full bg-[#00D1FF] text-white py-5 rounded-[32px] font-black text-lg shadow-xl shadow-cyan-100 transition-all active:scale-95"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default ThemeSelection;
