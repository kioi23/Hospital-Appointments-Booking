import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(storedBookings);
  }, []);

  const handleDelete = (bookingId) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this booking?");
    if (!shouldDelete) return;

    const updatedBookings = bookings.filter((booking) => booking.id !== bookingId);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setBookings(updatedBookings);
  };

  return (
    <div className="min-h-screen bg-[#f5f7ff] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <p className="text-blue-600 font-semibold uppercase">Booking Management</p>
            <h1 className="text-4xl font-bold text-gray-900 mt-3">Your Saved Bookings</h1>
            <p className="text-gray-600 mt-3 max-w-2xl">
              Manage your appointments and doctor consultations here. Edit or remove any booking as needed.
            </p>
          </div>

          <Link
            to="/appointment"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Create New Booking
          </Link>
        </div>

        {bookings.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">No bookings yet</h2>
            <p className="text-gray-600 mb-6">Create an appointment to see it listed here.</p>
            <Link
              to="/appointment"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Book Appointment
            </Link>
          </div>
        ) : (
          <div className="grid gap-6">
            {bookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-3xl shadow-lg p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <div className="text-sm text-gray-500">Booking ID: {booking.id}</div>
                    <h2 className="text-2xl font-bold text-gray-900 mt-2">
                      {booking.patient ? booking.patient : `Doctor ${booking.doctorId || "N/A"}`}
                    </h2>
                    <p className="text-base text-gray-600 mt-2">
                      Doctor: {booking.doctor || booking.doctorId || "Unknown"}
                    </p>
                    <p className="text-base text-gray-600 mt-1">Type: {booking.type}</p>
                    <p className="text-base text-gray-600 mt-1">Date: {booking.date}</p>
                    <p className="text-base text-gray-600 mt-1">Time: {booking.time}</p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      to={`/appointment/edit/${booking.id}`}
                      className="inline-flex items-center justify-center bg-amber-500 text-white px-5 py-3 rounded-xl hover:bg-amber-600 transition duration-300 shadow-sm"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(booking.id)}
                      className="inline-flex items-center justify-center bg-red-600 text-white px-5 py-3 rounded-xl hover:bg-red-700 transition duration-300 shadow-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingList;
