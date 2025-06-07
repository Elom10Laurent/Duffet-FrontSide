import HomeNavBar from "@/components/HomeNavBar";
// import React from 'react'
import ProductPic from "@/assets/images/T-shirt.jpeg";
import { Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/Mock/Products";
import StarRatings from "react-star-ratings";
import { Card, CardBody, Row } from "reactstrap";
import { useState } from "react";
import Pagination from "@/components/pagination";
import Footer from "@/components/Footer";

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);
  const indexOfLastProducts = currentPage * productsPerPage;
  const indexOfFirstProducts = indexOfLastProducts - productsPerPage;
  const currentProducts = productsData.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );
  return (
    <div>
      <div
        className="bg-[#f7c002] bg-cover bg-center w-full flex flex-col "
        style={{ backgroundImage: `url(${ProductPic})` }}
      >
        <div className="relative ">
          <HomeNavBar value={0} />
        </div>
        <div className="container mx-auto px-6 flex relative items-center pb-8">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative pt-14 z-20">
            {/* <span className="w-20 h-2 bg-gray-800 dar:bg-white mb-12"></span> */}
            <h1 className="font-bebas-neue uppercase text-4xl font-black flex flex-col leading-none dar:text-white text-gray-800">
              T-shirt
            </h1>
            <p className="text-xl sm:text-md text-gray-700 dar:text-white">
              Know your market, grow your market and foster loyal connections
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="uppercase flex gap-2 py-2  rounded-lg font-extrabold  hover:text-[#cc4a2b] text-[#21807e]  border-2 border-transparent  text-md "
              >
                <Instagram /> <Facebook />
              </a>
            </div>
          </div>
          {/* <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="https://lelapa.ai/wp-content/uploads/2023/11/tree2-768x344.png.webp"
                className="transition-transform duration-500 ease-in-out hover:scale-105"
                alt="Hero Illustration"
              />
            </div>
          </div> */}
        </div>
      </div>

      <div className=" container mx-auto mt-8">
        <Row className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6">
          {currentProducts.map((product) => (
            <Card
              key={product.id}
              className="w-full bg-white rounded-lg shadow-lg"
            >
              {" "}
              <Link to={`/Product/${product.id}/${product.category}`}>
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
                      alt="Product"
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
        <Row>
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={productsData.length}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </Row>
      </div>

      <Footer />
    </div>
  );
};

export default ProductsPage;
