
import React from 'react';
import { TravelItem, AuthStep } from '../types';
import { Star, MapPin, Heart, ArrowLeft } from 'lucide-react';

interface FavoritesProps {
  onBack: () => void;
  onSelectItem: (item: TravelItem) => void;
  onNavigate: (s: AuthStep) => void;
  favorites: TravelItem[];
  onToggleFavorite: (item: TravelItem) => void;
}

const Favorites: React.FC<FavoritesProps> = ({ onBack, onSelectItem, favorites, onToggleFavorite }) => {
  return (
    <div className="flex flex-col h-full bg-[#FDFDFD] dark:bg-slate-950 transition-colors duration-300 relative">
      {/* Header */}
      <div className="flex items-center p-6 pt-12 flex-shrink-0 z-10 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <button onClick={onBack} className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-800 dark:text-slate-100 active:scale-90 transition-all">
           <ArrowLeft size={20} strokeWidth={2.5} />
        </button>
        <span className="flex-grow text-center font-bold text-xl text-slate-800 dark:text-slate-100 pr-10">Favorite</span>
      </div>

      <div className="flex-grow overflow-y-auto pt-4 pb-[120px] no-scrollbar">
        {favorites.length > 0 ? (
          /* Place list - CSS Specification implemented here */
          <div 
            className="mx-auto flex flex-row flex-wrap items-start p-0 gap-[18px] w-[326px] min-h-[901px] flex-none order-0 grow-0"
          >
            {favorites.map((item) => (
              <div 
                key={item.id} 
                onClick={() => onSelectItem(item)} 
                className="box-border flex flex-col items-center p-[10px] gap-[8px] w-[154px] h-[281px] bg-white dark:bg-slate-900 border border-[#F3F4F6] dark:border-slate-800 shadow-[0px_4px_4px_rgba(0,0,0,0.02)] rounded-[4px] flex-none order-0 grow-0 cursor-pointer transition-all active:scale-[0.98] group animate-slide-up"
              >
                {/* Image Section */}
                <div className="relative w-full h-[154px] overflow-hidden rounded-[4px] bg-[#F5F5F5] dark:bg-slate-800">
                  <img 
                    src={item.image} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={item.title} 
                  />
                  
                  {/* Heart Icon Overlay */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(item);
                    }}
                    className="absolute top-2 right-2 w-8 h-8 bg-white/40 backdrop-blur-md border border-white/20 shadow-sm rounded-full flex items-center justify-center text-red-500 transition-all active:scale-90"
                  >
                    <Heart size={16} fill="currentColor" />
                  </button>

                  {/* Rating Overlay */}
                  <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/40 backdrop-blur-md rounded-[4px] flex items-center gap-1 border border-white/10">
                     <Star size={10} className="text-yellow-400 fill-current" />
                     <span className="text-white text-[10px] font-black">{item.rating}</span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full flex flex-col items-center gap-[4px] text-center overflow-hidden">
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm tracking-tight leading-tight line-clamp-2 w-full px-1">
                    {item.title}
                  </h4>
                  
                  <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500 font-bold text-[10px] uppercase truncate w-full justify-center">
                    <MapPin size={10} className="text-[#01BFFF]" />
                    {item.location.split(',')[0]}
                  </div>

                  <div className="mt-auto pt-2 w-full flex flex-col items-center">
                    <span className="text-[#01BFFF] font-black text-lg leading-none">
                      {item.price}
                    </span>
                    <span className="text-[8px] text-slate-300 dark:text-slate-600 font-bold uppercase tracking-widest mt-1">
                      Per Person
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center opacity-30">
            <Heart size={48} className="text-slate-200 mb-4" />
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No favorites yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
