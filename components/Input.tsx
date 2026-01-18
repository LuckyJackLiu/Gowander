
import React, { useState } from 'react';

interface InputProps {
  label?: string;
  placeholder: string;
  type?: 'text' | 'email' | 'password' | 'tel';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const Input: React.FC<InputProps> = ({ label, placeholder, type = 'text', value, onChange, onFocus, onBlur }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2 ml-2 uppercase tracking-widest">{label}</label>}
      <div className="relative">
        <input
          type={isPassword ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className="w-full bg-[#F8FAFC] dark:bg-slate-800 border-none rounded-[24px] py-5 px-6 focus:ring-2 focus:ring-[#00D1FF] outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600 font-bold text-slate-700 dark:text-slate-100"
        />
        {isPassword && (
          <button 
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-600"
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
