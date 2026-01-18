
import React, { useState, useEffect } from 'react';
import { Home as HomeIcon, Search as SearchIcon, Heart, User, Compass, BookOpen } from 'lucide-react';
import Splash from './pages/Splash';
import AuthChoice from './pages/AuthChoice';
import Login from './pages/Login';
import Register from './pages/Register';
import VerifyPhone from './pages/VerifyPhone';
import VerifyOTP from './pages/VerifyOTP';
import Success from './pages/Success';
import CreatePassword from './pages/CreatePassword';
import Home from './pages/Home';
import Details from './pages/Details';
import Favorites from './pages/Favorites';
import BookingStep1 from './pages/BookingStep1';
import BookingStep2 from './pages/BookingStep2';
import BookingDetails from './pages/BookingDetails';
import ReviewPage from './pages/ReviewPage';
import PaymentMethod from './pages/PaymentMethod';
import Checkout from './pages/Checkout';
import NotificationSettings from './pages/NotificationSettings';
import LanguageSelection from './pages/LanguageSelection';
import ThemeSelection from './pages/ThemeSelection';
import NotificationsList from './pages/NotificationsList';
import ChangePasswordMethod from './pages/ChangePasswordMethod';
import VerifyResetCode from './pages/VerifyResetCode';
import Profile from './pages/Profile';
import PersonalInfo from './pages/PersonalInfo';
import AddressList from './pages/AddressList';
import HelpSupport from './pages/HelpSupport';
import TermsOfService from './pages/TermsOfService';
import AddAddress from './pages/AddAddress';
import AddCard from './pages/AddCard';
import Recommended from './pages/Recommended';
import GroupTours from './pages/GroupTours';
import DiscoverView from './pages/DiscoverView';
import CalendarPage from './pages/CalendarPage';
import PaymentSuccess from './pages/PaymentSuccess';
import RefundPolicy from './pages/RefundPolicy';
import MyBookings from './pages/MyBookings';
import BookingHistoryDetail from './pages/BookingHistoryDetail';
import Search from './pages/Search';
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import { AuthStep, TravelItem, BookingInfo } from './types';

