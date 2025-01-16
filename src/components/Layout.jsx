import { Outlet } from "react-router-dom";
import { Nav } from "./Nav.jsx";
import { Footer } from "./Footer.jsx";

export const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};
