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
      '/images/Prelovebazar2.png',
      '/images/prelovebazar3.png',
      '/images/Prelovebazar4.png',
      '/images/Prelovebazar5.jpg',
      '/images/Prelovebazar6.jpg',
      '/images/Prelovebazar7.jpg',
      '/images/Prelovebazar8.jpg',
      '/images/Prelovebazar9.jpg',
      '/images/Prelovebazar10.jpg',
      '/images/Prelovebazar11.jpg',
      '/images/Prelovebazar12.jpg',
      '/images/Prelovebazar13.jpg',
      '/images/Prelovebazar14.jpg',
      '/images/Prelovebazar15.jpg',
      '/images/Prelovebazar16.jpg',
      '/images/Prelovebazar17.jpg',
      '/images/Prelovebazar18.jpg',
      '/images/Prelovebazar19.jpg',
      '/images/Prelovebazar20.jpg',
      '/images/Prelovebazar21.jpg',
      '/images/Prelovebazar22.jpg',
      '/images/Prelovebazar23.jpg',
      '/images/Prelovebazar24.jpg',
      '/images/Prelovebazar25.jpg',
      '/images/Prelovebazar26.jpg',
      '/images/Prelovebazar27.jpg',
      '/images/Prelovebazar28.jpg',
      '/images/Prelovebazar29.jpg',
      '/images/Prelovebazar30.jpg',
      '/images/Prelovebazar31.jpg',
      '/images/Prelovebazar32.jpg',
      '/images/Prelovebazar33.jpg',
      '/images/Prelovebazar34.jpg',
      '/images/Prelovebazar35.jpg',
      '/images/Prelovebazar36.jpg',
      '/images/Prelovebazar37.jpg',
      '/images/Prelovebazar38.jpg',
      '/images/Prelovebazar39.jpg',
      '/images/Prelovebazar40.jpg',
      '/images/Prelovebazar41.jpg',
      '/images/Prelovebazar42.jpg',
      '/images/Prelovebazar43.jpg',
      '/images/Prelovebazar44.jpg',
      '/images/Prelovebazar45.jpg',
      '/images/Prelovebazar46.jpg',
      '/images/Prelovebazar47.jpg',
      '/images/Prelovebazar48.jpg',
      '/images/Prelovebazar49.jpg',
      '/images/Prelovebazar50.jpg',
      '/images/Prelovebazar51.jpg',
      '/images/Prelovebazar52.jpg',
      '/images/Prelovebazar53.jpg',
      '/images/Prelovebazar54.jpg',
    ],
    githubLink: 'https://github.com/muhammadkamran8837/plb-latest',
  },
    {
    id: 4,
    title: 'MediCore Hospital Management System',
    description:
      'A comprehensive hospital management system to streamline hospital operations, including patient management, appointments, and medical records.',
    technologies: ['React', 'Firebase', 'Material-UI'],
    imageUrls: Array.from({ length: 26 }, (_, i) => `/images/medicore${i + 1}.jpeg`),
    githubLink: 'https://github.com/areebakhan129/MediCore-hospital-management',
  },
  
  {
    id: 5,
    title: 'School Management System',
    description:
      'A web-based school management system built using React, Firebase, and Material-UI. It manages students, teachers, classes, and attendance efficiently.',
    technologies: ['React', 'Firebase', 'Material-UI'],
    imageUrls: [
      '/images/schoolmanagement1.png',
      '/images/schoolmanagement2.png',
      '/images/schoolmanagement3.png',
      '/images/schoolmanagement4.png',
      '/images/schoolmanagement5.png',
      '/images/schoolmanagement6.png',
      '/images/schoolmanagement7.png',
      '/images/schoolmanagement8.png',
    ],
    githubLink: 'https://github.com/areebakhan129/school-management',
  },
{
    id: 6,
    title: 'TrackItNow',
    description:
      'A habit and task tracking app developed using React and Firebase.',
    technologies: ['React', 'Firebase'],
    imageUrls: [
      '/images/trackitnow-screenshot-1.png',
      '/images/trackitnow-screenshot-2.png',
    ],
    githubLink: 'https://github.com/areebakhan129/trackitnow-web',
  },
  {
    id: 7, // Unique ID for the new project
    title: 'Travel Explorer',
    description:
      'TravelExplorer is a web-based project designed as a comprehensive travel guidance platform. It features a modern, visually engaging UI built with HTML and CSS, and uses PHP for server-side includes to ensure consistent headers and footers across all pages.',
    technologies: ['HTML', 'CSS', 'PHP'], // Technologies as specified
    imageUrls: Array.from({ length: 10 }, (_, i) => `/images/travel${i + 1}.png`), // Dynamically generated image URLs
    githubLink: 'https://github.com/areebakhan129/Travel-Explorer',
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
                      <a href={project.githubLink} className="btn btn-outline-dark btn-sm mb-2" target="_blank" rel="noopener noreferrer">
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