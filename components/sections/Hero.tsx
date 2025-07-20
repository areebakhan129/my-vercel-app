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
      {/* 🔲 Dark Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 1 }}
      ></div>

      {/* 🔳 Text Content */}
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
                <span className="text-primary">Software Engineer</span> <br />
                <span className="text-primary">Web Developer</span>
              </h1>

              <p className="lead mb-4">
                Building Seamless Web Experiences with React & Beyond
              </p>

              <p className="fs-5">
                I'm Areeba Khan, a passionate Software Engineer and Web Developer with a strong
                foundation in{' '}
                <strong className="text-primary">
                  HTML, CSS, JavaScript, and React
                </strong>
                . My focus is on crafting user-friendly and responsive web applications. I thrive on
                bringing innovative ideas to life through code and continuously enhancing my skills.
                When I'm not coding, I enjoy exploring new technologies and staying active.
              </p>

              <div className="mt-4">
                <a href="#projects" className="btn btn-primary btn-lg mx-2 mb-2">
                  View Projects
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
