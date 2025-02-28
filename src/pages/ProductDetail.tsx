import CategoryProductMatch from '@/components/CategoryProductMatch'
import Footer from '@/components/Footer'
import HomeNavBar from '@/components/HomeNavBar'
import ProductDetailCard from '@/components/ProductDetailCard'
import React from 'react'

const ProductDetail = () => {
  return (
   <div>
    <HomeNavBar/>

    <ProductDetailCard/>

    <CategoryProductMatch/>

    <Footer/>
   </div>                                        
  )
}

export default ProductDetail
