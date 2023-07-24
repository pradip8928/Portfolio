import React from 'react'

const Skills = () => {
    return (
        <div>
            <section id="skills" className="skills">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Skills </h2>
                    </div>
                    <div className="row">
                        <div
                            className="col-lg-6 d-flex align-items-center"
                            data-aos="fade-right"
                            data-aos-delay={100}
                        >
                            {/* <img src="assets/img/skills.png" class="img-fluid" alt=""> */}
                            <img
                                src="https://images.unsplash.com/photo-1595617795501-9661aafda72a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFja2VuZCUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                                className="img-fluid"
                                alt=""
                            />
                        </div>


                        <div
                            className="col-lg-6 pt-4 pt-lg-0 content"
                            data-aos="fade-left"
                            data-aos-delay={100}
                        >
                            <h3>Technology </h3>
                            <p className="fst-italic">
                                During my internship and project development, I successfully utilized
                                the following technologies.
                            </p>
                            <div className="skills-content">
                                <div className="progress">
                                    <span className="skill">
                                        HTML <i className="val">100%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "100%" }}
                                            aria-valuenow={100}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">
                                        CSS <i className="val">100%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "90%" }}
                                            aria-valuenow={90}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">
                                        JavaScript <i className="val">75%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "75%" }}
                                            aria-valuenow={75}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">
                                        React <i className="val">75%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "75%" }}
                                            aria-valuenow={75}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">
                                        Node JS <i className="val">75%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "75%" }}
                                            aria-valuenow={75}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">
                                        Express JS <i className="val">75%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "75%" }}
                                            aria-valuenow={75}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">
                                        PHP <i className="val">75%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "75%" }}
                                            aria-valuenow={75}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">
                                        MongoDB <i className="val">75%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "75%" }}
                                            aria-valuenow={75}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">
                                        MySQL <i className="val">75%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "75%" }}
                                            aria-valuenow={75}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Skills