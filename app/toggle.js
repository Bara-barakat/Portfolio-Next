"use client";

import Link from "next/link";
import { useState } from "react";
import "./globals.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav>
      <div className="burger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`menu ${isOpen ? "show" : ""}`}>
        <ul>
          <Link href="/home/">Home</Link>
          <Link href="/work/">Work Experience</Link>
          <Link href="/projects/">Projects</Link>
          <Link href="/certificat/">Certificat</Link>
          <Link href="/myskills/">My Skills</Link>
          <Link href="/contact/">Contact</Link>
          <Link href="/book/">Book</Link>
          <Link href="/blog/">Blog</Link>
        </ul>
      </div>
    </nav>
  );
};

export default BurgerMenu;
