
import image from "@/assets/product/img-1.png"
import image1 from "@/assets/product/Pro-8.png"
import image3 from "@/assets/product/Pro-12b.png"
import { Link } from 'react-router-dom'


const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: image,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      }, 
      {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: image1,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: image3,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
  ]
const CategoryProductMatch = () => {
    return (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">les produits similaires</h2>
    
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="group relative">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )
}

export default CategoryProductMatch

