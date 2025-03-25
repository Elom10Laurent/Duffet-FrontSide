import PayementCard from '@/components/PayementCard'
import ShippingCard from '@/components/ShippingCard'

const ShippingPage = () => {
  return (
    <div className='flex justify-center flex-col md:flex-row gap-6  '>
        <ShippingCard/>
        <PayementCard />      
    </div>
  )
}

export default ShippingPage
