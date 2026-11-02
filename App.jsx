import React, { useState } from 'react';
import NebrasRadarDashboard from './NebrasRadar';
import NebrasAdminPanel from './NebrasAdminPanel';
import { LayoutDashboard, ShieldCheck, Zap } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('radar');

  return (
    <div dir="rtl" className="min-h-screen bg-[#090d16] text-gray-100 font-sans">
      
      {/* شريط التنقل العلوي للتبديل بين المنصة ولوحة التحكم */}
      <nav className="bg-[#111726] border-b border-gray-800 px-6 py-3 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-amber-500 p-2 rounded-xl text-gray-950 font-bold">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <div>
            <span className="font-bold text-base text-white">نِبْرَاس لِلتَّدَاوُل الذَّكِي</span>
            <span className="block text-[10px] text-gray-400">الإصدار الموحد V8.0</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('radar')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'radar'
                ? 'bg-amber-500 text-gray-950 font-bold shadow-lg shadow-amber-500/20'
                : 'bg-[#182032] text-gray-400 hover:text-white border border-gray-800'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            رادار السيولة المباشر
          </button>

          <button
            onClick={() => setActiveTab('admin')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'admin'
                ? 'bg-amber-500 text-gray-950 font-bold shadow-lg shadow-amber-500/20'
                : 'bg-[#182032] text-gray-400 hover:text-white border border-gray-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            لوحة تحكم المشرف (أبو سامر)
          </button>
        </div>
      </nav>

      {/* عرض الشاشة المحددة بناءً على الاختيار */}
      <main>
        {activeTab === 'radar' ? <NebrasRadarDashboard /> : <NebrasAdminPanel />}
      </main>

    </div>
  );
}
