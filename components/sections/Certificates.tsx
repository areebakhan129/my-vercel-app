// components/sections/Certificates.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const certificates = [
  {
    id: 1,
    title: 'Web Development Certificate',
    imageUrl: '/images/my-certificate.jpeg', // Confirmed path from Screenshot (28).png
  },
];

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-5" id="certificates">
      <div className="container" ref={ref}>
        <h2 className="text-center mb-5 display-5 fw-bold text-primary">My Certificates</h2>
        <motion.div
          className="row justify-content-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {certificates.length > 0 ? (
            certificates.map(cert => (
              <motion.div key={cert.id} className="col-md-6 col-lg-4 mb-4 d-flex" variants={itemVariants}>
                <div className="card shadow-sm flex-fill">
                  <Image
                    src={cert.imageUrl}
                    alt={`Certificate: ${cert.title}`}
                    width={500} // Adjust width as needed
                    height={350} // Adjust height as needed
                    className="card-img-top img-fluid"
                    style={{ objectFit: "contain" }} // Use 'contain' to ensure the full certificate is visible
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold text-dark">{cert.title}</h5>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p className="text-muted">No certificates to display yet. Check back soon!</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;