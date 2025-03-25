import { ShoppingCart } from "lucide-react";
import { useState, useEffect, FC } from "react";
import { Link } from "react-router-dom";


interface HomeNavBarProps {
  value: number; 
}

const HomeNavBar: FC<HomeNavBarProps> = ({ value }) => {
  const [active, setActive] = useState("Shop");
  const [emoji, setEmoji] = useState("😎");

  useEffect(() => {
    setEmoji(active === "Customer Box" ? "😜" :"😎" );
  }, [active]);

  const menuItems = ["Shop", "Collections", "Customer Box", "...", "Contact"];

  return (
    <div className="mb-14">
      {/* Barres décoratives */}
      <div className="flex flex-col space-y-2">
        <div className="h-8 bg-gray-900"></div>
        <div className="h-6 bg-gray-900"></div>
        <div className="h-4 bg-gray-900"></div>
        <div className="h-2 bg-gray-900"></div>
        <div className="h-1 bg-gray-900"></div>
      </div>

      {/* Navigation */}
      <nav className="mx-20 flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-bold">
          Duffet
        </Link>

        {/* Menu de navigation */}
        <ul className="flex space-x-9 items-center text-lg">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer border-b-2 transition-all ${
                active === item
                  ? "border-gray-900 font-bold"
                  : "border-transparent hover:border-gray-500"
              }`}
              onClick={() => setActive(item)}
            >
              {item} {item === "Customer Box" ? emoji : ""}
            </li>
          ))}
         
        </ul>

        {/* Liens utilisateur */}
        <ul className="flex space-x-6 text-lg">
          <li className="hover:text-gray-700 cursor-pointer"> <Link to="/product/cart" className="flex gap-1 justify-center items-center"> <ShoppingCart/>{value}</Link>   </li>
          <li className="hover:text-gray-700 cursor-pointer">My Name</li>
        </ul>
      </nav>
    </div>
  );
};

export default HomeNavBar;

