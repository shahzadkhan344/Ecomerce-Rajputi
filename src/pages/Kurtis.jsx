import React from 'react'
import Sidebar from '../components/Sidebar'
import Container from '../components/Container'
import SmallSidebar from '../components/SmallSidebar'
import { FaCartArrowDown, FaSearchPlus, FaStar } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'

export default function Kurtis() {
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
          <h1 className='font-bold text-[20px] uppercase'>Kurtis</h1>
          <div className="grid lg:grid-cols-4 gap-2  md:grid-cols-3 grid-cols-2 my-5">
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/tiranga-bandhej-dupatta-130758-5671edf7-c387-4066-a86f-148a190850b2_350x.jpg?v=1729922897"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/Dupatta_Size_0056cbc3-0ab6-4a23-9751-cdbf62b2aeb5_550x.jpg?v=1729922386"
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
                <p>SKU: 044D</p>
                <p>TechBro New Tiranga Bandhej Tri colour Dupatta</p>
                <p className='line-through text-gray-400'>Rs. 252.00</p>
                <p className='text-red-600'>Rs. 129.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_d426dd95-ced6-4c66-8c6b-07f71d2c2520_350x.jpg?v=1735551412"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_4e1df1f9-fc72-4896-b007-fac60050374b_350x.jpg?v=1735551412"
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
                <p>SKU: 129DCH</p>
                <p>TechBro Pure Georgette Banarasi Ghatchola Bandhani Dupatta Chunri</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>7 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 2,882.00</p>
                <p className='text-red-600'>Rs. 1,899.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-04-02_at_3.29.33_PM_6_350x.jpg?v=1743589274"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-04-02_at_3.29.33_PM_8_350x.jpg?v=1743589274"
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
                <p>SKU: 008DPI</p>
                <p>TechBro Pure Georgette Rajasthani Chunri Dupatta Pila</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>3 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 1,260.00</p>
                <p className='text-red-600'>Rs. 629.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/i/e/x/xl-m-3855-xl-women-plus-original-imah6g363p7puzhw.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/i/e/x/xl-m-3855-xl-women-plus-original-imah6g363p7puzhw.jpeg?q=70"
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
                <p>SKU: 351DDE3</p>
                <p>TechBro Gaji Silk Bandhani Lagdi Patta Dupatta</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 2,362.00</p>
                <p className='text-red-600'>Rs. 1,559.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/p/s/w/l-rt-mmesh-rimeline-original-imahfqzy9xfr9ezu.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/x/1/2/l-rt-mmesh-rimeline-original-imahfqzyvdvy2eqy.jpeg?q=70"
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
                <p>SKU: 1799K40</p>
                <p>TechBro Rajasthani Pure Georgette Gotapatti with Zaridoji Handwork Straight Long Kurtis kml</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 2,677.00</p>
                <p className='text-red-600'>Rs. 1,606.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/o/0/e/xl-rf-pure-khd-rimeline-fashion-original-imah5yf8w5nnjxqg.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/o/0/e/xl-rf-pure-khd-rimeline-fashion-original-imah5yf8w5nnjxqg.jpeg?q=70"
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
                <p>SKU: 7STRK40</p>
                <p>TechBro New Launch Jaipuri Traditional Marwadi Gotapatti Handwork Long Straight Kurtis KML</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 2,677.00</p>
                <p className='text-red-600'>Rs. 1,606.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-dress/k/y/n/s-fshopsy-f172-new-stylist-party-wear-front-slit-maxi-dress-for-original-imagrchr4xhqgmzn.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/r/m/t/xl-kurtis-for-women-stylish-latest-new-low-rate-flower-printed-original-imagr6waygzkumhd.jpeg?q=70"
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
                <p>SKU: 1759S42</p>
                <p>TechBro Latest New Arrival Jaipuri Traditional Marwadi Leheriya Gotapatti Handwork Long Straight Kurti</p>
                <p className='line-through text-gray-400'>Rs. 2,677.00</p>
                <p className='text-red-600'>Rs. 1,606.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/8/c/f/xxl-481k10059i-skylee-original-imah8vnd7nbdku7f.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/knw2v0w0/kurta/s/r/b/xl-fcwbfy-fashion-cloud-original-imag2grprzmcpvq9.jpeg?q=70"
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
                <p>SKU: 3STR K40</p>
                <p>TechBro Designer Exclusive Jaipuri Designer Straight Kurtis Long Kurtis</p>
                <p className='line-through text-gray-400'>Rs. 2,677.00</p>
                <p className='text-red-600'>Rs. 1,606.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/0/c/u/m-rss7-siya-silk-studio-original-imahfdjnxy9ev9dp.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-kurta/s/v/x/s-red-sleeveless-kurti-gaurcollections-original-imah9v43d4wfyycz.jpeg?q=70"
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
                <p>SKU: 5STRK40</p>
                <p>TechBro New Exclusive Jaipuri Designer Straight Kurtis Long Kurtis</p>
                <p className='line-through text-gray-400'>Rs. 2,677.00</p>
                <p className='text-red-600'>Rs. 1,606.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/e/h/j/l-alpa-2614-jevi-prints-original-imagz3p9wchjqvzu.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/m/y/j/l-jopljpr58-rolypoly-original-imah9jzwhd8qmzkz.jpeg?q=70"
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
                <p>SKU: 1756K42</p>
                <p>TechBro New Arrival Jaipuri Traditional Marwadi Gotapatti Handwork Long Straight Kurti</p>
                <p className='line-through text-gray-400'>Rs. 2,677.00</p>
                <p className='text-red-600'>Rs. 1,606.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/6/s/a/l-02-combo-blue-maroon-v-and-v-shop-original-imah5g7pt8xwhzhf.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/r/q/q/s-007-black-dot-kurta-bkapparels-original-imahagc3rq3vkkhj.jpeg?q=70"
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
                <p>SKU: 2STRK40</p>
                <p>TechBro New Ethnic Jaipuri Traditional Marwadi Gotapatti Handwork Long Straight Kurtis kml</p>
                <p className='line-through text-gray-400'>Rs. 2,677.00</p>
                <p className='text-red-600'>Rs. 1,606.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/kuh9yfk0/dupatta/0/w/d/2-5-meters-georgette-embroidered-multicolor-women-dupatta-original-imag7hef9qtsky8f.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/dupatta/d/u/e/2-25-meters-1-broch-duppta-ranisatiya-creation-original-imagmqyfvdmdytzz.jpeg?q=70"
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
                <p>SKU: 1STRK40</p>
                <p>TechBro Rajasthani Pure Georgette Marwadi Chunri Bandhej Gotapatti Zaridoji work Kurtis</p>
                <p className='line-through text-gray-400'>Rs. 2,677.00</p>
                <p className='text-red-600'>Rs. 1,606.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/tiranga-bandhej-dupatta-130758-5671edf7-c387-4066-a86f-148a190850b2_350x.jpg?v=1729922897"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/Dupatta_Size_0056cbc3-0ab6-4a23-9751-cdbf62b2aeb5_550x.jpg?v=1729922386"
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
                <p>SKU: 044D</p>
                <p>TechBro New Tiranga Bandhej Tri colour Dupatta</p>
                <p className='line-through text-gray-400'>Rs. 252.00</p>
                <p className='text-red-600'>Rs. 129.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_d426dd95-ced6-4c66-8c6b-07f71d2c2520_350x.jpg?v=1735551412"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_4e1df1f9-fc72-4896-b007-fac60050374b_350x.jpg?v=1735551412"
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
                <p>SKU: 129DCH</p>
                <p>TechBro Pure Georgette Banarasi Ghatchola Bandhani Dupatta Chunri</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>7 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 2,882.00</p>
                <p className='text-red-600'>Rs. 1,899.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-04-02_at_3.29.33_PM_6_350x.jpg?v=1743589274"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-04-02_at_3.29.33_PM_8_350x.jpg?v=1743589274"
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
                <p>SKU: 008DPI</p>
                <p>TechBro Pure Georgette Rajasthani Chunri Dupatta Pila</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>3 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 1,260.00</p>
                <p className='text-red-600'>Rs. 629.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/i/e/x/xl-m-3855-xl-women-plus-original-imah6g363p7puzhw.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/i/e/x/xl-m-3855-xl-women-plus-original-imah6g363p7puzhw.jpeg?q=70"
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
                <p>SKU: 351DDE3</p>
                <p>TechBro Gaji Silk Bandhani Lagdi Patta Dupatta</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 2,362.00</p>
                <p className='text-red-600'>Rs. 1,559.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/p/s/w/l-rt-mmesh-rimeline-original-imahfqzy9xfr9ezu.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/x/1/2/l-rt-mmesh-rimeline-original-imahfqzyvdvy2eqy.jpeg?q=70"
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
                <p>SKU: 1799K40</p>
                <p>TechBro Rajasthani Pure Georgette Gotapatti with Zaridoji Handwork Straight Long Kurtis kml</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 2,677.00</p>
                <p className='text-red-600'>Rs. 1,606.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/o/0/e/xl-rf-pure-khd-rimeline-fashion-original-imah5yf8w5nnjxqg.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/o/0/e/xl-rf-pure-khd-rimeline-fashion-original-imah5yf8w5nnjxqg.jpeg?q=70"
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
                <p>SKU: 7STRK40</p>
                <p>TechBro New Launch Jaipuri Traditional Marwadi Gotapatti Handwork Long Straight Kurtis KML</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 2,677.00</p>
                <p className='text-red-600'>Rs. 1,606.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-dress/k/y/n/s-fshopsy-f172-new-stylist-party-wear-front-slit-maxi-dress-for-original-imagrchr4xhqgmzn.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/r/m/t/xl-kurtis-for-women-stylish-latest-new-low-rate-flower-printed-original-imagr6waygzkumhd.jpeg?q=70"
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
                <p>SKU: 1759S42</p>
                <p>TechBro Latest New Arrival Jaipuri Traditional Marwadi Leheriya Gotapatti Handwork Long Straight Kurti</p>
                <p className='line-through text-gray-400'>Rs. 2,677.00</p>
                <p className='text-red-600'>Rs. 1,606.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/8/c/f/xxl-481k10059i-skylee-original-imah8vnd7nbdku7f.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/knw2v0w0/kurta/s/r/b/xl-fcwbfy-fashion-cloud-original-imag2grprzmcpvq9.jpeg?q=70"
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
                <p>SKU: 3STR K40</p>
                <p>TechBro Designer Exclusive Jaipuri Designer Straight Kurtis Long Kurtis</p>
                <p className='line-through text-gray-400'>Rs. 2,677.00</p>
                <p className='text-red-600'>Rs. 1,606.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/0/c/u/m-rss7-siya-silk-studio-original-imahfdjnxy9ev9dp.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-kurta/s/v/x/s-red-sleeveless-kurti-gaurcollections-original-imah9v43d4wfyycz.jpeg?q=70"
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
                <p>SKU: 5STRK40</p>
                <p>TechBro New Exclusive Jaipuri Designer Straight Kurtis Long Kurtis</p>
                <p className='line-through text-gray-400'>Rs. 2,677.00</p>
                <p className='text-red-600'>Rs. 1,606.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/e/h/j/l-alpa-2614-jevi-prints-original-imagz3p9wchjqvzu.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/m/y/j/l-jopljpr58-rolypoly-original-imah9jzwhd8qmzkz.jpeg?q=70"
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
                <p>SKU: 1756K42</p>
                <p>TechBro New Arrival Jaipuri Traditional Marwadi Gotapatti Handwork Long Straight Kurti</p>
                <p className='line-through text-gray-400'>Rs. 2,677.00</p>
                <p className='text-red-600'>Rs. 1,606.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/6/s/a/l-02-combo-blue-maroon-v-and-v-shop-original-imah5g7pt8xwhzhf.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/r/q/q/s-007-black-dot-kurta-bkapparels-original-imahagc3rq3vkkhj.jpeg?q=70"
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
                <p>SKU: 2STRK40</p>
                <p>TechBro New Ethnic Jaipuri Traditional Marwadi Gotapatti Handwork Long Straight Kurtis kml</p>
                <p className='line-through text-gray-400'>Rs. 2,677.00</p>
                <p className='text-red-600'>Rs. 1,606.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/kuh9yfk0/dupatta/0/w/d/2-5-meters-georgette-embroidered-multicolor-women-dupatta-original-imag7hef9qtsky8f.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/dupatta/d/u/e/2-25-meters-1-broch-duppta-ranisatiya-creation-original-imagmqyfvdmdytzz.jpeg?q=70"
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
                <p>SKU: 1STRK40</p>
                <p>TechBro Rajasthani Pure Georgette Marwadi Chunri Bandhej Gotapatti Zaridoji work Kurtis</p>
                <p className='line-through text-gray-400'>Rs. 2,677.00</p>
                <p className='text-red-600'>Rs. 1,606.00</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
