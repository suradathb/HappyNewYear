import React, { useState, useEffect } from "react";
import "./NewYearReffle.css";
import NewYearUI from "./NewYearUI";

function NewYearRaffle() {
  const [countdown, setCountdown] = useState(10); // Initialize countdown at 10 seconds
  const [raffleList, setRaffleList] = useState([]); // Initialize raffle list
  const [winner, setWinner] = useState(""); // Initialize winner state
  const [picture, setPicture] = useState(null); // Initialize picture state

  // const [countdown, setCountdown] = useState(null); // Initialize countdown state
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

  // // Function to handle form submission
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const name = event.target.name.value; // Get name from form input
  //   const file = event.target.picture.files[0]; // Get picture file from form input
  //   setRaffleList([...raffleList, { name, picture: file }]); // Add name and picture to raffle list
  //   event.target.name.value = ""; // Clear form input
  // };

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
            ????????????????????????????????????????????????
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
                  name="name"
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
            <div class="container text-center">
              <div class="row align-items-start">
                {names.map((name) => (
                  <h1 className="block-1" kay={name}>
                    <h1 className="badge bg-secondary ">{name}</h1>
                  </h1>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          {/* <!-- About Section Heading--> */}
          <h2 className="page-section-heading text-center text-uppercase text-white">
            ?????????????????????
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
            {status === "ready" && (
              <button className="btn btn-primary btn-xl" onClick={handleDraw}>
                ?????????????????????
              </button>
            )}
            {status === "drawing" && (
              // <div class="spinner-border text-success" role="status">
              <div>
                {/* <span class="visually-hidden">Loading...</span> */}
                <img
                  className="winimage"
                  src="https://media.giphy.com/media/ferYVfmvi2IN5indq1/giphy.gif"
                  alt="..."
                />
              </div>
            )}
            {status === "announced" && (
              <>
                <p>
                  ?????????????????????????????????????????????????????? : <h1>{selectedName}</h1>
                </p>
                <button
                  className="btn btn-primary btn-xl"
                  onClick={handleReset}
                >
                  ???????????????????????????????????????
                </button>
              </>
            )}
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
