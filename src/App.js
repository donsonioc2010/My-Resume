import Contact from 'profile/Contact';
import './App.css';
import { Container } from 'react-bootstrap';
import Introduce from 'introduce/Introduce';
import Footer from 'footer/footer';
import Skills from 'skills/Skills';
import Experience from 'experience/Experience';

function App() {
  return (
    <div id="global">
      <Container>
        <Contact />
        <Introduce />
        <Skills />
        <Experience />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
