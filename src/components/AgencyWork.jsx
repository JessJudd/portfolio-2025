import { useEffect, useState } from "react";

import { BRANDS } from "../BRANDS.js";

import { BrandGridCell } from "./BrandGridCell.jsx";
import { FocusedBrand } from "./FocusedBrand.jsx";

export const AgencyWork = ({ page, agency, title, children }) => {
  let [brands, setBrands] = useState(
    BRANDS.filter((brand) => {
      return brand.agencyName === agency;
    })
  );

  let [focused, setFocused] = useState();

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

  let brandGrid = brands.map((brand, index) => {
    if (brand.focused === true) {
      return (
        <>
          <BrandGridCell
            key={index}
            brand={brand}
            index={index}
            toggle={() => focusBrand(brand)}
          />
          {focused && <FocusedBrand device="mobile" brand={focused} />}
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
        </div>
        {focused && <FocusedBrand device="desktop" brand={focused} />}
      </div>
    </section>
  );
};
