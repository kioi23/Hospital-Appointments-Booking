import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signing() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const matchingUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (!matchingUser) {
      alert("Invalid email or password");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(matchingUser));
    alert("Login Successful");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#f5f7ff] flex items-center justify-center px-6">

      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Hospital Login
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Sign in to access your dashboard
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">

          {/* Email */}
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signing;