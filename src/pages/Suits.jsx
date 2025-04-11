import React from 'react'
import Sidebar from '../components/Sidebar'
import Container from '../components/Container'
import SmallSidebar from '../components/SmallSidebar'
import { FaCartArrowDown, FaSearchPlus, FaStar } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'
export default function Suits() {
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
          <h1 className='font-bold text-[20px] uppercase'>Salwar Suits</h1>
          <div className="grid lg:grid-cols-4 gap-2  md:grid-cols-3 grid-cols-2 my-5">
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/dupatta/0/q/b/2-meters-1-chiffon-p-kd-handloom-original-imah97jcy9zqevff.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/dupatta/0/w/f/2-meters-1-chiffon-p-kd-handloom-original-imah97jcz8x8xaau.jpeg?q=70"
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
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-01-13_at_2.06.15_PM_350x.jpg?v=1736760454"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-01-13_at_2.06.15_PM_1_350x.jpg?v=1736760454"
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
                <p>SKU: 564C</p>
                <p>TechBro Latest Marwadi Chunri Bandhej Ghatchola Gotapatti Work Stole.</p>
                <p className='line-through text-gray-400'>Rs. 1,354.00</p>
                <p className='text-red-600'> Rs. 679.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-01-02_at_4.16.14_PM_350x.jpg?v=1735880880"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-01-02_at_4.16.16_PM_350x.jpg?v=1735880880"
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
                <p>SKU: 1363CCHTI-3</p>
                <p>TechBro Exclusive Marwadi pila Pomcha Broach</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>2 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 425.00</p>
                <p className='text-red-600'> Rs. 209.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-01-13_at_2.06.06_PM_350x.jpg?v=1736759846"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-01-13_at_2.06.07_PM_350x.jpg?v=1736759846"
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
                <p>SKU: 011CRE</p>
                <p>TechBro Marwadi Chunri Stole Georgette Fabric</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>2 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 2,126.00</p>
                <p className='text-red-600'> Rs. 1,399.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/n/3/z/yes-1-80-m-unstitched-2-m-2-5-m-rxmgd1002-jaipur-kurti-original-imah5bkwhm7vy4wn.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/z/g/k/yes-2-m-unstitched-2-m-2-5-m-cp9053pistagreen-jaipur-kurti-original-imah5bkvyn7hxaxv.jpeg?q=70"
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
                <p>SKU: 068UBLSKBL</p>
                <p>TechBro Banarasi Bandhej Gharchola Salwar suit</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 2,520.00</p>
                <p className='text-red-600'>Rs. 1,659.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/bandhej-art-silk-suit-970005_350x.jpg?v=1703659673"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/Salwar_Suit_c2087c79-5a79-46a7-a43b-5c9d8fda1607_550x.jpg?v=1735285258"
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
                <p>SKU: 003UBL</p>
                <p>TechBro New Art silk Bandhani Gotapatti Work Salwar Suit KML</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>2 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 3,465.00</p>
                <p className='text-red-600'>Rs. 2,249.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20240827-WA0086-1_350x.jpg?v=1724930264"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20240827-WA0085-1_350x.jpg?v=1724930264"
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
                <p>SKU: 1300PURE</p>
                <p>TechBro New Art Silk Bandhani Gotapatti Work Salwar Suit KML</p>
                <p className='line-through text-gray-400'>Rs. 3,465.00</p>
                <p className='text-red-600'>Rs. 2,249.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/c/0/z/yes-1-80-m-unstitched-2-m-2-5-m-mt540teal-jaipur-kurti-original-imah5b3pgkfwjx9t.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/l4ssfww0/fabric/m/t/f/yes-2-2-m-unstitched-2-10m-sanam2-dnveens-original-imagfmdhqjepwhx5.jpeg?q=70"
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
                <p>SKU: 068UBL</p>
                <p>TechBro Banarasi Bandhej Gharchola salwar suit</p>
                <p className='line-through text-gray-400'>Rs. 2,520.00</p>
                <p className='text-red-600'>Rs. 1,659.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20240827-WA0096_350x.jpg?v=1725007446"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/Salwar_Suit_d56ec781-c56d-48f2-805d-20918447f3ac_550x.jpg?v=1729327598"
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
                <p>SKU: 1308PUYE</p>
                <p>TechBro New Art Silk Bandhani Gotapatti Work Salwar Suit KML</p>
                <p className='line-through text-gray-400'>Rs. 3,780.00</p>
                <p className='text-red-600'>Rs. 2,457.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/kl9rssw0/fabric/4/d/l/yes-unstitched-tc-banarasi-32-maroon-textile-catalog-original-imagyfh3ygafygnk.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/v/h/q/yes-1-80-m-unstitched-2-m-2-5-m-cp9054purple-jaipur-kurti-original-imah5b5ybgt3mkhf.jpeg?q=70"
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
                <p>SKU: 003UYE</p>
                <p>TechBro New Art Silk Bandhani Gotapatti Work Salwar Suit KML</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 3,465.00</p>
                <p className='text-red-600'>Rs. 2,249.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20240827-WA0082-1_350x.jpg?v=1724929896"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20240827-WA0084-1_350x.jpg?v=1724929895"
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
                <p>SKU: 1300PUGR</p>
                <p>TechBro New Art Silk Bandhani Gotapatti Work Salwar Suit KML</p>
                <p className='line-through text-gray-400'>Rs. 3,465.00</p>
                <p className='text-red-600'>Rs. 2,249.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20240827-WA0098_350x.jpg?v=1725006474"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/Salwar_Suit_4e9eb632-a293-4314-b20e-5024d86bc1d4_550x.jpg?v=1729327604"
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
                <p>SKU: 1308PURM</p>
                <p>TechBro New Art Silk Bandhani Gotapatti Work Salwar suit KML</p>
                <p className='line-through text-gray-400'>Rs. 3,780.00</p>
                <p className='text-red-600'>Rs. 2,457.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/dupatta/0/q/b/2-meters-1-chiffon-p-kd-handloom-original-imah97jcy9zqevff.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/dupatta/0/w/f/2-meters-1-chiffon-p-kd-handloom-original-imah97jcz8x8xaau.jpeg?q=70"
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
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-01-13_at_2.06.15_PM_350x.jpg?v=1736760454"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-01-13_at_2.06.15_PM_1_350x.jpg?v=1736760454"
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
                <p>SKU: 564C</p>
                <p>TechBro Latest Marwadi Chunri Bandhej Ghatchola Gotapatti Work Stole.</p>
                <p className='line-through text-gray-400'>Rs. 1,354.00</p>
                <p className='text-red-600'> Rs. 679.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-01-02_at_4.16.14_PM_350x.jpg?v=1735880880"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-01-02_at_4.16.16_PM_350x.jpg?v=1735880880"
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
                <p>SKU: 1363CCHTI-3</p>
                <p>TechBro Exclusive Marwadi pila Pomcha Broach</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>2 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 425.00</p>
                <p className='text-red-600'> Rs. 209.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-01-13_at_2.06.06_PM_350x.jpg?v=1736759846"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-01-13_at_2.06.07_PM_350x.jpg?v=1736759846"
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
                <p>SKU: 011CRE</p>
                <p>TechBro Marwadi Chunri Stole Georgette Fabric</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>2 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 2,126.00</p>
                <p className='text-red-600'> Rs. 1,399.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/n/3/z/yes-1-80-m-unstitched-2-m-2-5-m-rxmgd1002-jaipur-kurti-original-imah5bkwhm7vy4wn.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/z/g/k/yes-2-m-unstitched-2-m-2-5-m-cp9053pistagreen-jaipur-kurti-original-imah5bkvyn7hxaxv.jpeg?q=70"
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
                <p>SKU: 068UBLSKBL</p>
                <p>TechBro Banarasi Bandhej Gharchola Salwar suit</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 2,520.00</p>
                <p className='text-red-600'>Rs. 1,659.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/bandhej-art-silk-suit-970005_350x.jpg?v=1703659673"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/Salwar_Suit_c2087c79-5a79-46a7-a43b-5c9d8fda1607_550x.jpg?v=1735285258"
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
                <p>SKU: 003UBL</p>
                <p>TechBro New Art silk Bandhani Gotapatti Work Salwar Suit KML</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>2 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 3,465.00</p>
                <p className='text-red-600'>Rs. 2,249.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20240827-WA0086-1_350x.jpg?v=1724930264"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20240827-WA0085-1_350x.jpg?v=1724930264"
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
                <p>SKU: 1300PURE</p>
                <p>TechBro New Art Silk Bandhani Gotapatti Work Salwar Suit KML</p>
                <p className='line-through text-gray-400'>Rs. 3,465.00</p>
                <p className='text-red-600'>Rs. 2,249.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/c/0/z/yes-1-80-m-unstitched-2-m-2-5-m-mt540teal-jaipur-kurti-original-imah5b3pgkfwjx9t.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/l4ssfww0/fabric/m/t/f/yes-2-2-m-unstitched-2-10m-sanam2-dnveens-original-imagfmdhqjepwhx5.jpeg?q=70"
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
                <p>SKU: 068UBL</p>
                <p>TechBro Banarasi Bandhej Gharchola salwar suit</p>
                <p className='line-through text-gray-400'>Rs. 2,520.00</p>
                <p className='text-red-600'>Rs. 1,659.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20240827-WA0096_350x.jpg?v=1725007446"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/Salwar_Suit_d56ec781-c56d-48f2-805d-20918447f3ac_550x.jpg?v=1729327598"
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
                <p>SKU: 1308PUYE</p>
                <p>TechBro New Art Silk Bandhani Gotapatti Work Salwar Suit KML</p>
                <p className='line-through text-gray-400'>Rs. 3,780.00</p>
                <p className='text-red-600'>Rs. 2,457.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/kl9rssw0/fabric/4/d/l/yes-unstitched-tc-banarasi-32-maroon-textile-catalog-original-imagyfh3ygafygnk.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/v/h/q/yes-1-80-m-unstitched-2-m-2-5-m-cp9054purple-jaipur-kurti-original-imah5b5ybgt3mkhf.jpeg?q=70"
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
                <p>SKU: 003UYE</p>
                <p>TechBro New Art Silk Bandhani Gotapatti Work Salwar Suit KML</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 3,465.00</p>
                <p className='text-red-600'>Rs. 2,249.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20240827-WA0082-1_350x.jpg?v=1724929896"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20240827-WA0084-1_350x.jpg?v=1724929895"
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
                <p>SKU: 1300PUGR</p>
                <p>TechBro New Art Silk Bandhani Gotapatti Work Salwar Suit KML</p>
                <p className='line-through text-gray-400'>Rs. 3,465.00</p>
                <p className='text-red-600'>Rs. 2,249.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20240827-WA0098_350x.jpg?v=1725006474"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/Salwar_Suit_4e9eb632-a293-4314-b20e-5024d86bc1d4_550x.jpg?v=1729327604"
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
                <p>SKU: 1308PURM</p>
                <p>TechBro New Art Silk Bandhani Gotapatti Work Salwar suit KML</p>
                <p className='line-through text-gray-400'>Rs. 3,780.00</p>
                <p className='text-red-600'>Rs. 2,457.00</p>
              </span>
            </div>

          </div>
        </div>
      </div>
    </Container>
  )
}
