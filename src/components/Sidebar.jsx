import { Row, Col, ListGroup, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowRightSquare, XLg } from "react-bootstrap-icons";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";

function Sidebar({ sidebar, setSidebar }) {
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <ArrowRightSquare className="me-3" color="white" onClick={showSidebar} />
        </Link>
        <h3 className="m-0 text-white">Ryght Solutions</h3>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ListGroup className="nav-menu-items" onClick={showSidebar}>
          <ListGroup.Item className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <XLg color="white"/>
            </Link>
          </ListGroup.Item>
          {SidebarData.map((item, index) => {
            return (
              <ListGroup.Item key={index} className={item.cName} disabled={item.disabled}>
                <Link to={item.path} >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </nav>
    </>
  );
}

export default Sidebar;
