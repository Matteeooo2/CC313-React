import React from "react";

export default function Hello({ person }) {
  const { name, message, emoji, seatNumbers } = person;

  return (
    <div>
      <h1>
        {message}, {name}
      </h1>
      <p>{emoji}</p>
      <p>Seat Numbers: {seatNumbers.join(", ")}</p>
    </div>
  );
}
