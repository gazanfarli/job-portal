import { NavLink } from "react-router-dom";
import { navItems } from "../../../constants/navItems";

const NavBar = () => {
  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <div className="flex justify-between items-center py-5">
        <NavLink to="/" className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">Job Portal</h1>
        </NavLink>

        <nav className="hidden md:block">
          <ul className="flex gap-5">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `transition-colors duration-200 hover:text-blue-500 ${
                      isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-2">
          <NavLink
            to="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-blue-600"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-blue-600"
          >
            Register
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
