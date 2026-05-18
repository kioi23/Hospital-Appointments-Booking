import { useState } from "react";

function AppointmentForm() {
  const [appointment, setAppointment] = useState({
    patient: "",
    doctor: "",
    date: "",
    time: "",
    type: "Appointment",
  });

  const bookedSlots = [
    {
      doctor: "Dr John",
      date: "2026-05-20",
      time: "10:00",
    },
  ];

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    const storedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");

    const unavailable = bookedSlots.some(
      (slot) =>
        slot.doctor === appointment.doctor &&
        slot.date === appointment.date &&
        slot.time === appointment.time
    );

    const alreadyBooked = storedBookings.some(
      (slot) =>
        slot.doctor === appointment.doctor &&
        slot.date === appointment.date &&
        slot.time === appointment.time
    );

    if (unavailable || alreadyBooked) {
      alert("Doctor session already booked");
      return;
    }

    const newBooking = {
      id: Date.now(),
      ...appointment,
      createdAt: new Date().toISOString(),
    };

    const updatedBookings = [...storedBookings, newBooking];
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    alert("Appointment booked successfully");

    setAppointment({
      patient: "",
      doctor: "",
      date: "",
      time: "",
      type: "Appointment",
    });
  };

  return (
    <div className="min-h-screen bg-[#f5f7ff] flex items-center justify-center px-6 py-10">

      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-lg">

        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Book Appointment
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Schedule your consultation with a doctor
        </p>

        {/* Form */}
        <form onSubmit={handleBooking} className="space-y-4">

          {/* Patient Name */}
          <input
            type="text"
            name="patient"
            placeholder="Patient Name"
            value={appointment.patient}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Doctor Select */}
          <select
            name="doctor"
            value={appointment.doctor}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Doctor</option>
            <option value="Dr John">Dr John</option>
            <option value="Dr Sarah">Dr Sarah</option>
          </select>

          {/* Date */}
          <input
            type="date"
            name="date"
            value={appointment.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Time */}
          <input
            type="time"
            name="time"
            value={appointment.time}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Type */}
          <select
            name="type"
            value={appointment.type}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Appointment">Appointment</option>
            <option value="Consultation">Consultation</option>
          </select>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentForm;