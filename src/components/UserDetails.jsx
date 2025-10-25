import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaBuilding, FaArrowLeft } from "react-icons/fa";


const LOCAL_KEY = "add_users";

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const { darkMode } = useContext(ThemeContext);

  // fetch data from API or localStorage
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .catch(() => {
        const localUsers = JSON.parse(localStorage.getItem(LOCAL_KEY) || "[]");
        const found = localUsers.find((u) => u._localId == id);
        setUser(found || null);
      });
  }, [id]);


  if (!user)
    return (
      <p
        className={`text-center text-lg ${darkMode ? "text-gray-400" : "text-gray-600"
          }`}
      >
        Loading...
      </p>
    );

  // User detail card render
  return (
    <div
      className={`max-w-md mx-auto p-6 rounded-3xl shadow-xl transition-all duration-500
                     ${darkMode
          ? "bg-gray-800 text-gray-100"
          : "bg-white text-gray-900"
        }`}
    >
      {/* User Name */}
      <h2 className="text-2xl font-bold mb-4">{user.name}</h2>

      {/* Email */}
      <p className="mb-2 opacity-85 flex items-center gap-2">
        <MdEmail className="text-indigo-500 text-lg" /> {user.email}
      </p>

      {/* Phone */}
      <p className="mb-2 opacity-85 flex items-center gap-2">
        <FaPhoneAlt className="text-green-500 text-sm" /> {user.phone}
      </p>

      {/* Company */}
      <p className="mb-4 opacity-85 flex items-center gap-2">
        <FaBuilding className="text-yellow-500 text-lg" />{" "}
        {user.company?.name || user.company}
      </p>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className={`w-full flex items-center justify-center gap-2 py-2 rounded-xl font-semibold transition
                    ${darkMode
            ? "bg-indigo-600 hover:bg-indigo-700 text-white"
            : "bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-indigo-600 hover:to-blue-600 text-white"
          }`}
      >
        <FaArrowLeft /> Back
      </button>
    </div>
  );
}
