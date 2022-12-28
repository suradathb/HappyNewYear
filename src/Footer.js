import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    return (
      <>
        {/* <!-- Footer--> */}
        <footer className="footer text-center">
          <div className="container">
            <div className="row">
              {/* <!-- Footer Location--> */}
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Location</h4>
                <p className="lead mb-0">
                  503/1 หมู่ 11 บ้านป่าหวาย ต.โนนสูง
                  <br />
                  อ.เมือง อุดรธานี 41330
                </p>
              </div>
              {/* <!-- Footer Social Icons--> */}
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Around the Web</h4>
                <a
                  className="btn btn-outline-light btn-social mx-1"
                  href="https://www.facebook.com/profile.php?id=100055801103380"
                >
                  <i className="fab fa-fw fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social mx-1" href="#!">
                  <i className="fa-brands fa-line"></i>
                </a>
                <a className="btn btn-outline-light btn-social mx-1" href="#!">
                  <i className="fab fa-fw fa-linkedin-in"></i>
                </a>
                <a className="btn btn-outline-light btn-social mx-1" href="#!">
                  <i className="fab fa-fw fa-dribbble"></i>
                </a>
              </div>
              {/* <!-- Footer About Text--> */}
              <div className="col-lg-4">
                <h4 className="text-uppercase mb-4">About Swat Farm</h4>
                <p className="lead mb-0">
                  ติดต่อขอ ข้อมูล Swat Farm  ได้หรือจะขอดูวัวที่คุณสนใจได้จากที่นี้ หรือช่องทางติดต่อทั่วไป
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- Copyright Section--> */}
        <div className="copyright py-4 text-center text-white">
          <div className="container">
            <small>Copyright &copy; Your Website 2022</small>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
