// app/page.tsx
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Certificates from '@/components/sections/Certificates';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
//import BootstrapClient from '@/components/BootstrapClient';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    
    </>
  );
}