import { useState } from "react";
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
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <XLg color="white"/>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
