import { Toaster } from 'react-hot-toast';
import About from './components/About';
import Contact from './components/Contact';
import Experiences from './components/Experiences';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { useRef } from 'react';

function App() {

  const about = useRef(null)
  const skills = useRef(null)
  const projects = useRef(null)
  const experiences = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (sectionName) => {
    window.scrollTo({
      top: sectionName.current.offsetTop,
      behavior: 'smooth'
    })
  }
  return (
    <>
      <div><Toaster position="top-center" /></div>
      <Header about={about} skills={skills} projects={projects} experiences={experiences} contact={contact} scrollToSection={scrollToSection} />
      <About about={about} scrollToSection={scrollToSection} contact={contact} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Experiences experiences={experiences} />
      <Contact contact={contact} />
      <Footer />
    </>
  );
}

export default App;
