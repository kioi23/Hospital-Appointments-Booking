import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          HealthCare+
        </h1>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link to="/doctors" className="hover:text-blue-600 transition">
            Doctors
          </Link>

          <Link to="/appointment" className="hover:text-blue-600 transition">
            Appointments
          </Link>

          <Link to="/login" className="hover:text-blue-600 transition">
            Login
          </Link>
        </div>

        {/* Right Button */}
        <div>
          <Link
            to="/register"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Get Started
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;