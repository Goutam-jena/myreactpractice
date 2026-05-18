import { Route } from "react-router-dom";

import Home from "../pages/Home";

function HomeRoutes() {
  return (
    <>
      <Route path="/" element={<Home />} />
    </>
  );
}

export default HomeRoutes;