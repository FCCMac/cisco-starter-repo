import './App.css';
import Exhibit from './components/Exhibit';
import logo from './cisco-logo.svg';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Container>
        <Navbar bg='light' variant='light' className='px-2'>
          <Container>
            <Navbar.Brand href='#home'>
              <img alt='Cisco Logo' src={logo} width='35' height='35' className='d-inline-block align-top' />
              {' '}
              Sextant
            </Navbar.Brand>
          </Container>
        </Navbar>
        <div className='content my-3'>
          <Exhibit />
        </div>
      </Container>
    </div>
  );
}

export default App;
