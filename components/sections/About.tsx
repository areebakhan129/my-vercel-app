// components/sections/About.tsx
'use client'; // Needs to be a client component

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation plays only once when it enters the viewport
    threshold: 0.2,    // Trigger when 20% of the component is visible
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-5" id="about">
      <div className="container" ref={ref}> {/* Attach ref to the container */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-center mb-4 display-5 fw-bold text-primary">About Me</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <p className="lead mb-4">
                With a Bachelor's in Software Engineering and a CGPA of 3.74, I am a dedicated professional eager to contribute to impactful projects. My journey in web development began with a keen interest in UI/UX design, leading me to specialize in creating engaging and functional web interfaces.
              </p>
              <p className="mb-4">
                I am proficient in modern front-end technologies and have experience with back-end integration using Node.js and MySQL. My passion lies in bringing innovative ideas to life through clean, efficient, and user-centric code.
              </p>
              <p className="text-muted">
                Outside of coding, I enjoy expanding my knowledge in Mobile App Development and keeping up with the latest trends in UI/UX Design. I am also fluent in English and Urdu.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;