
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search as SearchIcon, X, Clock, SlidersHorizontal, Heart, MapPin, Star, Bed, Coffee, Bath, Check } from 'lucide-react';
import { TravelItem } from '../types';

interface SearchProps {
  onBack: () => void;
  onSelectItem: (item: TravelItem) => void;
  onToggleFavorite: (item: TravelItem) => void;
  isFavorited: (id: string) => boolean;
}

type SortOption = 'Lowest Price' | 'Highest Price' | 'Most Popular' | 'Top Rated' | 'Nearby';

const Search: React.FC<SearchProps> = ({ onBack, onSelectItem, onToggleFavorite, isFavorited }) => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [sortMethod, setSortMethod] = useState<SortOption>('Lowest Price');
  const sortMenuRef = useRef<HTMLDivElement>(null);

  const [recentSearches, setRecentSearches] = useState([
    { id: 1, title: 'Mataking Island, Sabah', sub: 'Any week' },
    { id: 2, title: 'Kuala Lumpur', sub: 'Any week' },
    { id: 3, title: 'Georgetown, Penang', sub: 'Any week' }
  ]);

  const database: (TravelItem & { priceVal: number; popularity: number; distance: number })[] = [
    { 
      id: 'db5', 
      title: 'The Westin Kuala Lumpur', 
      location: 'Kuala Lumpur', 
      price: 'RM 215', 
      priceVal: 215,
      rating: 4.9, 
      popularity: 95,
      distance: 2.5,
      // Updated to a high-quality reliable image of the Westin Kuala Lumpur
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200', 
      category: 'Hotel',
      beds: 2,
      hasBreakfast: true,
      hasBathtub: true
    },
    { 
      id: 'db6', 
      title: 'Imperial Lexis Kuala Lumpur', 
      location: 'Kuala Lumpur', 
      price: 'RM 174', 
      priceVal: 174,
      rating: 4.7, 
      popularity: 88,
      distance: 1.2,
      image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1200', 
      category: 'Hotel',
      beds: 1,
      hasBreakfast: true,
      hasBathtub: true
    },
    { 
      id: 'db7', 
      title: 'Melia Kuala Lumpur', 
      location: 'Kuala Lumpur', 
      price: 'RM 206', 
      priceVal: 206,
      rating: 4.8, 
      popularity: 90,
      distance: 0.5,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200', 
      category: 'Hotel',
      beds: 1,
      hasBreakfast: true,
      hasBathtub: true
    },
    { 
      id: 'db8', 
      title: 'Flixses Suites at Platinum KLCC', 
      location: 'Kuala Lumpur', 
      price: 'RM 355', 
      priceVal: 355,
      rating: 4.9, 
      popularity: 82,
      distance: 3.1,
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=1200', 
      category: 'Hotel',
      beds: 2,
      hasBreakfast: true,
      hasBathtub: true
    }
  ];

  const suggestedTrips = [
    { id: 's1', title: 'Mataking Island', location: 'Sabah', price: 'RM 450', rating: 4.8, category: 'Beach', image: 'https://images.unsplash.com/photo-1544918877-460635b6d13e?auto=format&fit=crop&q=80&w=400' },
    { id: 's2', title: 'Jalan Pasir, Jalan...', location: 'Malacca', price: 'RM 120', rating: 4.8, category: 'Temple', image: 'https://images.unsplash.com/photo-1596422846543-b5c64863e939?auto=format&fit=crop&q=80&w=400' },
    { id: 's3', title: 'Langkawi National Park', location: 'Langkawi', price: 'RM 180', rating: 4.8, category: 'Nature', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=400' },
    { id: 's4', title: 'Broga Hill', location: 'Selangor', price: 'RM 50', rating: 4.8, category: 'Hiking', image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&q=80&w=400' },
  ];

  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    const lower = query.toLowerCase();
    const results = database.filter(item => 
      item.title.toLowerCase().includes(lower) || 
      item.location.toLowerCase().includes(lower)
    );

    return results.sort((a, b) => {
      switch (sortMethod) {
        case 'Lowest Price': return a.priceVal - b.priceVal;
        case 'Highest Price': return b.priceVal - a.priceVal;
        case 'Top Rated': return b.rating - a.rating;
        case 'Most Popular': return b.popularity - a.popularity;
        case 'Nearby': return a.distance - b.distance;
        default: return 0;
      }
    });
  }, [query, sortMethod]);

  useEffect(() => {
    setIsSearching(query.trim().length > 0);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortMenuRef.current && !sortMenuRef.current.contains(event.target as Node)) {
        setIsSortMenuOpen(false);
      }
    };
    if (isSortMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSortMenuOpen]);

  const handleSortChange = (opt: SortOption) => {
    setSortMethod(opt);
    setIsSortMenuOpen(false);
  };

  const sortOptions: SortOption[] = ['Lowest Price', 'Highest Price', 'Most Popular', 'Top Rated', 'Nearby'];

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-950 transition-colors duration-300 relative">
      <div className="w-full pt-10 pb-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md z-30">
        <div className="flex items-center justify-between mb-8 px-5">
          <h1 className="text-[32px] font-black text-slate-800 dark:text-slate-100 tracking-tight leading-none">Where are you going?</h1>
          <button onClick={onBack} className="w-11 h-11 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors active:scale-90">
            <X size={20} strokeWidth={3} />
          </button>
        </div>

        <div className="px-5">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-5 flex items-center text-slate-400">
              <SearchIcon size={20} strokeWidth={2.5} />
            </div>
            <input 
              type="text" 
              placeholder="Recent Searches" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 py-4.5 pl-14 pr-14 rounded-[30px] text-lg font-medium outline-none focus:ring-2 focus:ring-[#01BFFF] dark:text-white transition-all shadow-[0_4px_15px_rgba(0,0,0,0.02)]"
            />
            <button className="absolute inset-y-0 right-5 flex items-center text-slate-500 hover:text-[#01BFFF] transition-colors">
              <SlidersHorizontal size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto no-scrollbar">
        <div className="w-full pb-24">
          {!isSearching ? (
            <div className="px-5">
              <div className="mb-10 animate-slide-up">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">Recent Searches</h2>
                  <button onClick={() => setRecentSearches([])} className="text-[#01BFFF] text-xs font-black uppercase tracking-widest">Clear All</button>
                </div>
                <div className="space-y-6">
                  {recentSearches.map((item) => (
                    <div key={item.id} className="flex items-center justify-between group">
                      <div className="flex items-center gap-4 cursor-pointer flex-grow" onClick={() => setQuery(item.title)}>
                        <div className="w-11 h-11 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-full flex items-center justify-center text-slate-400">
                          <Clock size={18} strokeWidth={2.5} />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-700 dark:text-slate-200 text-base leading-tight">{item.title}</h4>
                          <p className="text-[11px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-tight">{item.sub}</p>
                        </div>
                      </div>
                      <button onClick={() => setRecentSearches(recentSearches.filter(i => i.id !== item.id))} className="p-2 text-slate-300 dark:text-slate-700 hover:text-red-400 transition-colors">
                        <X size={18} strokeWidth={2.5} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 tracking-tight">Suggested Trips</h2>
                <div className="space-y-4">
                  {suggestedTrips.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex bg-white dark:bg-slate-900 items-center gap-4 cursor-pointer group active:scale-[0.98] transition-all"
                      onClick={() => onSelectItem(item as TravelItem)}
                    >
                      <img src={item.image} className="w-20 h-20 rounded-[20px] object-cover shadow-sm flex-shrink-0" alt={item.title} />
                      <div className="flex-grow py-1">
                        <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 truncate mb-1">{item.title}</h4>
                        <div className="flex items-center gap-4">
                           <div className="flex items-center gap-1">
                              <Star size={14} className="text-yellow-400 fill-current" />
                              <span className="text-slate-500 dark:text-slate-400 font-bold text-xs">{item.rating}</span>
                           </div>
                           <div className="w-px h-3 bg-slate-200 dark:bg-slate-800"></div>
                           <span className="text-[11px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">{item.category}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="px-5 animate-slide-up relative">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">Search Results</h2>
                
                <div className="relative">
                  <button 
                    onClick={() => setIsSortMenuOpen(!isSortMenuOpen)}
                    className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-[#01BFFF] transition-colors"
                  >
                    Sort <SlidersHorizontal size={14} strokeWidth={2.5} />
                  </button>

                  {isSortMenuOpen && (
                    <div 
                      ref={sortMenuRef}
                      className="absolute right-0 top-10 flex flex-col items-start bg-white dark:bg-slate-800 z-[100] p-[24px] gap-[14px] w-[159.33px] h-[204px] shadow-[0px_6px_40px_rgba(121,145,173,0.3)] rounded-[8px] animate-slide-up overflow-hidden"
                    >
                      {sortOptions.map((opt) => (
                        <button 
                          key={opt}
                          onClick={() => handleSortChange(opt)}
                          className={`text-sm font-bold text-left whitespace-nowrap transition-colors ${
                            sortMethod === opt ? 'text-[#01BFFF]' : 'text-slate-400 dark:text-slate-500'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pb-10">
                {filteredResults.map((item) => (
                  <div 
                    key={item.id} 
                    onClick={() => onSelectItem(item)} 
                    className="bg-white dark:bg-slate-900 rounded-[24px] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.03)] flex flex-col cursor-pointer active:scale-95 transition-all group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-slate-50 dark:bg-slate-800">
                      <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(item);
                        }}
                        className="absolute top-3 right-3 w-8 h-8 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 active:scale-90 transition-all"
                      >
                        <Heart size={16} strokeWidth={2.5} className={`${isFavorited(item.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                      </button>
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm leading-tight mb-2 tracking-tight line-clamp-2">{item.title}</h4>
                      <div className="flex items-center gap-1 mb-4">
                        <MapPin size={10} className="text-[#01BFFF]" />
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold truncate uppercase">{item.location.split(',')[0]}</p>
                      </div>
                      <div className="mt-auto">
                        <div className="flex items-center justify-between mb-3 pt-3 border-t border-slate-50 dark:border-slate-800">
                           <span className="text-[#01BFFF] font-black text-base">{item.price}</span>
                        </div>
                        <div className="flex items-center justify-between opacity-60">
                           <div className="flex flex-col items-center">
                              <Bed size={12} className="text-slate-400" />
                              <span className="text-[6px] font-bold uppercase mt-0.5">{item.beds || 1} Bed</span>
                           </div>
                           <div className="flex flex-col items-center">
                              <Coffee size={12} className="text-slate-400" />
                              <span className="text-[6px] font-bold uppercase mt-0.5">B-fast</span>
                           </div>
                           <div className="flex flex-col items-center">
                              <Bath size={12} className="text-slate-400" />
                              <span className="text-[6px] font-bold uppercase mt-0.5">Bath</span>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
