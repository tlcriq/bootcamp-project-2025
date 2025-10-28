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
            <li> <Link href="blog.html">Blog</Link> </li>
            <li> <Link href="portfolio.html">Portfolio</Link> </li>
            <li> <Link href="resume.html">Resume</Link> </li>
            <li> <Link href="contact.html">Contact</Link> </li>
        </ul>
      </nav>
    </header>
    
      
  );
}