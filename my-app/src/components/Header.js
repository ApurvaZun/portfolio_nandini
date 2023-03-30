import React from "react";
import { FaInstagram } from "react-icons/fa";

const portfolio_navItems = ['Work','About'];

export default function Header() {
  return (
    <div>
      <header className="App-header">
        <nav>
          <div className="header_title">
            <h1>Rajnandini</h1>
          </div>
            <ul>
              {portfolio_navItems.map(navItem => {
                return <li key={navItem}>{navItem}</li>
              })}
              <FaInstagram size={20} />
            </ul>  
        </nav>
      </header>
    </div>
  );
}
