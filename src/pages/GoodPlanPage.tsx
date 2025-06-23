import ProductPic from "@/assets/images/T-shirt.jpeg";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { FilterIcon, SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardBody, Row } from "reactstrap";
import { productsData } from "@/Mock/Products";
import StarRatings from "react-star-ratings";
import Footer from "@/components/Footer";
import HomeNavBar from "@/components/HomeNavBar";


const GoodPlanPage = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center w-full flex flex-col pb-10"
        style={{backgroundImage: `url(${ProductPic})`}}
      >
        <HomeNavBar/>

        <div className="container mx-auto  flex flex-col relative ">
          <div className="flex flex-col relative pt-8 z-20">
            {/* <span className="w-20 h-2 bg-gray-800 dar:bg-white mb-12"></span> */}
            <h1 className="font-bebas-neue uppercase text-4xl md:text-6xl  font-black flex flex-col leading-none dar:text-white text-gray-800">
              Customer Box
            </h1>
            <p className="text-md sm:text-xl text-gray-700 dar:text-white">
              Le Vous trouverez de Bon plans et nos partenariat pour plus.
              N'hesitez pas à cliquer
            </p>
            <div className=" bg-white rounded-2xl  px-6  pb-10 mt-28">
              <div className=" ">
                <div className="flex items-center justify-between relative my-4">
                  <p className="text-2xl font-bold">vos offres </p>

                  <div className="flex gap-4">
                    {/* Bouton Filter */}
                    <button className="flex items-center font-semibold justify-center w-32 gap-2 py-1 px-3 rounded-full bg-black/10 backdrop-blur-md border border-black/30 text-black shadow-md hover:bg-black/20 transition">
                      <p>Filter</p>
                      <FilterIcon className="h-5 w-5" />
                    </button>

                    {/* Barre de recherche */}
                    <div className=" hidden md:flex items-center w-72 font-semibold gap-2 py-2 px-4 rounded-full bg-black/10 backdrop-blur-md border border-black/30 text-black shadow-md">
                      <SearchIcon className="h-5 w-5 text-black/60" />
                      <input
                        type="text"
                        placeholder="Recherche..."
                        className="bg-transparent focus:outline-none w-full placeholder-black/50 text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg relative group">
                  {/* Image avec position relative */}
                  <img
                    className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0"
                    alt="Sunset in the mountains"
                  />

                  {/* Badge de catégorie sur l’image */}
                  <span className="absolute top-3 right-3 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border border-white/30 shadow">
                    #Cuisine
                  </span>

                  <div className="px-6 py-4 bg-white">
                    <h2 className="font-bold text-xl text-gray-800 mb-2">
                      The Coldest Sunset
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>

                  <div className="px-6 pb-4 bg-white">
                    <button className=" flex   gap-2 items-center justify-between bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-xs font-medium mr-2 mb-2">
                      Découvrez <ArrowRightIcon className="h-4 " />
                    </button>
                  </div>
                </div>

                <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg relative group">
                  {/* Image avec position relative */}
                  <img
                    className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0"
                    alt="Sunset in the mountains"
                  />

                  {/* Badge de catégorie sur l’image */}
                  <span className="absolute top-3 right-3 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border border-white/30 shadow">
                    #Cuisine
                  </span>

                  <div className="px-6 py-4 bg-white">
                    <h2 className="font-bold text-xl text-gray-800 mb-2">
                      The Coldest Sunset
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>

                  <div className="px-6 pb-4 bg-white">
                    <button className=" flex   gap-2 items-center justify-between bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-xs font-medium mr-2 mb-2">
                      Découvrez <ArrowRightIcon className="h-4 " />
                    </button>
                  </div>
                </div>
                <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg relative group">
                  {/* Image avec position relative */}
                  <img
                    className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0"
                    alt="Sunset in the mountains"
                  />

                  {/* Badge de catégorie sur l’image */}
                  <span className="absolute top-3 right-3 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border border-white/30 shadow">
                    #Cuisine
                  </span>

                  <div className="px-6 py-4 bg-white">
                    <h2 className="font-bold text-xl text-gray-800 mb-2">
                      The Coldest Sunset
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>

                  <div className="px-6 pb-4 bg-white">
                    <button className=" flex   gap-2 items-center justify-between bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-xs font-medium mr-2 mb-2">
                      Découvrez <ArrowRightIcon className="h-4 " />
                    </button>
                  </div>
                </div>
                <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg relative group">
                  {/* Image avec position relative */}
                  <img
                    className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0"
                    alt="Sunset in the mountains"
                  />

                  {/* Badge de catégorie sur l’image */}
                  <span className="absolute top-3 right-3 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border border-white/30 shadow">
                    #Cuisine
                  </span>

                  <div className="px-6 py-4 bg-white">
                    <h2 className="font-bold text-xl text-gray-800 mb-2">
                      The Coldest Sunset
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>

                  <div className="px-6 pb-4 bg-white">
                    <button className=" flex   gap-2 items-center justify-between bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-xs font-medium mr-2 mb-2">
                      Découvrez <ArrowRightIcon className="h-4 " />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" container mx-auto mt-8">
          <Row className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsData.map((product) => (
              <Card
                key={product.id}
                className="w-full bg-white rounded-lg shadow-lg"
              >
                {" "}
                <Link to={`Product/${product.id}/`}>
                  {" "}
                  <CardBody>
                    <div className=" relative  ">
                      <div className=" flex justify-end m-3 ">
                        <span className=" absolute rounded-full bg-blue-700 text-white px-2 py-4 font-semibold ">
                          - {product.offer} %
                        </span>
                      </div>
                      <img
                        src={product.image}
                        alt={product.name}
                        className=" mx-auto"
                      />
                    </div>
                    <div className=" text-center">
                      <h4 className=" text-lg  "> {product.name} </h4>
                      <div>
                        <StarRatings
                          rating={product.rating}
                          starRatedColor="#F1B44C"
                          starEmptyColor="#74788d"
                          numberOfStars={5}
                          name="rating"
                          starDimension="14px"
                          starSpacing="1px"
                        />
                      </div>
                      <h5 className="my-0 text-gray-600">
                        <span className=" me-2 font-semibold">
                          <del>${product.oldPrice} </del>
                        </span>
                        <b className=" font-extrabold text-gray-700 ">
                          ${product.newPrice}{" "}
                        </b>
                      </h5>
                    </div>
                  </CardBody>
                </Link>
              </Card>
            ))}
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GoodPlanPage;
