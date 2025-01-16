import lightLogo from "../assets/devlogo_lightmode.svg";
import darkLogo from "../assets/devLogo_darkmode.svg";

export const Footer = () => {
  return (
    <footer id="cs-footer-269">
      <div className="cs-container">
        <div className="cs-logo-group">
          <a aria-label="go back to home" className="cs-logo" href="">
            <img src={lightLogo} alt="jessjudd.dev" />
          </a>
          {/* <p className="cs-text">
            Etiam nulla ultrices consequat, posuere nulla. Ac iaculis lorem
            phasellus ultrices adipiscing viverra sit ut quam. In diam mattis
            elementum diam at sed ultricies.
          </p> */}
        </div>

        <ul className="cs-nav">
          <li className="cs-nav-li">
            <span className="cs-header">Sitemap</span>
          </li>
          <li className="cs-nav-li">
            <a className="cs-nav-link" href="/">
              Home
            </a>
          </li>
          <li className="cs-nav-li">
            <a className="cs-nav-link" href="/agency">
              Agency Work
            </a>
          </li>
          <li className="cs-nav-li">
            <a className="cs-nav-link" href="/projects">
              Projects
            </a>
          </li>
          <li className="cs-nav-li">
            <a
              className="cs-nav-link"
              href="https://github.com/JessJudd"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li className="cs-nav-li">
            <a
              className="cs-nav-link"
              href="https://www.linkedin.com/in/jessjudd/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        <ul className="cs-contact">
          <li className="cs-nav-li">
            <span className="cs-header">Contact</span>
          </li>
          <li className="cs-contact-li">
            <a
              className="cs-contact-link"
              href="https://forms.gle/gtuukMeP3zgcBXYU7"
              target="_blank"
            >
              click to email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
