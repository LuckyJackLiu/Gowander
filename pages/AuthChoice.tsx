
import React from 'react';
import Button from '../components/Button';

interface AuthChoiceProps {
  onEmailAuth: () => void;
  onLoginLink: () => void;
}

const AuthChoice: React.FC<AuthChoiceProps> = ({ onEmailAuth, onLoginLink }) => {
  const leftColumnImages = [
    'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=400',
  ];

  const rightColumnImages = [
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&q=80&w=400',
  ];

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="flex-grow overflow-y-auto no-scrollbar">
        <div className="flex gap-4 p-5 pt-8">
          <div className="flex-1 flex flex-col gap-4">
            <div className="rounded-[32px] overflow-hidden h-44 shadow-sm transition-all active:scale-95 bg-slate-100 dark:bg-slate-800">
              <img src={leftColumnImages[0]} className="w-full h-full object-cover" alt="travel-1" />
            </div>
            <div className="rounded-[32px] overflow-hidden h-80 shadow-sm transition-all active:scale-95 bg-slate-100 dark:bg-slate-800">
              <img src={leftColumnImages[1]} className="w-full h-full object-cover" alt="travel-2" />
            </div>
            <div className="rounded-[32px] overflow-hidden h-52 shadow-sm transition-all active:scale-95 bg-slate-100 dark:bg-slate-800">
              <img src={leftColumnImages[2]} className="w-full h-full object-cover" alt="travel-3" />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <div className="rounded-[32px] overflow-hidden h-44 shadow-sm transition-all active:scale-95 bg-slate-100 dark:bg-slate-800">
              <img src={rightColumnImages[0]} className="w-full h-full object-cover" alt="travel-4" />
            </div>
            <div className="rounded-[32px] overflow-hidden h-48 shadow-sm transition-all active:scale-95 bg-slate-100 dark:bg-slate-800">
              <img src={rightColumnImages[1]} className="w-full h-full object-cover" alt="travel-5" />
            </div>
            <div className="rounded-[32px] overflow-hidden h-72 shadow-sm transition-all active:scale-95 bg-slate-100 dark:bg-slate-800">
              <img src={rightColumnImages[2]} className="w-full h-full object-cover" alt="travel-6" />
            </div>
          </div>
        </div>
        <div className="h-4"></div>
      </div>

      <div className="px-8 pb-10 pt-4 text-center bg-white dark:bg-slate-950 shadow-[0_-20px_40px_rgba(255,255,255,0.95)] dark:shadow-none z-20 transition-colors">
        <h2 className="text-3xl font-black mb-8 text-slate-800 dark:text-slate-100 tracking-tight leading-tight">Start Exploring the World</h2>
        
        <Button onClick={onEmailAuth} className="mb-4 h-16 text-lg rounded-[28px] shadow-lg shadow-cyan-100/50 dark:shadow-none">
          Sign in with Email
        </Button>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
          <span className="mx-4 text-slate-300 dark:text-slate-600 text-[10px] font-black uppercase tracking-widest">Or continue with</span>
          <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
        </div>

        <div className="flex gap-4">
          <Button variant="outline" className="h-14 rounded-[22px] flex-1 border-slate-100 dark:border-slate-800" icon={<img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="G" />}>
            Gmail
          </Button>
          <Button variant="outline" className="h-14 rounded-[22px] flex-1 border-slate-100 dark:border-slate-800" icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.67-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2.04-.156-3.03.948-4.003.948zM15.99 4.845c.819-1.002 1.377-2.39 1.221-3.779-1.194.052-2.636.805-3.493 1.808-.767.883-1.442 2.3-1.262 3.649 1.325.104 2.688-.636 3.534-1.678z"/></svg>}>
            Apple ID
          </Button>
        </div>

        <p className="mt-8 text-slate-400 dark:text-slate-500 font-medium">
          Already have an account? <button onClick={onLoginLink} className="text-[#00D1FF] font-black hover:underline transition-all">Log in</button>
        </p>
      </div>
    </div>
  );
};

export default AuthChoice;
