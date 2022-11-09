import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <a href="/">Alexandra</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/about">About me</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
