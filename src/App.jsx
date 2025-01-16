import "./App.scss";

import { PROJECTS } from "./PROJECTS.js";
import { RESOURCES } from "./RESOURCES.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout.jsx";

import { PageHome } from "./pages/PageHome.jsx";
import { PageInternal } from "./pages/PageInternal.jsx";

import { AgencyWork } from "./components/AgencyWork.jsx";

import { InnerHero } from "./components/InnerHero.jsx";
import { Project } from "./components/Project.jsx";

function App() {
  const projectList = PROJECTS.map((project) => {
    return <Project project={project} />;
  });

  const resourceList = RESOURCES.map((resource) => {
    const { name, hue, saturation, lightness, textColor } = resource;

    let background = `hsl(${hue}, ${saturation}, ${lightness})`;
    let color = `hsl(${hue}, ${saturation}, ${
      textColor === "light" ? "100%" : "0%"
    })`;

    return (
      <span
        className={`tag is-medium`}
        style={{ backgroundColor: background, color: color }}
      >
        {name}
      </span>
    );
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/portfolio-2025" element={<PageHome />} />
          <Route
            path="agency"
            element={
              <PageInternal>
                <InnerHero>
                  <h1 className="cs-title">Agency Work</h1>

                  <p className="cs-text full-width">
                    Throughout my career working for agencies and marketing
                    companies, my focus has been on WordPress and HTML
                    marketing. I am currently seeking to shift away from
                    WordPress and into React, and hoping to gain more
                    professional experience working in collaboration with other
                    devs. Outlined below are my experiences working for my
                    previous agencies and I've highlighted a few projects
                    throughout which were impactful during my time with these
                    companies.
                  </p>
                </InnerHero>
                <AgencyWork agency="Brand Knew" title="Front-End Engineer">
                  As a front-end engineer at Brand Knew, I worked in
                  collaboration with our internal design team to translate their
                  custom designs from Invision, Adobe XD and Figma to WordPress
                  themes, Shopify websites, and marketing e-mails.
                </AgencyWork>
                <AgencyWork
                  agency="Digital Operative"
                  title="Remote Web Developer"
                >
                  Digital Operative is where my experience with HTML email
                  marketing was cultivated. I supported one of their large
                  WordPress clients, while primarily working with the marketing
                  and design team to code and optimize marketing email campaigns
                  within Mailchimp and Hubspot.
                </AgencyWork>
                <AgencyWork
                  agency="Ceatus Media Group"
                  title="WordPress Developer"
                >
                  My first official job as a web dev was with Ceatus Media
                  Group, where I was one part of a large internal team coding
                  bespoke WordPress themes designed by our internal head of
                  design. Ceatus Media Group primarily built websites for the
                  cosmetic surgery industry, including plastic surgeons,
                  dentists, bariatric surgeons, and other medical needs, like
                  eye health.
                </AgencyWork>
              </PageInternal>
            }
          />
          <Route
            path="projects"
            element={
              <PageInternal>
                <InnerHero>
                  <h1 className="cs-title">Projects</h1>
                  <p className="cs-text full-width">
                    I started learning React in 2022 via an online resource
                    called Scrimba. Some of my React projects can be viewed on
                    GitHub, and I will be working to update this page to reflect
                    the projects I have completed that are not related to my
                    agency work.
                  </p>
                  <div className="columns is-flex is-align-content-center">
                    <div className="column is-one-quarter is-flex is-flex-direction-column is-justify-content-center">
                      <p className="cs-text">
                        The frameworks, programs and tools I use to develop are:
                      </p>
                    </div>
                    <div className="column">
                      <div className="section container is-flex is-justify-content-space-evenly">
                        {resourceList}
                      </div>
                    </div>
                  </div>
                </InnerHero>
                <section className="section fixed-grid">
                  <div className="grid has-2-cols">{projectList}</div>
                </section>
              </PageInternal>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
