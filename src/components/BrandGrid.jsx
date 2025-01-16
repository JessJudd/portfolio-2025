import { BRANDS } from "../BRANDS.js";

export const BrandGrid = ({ page, agency }) => {
  let filteredBrands =
    page === "home"
      ? BRANDS
      : BRANDS.filter((brand) => {
          return brand.agencyName === agency;
        });

  let brandElements = filteredBrands.map((brand) => {
    return (
      <>
        <div className={`cell brand-logo brand-${brand.cssId}`}>
          <h5 className="brand-name">{brand.brandName}</h5>
        </div>
      </>
    );
  });

  return (
    filteredBrands.length > 0 && (
      <>
        <div className="brand-grid container is-max-tablet fixed-grid has-2-cols">
          <div className="grid">{brandElements}</div>
        </div>
      </>
    )
  );
};
