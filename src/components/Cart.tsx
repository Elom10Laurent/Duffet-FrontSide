import { XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const Cart = () => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="  w-full md:w-2/3">
      <div className="border border-gray-500 rounded-xl py-4 px-4 w-full ">
        <div className="p-1 mb-8 flex justify-between px-6 w-full">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold text-black">Panier</p>
            <span className="text-gray-500 font-normal">(3 éléments)</span>
          </div>
          <div className="text-red-600 flex  gap-2 items-center cursor-pointer">
            <div className="border border-red-600 rounded ">
              {" "}
              <XMarkIcon className="h-4 w-4" />
            </div>
            <p>Effacer le panier</p>
          </div>
        </div>

        <div className="space-y-4 px-6">
          <div className="sm:flex  sm:space-y-0 space-y-4 border-2 p-2 items-center rounded-xl border-gray-400">
            <div className="flex gap-2 items-center">
              <div className="flex items-center justify-center p-1  bg-slate-300 h-16 w-16 rounded-lg">
                <img
                  className="h-20 w-20"
                  src="https://stories.freepiklabs.com/storage/65486/College-students-01.svg"
                  alt="product"
                />
              </div>
              <div className="min-w-40">
                <p className="text-black text-lg font-bold">Nom du produit</p>
                <p className="text-gray-500 font-normal">Catégorie</p>
              </div>
            </div>

            <div className=" flex gap-4 justify-between w-full  ">
              <div className="flex sm:items-center gap-3 sm:justify-center ">
                <button
                  onClick={handleDecrement}
                  className="group border border-gray-400 rounded-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300"
                >
                  <svg
                    className="stroke-gray-900 p-2 group-hover:stroke-black h-6 w-6"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M16.5 11H5.5"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="font-semibold text-gray-900 cursor-pointer text-lg w-10 text-center bg-transparent outline-none"
                />

                <button
                  onClick={handleIncrement}
                  className="group border border-gray-400 rounded-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300"
                >
                  <svg
                    className="stroke-gray-900 group-hover:stroke-black h-6 w-6"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M11 5.5V16.5M16.5 11H5.5"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex gap-4 items-center">
                <p className="font-semibold"> $2000</p>
                <button className="text-red-600 font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
