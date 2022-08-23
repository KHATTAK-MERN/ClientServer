import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Menubar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <img className="logo" src={"logo.png"} alt="logo" />
          <Nav className="me-auto">
            <Link to={"/login"}>
              <li className="ml-5">SignIn</li>
            </Link>
            <Link to={"/signup"}>
              <li>Signup</li>
            </Link>
            {/* <Nav.Item>
              <Nav.Link href="/signin">Sign in</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav.Item> */}
            {/* <Link href="#features">Sign In</Link>
            <Link href="#pricing">Sign Up</Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Menubar;
