import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-scroll";

const Navbar = styled.nav`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 7px 20px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .logo {
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease;
  }

  .nav-links {
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
    margin: 0;

    .nav-item {
      color: ${({ theme }) => theme.text};
      font-weight: 600;
      text-transform: uppercase;
      transition: all 0.3s ease;
      border-bottom: 2px solid transparent;
      padding-bottom: 3px;
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.accent};
        border-color: ${({ theme }) => theme.accent};
      }
    }
  }

  .menu-icon {
    display: none;
    color: ${({ theme }) => theme.text};
    font-size: 30px;
    cursor: pointer;
    z-index: 1100; /* Ensures icon is above menu */
  }

  .toggle-button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.text};
    font-size: 20px;
    cursor: pointer;
    padding: 12px 0px;
    outline: none;
    transition: transform 0.2s ease, background 0.2s ease;

    &:hover {
      border: none;
    }

    &:focus {
      outline: none;
    }

    &:active {
      transform: scale(0.95);
    }
  }

  @media (max-width: 950px) {
    .nav-links {
      position: fixed;
      top: 60px;
      left: 0;
      right: 0;
      flex-direction: column;
      align-items: center;
      width: 100vw;
      padding: 20px;
      gap: 15px;
      overflow: hidden;

      /* ✅ Ensures blur effect */
      background: ${({ theme }) => theme.body};
      backdrop-filter: blur(15px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      transition: all 0.3s ease-in-out;

      /* ✅ Use visibility instead of display: none to keep effects */
      visibility: ${({ $isMenuOpen }) => ($isMenuOpen ? "visible" : "hidden")};
      opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? "1" : "0")};
      transform: ${({ $isMenuOpen }) =>
        $isMenuOpen ? "translateY(0)" : "translateY(-10px)"};
    }

    .menu-icon {
      display: block;
    }
  }

  .nav-item.active {
    color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
  }
`;

/* ✅ Fix black bar on reload */
const GlobalStyle = styled.div`
  html,
  body {
    overflow-x: hidden; /* Prevent horizontal scroll */
    width: 100%;
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background};
  }

  /* ✅ Ensures navbar is not affected by scroll-based changes */
  body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    z-index: 999;
  }
`;

function NavbarComponent({ toggleTheme, isDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = "auto";
    }
    document.documentElement.style.overflowX = "hidden";
  }, [isMenuOpen]);

  return (
    <GlobalStyle>
      <Navbar $isMenuOpen={isMenuOpen}>
        <div className="logo">NV</div>
        <div className="nav-links">
          <Link
            to="home"
            smooth
            duration={100}
            spy={true}
            offset={-70}
            activeClass="active"
            className="nav-item"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth
            duration={100}
            spy={true}
            offset={-70}
            activeClass="active"
            className="nav-item"
          >
            About Me
          </Link>
          <Link
            to="skills"
            smooth
            duration={100}
            spy={true}
            offset={-70}
            activeClass="active"
            className="nav-item"
          >
            Skills
          </Link>
          <Link
            to="experience"
            smooth
            duration={100}
            spy={true}
            offset={-70}
            activeClass="active"
            className="nav-item"
          >
            Experience
          </Link>
          <Link
            to="education"
            smooth
            duration={100}
            spy={true}
            offset={-70}
            activeClass="active"
            className="nav-item"
          >
            Education
          </Link>
          <Link
            to="projects"
            smooth
            duration={100}
            spy={true}
            offset={-70}
            activeClass="active"
            className="nav-item"
          >
            Projects
          </Link>
          <Link
            to="achievements"
            smooth
            duration={100}
            spy={true}
            offset={-70}
            activeClass="active"
            className="nav-item"
          >
            Achievements
          </Link>
          <Link
            to="contact"
            smooth
            duration={100}
            spy={true}
            offset={-20}
            activeClass="active"
            className="nav-item"
          >
            Contact
          </Link>
        </div>

        <button className="toggle-button" onClick={toggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>

        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </Navbar>
    </GlobalStyle>
  );
}

NavbarComponent.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default NavbarComponent;
