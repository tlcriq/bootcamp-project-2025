import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navigator">
      <nav className={style.navbar}>
          
            <a href="/">
                <img src = "logo.png" alt = "Cool logo" className={style.logo} />
            </a>
        <ul className={style.navbar}>
            <li> <Link href="/blog">Blog</Link> </li>
            <li> <Link href="/portfolio">Portfolio</Link> </li>
            <li> <Link href="/resume">Resume</Link> </li>
            <li> <Link href="/contact">Contact</Link> </li>
        </ul>
      </nav>
    </header>
  );
}