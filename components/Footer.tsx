'use client'; // for Next.js App Router

// Global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

// Next.js & Icons
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container text-center">
        {/* Social Icons - smaller and cleaner */}
        <div className="mb-3">
          <a
            href="https://www.linkedin.com/in/areeba-khan-333074326/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-50 mx-3"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://github.com/areebakhan129"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-50 mx-3"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="mailto:areebakhan1806@gmail.com"
            className="text-white-50 mx-3"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
        </div>

        {/* Navigation links */}
        <ul className="list-inline mb-2">
          <li className="list-inline-item">
            <a href="#home" className="text-white-80 text-decoration-none medium">Home</a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="#about" className="text-white-80 text-decoration-none medium">About</a>
          </li>
          <li className="list-inline-item">
            <a href="#projects" className="text-white-80 text-decoration-none medium">Projects</a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="#contact" className="text-white-80 text-decoration-none medium">Contact</a>
          </li>
        </ul>

        {/* Copyright */}
        <p className="text-muted small mb-0">
          &copy; {currentYear} <strong>Areeba Khan</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
