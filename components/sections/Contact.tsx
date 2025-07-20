'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-5" style={{ background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)' }} id="contact">
      <div className="container" ref={ref}>
        <motion.h2
          className="text-center mb-5 display-5 fw-bold text-light"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <motion.div
          className="row justify-content-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="col-lg-8">
            <form className="p-4 p-md-5 bg-dark text-light rounded shadow-lg">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control form-control-lg" id="name" name="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control form-control-lg" id="email" name="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control form-control-lg" id="message" name="message" rows={5} required></textarea>
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
              </div>
            </form>

            <div className="text-center mt-5">
              <p className="lead text-light">Or find me on:</p>
              <ul className="list-inline">
                <li className="list-inline-item mx-2">
                  <a href="https://linkedin.com/in/areebakhan" target="_blank" rel="noopener noreferrer" className="text-light fs-3">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="https://github.com/areebakhan129" target="_blank" rel="noopener noreferrer" className="text-light fs-3">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
              <p className="text-light mt-3">
                Email: <a href="mailto:areebakhan1806@gmail.com" className="text-decoration-underline text-light">areebakhan1806@gmail.com</a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
