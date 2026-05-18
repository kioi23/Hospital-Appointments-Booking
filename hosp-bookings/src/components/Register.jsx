import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    if (storedUsers.some((user) => user.email === formData.email)) {
      alert("An account with this email already exists");
      return;
    }

    storedUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    alert("Registration Successful");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#f5f7ff] flex items-center justify-center px-6">

      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Register to book appointments and consultations
        </p>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;