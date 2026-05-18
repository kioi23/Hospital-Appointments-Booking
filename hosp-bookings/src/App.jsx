import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import AppointmentForm from "./pages/AppointmentForm";
import BookingList from "./pages/BookingList";
import BookingPage from "./components/bookingpage";
import Register from "./components/Register";
import Signing from "./components/signin";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#f5f7ff]">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointment" element={<AppointmentForm />} />
            <Route path="/appointment/edit/:id" element={<AppointmentForm />} />
            <Route path="/appointments" element={<BookingList />} />
            <Route path="/booking/:id" element={<BookingPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Signing />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
