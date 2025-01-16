export const PageInternal = ({ children }) => {
  return (
    <div className="cs-container container page-internal">
      {children ? children : "no content sent"}
    </div>
  );
};
