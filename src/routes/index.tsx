import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import NotFound from "../pages/NotFound";
import ContactUs from "../pages/ContactUs";
import JobDetails from "../pages/JobDetails";
import JobListings from "../pages/JobListings";
import MainLayout from "../components/layout/MainLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";

export const routes = [
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/job-listings", element: <JobListings /> },
      { path: "/job-details/:id", element: <JobDetails /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact-us", element: <ContactUs /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <NotFound /> },
];
