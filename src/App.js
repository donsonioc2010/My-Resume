import Contact from 'profile/Contact';
import './App.css';
import { Container } from 'react-bootstrap';
import Introduce from 'introduce/Introduce';
import Footer from 'footer/footer';
import Skills from 'skills/Skills';
import Experience from 'experience/Experience';
import Educations from 'education/Education';

function App() {
  return (
    <div id="global">
      <Container>
        <Contact />
        <Introduce />
        <Skills />
        <Experience />
        <Educations />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
