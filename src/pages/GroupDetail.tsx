import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Download,
  Pencil,
  MoreVertical,
  CalendarDays,
  DoorOpen,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const tabs = ["Talabalar (18)", "Jadval", "Davomat", "Baholar", "Materiallar"];

interface Member {
  id: string;
  name: string;
  img: string | null;
  phone: string;
  attendance: number;
  grade: number;
  payment: "To'langan" | "Kutilmoqda" | "Qarzdor";
}

const members: Member[] = [
  { id: "01", name: "Bobur Tojiev", img: "https://i.pravatar.cc/64?img=53", phone: "+998 90 123 45 67", attendance: 94, grade: 88, payment: "To'langan" },
  { id: "02", name: "Lola Karimova", img: "https://i.pravatar.cc/64?img=44", phone: "+998 94 456 78 90", attendance: 92, grade: 85, payment: "Qarzdor" },
  { id: "03", name: "Akmal Karimov", img: null, phone: "+998 93 111 22 33", attendance: 96, grade: 92, payment: "To'langan" },
  { id: "04", name: "Mavluda Ergasheva", img: "https://i.pravatar.cc/64?img=41", phone: "+998 90 901 23 45", attendance: 82, grade: 79, payment: "To'langan" },
  { id: "05", name: "Davron Saidov", img: "https://i.pravatar.cc/64?img=15", phone: "+998 97 678 90 12", attendance: 95, grade: 87, payment: "To'langan" },
  { id: "06", name: "Rustam Olimov", img: "https://i.pravatar.cc/64?img=14", phone: "+998 93 345 67 89", attendance: 90, grade: 84, payment: "Kutilmoqda" },
  { id: "07", name: "Sevinch Rahmatova", img: "https://i.pravatar.cc/64?img=29", phone: "+998 98 789 01 23", attendance: 93, grade: 91, payment: "Qarzdor" },
  { id: "08", name: "Gulshan Tursunova", img: "https://i.pravatar.cc/64?img=23", phone: "+998 94 222 33 44", attendance: 88, grade: 82, payment: "To'langan" },
];

const paymentStyle: Record<Member["payment"], string> = {
  "To'langan": "bg-green-50 text-green-700",
  Kutilmoqda: "bg-amber-50 text-amber-600",
  Qarzdor: "bg-red-50 text-red-600",
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Avatar = ({ member }: { member: Member }) => {
  if (member.img) {
    return (
      <img
        src={member.img}
        alt={member.name}
        className="w-9 h-9 rounded-full object-cover"
      />
    );
  }
  return (
    <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-semibold">
      {getInitials(member.name)}
    </div>
  );
};

const GroupDetail = () => {
  const [activeTab, setActiveTab] = useState("Talabalar (18)");

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Link to="/admin" className="hover:text-blue-600">
          Admin
        </Link>
        <span>{">"}</span>
        <Link to="/admin/groups" className="hover:text-blue-600">
          Guruhlar
        </Link>
        <span>{">"}</span>
        <span className="font-semibold text-gray-900">Frontend-01</span>
      </div>

      {/* Header card */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex items-start justify-between flex-wrap gap-4">
        <div className="flex items-start gap-5">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl">
            🧑‍🤝‍🧑
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Frontend-01</h1>
            <div className="flex items-center gap-5 mt-2 text-sm text-gray-500 flex-wrap">
              <span>JavaScript dasturlash</span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4" />
                15-okt, 2025 — 15-yan, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <DoorOpen className="w-4 h-4" />
                Xona 3
              </span>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <span className="flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Faol
              </span>
              <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                18 talaba
              </span>
              <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                94% davomat
              </span>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <img
                src="https://i.pravatar.cc/64?img=12"
                alt="Akmal Karimov"
                className="w-9 h-9 rounded-full object-cover"
              />
              <span className="font-semibold text-gray-900">
                Akmal Karimov <span className="text-gray-400 font-normal">— o'qituvchi</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Download className="w-4 h-4" />
            Eksport
          </button>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2.5 text-sm font-medium">
            <Pencil className="w-4 h-4" />
            Tahrirlash
          </button>
          <button className="text-gray-400 hover:text-gray-600 p-2">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 flex items-center gap-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-medium border-b-2 -mb-px ${
              activeTab === tab
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === "Talabalar (18)" && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Guruh a'zolari
            </h2>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2.5 text-sm font-medium">
              <Plus className="w-4 h-4" />
              Talaba qo'shish
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/60 border-b border-gray-100">
                  <th className="px-6 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">№</th>
                  <th className="px-3 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">F.I.SH.</th>
                  <th className="px-3 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">Telefon</th>
                  <th className="px-3 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">Davomat</th>
                  <th className="px-3 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">O'rtacha baho</th>
                  <th className="px-3 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">To'lov</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr
                    key={member.id}
                    className="border-b border-gray-100 last:border-0 hover:bg-gray-50/60"
                  >
                    <td className="px-6 py-3.5 text-gray-500">{member.id}</td>
                    <td className="px-3 py-3.5">
                      <div className="flex items-center gap-3">
                        <Avatar member={member} />
                        <span className="font-semibold text-gray-900 whitespace-nowrap">
                          {member.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-3 py-3.5 text-gray-600 whitespace-nowrap">
                      {member.phone}
                    </td>
                    <td className="px-3 py-3.5">
                      <span
                        className={`font-semibold ${
                          member.attendance >= 90 ? "text-green-600" : "text-amber-600"
                        }`}
                      >
                        {member.attendance}%
                      </span>
                    </td>
                    <td className="px-3 py-3.5 font-semibold text-gray-900">
                      {member.grade}
                    </td>
                    <td className="px-3 py-3.5">
                      <span
                        className={`text-sm font-semibold ${paymentStyle[member.payment]} px-0 py-0`}
                      >
                        {member.payment}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between px-6 py-5">
            <p className="text-sm text-gray-500">
              Ko'rsatilmoqda <span className="font-semibold text-gray-900">1-8</span> /{" "}
              <span className="font-semibold text-gray-900">18</span>
            </p>
            <div className="flex items-center gap-2">
              <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50">
                <ChevronLeft className="w-4 h-4" />
              </button>
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium ${
                    page === 1
                      ? "bg-blue-600 text-white"
                      : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Jadval" && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-gray-500 text-sm">
          Jadval tez orada qo'shiladi.
        </div>
      )}

      {activeTab === "Davomat" && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-gray-500 text-sm">
          Davomat ma'lumotlari tez orada qo'shiladi.
        </div>
      )}

      {activeTab === "Baholar" && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-gray-500 text-sm">
          Baholar ma'lumotlari tez orada qo'shiladi.
        </div>
      )}

      {activeTab === "Materiallar" && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-gray-500 text-sm">
          Materiallar tez orada qo'shiladi.
        </div>
      )}
    </div>
  );
};

export default GroupDetail;