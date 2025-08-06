import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SeatSelectionPage.css';

function SeatSelectionPage() {
  const { movieId, theatreId } = useParams();
  const navigate = useNavigate();

  const allSeats = Array.from({ length: 15 }, (_, i) => i + 1);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  const bookingKey = `${movieId}_${theatreId}`;

  useEffect(() => {
    const storedSeats = JSON.parse(localStorage.getItem(bookingKey)) || [];
    setBookedSeats(storedSeats);
  }, [bookingKey]);

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) {
      alert('This seat is already booked!');
      return;
    }
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const confirmBooking = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat.');
      return;
    }
    const updatedSeats = [...bookedSeats, ...selectedSeats];
    localStorage.setItem(bookingKey, JSON.stringify(updatedSeats));
    alert(
      `Booking confirmed!\nMovie ID: ${movieId}\nTheatre ID: ${theatreId}\nSeats: ${selectedSeats.join(', ')}`
    );
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Select Your Seats</h2>
      <div className="seats">
        {allSeats.map((seat) => (
          <button
            key={seat}
            onClick={() => toggleSeat(seat)}
            className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''} ${bookedSeats.includes(seat) ? 'booked' : ''}`}
            disabled={bookedSeats.includes(seat)}
          >
            {seat}
          </button>
        ))}
      </div>
      <button className="confirm-btn" onClick={confirmBooking}>
        Confirm Booking
      </button>
    </div>
  );
}

export default SeatSelectionPage;
