import product1 from "../../src/assets/product/img-1.png";

import product2 from "../../src/assets/product/img-2.png";
import product3 from "../../src/assets/product/img-3.png";
import product4 from "../../src/assets/product/img-4.png";
import product5 from "../../src/assets/product/img-5.png";
import product6 from "../../src/assets/product/img-6.png";
import Pro12b from "../../src/assets/product/Pro-12b.png";
import Pro17 from "../../src/assets/product/Pro-17.png";
import Pro17a from "../../src/assets/product/Pro-17a.png";


export const productsData = [
  {
    id: 1,
    image: product1,
    name: "Half_sleeve_T-shirt",
    link: "#",
    category: "T-shirts",
    rating: 5,
    oldPrice: 500,
    newPrice: 450,
    isOffer: true,
    offer: 5,
    reviews: 0,
    subImage: [product1, product6, product2],
    specification: [
      { type: "Category", value: "T-shirt" },
      { type: "Brand", value: "Levis" },
      { type: "Size", value: "M" },
      { type: "Color", value: "Red" },
    ],

    features: [
      { icon: "fa fa-caret-right", type: "Fit", value: "Regular fit" },
      { icon: "fa fa-caret-right", type: "", value: "Highest quality fabric" },
      {
        icon: "fa fa-caret-right",
        type: "",
        value: "Suitable for all weather condition",
      },
      {
        icon: "fa fa-caret-right",
        type: "",
        value: "Excellent Washing and Light Fastness",
      },
    ],
    colorOptions: [
      { image: product1, color: "Red" },
      { image: product2, color: "Black" },
    ],
  },
  {
    id: 2,
    image: product2,
    name: "Light blue T-shirt",
    link: "#",
    category: "T-shirts",
    rating: 4,
    oldPrice: 225,
    newPrice: 175,
    isOffer: true,
    offer: 30,
    reviews: 0,
    subImage: [product2, product5, product6],
    specification: [
      { type: "Category", value: "T-shirt" },
      { type: "Brand", value: "Levis" },
      { type: "Size", value: "L" },
      { type: "Color", value: "Light blue" },
    ],
    features: [
      { icon: "fa fa-caret-right", type: "Fit", value: "Regular fit" },
      { icon: "fa fa-caret-right", type: "", value: "Highest quality fabric" },
      {
        icon: "fa fa-caret-right",
        type: "",
        value: "Suitable for all weather condition",
      },
      {
        icon: "fa fa-caret-right",
        type: "",
        value: "Excellent Washing and Light Fastness",
      },
    ],
    colorOptions: [
      { image: product2, color: "blue" },
      { image: product5, color: "Pink" },
    ],
  },
  {
    id: 3,
    image: product3,
    name: "Black Color T-shirt",
    link: "#",
    category: "T-shirts",
    rating: 4,
    oldPrice: 177,
    newPrice: 152,
    isOffer: true,
    offer: 10,
    reviews: 0,
    subImage: [product3, product1, product6],
    specification: [
      { type: "Category", value: "T-shirt" },
      { type: "Brand", value: "Levis" },
      { type: "Size", value: "XL" },
      { type: "Color", value: "Black" },
    ],
    features: [
      { icon: "fa fa-caret-right", type: "Fit", value: "Regular fit" },
      { icon: "fa fa-caret-right", type: "", value: "Highest quality fabric" },
      {
        icon: "fa fa-caret-right",
        type: "",
        value: "Suitable for all weather condition",
      },
      {
        icon: "fa fa-caret-right",
        type: "",
        value: "Excellent Washing and Light Fastness",
      },
    ],
    colorOptions: [
      { image: product3, color: "Black" },
      { image: product1, color: "Red" },
    ],
  },
  {
    id: 4,
    image: product4,
    name: "Hoodie (Blue)",
    link: "#",
    category: "Hoodies",
    rating: 3,
    oldPrice: 150,
    newPrice: 145,
    reviews: 0,
    offer: 20,
    subImage: [product1, product4, Pro12b],
    specification: [
      { type: "Category", value: "T-shirt" },
      { type: "Brand", value: "Levis" },
      { type: "Size", value: "M" },
      { type: "Color", value: "Blue" },
    ],
    features: [
      { icon: "fa fa-caret-right", type: "Fit", value: "Regular fit" },
      { icon: "fa fa-caret-right", type: "", value: "Highest quality fabric" },
      {
        icon: "fa fa-caret-right",
        type: "",
        value: "Suitable for all weather condition",
      },
      {
        icon: "fa fa-caret-right",
        type: "",
        value: "Excellent Washing and Light Fastness",
      },
    ],
    colorOptions: [
      { image: product4, color: "Light Green" },
      { image: product1, color: "Red" },
    ],
  },
  {
    id: 5,
    image: product5,
    name: "Half sleeve T-Shirt",
    link: "#",
    category: "T-shirts",
    rating: 3,
    oldPrice: 177,
    newPrice: 152,
    isOffer: true,
    offer: 40,
    reviews: 5,
    subImage: [product5, product2, product1],
    specification: [
      { type: "Size", value: "S" },
      { type: "Color", value: "Coral" },
    ],
    features: [
      { icon: "fa fa-caret-right", type: "Fit", value: "Regular fit" },
      { icon: "fa fa-caret-right", type: "", value: "Highest quality fabric" },
      {
        icon: "fa fa-caret-right",
        type: "",
        value: "Suitable for all weather condition",
      },
      {
        icon: "fa fa-caret-right",
        type: "",
        value: "Excellent Washing and Light Fastness",
      },
    ],
    colorOptions: [
      { image: product1, color: "Red" },
      { image: product2, color: "Blue" },
    ],
  },
  {
    id: 6,
    image: product6,
    name: "Green color T-shirt",
    link: "#",
    category: "T-shirts",
    rating: 2,
    oldPrice: 200,
    newPrice: 100,
    isOffer: true,
    offer: 30,
    reviews: 10,
    subImage: [Pro17, Pro17a, product6],
    specification: [
      { type: "Category", value: "T-shirt" },
      { type: "Brand", value: "Levis" },
      { type: "Size", value: "L" },
      { type: "Color", value: "Green" },
    ],
    features: [
      { icon: "fa fa-caret-right", type: "Fit", value: "Regular fit" },
      { icon: "fa fa-caret-right", type: "", value: "Highest quality fabric" },
      {
        icon: "fa fa-caret-right",
        type: "",
        value: "Suitable for all weather condition",
      },
      {
        icon: "fa fa-caret-right",
        type: "",
        value: "Excellent Washing and Light Fastness",
      },
    ],
    colorOptions: [
      { image: product6, color: "Green" },
      { image: Pro17, color: "Light Green" },
    ],
  },
];

export  const clothingfewCategories = [
  "T-shirts",
  "Chemises",
  "Pantalons",
  "Jeans",
  "Shorts",
  "Hoodies",
];

export  const clothingCategories = [
  "T-shirt",
  "Chemise",
  "Pantalon",
  "Jeans",
  "Short",
  "Jupe",
  "Robe",
  "Pull",
  "Sweat-shirt",
  "Veste",
  "Manteau",
  "Costume",
  "Accessoires",
  "Chaussures",
  "Baskets"
];