/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  // 페이지 로드 1.5초 후 팝업 시뮬레이션 (유저 UX 고려)
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#F5F6F7]">
      
      {/* 1. 배경: 실제 마이리얼트립 홈페이지 (iframe) */}
      <iframe 
        src="https://www.myrealtrip.com/" 
        className="w-full h-full border-none"
        title="MyRealTrip Live Site"
      />

      {/* 2. 오버레이: 이민주 BD의 기획 팝업 */}
      {showPopup && (
        <div className="absolute inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-[3px] animate-fadeIn">
          <div className="relative w-[380px] bg-white rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.5)] animate-popIn border border-[#f1f3f5]">
            
            {/* 팝업 이미지 구역 */}
            <div className="relative h-[520px] overflow-hidden">
              <img 
                src="https://i.imgur.com/sXTpmBC.jpg" // 블랙스완 이미지
                alt="시드니 투어 기획"
                className="w-full h-full object-cover transition-transform duration-[12s] hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/40 p-7 flex flex-col justify-between text-white">
                <div>
                  {/* */}
                </div>
                
                <div className="space-y-4">
                  {/* 그라데이션 타이틀 */}
                  <h2 className="text-[38px] font-black leading-tight tracking-tighter">
                    시드니 <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#51ABF3] to-[#BCF2FD] animate-gradient">
                      가족 베스트
                    </span><br/> 
                    여행지 오픈!
                  </h2>
                  
                  <p className="text-[16px] font-semibold leading-relaxed opacity-95 border-l-2 border-[#51ABF3] pl-3">
                    멀리 가지 않아도 충분합니다.<br/>
                    오직 <span className="font-bold text-[#51ABF3]">마이리얼트립 투어</span>에서만 만나는<br/>
                    블랙스완 & 코스탈 워크 반나절 투어 오픈!
                  </p>
                </div>
              </div>
            </div>

            {/* 팝업 하단 버튼 (UX 최적화) */}
            <div className="flex border-t divide-x h-[68px] text-[15px] font-bold">
              <button 
                onClick={() => setShowPopup(false)}
                className="flex-1 text-gray-400 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
              >
                오늘 그만 보기
              </button>
              <button 
                onClick={() => window.open('https://www.myrealtrip.com/', '_blank')} // 상품 페이지로 연결
                className="flex-1 text-[#51ABF3] hover:bg-blue-50 active:bg-blue-100 transition-colors cursor-pointer"
              >
                <span className="flex items-center justify-center gap-1.5">
                  상품 보러가기
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none"><path d="M1 9L5 5L1 1" stroke="#51ABF3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </button>
            </div>

            {/* 닫기 아이콘 */}
            <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes popIn { 
          from { transform: scale(0.9) translateY(40px); opacity: 0; } 
          to { transform: scale(1) translateY(0); opacity: 1; } 
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out; }
        .animate-popIn { animation: popIn 0.5s cubic-bezier(0.17, 0.67, 0.35, 1.2); }
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient 3s ease infinite; 
        }
      `}} />
    </div>
  );
}
