import { useParams, Link } from "react-router-dom";

function Booking() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-[#f5f7ff] flex items-center justify-center px-6">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-lg text-center">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Confirm Your Appointment
        </h1>

        {/* Info */}
        <p className="text-gray-600 mb-6">
          You are booking an appointment with
        </p>

        <div className="bg-blue-50 text-blue-700 font-bold text-lg py-3 px-4 rounded-xl mb-6">
          Doctor ID: {id}
        </div>

        {/* Actions */}
        <button
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
        >
          Confirm Booking
        </button>

        <Link
          to="/doctors"
          className="block mt-5 text-blue-600 hover:underline font-medium"
        >
          ← Back to Doctors
        </Link>
      </div>
    </div>
  );
}

export default Booking;