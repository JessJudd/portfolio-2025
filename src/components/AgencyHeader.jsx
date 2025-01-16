export const AgencyHeader = ({ name, children }) => {
  return (
    <div className="agency-work">
      <h4 className="cs-topper">role overview</h4>
      <h3 className="cs-subtitle">{name}</h3>
      <p className="cs-text">{children}</p>
    </div>
  );
};
