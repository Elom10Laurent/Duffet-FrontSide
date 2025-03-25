import React, { useState } from "react";

const PaymentCard = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [paymentNumber, setPaymentNumber] = useState("");
  const [numberError, setNumberError] = useState("");

  const methods = [
    {
      name: "Flooz",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSPZvKVzjPoY0_PqRndluX2oBAqFB4q08qA&s",
    },
    {
      name: "Mixx By Yas",
      image: "https://cb2mixx.yas.tg/assets/logo%20Mixx%20by%20yas-ai.svg",
    },
    {
      name: "Paiement sur place",
      image:
        "https://cdn2.vectorstock.com/i/1000x1000/99/86/home-property-logo-vector-20959986.jpg",
    },
  ];

  const handleMethodChange = (methodName: string) => {
    setSelectedMethod(methodName);
    setNumberError(""); // Réinitialiser l'erreur du numéro lors du changement de méthode
  };

  const handlePay = () => {
    if (
      (selectedMethod === "Flooz" || selectedMethod === "Mixx By Yas") &&
      !paymentNumber.trim()
    ) {
      setNumberError("Veuillez entrer un numéro de paiement !");
      return;
    }
    setNumberError("");
    console.log("Paiement validé avec :", { selectedMethod, paymentNumber });
  };

  return (
    <div className="w-full md:w-1/3 md:max-w-md">
      <div className="border border-gray-500 rounded-xl py-4 bg-white shadow-lg">
        <div className="px-6 mb-4">
          <p className="text-2xl font-bold text-black">Méthode de paiement</p>
        </div>

        <div className="px-6">
          <div className="border-t-2 border-gray-400 mt-6">
            <div className="py-4">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {methods.map((method, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="p-2 text-gray-800">
                        <label
                          htmlFor={`method-${index}`}
                          className="cursor-pointer flex items-center"
                        >
                          <input
                            type="radio"
                            name="paymentMethod"
                            id={`method-${index}`}
                            value={method.name}
                            checked={selectedMethod === method.name}
                            onChange={() => handleMethodChange(method.name)}
                            className="mr-2"
                          />
                          {method.name}
                        </label>
                      </td>
                      <td className="p-2 h-10 w-10 text-right">
                        <img
                          className="h-10 w-10 object-contain"
                          src={method.image}
                          alt={method.name}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="">
                <div className="py-4">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="p-2 text-gray-600"></th>
                        <th className="p-2 text-gray-600 text-right">
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr className="font-bold">
                        <td className="p-2 text-gray-400">transport</td>
                        <td className="p-2 text-gray-400 text-right">10€</td>
                      </tr>
                      <tr className="font-bold">
                        <td className="p-2 text-gray-900">Total</td>
                        <td className="p-2 text-gray-900 text-right">3010 €</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Champ pour numéro de paiement */}
                {(selectedMethod === "Flooz" ||
                  selectedMethod === "Mixx By Yas") && (
                  <div className="my-4">
                    <input
                      className="w-full border-2 p-2 rounded-xl border-gray-400 focus:ring-gray-500"
                      type="text"
                      name="paymentNumber"
                      placeholder="Entrez votre numéro de paiement"
                      value={paymentNumber}
                      onChange={(e) => setPaymentNumber(e.target.value)}
                    />
                    {numberError && (
                      <p className="text-red-500 mt-2">{numberError}</p>
                    )}
                  </div>
                )}
              </div>

              {/* Bouton de paiement */}
              <button
                className="rounded-xl w-full bg-gray-900 text-white py-3 hover:bg-gray-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!selectedMethod}
                onClick={handlePay}
              >
                Payer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
