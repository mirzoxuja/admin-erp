import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Upload, Trash2, Phone, Mail, Check } from "lucide-react";

const groupOptions = [
  "Frontend-01",
  "Frontend-02",
  "Dizayn-01",
  "Dizayn-02",
  "React-01",
  "Backend-03",
  "Backend-04",
  "Data-01",
  "Marketing-01",
  "Java-01",
  "Mobil-01",
  "DevOps-01",
];

const AddStudent = () => {
  const [gender, setGender] = useState<"erkak" | "ayol">("erkak");
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPhotoPreview(URL.createObjectURL(file));
  };

  return (
    <div className="space-y-6 max-w-4xl">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Link to="/admin" className="hover:text-blue-600">Admin</Link>
        <span>{">"}</span>
        <Link to="/admin/students" className="hover:text-blue-600">Talabalar</Link>
        <span>{">"}</span>
        <span className="font-semibold text-gray-900">Yangi talaba</span>
      </div>

      {/* Page heading */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Yangi talaba qo'shish</h1>
        <p className="text-gray-500 mt-1">Talabaning ma'lumotlarini to'liq kiriting</p>
      </div>

      {/* Photo */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-5 pb-5 border-b border-gray-100">
          Foto
        </h2>

        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-200 bg-gray-50 flex items-center justify-center overflow-hidden shrink-0">
            {photoPreview ? (
              <img src={photoPreview} alt="Profil rasmi" className="w-full h-full object-cover" />
            ) : (
              <User className="w-8 h-8 text-gray-300" />
            )}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-1">Profil rasmi</p>
            <p className="text-xs text-gray-400 mb-3">
              JPG yoki PNG · Max 2 MB · 3×4 yoki kvadrat
            </p>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer">
                <Upload className="w-4 h-4" />
                Yuklash
                <input type="file" accept="image/jpeg,image/png" className="hidden" onChange={handlePhotoUpload} />
              </label>
              <button
                onClick={() => setPhotoPreview(null)}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-red-600"
              >
                <Trash2 className="w-3.5 h-3.5" />
                O'chirish
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Personal info */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900">Shaxsiy ma'lumotlar</h2>
        <p className="text-gray-500 text-sm mt-1 mb-5 pb-5 border-b border-gray-100">
          Asosiy ma'lumotlar — barcha maydonlar majburiy
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Familiya <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Karimov"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Ism <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Aziz"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">Otasining ismi</label>
            <input
              type="text"
              placeholder="Sherzodovich"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Tug'ilgan sana <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Jinsi <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-6 h-[42px]">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  checked={gender === "erkak"}
                  onChange={() => setGender("erkak")}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Erkak</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  checked={gender === "ayol"}
                  onChange={() => setGender("ayol")}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Ayol</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Action bar */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-6 py-4 flex items-center justify-between flex-wrap gap-3">
        <p className="text-sm text-gray-500">Barcha majburiy maydonlarni to'ldiring</p>
        <div className="flex items-center gap-3">
          <Link
            to="/admin/students"
            className="border border-gray-200 rounded-lg px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Bekor qilish
          </Link>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2.5 text-sm font-medium">
            <Check className="w-4 h-4" />
            Saqlash
          </button>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Telefon raqam <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                placeholder="+998 90 123 45 67"
                className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                placeholder="ism@example.uz"
                className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1.5">Yashash manzili</label>
          <textarea
            rows={3}
            placeholder="Shahar, tuman, ko'cha, uy raqami..."
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>
      </div>

      {/* Study details */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-5 pb-5 border-b border-gray-100">
          O'quv tafsilotlari
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Guruh <span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Guruhni tanlang...</option>
              {groupOptions.map((g) => (
                <option key={g} className="text-gray-900">{g}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">Boshlanish sanasi</label>
            <input
              type="date"
              defaultValue="2025-12-01"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Parent info */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900">Ota-ona ma'lumotlari</h2>
        <p className="text-gray-500 text-sm mt-1 mb-5 pb-5 border-b border-gray-100">
          Talaba 18 yoshdan kichik bo'lsa majburiy
        </p>

        <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">Otasi</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">F.I.Sh.</label>
            <input
              type="text"
              placeholder="Karimov Sherzod Akmal o'g'li"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">Telefon</label>
            <input
              type="tel"
              placeholder="+998 90 111 22 33"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <p className="text-xs font-bold tracking-widest text-purple-600 uppercase mb-3">Onasi</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">F.I.Sh.</label>
            <input
              type="text"
              placeholder="Karimova Nodira Rasulovna"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">Telefon</label>
            <input
              type="tel"
              placeholder="+998 91 222 33 44"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Additional info */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-5 pb-5 border-b border-gray-100">
          Qo'shimcha ma'lumotlar
        </h2>

        <label className="block text-sm text-gray-700 mb-1.5">Izoh</label>
        <textarea
          rows={4}
          placeholder="Qo'shimcha izoh yoki maxsus talablar..."
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>
    </div>
  );
};

export default AddStudent;