import { useCart } from "@/context/CartContext";
import React, { useState } from "react";

const CartPaymentCard = () => {
  const [promoCode, setPromoCode] = useState("");
  const [error, setError] = useState("");
  const { cart } = useCart();
  const isDisabled = cart.length === 0; // Désactiver si card est vide

  // Liste des produits avec nom et prix
  const products = [
    { name: "Ordinateur portable", price: 750 },
    { name: "Clavier mécanique", price: 120 },
    { name: "Souris gaming", price: 60 },
    { name: "Casque audio", price: 90 },
  ];

  // Calcul du prix total
  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

  const applyPromoCode = () => {
    if (promoCode.trim() === "") {
      setError("Veuillez entrer un code promo !");
      return;
    }
    setError(""); // Efface l'erreur si tout est bon
    console.log("Code promo appliqué :", promoCode);
  };

  return (
    <div className=" w-full md:w-1/3 md:max-w-md ">
      <div className=" border border-gray-500 rounded-xl py-4 bg-white shadow-lg">
        {/* Titre */}
        <div className="px-6 mb-4">
          <p className="text-2xl font-bold text-black">Promo code</p>
        </div>

        <div className="px-6">
          {/* Champ de saisie */}
          <div className="flex justify-between border-2 p-1 items-center rounded-full border-gray-400">
            <input
              className="pl-4 flex-1 bg-transparent border-none outline-none w-10 focus:ring-gray-500"
              type="text"
              name="promo"
              id="promo"
              placeholder="Entrer ici ..."
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              aria-label="Champ de saisie du code promo"
            />
            <button
              type="button"
              className={`bg-gray-900 text-white flex items-center justify-center px-6 py-2 rounded-full transition 
          ${
            isDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
          }`}
              onClick={applyPromoCode}
              disabled={isDisabled}
            >
              Appliquer
            </button>
          </div>

          {/* Message d'erreur */}
          {error && (
            <p className="text-red-500 mt-2" aria-live="polite">
              {error}
            </p>
          )}

          {/* Tableau des produits */}

          <div className="border-t-2 border-gray-400 mt-6">
            {" "}
            {cart.length === 0 ? (
              <p className=" text-xl py-10 font-bold  text-center">
                Accounting : {cart.length}
              </p>
            ) : (
              <div className="py-4">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="p-2 text-gray-600">Produit</th>
                      <th className="p-2 text-gray-600 text-right">Prix (€)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="p-2 text-gray-800">{product.name}</td>
                        <td className="p-2 text-gray-800 text-right">
                          {product.price} €
                        </td>
                      </tr>
                    ))}
                    {/* Ligne du total */}
                    <tr className="font-bold">
                      <td className="p-2 text-gray-900">Total</td>
                      <td className="p-2 text-gray-900 text-right">
                        {totalPrice} €
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {/* Bouton de validation */}
            <button className={`rounded-xl w-full bg-gray-900 text-white py-3 hover:bg-gray-700 transition ${
            isDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
          }`}>
              Continuer vers le paiement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPaymentCard;
