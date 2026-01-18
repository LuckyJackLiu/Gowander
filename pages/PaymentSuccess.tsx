
import React from 'react';
import Button from '../components/Button';

interface PaymentSuccessProps {
  onBackHome: () => void;
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ onBackHome }) => {
  return (
    <div className="flex flex-col h-screen bg-white items-center overflow-hidden relative box-border">
      <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm px-8 pb-[140px]">
         {/* Illustration */}
         <div className="relative w-full aspect-[206/187] mb-8 flex items-center justify-center animate-slide-up">
            <svg width="206" height="187" viewBox="0 0 206 187" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-xl">
                <path d="M111 187C162.639 187 204.5 145.139 204.5 93.5C204.5 41.8614 162.639 0 111 0C59.3619 0 17.5005 41.8614 17.5005 93.5C17.5005 145.139 59.3619 187 111 187Z" fill="url(#paint0_linear_57953_4880)"/>
                <path d="M54.5005 58C54.5005 51.3726 59.8731 46 66.5005 46H155.5C162.128 46 167.5 51.3726 167.5 58V187H54.5005V58Z" fill="white"/>
                <path d="M111.001 127.16C127.525 127.16 140.921 113.764 140.921 97.2401C140.921 80.7157 127.525 67.3201 111.001 67.3201C94.4762 67.3201 81.0806 80.7157 81.0806 97.2401C81.0806 113.764 94.4762 127.16 111.001 127.16Z" fill="url(#paint1_linear_57953_4880)"/>
                <rect width="33" height="33" transform="translate(94.5005 80.9998)" fill="url(#paint2_linear_57953_4880)"/>
                <path d="M101.375 98.8748L106.875 104.375L120.625 90.6248" stroke="white" strokeWidth="6.04018" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M127.207 134.64H94.7937C92.7282 134.64 91.0537 136.314 91.0537 138.38C91.0537 140.445 92.7282 142.12 94.7937 142.12H127.207C129.273 142.12 130.947 140.445 130.947 138.38C130.947 136.314 129.273 134.64 127.207 134.64Z" fill="#5AC5EC" fillOpacity="0.3"/>
                <path d="M138.427 149.6H83.5737C81.5082 149.6 79.8337 151.274 79.8337 153.34C79.8337 155.405 81.5082 157.08 83.5737 157.08H138.427C140.493 157.08 142.167 155.405 142.167 153.34C142.167 151.274 140.493 149.6 138.427 149.6Z" fill="#5AC5EC" fillOpacity="0.3"/>
                <circle cx="34.5005" cy="67" r="4" fill="#FFCE55"/>
                <circle cx="110" cy="23.5" r="8.5" fill="#FFCE55"/>
                <circle cx="186.5" cy="103" r="7.5" fill="url(#paint3_linear_57953_4880)" stroke="#01BFFF"/>
                <path d="M151.5 13L153.582 18.9183L159.5 21L153.582 23.0817L151.5 29L149.419 23.0817L143.5 21L149.419 18.9183L151.5 13Z" fill="#FFCE55"/>
                <path d="M28.1539 86.5306C28.1539 86.5306 26.5075 93.177 18.7099 93.4631C13.5115 93.6539 12.2886 88.2666 6.21599 91.9134C3.51159 93.5374 1.50049 98.4719 1.50049 98.4719" stroke="#FFCE55" strokeWidth="3" strokeLinecap="round"/>
                <path d="M33.4214 132.789L33.5015 132.999L33.7114 133.079L40.0894 135.5L33.7114 137.921L33.5015 138.001L33.4214 138.211L31.0005 144.589L28.5796 138.211L28.4995 138.001L28.2896 137.921L21.9106 135.5L28.2896 133.079L28.4995 132.999L28.5796 132.789L31.0005 126.41L33.4214 132.789Z" fill="url(#paint4_linear_57953_4880)" stroke="#01BFFF"/>
                <circle cx="100.5" cy="11" r="2" fill="#FFCE55"/>
                <path d="M37.8248 11.7623C38.8079 20.3082 58.6674 28.8261 59.1099 21.8343C59.8111 10.7546 33.0276 19.3933 69.568 33.9123" stroke="#01BFFF" strokeWidth="3" strokeLinecap="round"/>
                <path d="M184.5 141.81C189.465 141.106 200.288 142.293 203.87 152.676" stroke="#FF9141" strokeWidth="3" strokeLinecap="round"/>
                <path d="M179.58 45.3673C179.58 45.3673 186.838 49.06 189.88 45.7505C192.655 42.7316 189.446 38.02 192.804 35.6657C195.536 33.75 201.323 35.0118 201.323 35.0118" stroke="#01BFFF" strokeWidth="3" strokeLinecap="round"/>
                <rect x="177" y="82.5" width="6" height="6" rx="1.5" fill="url(#paint5_linear_57953_4880)" stroke="#01BFFF"/>
                <defs>
                <linearGradient id="paint0_linear_57953_4880" x1="111" y1="0" x2="111" y2="187" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E3F7FA"/>
                <stop offset="1" stopColor="#DAF5FF"/>
                </linearGradient>
                <linearGradient id="paint1_linear_57953_4880" x1="140.921" y1="97.2401" x2="81.0806" y2="97.2401" gradientUnits="userSpaceOnUse">
                <stop offset="0.5" stopColor="#00D8F0"/>
                <stop offset="1" stopColor="#00D3E7"/>
                </linearGradient>
                <linearGradient id="paint2_linear_57953_4880" x1="33" y1="16.5" x2="0" y2="16.5" gradientUnits="userSpaceOnUse">
                <stop offset="0.5" stopColor="#00D8F0"/>
                <stop offset="1" stopColor="#00D3E7"/>
                </linearGradient>
                <linearGradient id="paint3_linear_57953_4880" x1="194.5" y1="103" x2="178.5" y2="103" gradientUnits="userSpaceOnUse">
                <stop offset="0.5" stopColor="#00D8F0"/>
                <stop offset="1" stopColor="#00D3E7"/>
                </linearGradient>
                <linearGradient id="paint4_linear_57953_4880" x1="41.5005" y1="135.5" x2="20.5005" y2="135.5" gradientUnits="userSpaceOnUse">
                <stop offset="0.5" stopColor="#00D8F0"/>
                <stop offset="1" stopColor="#00D3E7"/>
                </linearGradient>
                <linearGradient id="paint5_linear_57953_4880" x1="183.5" y1="85.5" x2="176.5" y2="85.5" gradientUnits="userSpaceOnUse">
                <stop offset="0.5" stopColor="#00D8F0"/>
                <stop offset="1" stopColor="#00D3E7"/>
                </linearGradient>
                </defs>
            </svg>
         </div>

         <h2 className="text-[32px] font-bold text-slate-800 mb-2 tracking-tighter leading-none">Payment Successful!</h2>
         <p className="text-slate-400 text-lg mb-8 font-medium">Your order has been successfully paid.</p>

         <div className="w-full border-t-2 border-dashed border-[#EEE] mb-8"></div>

         <div className="w-full space-y-4 mb-8">
            <div className="flex justify-between items-center">
               <span className="text-slate-400 font-bold text-sm">Order Number</span>
               <span className="text-slate-800 font-bold text-sm">230425178065</span>
            </div>
            <div className="flex justify-between items-center">
               <span className="text-slate-400 font-bold text-sm">Payment Method</span>
               <span className="text-slate-800 font-bold text-sm">WeChat Pay</span>
            </div>
            <div className="flex justify-between items-center">
               <span className="text-slate-400 font-bold text-sm">Purchase Type</span>
               <span className="text-slate-800 font-bold text-sm">Travel Ticket Purchase</span>
            </div>
            <div className="flex justify-between items-center">
               <span className="text-slate-400 font-bold text-sm">Name</span>
               <span className="text-slate-800 font-bold text-sm">Jack Lau</span>
            </div>
         </div>

         <div className="w-full border-t-2 border-dashed border-[#EEE] pt-8 flex justify-between items-center">
            <span className="text-slate-300 font-bold text-sm">Total Paid</span>
            <span className="text-[32px] font-bold text-[#00D1FF] tracking-tighter">RM209.3</span>
         </div>
      </div>

      {/* Unified Bottom Bar for Success Flow */}
      <div className="fixed bottom-0 left-0 right-0 z-[1000] bg-white pt-4 px-8 pb-[safe-area-inset-bottom] border-t border-slate-50">
         <div className="w-full space-y-4 mb-6">
            <Button 
                variant="outline" 
                className="h-[58px] text-lg rounded-[30px] border-slate-200 text-slate-500 font-bold"
            >
              Download PDF Invoice
            </Button>
            <Button 
                onClick={onBackHome} 
                className="h-[58px] text-lg rounded-[30px] shadow-[0_20px_40px_rgba(0,209,255,0.2)] font-bold"
            >
              Back to Home
            </Button>
         </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
