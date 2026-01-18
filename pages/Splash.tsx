
import React from 'react';

interface SplashProps {
  onNext: () => void;
}

const Splash: React.FC<SplashProps> = ({ onNext }) => {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-black">
      <img 
        src="https://i.pinimg.com/736x/53/a3/ab/53a3ab4f61288dbfb1329cbf0dec8cd8.jpg" 
        className="absolute inset-0 w-full h-full object-cover scale-110 opacity-60"
        alt="Travel Background"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-8 w-full h-full">
        <div className="flex-grow flex flex-col items-center justify-center">
            <div className="mb-10 drop-shadow-[0_20px_50px_rgba(0,160,240,0.5)] transition-transform hover:scale-105 duration-700">
                <svg width="140" height="140" viewBox="0 0 121 121" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-[32px] overflow-hidden">
                    <rect width="121" height="121" rx="26" fill="url(#paint0_linear_58070_5483)"/>
                    <g filter="url(#filter0_d_58070_5483)">
                    <path d="M63.9368 37.4834L63.8774 37.5079C62.2076 38.2062 60.2974 37.71 59.1269 36.3226C58.2745 35.3135 57.2135 34.5003 55.9441 34.0685C49.3366 31.8266 42.5038 38.5905 39.5463 43.866C36.4975 49.3068 34.7059 57.6863 37.9176 63.4043C43.3394 73.0562 56.6017 63.7764 59.0036 56.2131C59.3613 55.0876 60.0949 51.6467 58.1542 51.6191C55.1374 51.5762 53.9593 54.6787 53.4676 57.1043C53.1221 58.8102 51.743 60.1088 50.0276 60.3416C47.1919 60.7244 44.8585 58.1166 45.5389 55.3203C46.4034 51.7661 48.4066 48.46 51.2088 46.2273C56.8239 41.7527 64.4619 42.4985 66.914 49.8826C70.8396 61.6968 56.6214 75.266 45.5252 75.8555C33.2508 76.5063 27.4698 65.2189 27.9508 54.2821C28.5535 40.5996 41.2298 22.5988 56.4738 25.5941C60.0462 26.2955 63.1757 28.2494 65.4741 30.963C67.29 33.1053 66.5198 36.4038 63.9352 37.4849L63.9368 37.4834Z" fill="white"/>
                    <path d="M90.5176 45.3955C95.5497 50.8547 93.3761 60.4852 88.8676 65.6045C80.9708 74.572 69.2124 70.4481 70.0374 58.0979C70.3829 52.9297 73.6144 47.1581 78.0164 44.4415C82.082 41.9316 87.0958 41.6835 90.5176 45.3955ZM82.0637 60.8665C83.9405 59.0366 85.9923 54.7305 85.1521 52.1043C84.3865 49.7062 82.0941 51.2666 81.0074 52.458C79.3756 54.2451 77.1305 59.0948 78.4669 61.3719C79.4396 63.0288 81.1169 61.7899 82.0637 60.8665Z" fill="white"/>
                    <path d="M79.0728 79.3743C81.5493 80.3804 82.3864 83.4997 80.7334 85.6115C79.2843 87.4644 77.505 89.4612 75.8778 90.6158C66.6279 97.1853 55.381 96.1868 49.1083 94.1287C47.0656 93.4595 45.0199 92.3003 43.3303 91.1656C41.1415 89.697 40.9497 86.5318 42.9331 84.7937L42.9589 84.7708C44.3654 83.538 46.4233 83.4599 47.9408 84.5533C49.3655 85.5808 50.9196 86.4277 52.5681 87.0295C58.1436 89.0631 64.4848 88.374 69.4758 85.1766C71.3982 83.9454 73.0315 82.4048 74.4075 80.6285C75.5064 79.2089 77.4137 78.7005 79.0728 79.3743H79.0728Z" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_58070_5483" x="17.9231" y="19.2638" width="85.4863" height="90.4153" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_58070_5483"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_58070_5483" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_58070_5483" x1="111.027" y1="121" x2="8.64286" y2="4.98627" gradientUnits="userSpaceOnUse">
                    <stop offset="0.5" stopColor="#00A0F0"/>
                    <stop offset="1" stopColor="#12EBFF"/>
                    </linearGradient>
                    </defs>
                </svg>
            </div>
            
            <h1 className="text-white text-5xl font-black mb-4 drop-shadow-2xl tracking-tighter">GoWander</h1>
            <div className="w-14 h-1.5 bg-[#00D1FF] rounded-full opacity-80 shadow-[0_0_15px_rgba(0,209,255,0.8)]"></div>
        </div>

        <div className="pb-24 flex flex-col items-center w-full">
            <button 
              onClick={onNext}
              className="bg-white/10 backdrop-blur-3xl p-7 rounded-full border border-white/30 hover:scale-110 active:scale-95 transition-all mb-12 group shadow-2xl relative"
            >
              <div className="absolute inset-0 bg-[#00D1FF]/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>

            <p className="text-white text-2xl font-black tracking-wide drop-shadow-lg italic">
              Wander the world your way
            </p>
            <p className="text-white/40 text-[10px] mt-4 font-black uppercase tracking-[0.3em]">Start Your Journey</p>
        </div>
      </div>
    </div>
  );
};

export default Splash;
