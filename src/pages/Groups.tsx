import { Link } from "react-router-dom";
import { Search, Users, Calendar, Plus, ArrowRight } from "lucide-react";

interface Group {
  id: string;
  name: string;
  course: string;
  courseColor: string;
  status: "Faol" | "Boshlanmagan";
  teacher: string;
  teacherImg: string;
  students: number;
  startDate: string;
  schedule: string;
  avatars: string[];
  extra: number;
}

const groups: Group[] = [
  {
    id: "frontend-01",
    name: "Frontend-01",
    course: "JavaScript dasturlash",
    courseColor: "bg-blue-50 text-blue-600",
    status: "Faol",
    teacher: "Akmal Karimov",
    teacherImg: "https://i.pravatar.cc/64?img=12",
    students: 18,
    startDate: "15-okt, 2025",
    schedule: "Du · 09:00   Cho · 09:00   Ju · 09:00",
    avatars: ["https://i.pravatar.cc/64?img=53", "https://i.pravatar.cc/64?img=47", "https://i.pravatar.cc/64?img=14"],
    extra: 15,
  },
  {
    id: "frontend-02",
    name: "Frontend-02",
    course: "JavaScript dasturlash",
    courseColor: "bg-blue-50 text-blue-600",
    status: "Faol",
    teacher: "Akmal Karimov",
    teacherImg: "https://i.pravatar.cc/64?img=12",
    students: 16,
    startDate: "1-noy, 2025",
    schedule: "Du · 15:30   Cho · 15:30   Ju · 15:30",
    avatars: ["https://i.pravatar.cc/64?img=29", "https://i.pravatar.cc/64?img=15", "https://i.pravatar.cc/64?img=51"],
    extra: 13,
  },
  {
    id: "react-01",
    name: "React-01",
    course: "React.js asoslari",
    courseColor: "bg-blue-50 text-blue-600",
    status: "Boshlanmagan",
    teacher: "Nodira Yusupova",
    teacherImg: "https://i.pravatar.cc/64?img=45",
    students: 14,
    startDate: "1-dek, 2025",
    schedule: "Se · 11:00   Pa · 11:00   Sha · 11:00",
    avatars: ["https://i.pravatar.cc/64?img=18", "https://i.pravatar.cc/64?img=41"],
    extra: 12,
  },
  {
    id: "backend-03",
    name: "Backend-03",
    course: "Python dasturchilik",
    courseColor: "bg-emerald-50 text-emerald-700",
    status: "Faol",
    teacher: "Sherzod Rahimov",
    teacherImg: "https://i.pravatar.cc/64?img=33",
    students: 20,
    startDate: "10-sen, 2025",
    schedule: "Du · 13:30   Cho · 13:30   Ju · 13:30",
    avatars: ["https://i.pravatar.cc/64?img=44", "https://i.pravatar.cc/64?img=32", "https://i.pravatar.cc/64?img=36"],
    extra: 17,
  },
  {
    id: "backend-04",
    name: "Backend-04",
    course: "Node.js dasturlash",
    courseColor: "bg-emerald-50 text-emerald-700",
    status: "Boshlanmagan",
    teacher: "Bekzod Salimov",
    teacherImg: "https://i.pravatar.cc/64?img=56",
    students: 12,
    startDate: "5-dek, 2025",
    schedule: "Se · 17:30   Pa · 17:30   Sha · 17:30",
    avatars: ["https://i.pravatar.cc/64?img=23"],
    extra: 11,
  },
  {
    id: "dizayn-01",
    name: "Dizayn-01",
    course: "UX/UI dizayn",
    courseColor: "bg-blue-50 text-blue-600",
    status: "Faol",
    teacher: "Madina Ergasheva",
    teacherImg: "https://i.pravatar.cc/64?img=31",
    students: 15,
    startDate: "1-okt, 2025",
    schedule: "Du · 11:00   Cho · 11:00   Ju · 11:00",
    avatars: ["https://i.pravatar.cc/64?img=38", "https://i.pravatar.cc/64?img=39"],
    extra: 13,
  },
  {
    id: "dizayn-02",
    name: "Dizayn-02",
    course: "UX/UI dizayn",
    courseColor: "bg-blue-50 text-blue-600",
    status: "Faol",
    teacher: "Madina Ergasheva",
    teacherImg: "https://i.pravatar.cc/64?img=31",
    students: 14,
    startDate: "15-noy, 2025",
    schedule: "Se · 09:00   Pa · 09:00   Sha · 09:00",
    avatars: ["https://i.pravatar.cc/64?img=27", "https://i.pravatar.cc/64?img=21"],
    extra: 12,
  },
  {
    id: "mobil-01",
    name: "Mobil-01",
    course: "Flutter",
    courseColor: "bg-orange-50 text-orange-600",
    status: "Faol",
    teacher: "Otabek Salimov",
    teacherImg: "https://i.pravatar.cc/64?img=58",
    students: 13,
    startDate: "10-noy, 2025",
    schedule: "Du · 17:30   Cho · 17:30   Ju · 17:30",
    avatars: ["https://i.pravatar.cc/64?img=11"],
    extra: 12,
  },
  {
    id: "data-01",
    name: "Data-01",
    course: "Data Science",
    courseColor: "bg-red-50 text-red-600",
    status: "Faol",
    teacher: "Sevara Tursunova",
    teacherImg: "https://i.pravatar.cc/64?img=49",
    students: 10,
    startDate: "5-okt, 2025",
    schedule: "Se · 13:30   Pa · 13:30   Sha · 13:30",
    avatars: ["https://i.pravatar.cc/64?img=20", "https://i.pravatar.cc/64?img=37"],
    extra: 8,
  },
  {
    id: "devops-01",
    name: "DevOps-01",
    course: "DevOps muhandisi",
    courseColor: "bg-gray-100 text-gray-600",
    status: "Boshlanmagan",
    teacher: "Jasur Mahmudov",
    teacherImg: "https://i.pravatar.cc/64?img=60",
    students: 8,
    startDate: "1-dek, 2025",
    schedule: "Du · 19:00   Cho · 19:00   Ju · 19:00",
    avatars: ["https://i.pravatar.cc/64?img=8"],
    extra: 7,
  },
  {
    id: "marketing-01",
    name: "Marketing-01",
    course: "Raqamli marketing",
    courseColor: "bg-blue-50 text-blue-600",
    status: "Faol",
    teacher: "Diloraxon Nazarova",
    teacherImg: "https://i.pravatar.cc/64?img=25",
    students: 22,
    startDate: "20-okt, 2025",
    schedule: "Du · 14:00   Cho · 14:00   Ju · 14:00",
    avatars: ["https://i.pravatar.cc/64?img=24", "https://i.pravatar.cc/64?img=26", "https://i.pravatar.cc/64?img=28"],
    extra: 19,
  },
  {
    id: "java-01",
    name: "Java-01",
    course: "Java / Spring",
    courseColor: "bg-emerald-50 text-emerald-700",
    status: "Boshlanmagan",
    teacher: "Aziz Inomov",
    teacherImg: "https://i.pravatar.cc/64?img=52",
    students: 9,
    startDate: "1-dek, 2025",
    schedule: "Se · 15:30   Pa · 15:30   Sha · 15:30",
    avatars: ["https://i.pravatar.cc/64?img=9"],
    extra: 8,
  },
];

