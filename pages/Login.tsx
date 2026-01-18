
import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

interface LoginProps {
  onBack: () => void;
  onSignUp: () => void;
  onLogin: () => void;
  onForgotPassword?: () => void;
}

const Login: React.FC<LoginProps> = ({ onBack, onSignUp, onLogin, onForgotPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="relative h-1/3 overflow-hidden flex-shrink-0">
        <img 
          src="https://i.pinimg.com/736x/53/a3/ab/53a3ab4f61288dbfb1329cbf0dec8cd8.jpg" 
          className="w-full h-full object-cover"
          alt="header"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col p-8 justify-end">
            <button onClick={onBack} className="absolute top-10 left-6 text-white bg-white/20 p-2 rounded-full backdrop-blur-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <h2 className="text-white text-3xl font-bold mb-2">Hi, welcome back!</h2>
            <p className="text-white/80 font-light">Let's explore the world together and start a new journey.</p>
        </div>
      </div>

      <div className="px-8 pt-8 pb-10 flex flex-col flex-grow overflow-y-auto no-scrollbar">
        <Input 
          placeholder="Email address" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <Input 
          placeholder="Password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />

        <div className="text-left mb-8">
            <button onClick={onForgotPassword} className="text-[#00D1FF] font-medium text-sm">Forgot password?</button>
        </div>

        <Button onClick={onLogin} className="mb-8">
          Log in
        </Button>

        <div className="text-center mb-8">
            <span className="text-slate-400 dark:text-slate-600 text-sm">Or sign in with</span>
            <div className="flex justify-center gap-6 mt-4">
                <button className="w-14 h-14 rounded-full border border-slate-100 dark:border-slate-800 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" className="w-7 h-7" alt="FB" />
                </button>
                <button className="w-14 h-14 rounded-full border border-slate-100 dark:border-slate-800 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                    <img src="https://www.google.com/favicon.ico" className="w-7 h-7" alt="Google" />
                </button>
                <button className="w-14 h-14 rounded-full border border-slate-100 dark:border-slate-800 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-slate-800 dark:text-slate-100">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.67-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2.04-.156-3.03.948-4.003.948zM15.99 4.845c.819-1.002 1.377-2.39 1.221-3.779-1.194.052-2.636.805-3.493 1.808-.767.883-1.442 2.3-1.262 3.649 1.325.104 2.688-.636 3.534-1.678z"/></svg>
                </button>
            </div>
        </div>

        <p className="mt-auto text-center text-slate-500 dark:text-slate-500">
          Don't have an account? <button onClick={onSignUp} className="text-[#00D1FF] font-semibold">Sign up</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
