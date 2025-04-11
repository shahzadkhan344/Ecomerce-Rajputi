import React from 'react'
import Sidebar from '../components/Sidebar'
import Container from '../components/Container'
import SmallSidebar from '../components/SmallSidebar'
import { FaCartArrowDown, FaSearchPlus, FaStar } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'

export default function ChunriPila() {
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
          <h1 className='font-bold text-[20px] uppercase'>Marwadi Chunri Pila</h1>
          <div className="grid lg:grid-cols-4 gap-2  md:grid-cols-3 grid-cols-2 my-5">
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/koad9jk0/sari/w/8/x/free-malang-red-styledeal-unstitched-original-imag2rzykz2gkacm.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/q/h/e/free-malang-red-stylescope-unstitched-original-imah2yynzawdqhke.jpeg?q=70"
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
                <p>SKU: 1124SDEA</p>
                <p>TechBro Summer Special Kota Doria Saree Red</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>10 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 945.00 </p>
                <p className='text-red-600'>Rs. 469.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/m/i/f/free-suneri-red-r-k-creation-unstitched-original-imagnc5erwbmkyfz.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/kdqa4y80-0/sari/i/j/s/free-kangana-red-sidhidata-unstitched-original-imafukumwt2szysz.jpeg?q=70"
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
                <p>SKU: 555SRE</p>
                <p>TechBro Originals Latest Bandhani Come Leheriya Exclusive Banarasi Border Saree with gold foil work</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>12 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 1,228.00 </p>
                <p className='text-red-600'>Rs. 619.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-03-08_at_11.14.20_AM_2_350x.jpg?v=1741422760"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-03-08_at_1.38.56_PM_350x.jpg?v=1741422760"
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
                <p>SKU: 596KCP</p>
                <p>TechBro New Pure Georgette Bandhani Saree With Blouse</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>8 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 1,685.00 </p>
                <p className='text-red-600'> Rs. 839.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/s/p/t/free-ajrakhkota-black-stava-creation-unstitched-original-imah26ukfpyntra9.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/l31x2fk0/sari/6/6/m/free-panghat-red-styledeal-unstitched-original-image9h2uqtcff5g.jpeg?q=70"
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
                <p>SKU: 1449S-1</p>
                <p>TechBro Arrival Crape Bandhani Multicolor Saree with Gotapatti Border</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>8 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 1,512.00 </p>
                <p className='text-red-600'>Rs. 759.00</p>
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
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>10 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 236.00</p>
                <p className='text-red-600'>Rs. 100.00</p>
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
                <p className='text-red-600'> Rs. 789.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_c100512a-49cb-4909-9ca3-4c05ac6b12b0_350x.jpg?v=1735547469"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_8b8da073-240f-457b-a8d2-c7ed4be4355e_350x.jpg?v=1735547469"
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
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>7 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 3,308.00</p>
                <p className='text-red-600'> Rs. 2,179.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/dupatta/7/6/a/2-25-meters-1-rajasthani-marwadi-chunri-odhana-dupatta-maroon-original-imaguzumgvmte66w.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/dupatta/0/x/9/2-meters-traditional-broch-odhna-ranisatiya-creation-original-imah7tmdgrqfscxd.jpeg?q=70"
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
                <p>SKU: 119DPO</p>
                <p>TechBro Rajasthani Semi Georgette Marwadi odhna stole ZHR</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>3 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 1,134.00</p>
                <p className='text-red-600'>Rs. 569.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/ktn9pjk0/dupatta/w/j/l/2-25-meters-rajasthani-marwadi-chunri-odhana-dupatta-peacock-in-original-imag6yfyd63kczhv.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/dupatta/j/q/b/2-meters-rajasthani-ranisatiya-creation-original-imaghskthcgxkydh.jpeg?q=70"
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
                <p>SKU: 0914PTRE</p>
                <p>TechBro New Marwadi Chunri Cotton Stole</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 535.00</p>
                <p className='text-red-600'>Rs. 269.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-01-13_at_2.07.09_PM_350x.jpg?v=1736828444"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-01-13_at_2.07.12_PM_350x.jpg?v=1736828444"
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
                <p>SKU: 533C</p>
                <p>TechBro New Design Marwadi Chunri in Half Part</p>
                <p className='line-through text-gray-400'>Rs. 283.00</p>
                <p className='text-red-600'>Rs. 139.00</p>
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
                    src="https://rukminim2.flixcart.com/image/612/612/koad9jk0/sari/w/8/x/free-malang-red-styledeal-unstitched-original-imag2rzykz2gkacm.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/q/h/e/free-malang-red-stylescope-unstitched-original-imah2yynzawdqhke.jpeg?q=70"
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
                <p>SKU: 1124SDEA</p>
                <p>TechBro Summer Special Kota Doria Saree Red</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>10 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 945.00 </p>
                <p className='text-red-600'>Rs. 469.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/m/i/f/free-suneri-red-r-k-creation-unstitched-original-imagnc5erwbmkyfz.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/kdqa4y80-0/sari/i/j/s/free-kangana-red-sidhidata-unstitched-original-imafukumwt2szysz.jpeg?q=70"
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
                <p>SKU: 555SRE</p>
                <p>TechBro Originals Latest Bandhani Come Leheriya Exclusive Banarasi Border Saree with gold foil work</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>12 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 1,228.00 </p>
                <p className='text-red-600'>Rs. 619.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-03-08_at_11.14.20_AM_2_350x.jpg?v=1741422760"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-03-08_at_1.38.56_PM_350x.jpg?v=1741422760"
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
                <p>SKU: 596KCP</p>
                <p>TechBro New Pure Georgette Bandhani Saree With Blouse</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>8 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 1,685.00 </p>
                <p className='text-red-600'> Rs. 839.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/s/p/t/free-ajrakhkota-black-stava-creation-unstitched-original-imah26ukfpyntra9.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/l31x2fk0/sari/6/6/m/free-panghat-red-styledeal-unstitched-original-image9h2uqtcff5g.jpeg?q=70"
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
                <p>SKU: 1449S-1</p>
                <p>TechBro Arrival Crape Bandhani Multicolor Saree with Gotapatti Border</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>8 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 1,512.00 </p>
                <p className='text-red-600'>Rs. 759.00</p>
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
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>10 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 236.00</p>
                <p className='text-red-600'>Rs. 100.00</p>
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
                <p className='text-red-600'> Rs. 789.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_c100512a-49cb-4909-9ca3-4c05ac6b12b0_350x.jpg?v=1735547469"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_8b8da073-240f-457b-a8d2-c7ed4be4355e_350x.jpg?v=1735547469"
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
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>7 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 3,308.00</p>
                <p className='text-red-600'> Rs. 2,179.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/dupatta/7/6/a/2-25-meters-1-rajasthani-marwadi-chunri-odhana-dupatta-maroon-original-imaguzumgvmte66w.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/dupatta/0/x/9/2-meters-traditional-broch-odhna-ranisatiya-creation-original-imah7tmdgrqfscxd.jpeg?q=70"
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
                <p>SKU: 119DPO</p>
                <p>TechBro Rajasthani Semi Georgette Marwadi odhna stole ZHR</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>3 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 1,134.00</p>
                <p className='text-red-600'>Rs. 569.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://rukminim2.flixcart.com/image/612/612/ktn9pjk0/dupatta/w/j/l/2-25-meters-rajasthani-marwadi-chunri-odhana-dupatta-peacock-in-original-imag6yfyd63kczhv.jpeg?q=70"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/dupatta/j/q/b/2-meters-rajasthani-ranisatiya-creation-original-imaghskthcgxkydh.jpeg?q=70"
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
                <p>SKU: 0914PTRE</p>
                <p>TechBro New Marwadi Chunri Cotton Stole</p>
                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                <p className='line-through text-gray-400'>Rs. 535.00</p>
                <p className='text-red-600'>Rs. 269.00</p>
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
              <a href="/detailspage">
                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-01-13_at_2.07.09_PM_350x.jpg?v=1736828444"
                    alt="First"
                  />
                  <img
                    className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                    src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-01-13_at_2.07.12_PM_350x.jpg?v=1736828444"
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
                <p>SKU: 533C</p>
                <p>TechBro New Design Marwadi Chunri in Half Part</p>
                <p className='line-through text-gray-400'>Rs. 283.00</p>
                <p className='text-red-600'>Rs. 139.00</p>
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
          </div>
        </div>
      </div>
    </Container>
  )
}
