import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Booking from "./Booking";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
