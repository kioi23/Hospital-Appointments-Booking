import { useEffect, useId, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function AppointmentForm() {
  const [appointment, setAppointment] = useState({
    patient: "",
    doctor: "",
    date: "",
    time: "",
    type: "Appointment",
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const { bookings, createBooking, updateBooking, doctors } = useAppContext();
  const patientRef = useRef(null);
  const patientId = useId();
  const doctorId = useId();
  const dateId = useId();
  const timeId = useId();
  const typeId = useId();

  useEffect(() => {
    patientRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!id || bookings.length === 0) return;

    const existingBooking = bookings.find((slot) => slot.id === Number(id));

    if (!existingBooking) {
      alert("Booking not found");
      navigate("/appointments");
      return;
    }

    setAppointment({
      patient: existingBooking.patient || "",
      doctor: existingBooking.doctor || "",
      date: existingBooking.date || "",
      time: existingBooking.time || "",
      type: existingBooking.type || "Appointment",
    });
  }, [id, bookings, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    const alreadyBooked = bookings.some(
      (slot) =>
        slot.id !== Number(id) &&
        slot.doctor === appointment.doctor &&
        slot.date === appointment.date &&
        slot.time === appointment.time
    );

    if (alreadyBooked) {
      alert("This doctor session is already booked for the selected time.");
      return;
    }

    if (id) {
      await updateBooking(Number(id), {
        ...appointment,
        updatedAt: new Date().toISOString(),
      });
      alert("Booking updated successfully");
      navigate("/appointments");
      return;
    }

    await createBooking({
      ...appointment,
      createdAt: new Date().toISOString(),
    });

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
          {id ? "Edit Booking" : "Book Appointment"}
        </h2>

        <p className="text-center text-gray-500 mb-6">
          {id
            ? "Update your existing appointment details."
            : "Schedule your consultation with a doctor."}
        </p>

        {/* Form */}
        <form onSubmit={handleBooking} className="space-y-4">

          {/* Patient Name */}
          <input
            id={patientId}
            type="text"
            name="patient"
            placeholder="Patient Name"
            value={appointment.patient}
            ref={patientRef}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Doctor Select */}
          <select
            id={doctorId}
            name="doctor"
            value={appointment.doctor}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Doctor</option>
            {(doctors || []).map((doctor) => (
              <option key={doctor.id} value={doctor.name}>
                {doctor.name}
              </option>
            ))}
          </select>

          {/* Date */}
          <input
            id={dateId}
            type="date"
            name="date"
            value={appointment.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Time */}
          <input
            id={timeId}
            type="time"
            name="time"
            value={appointment.time}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Type */}
          <select
            id={typeId}
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
            {id ? "Update Booking" : "Book Now"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentForm;