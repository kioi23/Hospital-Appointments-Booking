import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { doctors, bookings, createBooking } = useAppContext();

  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();

    const alreadyBooked = bookings.some(
      (booking) =>
        booking.doctorId === Number(id) &&
        booking.date === date &&
        booking.time === time
    );

    if (alreadyBooked) {
      alert("Doctor session already booked");
      return;
    }

    const doctor = doctors.find((doctorItem) => doctorItem.id === Number(id));
    const bookingData = {
      patient: "",
      doctorId: Number(id),
      doctor: doctor?.name || `Doctor ${id}`,
      type,
      date,
      time,
      createdAt: new Date().toISOString(),
    };

    try {
      await createBooking(bookingData);
    } catch (error) {
      console.error(error);
      alert("Unable to create booking. Try again later.");
      return;
    }

    alert("Session successfully booked");
    setType("");
    setDate("");
    setTime("");
    navigate("/appointments");
  };

  return (
    <div className="min-h-screen bg-[#f5f7ff] flex items-center justify-center px-6 py-10">

      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md">

        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Book Appointment
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Schedule your consultation session
        </p>

        <div className="mb-6 bg-blue-50 text-blue-700 text-center py-3 rounded-xl font-semibold">
          Doctor: {doctor?.name || `Doctor ${id}`}
        </div>

        {/* Form */}
        <form onSubmit={handleBooking} className="space-y-4">

          {/* Session Type */}
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Session Type</option>
            <option value="Consultation">Consultation</option>
            <option value="Appointment">Appointment</option>
          </select>

          {/* Date */}
          <input
            type="date"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          {/* Time */}
          <input
            type="time"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;