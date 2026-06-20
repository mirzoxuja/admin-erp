import { useState } from "react";
import { Download, Plus, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

const weekDays = [
  { label: "DU", date: 24, isToday: true },
  { label: "SE", date: 25, isToday: false },
  { label: "CHO", date: 26, isToday: false },
  { label: "PA", date: 27, isToday: false },
  { label: "JU", date: 28, isToday: false },
  { label: "SHA", date: 29, isToday: false },
  { label: "YA", date: 30, isToday: false },
];

const timeSlots = [
  { time: "09:00", compact: false },
  { time: "10:30", compact: true },
  { time: "11:00", compact: false },
  { time: "13:00", compact: false },
  { time: "14:00", compact: false },
  { time: "15:30", compact: false },
  { time: "17:00", compact: true },
  { time: "17:30", compact: false },
  { time: "19:00", compact: false },
  { time: "20:30", compact: true },
];

const lessons = [
  { day: 0, time: "09:00", code: "Frontend-01", teacher: "A. Karimov", room: "Xona 3" },
  { day: 2, time: "09:00", code: "Frontend-01", teacher: "A. Karimov", room: "Xona 3" },
  { day: 4, time: "09:00", code: "Frontend-01", teacher: "A. Karimov", room: "Xona 3" },
  { day: 5, time: "09:00", code: "Dizayn-02", teacher: "M. Ergasheva", room: "Xona 5" },

  { day: 0, time: "11:00", code: "Dizayn-01", teacher: "M. Ergasheva", room: "Xona 5" },
  { day: 1, time: "11:00", code: "React-01", teacher: "N. Yusupova", room: "Xona 2" },
  { day: 2, time: "11:00", code: "Dizayn-01", teacher: "M. Ergasheva", room: "Xona 5" },
  { day: 3, time: "11:00", code: "React-01", teacher: "N. Yusupova", room: "Xona 2" },
  { day: 4, time: "11:00", code: "Dizayn-01", teacher: "M. Ergasheva", room: "Xona 5" },
  { day: 5, time: "11:00", code: "React-01", teacher: "N. Yusupova", room: "Xona 2" },

  { day: 0, time: "13:00", code: "Backend-03", teacher: "S. Rahimov", room: "Xona 2" },
  { day: 1, time: "13:00", code: "Data-01", teacher: "S. Tursunova", room: "Xona 4" },
  { day: 2, time: "13:00", code: "Backend-03", teacher: "S. Rahimov", room: "Xona 2" },
  { day: 3, time: "13:00", code: "Data-01", teacher: "S. Tursunova", room: "Xona 4" },
  { day: 4, time: "13:00", code: "Backend-03", teacher: "S. Rahimov", room: "Xona 2" },
  { day: 5, time: "13:00", code: "Data-01", teacher: "S. Tursunova", room: "Xona 4" },

  { day: 0, time: "14:00", code: "Marketing-01", teacher: "D. Nazarova", room: "Xona 1" },
  { day: 2, time: "14:00", code: "Marketing-01", teacher: "D. Nazarova", room: "Xona 1" },
  { day: 4, time: "14:00", code: "Marketing-01", teacher: "D. Nazarova", room: "Xona 1" },

  { day: 0, time: "15:30", code: "Frontend-02", teacher: "A. Karimov", room: "Xona 3" },
  { day: 1, time: "15:30", code: "Java-01", teacher: "A. Inomov", room: "Xona 2" },
  { day: 2, time: "15:30", code: "Frontend-02", teacher: "A. Karimov", room: "Xona 3" },
  { day: 3, time: "15:30", code: "Java-01", teacher: "A. Inomov", room: "Xona 2" },
  { day: 4, time: "15:30", code: "Frontend-02", teacher: "A. Karimov", room: "Xona 3" },
  { day: 5, time: "15:30", code: "Java-01", teacher: "A. Inomov", room: "Xona 2" },

  { day: 0, time: "17:30", code: "Mobil-01", teacher: "O. Salimov", room: "Xona 4" },
  { day: 1, time: "17:30", code: "Backend-04", teacher: "B. Salimov", room: "Xona 2" },
  { day: 2, time: "17:30", code: "Mobil-01", teacher: "O. Salimov", room: "Xona 4" },
  { day: 3, time: "17:30", code: "Backend-04", teacher: "B. Salimov", room: "Xona 2" },
  { day: 4, time: "17:30", code: "Mobil-01", teacher: "O. Salimov", room: "Xona 4" },
  { day: 5, time: "17:30", code: "Backend-04", teacher: "B. Salimov", room: "Xona 2" },

  { day: 0, time: "19:00", code: "DevOps-01", teacher: "J. Mahmudov", room: "Xona 1" },
  { day: 2, time: "19:00", code: "DevOps-01", teacher: "J. Mahmudov", room: "Xona 1" },
  { day: 4, time: "19:00", code: "DevOps-01", teacher: "J. Mahmudov", room: "Xona 1" },
];

const colorMap: Record<string, { border: string; bg: string; text: string }> = {
  Frontend: { border: "border-blue-500", bg: "bg-blue-50", text: "text-blue-900" },
  Dizayn: { border: "border-purple-500", bg: "bg-purple-50", text: "text-purple-900" },
  Backend: { border: "border-emerald-500", bg: "bg-emerald-50", text: "text-emerald-900" },
  Java: { border: "border-emerald-500", bg: "bg-emerald-50", text: "text-emerald-900" },
  Data: { border: "border-rose-500", bg: "bg-rose-50", text: "text-rose-900" },
  Marketing: { border: "border-sky-500", bg: "bg-sky-50", text: "text-sky-900" },
  React: { border: "border-indigo-500", bg: "bg-indigo-50", text: "text-indigo-900" },
  Mobil: { border: "border-amber-500", bg: "bg-amber-50", text: "text-amber-900" },
  DevOps: { border: "border-violet-500", bg: "bg-violet-50", text: "text-violet-900" },
};

const roomStatus = [
  { room: "Xona 1", free: false, info: "Marketing-01 · 14:00" },
  { room: "Xona 2", free: false, info: "Backend-03 · 13:00" },
  { room: "Xona 3", free: false, info: "Frontend-01 · 09:00" },
  { room: "Xona 4", free: true, info: "Bo'sh" },
  { room: "Xona 5", free: true, info: "Bo'sh" },
];

const teacherOptions = ["A. Karimov", "M. Ergasheva", "N. Yusupova", "S. Rahimov", "S. Tursunova", "D. Nazarova", "A. Inomov", "O. Salimov", "B. Salimov", "J. Mahmudov"];
const groupOptions = ["Frontend-01", "Frontend-02", "Dizayn-01", "Dizayn-02", "React-01", "Backend-03", "Backend-04", "Data-01", "Marketing-01", "Java-01", "Mobil-01", "DevOps-01"];
const roomOptions = ["Xona 1", "Xona 2", "Xona 3", "Xona 4", "Xona 5"];

const getLesson = (day: number, time: string) =>
  lessons.find((l) => l.day === day && l.time === time);

const Schedule = () => {
  const [view, setView] = useState<"kun" | "hafta" | "oy">("hafta");
  const freeCount = roomStatus.filter((r) => r.free).length;

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dars jadvali</h1>
          <p className="text-gray-500 mt-1">Haftalik darslar va xonalar taqsimoti</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Download className="w-4 h-4" />
            Eksport
          </button>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2.5 text-sm font-medium">
            <Plus className="w-4 h-4" />
            Dars qo'shish
          </button>
        </div>
      </div>

      {/* TOOLBAR */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            {(["kun", "hafta", "oy"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium capitalize transition ${
                  view === v ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {v}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-base font-semibold text-gray-900 whitespace-nowrap px-1">
              24-noy — 30-noy, 2025
            </span>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button className="border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Bugun
          </button>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {[
            { label: "Barcha o'qituvchilar", options: teacherOptions },
            { label: "Barcha guruhlar", options: groupOptions },
            { label: "Barcha xonalar", options: roomOptions },
          ].map((filter) => (
            <div key={filter.label} className="relative">
              <select className="appearance-none border border-gray-200 rounded-lg pl-4 pr-9 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                <option>{filter.label}</option>
                {filter.options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* CALENDAR GRID */}
      {view === "hafta" ? (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[900px]">

              {/* DAY HEADER ROW */}
              <div className="grid grid-cols-[80px_repeat(7,1fr)] border-b border-gray-100">
                <div />
                {weekDays.map((d) => (
                  <div
                    key={d.label}
                    className={`text-center py-3.5 ${d.isToday ? "bg-blue-50/50" : ""}`}
                  >
                    <p className="text-xs font-semibold tracking-wide text-gray-400">
                      {d.label}
                      {d.isToday && " · BUGUN"}
                    </p>
                    <p className={`text-lg font-bold mt-0.5 ${d.isToday ? "text-blue-600" : "text-gray-900"}`}>
                      {d.date}
                    </p>
                  </div>
                ))}
              </div>

              {/* TIME ROWS */}
              {timeSlots.map((slot) => (
                <div
                  key={slot.time}
                  className={`grid grid-cols-[80px_repeat(7,1fr)] border-b border-gray-100 last:border-0`}
                >
                  <div className="flex items-start justify-end pr-3 pt-2.5">
                    <span className="text-xs font-medium text-gray-400">{slot.time}</span>
                  </div>

                  {weekDays.map((d, dayIdx) => {
                    const lesson = getLesson(dayIdx, slot.time);
                    const color = lesson ? colorMap[lesson.code.split("-")[0]] : null;

                    return (
                      <div
                        key={d.label + slot.time}
                        className={`px-2 py-1.5 border-l border-gray-50 ${slot.compact ? "min-h-[44px]" : "min-h-[78px]"} ${
                          d.isToday ? "bg-blue-50/30" : ""
                        }`}
                      >
                        {lesson && color && (
                          <div className={`h-full border-l-4 ${color.border} ${color.bg} rounded-r-lg px-3 py-2`}>
                            <p className={`text-sm font-bold leading-tight ${color.text}`}>{lesson.code}</p>
                            <p className="text-xs text-gray-500 mt-0.5">
                              {lesson.teacher} · {lesson.room}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-16 text-center text-gray-400 text-sm">
          {view === "kun" ? "Kunlik ko'rinish" : "Oylik ko'rinish"} tez kunda qo'shiladi.
        </div>
      )}

      {/* ROOM STATUS */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <h2 className="text-lg font-semibold text-gray-900">
            Xonalar holati — bugun, 24-noyabr
          </h2>
          <span className="text-sm text-gray-500">
            {roomStatus.length} xonadan {freeCount} ta bo'sh
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {roomStatus.map((r) => (
            <label
              key={r.room}
              className={`flex items-start gap-3 px-4 py-3 rounded-lg border cursor-pointer transition ${
                r.free
                  ? "bg-emerald-50 border-emerald-200"
                  : "bg-rose-50 border-rose-200"
              }`}
            >
              <input type="checkbox" className="mt-0.5 accent-gray-700" />
              <div>
                <p className="text-sm font-semibold text-gray-900">{r.room}</p>
                <p className={`text-xs mt-0.5 ${r.free ? "text-emerald-600 font-medium" : "text-gray-500"}`}>
                  {r.free ? "✓ Bo'sh" : r.info}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;