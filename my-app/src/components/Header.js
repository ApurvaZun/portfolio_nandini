import React from "react";
import { FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      <header className="App-header">
        <nav>
          <h1>Rajnandini</h1>
          <ul>
            <li>Work</li>
            <li>About</li>
            <FaInstagram size={20} />
          </ul>
        </nav>
      </header>
    </div>
  );
}
