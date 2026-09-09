import { useState } from "react";
function Booking({ availableTimes = [], dispatch, formSubmit }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (e) => {
    e.preventDefault();
    formSubmit({ date, time, guests, occasion });
    alert("Reservation Successful!");
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: "UPDATE_TIMES", date: e.target.value });
  };
  return (
    <>
      <div>
        <h1 id="dine">Reserve a Table</h1>
        <p class="subtitle">Dine with Litte Lemon Restaurant</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlfor="full-name">Full Name</label>
        <input type="text" id="full-name" name="full_name" />
        <label htmlfor="email">Email Address</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
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
          <option>Birthday</option>
          <option>Anniversary</option>
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
