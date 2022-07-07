import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import Home from "./Home";
import Cart from "./shipping/Cart";
import Wishlist from "./user/Wishlist";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
