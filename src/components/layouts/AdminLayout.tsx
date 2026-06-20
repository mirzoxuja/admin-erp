import { NavLink, Outlet } from "react-router-dom";
import {
  Home,
  Users,
  GraduationCap,
  UsersRound,
  Calendar,
  ClipboardCheck,
  Award,
  CreditCard,
  TrendingUp,
  MessageSquare,
  BarChart3,
  Settings,
  Search,
  Sun,
  Bell,
  Mail,
  ChevronDown,
  LogOut,
} from "lucide-react";

interface NavItem {
  label: string;
  path: string;
  icon: typeof Home;
  badge?: string;
  badgeColor?: string;
}

const mainNav: NavItem[] = [
  { label: "Dashboard", path: "/admin", icon: Home },
  { label: "Talabalar", path: "/admin/students", icon: Users, badge: "124" },
  { label: "O'qituvchilar", path: "/admin/teachers", icon: GraduationCap },
  { label: "Guruhlar", path: "/admin/groups", icon: UsersRound },
  { label: "Jadval", path: "/admin/schedule", icon: Calendar },
  { label: "Davomat", path: "/admin/attendance", icon: ClipboardCheck },
  { label: "Baholar", path: "/admin/grades", icon: Award },
];

const financeNav: NavItem[] = [
  { label: "To'lovlar", path: "/admin/payments", icon: CreditCard, badge: "3", badgeColor: "bg-red-500 text-white" },
  { label: "Moliya", path: "/admin/finance", icon: TrendingUp },
];

const contactNav: NavItem[] = [
  { label: "Xabarlar", path: "/admin/messages", icon: MessageSquare, badge: "12", badgeColor: "bg-green-500 text-white" },
  { label: "Hisobotlar", path: "/admin/reports", icon: BarChart3 },
];

const systemNav: NavItem[] = [{ label: "Sozlamalar", path: "/admin/settings", icon: Settings }];

const NavSection = ({
  title,
  items,
}: {
  title: string;
  items: NavItem[];
}) => (
  <div className="mb-6">
    <p className="px-3 mb-2 text-xs font-bold tracking-widest text-gray-400 uppercase">
      {title}
    </p>
    {items.map((item) => {
      const Icon = item.icon;
      return (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === "/admin"}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium mb-1 transition ${
              isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
            }`
          }
        >
          <Icon className="w-[18px] h-[18px]" />
          <span className="flex-1">{item.label}</span>
          {item.badge && (
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                item.badgeColor ?? "bg-gray-100 text-gray-600"
              }`}
            >
              {item.badge}
            </span>
          )}
        </NavLink>
      );
    })}
  </div>
);

const AdminLayout = () => {
  const userName = "Anvar Yo'ldoshev";
  const userImg = "https://i.pravatar.cc/64?img=68";

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* SIDEBAR */}
      <aside className="hidden lg:flex w-64 flex-col bg-white border-r border-gray-100 shrink-0">
        <div className="px-5 py-5">
          <a href="/admin" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
              <GraduationCap className="w-5 h-5" />
            </span>
            <span className="text-base font-bold text-gray-900">O'quv Markaz</span>
          </a>
        </div>

        <nav className="flex-1 px-3 overflow-y-auto">
          <NavSection title="Asosiy" items={mainNav} />
          <NavSection title="Moliya" items={financeNav} />
          <NavSection title="Aloqa" items={contactNav} />
          <NavSection title="Tizim" items={systemNav} />
        </nav>

        <div className="px-3 py-4 border-t border-gray-100 flex items-center gap-3">
          <img src={userImg} alt={userName} className="h-9 w-9 rounded-full object-cover" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-800 truncate">{userName}</p>
            <p className="text-xs text-gray-400">Administrator</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition">
            <LogOut className="w-[18px] h-[18px]" />
          </button>
        </div>
      </aside>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* TOPBAR */}
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center gap-6">
          <h1 className="text-lg font-semibold text-gray-900 whitespace-nowrap">
            Dashboard
          </h1>

          <div className="flex-1 max-w-md relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Talaba, guruh yoki to'lov qidirish..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <button className="text-gray-500 hover:text-gray-700">
              <Sun className="w-5 h-5" />
            </button>

            <button className="relative text-gray-500 hover:text-gray-700">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                5
              </span>
            </button>

            <button className="relative text-gray-500 hover:text-gray-700">
              <Mail className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            <button className="flex items-center gap-2">
              <img src={userImg} alt={userName} className="h-9 w-9 rounded-full object-cover" />
              <div className="hidden sm:block text-left">
                <p className="text-sm font-semibold text-gray-800">{userName}</p>
                <p className="text-xs text-gray-400">Administrator</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </header>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;