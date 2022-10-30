import { Container, Nav, Navbar } from "react-bootstrap";

function TopNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>ReEMIS PDPontren</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Kemenag</Nav.Link>
            <Nav.Link>PDPontren</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
