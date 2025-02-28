const Footer = () => {
  return (
    <div className="bg-orange-100">
      <div className="flex flex-col space-y-2">
        <div className="h-4 bg-gray-900 w-full"></div>
        <div className="h-2 bg-gray-900 w-full"></div>
        <div className="h-1 bg-gray-900 w-full"></div>
      </div>
      <div className="container mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-800">
        <div>
          <h4 className="font-bold text-lg mb-3">Menu</h4>
          <ul className="space-y-2">
            <li className="hover:text-gray-600 cursor-pointer">Shop</li>
            <li className="hover:text-gray-600 cursor-pointer">Produit</li>
            <li className="hover:text-gray-600 cursor-pointer">Closet</li>
            <li className="hover:text-gray-600 cursor-pointer">Short</li>
            <li className="hover:text-gray-600 cursor-pointer">Collab</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-3">Categories</h4>
          <ul className="space-y-2">
            <li className="hover:text-gray-600 cursor-pointer">Hommes</li>
            <li className="hover:text-gray-600 cursor-pointer">Femmes</li>
            <li className="hover:text-gray-600 cursor-pointer">enfants</li>
            <li className="hover:text-gray-600 cursor-pointer">Accessoires</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-3">Contact</h4>
          <p>Email: duffetshopping@gmail.com</p>
          <p>Phone: +228  91579558</p>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <p className="text-2xl font-extrabold text-gray-900">Duffet</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
