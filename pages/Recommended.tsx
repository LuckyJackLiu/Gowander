
import React from 'react';
import { TravelItem } from '../types';
import { Heart } from 'lucide-react';

interface RecommendedProps {
  onBack: () => void;
  onSelectItem: (item: TravelItem) => void;
  // Added missing props to fix type mismatch in App.tsx
  onToggleFavorite: (item: TravelItem) => void;
  isFavorited: (id: string) => boolean;
}

const Recommended: React.FC<RecommendedProps> = ({ onBack, onSelectItem, onToggleFavorite, isFavorited }) => {
  const recommendations: TravelItem[] = [
    { id: 'rec1', title: 'Cameron Highland Park', location: 'Malaysia', price: 'RM98', rating: 4.8, image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=400', category: 'Nature' },
    { id: 'rec2', title: 'Langkawi National Park', location: 'Langkawi', price: 'RM198', rating: 4.8, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=400', category: 'Nature' },
    { id: 'rec3', title: 'Historical Malacca City', location: 'Malacca', price: 'RM87.5', rating: 4.8, image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&q=80&w=400', category: 'Historical' },
    { id: 'rec4', title: 'Genting Highland Park', location: 'Malaysia', price: 'RM280', rating: 4.8, image: 'https://images.unsplash.com/photo-1596422846543-b5c64863e939?auto=format&fit=crop&q=80&w=400', category: 'Theme Park' },
    { id: 'rec5', title: 'Penang Hill Resort', location: 'Penang', price: 'RM130', rating: 4.8, image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=400', category: 'Nature' },
  ];

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex items-center p-6 pt-10 mb-4">
        <button onClick={onBack} className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-800">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="flex-grow text-center font-bold text-lg text-slate-800 pr-12 tracking-tight">Recommended</span>
      </div>

      <div className="flex-grow overflow-y-auto px-6 pb-10 no-scrollbar">
         <div className="space-y-6">
            {recommendations.map(item => (
               <div key={item.id} onClick={() => onSelectItem(item)} className="flex bg-white rounded-[32px] overflow-hidden border border-slate-50 p-4 shadow-sm cursor-pointer hover:bg-slate-50 transition-colors group">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <img src={item.image} className="w-full h-full rounded-2xl object-cover" alt={item.title} />
                    {/* Fix: Added heart button to support favorite functionality passed from App.tsx */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(item);
                      }}
                      className={`absolute top-1.5 right-1.5 w-7 h-7 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all active:scale-90 ${isFavorited(item.id) ? 'text-red-500' : 'text-white'}`}
                    >
                      <Heart size={14} fill={isFavorited(item.id) ? "currentColor" : "none"} strokeWidth={2.5} />
                    </button>
                  </div>
                  <div className="ml-5 flex-grow py-1 flex flex-col justify-between">
                     <div>
                        <div className="flex justify-between items-start mb-0.5">
                           <h3 className="font-bold text-slate-800 text-base leading-tight group-hover:text-[#00D1FF] transition-colors">{item.title}</h3>
                           <span className="text-[11px] font-bold text-orange-400 flex items-center gap-0.5 whitespace-nowrap">★ {item.rating}</span>
                        </div>
                        <p className="text-[10px] text-slate-400 flex items-center gap-0.5 mb-2">
                           <svg className="w-2.5 h-2.5 text-[#00D1FF]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
                           {item.location}
                        </p>
                     </div>
                     <div className="flex items-center justify-between">
                        <div>
                           <span className="text-[#00D1FF] font-black text-lg">{item.price}</span>
                           <span className="text-slate-300 text-[10px] ml-1 font-bold">/ Person</span>
                        </div>
                        <svg className="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default Recommended;
