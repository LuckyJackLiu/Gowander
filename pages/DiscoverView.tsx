
import React, { useState, useMemo } from 'react';
import { Search as SearchIcon, SlidersHorizontal, Heart, MapPin } from 'lucide-react';
import { TravelItem, AuthStep } from '../types';

interface DiscoverViewProps {
  onSelectItem: (item: TravelItem) => void;
  onNavigate: (step: AuthStep) => void;
  onToggleFavorite: (item: TravelItem) => void;
  isFavorited: (id: string) => boolean;
}

const DiscoverView: React.FC<DiscoverViewProps> = ({ onSelectItem, onToggleFavorite, isFavorited }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = ['All', 'Nature', 'Beaches', 'Hiking', 'Hotels', 'Camping', 'Forest'];

  const items: TravelItem[] = [
    { id: 'h1', title: 'The Westin Kuala Lumpur', location: 'Kuala Lumpur', price: 'RM 215', rating: 4.8, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800', category: 'Hotels' },
    { id: 'h2', title: 'Imperial Lexis KL', location: 'Kuala Lumpur', price: 'RM 174', rating: 4.7, image: 'https://lh3.googleusercontent.com/p/AF1QipMF2EATSr9WzR-oUAWZRpuvANUx0x9WfPIWARrn=s1360-w1360-h1020-rw', category: 'Hotels' },
    { id: 'b1', title: 'Mataking Resort', location: 'Semporna, Sabah', price: 'RM 599', rating: 4.9, image: 'https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&q=80&w=800', category: 'Beaches' },
    { id: 'n1', title: 'Langkawi Sky Bridge', location: 'Langkawi', price: 'RM 120', rating: 4.9, image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800', category: 'Nature' },
    { id: 'hk1', title: 'Mount Kinabalu Trail', location: 'Sabah', price: 'RM 1200', rating: 5.0, image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800', category: 'Hiking' },
  ];

  const filteredItems = useMemo(() => {
    let list = activeTab === 'All' ? items : items.filter(item => item.category === activeTab);
    if (searchQuery) {
        const lower = searchQuery.toLowerCase();
        list = list.filter(item => 
            item.title.toLowerCase().includes(lower) || 
            item.location.toLowerCase().includes(lower)
        );
    }
    return list;
  }, [activeTab, searchQuery]);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden relative">
      <div className="px-6 pt-12 pb-4 flex-shrink-0 z-10 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="relative mb-6 max-w-4xl mx-auto w-full">
            <div className="absolute inset-y-0 left-5 flex items-center text-slate-300">
                <SearchIcon size={18} strokeWidth={2.5} />
            </div>
            <input 
                type="text" 
                placeholder="Where are you going?" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F8FAFC] dark:bg-slate-900 border-none py-4 pl-12 pr-14 rounded-[30px] text-base font-medium outline-none shadow-[0_2px_10px_rgba(0,0,0,0.02)] dark:text-white transition-all focus:ring-2 focus:ring-[#00C8FF]/20"
            />
            <button className="absolute inset-y-0 right-5 flex items-center text-[#00C8FF]">
                <SlidersHorizontal size={18} strokeWidth={2.5} />
            </button>
        </div>
        <div className="flex overflow-x-auto gap-2 no-scrollbar pb-2 max-w-4xl mx-auto w-full">
            {categories.map(tab => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                        activeTab === tab 
                          ? 'bg-[#00C8FF] text-white shadow-[0_8px_15px_rgba(0,200,255,0.2)]' 
                          : 'text-slate-400 dark:text-slate-600 bg-slate-50 dark:bg-slate-900'
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>
      </div>
      <div className="flex-grow overflow-y-auto px-6 pt-2 pb-[100px] no-scrollbar">
        <div className="max-w-7xl mx-auto w-full">
            {filteredItems.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredItems.map((item) => (
                        <div key={item.id} onClick={() => onSelectItem(item)} className="flex flex-col animate-slide-up group cursor-pointer">
                            <div className="relative h-[200px] w-full rounded-[20px] overflow-hidden bg-[#F5F5F5] dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-800">
                                <img src={item.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={item.title} />
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onToggleFavorite(item);
                                  }}
                                  className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transition-all active:scale-90 hover:bg-white/40"
                                >
                                    <Heart size={16} strokeWidth={2.5} className={`${isFavorited(item.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                                </button>
                                <div className="absolute bottom-2 left-2 bg-black/20 backdrop-blur-md px-2 py-0.5 rounded-lg">
                                    <span className="text-white text-[10px] font-black tracking-tight">★ {item.rating}</span>
                                </div>
                            </div>
                            <div className="pt-3 px-1">
                                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-xs truncate mb-1 uppercase tracking-tight">{item.title}</h3>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-0.5 text-[9px] text-slate-300 font-bold uppercase truncate max-w-[60%]">
                                        <MapPin size={8} /> {item.location}
                                    </div>
                                    <span className="text-[#00C8FF] font-black text-sm">{item.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-24 text-center opacity-30">
                    <SearchIcon size={48} className="text-slate-200 mb-4" />
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No destinations found</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default DiscoverView;
