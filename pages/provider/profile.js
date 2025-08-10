import { useState, useEffect } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    serviceArea: "",
    tiffinType: "",
    latitude: "",
    longitude: "",
  });

  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:5000/api/provider/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setProfile(res.data);
          setForm({
            ...res.data,
            latitude: res.data.location?.coordinates?.[1] || "",
            longitude: res.data.location?.coordinates?.[0] || "",
          });
        })
        .catch((err) => {
          console.error("Error fetching profile:", err);
        });
    }
  }, [token]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setForm({
            ...form,
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          });
          setMessage({ type: "success", text: "📍 Location updated from GPS." });
        },
        (err) => {
          console.error("Geolocation error", err);
          setMessage({ type: "error", text: "❌ Failed to fetch location." });
        }
      );
    } else {
      setMessage({ type: "error", text: "❌ Geolocation not supported in this browser." });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("http://localhost:5000/api/provider/profile", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage({ type: "success", text: "✅ Profile updated successfully!" });
      setProfile(res.data.provider);
      setEditing(false);
    } catch (err) {
      console.error("Update failed", err);
      setMessage({ type: "error", text: "❌ Failed to update profile." });
    }
  };

  if (!profile) return <p className="p-4 text-center">Loading profile...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-4">Provider Profile</h2>

      {message.text && (
        <div
          className={`mb-4 p-3 rounded ${
            message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {message.text}
        </div>
      )}

      {!editing ? (
        <div className="space-y-3">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Phone:</strong> {profile.phone}</p>
          <p><strong>Service Area:</strong> {profile.serviceArea}</p>
          <p><strong>Tiffin Type:</strong> {profile.tiffinType}</p>
          <p><strong>Latitude:</strong> {form.latitude || "Not set"}</p>
          <p><strong>Longitude:</strong> {form.longitude || "Not set"}</p>

          <button
            onClick={() => setEditing(true)}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
          >
            Edit Profile
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="Name"
            required
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="Phone"
            required
          />
          <input
            name="email"
            value={form.email}
            disabled
            className="w-full border px-3 py-2 rounded bg-gray-100"
          />
          <input
            name="serviceArea"
            value={form.serviceArea}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="Service Area"
          />
          <select
            name="tiffinType"
            value={form.tiffinType}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">-- Select Tiffin Type --</option>
            <option value="veg">Veg</option>
            <option value="non-veg">Non-Veg</option>
            <option value="both">Both</option>
          </select>

          <div className="flex gap-4">
            <input
              name="latitude"
              value={form.latitude}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              placeholder="Latitude"
            />
            <input
              name="longitude"
              value={form.longitude}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              placeholder="Longitude"
            />
          </div>

          <button
            type="button"
            onClick={handleGetLocation}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg"
          >
            Use Current Location
          </button>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
          >
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
};

export default ProfilePage;
