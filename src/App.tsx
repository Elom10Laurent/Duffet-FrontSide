import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import HomeLayout from "./layout/HomeLayout";
import ShippingPage from "./pages/ShippingPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/product/:id/:name" element={<ProductDetail />} />
          <Route path="/product/cart" element={<CartPage />} />
          <Route path="/product/cart/:id/shipping" element={<ShippingPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
