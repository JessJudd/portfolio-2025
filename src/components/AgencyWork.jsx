import { useEffect, useState } from "react";

import { BRANDS } from "../BRANDS.js";

import { AgencyHeader } from "./AgencyHeader.jsx";
import { BrandGridCell } from "./BrandGridCell.jsx";

import iconLink from "../assets/IF_link.svg";
// import { BrandGrid } from "./BrandGrid.jsx";

export const AgencyWork = ({ page, agency, title, children }) => {
  // sync this with BrandGrid to show more information for the focused brand

  let [brands, setBrands] = useState(
    BRANDS.filter((brand) => {
      return brand.agencyName === agency;
    })
  );

  let [focused, setFocused] = useState();
  console.log("focused: ", focused);

  function focusBrand(clickedBrand) {
    let newBrands = brands.map((brand) => {
      brand.focused = false;

      clickedBrand.brandName === brand.brandName
        ? (brand.focused = !brand.focused)
        : brand;

      return brand;
    });

    setBrands((prevBrands) => newBrands);
  }

  useEffect(() => {
    let newFocus = brands.filter((brand) => {
      return brand.focused === true;
    });

    setFocused((prevFocused) => newFocus[0]);
  }, [brands]);

  let focusedBrandDetails =
    focused &&
    focused.details &&
    focused.details.map((listItem) => {
      return <li>{listItem}</li>;
    });

  let brandGrid = brands.map((brand, index) => {
    if (brand.focused === true) {
      return (
        <>
          <BrandGridCell
            brand={brand}
            index={index}
            toggle={() => focusBrand(brand)}
          />
          {focused && (
            <div
              className={`is-hidden-desktop container p-3 my-3 brand-focused brand-${focused.cssId}`}
            >
              <div className="project-header is-flex is-justify-content-space-between">
                <h3 className="cs-subtitle">{focused.project} </h3>
                {focused.url && (
                  <a
                    href={focused.url}
                    target="_blank"
                    title={`Visit ${focused.brandName}`}
                  >
                    <svg
                      className="feather feather-link"
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
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </a>
                )}
              </div>
              <p className="cs-text full-width">{focused.description[0]}</p>
              <p className="cs-text full-width mt-3">
                {focused.description[1]}
              </p>
              <div className="project-details mt-5">
                <div className="columns is-mobile">
                  <div className="column">
                    <h4 className="details-header cs-topper">
                      Project Details
                    </h4>
                    <ul className="details-list cs-list cs-list-plain">
                      {focusedBrandDetails}
                    </ul>
                  </div>
                  <div className="column is-flex is-flex-direction-column is-justify-content-flex-end">
                    <figure className="focused-brand-logo image ml-auto transparent">
                      <img
                        src={`./logo_${focused.cssId}.${focused.imageType}`}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );
    }

    return (
      <BrandGridCell
        brand={brand}
        index={index}
        toggle={() => focusBrand(brand)}
      />
    );
  });

  return (
    <section className="section agency-work-wrapper">
      <div className="agency-work">
        <h4 className="cs-topper">{title}</h4>
        <h3 className="cs-subtitle">{agency}</h3>
        <p className="cs-text full-width">{children}</p>
      </div>

      <div className="columns agency-work-details mt-3">
        <div className="column is-one-third-desktop brand-column">
          <div className="container">{brandGrid}</div>
          {/* <div className={`brandGrid container ${gridContainerClass}`}>
            <div className="column">{brandGrid}</div>
          </div> */}
        </div>
        {focused && (
          <div className="column is-hidden-touch">
            <div className={`container brand-focused brand-${focused.cssId}`}>
              <div className="columns m-0">
                <div className="column brand-project p-0 is-flex is-flex-direction-column is-justify-content-space-between">
                  <div className="project-header">
                    <h4 className="brand-name">{focused.brandName}</h4>
                    <h3 className="cs-subtitle">{focused.project}</h3>
                    <p className="cs-text pr-6">{focused.description[0]}</p>
                    <p className="cs-text pr-6 mt-3">
                      {focused.description[1]}
                    </p>
                  </div>
                  <div className="project-details mt-5">
                    <h4 className="details-header cs-topper">
                      Project Details
                    </h4>
                    <ul className="details-list cs-list cs-list-plain is-flex is-flex-wrap-wrap is-align-content-center">
                      {focusedBrandDetails}
                    </ul>
                  </div>
                </div>
                <div className="column is-one-fifth p-0 is-flex is-flex-direction-column is-justify-content-space-between">
                  <figure className="focused-brand-logo image mx-auto transparent">
                    <img src={`./logo_${focused.cssId}.${focused.imageType}`} />
                  </figure>
                  {focused.url && (
                    <a
                      className="ml-auto"
                      href={focused.url}
                      target="_blank"
                      title={`Visit ${focused.brandName}`}
                    >
                      <svg
                        className="feather feather-link"
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
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
