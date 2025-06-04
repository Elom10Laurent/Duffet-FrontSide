import React from "react";
import image from "../../assets/images/RegistImg.jpg";

const Register = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen flex justify-center items-center md:items-start"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="relative bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center  md:p-6 shadow-lg overflow-hidden">
          <div className="w-full max-w-md md:max-w-4xl md:max-h-full bg-white opacity-90 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg overflow-y-auto md:px-28 ">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4 md:mb-10 text-center">
              Duffet
            </h1>
            <h2 className="text-3xl md:text-6xl font-semibold text-gray-700 mb-2 text-center">
              Inscription
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Créez votre compte pour accéder à nos offres et nouveautés.
            </p>

            <form className="space-y-6">
              <div>
                <label
                  className="block text-gray-700 font-medium mb-1"
                  htmlFor="fullName"
                >
                  Nom complet
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Votre nom complet"
                  className="w-full p-4 rounded-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

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
                  placeholder="Créez un mot de passe"
                  className="w-full p-4 rounded-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 font-medium mb-1"
                  htmlFor="confirmPassword"
                >
                  Confirmez le mot de passe
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirmez votre mot de passe"
                  className="w-full p-4 rounded-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition duration-200"
              >
                Créer un compte
              </button>
            </form>

            <p className="text-md text-center text-gray-700 mt-6">
              Vous avez déjà un compte ?{" "}
              <a
                href="/login"
                className="text-orange-500 hover:text-orange-600 font-semibold"
              >
                Connectez-vous ici
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
