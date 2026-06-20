import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Pencil,
  MoreVertical,
  IdCard,
  CalendarDays,
  Phone,
  Info,
  Calendar,
  Award,
  CreditCard,
  FileText,
} from "lucide-react";

const tabs = [
  { id: "umumiy", label: "Umumiy", icon: Info },
  { id: "davomat", label: "Davomat", icon: Calendar },
  { id: "baholar", label: "Baholar", icon: Award },
  { id: "tolovlar", label: "To'lovlar", icon: CreditCard },
  { id: "hujjatlar", label: "Hujjatlar", icon: FileText },
];

const personalInfo = [
  { label: "F.I.Sh.", value: "Tojiev Bobur Akmal o'g'li" },
  { label: "Tug'ilgan sana", value: "12-mart, 2003-yil" },
  { label: "Yoshi", value: "22 yosh" },
  { label: "Jinsi", value: "Erkak" },
  { label: "Millati", value: "O'zbek" },
  { label: "Passport", value: "AA 1234567" },
];

const contactInfo = [
  { label: "Telefon", value: "+998 90 123 45 67" },
  { label: "Email", value: "bobur.tojiev@gmail.com" },
  { label: "Telegram", value: "@bobur_dev" },
  { label: "Manzil", value: "Toshkent shahar, Mirzo Ulug'bek tumani, Sayilgoh ko'chasi 24-uy" },
];

const fatherInfo = [
  { label: "F.I.Sh.", value: "Tojiev Akmal Karimovich" },
  { label: "Tug'ilgan sana", value: "8-iyun, 1975" },
  { label: "Telefon", value: "+998 90 111 22 33" },
  { label: "Ish joyi", value: "\"Uztelecom\" AJ — muhandis" },
];

const motherInfo = [
  { label: "F.I.Sh.", value: "Tojieva Munira Rasulovna" },
  { label: "Tug'ilgan sana", value: "22-aprel, 1978" },
  { label: "Telefon", value: "+998 91 222 33 44" },
  { label: "Kasbi", value: "O'qituvchi (matematika)" },
];

const StudentDetail = () => {
  const [activeTab, setActiveTab] = useState("umumiy");

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Link to="/admin" className="hover:text-blue-600">
          Admin
        </Link>
        <span>{">"}</span>
        <Link to="/admin/students" className="hover:text-blue-600">
          Talabalar
        </Link>
        <span>{">"}</span>
        <span className="font-semibold text-gray-900">Bobur Tojiev</span>
      </div>

      {/* Profile header card */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex items-start justify-between flex-wrap gap-4">
        <div className="flex items-start gap-5">
          <img
            src="https://i.pravatar.cc/150?img=53"
            alt="Bobur Tojiev"
            className="w-20 h-20 rounded-full object-cover ring-4 ring-blue-50"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Bobur Tojiev</h1>
            <div className="flex items-center gap-5 mt-2 text-sm text-gray-500 flex-wrap">
              <span className="flex items-center gap-1.5">
                <IdCard className="w-4 h-4" />
                ID: ST-0123
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4" />
                15-iyul, 2025'dan beri
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4" />
                +998 90 123 45 67
              </span>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                Frontend-01
              </span>
              <span className="flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Faol talaba
              </span>
              <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                JavaScript kursi
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Mail className="w-4 h-4" />
            Xabar yuborish
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
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 pb-3 text-sm font-medium border-b-2 -mb-px ${
                isActive
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      {activeTab === "umumiy" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Personal info */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">
                  Shaxsiy ma'lumotlar
                </h2>
              </div>
              <div className="px-6">
                {personalInfo.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-gray-500">{item.label}</span>
                    <span className="font-medium text-gray-900 text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">
                  Aloqa ma'lumotlari
                </h2>
              </div>
              <div className="px-6">
                {contactInfo.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0 gap-6"
                  >
                    <span className="text-gray-500 whitespace-nowrap">{item.label}</span>
                    <span className="font-medium text-gray-900 text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Parents info */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-5">
              Ota-ona ma'lumotlari
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
              <div>
                <div className="text-xs font-bold tracking-wide text-blue-600 mb-3">
                  OTASI
                </div>
                {fatherInfo.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-gray-500">{item.label}</span>
                    <span className="font-medium text-gray-900 text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <div className="text-xs font-bold tracking-wide text-blue-600 mb-3">
                  ONASI
                </div>
                {motherInfo.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-gray-500">{item.label}</span>
                    <span className="font-medium text-gray-900 text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "davomat" && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-gray-500 text-sm">
          Davomat ma'lumotlari tez orada qo'shiladi.
        </div>
      )}

      {activeTab === "baholar" && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-gray-500 text-sm">
          Baholar ma'lumotlari tez orada qo'shiladi.
        </div>
      )}

      {activeTab === "tolovlar" && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-gray-500 text-sm">
          To'lovlar ma'lumotlari tez orada qo'shiladi.
        </div>
      )}

      {activeTab === "hujjatlar" && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-gray-500 text-sm">
          Hujjatlar tez orada qo'shiladi.
        </div>
      )}
    </div>
  );
};

export default StudentDetail;