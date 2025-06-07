import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import HomeLayout from "./layout/HomeLayout";
import ShippingPage from "./pages/ShippingPage";
import HomePage from "./pages/HomePage";
import Connect from "./pages/auth/Connect";
import Register from "./pages/auth/Register";
import ProductsPage from "./pages/ProductsPage";
import GoodPlanPage from "./pages/GoodPlanPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/connect" element={<Connect />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/category/:name" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/customer" element={<GoodPlanPage />} />
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
