import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

// -------Key for local storage---------
const LOCAL_KEY = "add_users";

export default function Home() {
  // store users
  const [users, setUsers] = useState([]);
  // search users
  const [search, setSearch] = useState("");
  // theme context
  const { darkMode } = useContext(ThemeContext);


  // fetch data from API and local storage
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        const apiUsers = res.data;
        const localUsers = JSON.parse(localStorage.getItem(LOCAL_KEY) || "[]");
        setUsers([...localUsers, ...apiUsers]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  // filter users based on search input
  const filtered = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen p-4">

      <h2 className="text-3xl font-bold mb-6 text-center">
        User List
      </h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or email..."
        className={`w-full md:w-1/2 mx-auto block mb-6 p-3 rounded-lg shadow focus:outline-none
                    ${darkMode 
                      ? "bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-400 focus:ring-blue-600" 
                      : "bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-indigo-400"} 
                    focus:ring-2 transition`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.length === 0 ? (
        <p className={`text-center text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          No users found.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* User Cards */}
          {filtered.map((user) => (
            <Link
              to={`/user/${user.id || user._localId}`}
              key={user.id || user._localId}
              className={`p-5 rounded-2xl shadow-lg transform transition hover:scale-105
                          ${darkMode ? "bg-gray-800 text-gray-100 shadow-gray-700" : "bg-white text-gray-900 shadow-gray-300"}`}
            >
              <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
              <p className="text-sm mb-1 opacity-80">{user.email}</p>
              <p className="text-sm mb-1 opacity-80">{user.phone}</p>
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                {user.company?.name || user.company}
              </p>
            </Link>
          ))}

        </div>
      )}
    </div>
  );
}
