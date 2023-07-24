import React from 'react'

const About = () => {
  return (
    <div>
      <>
        {/* ======= About Us Section ======= */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About Us</h2>
            </div>
            <div className="row content">
              <div className="col-lg-6 ">
                <h2>I’m Pradip Pal. I live in India, where I design the future.</h2>
                <p className="text-justify" style={{ textAlign: "justify" }}>
                  I've worked on a variety of projects over the years and I'm proud of
                  the progress I've made. Many of these projects are open-source and
                  available for others to explore and contribute to. If you're
                  interested in any of the projects I've worked on, please feel free
                  to check out the code and suggest any improvements or enhancements
                  you might have in mind. Collaborating with others is a great way to
                  learn and grow, and I'm always open to new ideas and feedback.
                </p>
              </div>

              <div class="col-lg-1 pt-4 pt-lg-0">  
              </div>

              <div
                className="col-lg-5 pt-4 pt-lg-0"
                data-aos="zoom-in"
                data-aos-delay={200}
                >
              
                <img
                  src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=350&q=60"
                  className="img-fluid animated rounded-pill"
                  height={90}
                  alt=""
                />
              </div>

            </div>
          </div>
        </section>
        {/* End About Us Section */}
      </>

    </div>
  )
}

export default About

