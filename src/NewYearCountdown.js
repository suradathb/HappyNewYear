import React, { useState, useEffect } from 'react';

function NewYearCountdown() {
  const [seconds, setSeconds] = useState(0); // Initialize seconds state

  // Use effect to update seconds at regular intervals
  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the number of seconds until the end of the year
      const end = new Date(`December 31, ${new Date().getFullYear()} 23:59:59`);
      const remaining = Math.floor((end - new Date()) / 1000);
      setSeconds(remaining);
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  const formatter = new Intl.DateTimeFormat('th-TH' , {
    hour:'numeric',
    minute:'numeric',
    second:'numeric'
  });

  // Format seconds as a countdown string
//  const countdown = new Date(seconds * 1000).toISOString().substr(11, 8);
  const countdown = formatter.format(seconds * 1000);

  return <h1 className='masthead-heading text-uppercase mb-0'>{countdown}</h1>;
}

export default NewYearCountdown;
