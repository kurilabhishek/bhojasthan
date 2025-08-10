// pages/provider/dashboard.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { FaUserEdit, FaBoxOpen, FaUtensils, FaSignOutAlt } from "react-icons/fa";

const ProviderDashboard = () => {
  const router = useRouter();
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/provider/login");
          return;
        }
        const res = await axios.get("http://localhost:5000/api/provider/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProvider(res.data);
      } catch (err) {
        console.error("Failed to load provider profile:", err);
        router.push("/provider/login");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/provider/login");
  };

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading dashboard...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">
          👋 Welcome {provider?.name || "Provider"}
        </h1>
        <p className="text-gray-600 mb-8">
          Manage your profile, tiffin plans, and today’s menu from here.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <button
            onClick={() => router.push("/provider/profile")}
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl shadow"
          >
            <FaUserEdit /> View/Edit Profile
          </button>
          <button
            onClick={() => router.push("/provider/tiffins")}
            className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl shadow"
          >
            <FaBoxOpen /> Manage Tiffin Plans
          </button>
          <button
            onClick={() => router.push("/provider/menu")}
            className="flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 rounded-xl shadow"
          >
            <FaUtensils /> Update Today’s Menu
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-xl shadow md:col-span-2 lg:col-span-1"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
