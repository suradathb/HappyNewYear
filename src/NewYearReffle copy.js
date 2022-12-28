import React, { useState, useEffect } from "react";
import "./NewYearReffle.css";
import NewYearUI from "./NewYearUI";


function NewYearRaffle() {
  const [countdown, setCountdown] = useState(10); // Initialize countdown at 10 seconds
  const [raffleList, setRaffleList] = useState([]); // Initialize raffle list
  const [winner, setWinner] = useState(""); // Initialize winner state
  const [picture, setPicture] = useState(null); // Initialize picture state

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value; // Get name from form input
    const file = event.target.picture.files[0]; // Get picture file from form input
    setRaffleList([...raffleList, { name, picture: file }]); // Add name and picture to raffle list
    event.target.name.value = ""; // Clear form input
  };

  // Function to handle button click
  const handleClick = () => {
    if (raffleList.length > 0) {
      // Select a random name and picture from the raffle list
      const index = Math.floor(Math.random() * raffleList.length);
      const { name, picture } = raffleList[index];
      setWinner(name); // Set winner
      setPicture(picture); // Set picture
      setRaffleList(raffleList.filter((_, i) => i !== index)); // Remove winner and picture from raffle list
    }
  };
  // Use effect to schedule button press at a specific time
  useEffect(() => {
    const scheduledTime = new Date("2022-12-31T00:00:00"); // Set scheduled time for button press
    const timer = setTimeout(() => {
      handleClick();
    }, scheduledTime.getTime() - Date.now()); // Calculate time difference between scheduled time and current time

    return () => clearTimeout(timer); // Clean up timer when component unmounts
  }, []);
  return (
    <>
      {/* <!-- Portfolio Section--> */}
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          {/* <!-- Portfolio Section Heading--> */}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            ลงชื่อจับฉลากกัน
          </h2>
          {/* <!-- Icon Divider--> */}
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <img
                className="masthead-avatar mb-6 newyear"
                src="../assets/img/portfolio/2023.png"
                alt="..."
              />
            </div>
            <div className="divider-custom-line"></div>
          </div>
          {/* <!-- Portfolio Grid Items--> */}
          <div className="row justify-content-center">
            <form
              id="contactForm"
              data-sb-form-api-token="API_TOKEN"
              onSubmit={handleSubmit}
            >
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  data-sb-validations="required"
                />
                <label htmlFor="name">Full name</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="name:required"
                >
                  A name is required.
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="file"
                  className="form-control"
                  name="picture"
                  accept="image/*"
                />
                <div
                  className="invalid-feedback"
                  data-sb-feedback="name:required"
                >
                  A name is required.
                </div>
              </div>
              <div className="form-floating mb-3">
                <button className="btn btn-primary btn-xl " type="submit">
                  Add to raffle
                </button>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="name:required"
                >
                  A name is required.
                </div>
              </div>
            </form>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ชื่อ</th>
                  <th scope="col">รูป</th>
                </tr>
              </thead>
              <tbody>
                {raffleList.map(({ name, picture }) => (
                  <tr kay={name}>
                    <td>{name}</td>
                    <td>
                      <img
                        src={URL.createObjectURL(picture)}
                        alt={name}
                        className="picture showimage"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          {/* <!-- About Section Heading--> */}
          <h2 className="page-section-heading text-center text-uppercase text-white">
            จับฉลาก
          </h2>
          {/* <!-- Icon Divider--> */}
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <img
                className="masthead-avatar mb-6 newyear"
                src="../assets/img/portfolio/happy-new-year.png"
                alt="..."
              />
            </div>
            <div className="divider-custom-line"></div>
          </div>
          {/* <!-- About Section Content--> */}
          <div className="row">
            <div className="col-lg-4 ms-auto">
              {picture && (
                <img
                  className="winimage"
                  src={URL.createObjectURL(picture)}
                  alt="Picture"
                />
              )}
            </div>
            <div className="col-lg-4 me-auto">
              <h1 className="masthead-heading text-uppercase mb-0">{winner}</h1>
            </div>
          </div>
          {/* <!-- About Section Button--> */}
          <div className="text-center mt-4">
            <button
              className="btn btn-primary btn-xl"
              onClick={handleClick}
              disabled={raffleList.length === 0}
            >
              Draw winner
            </button>
          </div>
        </div>
      </section>
      <section className="page-section" id="contact">
        <div className="container">
          <NewYearUI />
        </div>
      </section>
    </>
  );
}

export default NewYearRaffle;
