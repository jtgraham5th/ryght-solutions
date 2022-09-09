import { useState } from "react";
import { Row, Col, ListGroup, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  PersonLinesFill,
  XLg,
  Telephone,
  PeopleFill,
  FileText,
  Incognito,
  Check2Square,
  CheckSquare,
  CalendarEvent,
  XSquare,
} from "react-bootstrap-icons";
import "./Sidebar.css";
import { SidebarData } from './SidebarData';

function Sidebar({ sidebar, setSidebar }) {
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <PersonLinesFill onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <XLg />
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
