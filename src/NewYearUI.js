import React, { useState, useEffect } from "react";
import NewYearCountdown from "./NewYearCountdown";
import "./NewYearUI.css";

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
      <h1>SWAT Happy New Year Count Down 2023</h1>
      <h1>งานปาตี้ปีใหม่เริ่ม 18:00 น. - เช้าจ้า </h1>
      <h3>ร่วมจับฉลากราคาไม่เกิน 300 บาท  เริ่มจับ 20:00 น. เป็นต้นไป</h3>
      <h3>เครื่องดื่มฟรีเพราะเราออกกันเอง ที่นอนฟรีนะมีเต็นท์นอนก็นอนเต็นท์ มีพื้นนอนพื่นจ้า </h3>
      <br></br>
      <h5 className="note">Note : เข้างานแล้วห้ามออกไปไหนนะเพราะอันตรายเราจะเมากัน</h5>
      <br></br>
      <img className="show responsive" src="https://media.giphy.com/media/XxePWdpdifKZr1Uhix/giphy.gif" alt="Fireworks" />
    </div>
  );
}

export default NewYearUI;
