import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LogoImage from "../../../assets/layout/images/logo-image.png";
import styles from "./styles.module.css";

function CustomNavbar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#000000" }}>
      <Container>
        <Navbar.Brand href="#home">
          <Image src={LogoImage} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-3">
            <Nav.Link href="#home" className={`${styles.links}`}>
              About
            </Nav.Link>
            <NavDropdown
              title={<span className={`${styles.links}`}>Services</span>}
              id="basic-nav-dropdown"
              className={`${styles.links}`}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<span className={`${styles.links}`}>Solutions</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home" className={`${styles.links}`}>
              Case Studies
            </Nav.Link>
            <NavDropdown
              title={<span className={`${styles.links}`}>Resources</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button>Contact us</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
