import { useState } from "react";
import StarRatings from "react-star-ratings";
import { Card, CardBody, Row } from "reactstrap";
import { motion, AnimatePresence } from "framer-motion";
import { clothingfewCategories, productsData } from "@/Mock/Products";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const [active, setActive] = useState<string | null>("T-shirts");
  const [showFilters, setShowFilters] = useState(true);

  const filterProductions =
    active !== null
      ? productsData.filter((product) => product.category === active)
      : [];

  return (
    <div className=" py-10 px-4">
      <div className="flex flex-col items-center gap-6">
        {/* Bouton SVG */}
        <div
          onClick={() => setShowFilters((prev) => !prev)}
          className="cursor-pointer bg-gray-200 p-2 rounded-full border-2 border-gray-900 hover:bg-slate-900 hover:text-white transition block md:hidden "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </div>

        {/* Catégories animées */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              {clothingfewCategories.map((cat) => (
                <motion.div
                  key={cat}
                  className={`border-2 border-gray-900 px-6 py-2 font-semibold rounded-full  shadow-md" ${
                    active === cat
                      ? "bg-slate-900 text-white"
                      : "hover:bg-gray-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActive(cat)}
                >
                  {cat}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Barre de catégories */}
      {/* <div className="flex  justify-center mb-10">
        <div className="flex  md:flex-row gap-4 justify-center">
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0,  x: -20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                {clothingfewCategories.map((category) => (
                  <div
                    key={category}
                    className={`border-2 border-gray-900 px-8 py-2 font-semibold rounded-full cursor-pointer transition duration-300 ease-in-out ${
                      active === category
                        ? "bg-slate-900 text-white"
                        : "hover:bg-gray-200"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setActive(category)}
                  >
                    {category}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence> */}
      {/* Icône de filtre */}
      {/* <div className="flex items-center justify-center px-2 bg-gray-200 border-2 border-gray-900 font-semibold hover:text-white hover:bg-slate-900 rounded-full cursor-pointer transition duration-300 ease-in-out"           onClick={() => setShowFilters((prev) => !prev)}
>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          </div>
        </div> */}
      {/* </div> */}
      <div className="mt-8" >
        <Row className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6">
          {filterProductions.map((product) => (
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
  );
};

export default ProductComponent;
