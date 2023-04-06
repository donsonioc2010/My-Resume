import Contact from 'profile/Contact';
import './App.css';
import { Container } from 'react-bootstrap';
import Introduce from 'introduce/Introduce';

function App() {
  return (
    <div id="global">
      <Container>
        <Contact />
        <Introduce />
      </Container>
    </div>
  );
}

export default App;