const App: React.FC = () => {
  const [step, setStep] = useState<AuthStep>('splash');
  const [selectedItem, setSelectedItem] = useState<TravelItem | null>(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [favorites, setFavorites] = useState<TravelItem[]>([]);
  const [bookingInfo, setBookingInfo] = useState<BookingInfo>({
    name: 'Jack Lau',
    email: 'jack.lau@gowander.com',
    phone: '123456789',
    gender: 'Male',
    checkIn: 'Jan 16',
    checkOut: 'Jan 18',
    paymentMethod: 'Mastercard'
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const navigateTo = (newStep: AuthStep) => {
    setStep(newStep);
  };

  const handleLogout = () => {
    setShowLogoutModal(false);
    navigateTo('splash');
  };

  const handleDetails = (item: TravelItem) => {
    setSelectedItem(item);
    navigateTo('details');
  };

  const toggleFavorite = (item: TravelItem) => {
    setFavorites(prev => {
      const isFav = prev.some(f => f.id === item.id);
      if (isFav) {
        return prev.filter(f => f.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const isFavorited = (id: string) => favorites.some(f => f.id === id);

  const navSteps: AuthStep[] = ['home', 'discover', 'my-bookings', 'favorites', 'profile', 'search'];
  const showNav = navSteps.includes(step);

  const renderStep = () => {
    switch (step) {
      case 'splash': return <Splash onNext={() => navigateTo('auth-choice')} />;
      case 'auth-choice': return <AuthChoice onEmailAuth={() => navigateTo('register')} onLoginLink={() => navigateTo('login')} />;
      case 'login': return <Login onBack={() => navigateTo('auth-choice')} onSignUp={() => navigateTo('register')} onLogin={() => navigateTo('home')} onForgotPassword={() => navigateTo('change-password-method')} />;
      case 'register': return <Register onBack={() => navigateTo('auth-choice')} onLoginLink={() => navigateTo('login')} onContinue={() => navigateTo('verify-phone')} />;
      case 'verify-phone': return <VerifyPhone onBack={() => navigateTo('register')} onContinue={() => navigateTo('verify-otp')} />;
      case 'verify-otp': return <VerifyOTP onBack={() => navigateTo('verify-phone')} onConfirm={() => navigateTo('register-success')} />;
      case 'register-success': return <Success title="Congratulations!" description="Your account is ready to use." buttonText="Go to Home" onContinue={() => navigateTo('home')} />;
      case 'home': return <Home onSelectItem={handleDetails} onNavigate={navigateTo} activeStep="home" onToggleFavorite={toggleFavorite} isFavorited={isFavorited} />;
      case 'search': return <Search onBack={() => navigateTo('home')} onSelectItem={handleDetails} onToggleFavorite={toggleFavorite} isFavorited={isFavorited} />;
      case 'discover': return <DiscoverView onSelectItem={handleDetails} onNavigate={navigateTo} onToggleFavorite={toggleFavorite} isFavorited={isFavorited} />;
      case 'group-tours': return <GroupTours onBack={() => navigateTo('home')} onSelectItem={handleDetails} onToggleFavorite={toggleFavorite} isFavorited={isFavorited} />;
      case 'recommended': return <Recommended onBack={() => navigateTo('home')} onSelectItem={handleDetails} onToggleFavorite={toggleFavorite} isFavorited={isFavorited} />;
      case 'favorites': return <Favorites onBack={() => navigateTo('home')} onSelectItem={handleDetails} onNavigate={navigateTo} favorites={favorites} onToggleFavorite={toggleFavorite} />;
      case 'details': return <Details item={selectedItem} onBack={() => navigateTo('home')} onBook={() => navigateTo('calendar')} onWriteReview={() => navigateTo('write-review')} isFavorited={selectedItem ? isFavorited(selectedItem.id) : false} onToggleFavorite={selectedItem ? () => toggleFavorite(selectedItem) : () => {}} />;
      case 'calendar': return <CalendarPage onBack={() => navigateTo('details')} onNext={() => navigateTo('booking-step1')} />;
      case 'booking-step1': return <BookingStep1 item={selectedItem} bookingInfo={bookingInfo} onBack={() => navigateTo('calendar')} onEditDetails={() => navigateTo('booking-details')} onNext={() => navigateTo('booking-step2')} />;
      case 'booking-details': return <BookingDetails bookingInfo={bookingInfo} setBookingInfo={setBookingInfo} onBack={() => navigateTo('booking-step1')} />;
      case 'booking-step2': return <BookingStep2 item={selectedItem} onBack={() => navigateTo('booking-step1')} onNext={() => navigateTo('payment-method')} />;
      case 'payment-method': return <PaymentMethod onBack={() => navigateTo('booking-step2')} onNext={() => navigateTo('checkout')} onSelect={(m) => setBookingInfo({...bookingInfo, paymentMethod: m})} selected={bookingInfo.paymentMethod} onAdd={() => navigateTo('add-card')} />;
      case 'checkout': return <Checkout item={selectedItem} bookingInfo={bookingInfo} onBack={() => navigateTo('payment-method')} onCheckout={() => navigateTo('payment-success')} />;
      case 'payment-success': return <PaymentSuccess onBackHome={() => navigateTo('home')} />;
      case 'my-bookings': return <MyBookings onBack={() => navigateTo('home')} onNavigate={navigateTo} onSelectItem={(item) => { setSelectedItem(item); navigateTo('booking-history-detail'); }} />;
      case 'booking-history-detail': return <BookingHistoryDetail item={selectedItem} onBack={() => navigateTo('my-bookings')} onWriteReview={() => navigateTo('write-review')} />;
      case 'profile': return <Profile onNavigate={navigateTo} onLogout={() => setShowLogoutModal(true)} theme={theme} />;
      case 'personal-info': return <PersonalInfo onBack={() => navigateTo('profile')} bookingInfo={bookingInfo} />;
      case 'addresses': return <AddressList onBack={() => navigateTo('profile')} onAdd={() => navigateTo('add-address')} />;
      case 'help-support': return <HelpSupport onBack={() => navigateTo('profile')} />;
      case 'terms-of-service': return <TermsOfService onBack={() => navigateTo('profile')} />;
      case 'add-address': return <AddAddress onBack={() => navigateTo('addresses')} />;
      case 'add-card': return <AddCard onBack={() => navigateTo('payment-method')} />;
      case 'notification-settings': return <NotificationSettings onBack={() => navigateTo('profile')} />;
      case 'language': return <LanguageSelection onBack={() => navigateTo('profile')} />;
      case 'theme-selection': return <ThemeSelection onBack={() => navigateTo('profile')} theme={theme} setTheme={setTheme} />;
      case 'notifications-list': return <NotificationsList onBack={() => navigateTo('home')} onSettings={() => navigateTo('notification-settings')} />;
      case 'change-password-method': return <ChangePasswordMethod onBack={() => navigateTo('login')} onContinue={() => navigateTo('verify-reset-code')} />;
      case 'verify-reset-code': return <VerifyResetCode onBack={() => navigateTo('change-password-method')} onVerify={() => navigateTo('create-password')} />;
      case 'create-password': return <CreatePassword onBack={() => navigateTo('verify-reset-code')} onReset={() => navigateTo('password-success')} />;
      case 'write-review': return <ReviewPage onBack={() => navigateTo('home')} onSubmit={() => navigateTo('home')} />;
      default: return <Home onSelectItem={handleDetails} onNavigate={navigateTo} activeStep="home" onToggleFavorite={toggleFavorite} isFavorited={isFavorited} />;
    }
  };

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen h-screen flex overflow-hidden relative theme-transition">
      {/* Sidebar - Desktop Only */}
      {showNav && <Sidebar activeStep={step} onNavigate={navigateTo} className="hidden md:flex" />}

      {/* Main Container */}
      <div className="flex-1 flex flex-col h-full min-w-0 relative">
        {/* Global Status Bar - Mobile Only View */}
        <div className="flex-shrink-0 h-[44px] bg-white/80 dark:bg-slate-950/80 backdrop-blur-md flex justify-between items-center px-8 z-[110] relative md:hidden pointer-events-none">
          <span className="text-[14px] font-bold text-slate-800 dark:text-slate-100">9:41</span>
          <div className="flex gap-[5px] items-center">
            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" className="text-slate-800 dark:text-slate-100"><rect x="0" y="7" width="3" height="4" rx="1" fill="currentColor"/><rect x="4" y="5" width="3" height="6" rx="1" fill="currentColor"/><rect x="8" y="2.5" width="3" height="8.5" rx="1" fill="currentColor"/><rect x="12" y="0" width="3" height="11" rx="1" fill="currentColor"/></svg>
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" className="text-slate-800 dark:text-slate-100"><path d="M7.5 11C8.32843 11 9 10.3284 9 9.5C9 8.67157 8.32843 8 7.5 8C6.67157 8 6 8.67157 6 9.5C6 10.3284 6.67157 11 7.5 11Z" fill="currentColor"/><path d="M7.5 6C5.567 6 3.824 6.784 2.561 8.047L1.147 6.633C2.775 5.005 5.022 4 7.5 4C9.978 4 12.225 5.005 13.853 6.633L12.439 8.047C11.176 6.784 9.433 6 7.5 6Z" fill="currentColor"/><path d="M7.5 0C4.324 0 1.458 1.287 0 3.37L1.414 4.784C2.651 3.061 4.951 2 7.5 2C10.049 2 12.349 3.061 13.586 4.784L15 3.37C13.542 1.287 10.676 0 7.5 0Z" fill="currentColor"/></svg>
            <div className="relative w-[22px] h-[10px] text-slate-800 dark:text-slate-100"><svg width="25" height="12" viewBox="0 0 25 12" fill="none" className="scale-75 origin-right"><rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="currentColor" strokeOpacity="0.35"/><path d="M22.5 4C23.3284 4 24 4.67157 24 5.5V6.5C24 7.32843 23.3284 8 22.5 8V4Z" fill="currentColor" fillOpacity="0.4"/><rect x="2" y="2" width="16" height="8" rx="1.5" fill="currentColor"/></svg></div>
          </div>
        </div>

        {/* Scrollable Middle Content */}
        <main className="flex-1 overflow-y-auto no-scrollbar relative">
          {renderStep()}
        </main>

        {/* Bottom Navigation - Mobile Only */}
        {showNav && <BottomNav activeStep={step} onNavigate={navigateTo} />}

        {/* Global Bottom Safe Area Indicator */}
        {showNav && (
          <div className="flex-shrink-0 h-[env(safe-area-inset-bottom,20px)] bg-white dark:bg-slate-950 z-[110] relative md:hidden">
            <div className="absolute bottom-[9px] left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-black/20 dark:bg-white/20 rounded-full"></div>
          </div>
        )}
      </div>

      {showLogoutModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-8">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setShowLogoutModal(false)}></div>
          <div className="relative w-full max-w-sm bg-white dark:bg-slate-900 rounded-[48px] p-10 animate-slide-up shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
            <h3 className="text-3xl font-black text-slate-800 dark:text-white text-center mb-10 tracking-tighter leading-none">Ready to leave?</h3>
            <div className="space-y-4">
              <button onClick={handleLogout} className="w-full bg-[#01BFFF] text-white py-5 rounded-[28px] font-black text-lg shadow-xl shadow-cyan-100 dark:shadow-none active:scale-95 transition-all">Log me out</button>
              <button onClick={() => setShowLogoutModal(false)} className="w-full bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 py-5 rounded-[28px] font-black text-lg active:scale-95 transition-all uppercase tracking-widest text-[10px]">Stay logged in</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
