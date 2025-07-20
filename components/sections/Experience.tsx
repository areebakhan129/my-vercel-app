// components/sections/Experience.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-5 bg-alt-light" id="experience"> {/* Changed to bg-alt-light */}
      <div className="container" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="text-center mb-5 display-5 fw-bold text-dark">Professional Experience</h2> {/* Changed to text-dark */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <motion.div className="card shadow-sm mb-4" variants={itemVariants}>
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark">Web Developer</h5> {/* Changed to text-dark */}
                  <h6 className="card-subtitle mb-2 text-muted">Teleup (Jan 2023 – Jul 2023)</h6>
                  <ul className="card-text text-dark"> {/* Added text-dark */}
                    <li>Contributed to front-end development tasks including layout structuring, responsiveness, and component building using <strong className="text-primary">HTML, CSS, JavaScript, and React</strong>.</li>
                    <li>Collaborated with cross-functional teams to implement UI enhancements that improved user engagement on company web platforms.</li>
                  </ul>
                </div>
              </motion.div>
              <motion.div className="card shadow-sm" variants={itemVariants}>
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark">Web Developer – Trainee</h5> {/* Changed to text-dark */}
                  <h6 className="card-subtitle mb-2 text-muted">XistIT (Aug 2022 – Sep 2022)</h6>
                  <ul className="card-text text-dark"> {/* Added text-dark */}
                    <li>Successfully completed a <strong className="text-primary">WordPress Development</strong> training program focused on building responsive and user-friendly websites.</li>
                    <li>Gained hands-on experience in plugin integration, theme customization, and website optimization under expert supervision.</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;