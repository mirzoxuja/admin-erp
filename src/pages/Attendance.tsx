import { useState } from "react";
import { Check, Circle, X, ChevronDown } from "lucide-react";

type AttendanceStatus = "keldi" | "kechikdi" | "kelmadi";

interface AttendanceStudent {
  id: string;
  name: string;
  studentId: string;
  img: string | null;
  status: AttendanceStatus;
  comment: string;
}

const initialStudents: AttendanceStudent[] = [
  { id: "001", name: "Bobur Tojiev", studentId: "ST-0123", img: "https://i.pravatar.cc/64?img=53", status: "keldi", comment: "" },
  { id: "002", name: "Lola Karimova", studentId: "ST-0126", img: "https://i.pravatar.cc/64?img=44", status: "keldi", comment: "" },
  { id: "003", name: "Akmal Karimov", studentId: "ST-0133", img: null, status: "keldi", comment: "" },
  { id: "004", name: "Mavluda Ergasheva", studentId: "ST-0131", img: "https://i.pravatar.cc/64?img=41", status: "kechikdi", comment: "15 daqiqa kechikdi" },
  { id: "005", name: "Davron Saidov", studentId: "ST-0128", img: "https://i.pravatar.cc/64?img=15", status: "keldi", comment: "" },
  { id: "006", name: "Rustam Olimov", studentId: "ST-0125", img: "https://i.pravatar.cc/64?img=14", status: "kelmadi", comment: "Kasal, oilasidan xabar bor" },
  { id: "007", name: "Sevinch Rahmatova", studentId: "ST-0129", img: "https://i.pravatar.cc/64?img=29", status: "keldi", comment: "" },
  { id: "008", name: "Gulshan Tursunova", studentId: "ST-0134", img: "https://i.pravatar.cc/64?img=23", status: "kechikdi", comment: "Transport muammosi" },
];

const groupOptions = ["Frontend-01 (18 talaba)", "Frontend-02 (16 talaba)", "Backend-03 (20 talaba)", "Dizayn-02 (15 talaba)"];

const getInitials = (name: string) =>
  name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();

const Avatar = ({ name, img }: { name: string; img: string | null }) => {
  if (img) {
    return <img src={img} alt={name} className="w-10 h-10 rounded-full object-cover" />;
  }
  return (
    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
      {getInitials(name)}
    </div>
  );
};

const statusConfig: Record<AttendanceStatus, { label: string; activeClass: string; icon: React.ReactNode }> = {
  keldi: { label: "Keldi", activeClass: "bg-emerald-500 text-white", icon: <Check className="w-3.5 h-3.5" /> },
  kechikdi: { label: "Kechikdi", activeClass: "bg-amber-500 text-white", icon: <Circle className="w-3.5 h-3.5" /> },
  kelmadi: { label: "Kelmadi", activeClass: "bg-red-500 text-white", icon: <X className="w-3.5 h-3.5" /> },
};

const Attendance = () => {
  const [students, setStudents] = useState(initialStudents);
  const [group, setGroup] = useState(groupOptions[0]);
  const [date, setDate] = useState("2025-11-24");

  const updateStatus = (id: string, status: AttendanceStatus) => {
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, status } : s)));
  };

  const updateComment = (id: string, comment: string) => {
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, comment } : s)));
  };

  const total = students.length;
  const keldiCount = students.filter((s) => s.status === "keldi").length;
  const kechikdiCount = students.filter((s) => s.status === "kechikdi").length;
  const kelmadiCount = students.filter((s) => s.status === "kelmadi").length;
  const presentCount = keldiCount + kechikdiCount;
  const percent = Math.round((presentCount / total) * 100);

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Davomat</h1>
        <p className="text-gray-500 mt-1">Guruhdagi talabalar davomatini belgilang</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex items-end justify-between flex-wrap gap-4">
        <div className="flex items-end gap-5 flex-wrap">
          <div>
            <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-1.5">
              Guruh
            </label>
            <div className="relative">
              <select
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                className="appearance-none border border-gray-200 rounded-lg pl-4 pr-9 py-2.5 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer min-w-[200px]"
              >
                {groupOptions.map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-1.5">
              Sana
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2.5 text-sm font-medium">
          <Check className="w-4 h-4" />
          Saqlash
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
            <Check className="w-5 h-5 text-emerald-600" />
          </div>
          <p className="text-3xl font-bold text-emerald-600">{percent}%</p>
          <p className="text-sm text-gray-500 mt-1">Bugungi davomat foizi</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
            <Circle className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900">{presentCount} / {total}</p>
          <p className="text-sm text-gray-500 mt-1">Kelganlar</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mb-4">
            <Circle className="w-5 h-5 text-amber-500" />
          </div>
          <p className="text-3xl font-bold text-amber-600">{kechikdiCount}</p>
          <p className="text-sm text-gray-500 mt-1">Kechikkanlar</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4">
            <X className="w-5 h-5 text-red-500" />
          </div>
          <p className="text-3xl font-bold text-red-600">{kelmadiCount}</p>
          <p className="text-sm text-gray-500 mt-1">Kelmaganlar</p>
        </div>
      </div>

      {/* Student list */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        {students.map((student, idx) => (
          <div
            key={student.id}
            className={`flex items-center gap-4 px-6 py-4 flex-wrap ${
              idx !== students.length - 1 ? "border-b border-gray-100" : ""
            }`}
          >
            <span className="text-sm text-gray-400 w-6 shrink-0">
              {String(idx + 1).padStart(2, "0")}
            </span>

            <Avatar name={student.name} img={student.img} />

            <div className="min-w-[160px]">
              <p className="text-sm font-semibold text-gray-900">{student.name}</p>
              <p className="text-xs text-gray-400">{student.studentId}</p>
            </div>

            <div className="flex items-center bg-gray-50 rounded-full p-1 gap-1 ml-auto sm:ml-6">
              {(Object.keys(statusConfig) as AttendanceStatus[]).map((key) => {
                const isActive = student.status === key;
                return (
                  <button
                    key={key}
                    onClick={() => updateStatus(student.id, key)}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition ${
                      isActive ? statusConfig[key].activeClass : "text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    {statusConfig[key].icon}
                    {statusConfig[key].label}
                  </button>
                );
              })}
            </div>

            <input
              type="text"
              placeholder="Izoh (ixtiyoriy)..."
              value={student.comment}
              onChange={(e) => updateComment(student.id, e.target.value)}
              className="flex-1 min-w-[200px] border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
      </div>

      {/* Footer summary */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-6 py-4 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-8 flex-wrap">
          <div>
            <p className="text-xs text-gray-400">Jami</p>
            <p className="text-lg font-bold text-gray-900">{total} talaba</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Belgilangan</p>
            <p className="text-lg font-bold text-blue-600">{total} / {total}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Davomat</p>
            <p className="text-lg font-bold text-emerald-600">{percent}%</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="border border-gray-200 rounded-lg px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Bekor qilish
          </button>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2.5 text-sm font-medium">
            <Check className="w-4 h-4" />
            Davomatni saqlash
          </button>
        </div>
      </div>
    </div>
  );
};

export default Attendance;