import { Download, Plus, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const stats = [
  {
    icon: "users",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    value: "124",
    label: "Faol talabalar",
    trend: "+12.5%",
    up: true,
  },
  {
    icon: "groups",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    value: "18",
    label: "Aktiv guruhlar",
    trend: "+3",
    up: true,
  },
  {
    icon: "income",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    value: "86.4M",
    label: "Oylik daromad (so'm)",
    trend: "+18.2%",
    up: true,
  },
  {
    icon: "attendance",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    value: "87%",
    label: "O'rtacha davomat",
    trend: "-2.3%",
    up: false,
  },
];

const revenueData = [
  { month: "Dek", value: 30 },
  { month: "Yan", value: 36 },
  { month: "Fev", value: 32 },
  { month: "Mar", value: 50 },
  { month: "Apr", value: 58 },
  { month: "May", value: 53 },
  { month: "Iyn", value: 65 },
  { month: "Iyl", value: 75 },
  { month: "Avg", value: 68 },
  { month: "Sen", value: 78 },
  { month: "Okt", value: 84 },
  { month: "Noy", value: 86.4 },
];

const growthData = [
  { month: "Dek", faol: 80, yangi: 14 },
  { month: "Yan", faol: 88, yangi: 18 },
  { month: "Fev", faol: 98, yangi: 14 },
  { month: "Mar", faol: 90, yangi: 18 },
  { month: "Apr", faol: 105, yangi: 18 },
  { month: "May", faol: 115, yangi: 20 },
  { month: "Iyn", faol: 108, yangi: 20 },
  { month: "Iyl", faol: 120, yangi: 26 },
  { month: "Avg", faol: 110, yangi: 22 },
  { month: "Sen", faol: 130, yangi: 20 },
  { month: "Okt", faol: 145, yangi: 24 },
  { month: "Noy", faol: 135, yangi: 20 },
];

const todayClasses = [
  { time: "09:00", duration: "90 daq", title: "JavaScript asoslari", meta: "Frontend-01 · Akmal Karimov · Xona 3", color: "border-amber-400" },
  { time: "11:00", duration: "90 daq", title: "UX/UI dizayn", meta: "Dizayn-02 · Madina Ergasheva · Xona 5", color: "border-purple-400" },
  { time: "13:30", duration: "90 daq", title: "Python amaliyot", meta: "Backend-03 · Sherzod Rahimov · Xona 2", color: "border-green-400" },
  { time: "15:30", duration: "90 daq", title: "React Hooks", meta: "Frontend-02 · Nodira Yusupova · Xona 3", color: "border-blue-400" },
  { time: "17:30", duration: "90 daq", title: "Flutter mobil", meta: "Mobil-01 · Otabek Salimov · Xona 4", color: "border-orange-400" },
  { time: "19:00", duration: "90 daq", title: "Marketing asoslari", meta: "Marketing-01 · Diloraxon Nazarova · Xona 1", color: "border-violet-400" },
];

const recentStudents = [
  { name: "Bobur Tojiev", img: "https://i.pravatar.cc/64?img=53", group: "Frontend-01", date: "22-noy", status: "Faol" },
  { name: "Zilola Ahmedova", img: "https://i.pravatar.cc/64?img=47", group: "Dizayn-02", date: "21-noy", status: "Faol" },
  { name: "Rustam Olimov", img: "https://i.pravatar.cc/64?img=14", group: "Backend-03", date: "20-noy", status: "Faol" },
  { name: "Lola Karimova", img: "https://i.pravatar.cc/64?img=44", group: "Frontend-01", date: "19-noy", status: "Kutilmoqda" },
  { name: "Madina Nazarova", img: "https://i.pravatar.cc/64?img=32", group: "UX-01", date: "18-noy", status: "Faol" },
  { name: "Davron Saidov", img: "https://i.pravatar.cc/64?img=15", group: "Backend-03", date: "17-noy", status: "Faol" },
  { name: "Sevinch Rahmatova", img: "https://i.pravatar.cc/64?img=29", group: "Frontend-02", date: "16-noy", status: "Faol" },
  { name: "Sardor Yusupov", img: "https://i.pravatar.cc/64?img=51", group: "Mobil-01", date: "15-noy", status: "Nofaol" },
  { name: "Mavluda Ergasheva", img: "https://i.pravatar.cc/64?img=41", group: "Dizayn-02", date: "14-noy", status: "Faol" },
  { name: "Zafar Aliyev", img: "https://i.pravatar.cc/64?img=18", group: "DevOps-01", date: "13-noy", status: "Faol" },
];

const recentPayments = [
  { name: "Bobur Tojiev", amount: "490 000", date: "22-noy", status: "To'langan" },
  { name: "Zilola Ahmedova", amount: "890 000", date: "22-noy", status: "To'langan" },
  { name: "Rustam Olimov", amount: "790 000", date: "21-noy", status: "To'langan" },
  { name: "Lola Karimova", amount: "490 000", date: "20-noy", status: "Kutilmoqda" },
  { name: "Madina Nazarova", amount: "890 000", date: "19-noy", status: "To'langan" },
  { name: "Davron Saidov", amount: "790 000", date: "18-noy", status: "To'langan" },
  { name: "Sevinch Rahmatova", amount: "490 000", date: "17-noy", status: "Qarzdor" },
  { name: "Sardor Yusupov", amount: "990 000", date: "16-noy", status: "To'langan" },
  { name: "Mavluda Ergasheva", amount: "890 000", date: "15-noy", status: "To'langan" },
  { name: "Zafar Aliyev", amount: "1 500 000", date: "14-noy", status: "To'langan" },
];

const studentStatusStyle: Record<string, string> = {
  Faol: "bg-green-50 text-green-700",
  Kutilmoqda: "bg-orange-50 text-orange-600",
  Nofaol: "bg-gray-100 text-gray-500",
};

const studentDotStyle: Record<string, string> = {
  Faol: "bg-green-500",
  Kutilmoqda: "bg-orange-500",
  Nofaol: "bg-gray-400",
};

const paymentStatusStyle: Record<string, string> = {
  "To'langan": "bg-green-50 text-green-700 border border-green-200",
  Kutilmoqda: "bg-orange-50 text-orange-600 border border-orange-200",
  Qarzdor: "bg-red-50 text-red-600 border border-red-200",
};

const StatIcon = ({ name, className }: { name: string; className?: string }) => {
  const paths: Record<string, React.ReactNode> = {
    users: <><circle cx="9" cy="7" r="4" /><path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /></>,
    groups: <><circle cx="9" cy="7" r="4" /><circle cx="17" cy="7" r="4" /><path d="M2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1" /><path d="M15 14a6 6 0 0 1 6 6v1" /></>,
    income: <><path d="M3 17l6-6 4 4 8-8" /><path d="M17 7h4v4" /></>,
    attendance: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M9 11l2 2 4-4" /></>,
  };
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
};

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Salom, Anvar! 👋</h1>
          <p className="text-gray-500 mt-1">
            Bugun 24-noyabr, 2025. Sizning umumiy ko'rsatkichlaringiz quyida.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Download className="w-4 h-4" />
            Eksport
          </button>
          <Link
           to="/admin/students/add"
           className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2.5 text-sm font-medium"
           >
           <Plus className="w-4 h-4" />
            Talaba qo'shish
          </Link>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.iconBg}`}>
                <StatIcon name={stat.icon} className={`w-5 h-5 ${stat.iconColor}`} />
              </div>
              <span
                className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
                  stat.up ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"
                }`}
              >
                {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.trend}
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Revenue chart + today's classes */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-start justify-between mb-1">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Daromad statistikasi</h2>
              <p className="text-sm text-gray-500">Oxirgi 12 oy ko'rsatkichi</p>
            </div>
            <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-700 focus:outline-none">
              <option>Bu yil</option>
              <option>O'tgan yil</option>
            </select>
          </div>

          <div className="flex items-center gap-3 mt-4 mb-2">
            <span className="text-3xl font-bold text-gray-900">782 400 000 so'm</span>
            <span className="flex items-center gap-1 bg-green-50 text-green-600 text-xs font-semibold px-2.5 py-1 rounded-full">
              <ArrowUpRight className="w-3 h-3" />
              +18.2% o'tgan yilga nisbatan
            </span>
          </div>

          <div className="h-72 mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                  tickFormatter={(v) => (v === 0 ? "0" : `${v}M`)}
                />
                <Tooltip formatter={(value) => [`${value}M so'm`, "Daromad"]} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#2563eb"
                  strokeWidth={2.5}
                  fill="url(#revenueGradient)"
                  dot={{ r: 4, stroke: "#2563eb", strokeWidth: 2, fill: "#fff" }}
                  activeDot={{ r: 6 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-lg font-semibold text-gray-900">Bugungi darslar</h2>
            <a href="#" className="text-sm font-medium text-blue-600 hover:underline flex items-center gap-1">
              Hammasi
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <p className="text-sm text-gray-500 mb-4">24-noyabr · 6 dars</p>

          <div className="space-y-3">
            {todayClasses.map((cls, idx) => (
              <div key={idx} className={`flex gap-4 border-l-4 ${cls.color} bg-gray-50/60 rounded-r-lg px-4 py-3`}>
                <div className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                  {cls.time}
                  <div className="text-xs font-normal text-gray-400">{cls.duration}</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{cls.title}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{cls.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student growth chart */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-1">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Talabalar o'sishi</h2>
            <p className="text-sm text-gray-500">Oxirgi 12 oyda yangi qo'shilgan talabalar</p>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              Yangi
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-200" />
              Faol
            </span>
          </div>
        </div>

        <div className="h-80 mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={growthData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }} barSize={28}>
              <CartesianGrid vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="faol" stackId="a" fill="#bfdbfe" name="Faol" radius={[0, 0, 4, 4]} />
              <Bar dataKey="yangi" stackId="a" fill="#2563eb" name="Yangi" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent students + payments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">So'nggi talabalar</h2>
            <a href="#" className="text-sm font-medium text-blue-600 hover:underline flex items-center gap-1">
              Hammasi
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/60 border-b border-gray-100">
                  <th className="px-6 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">Talaba</th>
                  <th className="px-6 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">Guruh</th>
                  <th className="px-6 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">Sana</th>
                  <th className="px-6 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">Holat</th>
                </tr>
              </thead>
              <tbody>
                {recentStudents.map((s, idx) => (
                  <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/60">
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <img src={s.img} alt={s.name} className="w-8 h-8 rounded-full object-cover" />
                        <span className="font-medium text-gray-900 whitespace-nowrap">{s.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-3.5 text-gray-500 whitespace-nowrap">{s.group}</td>
                    <td className="px-6 py-3.5 text-gray-500 whitespace-nowrap">{s.date}</td>
                    <td className="px-6 py-3.5">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${studentStatusStyle[s.status]}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${studentDotStyle[s.status]}`} />
                        {s.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">So'nggi to'lovlar</h2>
            <a href="#" className="text-sm font-medium text-blue-600 hover:underline flex items-center gap-1">
              Hammasi
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/60 border-b border-gray-100">
                  <th className="px-6 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">Talaba</th>
                  <th className="px-6 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">Summa</th>
                  <th className="px-6 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">Sana</th>
                  <th className="px-6 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">Holat</th>
                </tr>
              </thead>
              <tbody>
                {recentPayments.map((p, idx) => (
                  <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/60">
                    <td className="px-6 py-3.5 font-medium text-gray-900 whitespace-nowrap">{p.name}</td>
                    <td className="px-6 py-3.5 text-gray-900 whitespace-nowrap">{p.amount}</td>
                    <td className="px-6 py-3.5 text-gray-500 whitespace-nowrap">{p.date}</td>
                    <td className="px-6 py-3.5">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${paymentStatusStyle[p.status]}`}>
                        {p.status}
                      </span>
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
};

export default Dashboard;