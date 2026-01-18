
export type AuthStep = 
  | 'splash' 
  | 'auth-choice' 
  | 'login' 
  | 'register' 
  | 'verify-phone' 
  | 'verify-otp' 
  | 'register-success'
  | 'forgot-password'
  | 'create-password'
  | 'reset-success'
  | 'home'
  | 'search'
  | 'favorites'
  | 'details'
  | 'booking-step1'
  | 'booking-details'
  | 'booking-step2'
  | 'payment-method'
  | 'checkout'
  | 'write-review'
  | 'profile'
  | 'personal-info'
  | 'addresses'
  | 'notification-settings'
  | 'notifications-list'
  | 'language'
  | 'theme-selection'
  | 'change-password-method'
  | 'verify-reset-code'
  | 'password-success'
  | 'help-support'
  | 'terms-of-service'
  | 'error-404'
  | 'add-address'
  | 'add-card'
  | 'recommended'
  | 'group-tours'
  | 'discover'
  | 'calendar'
  | 'payment-success'
  | 'refund-policy'
  | 'my-bookings'
  | 'booking-history-detail';

export interface TravelItem {
  id: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  image: string;
  category: string;
  type?: string;
  beds?: number;
  hasBreakfast?: boolean;
  hasBathtub?: boolean;
  progress?: number;
  dates?: string;
  status?: 'Completed' | 'Starting Soon' | 'Cancelled';
}

export interface BookingInfo {
  name: string;
  email: string;
  phone: string;
  gender: 'Male' | 'Female';
  checkIn: string;
  checkOut: string;
  paymentMethod?: string;
}
