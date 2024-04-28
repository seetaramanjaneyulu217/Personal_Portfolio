import { Toaster } from 'react-hot-toast';
import About from './components/About';
import Contact from './components/Contact';
import Experiences from './components/Experiences';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <div><Toaster position="top-center" /></div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
    </>
  );
}

export default App;
