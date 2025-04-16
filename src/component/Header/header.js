import React, { useState, useRef } from "react";
import "./header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };

  const heroRef = useRef(null);
  const residenciesRef = useRef(null);
  const valuesRef = useRef(null);
  const contactRef = useRef(null);
  const getStartedRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <img src="./logo.png" alt="logo" className="logo" />

        <OutsideClickHandler onOutsideClick={() => setMenuOpen(false)}>
          <div className="h-menu flexCenter" style={getMenuStyles(menuOpen)}>
            <a
              href="#residencies"
              onClick={() => scrollToSection(residenciesRef)}
            >
              Residencies
            </a>
            <a href="#ourValues" onClick={() => scrollToSection(valuesRef)}>
              Our Values
            </a>
            <a href="#contact" onClick={() => scrollToSection(contactRef)}>
              Contact Us
            </a>
            <a
              href="#getStarted"
              onClick={() => scrollToSection(getStartedRef)}
            >
              Get Started
            </a>

            <button className="button">
              <a href="tel:+911234567890">Call</a>
            </button>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
