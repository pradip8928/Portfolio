import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Projects = () => {
    return (
        <>
            {/* ======= Services Section ======= */}
            <section id="projects" className="services section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Projects</h2>
                        <p>
                            I have completed these projects both individually and in collaboration
                            with others, by utilizing different technology.
                        </p>
                    </div>
                    <div className="row">
                        <div
                            className="col-xl-3 col-md-6 d-flex align-items-stretch"
                            data-aos="zoom-in"
                            data-aos-delay={100}
                        >
                            <div className="icon-box">
                                <div className="icon">
                                    {/* <i className="bx bxl-dribbble" /> */}
                                    <img
                            width={48}
                            height={48}
                            // src="https://img.icons8.com/color/48/python--v1.png"
                            src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-hackathon-ux-and-ui-flaticons-flat-flat-icons.png"
                            alt="python--v1"
                        />

                                </div>
                                <h4>
                                    <Link to="https://vcet-hackathon.web.app/">Hackathon</Link>
                                </h4>
                                <p style={{ textAlign: "justify" }}>
                                    I built a dynamic and responsive Hackathon website using React for
                                    the frontend and Firebase as the database, showcasing my
                                    proficiency in modern web development technologies
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                            data-aos="zoom-in"
                            data-aos-delay={200}
                        >
                            <div className="icon-box">
                                <div className="icon">
                                    {/* <i className="bx bx-file" /> */}
                                    <img
                            width={48}
                            height={40}
                            // src="https://img.icons8.com/color/48/javascript--v1.png"
                            src="https://findmynotes.pythonanywhere.com/static/media/images/logo.png"
                            alt="javascript--v1"
                        />
                                </div>
                                <h4>
                                    <Link to="https://findmynotes.pythonanywhere.com/loginpage">
                                        Find My Notes
                                    </Link>
                                </h4>
                                <p style={{ textAlign: "justify" }}>
                                    Collaborated on <strong>'Find My Notes</strong> ', a
                                    Django-powered web app with MySQL database, enabling note sharing.
                                    Integrated Google Drive for efficient storage, enhancing user
                                    experience.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                            data-aos="zoom-in"
                            data-aos-delay={300}
                        >
                            <div className="icon-box">
                                <div className="icon">
                                    {/* <i className="bx bx-tachometer" /> */}
                                    <img
                            width={48}
                            height={48}
                            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-dashboard-mobile-app-development-flaticons-lineal-color-flat-icons-3.png"
                            alt="external-HTML-web-development-goofy-color-kerismaker"
                        />
                                </div>
                                <h4>
                                    <Link to="https://ypptechnologies.in/MHD/dashboard.php">
                                        Survey Dashboard
                                    </Link>
                                </h4>
                                <p style={{ textAlign: "justify" }}>
                                    Developed a survey data dashboard using PHP backend, MySQL
                                    database, and HTML/CSS frontend. Collected data from website forms
                                    to provide insightful visualizations and analytics.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                            data-aos="zoom-in"
                            data-aos-delay={400}
                        >
                            <div className="icon-box">
                                <div className="icon">
                                    {/* <i className="bx bx-layer" /> */}
                                    <img
                            width={120}
                            height={40}
                            src="https://www.giftanaindia.com/wp-content/uploads/elementor/thumbs/Giftana-R-Logo-1-q4dm3ekpymfwhy27cqetkd65dax2d0kt803xiewog2.png"
                            alt="react"
                        />
                                </div>
                                <h4>
                                    <a href="">Giftana</a>
                                </h4>
                                <p style={{ textAlign: "justify" }}>
                                    Led the collaborative development of <strong>'Gifatana'</strong> ,
                                    an E-commerce website using the MERN stack. Served as the backend
                                    developer, overseeing the project's implementation and ensuring
                                    seamless integration across the platform
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Services Section */}
        </>

    )
}

export default Projects