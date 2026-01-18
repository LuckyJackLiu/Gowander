
import React, { useState } from 'react';
import Button from '../components/Button';

interface CalendarPageProps {
  onBack: () => void;
  onNext: () => void;
}

const CalendarPage: React.FC<CalendarPageProps> = ({ onBack, onNext }) => {
  const [selectedStart, setSelectedStart] = useState<number | null>(1);
  const [selectedEnd, setSelectedEnd] = useState<number | null>(4);
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [currentMonth, setCurrentMonth] = useState('MARCH');
  const [currentYear, setCurrentYear] = useState(2026);

  const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
  const years = Array.from({ length: 11 }, (_, i) => 2024 + i);

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const baseDates = [
    { v: 27, m: 'prev' }, { v: 28, m: 'prev' }, { v: 1, m: 'curr' }, { v: 2, m: 'curr' }, { v: 3, m: 'curr' }, { v: 4, m: 'curr' }, { v: 5, m: 'curr' },
    { v: 6, m: 'curr' }, { v: 7, m: 'curr' }, { v: 8, m: 'curr' }, { v: 9, m: 'curr' }, { v: 10, m: 'curr' }, { v: 11, m: 'curr' }, { v: 12, m: 'curr' },
    { v: 13, m: 'curr' }, { v: 14, m: 'curr' }, { v: 15, m: 'curr' }, { v: 16, m: 'curr' }, { v: 17, m: 'curr' }, { v: 18, m: 'curr' }, { v: 19, m: 'curr' },
    { v: 20, m: 'curr' }, { v: 21, m: 'curr' }, { v: 22, m: 'curr' }, { v: 23, m: 'curr' }, { v: 24, m: 'curr' }, { v: 25, m: 'curr' }, { v: 26, m: 'curr' },
    { v: 27, m: 'curr' }, { v: 28, m: 'curr' }, { v: 29, m: 'curr' }, { v: 30, m: 'curr' }, { v: 31, m: 'curr' }, { v: 1, m: 'next' }, { v: 2, m: 'next' }
  ];

  const handleDateClick = (val: number, type: string) => {
    if (type !== 'curr') return;

    if (!selectedStart || (selectedStart && selectedEnd)) {
      setSelectedStart(val);
      setSelectedEnd(null);
    } else {
      if (val < selectedStart) {
        setSelectedStart(val);
        setSelectedEnd(null);
      } else if (val === selectedStart) {
        setSelectedStart(null);
      } else {
        setSelectedEnd(val);
      }
    }
  };

  const dates = baseDates.map(d => {
    let sel: 'start' | 'end' | 'mid' | undefined = undefined;
    if (d.m === 'curr') {
      if (d.v === selectedStart) sel = 'start';
      else if (d.v === selectedEnd) sel = 'end';
      else if (selectedStart && selectedEnd && d.v > selectedStart && d.v < selectedEnd) sel = 'mid';
    }
    return { ...d, sel };
  });

  const duration = selectedStart && selectedEnd ? selectedEnd - selectedStart : 0;

  return (
    <div className="flex flex-col h-full bg-[#FDFDFD] dark:bg-slate-900 transition-colors relative overflow-hidden">
      <div className="relative flex items-center justify-center px-6 pt-10 pb-6 flex-shrink-0">
        <button 
          onClick={onBack} 
          className="absolute left-6 w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-800 dark:text-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-50 dark:border-slate-700 active:scale-90 transition-all"
        >
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <h1 className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tighter uppercase">Booking Dates</h1>
      </div>

      <div className="flex-grow flex flex-col items-center justify-start pt-4 px-6 overflow-y-auto no-scrollbar pb-[140px]">
        <div className="w-full bg-white dark:bg-slate-800/50 border border-slate-100/50 dark:border-slate-700/30 rounded-[48px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] p-8 relative">
           <div className="flex justify-between items-center mb-10 px-2">
              <div 
                onClick={() => {setShowMonthPicker(true); setShowYearPicker(false);}}
                className="flex items-center gap-2 cursor-pointer group"
              >
                 <span className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tighter uppercase group-hover:text-[#00C8FF] transition-colors">{currentMonth}</span>
                 <svg className="w-5 h-5 text-[#00C8FF] group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3.5"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div 
                onClick={() => {setShowYearPicker(true); setShowMonthPicker(false);}}
                className="flex items-center gap-2 cursor-pointer group"
              >
                 <span className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tighter group-hover:text-[#00C8FF] transition-colors">{currentYear}</span>
                 <svg className="w-5 h-5 text-[#00C8FF] group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3.5"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
           </div>

           <div className="grid grid-cols-7 gap-y-3 text-center">
              {days.map(d => <span key={d} className="text-slate-300 dark:text-slate-600 text-[10px] font-black uppercase tracking-widest mb-4">{d}</span>)}
              {dates.map((d, i) => (
                <div 
                  key={i} 
                  className={`relative py-3 flex items-center justify-center cursor-pointer group`}
                  onClick={() => handleDateClick(d.v, d.m)}
                >
                   {d.sel === 'mid' && (
                     <div className="absolute inset-y-1.5 inset-x-0 bg-cyan-50/60 dark:bg-cyan-900/30 z-0"></div>
                   )}
                   {d.sel === 'start' && selectedEnd && (
                     <div className="absolute inset-y-1.5 left-1/2 right-0 bg-cyan-50/60 dark:bg-cyan-900/30 z-0"></div>
                   )}
                   {d.sel === 'end' && selectedStart && (
                     <div className="absolute inset-y-1.5 right-1/2 left-0 bg-cyan-50/60 dark:bg-cyan-900/30 z-0"></div>
                   )}

                   <span className={`relative z-10 w-11 h-11 flex items-center justify-center rounded-full text-sm font-black transition-all duration-300 ${
                     d.m !== 'curr' ? 'text-slate-100 dark:text-slate-800' : 
                     d.sel === 'start' || d.sel === 'end' ? 'bg-[#00C8FF] text-white shadow-[0_10px_20px_rgba(0,200,255,0.4)] scale-110' : 
                     d.sel === 'mid' ? 'text-[#00C8FF] dark:text-[#00C8FF]' : 'text-slate-800 dark:text-slate-200 group-hover:bg-slate-50 dark:group-hover:bg-slate-700'
                   }`}>
                      {d.v}
                   </span>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Unified Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[1000] h-[110px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 flex items-start pt-4 px-8 pb-[safe-area-inset-bottom]">
        <div className="flex-grow flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-[10px] text-slate-300 dark:text-slate-600 font-black uppercase tracking-[0.2em] mb-0.5">Duration</p>
            <p className="text-xl font-black text-slate-800 dark:text-slate-100 tracking-tight leading-none">
               {duration > 0 ? `${duration} Nights` : 'Select dates'}
            </p>
          </div>
          
          <button 
            onClick={onNext}
            disabled={!selectedStart || !selectedEnd}
            className={`px-10 h-[58px] rounded-[30px] font-black text-lg transition-all duration-500 shadow-[0_12px_30px_rgba(0,200,255,0.3)] ${
              selectedStart && selectedEnd 
                ? 'bg-[#00C8FF] text-white active:scale-95 opacity-100' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-300 dark:text-slate-600 opacity-50 cursor-not-allowed'
            }`}
          >
            Confirm Selection
          </button>
        </div>
      </div>

      {/* Overlays */}
      {showMonthPicker && (
        <div className="absolute inset-0 z-[2000] bg-black/40 backdrop-blur-md animate-fade-in flex items-center justify-center p-6">
            <div className="bg-white dark:bg-slate-800 w-full max-w-sm rounded-[40px] p-8 shadow-2xl animate-slide-up">
                <h3 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-6 uppercase text-center">Select Month</h3>
                <div className="grid grid-cols-3 gap-4">
                    {months.map(m => (
                        <button 
                            key={m}
                            onClick={() => {setCurrentMonth(m); setShowMonthPicker(false);}}
                            className={`py-4 rounded-2xl text-xs font-black transition-all ${currentMonth === m ? 'bg-[#00C8FF] text-white' : 'bg-slate-50 dark:bg-slate-700 text-slate-400 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-600'}`}
                        >
                            {m.substring(0, 3)}
                        </button>
                    ))}
                </div>
                <button onClick={() => setShowMonthPicker(false)} className="w-full mt-8 py-4 text-slate-400 font-bold uppercase text-[10px] tracking-widest">Cancel</button>
            </div>
        </div>
      )}
      {showYearPicker && (
        <div className="absolute inset-0 z-[2000] bg-black/40 backdrop-blur-md animate-fade-in flex items-center justify-center p-6">
            <div className="bg-white dark:bg-slate-800 w-full max-w-sm rounded-[40px] p-8 shadow-2xl animate-slide-up max-h-[60vh] flex flex-col">
                <h3 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-6 uppercase text-center">Select Year</h3>
                <div className="overflow-y-auto no-scrollbar space-y-3">
                    {years.map(y => (
                        <button 
                            key={y}
                            onClick={() => {setCurrentYear(y); setShowYearPicker(false);}}
                            className={`w-full py-5 rounded-2xl text-lg font-black transition-all ${currentYear === y ? 'bg-[#00C8FF] text-white shadow-lg' : 'bg-slate-50 dark:bg-slate-700 text-slate-400 dark:text-slate-400'}`}
                        >
                            {y}
                        </button>
                    ))}
                </div>
                <button onClick={() => setShowYearPicker(false)} className="w-full mt-6 py-4 text-slate-400 font-bold uppercase text-[10px] tracking-widest">Cancel</button>
            </div>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
