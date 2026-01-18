
import React, { useState, useMemo } from 'react';
import { MapPin, Star, Heart, Search } from 'lucide-react';
import { TravelItem, AuthStep } from '../types';

interface HomeProps {
  onSelectItem: (item: TravelItem) => void;
  onNavigate: (step: AuthStep) => void;
  activeStep: AuthStep;
  onToggleFavorite: (item: TravelItem) => void;
  isFavorited: (id: string) => boolean;
}

const Home: React.FC<HomeProps> = ({ onSelectItem, onNavigate, onToggleFavorite, isFavorited }) => {
  const [activeCategory, setActiveCategory] = useState('Nature');
  const categories = ['Nature', 'Beaches', 'Historical Sites', 'Forest', 'Urban'];

  const allItems: TravelItem[] = [
    // Nature
    { id: 'n1', title: 'Mataking Island Resort', location: 'Semporna, Sabah', price: 'RM215', rating: 4.8, image: 'https://cms.mayflower.com.my/media//oa5ibk0j/kapalai-island-semporna-2.jpeg', category: 'Nature' },
    { id: 'n2', title: 'Kota Kinabalu Park', location: 'Ranau, Sabah', price: 'RM150', rating: 4.7, image: 'https://images.unsplash.com/photo-1440778303588-435521a205bc?auto=format&fit=crop&q=80&w=800', category: 'Nature' },
    { id: 'n3', title: 'Sipadan Water Village', location: 'Sipadan Island', price: 'RM450', rating: 4.9, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800', category: 'Nature' },
    
    // Beaches
    { id: 'b1', title: 'The Taaras Beach Resort', location: 'Redang Island', price: 'RM580', rating: 4.9, image: 'https://images.unsplash.com/photo-1544918877-460635b6d13e?auto=format&fit=crop&q=80&w=800', category: 'Beaches' },
    { id: 'b2', title: 'Bubu Resort Perhentian', location: 'Perhentian Kecil', price: 'RM420', rating: 4.6, image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=800', category: 'Beaches' },
    { id: 'b3', title: 'Sari Pacifica Resort', location: 'Lang Tengah Island', price: 'RM390', rating: 4.7, image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=800', category: 'Beaches' },

    // Historical Sites - Fixed missing images using Phuket and Krabi destinations
    { id: 'h1', title: 'Phuket Old Town Walk', location: 'Phuket, Thailand', price: 'RM320', rating: 4.9, image: 'https://images.unsplash.com/photo-1512100356956-c1227c33028d?auto=format&fit=crop&q=80&w=800', category: 'Historical Sites' },
    { id: 'h2', title: 'Krabi Temple Ruins', location: 'Krabi, Thailand', price: 'RM15', rating: 4.5, image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800', category: 'Historical Sites' },
    { id: 'h3', title: 'Batu Caves Temple', location: 'Gombak, Selangor', price: 'Free', rating: 4.8, image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&q=80&w=800', category: 'Historical Sites' },

    // Urban
    { id: 'u1', title: 'Petronas Twin Towers', location: 'KLCC, Kuala Lumpur', price: 'RM98', rating: 5.0, image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800', category: 'Urban' },
    { id: 'u2', title: 'Putra Mosque', location: 'Putrajaya', price: 'Free', rating: 4.9, image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800', category: 'Urban' },

    // Group Tours (Trips)
    { id: 'gt1', title: 'Langkawi National Park', location: 'Langkawi', price: 'RM198', rating: 4.9, image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&q=80&w=800', category: 'Trips', progress: 80, dates: '02-23 — 02-28' },
    { id: 'gt2', title: 'Laguna Redang Island', location: 'Redang Island, Malaysia', price: 'RM350', rating: 4.8, image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=1200', category: 'Trips', progress: 65, dates: '03-10 — 03-15' },
    { id: 'gt3', title: 'Genting Highland Park', location: 'Genting, Malaysia', price: 'RM280', rating: 4.7, image: 'https://images.unsplash.com/photo-1596422846543-b5c64863e939?auto=format&fit=crop&q=80&w=800', category: 'Trips', progress: 92, dates: '04-05 — 04-10' },
  ];

  const filteredItems = useMemo(() => {
    return allItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const recommendedItems = useMemo(() => {
    return allItems.filter(item => item.category !== 'Trips').slice(0, 6);
  }, [allItems]);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden box-border">
      {/* Centered responsive container for all content */}
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
        
        {/* Header */}
        <div className="flex-shrink-0 w-full px-[24.5px] md:px-10 pt-10 pb-4 flex items-center justify-between">
           <h1 className="text-4xl font-black text-slate-800 dark:text-white tracking-tight leading-none">Explore</h1>
           <button onClick={() => onNavigate('search')} className="w-12 h-12 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-400">
              <Search size={22} strokeWidth={2.5} />
           </button>
        </div>

        {/* Category Filter */}
        <div className="flex-shrink-0 pb-4 overflow-hidden bg-white/80 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-20">
          <div className="w-full flex overflow-x-auto gap-3 no-scrollbar py-2 px-[24.5px] md:px-10 scroll-pl-[24.5px] md:scroll-pl-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat 
                    ? 'bg-[#01BFFF] text-white shadow-[0_8px_20px_rgba(1,191,255,0.25)]' 
                    : 'bg-white dark:bg-slate-900 text-[#5E6D82] dark:text-slate-400 border border-slate-100 dark:border-slate-800 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-grow overflow-y-auto no-scrollbar pb-32 box-border">
          {/* Explore Destination Cards (Horizontal Sliding) */}
          <div className="mb-10 w-full">
             <div className="w-full overflow-x-auto no-scrollbar flex snap-x snap-mandatory gap-[12px] px-[24.5px] md:px-10 scroll-pl-[24.5px] md:scroll-pl-10 py-4">
               {filteredItems.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => onSelectItem(item)}
                    style={{ width: '260px', height: '250px' }}
                    className="flex-none snap-start bg-white dark:bg-slate-900 rounded-[28px] overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.04)] dark:shadow-none transition-all active:scale-[0.98] cursor-pointer flex flex-col border border-slate-50 dark:border-slate-800 group animate-slide-up order-0 grow-0"
                  >
                    <div className="relative w-full h-[170px] bg-[#F5F5F5] dark:bg-slate-800 overflow-hidden">
                      <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={item.title} />
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(item);
                        }}
                        className="absolute top-3 right-3 w-8 h-8 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 active:scale-90 transition-all"
                      >
                        <Heart size={16} strokeWidth={2.5} className={`${isFavorited(item.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                      </button>
                      <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/10">
                         <Star size={10} className="text-yellow-400 fill-current" />
                         <span className="text-white text-[10px] font-black">{item.rating}</span>
                      </div>
                    </div>
                    <div className="p-4 flex flex-col flex-grow justify-center">
                      <div className="flex justify-between items-start mb-1">
                         <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base tracking-tight truncate flex-grow pr-4">{item.title}</h3>
                         <span className="text-[#01BFFF] font-black text-lg leading-none">{item.price}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                         <MapPin size={10} className="text-[#01BFFF]" />
                         <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold truncate tracking-tight uppercase">{item.location}</p>
                      </div>
                    </div>
                  </div>
               ))}
             </div>
          </div>

          {/* Group Tours Section (Horizontal Sliding) */}
          <div className="mb-12 w-full">
            <div className="w-full flex items-center justify-between mb-6 px-[24.5px] md:px-10">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-orange-50 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center shadow-sm">
                      <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0003 9.08366C9.49199 9.08366 9.08366 9.49199 9.08366 10.0003C9.08366 10.5087 9.49199 10.917 10.0003 10.917C10.5087 10.917 10.917 10.5087 10.917 10.0003C10.917 9.49199 10.5087 9.08366 10.0003 9.08366ZM10.0003 1.66699C5.40033 1.66699 1.66699 5.40033 1.66699 10.0003C1.66699 14.6003 5.40033 18.3337 10.0003 18.3337C14.6003 18.3337 18.3337 14.6003 18.3337 10.0003C18.3337 5.40033 14.6003 1.66699 10.0003 1.66699ZM11.8253 11.8253L5.00033 15.0003L8.17533 8.17533L15.0003 5.00033L11.8253 11.8253Z" fill="#FF9141"/>
                      </svg>
                   </div>
                   <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 tracking-tighter uppercase">Group Tours</h2>
                </div>
                <button onClick={() => onNavigate('group-tours')} className="text-[#01BFFF] font-black text-xs uppercase tracking-widest text-[10px]">See All</button>
            </div>
            
            <div className="w-full overflow-x-auto no-scrollbar flex snap-x snap-mandatory gap-[12px] px-[24.5px] md:px-10 scroll-pl-[24.5px] md:scroll-pl-10 pb-4">
               {allItems.filter(i => i.category === 'Trips').map(item => (
                  <div 
                    key={item.id} 
                    onClick={() => onSelectItem(item)} 
                    className="flex-none w-[300px] md:w-[340px] snap-start bg-white dark:bg-slate-900 rounded-[24px] p-4 flex gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none border border-slate-50 dark:border-slate-800 active:scale-[0.98] transition-all"
                  >
                     <div className="relative w-24 h-24 flex-shrink-0 bg-[#F5F5F5] dark:bg-slate-800 rounded-[20px] overflow-hidden">
                        <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleFavorite(item);
                          }}
                          className="absolute top-2 left-2 w-7 h-7 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white active:scale-90 transition-all"
                        >
                           <Heart size={14} className={`${isFavorited(item.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                        </button>
                     </div>
                     <div className="flex-grow flex flex-col justify-between py-1 min-w-0">
                        <div className="flex justify-between items-start">
                           <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm truncate pr-2 tracking-tight">{item.title}</h4>
                           <span className="text-orange-400 font-bold text-[10px] whitespace-nowrap">★ {item.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={10} className="text-[#01BFFF]" />
                          <p className="text-[11px] text-slate-400 dark:text-slate-500 font-bold truncate">{item.location.split(',')[0]}</p>
                        </div>
                        <div className="mt-2">
                          <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-1.5">
                             <div className="h-full bg-[#01BFFF] rounded-full transition-all duration-1000" style={{ width: `${item.progress}%` }}></div>
                          </div>
                          <div className="flex items-center justify-between">
                             <div className="flex items-center -space-x-1.5">
                                {[1,2].map(i => (
                                  <img key={i} src={`https://i.pravatar.cc/150?u=user${item.id}${i}`} className="w-5 h-5 rounded-full border border-white dark:border-slate-900 object-cover shadow-sm" alt="av" />
                                ))}
                                <div className="w-5 h-5 rounded-full bg-slate-800 border border-white dark:border-slate-800 flex items-center justify-center text-[6px] text-white font-black">+8</div>
                             </div>
                             <span className="text-[#01BFFF] font-black text-[9px]">{item.progress}%</span>
                          </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
          </div>

          {/* Recommendation Section (Responsive Grid for Tablet/Desktop) */}
          <div className="w-full mb-12">
            <div className="flex items-center justify-between mb-6 px-[24.5px] md:px-10">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-orange-50 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center shadow-sm">
                      <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8333 1.42395H4.16667C3.25 1.42395 2.5 2.17395 2.5 3.09062V14.7573C2.5 15.674 3.25 16.424 4.16667 16.424H7.5L9.40833 18.3323C9.73333 18.6573 10.2583 18.6573 10.5833 18.3323L12.5 16.424H15.8333C16.75 16.424 17.5 15.674 17.5 14.7573V3.09062C17.5 2.17395 16.75 1.42395 15.8333 1.42395ZM11.5667 10.4906L10 13.924L8.43333 10.4906L5 8.92395L8.43333 7.35728L10 3.92395L11.5667 7.35728L15 8.92395L11.5667 10.4906Z" fill="#FF9141"/>
                      </svg>
                   </div>
                   <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 tracking-tighter uppercase">Recommendation</h2>
                </div>
                <button onClick={() => onNavigate('recommended')} className="text-[#01BFFF] font-black text-xs uppercase tracking-widest text-[10px]">See All</button>
            </div>
            
            {/* Switched to a grid: 1 column on mobile, 2 columns on tablet/md */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] px-[24.5px] md:px-10">
               {recommendedItems.map(item => (
                  <div key={item.id} onClick={() => onSelectItem(item)} className="bg-white dark:bg-slate-900 rounded-[24px] p-4 flex gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none border border-slate-50 dark:border-slate-800 active:scale-[0.98] transition-all group">
                     <div className="relative w-24 h-24 flex-shrink-0 bg-[#F5F5F5] dark:bg-slate-800 rounded-[20px] overflow-hidden">
                        <img src={item.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={item.title} />
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleFavorite(item);
                          }}
                          className="absolute top-2 left-2 w-7 h-7 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white active:scale-90 transition-all"
                        >
                           <Heart size={14} className={`${isFavorited(item.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                        </button>
                     </div>
                     <div className="flex-grow flex flex-col justify-between py-1 min-w-0">
                        <div className="flex justify-between items-start">
                           <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm truncate pr-2 tracking-tight">{item.title}</h4>
                           <div className="flex items-center gap-0.5">
                              <Star size={10} className="text-yellow-400 fill-current" />
                              <span className="text-slate-500 dark:text-slate-400 font-bold text-[10px]">{item.rating}</span>
                           </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={10} className="text-[#01BFFF]" />
                          <p className="text-[11px] text-slate-400 dark:text-slate-500 font-bold truncate uppercase">{item.location}</p>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                           <div className="flex items-center gap-1.5">
                              <span className="text-[#01BFFF] font-black text-lg">{item.price}</span>
                              <span className="text-[8px] text-slate-300 dark:text-slate-600 font-bold uppercase tracking-widest mt-1">/ person</span>
                           </div>
                           <div className="bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-[8px] font-black text-slate-400 uppercase tracking-widest">
                              {item.category}
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
