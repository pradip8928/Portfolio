import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* <nav>
        <ul>
          <li>
            <Link exact to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}


      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <Link to="#">Pradip</Link>
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link className="nav-link scrollto active" to="#hero">
                  Home
                </Link>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link   scrollto" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#footer">
                  Contact
                </a>
              </li>
              <li>
                <Link className="getstarted scrollto" href="#about">
                  Get Started
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* .navbar */}
        </div>
      </header>







      <Outlet />






      <>
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h3>Pradip</h3>
                  <p>
                    <br /> Bhayandar West ,Thane 401 101 <br /> India <br />
                    <br />
                    <strong>Phone:</strong> +91 89289 98530
                    <br />
                    <strong>Email:</strong> pradip.202134101@vcet.edu.in
                    <br />
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right" /> <Link to="#">Home</Link>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" /> <Link to="#">About us</Link>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" /> <Link to="#">Skills</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4> Services</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right" /> <Link to="#">Web Design</Link>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <Link to="#">Web Development</Link>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <Link to="#">Website Backend Development</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Social Networks</h4>
                  <p>
                    Feel free to reach out to me through the following social links:
                  </p>
                  <div className="social-icons mt-3">
                    {/* <Link to="#" class="twitter"><i class="bx bxl-twitter"></i></Link> */}
                    <Link to="https://github.com/pradip8928/" target='_blank'>
                      <img src="https://img.icons8.com/color-glass/40/github--v1.png" alt="github--v1" />
                    </Link>
                    <Link
                      to="https://www.instagram.com/christoffer021/" target='_blank'
                      
                    >
                      <img src="https://img.icons8.com/color/40/instagram-new--v1.png" alt="instagram-new--v1" />
                    </Link>
                    <Link
                      to="https://www.linkedin.com/in/pradip-pal-0a361a211/" target='_blank'
                      
                    >
                      <img src="https://img.icons8.com/fluency/40/linkedin.png" alt="linkedin" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container footer-bottom clearfix">
            <div className="copyright text-center">
              © Copyright{" "}
              <strong>
                <span>Pradip</span>
              </strong>
              .
            </div>
          </div>
        </footer>
        {/* End Footer */}


        <Link
          to="#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short" />
        </Link>

      </>

    </div>
  )
}


export default Layout
