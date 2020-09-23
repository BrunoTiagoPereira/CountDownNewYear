import React, { useEffect, useState } from "react";

import "./styles.css";

export default function Banner() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const data = calcTimeLeft();
      setDays((d) => data.days);
      setHours((h) => data.hours);
      setMinutes((m) => data.minutes);
      setSeconds((s) => data.seconds);
      return () => clearInterval(interval);
    }, 1000);
  }, []);

  function calcTimeLeft() {
    const newYearsDate = new Date(new Date().getFullYear() + 1, 0, 0);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    return { days, hours, minutes, seconds };
  }

  return (
    <>
      <section className="countdown-container">
        <h1>Contdown For {new Date().getFullYear() + 1}</h1>

        <div className="countdown-timer-area">
          <div className="days-container timer-area">
            <p className="legend" id="days">
              {days}
            </p>
            <span>Days</span>
          </div>
          <div className="hours-container timer-area">
            <p className="legend" id="hours">
              {hours}
            </p>
            <span>Hours</span>
          </div>
          <div className="minutes-container timer-area">
            <p className="legend" id="minutes">
              {minutes}
            </p>
            <span>Minutes</span>
          </div>
          <div className="seconds-container timer-area">
            <p className="legend" id="seconds">
              {seconds}
            </p>
            <span>Seconds</span>
          </div>
        </div>
      </section>
    </>
  );
}
