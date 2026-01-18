
import React from 'react';

interface IOSKeyboardProps {
  isVisible: boolean;
  layout?: 'alphabetic' | 'numeric';
  onKeyClick: (key: string) => void;
  onDelete: () => void;
  onReturn: () => void;
}

const IOSKeyboard: React.FC<IOSKeyboardProps> = ({ 
  isVisible, 
  layout = 'alphabetic', 
  onKeyClick, 
  onDelete, 
  onReturn 
}) => {
  const alphabeticRows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Del'],
    ['123', 'space', 'Return']
  ];

  const numericKeys = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '+', '0', 'Del'
  ];

  // Prevent keyboard clicks from stealing focus from the input
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  if (layout === 'numeric') {
    return (
      <div 
        className={`absolute bottom-0 left-0 right-0 z-[200] bg-[#D1D3D9]/98 backdrop-blur-3xl transition-transform duration-300 ease-out px-1 pt-1.5 pb-8 shadow-[0_-5px_30px_rgba(0,0,0,0.1)] ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
        onMouseDown={handleMouseDown}
      >
        <div className="grid grid-cols-3 gap-1.5 px-1.5">
          {numericKeys.map((key, idx) => {
            if (key === 'Del') {
              return (
                <button 
                  key="del"
                  onClick={onDelete}
                  className="h-12 bg-transparent rounded-lg flex items-center justify-center active:bg-slate-300/50 transition-colors"
                >
                  <svg className="w-7 h-7 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/><line x1="18" y1="9" x2="12" y2="15"/><line x1="12" y1="9" x2="18" y2="15"/></svg>
                </button>
              );
            }
            if (key === '+') {
               return (
                <button 
                  key="plus"
                  onClick={() => onKeyClick('+')}
                  className="h-12 bg-transparent rounded-lg flex items-center justify-center active:bg-slate-300/50 transition-colors"
                >
                  <span className="text-2xl font-normal text-slate-800 tracking-tighter">+</span>
                </button>
              );
            }
            return (
              <button 
                key={key} 
                onClick={() => onKeyClick(key)} 
                className="h-12 bg-white rounded-lg shadow-[0_1px_0px_rgba(0,0,0,0.3)] text-2xl font-normal active:bg-slate-300 transition-all flex items-center justify-center text-slate-900"
              >
                {key}
              </button>
            );
          })}
        </div>
        <div className="mt-4 flex justify-center">
          <div className="w-32 h-1 bg-black/10 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`absolute bottom-0 left-0 right-0 z-[200] bg-[#D1D3D9]/98 backdrop-blur-3xl transition-transform duration-300 ease-out px-1.5 pt-2 pb-10 shadow-[0_-5px_30px_rgba(0,0,0,0.1)] ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      onMouseDown={handleMouseDown}
    >
      <div className="flex flex-col gap-2.5">
        <div className="flex justify-center gap-1.5">
          {alphabeticRows[0].map(key => (
            <button key={key} onClick={() => onKeyClick(key.toLowerCase())} className="flex-1 h-11 bg-white rounded-md shadow-[0_1px_0px_rgba(0,0,0,0.35)] text-xl font-normal active:bg-slate-300 active:shadow-none transition-all flex items-center justify-center text-slate-900">{key}</button>
          ))}
        </div>
        
        <div className="flex justify-center gap-1.5 px-4">
          {alphabeticRows[1].map(key => (
            <button key={key} onClick={() => onKeyClick(key.toLowerCase())} className="flex-1 h-11 bg-white rounded-md shadow-[0_1px_0px_rgba(0,0,0,0.35)] text-xl font-normal active:bg-slate-300 active:shadow-none transition-all flex items-center justify-center text-slate-900">{key}</button>
          ))}
        </div>
        
        <div className="flex justify-center gap-1.5">
          <button className="w-[44px] h-11 bg-[#ABB1BA] rounded-md shadow-[0_1px_0px_rgba(0,0,0,0.35)] flex items-center justify-center active:bg-white transition-colors">
            <svg className="w-5 h-5 text-slate-800" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 9h5v8h5V9h5L12 2z"/></svg>
          </button>
          {alphabeticRows[2].filter(k => k !== 'Shift' && k !== 'Del').map(key => (
            <button key={key} onClick={() => onKeyClick(key.toLowerCase())} className="flex-1 h-11 bg-white rounded-md shadow-[0_1px_0px_rgba(0,0,0,0.35)] text-xl font-normal active:bg-slate-300 active:shadow-none transition-all flex items-center justify-center text-slate-900">{key}</button>
          ))}
          <button onClick={onDelete} className="w-[44px] h-11 bg-[#ABB1BA] rounded-md shadow-[0_1px_0px_rgba(0,0,0,0.35)] flex items-center justify-center active:bg-white text-slate-800 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/><line x1="18" y1="9" x2="12" y2="15"/><line x1="12" y1="9" x2="18" y2="15"/></svg>
          </button>
        </div>
        
        <div className="flex justify-center gap-1.5">
          <button className="w-[88px] h-11 bg-[#ABB1BA] rounded-md shadow-[0_1px_0px_rgba(0,0,0,0.35)] text-sm font-medium active:bg-white text-slate-800 transition-colors">123</button>
          <button onClick={() => onKeyClick(' ')} className="flex-grow h-11 bg-white rounded-md shadow-[0_1px_0px_rgba(0,0,0,0.35)] text-sm font-medium active:bg-slate-300 active:shadow-none transition-all text-slate-800 flex items-center justify-center">space</button>
          <button onClick={onReturn} className="w-[88px] h-11 bg-[#ABB1BA] rounded-md shadow-[0_1px_0px_rgba(0,0,0,0.35)] text-sm font-bold text-slate-800 active:bg-white transition-colors">Return</button>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <div className="w-36 h-1 bg-black/10 rounded-full"></div>
      </div>
    </div>
  );
};

export default IOSKeyboard;
