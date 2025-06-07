import { ShoppingCart } from "lucide-react";
import { useState, useEffect, FC } from "react";
import { Link } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

interface HomeNavBarProps {
  value: number;
}

const menuItems = [
  { name: "Home", href: "/", current: true },
  { name: "Shop", href: "/products/category", current: false },
  // { name: "Local", href: "#", current: false },
  { name: "Customer Box", href: "customer", current: false },
  // { name: "...", href: "#", current: false },
  { name: "Contact", href: "/contact", current: false },
];

const HomeNavBar: FC<HomeNavBarProps> = ({ value }) => {
  const [active, setActive] = useState("Shop");
  const [emoji, setEmoji] = useState("😎");

  useEffect(() => {
    setEmoji(active === "Customer Box" ? "😜" : "😎");
  }, [active]);

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
      <Disclosure as="nav" className="">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between mt-8">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start  ">
              <div className="flex shrink-0 items-center justify-around">
                <Link to="/" className="text-4xl font-bold">
                  Duffet
                </Link>
              </div>
              <div className="hidden w-full sm:ml-6 sm:block">
                <div className="flex justify-center w-full space-x-10">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={active === item.name ? "page" : undefined}
                      className={`cursor-pointer  border-b-2 transition-all text-xl mt-2 ${
                        active === item.name
                          ? "border-gray-900 font-bold"
                          : "border-transparent hover:border-gray-500"
                      }`}
                      onClick={() => setActive(item.name)}
                    >
                      {item.name} {item.name === "Customer Box" ? emoji : ""}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <p className="hover:text-gray-700 cursor-pointer">
                {" "}
                <Link
                  to="/product/cart"
                  className="flex gap-1 justify-center items-center"
                >
                  <ShoppingCart className=" sm:block hidden " />
                  {value}
                </Link>{" "}
              </p>
              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full text-sm">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <p className="hover:text-gray-700 cursor-pointer text-xl">
                      My Name
                    </p>
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Your Profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Sign out
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 bg-orange-100 px-2 pt-2 pb-3">
            {menuItems.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-orange-400 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium   "
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
      {/* <nav className="mx-20 flex items-center justify-between py-4">
        {/* <Link to="/" className="text-xl font-bold">
          Duffet
        </Link> */}

      {/* Menu de navigation */}
      {/* <ul className="flex space-x-9 items-center text-lg">
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
              {item} {item === "Local " ? emoji : ""}
            </li>
          ))}
         
        </ul> */}

      {/* Liens utilisateur */}
      {/* <ul className="flex space-x-6 text-lg">
          <li className="hover:text-gray-700 cursor-pointer"> <Link to="/product/cart" className="flex gap-1 justify-center items-center"> <ShoppingCart/>{value}</Link>   </li>
          <li className="hover:text-gray-700 cursor-pointer">My Name</li>
        </ul> 
      </nav> */}
    </div>
  );
};

export default HomeNavBar;
