import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        <FontAwesomeIcon icon={faBars} className="dropbtn"/>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/about">home</a>
          </li>
          <li>
            <a href="/projects">projects</a>
          </li>
          <li>
            <a href="/art">art</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
