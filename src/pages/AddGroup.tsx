import { useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const weekDays = [
  { id: "du", short: "Du", full: "Dushanba" },
  { id: "se", short: "Se", full: "Seshanba" },
  { id: "cho", short: "Cho", full: "Chorshanba" },
  { id: "pa", short: "Pa", full: "Payshanba" },
  { id: "ju", short: "Ju", full: "Juma" },
  { id: "sha", short: "Sha", full: "Shanba" },
  { id: "ya", short: "Ya", full: "Yakshanba" },
];

const timeSlots = ["09:00", "10:30", "11:00", "13:00", "14:00", "15:30", "17:30", "19:00"];

const extraFeatures = [
  { id: "installment", label: "Bo'lib to'lash imkoniyati" },
  { id: "certificate", label: "Sertifikat berish" },
  { id: "mentor", label: "Mentor bilan birga ishlash" },
  { id: "job", label: "Ish topishga yordam" },
];

const AddGroup = () => {
  const [selectedDays, setSelectedDays] = useState<string[]>(["du", "cho", "ju"]);
  const [selectedTime, setSelectedTime] = useState("09:00");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["installment", "certificate"]);

  const toggleDay = (id: string) => {
    setSelectedDays((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const selectedDayLabels = weekDays
    .filter((d) => selectedDays.includes(d.id))
    .map((d) => d.short)
    .join(", ");

  return (
    <div className="space-y-6 max-w-4xl">
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
        <span className="font-semibold text-gray-900">Yangi guruh</span>
      </div>

      {/* Page heading */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Yangi guruh yaratish</h1>
        <p className="text-gray-500 mt-1">Yangi guruh uchun ma'lumotlarni to'liq kiriting</p>
      </div>

      {/* Basic info */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900">Asosiy ma'lumotlar</h2>
        <p className="text-gray-500 text-sm mt-1 mb-5 pb-5 border-b border-gray-100">
          Guruh nomi, kurs va o'qituvchi tanlash
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Guruh nomi <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Masalan: Frontend-03"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-400 mt-1.5">Kurs nomi + raqami formatida</p>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">Boshlang'ich holat</label>
            <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Yangi (boshlanmagan)</option>
              <option>Faol</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Kurs <span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Kursni tanlang...</option>
              <option>JavaScript dasturlash</option>
              <option>React.js asoslari</option>
              <option>Python dasturchilik</option>
              <option>UX/UI dizayn</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              O'qituvchi <span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3">
              <option>O'qituvchini tanlang...</option>
              <option>Akmal Karimov</option>
              <option>Nodira Yusupova</option>
            </select>

            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
              <img
                src="https://i.pravatar.cc/64?img=12"
                alt="Akmal Karimov"
                className="w-9 h-9 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-semibold text-gray-900">Akmal Karimov</div>
                <div className="text-xs text-gray-500">
                  JavaScript Lead · 8 yillik tajriba · 3 ta guruh
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <label className="block text-sm text-gray-700 mb-1.5">Tavsif</label>
          <textarea
            rows={4}
            placeholder="Guruh haqida qisqacha ma'lumot..."
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>
      </div>

      {/* Action bar */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-6 py-4 flex items-center justify-between flex-wrap gap-3">
        <p className="text-sm text-gray-500">Barcha majburiy maydonlarni to'ldiring</p>
        <div className="flex items-center gap-3">
          <Link
            to="/admin/groups"
            className="border border-gray-200 rounded-lg px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Bekor qilish
          </Link>
          <button className="border border-gray-200 rounded-lg px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Qoralama saqlash
          </button>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2.5 text-sm font-medium">
            <Check className="w-4 h-4" />
            Guruhni yaratish
          </button>
        </div>
      </div>

      {/* Dates */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Boshlanish sanasi <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">Tugash sanasi</label>
            <input
              type="date"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">Davomiyligi</label>
            <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>3 oy</option>
              <option>6 oy</option>
              <option>12 oy</option>
            </select>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900">Dars jadvali</h2>
        <p className="text-gray-500 text-sm mt-1 mb-5 pb-5 border-b border-gray-100">
          Haftada qaysi kunlar va qaysi vaqtda dars o'tilishini tanlang
        </p>

        <div className="mb-6">
          <label className="block text-sm text-gray-700 mb-3">
            Hafta kunlari <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {weekDays.map((day) => {
              const isActive = selectedDays.includes(day.id);
              return (
                <button
                  key={day.id}
                  onClick={() => toggleDay(day.id)}
                  className={`rounded-lg py-3 text-center transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <div className="font-bold text-sm">{day.short}</div>
                  <div className={`text-xs mt-0.5 ${isActive ? "text-blue-100" : "text-gray-400"}`}>
                    {day.full}
                  </div>
                </button>
              );
            })}
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Bir nechta kunni tanlash mumkin · Hozir tanlangan: {selectedDayLabels}
          </p>
        </div>

        <div className="mb-6">
          <label className="block text-sm text-gray-700 mb-3">
            Dars vaqti <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-3">
            {timeSlots.map((time) => {
              const isActive = selectedTime === time;
              return (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`rounded-lg py-3 text-center text-sm font-semibold transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {time}
                </button>
              );
            })}
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Bitta vaqt tanlanadi · Har dars 90 daqiqa davom etadi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">Xona</label>
            <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Xona 1</option>
              <option>Xona 2</option>
              <option>Xona 3</option>
              <option>Xona 4</option>
              <option>Xona 5</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">Format</label>
            <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Offline (ofisda)</option>
              <option>Online</option>
              <option>Aralash</option>
            </select>
          </div>
        </div>
      </div>

      {/* Students & price */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-5 pb-5 border-b border-gray-100">
          Talabalar va narx
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-2">
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Maks. talabalar soni <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              defaultValue={20}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">Min. talabalar soni</label>
            <input
              type="number"
              defaultValue={8}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Oylik narx (so'm) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              defaultValue={490000}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <p className="text-xs text-gray-400 mb-5">5–30 oralig'ida</p>

        <label className="block text-sm text-gray-700 mb-3">Qo'shimcha imkoniyatlar</label>
        <div className="space-y-2.5">
          {extraFeatures.map((feature) => (
            <label key={feature.id} className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFeatures.includes(feature.id)}
                onChange={() => toggleFeature(feature.id)}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{feature.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddGroup;