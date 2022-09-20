import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import './NavBar.css';

import CartWidget from './CartWidget';
import './CartWidget.css';



const NavBar = () => {
    return (
      <Navbar bg="danger" expand="lg">
        <Container>
          <Navbar.Brand className="hoverable" href="index.html">En Tu Casa</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="hoverable" href="#home">Home</Nav.Link>
              <Nav.Link className="hoverable" href="#link">Link</Nav.Link>
              <NavDropdown className="hoverable" title="Tienda" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Pantalones</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Remeras</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Calzado</NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <CartWidget/>
        </Container>
      </Navbar>
    );
  }

 export default NavBar;

 