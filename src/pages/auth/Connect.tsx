import React from "react";
import image from "../../assets/images/connectImg.jpg";
import google from "../../assets/images/Google.png";

const Connect = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex justify-center items-center md:items-start"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="relative bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center  md:p-6 shadow-lg overflow-hidden">
        <div className="w-full max-w-md md:max-w-4xl md:max-h-full bg-white opacity-90 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg overflow-y-auto md:px-28 ">
          <h1 className="text-4xl md:text-5xl hover:text-gray-500 cursor-pointer font-bold text-gray-700 mb-4 md:mb-14 text-center">
            Duffet
          </h1>
          <h2 className="text-3xl md:text-6xl font-semibold text-gray-700 mb-2 text-center">
            Bienvenue
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Connectez-vous pour découvrir nos dernières collections et offres
            exclusives.
          </p>

          <form className="space-y-8">
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="email"
              >
                Adresse email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Entrez votre email"
                className="w-full p-4 rounded-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="password"
              >
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                placeholder="Entrez votre mot de passe"
                className="w-full p-3 rounded-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 gap-2">
                <div className="flex items-center">
                  <input type="checkbox" id="newsletter" className="mr-2" />
                  <label htmlFor="newsletter" className="text-sm text-gray-700">
                    Je souhaite recevoir des notifications par email.
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-orange-500 hover:underline mt-2 sm:mt-0"
                >
                  Mot de passe oublié ?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition duration-200"
            >
              Se connecter
            </button>

            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="text-gray-500 text-sm">ou</span>
            </div>

            <button
              type="button"
              className="w-full border border-gray-300 text-gray-700 font-medium py-3 rounded-full hover:bg-gray-100 flex items-center justify-center gap-2"
            >
              <img src={google} alt="Google" className="w-5 h-5" />
              Se connecter avec Google
            </button>
          </form>

          <p className="text-md text-center text-gray-700 mt-6">
            Première visite ?{" "}
            <a
              href="/"
              className="text-orange-500 hover:text-orange-600 font-semibold"
            >
              Créez un compte ici
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Connect;
