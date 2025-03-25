import Cart from "@/components/Cart";
import CartPaymentCard from "@/components/CartPaymentCard";
import PayementCard from "@/components/PayementCard";
import { useState } from "react";

const CartPage = () => {
const [visiblePayement, setVisiblePayement] = useState('')

  return (
    <div className=" md:mx-10  flex-col space-y-10 mb-5">
      <div className="flex flex-col md:flex-row gap-6 ">
        <Cart />
        <CartPaymentCard />
      </div>
      
      <div className="border border-gray-500 rounded-3xl h-32 overflow-hidden">
        <img
          src="https://www.shutterstock.com/image-vector/fashion-clothes-set-garment-accessory-260nw-2155232397.jpg"
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CartPage;
