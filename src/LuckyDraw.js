import React, { useState, useEffect } from "react";

function LuckyDraw() {
  const [countdown, setCountdown] = useState(null); // Initialize countdown state
  const [names, setNames] = useState([]); // Initialize names state
  const [selectedName, setSelectedName] = useState(""); // Initialize selected name state
  const [status, setStatus] = useState("ready"); // Initialize status state

  // Calculate remaining time until New Year
  useEffect(() => {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const remaining = newYear - now;
    const countdown = {
      days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
      hours: Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((remaining % (1000 * 60)) / 1000),
    };
    setCountdown(countdown);
  }, []);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const input = event.target.name;
    if (input.value) {
      setNames([...names, input.value]); // Add name to list
      input.value = ""; // Clear input field
    }
  };

  // Handle draw button click
  const handleDraw = () => {
    if (names.length > 0) {
      setStatus("drawing"); // Set status to "drawing"
      // Delay selection of name and announcement of results
      setTimeout(() => {
        // Select a random name
        const index = Math.floor(Math.random() * names.length);
        const newNames = [...names];
        const selectedName = newNames[index];
        newNames.splice(index, 1);

        setSelectedName(selectedName);
        setNames(newNames); // Update names array with copy
        setStatus("announced"); // Set status to "announced"
      }, 10000); // Delay for 10 seconds
    }
  };

  // Handle reset button click
  const handleReset = () => {
    setStatus("ready"); // Set status to "ready"
    setSelectedName(""); // Reset selected name
  };

  return (
    <div>
      <h1>New Year's Countdown</h1>
      {countdown && (
        <>
          <p>
            {countdown.days} days, {countdown.hours} hours, {countdown.minutes}{" "}
            minutes, {countdown.seconds} seconds
          </p>
          <p>until New Year's Eve!</p>
        </>
      )}
      <h1>Lottery</h1>
      {status === "ready" && <button onClick={handleDraw}>Draw</button>}
      {status === "drawing" && <div class="spinner-border text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>}
      {status === "announced" && (
        <>
          <p>The winner is: <h1>{selectedName}</h1></p>
          <button onClick={handleReset}>Reset</button>
        </>
      )}
      <h2>Names</h2>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Add name:</label>
        <input type="text" id="name" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default LuckyDraw;
