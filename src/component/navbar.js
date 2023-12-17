import { Link } from "react-router-dom";
import { Nav, Container, Navbar, NavbarBrand, NavItem } from "react-bootstrap";
import Search from "./Search";

function NavBar() {
  return (
    <Navbar>
      <Container>
        <NavbarBrand>
          <Link to={"/"} className="nav-link">
            LOGO
          </Link>
        </NavbarBrand>
        <Nav className="ms-auto ">
          <NavItem>
            <Link to={"/home"} className=" nav-link">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to={"/about"} className="mx-3 nav-link">
              About
            </Link>
          </NavItem>
          <NavItem>
            <Search />
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavBar;
