// /pages/provider/tiffins.js
import { useEffect, useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function TiffinManager() {
  const [tiffins, setTiffins] = useState([]);
  const [editingTiffin, setEditingTiffin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const fetchTiffins = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tiffins?mine=true", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTiffins(res.data);
    } catch (err) {
      console.error("Failed to load tiffins", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchTiffins();
  }, [token]);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    items: Yup.string().required("Items are required"),
    price: Yup.number().required("Price is required"),
    tiffinType: Yup.string()
      .oneOf(["veg", "non-veg", "both"], "Invalid type")
      .required("Tiffin type is required"),
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      if (editingTiffin) {
        await axios.put(`http://localhost:5000/api/tiffins/${editingTiffin._id}`, values, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessage("✅ Tiffin updated successfully!");
      } else {
        await axios.post("http://localhost:5000/api/tiffins", values, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessage("✅ Tiffin added successfully!");
      }
      resetForm();
      setEditingTiffin(null);
      fetchTiffins();
    } catch (err) {
      console.error("Save failed", err);
      setMessage("❌ Failed to save tiffin.");
    } finally {
      setSubmitting(false);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this tiffin?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/tiffins/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage("✅ Tiffin deleted successfully!");
      fetchTiffins();
    } catch (err) {
      console.error("Delete failed", err);
      setMessage("❌ Failed to delete tiffin.");
    } finally {
      setTimeout(() => setMessage(""), 3000);
    }
  };

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {editingTiffin ? "Edit Tiffin" : "Add New Tiffin Plan"}
      </h2>

      {message && (
        <div
          className={`mb-4 p-3 rounded text-sm ${
            message.startsWith("✅") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {message}
        </div>
      )}

      <Formik
        enableReinitialize
        initialValues={
          editingTiffin || {
            name: "",
            items: "",
            price: "",
            tiffinType: "",
          }
        }
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="bg-white p-6 rounded-lg shadow space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <Field name="name" className="w-full p-2 border rounded" />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Items</label>
              <Field as="textarea" name="items" className="w-full p-2 border rounded" />
              <ErrorMessage name="items" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Price (₹)</label>
              <Field name="price" type="number" className="w-full p-2 border rounded" />
              <ErrorMessage name="price" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Tiffin Type</label>
              <Field as="select" name="tiffinType" className="w-full p-2 border rounded">
                <option value="">Select type</option>
                <option value="veg">Veg</option>
                <option value="non-veg">Non-Veg</option>
                <option value="both">Both</option>
              </Field>
              <ErrorMessage name="tiffinType" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 ${
                isSubmitting && "opacity-50 cursor-not-allowed"
              }`}
            >
              {editingTiffin ? "Update Tiffin" : "Add Tiffin"}
            </button>
            {editingTiffin && (
              <button
                type="button"
                onClick={() => setEditingTiffin(null)}
                className="ml-3 bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            )}
          </Form>
        )}
      </Formik>

      <h3 className="text-xl font-bold mt-10 mb-4">Your Tiffin Plans</h3>
      {tiffins.length === 0 ? (
        <p>No tiffins yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiffins.map((tiffin) => (
            <div
              key={tiffin._id}
              className="bg-white p-4 rounded-lg shadow border flex flex-col justify-between"
            >
              <div>
                <h4 className="text-lg font-semibold mb-1">{tiffin.name}</h4>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Type:</strong> {tiffin.tiffinType}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Items:</strong> {tiffin.items}
                </p>
                <p className="text-green-700 font-bold">₹{tiffin.price}</p>
              </div>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => setEditingTiffin(tiffin)}
                  className="flex-1 bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(tiffin._id)}
                  className="flex-1 bg-red-600 text-white py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
