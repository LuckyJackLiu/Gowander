
import React from 'react';
import { TravelItem } from '../types';
import { Heart } from 'lucide-react';

interface GroupToursProps {
  onBack: () => void;
  onSelectItem: (item: TravelItem) => void;
  // Added missing props to fix type mismatch in App.tsx
  onToggleFavorite: (item: TravelItem) => void;
  isFavorited: (id: string) => boolean;
}

const GroupTours: React.FC<GroupToursProps> = ({ onBack, onSelectItem, onToggleFavorite, isFavorited }) => {
  const tours: TravelItem[] = [
    { id: 'gt1', title: 'Legoland Malaysia', location: 'Johor Bahru, Malaysia', price: 'RM215', rating: 4.8, image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=400', category: 'Tour', progress: 80, dates: 'Feb 23 — Feb 28' },
    { id: 'gt2', title: 'Semporna Blue Resort', location: 'Semporna, Malaysia', price: 'RM150', rating: 4.8, image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=400', category: 'Tour', progress: 80, dates: 'Feb 23 — Feb 28' },
    { id: 'gt3', title: 'Kota Kinabalu Floating Mosque', location: 'Kota Kinabalu, Sabah', price: 'RM180', rating: 4.8, image: 'https://images.unsplash.com/photo-1596422846543-b5c64863e939?auto=format&fit=crop&q=80&w=400', category: 'Tour', progress: 80, dates: 'Feb 23 — Feb 28' },
    { id: 'gt4', title: 'Batu Caves', location: 'Selangor, Malaysia', price: 'RM80', rating: 4.8, image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&q=80&w=400', category: 'Tour', progress: 80, dates: 'Feb 23 — Feb 28' },
  ];

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex items-center p-6 pt-10">
        <button onClick={onBack} className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-800 active:bg-slate-100 transition-colors">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="flex-grow text-center font-bold text-lg text-slate-800 pr-12 tracking-tight">Group Tours</span>
      </div>

      <div className="flex-grow overflow-y-auto px-6 pb-10 no-scrollbar">
        <div className="space-y-6">
            {tours.map(item => (
                <div key={item.id} onClick={() => onSelectItem(item)} className="flex bg-white rounded-[32px] overflow-hidden border border-slate-50 p-4 shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
                    <div className="relative w-32 h-32 flex-shrink-0">
                        <img src={item.image} className="w-full h-full object-cover rounded-2xl" alt={item.title} />
                        {/* Fix: Hook up favorite logic with the provided props */}
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleFavorite(item);
                          }}
                          className={`absolute top-2 right-2 w-8 h-8 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all active:scale-90 ${isFavorited(item.id) ? 'text-red-500' : 'text-white'}`}
                        >
                          <Heart size={16} fill={isFavorited(item.id) ? "currentColor" : "none"} strokeWidth={2.5} />
                        </button>
                    </div>
                    <div className="ml-4 flex-grow flex flex-col justify-between py-1">
                        <div>
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-slate-800 text-base leading-tight flex-grow">{item.title}</h3>
                                <div className="flex items-center gap-0.5 text-xs font-bold text-orange-400">★ {item.rating}</div>
                            </div>
                            <p className="text-[10px] text-slate-400 flex items-center gap-0.5 mt-1 capitalize"><svg className="w-3 h-3 text-[#00D1FF]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>{item.location}</p>
                        </div>
                        
                        <div className="mt-2">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="flex -space-x-2">
                                    {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/100?u=${item.id}${i}`} className="w-6 h-6 rounded-full border-2 border-white" />)}
                                    <div className="w-6 h-6 rounded-full bg-slate-800 border-2 border-white flex items-center justify-center text-[8px] text-white font-bold">50+</div>
                                </div>
                                <span className="text-[#00D1FF] font-black text-xs ml-auto">{item.progress}%</span>
                            </div>
                            <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-[#00D1FF]" style={{ width: `${item.progress}%` }}></div>
                            </div>
                            <div className="flex items-center gap-1 mt-2 text-[10px] text-slate-400">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeWidth="2"/></svg>
                                {item.dates}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GroupTours;
