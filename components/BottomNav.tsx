
import React from 'react';
import { AuthStep } from '../types';
import { HomeIcon, ExploreIcon, BookingsIcon, FavoritesIcon, PersonalIcon } from './NavIcons';

interface BottomNavProps {
  onNavigate: (step: AuthStep) => void;
  activeStep: AuthStep;
  className?: string;
}

const BottomNav: React.FC<BottomNavProps> = ({ onNavigate, activeStep, className = '' }) => {
  const navItems = [
    { id: 'home', icon: HomeIcon, label: 'Home' },
    { id: 'discover', icon: ExploreIcon, label: 'Explore' },
    { id: 'my-bookings', icon: BookingsIcon, label: 'Bookings' },
    { id: 'favorites', icon: FavoritesIcon, label: 'Favorites' },
    { id: 'profile', icon: PersonalIcon, label: 'Personal' },
  ];

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border-t border-slate-200/40 dark:border-slate-800/40 flex justify-around items-center h-[72px] px-2 shadow-[0_-10px_40px_rgba(0,0,0,0.06)] z-[100] pb-[12px] md:hidden ${className}`}>
      {navItems.map((item) => {
        const isActive = activeStep === item.id;
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id as AuthStep)}
            className="flex flex-col items-center justify-center gap-1 group transition-all active:scale-[0.95] flex-1 h-full pt-1"
          >
            <div className={`transition-colors duration-300`}>
              <Icon isActive={isActive} size={24} />
            </div>
            <span className={`text-[12px] font-bold tracking-tight leading-none transition-colors duration-300 ${isActive ? 'text-[#01BFFF]' : 'text-slate-400 dark:text-slate-600'}`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
