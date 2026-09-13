import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Booking from "./Booking";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

export function initializeTimes() {
  return ["17.00", "18.00", "19.00", "20.00", "21.00", "22.00"];
}
export function updateTimes() {
  return initializeTimes();
}
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
