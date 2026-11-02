import React, { useState } from 'react';
import { 
  Users, 
  ShieldCheck, 
  Settings, 
  Activity, 
  BellRing, 
  Database, 
  Lock, 
  CheckCircle, 
  AlertTriangle,
  Power,
  Sliders
} from 'lucide-react';

export default function NebrasAdminPanel() {
  const [systemStatus, setSystemStatus] = useState(true);
  const [subscribers, setSubscribers] = useState([
    { id: 1, name: 'مشترك VIP - 01', expiry: '2026-12-30', status: 'نشط', plan: 'سنوي' },
    { id: 2, name: 'مشترك VIP - 02', expiry: '2026-06-15', status: 'نشط', plan: 'شهري' },
    { id: 3, name: 'مشترك VIP - 03', expiry: '2026-03-10', status: 'منتهي', plan: 'تجريبي' }
  ]);

  const [radarThreshold, setRadarThreshold] = useState('500000');

  return (
    <div dir="rtl" className="min-h-screen bg-[#090d16] text-gray-100 p-6 font-sans">
      
      {/* رأس لوحة التحكم */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 bg-[#111726] p-5 rounded-2xl border border-gray-800 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-white">لوحة تحكم المشرف (Admin Control Panel)</h1>
            <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2.5 py-0.5 rounded-md font-mono">أبو سامر</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">إدارة نظام نِبْرَاس للسيولة، اشتراكات الـ VIP، وإعدادات الرادار الآلي</p>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setSystemStatus(!systemStatus)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
              systemStatus 
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
            }`}
          >
            <Power className="w-4 h-4" />
            {systemStatus ? 'النظام يعمل بكفاءة' : 'النظام في وضع الصيانة'}
          </button>
        </div>
      </header>

      {/* إحصائيات سريعة للوحة التحكم */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-[#111726] p-4 rounded-2xl border border-gray-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 block mb-1">إجمالي المشتركين النشطين</span>
            <span className="text-xl font-bold text-white font-mono">142 مشترك</span>
          </div>
          <Users className="w-8 h-8 text-amber-400 bg-amber-500/10 p-2 rounded-xl" />
        </div>

        <div className="bg-[#111726] p-4 rounded-2xl border border-gray-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 block mb-1">حالة اتصال Binance API</span>
            <span className="text-xl font-bold text-emerald-400 font-mono">متصل (0ms تأخير)</span>
          </div>
          <Activity className="w-8 h-8 text-emerald-400 bg-emerald-500/10 p-2 rounded-xl" />
        </div>

        <div className="bg-[#111726] p-4 rounded-2xl border border-gray-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 block mb-1">تنبيهات الحيتان المرسلة اليوم</span>
            <span className="text-xl font-bold text-amber-400 font-mono">38 تنبيه</span>
          </div>
          <BellRing className="w-8 h-8 text-amber-400 bg-amber-500/10 p-2 rounded-xl" />
        </div>

        <div className="bg-[#111726] p-4 rounded-2xl border border-gray-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 block mb-1">قاعدة البيانات المركزية</span>
            <span className="text-xl font-bold text-blue-400 font-mono">مستقرة (PostgreSQL)</span>
          </div>
          <Database className="w-8 h-8 text-blue-400 bg-blue-500/10 p-2 rounded-xl" />
        </div>
      </div>

      {/* أقسام التحكم: إعدادات الرادار وإدارة المشتركين */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* إعدادات خوارزميات الرادار (1/3 المساحة) */}
        <div className="bg-[#111726] rounded-2xl border border-gray-800 p-5 shadow-xl">
          <h2 className="text-sm font-bold text-gray-200 flex items-center gap-2 mb-4 pb-3 border-b border-gray-800">
            <Sliders className="w-4 h-4 text-amber-400" />
            معايير رصد صفقات الحيتان
          </h2>

          <div className="space-y-4 text-xs">
            <div>
              <label className="text-gray-400 block mb-1.5">الحد الأدنى لتدفق السيولة للتنبيه ($)</label>
              <input 
                type="text" 
                value={radarThreshold}
                onChange={(e) => setRadarThreshold(e.target.value)}
                className="w-full bg-[#182032] border border-gray-800 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="flex items-center justify-between bg-[#182032] p-3 rounded-xl border border-gray-800">
              <span>تفعيل رادار الدايفرجنس الآلي</span>
              <input type="checkbox" defaultChecked className="accent-amber-500 w-4 h-4 cursor-pointer" />
            </div>

            <div className="flex items-center justify-between bg-[#182032] p-3 rounded-xl border border-gray-800">
              <span>تنبيهات الصوت الفورية (Telegram Webhook)</span>
              <input type="checkbox" defaultChecked className="accent-amber-500 w-4 h-4 cursor-pointer" />
            </div>

            <button className="w-full bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold py-2.5 rounded-xl transition-colors mt-2">
              حفظ وتطبيق الإعدادات
            </button>
          </div>
        </div>

        {/* جدول إدارة المشتركين VIP (2/3 المساحة) */}
        <div className="lg:col-span-2 bg-[#111726] rounded-2xl border border-gray-800 p-5 shadow-xl">
          <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-800">
            <h2 className="text-sm font-bold text-gray-200 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              إدارة اشتراكات أعضاء VIP
            </h2>
            <button className="bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs px-3 py-1.5 rounded-xl hover:bg-amber-500/20 transition-colors">
              + إضافة مشترك جديد
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse text-xs">
              <thead>
                <tr className="border-b border-gray-800 text-gray-400 bg-[#141b2d]">
                  <th className="p-3">اسم المشترك / المعرّف</th>
                  <th className="p-3">نوع الباقة</th>
                  <th className="p-3">تاريخ الانتهاء</th>
                  <th className="p-3">حالة الحساب</th>
                  <th className="p-3">إجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/40">
                {subscribers.map((sub) => (
                  <tr key={sub.id} className="hover:bg-[#182032]/50 transition-colors">
                    <td className="p-3 font-bold text-white">{sub.name}</td>
                    <td className="p-3 text-gray-300">{sub.plan}</td>
                    <td className="p-3 font-mono text-gray-400">{sub.expiry}</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] ${
                        sub.status === 'نشط' 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                          : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                      }`}>
                        {sub.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <button className="text-amber-400 hover:underline text-[11px]">تعديل الصلاحيات</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
