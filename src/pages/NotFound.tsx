import { Link } from "react-router-dom";
import { Bug, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-6">
          <Bug className="w-10 h-10 text-blue-600" />
        </div>

        <h1 className="text-7xl font-bold text-gray-900 mb-2">404</h1>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          this page is still under construction
        </h2>

        <Link
          to="/admin"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2.5 text-sm font-medium"
        >
          <Home className="w-4 h-4" />
          Asosiy sahifaga o'tish
        </Link>
      </div>
    </div>
  );
};

export default NotFound;