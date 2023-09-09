import React from "react";
import "./HeaderMenu.styles.css"; // Create a CSS file for styling

function Header() {
  return (
    <header className="sticky-header">
      <nav>
        {/* Your menu items */}
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li className="services">
            Services
            {/* <div className="dropdown-content">
              <p>item</p>
              <p>item</p>
              <p>item</p>
            </div> */}
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
