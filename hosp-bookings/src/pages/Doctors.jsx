import { Link } from "react-router-dom";

function Doctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
    },
    {
      id: 2,
      name: "Dr. Michael Lee",
      specialty: "Dermatologist",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
    },
    {
      id: 3,
      name: "Dr. Emily Brown",
      specialty: "Neurologist",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7ff] px-6 py-12">

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-blue-600 font-semibold uppercase">
          Our Specialists
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
          Meet Our Expert Doctors
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Book appointments and consultation sessions with our
          experienced medical professionals.
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >

            {/* Doctor Image */}
            <div className="overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-72 w-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Doctor Info */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {doctor.name}
              </h2>

              <p className="text-blue-600 font-medium mt-2 mb-5">
                {doctor.specialty}
              </p>

              {/* Buttons */}
              <div className="flex gap-3">
                <Link
                  to={`/booking/${doctor.id}`}
                  className="flex-1 text-center bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-300 font-semibold"
                >
                  Book Appointment
                </Link>

                <button className="px-4 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition duration-300">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Doctors;