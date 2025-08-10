import { useEffect, useState } from "react";
import axios from "axios";

export default function BrowseTiffins() {
  const [tiffins, setTiffins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userLocation, setUserLocation] = useState(null);
  const [radius, setRadius] = useState(5); // default 5 km
  const [tiffinType, setTiffinType] = useState(""); // "" = all

  const fetchTiffins = async (lat, lng) => {
    try {
      let url = "http://localhost:5000/api/tiffins";
      let params = {};

      if (lat && lng) {
        url = "http://localhost:5000/api/tiffins/nearby";
        params = { lat, lng, radius };
      }

      if (tiffinType) {
        params.tiffinType = tiffinType; // send only if user selects
      }

      const res = await axios.get(url, { params });
      setTiffins(res.data);
    } catch (err) {
      console.error("Failed to load tiffins:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Geolocation error:", error);
          fetchTiffins(); // fallback
        }
      );
    } else {
      console.error("Geolocation not supported");
      fetchTiffins(); // fallback
    }
  }, []);

  useEffect(() => {
    if (userLocation) {
      fetchTiffins(userLocation.latitude, userLocation.longitude);
    }
  }, [userLocation, radius, tiffinType]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-orange-600">
        Available Tiffins 🍱
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {/* Radius Filter */}
        <div>
          <label className="mr-2 text-gray-700">Search within:</label>
          <select
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            className="border rounded-md px-2 py-1"
          >
            <option value={2}>2 km</option>
            <option value={5}>5 km</option>
            <option value={10}>10 km</option>
            <option value={20}>20 km</option>
          </select>
        </div>

        {/* Tiffin Type Filter */}
        <div>
          <label className="mr-2 text-gray-700">Type:</label>
          <select
            value={tiffinType}
            onChange={(e) => setTiffinType(e.target.value)}
            className="border rounded-md px-2 py-1"
          >
            <option value="">All</option>
            <option value="veg">Veg</option>
            <option value="non-veg">Non-Veg</option>
            <option value="both">Both</option>
          </select>
        </div>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : tiffins.length === 0 ? (
        <p className="text-center text-gray-500">
          No tiffins found within {radius} km.
        </p>
      ) : (
        <>
          {userLocation && (
            <p className="text-center text-sm text-gray-500 mb-4">
              Showing results within {radius} km of your location
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiffins.map((tiffin) => (
              <div
                key={tiffin._id}
                className="bg-white rounded-xl shadow-md border hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {tiffin.name}
                </h2>
                <p className="text-sm text-gray-500 mb-2">
                  <strong>Type:</strong> {tiffin.tiffinType}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  <strong>Items:</strong> {tiffin.items}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  <strong>Price:</strong> ₹{tiffin.price}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Provider:</strong> {tiffin.providerName}
                </p>
                <button className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition">
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
