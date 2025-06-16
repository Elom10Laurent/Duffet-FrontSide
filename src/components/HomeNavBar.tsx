import Navigation from "./Navigation";

const HomeNavBar = () => {
  return (
    <div className=" relative mb-14">
      {/* Barres décoratives */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      <div className="flex flex-col space-y-2">
        <div className="h-8 bg-gray-900"></div>
        <div className="h-6 bg-gray-900"></div>
        <div className="h-4 bg-gray-900"></div>
        <div className="h-2 bg-gray-900"></div>
        <div className="h-1 bg-gray-900"></div>
      </div>
      <Navigation value={0} />
    </div>
  );
};

export default HomeNavBar;
