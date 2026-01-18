
import React from 'react';
import Button from '../components/Button';

interface SuccessProps {
  title: string;
  description: string;
  buttonText: string;
  onContinue: () => void;
}

const Success: React.FC<SuccessProps> = ({ title, description, buttonText, onContinue }) => {
  return (
    <div className="flex flex-col h-screen bg-white p-8 items-center text-center">
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="relative mb-12 flex items-center justify-center animate-slide-up">
           <svg width="206" height="187" viewBox="0 0 206 187" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M111 187C162.639 187 204.5 145.139 204.5 93.5C204.5 41.8614 162.639 0 111 0C59.3617 0 17.5004 41.8614 17.5004 93.5C17.5004 145.139 59.3617 187 111 187Z" fill="url(#paint0_linear_318_14585)"/>
            <path d="M54.5004 58C54.5004 51.3726 59.8729 46 66.5004 46H155.5C162.128 46 167.5 51.3726 167.5 58V187H54.5004V58Z" fill="white"/>
            <path d="M111 127.16C127.525 127.16 140.92 113.764 140.92 97.2401C140.92 80.7157 127.525 67.3201 111 67.3201C94.476 67.3201 81.0803 80.7157 81.0803 97.2401C81.0803 113.764 94.476 127.16 111 127.16Z" fill="url(#paint1_linear_318_14585)"/>
            <rect width="33" height="33" transform="translate(94.5002 80.9998)" fill="url(#paint2_linear_318_14585)"/>
            <path d="M101.375 98.8748L106.875 104.375L120.625 90.6248" stroke="white" strokeWidth="6.04018" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M127.207 134.64H94.7937C92.7282 134.64 91.0537 136.314 91.0537 138.38C91.0537 140.445 92.7282 142.12 94.7937 142.12H127.207C129.273 142.12 130.947 140.445 130.947 138.38C130.947 136.314 129.273 134.64 127.207 134.64Z" fill="#5AC5EC" fillOpacity="0.3"/>
            <path d="M138.427 149.6H83.5736C81.5081 149.6 79.8336 151.274 79.8336 153.34C79.8336 155.405 81.5081 157.08 83.5736 157.08H138.427C140.492 157.08 142.167 155.405 142.167 153.34C142.167 151.274 140.492 149.6 138.427 149.6Z" fill="#5AC5EC" fillOpacity="0.3"/>
            <circle cx="34.5004" cy="67" r="4" fill="#FFCE55"/>
            <circle cx="110" cy="23.5" r="8.5" fill="#FFCE55"/>
            <circle cx="186.5" cy="103" r="7.5" fill="url(#paint3_linear_318_14585)" stroke="#01BFFF"/>
            <path d="M151.5 13L153.582 18.9183L159.5 21L153.582 23.0817L151.5 29L149.419 23.0817L143.5 21L149.419 18.9183L151.5 13Z" fill="#FFCE55"/>
            <path d="M28.1538 86.5306C28.1538 86.5306 26.5074 93.177 18.7098 93.4631C13.5114 93.6539 12.2885 88.2666 6.21586 91.9134C3.51147 93.5374 1.50037 98.4719 1.50037 98.4719" stroke="#FFCE55" strokeWidth="3" strokeLinecap="round"/>
            <path d="M33.4213 132.789L33.5013 132.999L33.7113 133.079L40.0892 135.5L33.7113 137.921L33.5013 138.001L33.4213 138.211L31.0004 144.589L28.5795 138.211L28.4994 138.001L28.2894 137.921L21.9105 135.5L28.2894 133.079L28.4994 132.999L28.5795 132.789L31.0004 126.41L33.4213 132.789Z" fill="url(#paint4_linear_318_14585)" stroke="#01BFFF"/>
            <circle cx="100.5" cy="11" r="2" fill="#FFCE55"/>
            <path d="M37.8246 11.7623C38.8077 20.3082 58.6672 28.8261 59.1097 21.8343C59.8109 10.7546 33.0274 19.3933 69.5677 33.9123" stroke="#01BFFF" strokeWidth="3" strokeLinecap="round"/>
            <path d="M184.5 141.81C189.465 141.106 200.288 142.293 203.87 152.676" stroke="#FF9141" strokeWidth="3" strokeLinecap="round"/>
            <path d="M179.579 45.3673C179.579 45.3673 186.838 49.06 189.88 45.7505C192.655 42.7316 189.446 38.02 192.804 35.6657C195.535 33.75 201.323 35.0118 201.323 35.0118" stroke="#01BFFF" strokeWidth="3" strokeLinecap="round"/>
            <rect x="177" y="82.5" width="6" height="6" rx="1.5" fill="url(#paint5_linear_318_14585)" stroke="#01BFFF"/>
            <defs>
            <linearGradient id="paint0_linear_318_14585" x1="111" y1="0" x2="111" y2="187" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E3F7FA"/>
            <stop offset="1" stopColor="#DAF5FF"/>
            </linearGradient>
            <linearGradient id="paint1_linear_318_14585" x1="140.92" y1="97.2401" x2="81.0803" y2="97.2401" gradientUnits="userSpaceOnUse">
            <stop offset="0.5" stopColor="#00D8F0"/>
            <stop offset="1" stopColor="#00D3E7"/>
            </linearGradient>
            <linearGradient id="paint2_linear_318_14585" x1="33" y1="16.5" x2="0" y2="16.5" gradientUnits="userSpaceOnUse">
            <stop offset="0.5" stopColor="#00D8F0"/>
            <stop offset="1" stopColor="#00D3E7"/>
            </linearGradient>
            <linearGradient id="paint3_linear_318_14585" x1="194.5" y1="103" x2="178.5" y2="103" gradientUnits="userSpaceOnUse">
            <stop offset="0.5" stopColor="#00D8F0"/>
            <stop offset="1" stopColor="#00D3E7"/>
            </linearGradient>
            <linearGradient id="paint4_linear_318_14585" x1="41.5004" y1="135.5" x2="20.5004" y2="135.5" gradientUnits="userSpaceOnUse">
            <stop offset="0.5" stopColor="#00D8F0"/>
            <stop offset="1" stopColor="#00D3E7"/>
            </linearGradient>
            <linearGradient id="paint5_linear_318_14585" x1="183.5" y1="85.5" x2="176.5" y2="85.5" gradientUnits="userSpaceOnUse">
            <stop offset="0.5" stopColor="#00D8F0"/>
            <stop offset="1" stopColor="#00D3E7"/>
            </linearGradient>
            </defs>
          </svg>
        </div>

        <h2 className="text-3xl font-black text-slate-800 mb-4 tracking-tight">{title}</h2>
        <p className="text-slate-400 text-lg max-w-[280px] leading-relaxed font-medium">{description}</p>
      </div>

      <div className="w-full pb-8">
        <Button onClick={onContinue} className="h-16 text-lg rounded-[28px] shadow-xl shadow-cyan-100">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Success;
