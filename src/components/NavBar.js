import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import './NavBar.css';

import CartWidget from './CartWidget/CartWidget';
import './CartWidget/CartWidget.css';
import { Link } from 'react-router-dom';



const NavBar = () => {
    return (
      <Navbar bg="danger" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className="hoverable" >En Tu Casa</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="hoverable" as={Link} to="/">Home</Nav.Link>
              <Nav.Link className="hoverable" as={Link} to="/"></Nav.Link>
              <NavDropdown className="hoverable" title="Tienda" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/category/pantalones">Pantalones</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/remeras">Remeras</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/calzado">Calzado</NavDropdown.Item>
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

 