import React from 'react'

const HeroSection = () => {
  return (
    <>
      <>
        {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex align-items-center">
          <div className="container ">
            <div className="row">
              <div
                className="col-lg-6 d-flex flex-column justify-content-center pt-5 pt-lg-0 order-2 order-lg-1"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <h1>Full-stack web and mobile app developer </h1>
                <h2 style={{ textAlign: "justify" }}>
                  As a full-stack web and mobile app developer,I bring a diverse skill
                  set to the table. With a primary focus on backend development, I
                  specialize in Node.js and I specialize in Node.js and have extensive
                  experience in crafting robust, and scalable web applications I am
                  well-versed in various frameworks and technologies, enabling me to
                  build reliable and efficient solutions.
                </h2>
                <div className="d-flex justify-content-center justify-content-lg-start ">
                  <a href="#about" className="btn-get-started scrollto">
                    Get Started
                  </a>
                </div>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="zoom-in"
                data-aos-delay={200}
              >
                <img
                  src="src/assets/img/hero-img.png"
                  className="img-fluid animated"
                  alt=""
                />
                {/* <img src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" class="img-fluid animated" alt=""> */}
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}
      </>

    </>
  )
}

export default HeroSection