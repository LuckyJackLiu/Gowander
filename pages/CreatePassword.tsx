
import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

interface CreatePasswordProps {
  onBack: () => void;
  onReset: () => void;
}

const CreatePassword: React.FC<CreatePasswordProps> = ({ onBack, onReset }) => {
  const [pass, setPass] = useState('••••••');
  const [rePass, setRePass] = useState('');

  const requirements = [
    { text: 'Must not contain your name or email address', met: true },
    { text: 'At least 8 characters', met: false },
    { text: 'Must include a symbol or number', met: false }
  ];

  return (
    <div className="flex flex-col h-screen bg-white p-8">
      <div className="flex items-center mb-10">
        <button onClick={onBack} className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <span className="flex-grow text-center font-bold text-lg text-slate-800 pr-12">创建新密码</span>
      </div>

      <h2 className="text-4xl font-bold text-slate-800 mb-4">Create New Password</h2>
      <p className="text-slate-500 text-lg mb-12">
        Your new password must be different from your previous password.
      </p>

      <div className="space-y-6">
        <div className="mb-4">
          <label className="block text-sm font-semibold text-slate-600 mb-3 ml-1">Password</label>
          <div className="relative">
            <input
              type="password"
              value={pass}
              className="w-full bg-white border border-[#00D1FF] rounded-[24px] py-4 px-6 focus:ring-2 ring-cyan-50 outline-none text-xl tracking-widest"
            />
            <button className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13.875 18.825A10.05 10.05 0 0112 19c-7 0-11-8-11-8a18.5 18.5 0 012.16-3.19m2.772-4.018A9.633 9.633 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-4.444 4.881M1 1l22 22" strokeWidth="2"/></svg>
            </button>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-semibold text-slate-600 mb-3 ml-1">Confirm Password</label>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-slate-50 border-none rounded-[24px] py-4 px-6 outline-none text-xl"
            />
            <button className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13.875 18.825A10.05 10.05 0 0112 19c-7 0-11-8-11-8a18.5 18.5 0 012.16-3.19m2.772-4.018A9.633 9.633 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-4.444 4.881M1 1l22 22" strokeWidth="2"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {requirements.map((req, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${req.met ? 'bg-[#00D1FF] border-[#00D1FF]' : 'border-slate-300'}`}>
               <svg className={`w-3.5 h-3.5 ${req.met ? 'text-white' : 'text-transparent'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span className={`text-sm font-medium ${req.met ? 'text-[#00D1FF]' : 'text-slate-400'}`}>{req.text}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <Button onClick={onReset}>Continue</Button>
      </div>
    </div>
  );
};

export default CreatePassword;
