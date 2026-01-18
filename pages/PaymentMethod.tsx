
import React from 'react';
import Button from '../components/Button';

interface PaymentMethodProps {
  selected?: string;
  onSelect: (method: string) => void;
  onBack: () => void;
  onNext: () => void;
  onAdd: () => void;
}

const WeChatIcon = () => (
  <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-auto">
    <path d="M8.36496 13.2837C8.26121 13.338 8.14415 13.3693 8.01981 13.3693C7.73241 13.3693 7.48247 13.2055 7.35129 12.9635L7.301 12.8493L5.20742 8.09534C5.18483 8.04342 5.1707 7.98517 5.1707 7.92838C5.1707 7.70919 5.34232 7.53142 5.55412 7.53142C5.64014 7.53142 5.71947 7.56086 5.78363 7.61022L8.25394 9.43034C8.43457 9.5528 8.65008 9.62439 8.88187 9.62439C9.0205 9.62439 9.15225 9.59775 9.2753 9.5513L20.8935 4.19999C18.8112 1.6601 15.3813 0 11.4999 0C5.14853 0 0 4.44017 0 9.91749C0 12.9061 1.54912 15.596 3.97354 17.4139C4.16817 17.5575 4.29534 17.7935 4.29534 18.06C4.29534 18.148 4.27706 18.2289 4.25505 18.3128C4.0614 19.0605 3.75131 20.2572 3.73686 20.3133C3.71272 20.4071 3.67485 20.5051 3.67485 20.6033C3.67485 20.8224 3.84662 21 4.05843 21C4.14187 21 4.20961 20.9681 4.27993 20.9262L6.79754 19.4222C6.98689 19.3088 7.1874 19.2389 7.40819 19.2389C7.52567 19.2389 7.63927 19.2576 7.74633 19.2914C8.92074 19.641 10.1879 19.8353 11.4999 19.8353C17.851 19.8353 23 15.3951 23 9.91755C23 8.25867 22.5251 6.69615 21.6901 5.32195L8.44883 13.2336L8.36496 13.2837Z" fill="#11CD6E"/>
  </svg>
);

const PaymentMethod: React.FC<PaymentMethodProps> = ({ selected, onSelect, onBack, onNext, onAdd }) => {
  const methods = [
    { id: 'Mastercard', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg' },
    { id: 'PayPal', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' },
    { id: 'VISA', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg' },
    { id: 'WeChat Pay', icon: <WeChatIcon /> }
  ];

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden box-border">
      <div className="flex items-center p-6 pt-10 flex-shrink-0">
        <button onClick={onBack} className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-800 dark:text-slate-100 active:bg-slate-100 dark:active:bg-slate-700 transition-colors active:scale-90">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="flex-grow text-center font-black text-2xl text-slate-800 dark:text-slate-100 tracking-tight">Payment Method</span>
        <button onClick={onAdd} className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 dark:text-slate-500 active:scale-90 transition-all">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6v12M6 12h12" strokeWidth="3" strokeLinecap="round"/></svg>
        </button>
      </div>

      <div className="p-8 flex-grow overflow-y-auto no-scrollbar pb-[140px]">
        <div className="space-y-6">
          {methods.map(m => (
            <div 
              key={m.id} 
              onClick={() => onSelect(m.id)}
              className={`bg-white dark:bg-slate-900 border rounded-[32px] p-6 flex items-center justify-between cursor-pointer transition-all active:scale-[0.98] ${
                selected === m.id ? 'border-[#00D1FF] shadow-xl shadow-cyan-50 dark:shadow-cyan-900/10' : 'border-slate-50 dark:border-slate-800 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-12 flex items-center justify-center bg-white rounded-xl p-2 border border-slate-50">
                   {typeof m.icon === 'string' ? (
                     <img src={m.icon} className="max-w-full max-h-full object-contain" alt={m.id} />
                   ) : (
                     m.icon
                   )}
                </div>
                <div>
                  <h4 className="font-black text-slate-800 dark:text-slate-100 text-lg leading-tight">{m.id}</h4>
                  <p className="text-[11px] text-slate-300 dark:text-slate-600 font-bold uppercase tracking-wider">Default payment</p>
                </div>
              </div>
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${selected === m.id ? 'border-[#00D1FF]' : 'border-slate-200 dark:border-slate-700'}`}>
                 {selected === m.id && <div className="w-4 h-4 bg-[#00D1FF] rounded-full"></div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unified Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[1000] h-[110px] bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 flex items-start pt-4 px-8 pb-[safe-area-inset-bottom]">
        <button 
          onClick={onNext} 
          className="w-full h-[58px] bg-[#00D1FF] text-white font-black text-lg tracking-wide rounded-[30px] shadow-[0_12px_30px_rgba(0,200,255,0.3)] active:scale-95 transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
