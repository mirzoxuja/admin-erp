import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Search,
  List,
  LayoutGrid,
  Eye,
  Pencil,
  Trash2,
  Plus,
  Download,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
} from "lucide-react";

interface Student {
  id: string;
  name: string;
  studentId: string;
  img: string | null;
  phone: string;
  group: string;
  payment: "To'langan" | "Kutilmoqda" | "Qarzdor";
  status: "Faol" | "Nofaol";
}

const students: Student[] = [
  { id: "001", name: "Bobur Tojiev", studentId: "ST-0123", img: "https://i.pravatar.cc/64?img=53", phone: "+998 90 123 45 67", group: "Frontend-01", payment: "To'langan", status: "Faol" },
  { id: "002", name: "Zilola Ahmedova", studentId: "ST-0124", img: "https://i.pravatar.cc/64?img=47", phone: "+998 91 234 56 78", group: "Dizayn-02", payment: "To'langan", status: "Faol" },
  { id: "003", name: "Rustam Olimov", studentId: "ST-0125", img: "https://i.pravatar.cc/64?img=14", phone: "+998 93 345 67 89", group: "Backend-03", payment: "Kutilmoqda", status: "Faol" },
  { id: "004", name: "Lola Karimova", studentId: "ST-0126", img: "https://i.pravatar.cc/64?img=44", phone: "+998 94 456 78 90", group: "Frontend-01", payment: "Qarzdor", status: "Faol" },
  { id: "005", name: "Madina Nazarova", studentId: "ST-0127", img: "https://i.pravatar.cc/64?img=32", phone: "+998 95 567 89 01", group: "Dizayn-02", payment: "To'langan", status: "Faol" },
  { id: "006", name: "Davron Saidov", studentId: "ST-0128", img: "https://i.pravatar.cc/64?img=15", phone: "+998 97 678 90 12", group: "Backend-03", payment: "To'langan", status: "Faol" },
  { id: "007", name: "Sevinch Rahmatova", studentId: "ST-0129", img: "https://i.pravatar.cc/64?img=29", phone: "+998 98 789 01 23", group: "Frontend-02", payment: "Qarzdor", status: "Faol" },
  { id: "008", name: "Sardor Yusupov", studentId: "ST-0130", img: "https://i.pravatar.cc/64?img=51", phone: "+998 99 890 12 34", group: "Mobil-01", payment: "To'langan", status: "Nofaol" },
  { id: "009", name: "Mavluda Ergasheva", studentId: "ST-0131", img: "https://i.pravatar.cc/64?img=41", phone: "+998 90 901 23 45", group: "Dizayn-02", payment: "To'langan", status: "Faol" },
  { id: "010", name: "Zafar Aliyev", studentId: "ST-0132", img: "https://i.pravatar.cc/64?img=18", phone: "+998 91 012 34 56", group: "DevOps-01", payment: "To'langan", status: "Faol" },
  { id: "011", name: "Akmal Karimov", studentId: "ST-0133", img: null, phone: "+998 93 111 22 33", group: "Frontend-01", payment: "To'langan", status: "Faol" },
  { id: "012", name: "Gulshan Tursunova", studentId: "ST-0134", img: "https://i.pravatar.cc/64?img=23", phone: "+998 94 222 33 44", group: "Marketing-01", payment: "Kutilmoqda", status: "Faol" },
  { id: "013", name: "Murod Bekov", studentId: "ST-0135", img: null, phone: "+998 95 333 44 55", group: "Backend-03", payment: "To'langan", status: "Faol" },
  { id: "014", name: "Nargiza Salimova", studentId: "ST-0136", img: "https://i.pravatar.cc/64?img=38", phone: "+998 97 444 55 66", group: "UX-01", payment: "To'langan", status: "Faol" },
  { id: "015", name: "Iroda Mahmudova", studentId: "ST-0137", img: "https://i.pravatar.cc/64?img=36", phone: "+998 98 555 66 77", group: "Frontend-02", payment: "To'langan", status: "Faol" },
];

const paymentStyle: Record<Student["payment"], string> = {
  "To'langan": "bg-green-50 text-green-700",
  Kutilmoqda: "bg-amber-50 text-amber-600",
  Qarzdor: "bg-red-50 text-red-600",
};

