import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingPage from "./BookingPage";

// Helper to wrap with Router
const renderWithRouter = (ui) => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};

test("Renders the Booking Form heading", () => {
  renderWithRouter(<BookingPage />);
  const heading = screen.getByText(/Reserve a Table/i);
  expect(heading).toBeInTheDocument();
});

test("Validates date input has required attribute", () => {
  renderWithRouter(<BookingPage />);
  const dateInput = screen.getByLabelText("Choose date");
  expect(dateInput).toBeRequired();
});
