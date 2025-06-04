import Footer from "@/components/Footer";
import HomeNavBar from "@/components/HomeNavBar";
import { CartProvider } from "@/context/CartContext";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  const [addToBasket, setAddToBasket] = useState(0);

  const addTotheBasket = (productNumber: number) => {
    if (productNumber >= 1) {
      setAddToBasket(productNumber);
    }
  };
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <HomeNavBar value={addToBasket} />
        <main className="flex-1 container mx-auto p-4">
          <Outlet context={{ addTotheBasket }} />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default HomeLayout;
