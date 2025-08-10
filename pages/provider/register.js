import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      serviceArea: "",
      tiffinType: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
        .required("Phone is required"),
      serviceArea: Yup.string().required("Service area is required"),
      tiffinType: Yup.string().required("Tiffin type is required"),
      password: Yup.string().min(6, "Min 6 characters").required("Password is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await axios.post("http://localhost:5000/api/auth/register", values);
        alert("✅ Registered successfully");
        resetForm();
        router.push("/provider/login");
      } catch (err) {
        alert("❌ Registration failed");
        console.error(err);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-700">Provider Registration</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              {...formik.getFieldProps("name")}
              className="w-full border rounded p-2"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-600 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              {...formik.getFieldProps("email")}
              className="w-full border rounded p-2"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-600 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block font-medium mb-1">Phone</label>
            <input
              type="text"
              {...formik.getFieldProps("phone")}
              className="w-full border rounded p-2"
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-600 text-sm mt-1">{formik.errors.phone}</p>
            )}
          </div>

          {/* Service Area */}
          <div>
            <label className="block font-medium mb-1">Service Area</label>
            <input
              type="text"
              {...formik.getFieldProps("serviceArea")}
              className="w-full border rounded p-2"
            />
            {formik.touched.serviceArea && formik.errors.serviceArea && (
              <p className="text-red-600 text-sm mt-1">{formik.errors.serviceArea}</p>
            )}
          </div>

          {/* Tiffin Type */}
          <div>
            <label className="block font-medium mb-1">Tiffin Type</label>
            <select
              {...formik.getFieldProps("tiffinType")}
              className="w-full border rounded p-2"
            >
              <option value="">Select</option>
              <option value="veg">Veg</option>
              <option value="non-veg">Non-Veg</option>
              <option value="both">Both</option>
            </select>
            {formik.touched.tiffinType && formik.errors.tiffinType && (
              <p className="text-red-600 text-sm mt-1">{formik.errors.tiffinType}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              {...formik.getFieldProps("password")}
              className="w-full border rounded p-2"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-600 text-sm mt-1">{formik.errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white w-full py-2 rounded mt-4"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
