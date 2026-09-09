function Booking() {
  return (
    <>
      <h1 id="dine">Reserve a Table</h1>
      <p class="subtitle">Dine with Litte Lemon Restaurant</p>

      <form>
        <label htmlfor="full-name">Full Name</label>
        <input type="text" id="full-name" name="full_name" required />
        <label htmlfor="email">Email Address</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" required />

        <label htmlFor="res-time">Choose time</label>
        <input type="time" id="res-time" required />

        <label htmlFor="guests">Number of diners</label>
        <select id="guests" name="guests" required>
          <option value="">Select number of diners</option>
          <option value="1-2">1-2 diners</option>
          <option value="3-5">3-5 diners</option>
          <option value="6-10">6-10 diners</option>
        </select>

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
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
