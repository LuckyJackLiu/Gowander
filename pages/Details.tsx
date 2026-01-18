
import React, { useState } from 'react';
import { TravelItem } from '../types';
import { Heart } from 'lucide-react';

interface DetailsProps {
  item: TravelItem | null;
  onBack: () => void;
  onBook: () => void;
  onWriteReview: () => void;
  isFavorited: boolean;
  onToggleFavorite: () => void;
}

const Details: React.FC<DetailsProps> = ({ item, onBack, onBook, onWriteReview, isFavorited, onToggleFavorite }) => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [openFacility, setOpenFacility] = useState<string | null>('Food & Drinks');
  const tabs = ['Overview', 'Facilities', 'Photos', 'Reviews'];

  if (!item) return null;

  const facilities = [
    {
      title: 'Food & Drinks',
      count: 4,
      items: ['À la carte dinner', 'À la carte lunch', 'Breakfast', 'Vegetarian options']
    },
    {
      title: 'Transportation',
      count: 4,
      items: ['Airport shuttle', 'Private car service', 'Bicycle rental', 'Boat transfers']
    },
    {
      title: 'TV, Wi-Fi & AC',
      count: 4,
      items: ['Free high-speed Wi-Fi', 'Smart TV with Netflix', 'Air conditioning', 'Satellite channels']
    },
    {
      title: 'Common Area',
      count: 3,
      items: ['Swimming pool', 'Sun deck', 'Shared lounge']
    }
  ];

  const galleryPhotos = [
    'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1596422846543-b5c64863e939?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&q=80&w=400',
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tight">{item.title}</h2>
                <p className="text-slate-400 dark:text-slate-500 flex items-center gap-1 mt-1 font-semibold">
                  <svg className="w-4 h-4 text-[#01BFFF]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                  {item.location}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-yellow-400 text-xl">★</span>
                <span className="text-2xl font-black dark:text-white">{item.rating}</span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <div className="px-4 py-1.5 rounded-xl border border-cyan-100 dark:border-cyan-900/50 text-[#01BFFF] font-black text-xs bg-cyan-50 dark:bg-cyan-900/20">
                {item.type || 'Villa'}
              </div>
              <div className="px-4 py-1.5 rounded-xl border border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 font-black text-xs bg-slate-50 dark:bg-slate-800">
                ⭐ Highly Rated
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-2">Description</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                {item.title} is a premium luxury experience located in the heart of {item.location.split(',')[1] || 'the region'}. 
                Known for its stunning architectural design and world-class hospitality, this destination 
                offers travelers a perfect blend of relaxation and adventure. 
                Guests can enjoy exclusive amenities, private tours, and fine dining...... <button className="text-[#01BFFF] font-bold">Read more</button>
              </p>
            </div>
          </div>
        );
      case 'Facilities':
        return (
          <div className="space-y-4">
            {facilities.map((f) => (
              <div key={f.title} className="bg-[#F8FAFC] dark:bg-slate-800/50 rounded-[24px] overflow-hidden border border-slate-50 dark:border-slate-700/50 transition-all">
                <button 
                  onClick={() => setOpenFacility(openFacility === f.title ? null : f.title)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 dark:text-slate-500 border border-slate-50 dark:border-slate-700 shadow-sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeWidth="2.5" strokeLinecap="round"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-100 text-base">{f.title}</h4>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase">({f.count} facilities)</p>
                    </div>
                  </div>
                  <svg className={`w-6 h-6 text-slate-300 dark:text-slate-600 transition-transform ${openFacility === f.title ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                {openFacility === f.title && (
                  <div className="px-20 pb-6 -mt-2 animate-slide-up">
                    <ul className="space-y-3">
                      {f.items.map(item => (
                        <li key={item} className="text-slate-500 dark:text-slate-400 font-medium text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      case 'Photos':
        return (
          <div className="grid grid-cols-2 gap-4">
            {galleryPhotos.map((photo, i) => (
              <div key={i} className={`rounded-[32px] overflow-hidden shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer ${i % 3 === 0 ? 'col-span-1 h-64' : 'h-48'}`}>
                <img src={photo} className="w-full h-full object-cover" alt={`Gallery ${i}`} />
              </div>
            ))}
            <div className="col-span-2 h-48 rounded-[32px] overflow-hidden bg-slate-50 dark:bg-slate-800/30 flex flex-col items-center justify-center text-slate-300 dark:text-slate-600 border-2 border-dashed border-slate-100 dark:border-slate-700">
               <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeWidth="2" strokeLinecap="round"/></svg>
               <span className="font-bold text-sm">View More Photos</span>
            </div>
          </div>
        );
      case 'Reviews':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-5xl font-black text-slate-800 dark:text-white tracking-tighter">4.9</span>
                <div className="flex gap-1 mt-2">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400 text-lg">★</span>)}
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-bold">Based on 532 reviews</p>
              </div>
              <button onClick={onWriteReview} className="bg-cyan-50 dark:bg-cyan-900/20 text-[#01BFFF] font-black py-3 px-6 rounded-2xl text-sm border border-cyan-100 dark:border-cyan-900/50">Write a Review</button>
            </div>

            <div>
               <h3 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-4 uppercase tracking-widest text-[10px]">Customer Reviews</h3>
               <div className="space-y-6">
                 {[1, 2].map(i => (
                   <div key={i} className="border-b border-slate-50 dark:border-slate-800 pb-6">
                     <div className="flex justify-between items-start mb-3">
                       <div className="flex items-center gap-3">
                         <img src={`https://i.pravatar.cc/150?u=user${i}`} className="w-12 h-12 rounded-2xl object-cover shadow-sm border-2 border-white dark:border-slate-800" />
                         <div>
                            <h4 className="font-black text-slate-800 dark:text-slate-100 text-sm">{i === 1 ? 'Lin Xinyue' : 'Mark Thompson'}</h4>
                            <div className="flex gap-0.5">
                              {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-[8px]">★</span>)}
                            </div>
                         </div>
                       </div>
                       <span className="text-[10px] font-bold text-slate-300 dark:text-slate-600">11/01/2026</span>
                     </div>
                     <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                       {i === 1 
                        ? "This place is amazing! The staff was incredibly helpful and the view from our room was unmatched. Definitely coming back next season." 
                        : "Everything was perfectly organized. From booking to check-out, it was a seamless experience. Worth every penny."}
                     </p>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-slate-950 transition-colors relative overflow-hidden">
      <div className="relative h-[45%] flex-shrink-0">
        <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
        <div className="absolute top-12 left-6 right-6 flex justify-between">
          <button onClick={onBack} className="w-12 h-12 bg-black/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/20 active:scale-90 transition-all">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button 
            onClick={onToggleFavorite}
            className={`w-12 h-12 bg-black/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 active:scale-90 transition-all ${isFavorited ? 'text-red-500' : 'text-white'}`}
          >
             <Heart size={24} className={`${isFavorited ? 'fill-current' : ''}`} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <div className="flex-grow flex flex-col overflow-hidden bg-white dark:bg-slate-900 -mt-10 rounded-t-[40px] shadow-2xl relative z-10 border-t border-slate-50 dark:border-slate-800">
        <div className="px-8 pt-8 flex justify-between border-b border-slate-50 dark:border-slate-800">
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-4 px-1 text-base font-black transition-all relative ${activeTab === tab ? 'text-[#01BFFF]' : 'text-slate-300 dark:text-slate-700'}`}>
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#01BFFF] rounded-full"></div>}
            </button>
          ))}
        </div>
        <div className="flex-grow overflow-y-auto px-8 pt-8 pb-[140px] no-scrollbar">
          {renderContent()}
        </div>
      </div>

      {/* Unified Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[1000] h-[110px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 flex items-start pt-4 px-8 pb-[safe-area-inset-bottom]">
        <div className="flex-grow flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1">
               <span className="text-[#01BFFF] font-black text-2xl tracking-tighter">{item.price}</span>
               <span className="text-slate-400 dark:text-slate-600 text-[10px] font-bold uppercase tracking-widest">/person</span>
            </div>
            <p className="text-[9px] text-slate-300 dark:text-slate-700 font-bold uppercase tracking-widest mt-1">Includes taxes & fees</p>
          </div>
          <button onClick={onBook} className="bg-[#01BFFF] text-white px-10 h-[58px] rounded-[30px] font-black text-lg shadow-[0_12px_30px_rgba(1,191,255,0.3)] active:scale-95 transition-all">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
