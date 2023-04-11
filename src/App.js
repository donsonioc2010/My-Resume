import Contact from 'profile/Contact';
import './App.css';
import { Container } from 'react-bootstrap';
import Introduce from 'introduce/Introduce';
import Footer from 'footer/footer';

function App() {
  return (
    <div id="global">
      <Container>
        <Contact />
        <Introduce />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
