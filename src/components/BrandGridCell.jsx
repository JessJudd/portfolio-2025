export const BrandGridCell = ({ brand, index, toggle }) => {
  let isFocused = brand.focused;

  let focusedClass = brand.focused ? "is-focused" : "";
  let brandClass = `brand-${brand.cssId}`;

  return (
    <div
      className={`cell brand-logo ${focusedClass} ${brandClass}`}
      onClick={() => toggle(brand)}
    >
      <span className="brand-name">{brand.brandName}</span>
    </div>
  );
};
