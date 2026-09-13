import Booking from "./Booking";
import { useNavigate } from "react-router-dom";

function BookingPage({ availableTimes, dispatch }) {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    console.log(formData);
    navigate("/confirmed");
  };

  return (
    <Booking
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
    />
  );
}
export default BookingPage;
