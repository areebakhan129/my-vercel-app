'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      className="position-relative text-center py-5 d-flex align-items-center min-vh-100"
      id="home"
      style={{
        backgroundImage: 'url("/assets/images/bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 1 }}
      ></div>

      {/* Content */}
      <div className="container text-white position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="display-4 fw-bold mb-3">
                Areeba Khan <br />
                <span className="text-primary">QA Analyst & Software Engineer</span>
              </h1>

              <p className="lead mb-3">
                Manual Testing • Automation Testing • API Testing • Web & Mobile QA
              </p>

              <p className="fs-5">
                Detail-oriented QA Analyst with hands-on experience in 
                <strong className="text-primary"> Manual Testing, Regression Testing, UI Testing, and Exploratory Testing</strong>. 
                Skilled in bug tracking using <strong>Jira & Asana</strong>, 
                API testing with <strong>Postman</strong>, performance testing using <strong>JMeter</strong>, 
                and working within Agile environments. 
                Passionate about ensuring high-quality, user-centric web and mobile applications.
              </p>

              <div className="mt-4">
                <a href="#projects" className="btn btn-primary btn-lg mx-2 mb-2">
                  View Projects
                </a>

                <a
                  href="/AREEBA-KHAN-CV.pdf"
                  download
                  className="btn btn-success btn-lg mx-2 mb-2"
                >
                  Download CV
                </a>

                <a
                  href="#contact"
                  className="btn btn-outline-light btn-lg mx-2 mb-2"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;