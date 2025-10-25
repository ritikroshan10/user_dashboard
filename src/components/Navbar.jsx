import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

export default function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`flex justify-between items-center p-4 rounded-b-3xl shadow-md transition-all duration-500 
        ${darkMode
          ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
          : "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 text-white"
        }`}
    >
      {/* -----------dashboard logo------- */}
      <Link to="/" className="text-xl font-bold tracking-wide">
        User Dashboard
      </Link>

      <div className="flex items-center gap-4">
        {/* ------add user button------- */}
        <Link
          to="/add"
          className={`font-medium px-3 py-1.5 rounded-md shadow-md transition 
          ${darkMode
              ? "bg-gray-700 hover:bg-gray-600 text-white"
              : "bg-white/20 hover:bg-white/30 text-white"
            }`}
        >
          Add User
        </Link>

        {/* ------theme toggle button------- */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md bg-white/20 hover:bg-white/30 transition"
        >
          {darkMode ? <BsSunFill size={20} /> : <BsMoonStarsFill size={20} />}
        </button>

      </div>
    </nav>
  );
}
