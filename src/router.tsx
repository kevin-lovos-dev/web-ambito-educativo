import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import MainLayout from "./layout/MainLayout";
import ListStudents from "./pages/students/ListStudents";
import AddStudent from "./pages/students/AddStudent";


export const router = createBrowserRouter ([
    {path: '/', element: <Login/>},
    {
        element: <MainLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/listado",
            element: <ListStudents />,
          },
          {
            path: "/nuevo",
            element: <AddStudent />,
          },
        ],
      },
])