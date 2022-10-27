import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar bg="warning" variant="dark">
        <Container>
          <Navbar.Brand className="text-success fw-bold" href="#home">
            News Api
          </Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link>
              <Link className="text-decoration-none text-white" to="/home">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-white" to="/list">
                list
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-white" to="/about">
                About Me
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default App;
