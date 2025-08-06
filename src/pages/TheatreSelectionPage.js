import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const TheatreSelectionPage = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();

  const theatres = [
    { id: 1, name: "Sathyam Cinemas" },
    { id: 2, name: "PVR Cinemas" },
    { id: 3, name: "INOX" },
  ];

  const handleTheatreSelect = (theatreId) => {
    navigate(`/select-seats/${movieId}/${theatreId}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Select a Theatre</h2>
      {theatres.map((theatre) => (
        <div
          key={theatre.id}
          onClick={() => handleTheatreSelect(theatre.id)}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          {theatre.name}
        </div>
      ))}
    </div>
  );
};

export default TheatreSelectionPage;
