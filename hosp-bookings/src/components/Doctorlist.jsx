import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DoctorsList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("/api/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f7ff] px-6 py-12">

      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-blue-600 font-semibold uppercase">
          Our Doctors
        </p>

        <h2 className="text-4xl font-bold text-gray-900 mt-3">
          Available Specialists
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Book consultation sessions with verified medical professionals
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >

            {/* Card Header */}
            <div className="bg-blue-50 p-6 text-center">
              <div className="w-20 h-20 mx-auto bg-blue-600 text-white flex items-center justify-center rounded-full text-xl font-bold">
                {doctor.name?.charAt(0)}
              </div>

              <h3 className="text-xl font-bold mt-4 text-gray-900">
                {doctor.name}
              </h3>

              <p className="text-blue-600 font-medium">
                {doctor.specialization}
              </p>
            </div>

            {/* Card Body */}
            <div className="p-6 text-center">

              <p className="text-gray-500 mb-6">
                Experienced specialist available for consultation and appointment booking.
              </p>

              <Link
                to={`/booking/${doctor.id}`}
                className="inline-block w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
              >
                Book Session
              </Link>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default DoctorsList;