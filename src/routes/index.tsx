import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import NotFound from "../pages/NotFound";
import ContactUs from "../pages/ContactUs";
import JobDetails from "../pages/JobDetails";
import Jobs from "../pages/Jobs";
import MainLayout from "../components/layout/MainLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";

import Companies from "../pages/Companies";
import CompanyDetails from "../pages/CompanyDetails";

import DashboardLayout from "../components/layout/DashboardLayout";
import CandidateDashboard from "../pages/dashboard/CandidateDashboard";
import EmployerDashboard from "../pages/dashboard/EmployerDashboard";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import Profile from "../pages/Profile";

export const routes = [
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/jobs", element: <Jobs /> },
      { path: "/job-details/:id", element: <JobDetails /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/companies", element: <Companies /> },
      { path: "/companies/:id", element: <CompanyDetails /> },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          { path: "candidate", element: <CandidateDashboard /> },
          { path: "employer", element: <EmployerDashboard /> },
          { path: "admin", element: <AdminDashboard /> },
          { path: "profile", element: <Profile /> },
        ],
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <NotFound /> },
];
