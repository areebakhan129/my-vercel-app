'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

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
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const projectsData = [
  {
    id: 1,
    title: 'PreLoveBazar',
    description:
      'Built using React Native and Firebase. Enables users to buy, sell, rent, swap, and donate second-hand clothing.',
    technologies: ['React Native', 'Firebase'],
    imageUrls: [
      '/images/first page.png',
      '/images/Prelovebazar4.png',
      '/images/Prelovebazar2.png',
      '/images/prelovebazar3.png',
    ],
    githubLink: 'https://github.com/muhammadkamran8837/plb-latest',
  },
  {
    id: 4,
    title: 'TrackItNow',
    description:
      'A habit and task tracking app developed using React and Firebase.',
    technologies: ['React', 'Firebase'],
    imageUrls: ['/images/trackitnow-screenshot-1.png', '/images/trackitnow-screenshot-2.png'],
    githubLink: 'https://github.com/areebakhan129/trackitnow-web',
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [showModal, setShowModal] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalTitle, setModalTitle] = useState('');

  const openModal = (images: string[], title: string) => {
    setModalImages(images);
    setModalTitle(title);
    setCurrentIndex(0);
    setShowModal(true);
  };

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % modalImages.length);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="py-5" id="projects">
      <div className="container" ref={ref}>
        <h2 className="text-center mb-5 display-5 fw-bold text-primary">My Projects</h2>
        <motion.div
          className="row g-4 justify-content-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projectsData.map((project) => (
            <motion.div key={project.id} className="col-md-6 col-lg-4 d-flex" variants={itemVariants}>
              <div className="card shadow-sm flex-fill">
                {project.imageUrls?.[0] && (
                  <Image
                    src={project.imageUrls[0]}
                    alt={`${project.title} screenshot`}
                    width={500}
                    height={300}
                    className="card-img-top"
                    style={{ objectFit: 'cover' }}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-dark">{project.title}</h5>
                  <p className="card-text text-dark">{project.description}</p>
                  <div className="mt-auto">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="badge bg-secondary me-1 mb-1">{tech}</span>
                    ))}
                    <div className="mt-3">
                      <button
                        className="btn btn-primary btn-sm me-2 mb-2"
                        onClick={() => openModal(project.imageUrls, project.title)}
                      >
                        View Screenshots
                      </button>
                      <a href={project.githubLink} className="btn btn-outline-dark btn-sm mb-2" target="_blank">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* React Modal */}
      {showModal && (
        <div className="modal show fade d-block bg-dark bg-opacity-75" tabIndex={-1}>
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalTitle} Screenshots</h5>
                <button className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body text-center">
                <Image
                  src={modalImages[currentIndex]}
                  alt={`Screenshot ${currentIndex + 1}`}
                  width={1200}
                  height={800}
                  className="img-fluid"
                  style={{ objectFit: 'contain' }}
                />
                <div className="d-flex justify-content-between mt-3">
                  <button className="btn btn-outline-primary" onClick={prevImage}>Previous</button>
                  <button className="btn btn-outline-primary" onClick={nextImage}>Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
