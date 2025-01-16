import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import lightLogo from "../assets/devlogo_lightmode.svg";
import darkLogo from "../assets/devLogo_darkmode.svg";

export const Nav = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [darkModeActive, setDarkModeActive] = useState(false);

  let userPrefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;

  function toggleMenu() {
    console.log("hamburger menu toggled");
    setMobileMenuIsOpen((current) => !current);
    document.body.classList.toggle("cs-open");
  }

  function enableDarkMode() {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  }
  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
  function toggleDarkMode() {
    localStorage.getItem("theme") === "light"
      ? enableDarkMode()
      : disableDarkMode();
  }

  useEffect(() => {
    let theme = "light";

    if (userPrefersDarkMode === true && theme === "light") {
      theme = "dark";
      // check localStorage for a saved 'theme' variable. if it's there, the user has visited before, so apply the necessary theme choices
    } else if (localStorage.getItem("theme")) {
      theme = localStorage.getItem("theme");
    }

    // if there is no preference set, the default of light will be used. apply accordingly
    theme === "dark" ? enableDarkMode() : disableDarkMode();
  }, []);

  return (
    <header id="cs-navigation" className={mobileMenuIsOpen ? "cs-active" : ""}>
      <div className="cs-container">
        <Link to="/" className="cs-logo" aria-label="back to home">
          <img className="light" src={lightLogo} alt="jessjudd.dev" />
          <img className="dark" src={darkLogo} alt="jessjudd.dev" />
        </Link>

        <nav className="cs-nav" role="navigation">
          <button
            className={mobileMenuIsOpen ? "cs-active cs-toggle" : "cs-toggle"}
            aria-label="mobile menu toggle"
            onClick={toggleMenu}
          >
            <div className="cs-box" aria-hidden="true">
              <span className="cs-line cs-line1" aria-hidden="true"></span>
              <span className="cs-line cs-line2" aria-hidden="true"></span>
              <span className="cs-line cs-line3" aria-hidden="true"></span>
            </div>
          </button>

          <div className="cs-ul-wrapper">
            <ul
              id="cs-expanded"
              className="cs-ul"
              aria-expanded={mobileMenuIsOpen}
            >
              <li className="cs-li">
                <NavLink
                  onClick={() => toggleMenu()}
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "cs-li-link pending "
                      : isActive
                      ? "cs-li-link cs-active"
                      : "cs-li-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="cs-li">
                <NavLink
                  onClick={() => toggleMenu()}
                  to="/agency"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "cs-li-link pending "
                      : isActive
                      ? "cs-li-link cs-active"
                      : "cs-li-link"
                  }
                >
                  Agency Work
                </NavLink>
              </li>
              <li className="cs-li">
                <NavLink
                  onClick={() => toggleMenu()}
                  to="/projects"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "cs-li-link pending "
                      : isActive
                      ? "cs-li-link cs-active"
                      : "cs-li-link"
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li className="cs-li">
                <a
                  onClick={() => toggleMenu()}
                  href="https://github.com/JessJudd"
                  target="_blank"
                  className="cs-li-link"
                >
                  GitHub
                </a>
              </li>
              <li className="cs-li">
                <a
                  onClick={() => toggleMenu()}
                  href="https://www.linkedin.com/in/jessjudd/"
                  target="_blank"
                  className="cs-li-link"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <a
          href="https://forms.gle/gtuukMeP3zgcBXYU7"
          className="cs-button-solid cs-nav-button"
          target="_blank"
        >
          Get in Touch
        </a>
        <button
          id="dark-mode-toggle"
          aria-label="dark mode toggle"
          onClick={toggleDarkMode}
        >
          <img className="cs-moon" src="./src/assets/IF_moon.svg" />
          {/* <img className="cs-sun" src="./src/assets/IF_sun.svg" /> */}
          <svg
            class="cs-sun feather feather-sun"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" x2="12" y1="1" y2="3" />
            <line x1="12" x2="12" y1="21" y2="23" />
            <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
            <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
            <line x1="1" x2="3" y1="12" y2="12" />
            <line x1="21" x2="23" y1="12" y2="12" />
            <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
            <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
          </svg>
        </button>
      </div>
    </header>
  );
};