const statusDot: Record<Student["status"], string> = {
  Faol: "bg-green-500",
  Nofaol: "bg-gray-400",
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Avatar = ({ student }: { student: Student }) => {
  if (student.img) {
    return (
      <img
        src={student.img}
        alt={student.name}
        className="w-9 h-9 rounded-full object-cover"
      />
    );
  }
  return (
    <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-semibold">
      {getInitials(student.name)}
    </div>
  );
};

const Students = () => {
  const [view, setView] = useState<"list" | "grid">("list");
  const [selected, setSelected] = useState<string[]>([]);

  const toggleAll = () => {
    setSelected((prev) => (prev.length === students.length ? [] : students.map((s) => s.id)));
  };

  const toggleOne = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Talabalar</h1>
          <p className="text-gray-500 mt-1">Jami 124 ta faol talaba</p>
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

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Talaba qidiring (ism, ID, telefon)..."
            className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Barcha guruhlar</option>
          <option>Frontend-01</option>
          <option>Frontend-02</option>
          <option>Backend-03</option>
          <option>Dizayn-02</option>
        </select>
        <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Barcha holatlar</option>
          <option>Faol</option>
          <option>Nofaol</option>
        </select>
        <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>To'lov holati</option>
          <option>To'langan</option>
          <option>Kutilmoqda</option>
          <option>Qarzdor</option>
        </select>

        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden ml-auto">
          <button
            onClick={() => setView("list")}
            className={`p-2.5 ${view === "list" ? "bg-blue-50 text-blue-600" : "text-gray-400 hover:bg-gray-50"}`}
          >
            <List className="w-4 h-4" />
          </button>
          <button
            onClick={() => setView("grid")}
            className={`p-2.5 border-l border-gray-200 ${view === "grid" ? "bg-blue-50 text-blue-600" : "text-gray-400 hover:bg-gray-50"}`}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/60 border-b border-gray-100">
                <th className="px-6 py-3 w-10">
                  <input
                    type="checkbox"
                    checked={selected.length === students.length}
                    onChange={toggleAll}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                </th>
                <th className="px-3 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">
                  №
                </th>
                <th className="px-3 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">
                  <span className="flex items-center gap-1">
                    F.I.SH.
                    <ChevronsUpDown className="w-3.5 h-3.5" />
                  </span>
                </th>
                <th className="px-3 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">
                  Telefon
                </th>
                <th className="px-3 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">
                  Guruh
                </th>
                <th className="px-3 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">
                  To'lov
                </th>
                <th className="px-3 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">
                  Holat
                </th>
                <th className="px-3 py-3 text-xs font-medium uppercase tracking-wide text-gray-500 text-right">
                  Amal
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="border-b border-gray-100 last:border-0 hover:bg-gray-50/60"
                >
                  <td className="px-6 py-3.5">
                    <input
                      type="checkbox"
                      checked={selected.includes(student.id)}
                      onChange={() => toggleOne(student.id)}
                      className="w-4 h-4 rounded border-gray-300"
                    />
                  </td>
                  <td className="px-3 py-3.5 text-gray-500">{student.id}</td>
                  <td className="px-3 py-3.5">
                    <div className="flex items-center gap-3">
                      <Avatar student={student} />
                      <div>
                        <div className="font-semibold text-gray-900 whitespace-nowrap">
                          {student.name}
                        </div>
                        <div className="text-xs text-gray-400">{student.studentId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-3.5 text-gray-600 whitespace-nowrap">
                    {student.phone}
                  </td>
                  <td className="px-3 py-3.5 text-gray-600 whitespace-nowrap">
                    {student.group}
                  </td>
                  <td className="px-3 py-3.5">
                    <span
                      className={`text-sm font-semibold ${paymentStyle[student.payment]} px-0 py-0`}
                    >
                      {student.payment}
                    </span>
                  </td>
                  <td className="px-3 py-3.5">
                    <span className="inline-flex items-center gap-1.5 text-sm text-gray-700 whitespace-nowrap">
                      <span className={`w-1.5 h-1.5 rounded-full ${statusDot[student.status]}`} />
                      {student.status}
                    </span>
                  </td>
                  <td className="px-3 py-3.5">
                    <div className="flex items-center justify-end gap-3 text-gray-400">
                      <Link to={`/admin/students/${student.studentId}`} className="hover:text-blue-600">
                        <Eye className="w-4 h-4" />
                      </Link>
                      <button className="hover:text-blue-600">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button className="hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Ko'rsatilmoqda <span className="font-semibold text-gray-900">1-15</span> /{" "}
          <span className="font-semibold text-gray-900">124</span> talaba
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
          <span className="px-1 text-gray-400">...</span>
          <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            9
          </button>
          <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Students;