import React from "react";
import { useState, useEffect } from "react";
import Menu from "./menu";
function Header() {
  const [stickyClass, setStickyClass] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 1 ? setStickyClass("sticky") : setStickyClass("");
    }
  };

  return (
    <header className={`${stickyClass}`}>
      <div className="header-inner">
        
        <span className="logo">Sanjeev Singh</span>
        <div><Menu/></div>
        <div className="links">
            
          <a className="link" href="#banner">
            Home
          </a>
          <a className="link" href="#projects">
            Projects
          </a>
          <a className="link" href="#skills">
            Skills
          </a>
          <a className="link" href="#contact">
            Contact
          </a>
          <a className="link" target="_blank" href="resume.pdf" download='Sanjeev Singh'>
            Resume
          </a>
        </div>
      </div>
      <div className={`mobile-links ${active ? "active" : ""}`}>
        <a className="link" onClick={() => setActive(!active)} href="#banner">
          Home
        </a>
        <a className="link" onClick={() => setActive(!active)} href="#services">
          About
        </a>
        <a
          className="link"
          onClick={() => setActive(!active)}
          href="#skills"
        >
          Skills
        </a>
        <a className="link" onClick={() => setActive(!active)} href="#projects">
          Projects
        </a>
        <a className="link" onClick={() => setActive(!active)} href="#contact">
          Contact
        </a>
        <a className="link" download='Sanjeev Singh' onClick={() => setActive(!active)} href="resume.pdf">
          Resume
        </a>
      </div>
    </header>
  );
}

export default Header;