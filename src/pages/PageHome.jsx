import { Link } from "react-router-dom";

import photoJess from "../assets/jessPhotoHome.jpg";
import pancakes from "../assets/graveyardPancakes.jpg";

import { BrandGrid } from "../components/BrandGrid.jsx";

export const PageHome = () => {
  return (
    <div className="cs-container container" id="home">
      <section id="hero" className="section">
        <div className="columns">
          <div className="column">
            <h5 className="cs-topper">Thanks for visiting</h5>
            <h1 className="cs-title">Hey, I'm Jess</h1>
            <h3 className="cs-subtitle">
              Front-End Engineer, Lover of CSS &amp; Making the Internet Look
              Nice
            </h3>
            <div className="columns is-mobile">
              <div className="column">
                <p className="cs-text">
                  I'm a front-end engineer based in Los Angeles, California. I
                  have nearly a decade of experience building custom websites
                  for agencies and marketing companies. With a foundation in
                  customer support, I have been known throughout every role I've
                  held as a customer advocate. As a front-end engineer, I have
                  experience creating:
                </p>
                <ul className="cs-list">
                  <li>responsive, mobile first websites</li>
                  <li>SPA &amp; MPA React apps</li>
                  <li>custom WordPress themes and Shopify sites</li>
                  <li>inbox-friendly email marketing campaigns</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="column">
            <figure className="image is-4by5">
              <img src={photoJess} />
            </figure>
          </div>
        </div>
      </section>
      <section id="skills" className="section">
        <h5 className="cs-topper">JAMSTACK</h5>
        <h1 className="cs-title">The Experience</h1>
        <div className="columns is-mobile" id="jamstack">
          <div className="column">
            <h5 className="cs-topper filled">J</h5>
            <p className="cs-text">JavaScript, React, Vue</p>
          </div>
          <div className="column">
            <h5 className="cs-topper filled">A</h5>
            <p className="cs-text">REST</p>
          </div>
          <div className="column">
            <h5 className="cs-topper filled">M</h5>
            <p className="cs-text">HTML, CSS/SCSS, Liquid, PHP</p>
          </div>
        </div>
        <h5 className="cs-topper filled">additional skills</h5>
        <div className="columns" id="additionalSkills">
          <div className="column">
            <h5 className="cs-topper">Platforms</h5>
            <p className="cs-text">
              WordPress, Shopify, Mailchimp, HubSpot, Klaviyo
            </p>
          </div>
          <div className="column">
            <h5 className="cs-topper">Design</h5>
            <p className="cs-text">Photoshop, Figma, Adobe XD</p>
          </div>
          <div className="column">
            <h5 className="cs-topper">Testing</h5>
            <p className="cs-text">Litmus, Browserstack</p>
          </div>
        </div>
        <div id="education">
          <h5 className="cs-topper filled">education</h5>
          <div class="columns">
            <div className="column is-one-third">
              <h5 className="cs-topper">online</h5>
              <p className="cs-text">Scrimba</p>
            </div>
            <div className="column">
              <h5 className="cs-topper">schools</h5>
              <p className="cs-text">
                Platt College - San Diego, Southern New Hampshire University,
                Poway High School
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="brands" className="section">
        <div className="columns">
          <div className="column is-flex is-flex-direction-column">
            <div className="the-work-header">
              <h5 className="cs-topper">Brands</h5>
              <h1 className="cs-title">The Work</h1>
              <p className="cs-text full-width">
                I've been developing for agencies and digital marketing
                companies since 2013. Over the years, I've coded bespoke
                WordPress themes, Shopify sites, and HTML marketing emails in
                deep collaboration with designers and account managers. Here are
                a few of the clients I've had the pleasure of working for and
                with.
              </p>
              <Link to="/agency" className="cs-button-solid cs-nav-button mt-5">
                More Agency Work
              </Link>
            </div>
            {/* <div className="the-work-kudos p-6">
              <h3 className="cs-cta">
                "Beyond her technical skills, Jess excels in critical thinking.
                I could always count on Jess to surface concerns and ask
                important questions that helped our internal team and clients
                make more informed, scalable, and sound decisions.
              </h3>
              <h3 className="cs-cta">
                Jess's drive for excellence, dedication, and collaborative
                approach comes through in every aspect of her work. I can't
                stress enough how much I enjoyed working with her."
              </h3>
              <span className="cs-caption">
                Kelly Fedderson, Development Manager at Brand Knew
              </span>
            </div> */}
          </div>
          <div className="column">
            <BrandGrid page="home" />
          </div>
        </div>
        <div className="container mt-6">
          <div className="the-work-kudos px-6 has-text-centered">
            <h3 className="cs-cta full-width">
              "Beyond her technical skills, Jess excels in critical thinking. I
              could always count on Jess to surface concerns and ask important
              questions that helped our internal team and clients make more
              informed, scalable, and sound decisions.
            </h3>
            <h3 className="cs-cta full-width">
              Jess's drive for excellence, dedication, and collaborative
              approach comes through in every aspect of her work. I can't stress
              enough how much I enjoyed working with her."
            </h3>
            <span className="cs-caption full-width">
              Kelly Fedderson, Development Manager at Brand Knew
            </span>
          </div>
        </div>
      </section>
      <section id="pastWork" className="section">
        <h5 className="cs-topper">Before Dev</h5>
        <h1 className="cs-title">The Backstory</h1>
        <div className="columns">
          <div className="column">
            <figure className="image bw">
              <img src={pancakes} />
              <span className="cs-caption">
                Pancakes at 5:30 am after working a graveyard shift with the
                Playstation Online crew
              </span>
            </figure>
          </div>
          <div className="column">
            <p className="cs-text">Before development, I also:</p>
            <ul className="cs-list">
              <li>
                wrote and recorded video tutorials for a proprietary CMS
                knowledgebase
              </li>
              <li>
                provided support and onboarding for proprietary CMS website
                clients
              </li>
              <li>
                moderated the overnight shift for the Sony Playstation Online
                Network, including Mod Nation Racers, the Killzone series, SOCOM
                4, Motorstorm Apocalypse, and MLB, among other titles{" "}
                <em>
                  (Fun fact: I was working during the Playstation Network Outage
                  of 2011)
                </em>
              </li>
              <li>expert seasonal soap stacker at Bath &amp; Body Works</li>
              <li>
                resident assistant for Southern New Hampshire University{" "}
                <em>(Shout out to the Lower Suites, bulldozed in 2018)</em>
              </li>
              <li>
                hostess at two pizza restaurants{" "}
                <em>(Bertucci's bread rolls, I miss you - IFYKYK)</em>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
