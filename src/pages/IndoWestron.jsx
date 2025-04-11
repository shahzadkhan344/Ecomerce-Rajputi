import React from 'react'
import Sidebar from '../components/Sidebar'
import Container from '../components/Container'
import SmallSidebar from '../components/SmallSidebar'
import { FaCartArrowDown, FaSearchPlus, FaStar } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'

export default function IndoWestron() {
  return (
    <Container>
      <div className='grid lg:grid-cols-4 grid-cols-1 p-2 gap-1'>
        <div className=' lg:flex hidden '>
          <Sidebar />
        </div>
        <div className="lg:hidden flex">
          <SmallSidebar />
        </div>
        <div className='lg:col-span-3 p-2'>
          <h1 className='font-bold text-[20px] uppercase'>Indo Western Dresses</h1>
          <div className="grid lg:grid-cols-4 gap-2  md:grid-cols-3 grid-cols-2 my-5">
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-02at3.02.03PM_5_350x.jpg?v=1744084784"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-02at3.02.03PM_4_350x.jpg?v=1744084784"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                     <a href="/addtocart"><FaCartArrowDown className='p-1 bg-black rounded' /></a> 
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 2220YLOR</p>
                <p>TechBro24 New Latest Georgette Fabric Cutdana kashida work indo western Dress MUL</p>
                <p className='line-through text-gray-400'>Rs. 12,112.00</p>
                <p className='text-red-600'>Rs. 7,869.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-05at4.50.36PM_350x.jpg?v=1744019686"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-05at4.50.36PM_5_350x.jpg?v=1744019686"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                    <FaCartArrowDown className='p-1 bg-black rounded' />
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 2219YKPU</p>
                <p>TechBro24 New Latest Chinon Silk Cutdana work indo western Dress MUL</p>
                <p className='line-through text-gray-400'>Rs. 11,955.00</p>
                <p className='text-red-600'>Rs. 7,769.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-05at4.44.01PM_350x.jpg?v=1744084513"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-05at4.44.01PM_1_350x.jpg?v=1744084513"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                    <FaCartArrowDown className='p-1 bg-black rounded' />
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 2214YKGY</p>
                <p>TechBro24 New Beautiful Chinon Silk Cutdana work indo western Dress MUL</p>
                <p className='line-through text-gray-400'>Rs. 10,695.00</p>
                <p className='text-red-600'>Rs. 6,949.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-05at4.39.18PM_3_350x.jpg?v=1744084713"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-05at4.39.18PM_1_350x.jpg?v=1744084713"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                    <FaCartArrowDown className='p-1 bg-black rounded' />
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 2211YKPE</p>
                <p>TechBro24 New Latest Munga silk Zardoji work indo western Dress MUL</p>
                <p className='line-through text-gray-400'>Rs. 12,128.00</p>
                <p className='text-red-600'>Rs. 7,879.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-05at4.37.33PM_350x.jpg?v=1744019732"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-05at4.37.33PM_5_350x.jpg?v=1744019732"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                    <FaCartArrowDown className='p-1 bg-black rounded' />
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 2213YKBR</p>
                <p>TechBro24 New Beautiful Munga silk Zardoji work indo western Dress MUL</p>
                <p className='line-through text-gray-400'>Rs. 15,105.00</p>
                <p className='text-red-600'>Rs. 7,549.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-02at2.47.33PM_5_350x.jpg?v=1743585493"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-02at2.47.33PM_350x.jpg?v=1743585493"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                    <FaCartArrowDown className='p-1 bg-black rounded' />
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 2215YLRA</p>
                <p>TechBro24 New Latest Chinon Silk Bollywood Gotapatti work indo western Dress MUL</p>
                <p className='line-through text-gray-400'>Rs. 19,987.00</p>
                <p className='text-red-600'>Rs. 9,989.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-02at2.31.35PM_5_350x.jpg?v=1743757301"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-02at2.31.35PM_350x.jpg?v=1743757301"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                    <FaCartArrowDown className='p-1 bg-black rounded' />
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 2218YLOR</p>
                <p>TechBro24 New Chinon Silk Bollywood White beads work indo western Dress MUL</p>
                <p className='line-through text-gray-400'>Rs. 13,057.00</p>
                <p className='text-red-600'>Rs. 8,487.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-01at4.47.11PM_1_350x.jpg?v=1743572141"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-01at4.47.11PM_2_350x.jpg?v=1743572141"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                    <FaCartArrowDown className='p-1 bg-black rounded' />
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 2221YLRA</p>
                <p>TechBro24 New Pure Georgette Crop Top Style With Zardoji Work indo western Dress MUL</p>
                <p className='line-through text-gray-400'>Rs. 14,805.00</p>
                <p className='text-red-600'>Rs. 9,623.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-03-19at4.20.28PM_2_350x.jpg?v=1742381781"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-03-19at4.20.28PM_350x.jpg?v=1742808972"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                    <FaCartArrowDown className='p-1 bg-black rounded' />
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 2216YLOR</p>
                <p>TechBro24 New Georgette Bollywood Fabric Cutdana kashida work indo western Dress MUL</p>
                <p className='line-through text-gray-400'>Rs. 8,017.00</p>
                <p className='text-red-600'>Rs. 5,209.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-03-18at5.35.51PM_350x.jpg?v=1742360039"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-03-18at5.35.47PM_350x.jpg?v=1742809068"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                    <FaCartArrowDown className='p-1 bg-black rounded' />
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 2217YLPI</p>
                <p>TechBro24 New Crap Silk Bollywood Cutdana kashida work indo western Dress MUL</p>
                <p className='line-through text-gray-400'>Rs. 12,112.00</p>
                <p className='text-red-600'>Rs. 7,869.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-03-18at5.30.35PM_350x.jpg?v=1742361118"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20250319-WA0006_350x.jpg?v=1742361348"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                    <FaCartArrowDown className='p-1 bg-black rounded' />
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 1977YLMO</p>
                <p>TechBro24 New H O silk Crop Top Style With Kashida Cutdana Work indo western Dress MUL</p>
                <p className='line-through text-gray-400'>Rs. 17,625.00</p>
                <p className='text-red-600'>Rs. 10,569.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-02-06at11.46.33AM_2_350x.jpg?v=1738822623"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-02-06at11.46.33AM_1_350x.jpg?v=1738822623"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                    <FaCartArrowDown className='p-1 bg-black rounded' />
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 2046YLRA </p>
                <p>TechBro24 New Gaji Silk Bandhani Style With Gotapatti Work indo western Dress RGC</p>
                <p className='line-through text-gray-400'>Rs. 24,098.00</p>
                <p className='text-red-600'>Rs. 12,049.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-02at3.02.03PM_5_350x.jpg?v=1744084784"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-02at3.02.03PM_4_350x.jpg?v=1744084784"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                    <FaCartArrowDown className='p-1 bg-black rounded' />
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 2220YLOR</p>
                <p>TechBro24 New Latest Georgette Fabric Cutdana kashida work indo western Dress MUL</p>
                <p className='line-through text-gray-400'>Rs. 12,112.00</p>
                <p className='text-red-600'>Rs. 7,869.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-05at4.50.36PM_350x.jpg?v=1744019686"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-05at4.50.36PM_5_350x.jpg?v=1744019686"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                    <FaCartArrowDown className='p-1 bg-black rounded' />
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 2219YKPU</p>
                <p>TechBro24 New Latest Chinon Silk Cutdana work indo western Dress MUL</p>
                <p className='line-through text-gray-400'>Rs. 11,955.00</p>
                <p className='text-red-600'>Rs. 7,769.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-05at4.44.01PM_350x.jpg?v=1744084513"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-05at4.44.01PM_1_350x.jpg?v=1744084513"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                    <FaCartArrowDown className='p-1 bg-black rounded' />
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 2214YKGY</p>
                <p>TechBro24 New Beautiful Chinon Silk Cutdana work indo western Dress MUL</p>
                <p className='line-through text-gray-400'>Rs. 10,695.00</p>
                <p className='text-red-600'>Rs. 6,949.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-05at4.39.18PM_3_350x.jpg?v=1744084713"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-05at4.39.18PM_1_350x.jpg?v=1744084713"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                    <FaCartArrowDown className='p-1 bg-black rounded' />
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 2211YKPE</p>
                <p>TechBro24 New Latest Munga silk Zardoji work indo western Dress MUL</p>
                <p className='line-through text-gray-400'>Rs. 12,128.00</p>
                <p className='text-red-600'>Rs. 7,879.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-05at4.37.33PM_350x.jpg?v=1744019732"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-05at4.37.33PM_5_350x.jpg?v=1744019732"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                    <FaCartArrowDown className='p-1 bg-black rounded' />
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 2213YKBR</p>
                <p>TechBro24 New Beautiful Munga silk Zardoji work indo western Dress MUL</p>
                <p className='line-through text-gray-400'>Rs. 15,105.00</p>
                <p className='text-red-600'>Rs. 7,549.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-02at2.47.33PM_5_350x.jpg?v=1743585493"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-02at2.47.33PM_350x.jpg?v=1743585493"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                    <FaCartArrowDown className='p-1 bg-black rounded' />
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 2215YLRA</p>
                <p>TechBro24 New Latest Chinon Silk Bollywood Gotapatti work indo western Dress MUL</p>
                <p className='line-through text-gray-400'>Rs. 19,987.00</p>
                <p className='text-red-600'>Rs. 9,989.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-02at2.31.35PM_5_350x.jpg?v=1743757301"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-02at2.31.35PM_350x.jpg?v=1743757301"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                    <FaCartArrowDown className='p-1 bg-black rounded' />
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 2218YLOR</p>
                <p>TechBro24 New Chinon Silk Bollywood White beads work indo western Dress MUL</p>
                <p className='line-through text-gray-400'>Rs. 13,057.00</p>
                <p className='text-red-600'>Rs. 8,487.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-01at4.47.11PM_1_350x.jpg?v=1743572141"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-04-01at4.47.11PM_2_350x.jpg?v=1743572141"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                    <FaCartArrowDown className='p-1 bg-black rounded' />
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 2221YLRA</p>
                <p>TechBro24 New Pure Georgette Crop Top Style With Zardoji Work indo western Dress MUL</p>
                <p className='line-through text-gray-400'>Rs. 14,805.00</p>
                <p className='text-red-600'>Rs. 9,623.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-03-19at4.20.28PM_2_350x.jpg?v=1742381781"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-03-19at4.20.28PM_350x.jpg?v=1742808972"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                    <FaCartArrowDown className='p-1 bg-black rounded' />
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 2216YLOR</p>
                <p>TechBro24 New Georgette Bollywood Fabric Cutdana kashida work indo western Dress MUL</p>
                <p className='line-through text-gray-400'>Rs. 8,017.00</p>
                <p className='text-red-600'>Rs. 5,209.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-03-18at5.35.51PM_350x.jpg?v=1742360039"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-03-18at5.35.47PM_350x.jpg?v=1742809068"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                    <FaCartArrowDown className='p-1 bg-black rounded' />
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 2217YLPI</p>
                <p>TechBro24 New Crap Silk Bollywood Cutdana kashida work indo western Dress MUL</p>
                <p className='line-through text-gray-400'>Rs. 12,112.00</p>
                <p className='text-red-600'>Rs. 7,869.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-03-18at5.30.35PM_350x.jpg?v=1742361118"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20250319-WA0006_350x.jpg?v=1742361348"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                    <FaCartArrowDown className='p-1 bg-black rounded' />
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 1977YLMO</p>
                <p>TechBro24 New H O silk Crop Top Style With Kashida Cutdana Work indo western Dress MUL</p>
                <p className='line-through text-gray-400'>Rs. 17,625.00</p>
                <p className='text-red-600'>Rs. 10,569.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-02-06at11.46.33AM_2_350x.jpg?v=1738822623"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2025-02-06at11.46.33AM_1_350x.jpg?v=1738822623"
                    alt="Second"
                  />
                  <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                    <CiHeart className='p-1 bg-black rounded' />
                    <FaCartArrowDown className='p-1 bg-black rounded' />
                    <FaSearchPlus className='p-1 bg-black rounded' />
                  </span>
                </div>
              </a>


              <span className='text-center text-[14px]'>
                <p>SKU: 2046YLRA </p>
                <p>TechBro24 New Gaji Silk Bandhani Style With Gotapatti Work indo western Dress RGC</p>
                <p className='line-through text-gray-400'>Rs. 24,098.00</p>
                <p className='text-red-600'>Rs. 12,049.00</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
