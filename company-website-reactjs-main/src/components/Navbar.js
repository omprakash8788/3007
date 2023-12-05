
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = isSmallScreen ? 690 : 220;

      if (window.scrollY > scrollThreshold) {
        const gotop = document.querySelector(".gotop");
        gotop.classList.add("display");

        const nav = document.querySelector(".navbar");
        nav.classList.add("navopened");
      } else {
        const nav = document.querySelector(".navbar");
        const gotop = document.querySelector(".gotop");
        gotop.classList.remove("display");
        nav.classList.remove("navopened");
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isSmallScreen]);

  const openBar = () => {
    const bar = document.querySelector(".bar");
    bar.classList.toggle("opened");
  };

  useEffect(() => {
    // Check if the screen width is less than 768
    const isSmall = window.innerWidth < 768;
    setIsSmallScreen(isSmall);
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          <h1 className="logo">
            <Link
              spy={true}
              smooth={true}
              duration={1000}
              to="headerbg"
              style={{ cursor: "pointer" }}
            >
              3007
            </Link>
          </h1>
          <ul className="bar">
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="headerbg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="about-scroll"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="button" onClick={openBar}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

