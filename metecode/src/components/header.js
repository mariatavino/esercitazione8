import { Navbar, Nav, Container, Image } from "react-bootstrap";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <Navbar>
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <Image src={logo} alt="logo metecode" fluid width={350} />
        <Nav className="header">
          <Nav.Link href="#" className="head">
            Home
          </Nav.Link>
          <Nav.Link href="#" className="head">
            Features
          </Nav.Link>
          <Nav.Link href="#" className="head">
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
