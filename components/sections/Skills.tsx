// components/sections/Skills.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const technicalSkills = [
    'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'MySQL',
    'WordPress Development', 'Python (Basic)', 'C++'
  ];
  const designSkills = ['Figma'];
  const interests = ['Web Development', 'Mobile App Development', 'UI/UX Design'];

  return (
    <section className="py-5 bg-alt-light" id="skills"> {/* Changed to bg-alt-light here */}
      <div className="container" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="text-center mb-5 display-5 fw-bold text-dark">Skills & Interests</h2> {/* Changed to text-dark */}
          <div className="row">
            <div className="col-md-6 mb-4">
              <h3 className="h4 mb-3 text-dark">Technical Skills</h3> {/* Changed to text-dark */}
              <motion.div className="d-flex flex-wrap" variants={containerVariants}>
                {technicalSkills.map((skill, index) => (
                  <motion.span key={index} className="badge bg-primary text-white fs-6 m-1 p-2 shadow-sm" variants={itemVariants}>
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            <div className="col-md-6 mb-4">
              <h3 className="h4 mb-3 text-dark">Design Skills</h3> {/* Changed to text-dark */}
              <motion.div className="d-flex flex-wrap" variants={containerVariants}>
                {designSkills.map((skill, index) => (
                  <motion.span key={index} className="badge bg-secondary fs-6 m-1 p-2 shadow-sm" variants={itemVariants}> {/* bg-secondary will be soft beige, text-dark is default for badge secondary now */}
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <h3 className="h4 mb-3 text-dark">Interests</h3> {/* Changed to text-dark */}
              <motion.div className="d-flex flex-wrap" variants={containerVariants}>
                {interests.map((interest, index) => (
                  <motion.span key={index} className="badge bg-info text-white fs-6 m-1 p-2 shadow-sm" variants={itemVariants}> {/* Using bg-info (sky blue) for interests */}
                    {interest}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;