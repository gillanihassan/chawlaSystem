import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LogoImage from "../../../assets/layout/images/logo-image.png";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function CustomNavbar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#000000" }}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image src={LogoImage} className={`${styles.customLogo}`} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-3">
            <Nav.Link as={Link} to="/about" className={`${styles.links}`}>
              About
            </Nav.Link>
            <NavDropdown
              title={
                <Link
                  to="/services"
                  className={`${styles.links}`}
                  style={{ textDecoration: "none" }}
                >
                  Services
                </Link>
              }
              id="basic-nav-dropdown"
              className={`${styles.links}`}
            >
              <NavDropdown.Item as={Link} to="/services/web-development">
                Web Development
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/app-development">
                App Development
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/seo">
                SEO Services
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
