
import React, { useState } from 'react';
import Button from '../components/Button';

interface ReviewPageProps {
  onBack: () => void;
  onSubmit: () => void;
}

const ReviewPage: React.FC<ReviewPageProps> = ({ onBack, onSubmit }) => {
  const [stars, setStars] = useState(4);
  const [comment, setComment] = useState('An amazing stay at there! The overwater villas, clear blue sea, and tranquil environment made this trip unforgettable. Perfect for couples and nature lovers.');
  const [hasPhoto, setHasPhoto] = useState(true);

  return (
    <div className="flex flex-col h-screen bg-black/20 backdrop-blur-sm">
      <div className="mt-auto bg-white rounded-t-[40px] p-8 shadow-2xl relative animate-slide-up pb-12">
        <button onClick={onBack} className="absolute top-8 left-8 w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2"/></svg>
        </button>

        <h2 className="text-2xl font-bold text-slate-800 text-center mb-10">Write a Review</h2>

        <div className="flex justify-center gap-3 mb-10">
           {[1,2,3,4,5].map(i => (
             <button key={i} onClick={() => setStars(i)}>
                <svg className={`w-14 h-14 transition-all ${i <= stars ? 'text-orange-400 fill-current scale-110' : 'text-slate-100 fill-current'}`} viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
             </button>
           ))}
        </div>

        <div className="mb-8">
          <label className="block text-slate-500 font-bold text-sm mb-3">Detailed review</label>
          <div className="relative">
            <textarea 
              placeholder="你的评论..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full h-44 bg-white border border-[#00D1FF] rounded-[32px] p-6 text-slate-700 text-sm leading-relaxed outline-none focus:ring-4 focus:ring-cyan-50 transition-all resize-none"
            ></textarea>
          </div>
        </div>

        <div className="flex gap-4 mb-10">
           {hasPhoto && (
             <div className="relative w-28 h-28">
               <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover rounded-[24px] shadow-sm" />
               <button onClick={() => setHasPhoto(false)} className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center border-2 border-white">
                 <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="3"/></svg>
               </button>
             </div>
           )}
           <button 
            onClick={() => setHasPhoto(true)}
            className="w-28 h-28 border-2 border-slate-50 bg-slate-50/30 rounded-[24px] flex flex-col items-center justify-center text-slate-400 gap-2 hover:bg-slate-50 active:scale-95 transition-all"
           >
              <div className="w-12 h-12 bg-white text-[#00D1FF] rounded-full flex items-center justify-center shadow-sm">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeWidth="2"/><circle cx="12" cy="13" r="3" strokeWidth="2"/></svg>
              </div>
              <span className="text-[10px] font-bold">Add photos</span>
           </button>
        </div>

        <Button onClick={onSubmit} className="h-16 text-lg shadow-xl shadow-cyan-100">
          Submit for Review
        </Button>
      </div>
    </div>
  );
};

export default ReviewPage;
