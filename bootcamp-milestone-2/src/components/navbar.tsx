import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navigator}>
      <nav className="navbar">
        <h1 className="logo">
            <a href="index.html">Home</a>
        </h1>
        <ul className="navbar">
            <li> <a href="blog.html">Blog</a> </li>
            <li> <a href="portfolio.html">Portfolio</a> </li>
            <li> <a href="resume.html">Resume</a> </li>
            <li> <a href="contact.html">Contact</a> </li>
        </ul>
      </nav>
    </header>
    
      
  );
}