
import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

interface ForgotPasswordProps {
  onBack: () => void;
  onSend: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onBack, onSend }) => {
  const [identifier, setIdentifier] = useState('');

  return (
    <div className="flex flex-col h-screen bg-white p-8">
      <div className="flex items-center mb-10">
        <button onClick={onBack} className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <span className="flex-grow text-center font-bold text-lg text-slate-800 pr-12">忘记密码</span>
      </div>

      <h2 className="text-4xl font-bold text-slate-800 mb-4">Forgot Password</h2>
      <p className="text-slate-500 text-lg mb-12">
        We'll send instructions to your email to help you reset your password
      </p>

      <div className="space-y-6">
        <div className="relative">
          <label className="block text-sm font-semibold text-slate-600 mb-3">Email or phone number</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-slate-400">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" strokeWidth="2"/><line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2"/></svg>
            </div>
            <input 
              type="text"
              placeholder="Enter your email or phone number"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-[28px] py-4 pl-14 pr-6 focus:ring-2 focus:ring-[#00D1FF] focus:border-transparent outline-none transition-all placeholder:text-slate-300"
            />
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Button onClick={onSend}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default ForgotPassword;
