import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/layouts/AdminLayout";
import { 
    Dashboard ,
    Students,
    StudentDetail,
    Groups,
    GroupDetail,
    AddGroup,
    Schedule,
    AddStudent,
    Attendance,
    NotFound,
} from "../pages";

const router = createBrowserRouter([
  
  {
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/students",
        element: <Students />,
      },
      {
        path: "/admin/students/:id",
        element: <StudentDetail />,
      },
      {
        path: "/admin/groups",
        element: <Groups />,
      },
      {
        path: "/admin/groups/:id",
        element: <GroupDetail/>,
      },
      {
        path: "/admin/groups/add",
        element: <AddGroup />,
      },
      {
        path: "/admin/schedule",
        element: <Schedule />,
      },
      {
        path: "/admin/students/add",
        element: <AddStudent />,
      },
      {
        path: "/admin/attendance",
        element: <Attendance />,
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);


export default router;