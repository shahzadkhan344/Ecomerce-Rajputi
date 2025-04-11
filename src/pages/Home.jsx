import React from 'react'
import Container from '../components/Container'
import Slider from './Slider'
import { FaDotCircle } from 'react-icons/fa'
import { FaCartArrowDown, FaTruck } from 'react-icons/fa'
import { FaMobileRetro } from 'react-icons/fa6'
import { MdOutlineSecurity } from 'react-icons/md'

export default function Home() {
  return (
    <>
      <div className=''>

        <Slider />
        <div className="my-5 lg:w-[1150px] mx-auto w-full p-2">
          <h1 className='text-center text-2xl font-bold my-4'>Shop By Category</h1>
          <div className='grid gap-3 lg:grid-cols-4 grid-cols-2'>
            <div className='flex flex-col items-center gap-4'>
             <a href="/saress"> <img src="https://onlinebandhej.com/cdn/shop/files/Saree_584430f7-741b-462c-b235-91c3039eeea8.png?v=1731309585" alt="" /></a>
              <span>Saree</span>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <a href="/lehnga"><img src="https://onlinebandhej.com/cdn/shop/files/Lehenga_2d251dd9-5d98-4509-8482-4b1b6e69534e_550x.png?v=1731309592" alt="" /></a>
              <span>Lehenga</span>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <a href="/chunripila"><img src="https://onlinebandhej.com/cdn/shop/files/Peela_Chunri_35beddcb-ae62-45f4-8dfd-5940654914e5_550x.png?v=1731309592" alt="" /></a>
              <span>Chunri Pila</span>
            </div>
            <div className='flex flex-col items-center gap-4'>
             <a href="/suits"> <img src="https://onlinebandhej.com/cdn/shop/files/Salwar_Suit_3a57050d-af6e-4c57-afbb-b0b2a0e9d31e_550x.png?v=1731309592" alt="" /></a>
              <span>Salwar Suit</span>
            </div>
          </div>
          <div className='grid my-5 gap-3 lg:grid-cols-4 grid-cols-2'>
            <div className='flex flex-col items-center gap-4'>
             <a href="/kurtis"> <img src="https://onlinebandhej.com/cdn/shop/files/Kurtu_697ef5d5-4967-42b0-9cdd-bba93475b1aa_550x.png?v=1731309592" alt="" /></a>
              <span>Kurti</span>
            </div>
            <div className='flex flex-col items-center gap-4'>
             <a href="/dupatta"> <img src="https://onlinebandhej.com/cdn/shop/files/Dupatta_29009c5d-59d9-4f4c-aa34-6bdbea76484f_550x.png?v=1731309592" alt="" /></a>
              <span>Dupatta</span>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <img src="https://onlinebandhej.com/cdn/shop/files/Broach_Odhana_8b2042b3-265a-4cd1-bb28-72b25805cada_550x.png?v=1731309592" alt="" />
              <span>Broach Odhna</span>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <img src="https://onlinebandhej.com/cdn/shop/files/Gift_7066160b-687a-47d2-ae92-ac38db7f8b36_550x.png?v=1731309591" alt="" />
              <span>Return Gifts  </span>
            </div>
          </div>
        </div>

      </div>
      <div className=" w-full mx-auto">
        <div className="relative overflow-hidden rounded-lg shadow-md">
          <img src="https://onlinebandhej.com/cdn/shop/files/Bandhani_Banner_New_copy_291d72bf-fde2-42b8-96a1-dfed17c6c2b5_2048x.jpg?v=1731309785" alt="" className="w-full lg:h-screen h-full object-cover transition duration-500" />
          <div className="anuj left-[10%]" style={{ top: '-10px', animationDelay: '0s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[20%]" style={{ top: '-10px', animationDelay: '0.3s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[30%]" style={{ top: '-10px', animationDelay: '0.6s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[40%]" style={{ top: '-10px', animationDelay: '0.9s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[50%]" style={{ top: '-10px', animationDelay: '1.2s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[60%]" style={{ top: '-10px', animationDelay: '1.5s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[70%]" style={{ top: '-10px', animationDelay: '1.8s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[80%]" style={{ top: '-10px', animationDelay: '2.1s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[90%]" style={{ top: '-10px', animationDelay: '2.4s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[100%]" style={{ top: '-10px', animationDelay: '2.7s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[20%]" style={{ top: '-10px', animationDelay: '0.3s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[10%]" style={{ top: '-10px', animationDelay: '0s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[30%]" style={{ top: '-10px', animationDelay: '0.6s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[50%]" style={{ top: '-10px', animationDelay: '1.2s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[40%]" style={{ top: '-10px', animationDelay: '0.9s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[70%]" style={{ top: '-10px', animationDelay: '1.8s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[60%]" style={{ top: '-10px', animationDelay: '1.5s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[90%]" style={{ top: '-10px', animationDelay: '2.4s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[100%]" style={{ top: '-10px', animationDelay: '2.7s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[80%]" style={{ top: '-10px', animationDelay: '2.1s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>

        </div>
      </div>
      <Container>
        <div className="my-5 lg:w-[1150px] mx-auto w-full p-2">
          <div className='grid gap-3 grid-cols-4'>
            <div className='flex flex-col items-center gap-4'>
              <img src="https://onlinebandhej.com/cdn/shop/files/499-2_c2eb7b1f-7895-4ffd-a9b2-8790a93cc4d0.png?v=1731309820" alt="" />
            </div>
            <div className='flex flex-col items-center gap-4'>
              <img src="https://onlinebandhej.com/cdn/shop/files/999-2_1898c9cc-880d-4b1f-a03e-2a1547bd0197.png?v=1731309820" alt="" />
            </div>
            <div className='flex flex-col items-center gap-4'>
              <img src="https://onlinebandhej.com/cdn/shop/files/2999-3_a6faa96e-e8d5-4794-a157-834258d131d8.png?v=1731309820" alt="" />
            </div>
            <div className='flex flex-col items-center gap-4'>
              <img src="https://onlinebandhej.com/cdn/shop/files/3000-2_341d83ad-1e7a-4d37-b072-2deea24e795d.png?v=1731309820" alt="" />
            </div>
          </div>
          <h1 className='text-center text-2xl font-bold my-4'>Shop By Choice</h1>
          <div className='grid my-5 gap-3 grid-cols-3'>
            <div className='flex flex-col items-center gap-4'>
              <img src="https://onlinebandhej.com/cdn/shop/files/Bandhani_Saree_fdf682b1-1b6e-4b42-b16f-4d7a9ce45ce4.png?v=1731309902" alt="" />
              <span>Bandhani Saree</span>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <img src="https://onlinebandhej.com/cdn/shop/files/Ajarakh_1773fb8b-a025-4b14-a0f3-48e64107f7c6.png?v=1731309902" alt="" />
              <span>Ajarakh Saree</span>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <img src="https://onlinebandhej.com/cdn/shop/files/Gotta_Patti_caa4a055-d165-4f9f-a0b9-91c709e42369.png?v=1731309902" alt="" />
              <span>Gotta Patti Saree</span>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <img src="https://onlinebandhej.com/cdn/shop/files/Patola_6cf3e43a-353b-472c-bd0d-73996cd31ceb.png?v=1731309903" alt="" />
              <span>Patola Saree  </span>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <img src="https://onlinebandhej.com/cdn/shop/files/Leheriya_2317e0c9-0956-48c3-9301-e030ba7f159c.png?v=1731309903" alt="" />
              <span>Leheriya Saree</span>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <img src="https://onlinebandhej.com/cdn/shop/files/Gajji_Silk_fca53998-33e6-4f38-a172-4a12dddee605.png?v=1731309903" alt="" />
              <span>Gajji Silk Saree</span>
            </div>
          </div>
        </div>
      </Container>
      <div className="w-full mx-auto">
        <div className="relative overflow-hidden rounded-lg shadow-md">
          <img src="https://onlinebandhej.com/cdn/shop/files/Untitled-1_5378efdd-4cb6-47bd-bedd-12d9d97511cf_2048x.jpg?v=1731309969" className='w-full' />
          <div className="anuj left-[10%]" style={{ top: '-10px', animationDelay: '0s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[20%]" style={{ top: '-10px', animationDelay: '0.3s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[30%]" style={{ top: '-10px', animationDelay: '0.6s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[40%]" style={{ top: '-10px', animationDelay: '0.9s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[50%]" style={{ top: '-10px', animationDelay: '1.2s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[60%]" style={{ top: '-10px', animationDelay: '1.5s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[70%]" style={{ top: '-10px', animationDelay: '1.8s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[80%]" style={{ top: '-10px', animationDelay: '2.1s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[90%]" style={{ top: '-10px', animationDelay: '2.4s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[100%]" style={{ top: '-10px', animationDelay: '2.7s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>

          <div className="anuj left-[20%]" style={{ top: '-10px', animationDelay: '0.3s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[10%]" style={{ top: '-10px', animationDelay: '0s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[30%]" style={{ top: '-10px', animationDelay: '0.6s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[50%]" style={{ top: '-10px', animationDelay: '1.2s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[40%]" style={{ top: '-10px', animationDelay: '0.9s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[70%]" style={{ top: '-10px', animationDelay: '1.8s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[60%]" style={{ top: '-10px', animationDelay: '1.5s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[90%]" style={{ top: '-10px', animationDelay: '2.4s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[100%]" style={{ top: '-10px', animationDelay: '2.7s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>
          <div className="anuj left-[80%]" style={{ top: '-10px', animationDelay: '2.1s' }}><span className='block w-5 h-5 rounded-full bg-white'></span></div>

        </div>
      </div>
      <Container>
        <div className="my-5 lg:w-[1150px] mx-auto w-full p-2">
          <h1 className='text-center text-2xl font-bold my-4'>Our Designer Collections</h1>
          <div className='grid my-5 gap-3 lg:grid-cols-4 grid-cols-2'>
            <div className='flex flex-col items-center gap-4'>
              <img src="https://onlinebandhej.com/cdn/shop/files/01_57ce0882-6f3f-45a2-8a49-af17a9378546.png?v=1731310039" alt="" />
              <span>designer Bridal Lehenga</span>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <img src="https://onlinebandhej.com/cdn/shop/files/02_342a984a-431d-497f-9bd6-b2faf83fe5d8_550x.png?v=1731310039" alt="" />
              <span>Designer Lehenga</span>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <img src="https://onlinebandhej.com/cdn/shop/files/03_dbf0a42c-2bb2-4126-b075-897d6fde1c6f_550x.png?v=1731310039" alt="" />
              <span>Designer Saree</span>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <img src="https://onlinebandhej.com/cdn/shop/files/04_fa540f3f-9ba9-4162-b99d-684bea3142f5_550x.png?v=1731310039" alt="" />
              <span>Designer Saree</span>
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-red-200">
        <Container>
          <div className="lg:w-[1140px] mx-auto w-full">
            <div className='grid md:grid-cols-4 grid-cols-1 gap-4 py-5 px-4'>
              <div className='flex flex-col justify-center gap-3  md:items-center'>
                <FaTruck className='text-[30px]' />
                <strong>FREE SHIPPING</strong>
                <p>For Orders Above ₹ 499</p>
              </div>
              <div className='flex flex-col justify-center gap-3 md:items-center'>
                <FaCartArrowDown className='text-[30px]' />
                <strong>EASY RETURNS</strong>
                <p>In case of any defects</p>
              </div>
              <div className='flex flex-col justify-center gap-3 md:items-center'>
                <FaMobileRetro className='text-[30px]' />
                <strong>CUSTOMER SUPPORT</strong>
                <p>24/7 HRS, MON-SUN</p>
              </div>
              <div className='flex flex-col justify-center gap-3 md:items-center'>
                <MdOutlineSecurity className='text-[30px]' />
                <strong>CASH ON DELIVERY</strong>
                <p>On Limited Products</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>

  )
}
