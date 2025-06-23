// import React from 'react'
import Footer from "@/components/Footer";
import HomeNavBar from "@/components/HomeNavBar";
import { Textarea } from "@headlessui/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Facebook, Instagram } from "lucide-react";


const ContactPage = () => {
  return (
    <div>
      <div className="bg-cover bg-center w-full flex flex-col pb-10 bg-opacity-70">
       <HomeNavBar/>

        <div className="container mx-auto md:flex  pt-8   text-center md:text-start px-5 md:px-0">
          <div className="flex flex-col w-full md:w-1/2  text-gray-900">
            <h1 className="font-bebas-neue uppercase text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6 ">
              Une question ou un souci ? Faites-nous en part
            </h1>
            <p className="text-xl text-gray-900/90 mb-10 max-w-xl">
              Nous sommes a votre disposition a tous moment pour vous sevrir
            </p>
            <h2 className="  font-extrabold text-2xl">Ecrivrez nous</h2>
            <p> Notre super equipe est la pour vous</p>
            <p className="font-extrabold mb-4  "> duffetshopping@gmail.com </p>
            <span className="flex gap-4 justify-center mb-20  ">
              <Instagram  />
              <Facebook />
            </span>
          </div>
          <form className="space-y-8 w-full md:w-1/2">
            {/* Nom + Prénom */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex items-center w-full md:w-1/2 py-4 px-4 rounded-full bg-black/10 backdrop-blur-md border border-black/30 text-gray-900 shadow-md">
                <input
                  type="text"
                  placeholder="Nom"
                  className="bg-transparent w-full focus:outline-none placeholder-black/70 text-sm"
                />
              </div>

              <div className="flex items-center w-full md:w-1/2 py-4 px-4 rounded-full bg-black/10 backdrop-blur-md border border-black/30 text-gray-900 shadow-md">
                <input
                  type="text"
                  placeholder="Prénom"
                  className="bg-transparent w-full focus:outline-none placeholder-black/70 text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center w-full py-4 px-4 rounded-full bg-black/10 backdrop-blur-md border border-black/30 text-gray-900 shadow-md">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent w-full focus:outline-none placeholder-black/70 text-sm"
              />
            </div>

            {/* Message */}
            <div className="flex items-center h-60 w-full px-4 py-4 rounded-3xl bg-black/10 backdrop-blur-md border border-black/30 text-gray-900 shadow-md">
              <Textarea
                placeholder="Votre message"
                className="bg-transparent w-full h-full resize-none focus:outline-none placeholder-black/70 text-sm"
              />
            </div>

            {/* Bouton Soumettre */}
            <button className="flex items-center font-semibold justify-center w-36 gap-2 py-2 px-3 rounded-full bg-black/10 backdrop-blur-md border border-black/30 text-gray-900 shadow-md hover:bg-black/20 transition">
              Soumettre
              <ArrowRightIcon className="h-5 w-5 text-gray-900" />
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
