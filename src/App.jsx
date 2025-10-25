import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import UserDetails from "./components/UserDetails";
import AddUser from "./components/AddUser";

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={`flex flex-col min-h-screen transition-colors duration-500
        ${darkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
            : "bg-gradient-to-br from-blue-100 via-blue-50 to-white text-gray-900"
          }`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow max-w-6xl mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<UserDetails />} />
            <Route path="/add" element={<AddUser />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
