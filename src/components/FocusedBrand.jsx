export const FocusedBrand = ({ device, brand }) => {
  let focusedBrandDetails =
    brand &&
    brand.details &&
    brand.details.map((listItem, index) => {
      return <li key={index}>{listItem}</li>;
    });

  return (
    (device === "desktop" && (
      <div className="column is-hidden-touch">
        <div className={`container brand-focused brand-${brand.cssId}`}>
          <div className="columns m-0">
            <div className="column brand-project p-0 is-flex is-flex-direction-column is-justify-content-space-between">
              <div className="project-header">
                <h4 className="brand-name">{brand.brandName}</h4>
                <h3 className="cs-subtitle">{brand.project}</h3>
                <p className="cs-text pr-6">{brand.description[0]}</p>
                <p className="cs-text pr-6 mt-3">{brand.description[1]}</p>
              </div>
              <div className="project-details mt-5">
                <h4 className="details-header cs-topper">Project Details</h4>
                <ul className="details-list cs-list cs-list-plain is-flex is-flex-wrap-wrap is-align-content-center">
                  {focusedBrandDetails}
                </ul>
              </div>
            </div>
            <div className="column is-one-fifth p-0 is-flex is-flex-direction-column is-justify-content-space-between">
              <figure className="focused-brand-logo image mx-auto transparent">
                <img src={`./logos/logo_${brand.cssId}.${brand.imageType}`} />
              </figure>
              {brand.url && (
                <a
                  className="ml-auto"
                  href={brand.url}
                  target="_blank"
                  title={`Visit ${brand.brandName}`}
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
    )) ||
    (device === "mobile" && (
      <div
        className={`is-hidden-desktop container p-3 my-3 brand-focused brand-${brand.cssId}`}
      >
        <div className="project-header is-flex is-justify-content-space-between">
          <h3 className="cs-subtitle">{brand.project} </h3>
          {brand.url && (
            <a
              href={brand.url}
              target="_blank"
              title={`Visit ${brand.brandName}`}
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
        <p className="cs-text full-width">{brand.description[0]}</p>
        <p className="cs-text full-width mt-3">{brand.description[1]}</p>
        <div className="project-details mt-5">
          <div className="columns is-mobile">
            <div className="column">
              <h4 className="details-header cs-topper">Project Details</h4>
              <ul className="details-list cs-list cs-list-plain">
                {focusedBrandDetails}
              </ul>
            </div>
            <div className="column is-flex is-flex-direction-column is-justify-content-flex-end">
              <figure className="focused-brand-logo image ml-auto transparent">
                <img src={`./logos/logo_${brand.cssId}.${brand.imageType}`} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    ))
  );
};
