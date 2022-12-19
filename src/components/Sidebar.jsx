import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowRightSquare } from "react-bootstrap-icons";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import NewClientBtn from "./NewClientBtn";
import { useUser } from "../context/UserContext";

function Sidebar({ sidebar, setSidebar }) {
  const { user } = useUser();
  return (
    <>
      <Navbar collapseOnSelect expand={false}>
        <Container fluid>
          <Navbar.Brand className="text-white pt-0">
            <ArrowRightSquare className="me-3" color="white" />
            Ryght Solutions
          </Navbar.Brand>
          {user ? (
            <div className="d-flex">
              <Nav className="justify-content-center">
                <Nav.Item>
                  <NewClientBtn />
                </Nav.Item>
              </Nav>
              <Navbar.Toggle />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-big`}
                aria-labelledby={`offcanvasNavbarLabel-expand-big`}
                placement="start"
              >
                <Offcanvas.Header className="nav-menu text-white" closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                    Ryght Solutions
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="nav-menu">
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    {SidebarData.map((item, index) => {
                      return (
                          <Nav.Link key={index}
                            as={Link}
                            disabled={item.disabled}
                            to={item.path}
                            className={item.cName}
                          >
                            {item.icon}
                            <span className="ps-2">{item.title}</span>
                          </Nav.Link>
                      );
                    })}
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
          ) : (
            ""
          )}
        </Container>
      </Navbar>
      {/* <div className="navbar">
        <h3 className="m-0 text-white">Ryght Solutions</h3>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ListGroup className="nav-menu-items" onClick={showSidebar}>
          <ListGroup.Item className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <XLg color="white" />
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </nav> */}
    </>
  );
}

export default Sidebar;
