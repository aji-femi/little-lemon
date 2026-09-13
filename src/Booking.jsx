import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Booking() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17.00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const navigate = useNavigate();
  const availableTimes = ["17.00", "18.00", "19.00", "20.00", "21.00", "22.00"];

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmed");
  };
  return (
    <>
      <div>
        <h1 id="dine">Reserve a Table</h1>
        <p class="subtitle">Dine with Litte Lemon Restaurant</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlfor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="👥Enter full name"
        />
        <label htmlfor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="✉ Enter your  email here"
          required
        />

        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
        />
        <label for="res-time">Choose time</label>
        <select
          id="res-time "
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>

          {(availableTimes || []).map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of diners</label>

        <select
          id="guests"
          name="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        >
          <option value="">Select number of diners</option>
          <option value="1-2">1-2 diners</option>
          <option value="3-5">3-5 diners</option>
          <option value="6-10">6-10 diners</option>
        </select>

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday🎂</option>
          <option>Anniversary🥂</option>
        </select>

        <button class="confirm-btn">Confirm Reservation</button>
      </form>
      <div>
        <p class="footer-note">
          You will receive a confirmation email once your reservation is
          confirmed. ⓘ
        </p>
      </div>
    </>
  );
}

export default Booking;
