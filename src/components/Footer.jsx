import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer
      className={`py-6 mt-10 text-center rounded-t-3xl shadow-inner transition-all duration-500 
        ${darkMode
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 border-t border-gray-700"
          : "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 text-white"
        }`}
    >
      <p className="text-sm tracking-wide">
        &copy; {new Date().getFullYear()} User Management Dashboard — Designed by Ritik Roshan.
      </p>
    </footer>
  );
}
