// src/pages/AdminDashboard.jsx
import { useState } from "react";

export default function AdminDashboard() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("app_user")));

  const handleUpdateName = () => {
    // GAP 1: Spread operator to keep other properties
    const updatedUser = {
      ...user,
      name: "Super_Admin",
    };

    // GAP 2: Save to state and LocalStorage
    setUser(updatedUser);
    localStorage.setItem("app_user", JSON.stringify(updatedUser));
  };

  return (
    <div className="p-5 bg-gray-800 text-white">
      <h2>Welcome, {user?.name}</h2>
      <button onClick={handleUpdateName} className="bg-yellow-500 p-2 text-black">
        Upgrade Permissions
      </button>
    </div>
  );
}
