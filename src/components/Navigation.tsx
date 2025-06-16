import { ShoppingBagIcon } from "@heroicons/react/16/solid";
import { FC } from "react";
import logo from "../assets/images/LOGO.png";

import {
  HomeIcon,
  AlignJustify,
  PersonStanding,
  FileUser,
  ShoppingCart,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface HomeNavBarProps {
  value?: number | null;
}

const navItems = [
  {
    name: "Shop",
    link: "/products/category/T-shirt",
    icon: <ShoppingBagIcon className="h-5 w-5" />,
  },
  {
    name: "C-Box",
    link: "/customer",
    icon: <PersonStanding className="h-5 w-5" />,
  },
  { name: "Contact", link: "/contact", icon: <FileUser className="h-5 w-5" /> },
];

const Navigation: FC<HomeNavBarProps> = ({ value }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="relative">
      <div className="relative z-10 container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        {/* <p className="text-2xl font-bold text-white">Duffet</p> */}
        <Link to={"/"}>
          <img src={logo} alt="logo" className="h-16 w-auto rounded-full" />
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/"
            className={`flex items-center font-semibold gap-2 py-2 px-4 rounded-full transition ${
              isActive("/")
                ? "bg-white text-black"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            <HomeIcon className="h-5 w-5" />
            Home
          </Link>

          {navItems.map((nav, index) => (
            <Link
              key={index}
              to={nav.link}
              className={`flex items-center gap-2 py-2 px-4 rounded-full transition ${
                isActive(nav.link)
                  ? "bg-white text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {nav.icon} {nav.name}
            </Link>
          ))}

          <Link
            to="/product/cart"
            className="flex items-center font-semibold gap-2 py-2 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 transition"
          >
            <ShoppingCart className="h-5 w-5" /> {value}
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md bg-white/20 text-white"
          >
            {isOpen ? (
              <X
                className={`h-6 w-6 transform transition-transform duration-300 ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
              />
            ) : (
              <div className="flex items-center gap-1">
                <AlignJustify className="h-6 w-6" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-70 text-white py-4 space-y-2 px-6 z-10">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`block py-2 px-3 rounded ${
              isActive("/") ? "bg-white text-black  " : "hover:bg-white/20"
            }`}
          >
            Home
          </Link>
          {navItems.map((nav, idx) => (
            <Link
              key={idx}
              to={nav.link}
              onClick={() => setIsOpen(false)}
              className={`block py-2 px-3 rounded ${
                isActive(nav.link) ? "bg-white text-black" : "hover:bg-white/20"
              }`}
            >
              {nav.name}
            </Link>
          ))}
          <Link
            to="/product/cart"
            onClick={() => setIsOpen(false)}
            className="block py-2 px-3 rounded hover:bg-white/20"
          >
            Cart (10)
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navigation;
