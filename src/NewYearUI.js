import React, { useState, useEffect } from "react";

function NewYearUI() {
  const [countdown, setCountdown] = useState(10); // Initialize countdown at 10 seconds
  const [fireworks, setFireworks] = useState(false); // Initialize fireworks state

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000); // Update countdown every second

    if (countdown === 0) {
      setCountdown(10);
      setFireworks(true); // Display fireworks when countdown reaches zero
    }

    return () => clearInterval(interval); // Clear interval when component unmounts
  }, [countdown]);

  return (
    <div>
      <h1>Happy New Year!</h1>
      <h1>Countdown to New Year: {countdown} seconds</h1>
      {fireworks && <img src="../image/fireworks-lowres.jpg" alt="Fireworks" />}
    </div>
  );
}

export default NewYearUI;
