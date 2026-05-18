import { Route } from "react-router-dom";

import Cart from "../pages/Cart";

function CartRoutes() {
  return (
    <>
      <Route path="/cart" element={<Cart />} />
    </>
  );
}

export default CartRoutes;