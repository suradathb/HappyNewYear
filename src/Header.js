import React from "react";
import NewYearCountdown from "./NewYearCountdown";
import "./NewYearReffle.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand" href="#page-top">
              Swat Farm
            </a>
            <button
              className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    href="#portfolio"
                  >
                    ลงชื่อจับฉลาก
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    href="#about"
                  >
                    จับฉลาก
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    href="#contact"
                  >
                    ติดต่อเรา
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <!-- Masthead--> */}
        <header className="masthead bg-primary text-white text-center">
          <div className="container d-flex align-items-center flex-column">
            <NewYearCountdown />
            {/* <!-- Masthead Avatar Image--> */}
            <img
              className="masthead-avatar mb-6"
              src="../assets/img/portfolio/2023.png"
              alt="..."
            />
            {/* <!-- Masthead Heading--> */}
            <h1 className="masthead-heading text-uppercase mb-0">Swat Farm</h1>
            {/* <!-- Icon Divider--> */}
            <div className="divider-custom divider-light">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <img
                  className="masthead-avatar mb-6 newyearhead"
                  src="../assets/img/portfolio/happy-new-year.png"
                  alt="..."
                />
              </div>
              <div className="divider-custom-line"></div>
            </div>
            {/* <!-- Masthead Subheading--> */}
            <p className="masthead-subheading font-weight-light mb-0">
              Happy New Year at Swat Farm
            </p>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
