import React from 'react'
import Sidebar from '../components/Sidebar'
import Container from '../components/Container'
import SmallSidebar from '../components/SmallSidebar'
import { FaCartArrowDown, FaSearchPlus, FaStar } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'

export default function Dupatta() {
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
          <h1 className='font-bold text-[20px] uppercase'>Dupatta For Women</h1>
          <div className="grid lg:grid-cols-4 gap-2  md:grid-cols-3 grid-cols-2 my-5">
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/d/i/a/yes-2-10m-unstitched-2-10m-dm-feather-white-styledeal-original-imah5ttxtyvgyhyd.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/b/v/i/yes-2-m-unstitched-2-m-2-5-m-yf-bubble-02-pink-niyami-original-imahah76gnagsphv.jpeg?q=70"
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
                <p>SKU: 068UPIOR</p>
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
                    src="https://rukminim2.flixcart.com/image/612/612/klfhk7k0/fabric/z/h/g/yes-unstitched-tc-banarasi-25-pink-textile-catalog-original-imagyjxaqcc69xf8.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/kikluvk0-0/fabric/z/x/m/yes-unstitched-dc-banarasi-13-grey-diva-s-choice-original-imafycywfjgkjj9d.jpeg?q=70"
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
                <p>SKU: 068URA</p>
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
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20240827-WA0083-1_350x.jpg?v=1724930122"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/Salwar_Suit_1c8956a6-eb2f-4c09-bedb-44e73272cb0f_550x.jpg?v=1734779709"
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
                <p>SKU: 1300PURA</p>
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
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/w/d/s/yes-1-80-m-unstitched-2-m-2-5-m-cp7021green-jaipur-kurti-original-imah5bkvf8rmumqn.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/t/h/p/yes-2-2-m-unstitched-2-36-m-gola-boota-suit-peach-the-sdf-india-original-imagkebkhvudf9pt.jpeg?q=70"
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
                <p>SKU: 1278KPI</p>
                <p>TechBro Art Silk Bandhani Gotapatti Salwar Suit KML</p>
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
                    src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_964f0159-de71-49a3-917e-b618e91c49bd_350x.jpg?v=1735553066"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_484220bf-034d-423a-9bc8-e60324f8fb95_350x.jpg?v=1735553066"
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
                <p>SKU: 009CRE</p>
                <p>TechBro Ethnic cotton Lampa Chunri IR</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 236.00</p>
                <p className='text-red-600'>Rs. 100.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/k12go7k0/fabric/m/g/w/banarasi-salwar101-fabland-original-imafkprchzxtstue.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/6/d/r/yes-2-2-m-unstitched-2-2-m-ma-raj-jarna-cotton-brown-all-in-one-original-imaghcwzgwqmyvrv.jpeg?q=70"
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
                <p>SKU: 047DORRE</p>
                <p>TechBro Ghatchola Bandhej Silk Dupattas</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 393.00</p>
                <p className='text-red-600'>Rs. 299.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/dupatta/3/4/e/2-meters-traditional-ranisatiya-creation-original-imaghshbwggkzfga.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/kwdv3bk0/dupatta/w/w/p/2-25-meters-maya01-mayasons-original-imag92mddjhat4eu.jpeg?q=70"
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
                <p>SKU: 071DWHGR</p>
                <p>TechBro Banarasi Bandhej Gharchola Jangla Dupatta White Grey</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>2 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 1,023.00</p>
                <p className='text-red-600'>Rs. 509.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20241224-WA0034_350x.jpg?v=1735021018"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20241224-WA0033_350x.jpg?v=1735021018"
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
                <p>SKU: 166DGHSICH</p>
                <p>TechBro Rajasthani Traditional Bandhani Chunri Piliya Dupatta Gharchola Silk Chunri</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 1,575.00</p>
                <p className='text-red-600'>Rs. 789.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20241223-WA0145_350x.jpg?v=1734951664"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20241223-WA0144_350x.jpg?v=1734951664"
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
                <p>SKU: 273DD9</p>
                <p>TechBro New Chinon Bhandhej Dupatta</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 195.00</p>
                <p className='text-red-600'>Rs. 99.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/dupatta/c/3/f/2-5-meters-1-banarasi-7275-royal-blue-a-chaukhat-original-imah46msgphcpmvg.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/dupatta/k/v/d/2-25-meters-1-nt69-invent-fashion-original-imaggdjzhcmzefjh.jpeg?q=70"
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
                <p>SKU: 050DROBL</p>
                <p>TechBro Beautiful Bandhej silk Dupattas Royal Blue</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 252.00</p>
                <p className='text-red-600'>Rs. 129.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_8b8da073-240f-457b-a8d2-c7ed4be4355e_350x.jpg?v=1735547469"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_c100512a-49cb-4909-9ca3-4c05ac6b12b0_350x.jpg?v=1735547469"
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
                <p>SKU: 005DRECH</p>
                <p>TechBro Pure Georgette Rajasthani Chunri Dupattas Chunari</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 3,308.00</p>
                <p className='text-red-600'>Rs. 2,179.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/dupatta/d/g/x/2-5-meters-1-onesize2-euphoria-original-imah8zy93tvd7s4t.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/dupatta/8/y/m/2-5-meters-1-onesize-euphoria-original-imah8yzznujrqhgd.jpeg?q=70"
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
                <p>SKU: 125DWHRE</p>
                <p>TechBro New Banarasi Bandhej Gharchola Dupattas White Red</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 1,023.00</p>
                <p className='text-red-600'>Rs. 509.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/d/i/a/yes-2-10m-unstitched-2-10m-dm-feather-white-styledeal-original-imah5ttxtyvgyhyd.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/b/v/i/yes-2-m-unstitched-2-m-2-5-m-yf-bubble-02-pink-niyami-original-imahah76gnagsphv.jpeg?q=70"
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
                <p>SKU: 068UPIOR</p>
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
                    src="https://rukminim2.flixcart.com/image/612/612/klfhk7k0/fabric/z/h/g/yes-unstitched-tc-banarasi-25-pink-textile-catalog-original-imagyjxaqcc69xf8.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/kikluvk0-0/fabric/z/x/m/yes-unstitched-dc-banarasi-13-grey-diva-s-choice-original-imafycywfjgkjj9d.jpeg?q=70"
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
                <p>SKU: 068URA</p>
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
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20240827-WA0083-1_350x.jpg?v=1724930122"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/Salwar_Suit_1c8956a6-eb2f-4c09-bedb-44e73272cb0f_550x.jpg?v=1734779709"
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
                <p>SKU: 1300PURA</p>
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
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/w/d/s/yes-1-80-m-unstitched-2-m-2-5-m-cp7021green-jaipur-kurti-original-imah5bkvf8rmumqn.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/t/h/p/yes-2-2-m-unstitched-2-36-m-gola-boota-suit-peach-the-sdf-india-original-imagkebkhvudf9pt.jpeg?q=70"
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
                <p>SKU: 1278KPI</p>
                <p>TechBro Art Silk Bandhani Gotapatti Salwar Suit KML</p>
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
                    src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_964f0159-de71-49a3-917e-b618e91c49bd_350x.jpg?v=1735553066"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_484220bf-034d-423a-9bc8-e60324f8fb95_350x.jpg?v=1735553066"
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
                <p>SKU: 009CRE</p>
                <p>TechBro Ethnic cotton Lampa Chunri IR</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 236.00</p>
                <p className='text-red-600'>Rs. 100.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/k12go7k0/fabric/m/g/w/banarasi-salwar101-fabland-original-imafkprchzxtstue.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/6/d/r/yes-2-2-m-unstitched-2-2-m-ma-raj-jarna-cotton-brown-all-in-one-original-imaghcwzgwqmyvrv.jpeg?q=70"
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
                <p>SKU: 047DORRE</p>
                <p>TechBro Ghatchola Bandhej Silk Dupattas</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 393.00</p>
                <p className='text-red-600'>Rs. 299.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/dupatta/3/4/e/2-meters-traditional-ranisatiya-creation-original-imaghshbwggkzfga.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/kwdv3bk0/dupatta/w/w/p/2-25-meters-maya01-mayasons-original-imag92mddjhat4eu.jpeg?q=70"
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
                <p>SKU: 071DWHGR</p>
                <p>TechBro Banarasi Bandhej Gharchola Jangla Dupatta White Grey</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>2 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 1,023.00</p>
                <p className='text-red-600'>Rs. 509.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20241224-WA0034_350x.jpg?v=1735021018"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20241224-WA0033_350x.jpg?v=1735021018"
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
                <p>SKU: 166DGHSICH</p>
                <p>TechBro Rajasthani Traditional Bandhani Chunri Piliya Dupatta Gharchola Silk Chunri</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 1,575.00</p>
                <p className='text-red-600'>Rs. 789.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20241223-WA0145_350x.jpg?v=1734951664"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/IMG-20241223-WA0144_350x.jpg?v=1734951664"
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
                <p>SKU: 273DD9</p>
                <p>TechBro New Chinon Bhandhej Dupatta</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 195.00</p>
                <p className='text-red-600'>Rs. 99.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/dupatta/c/3/f/2-5-meters-1-banarasi-7275-royal-blue-a-chaukhat-original-imah46msgphcpmvg.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/dupatta/k/v/d/2-25-meters-1-nt69-invent-fashion-original-imaggdjzhcmzefjh.jpeg?q=70"
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
                <p>SKU: 050DROBL</p>
                <p>TechBro Beautiful Bandhej silk Dupattas Royal Blue</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 252.00</p>
                <p className='text-red-600'>Rs. 129.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_8b8da073-240f-457b-a8d2-c7ed4be4355e_350x.jpg?v=1735547469"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_c100512a-49cb-4909-9ca3-4c05ac6b12b0_350x.jpg?v=1735547469"
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
                <p>SKU: 005DRECH</p>
                <p>TechBro Pure Georgette Rajasthani Chunri Dupattas Chunari</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 3,308.00</p>
                <p className='text-red-600'>Rs. 2,179.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/dupatta/d/g/x/2-5-meters-1-onesize2-euphoria-original-imah8zy93tvd7s4t.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/dupatta/8/y/m/2-5-meters-1-onesize-euphoria-original-imah8yzznujrqhgd.jpeg?q=70"
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
                <p>SKU: 125DWHRE</p>
                <p>TechBro New Banarasi Bandhej Gharchola Dupattas White Red</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 1,023.00</p>
                <p className='text-red-600'>Rs. 509.00</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
