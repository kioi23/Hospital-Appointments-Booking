import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-[#f5f7ff]">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-sm">
        <h1 className="text-3xl font-bold text-blue-700">
          HealthCare
        </h1>

        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600 transition">
            Home
          </a>

          <a href="#" className="hover:text-blue-600 transition">
            About
          </a>

          <a href="#" className="hover:text-blue-600 transition">
            Services
          </a>

          <a href="#" className="hover:text-blue-600 transition">
            Contact
          </a>
        </div>

        <Link
          to="/register"
          className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-8 md:px-16 py-16">

        {/* Left Side */}
        <div>
          <p className="uppercase text-blue-600 font-semibold mb-4">
            Hospital & Consultation Center
          </p>

          <h1 className="text-5xl font-bold leading-tight text-gray-900 mb-6">
            Book Appointments &
            Consultation Sessions Easily
          </h1>

          <p className="text-gray-600 text-lg mb-8 max-w-lg">
            Connect with professional doctors, schedule appointments,
            and access healthcare services from anywhere at any time.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/appointment"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg"
            >
              Book Appointment
            </Link>

            <Link
              to="/doctors"
              className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition duration-300"
            >
              View Doctors
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-700">
                100+
              </h2>
              <p className="text-gray-600">
                Doctors
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-700">
                24/7
              </h2>
              <p className="text-gray-600">
                Support
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-700">
                5K+
              </h2>
              <p className="text-gray-600">
                Patients
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
            alt="Doctor"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />

          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 bg-white p-5 rounded-2xl shadow-xl w-64">
            <h3 className="font-bold text-lg mb-2">
              Opening Hours
            </h3>

            <div className="flex justify-between text-gray-600">
              <span>Monday - Friday</span>
              <span className="text-blue-600 font-semibold">
                8AM - 5PM
              </span>
            </div>

            <div className="flex justify-between text-gray-600 mt-2">
              <span>Saturday</span>
              <span className="text-blue-600 font-semibold">
                9AM - 2PM
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-8 md:px-16 py-16">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase">
            Services
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Our Medical Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
              alt=""
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">
                Primary Care
              </h3>

              <p className="text-gray-600">
                Comprehensive healthcare services and regular checkups.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1580281657527-47f249e8f4df"
              alt=""
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">
                Consultation
              </h3>

              <p className="text-gray-600">
                Professional consultation sessions with specialists.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907"
              alt=""
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">
                Virtual Care
              </h3>

              <p className="text-gray-600">
                Online appointments and remote healthcare support.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;