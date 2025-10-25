import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const LOCAL_KEY = "add_users";

export default function AddUser() {
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  // Submit at localStorage 
  const handleSubmit = (e) => {
    e.preventDefault();

    // LocalStorage se purana data nikalna
    const oldData = JSON.parse(localStorage.getItem(LOCAL_KEY) || "[]");

    // Naya user object banana
    const newUser = {
      _localId: Date.now(),
      name,
      email,
      phone,
      company,
    };

    // LocalStorage me update karna
    localStorage.setItem(LOCAL_KEY, JSON.stringify([newUser, ...oldData]));

    // Home page pe redirect karna
    navigate("/");
  };

  return (
    <div
      className={`w-full md:w-[450px] lg:w-[500px] mx-auto p-8 rounded-3xl shadow-2xl transition-all duration-500
                  ${darkMode
          ? "bg-gray-800 text-gray-100 shadow-gray-800"
          : "bg-white text-gray-900 shadow-gray-300"
        }`}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Add New User</h2>

      {/*  Form Section */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Name */}
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full p-3 rounded-xl border focus:outline-none transition
                      ${darkMode
              ? "bg-gray-700 border-gray-600 text-gray-100 focus:ring-indigo-500"
              : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-purple-400"
            }`}
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full p-3 rounded-xl border focus:outline-none transition
                      ${darkMode
              ? "bg-gray-700 border-gray-600 text-gray-100 focus:ring-indigo-500"
              : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-purple-400"
            }`}
        />

        {/* Phone */}
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`w-full p-3 rounded-xl border focus:outline-none transition
                      ${darkMode
              ? "bg-gray-700 border-gray-600 text-gray-100 focus:ring-indigo-500"
              : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-purple-400"
            }`}
        />

        {/* Company */}
        <input
          type="text"
          placeholder="Enter Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={`w-full p-3 rounded-xl border focus:outline-none transition
                      ${darkMode
              ? "bg-gray-700 border-gray-600 text-gray-100 focus:ring-indigo-500"
              : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-purple-400"
            }`}
        />

        {/*  Buttons */}
        <div className="flex gap-4 mt-6">
          {/* Cancel */}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className={`flex-1 py-2 rounded-xl font-semibold transition
                        ${darkMode
                ? "bg-gray-600 hover:bg-gray-500 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-900"
              }`}
          >
            Cancel
          </button>

          {/* Add User */}
          <button
            type="submit"
            className={`flex-1 py-2 rounded-xl font-semibold transition
                        ${darkMode
                ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                : "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-600 hover:to-indigo-600 text-white"
              }`}
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}
