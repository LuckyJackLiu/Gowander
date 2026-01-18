
import React, { useState } from 'react';

interface LanguageSelectionProps {
  onBack: () => void;
}

const LanguageSelection: React.FC<LanguageSelectionProps> = ({ onBack }) => {
  const [selected, setSelected] = useState('English (United States)');
  const languages = [
    { title: 'Recommended', items: ['English (United States)', 'English (United Kingdom)', 'Bengali'] },
    { title: 'Other Languages', items: ['Indonesian', 'Japanese', 'Russian', 'Chinese', 'Italian'] }
  ];

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex items-center p-6 pt-10 mb-4">
        <button onClick={onBack} className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-800">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="flex-grow text-center font-bold text-lg text-slate-800 pr-10">Language</span>
      </div>

      <div className="px-6 mb-10">
        <div className="relative">
          <div className="absolute inset-y-0 left-5 flex items-center text-slate-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" strokeWidth="2"/><path d="M21 21l-4.35-4.35" strokeWidth="2"/></svg>
          </div>
          <input 
            type="text" 
            placeholder="Search languages..." 
            className="w-full bg-white border border-slate-200 py-4 pl-14 pr-6 rounded-[24px] text-lg outline-none focus:ring-2 focus:ring-[#00D1FF] transition-all"
          />
        </div>
      </div>

      <div className="flex-grow overflow-y-auto px-8 no-scrollbar pb-10">
        {languages.map(section => (
          <div key={section.title} className="mb-10">
             <h3 className="text-slate-300 font-bold mb-6">{section.title}</h3>
             <div className="space-y-8">
               {section.items.map(lang => (
                 <label key={lang} className="flex items-center justify-between cursor-pointer">
                    <span className="text-xl font-bold text-slate-600">{lang}</span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selected === lang ? 'border-[#00D1FF]' : 'border-slate-200'}`}>
                       {selected === lang && <div className="w-3.5 h-3.5 bg-[#00D1FF] rounded-full"></div>}
                    </div>
                    <input type="radio" className="hidden" onChange={() => setSelected(lang)} checked={selected === lang} />
                 </label>
               ))}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelection;
