
import React, { useState } from 'react';
import { AuthStep, TravelItem } from '../types';
import { Calendar, MapPin, ArrowLeft } from 'lucide-react';

interface MyBookingsProps {
  onBack: () => void;
  onNavigate: (s: AuthStep) => void;
  onSelectItem: (item: TravelItem) => void;
}

const MyBookings: React.FC<MyBookingsProps> = ({ onBack, onSelectItem }) => {
  const [activeTab, setActiveTab] = useState<'Upcoming' | 'History'>('Upcoming');

  const upcoming: TravelItem[] = [
    { id: 'up1', title: 'Mataking Island Resort', location: 'Semporna, Sabah', price: 'RM209.3', rating: 4.8, image: 'https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&q=80&w=800', category: 'Nature', dates: 'Jan 16 — Jan 18', progress: 80, status: 'Starting Soon' }
  ];

  const history: TravelItem[] = [
    { id: 'h1', title: 'The Westin Kuala Lumpur', location: 'Kuala Lumpur', price: 'RM670', rating: 4.8, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800', category: 'Hotel', dates: 'Jan 01 — Jan 05', status: 'Completed' }
  ];

  const currentList = activeTab === 'Upcoming' ? upcoming : history;

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC] dark:bg-slate-950 transition-colors duration-300 relative">
      <div className="flex items-center p-6 pt-10 flex-shrink-0 z-10 bg-transparent">
        <button onClick={onBack} className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-800 dark:text-slate-100 shadow-sm active:scale-90 transition-all">
           <ArrowLeft size={20} strokeWidth={2.5} />
        </button>
        <span className="flex-grow text-center font-bold text-lg text-slate-800 dark:text-slate-100 pr-10">My Bookings</span>
      </div>
      <div className="px-6 mb-4 flex-shrink-0">
        <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-full shadow-sm border border-slate-100 dark:border-slate-800">
          <button onClick={() => setActiveTab('Upcoming')} className={`flex-1 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'Upcoming' ? 'bg-[#00C8FF] text-white shadow-md' : 'text-slate-400 dark:text-slate-600'}`}>Upcoming</button>
          <button onClick={() => setActiveTab('History')} className={`flex-1 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'History' ? 'bg-[#00C8FF] text-white shadow-md' : 'text-slate-400 dark:text-slate-600'}`}>History</button>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto px-6 pt-2 no-scrollbar pb-[100px]">
        {currentList.length > 0 ? (
          <div className="space-y-4">
            {currentList.map(item => (
              <div key={item.id} onClick={() => onSelectItem(item)} className="bg-white dark:bg-slate-900 rounded-[20px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-50 dark:border-slate-800 relative animate-slide-up">
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight ${item.status === 'Completed' ? 'bg-green-50 text-green-500 dark:bg-green-900/20' : 'bg-cyan-50 text-[#00C8FF] dark:bg-cyan-900/20'}`}>
                  {item.status === 'Completed' ? 'Completed' : 'Ongoing'}
                </div>
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-[16px] overflow-hidden bg-[#F5F5F5] flex-shrink-0">
                    <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
                  </div>
                  <div className="flex-grow min-w-0 pr-14 py-0.5">
                    <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm truncate leading-tight mb-1">{item.title}</h3>
                    <div className="flex items-center gap-1 mb-2">
                       <MapPin size={10} className="text-slate-300" />
                       <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium truncate">{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <span className="text-[#00C8FF] font-extrabold text-sm">{item.price}</span>
                       <span className="text-slate-300 text-[10px] font-medium">/ person</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                  {activeTab === 'Upcoming' ? (
                    <div className="flex-grow pr-4">
                      <div className="flex justify-between items-center mb-1.5">
                         <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Progress</span>
                         <span className="text-[10px] text-[#00C8FF] font-black">{item.progress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                         <div className="h-full bg-[#00C8FF] transition-all duration-1000" style={{ width: `${item.progress}%` }}></div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                       <Calendar size={12} className="text-slate-300" />
                       <span className="text-[11px] text-slate-400 font-medium">{item.dates}</span>
                    </div>
                  )}
                  <div className="flex items-center -space-x-2">
                    {[1, 2, 3].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/150?u=user${item.id}${i}`} className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 object-cover shadow-sm" alt="av" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
             <div className="w-20 h-20 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-sm mb-4">
                <Calendar size={32} className="text-slate-200" />
             </div>
             <p className="text-slate-400 font-medium">No bookings found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
