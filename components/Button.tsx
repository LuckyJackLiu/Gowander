
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  fullWidth = true,
  className = '',
  icon,
  disabled = false
}) => {
  const baseStyles = "flex items-center justify-center py-4 px-6 rounded-full font-bold transition-all duration-200 active:scale-95 text-base disabled:opacity-50 disabled:active:scale-100";
  
  const variants = {
    primary: "bg-[#00D1FF] text-white hover:bg-[#00B8E0] shadow-lg shadow-cyan-200/50 dark:shadow-cyan-900/20",
    secondary: "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700",
    outline: "bg-white dark:bg-transparent border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-500"
  };

  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