const statusStyle: Record<Group["status"], string> = {
  Faol: "bg-green-50 text-green-700",
  Boshlanmagan: "bg-amber-50 text-amber-600",
};

const statusDot: Record<Group["status"], string> = {
  Faol: "bg-green-500",
  Boshlanmagan: "bg-amber-500",
};

const Groups = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Guruhlar</h1>
          <p className="text-gray-500 mt-1">
            Jami 12 ta guruh — 8 ta faol, 4 ta yangi
          </p>
        </div>
        <Link
          to="/admin/groups/add"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2.5 text-sm font-medium"
        >
          <Plus className="w-4 h-4" />
          Guruh yaratish
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Guruh nomi yoki kursi..."
            className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Barcha kurslar</option>
        </select>
        <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Barcha o'qituvchilar</option>
        </select>
        <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Barcha holatlar</option>
          <option>Faol</option>
          <option>Boshlanmagan</option>
        </select>
      </div>

      {/* Group cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <div
            key={group.id}
            className="bg-white border border-gray-100 rounded-xl shadow-sm p-5"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-900">{group.name}</h3>
              <span
                className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${statusStyle[group.status]}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${statusDot[group.status]}`} />
                {group.status}
              </span>
            </div>

            <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${group.courseColor}`}>
              {group.course}
            </span>

            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <img
                src={group.teacherImg}
                alt={group.teacher}
                className="w-9 h-9 rounded-full object-cover"
              />
              <div>
                <div className="text-xs text-gray-400">O'qituvchi</div>
                <div className="text-sm font-semibold text-gray-900">{group.teacher}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 border-b border-gray-100">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                  <Users className="w-3.5 h-3.5" />
                  Talabalar
                </div>
                <div className="text-sm font-semibold text-gray-900">{group.students} ta</div>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Boshlanish
                </div>
                <div className="text-sm font-semibold text-gray-900">{group.startDate}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap py-4 border-b border-gray-100">
              {group.schedule.split("   ").map((slot, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md"
                >
                  {slot}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center">
                {group.avatars.map((avatar, idx) => (
                  <img
                    key={idx}
                    src={avatar}
                    alt=""
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-white -ml-2 first:ml-0"
                  />
                ))}
                <span className="ml-1 text-xs font-medium text-gray-500">
                  +{group.extra}
                </span>
              </div>
              <Link
                to={`/admin/groups/${group.id}`}
                className="flex items-center gap-1 border border-gray-200 rounded-lg px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Batafsil
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;