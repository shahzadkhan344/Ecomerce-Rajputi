import React from 'react'
import Sidebar from '../components/Sidebar'
import Container from '../components/Container'
import SmallSidebar from '../components/SmallSidebar'
import { FaCartArrowDown, FaSearchPlus, FaStar } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'

export default function Lehnaga() {
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
                    <h1 className='font-bold text-[20px]'>LEHENGA</h1>
                    <div className="grid lg:grid-cols-4 gap-2  md:grid-cols-3 grid-cols-2 my-5">
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/f/k/e/free-half-sleeve-pink-goroly-lehenga-choli-cotton-linen-original-imah2ss8xfesvgzd.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/3/6/l/free-half-sleeve-navy-blue-goroly-1-lehenga-choli-cotton-linen-original-imah7x6szrbtgbyt.jpeg?q=70"
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
                                <p>SKU: 518LMU</p>
                                <p>TechBro Pure Chinon Crush With Bandhej Silk Heavy Work Embroidery Lehenga RAJ</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>3 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 6,142.00</p>
                                <p className='text-red-600'>Rs. 4,049.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/IMG-20230413-WA0006_350x.jpg?v=1718172714"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/Lehenga_Size_c0dd1637-8a2d-44b5-be8d-4b25a080b1d8_550x.jpg?v=1737374479"
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
                                <p>SKU: 368LYEGR</p>
                                <p>TechBro Pure Dola Silk Russian Banarasi Meenakari Lehenga Chunni Set BTU</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>3 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 3,150.00</p>
                                <p className='text-red-600'>Rs. 2,079.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/c/f/j/free-half-sleeve-prekshu-fabcartz-original-imagsq7wnshkz52g.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/1/l/b/free-na-ss-ak29-shree-sant-sarees-original-imah7pczvppwbybb.jpeg?q=70"
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
                                <p>SKU: 208LORGR</p>
                                <p>TechBro Pure Organza Bright Colour Beautiful Gotapatti Work Lehenga BTU</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>3 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 4,095.00</p>
                                <p className='text-red-600'>Rs. 2,699.00
                                </p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/DES_Lehenga_TNSK_Kota_Silk_Multi_Lahariya_4_1648031803257_350x.jpg?v=1703669753"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/Lehenga_Size_0640e86d-1ebf-4b4a-94a7-9aeef4eb99b6_550x.jpg?v=1729331569"
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
                                <p>SKU: 128LRAPE</p>
                                <p>TechBro Jaipuri Special Kota Doria Gota patti Lehenga KML</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 2,205.00</p>
                                <p className='text-red-600'>Rs. 1,459.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/m/t/c/free-half-sleeve-ms-247-blue-charmi-fashion-original-imagpymmbgpc9jhd.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/m/t/c/free-half-sleeve-ms-247-blue-charmi-fashion-original-imagpymmbgpc9jhd.jpeg?q=70"
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
                                <p>SKU: 434LPIWI</p>
                                <p>TechBro Pure Banarasi Dola silk With Zari Work Lehenga BTU</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>2 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 3,150.00</p>
                                <p className='text-red-600'>Rs. 2,079.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/kfbfr0w0/lehenga-choli/j/u/g/free-half-sleeve-lehenga-16-aqua-gold-best-seller-sexy-bollywood-original-imafvsg9e6hzkkgd.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/kfbfr0w0/lehenga-choli/h/d/9/free-half-sleeve-lehenga-16-aqua-gold-best-seller-sexy-bollywood-original-imafvsg9uywzjuga.jpeg?q=70"
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
                                <p>SKU: 448LREYE</p>
                                <p>TechBro Pure Kota Doria Bandhej Lehenga Chunni KML</p>
                                <p className='line-through text-gray-400'>RRs. 2,520.00</p>
                                <p className='text-red-600'>Rs. 1,659.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2023-02-10at8.11.19AM_750x.jpg?v=1703698383"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/Lehenga_Size_9e044410-81f7-42c3-8837-41f22b34c7d7_550x.jpg?v=1729331538"
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
                                <p>SKU: 231LRE</p>
                                <p>TechBro Latest Jaipur Patola style kota Doria Gota Patti Lehenga KML</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>3 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 1,575.00</p>
                                <p className='text-red-600'>Rs. 789.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/orignal-hand-bandhej-tapeta-silk-lehnga-805835_550x.jpg?v=1707469112"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/Lehenga_Size_2f1fd44b-d35d-4582-a6cb-e1ac43c3960b_550x.jpg?v=1729331573"
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
                                <p>SKU: 037LBL</p>
                                <p>TechBro Original Handmade Bandhej Tapeta Silk Lehenga KML</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>10 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 3,465.00</p>
                                <p className='text-red-600'>Rs. 2,289.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/kg40k280/lehenga-choli/7/x/a/free-half-sleeve-lehenga-22-aqua-gold-best-seller-sexy-bollywood-original-imafwfdrxrnmdbve.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/kg40k280/lehenga-choli/e/v/x/free-short-sleeve-lehenga-21-aqua-gold-best-seller-sexy-original-imafwffnmbqpw6ch.jpeg?q=70"
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
                                <p>SKU: 141LDE1</p>
                                <p>TechBro Rajasthani Special Jaipuri Gota patti Lehengas chunri set KML</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>3 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 3,307.00</p>
                                <p className='text-red-600'>Rs. 2,179.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2023-02-10at7.53.22AM_350x.jpg?v=1703697834"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/Lehenga_Size_5b75e73a-52e6-434e-b08c-196a3041d70e_550x.jpg?v=1735621164"
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
                                <p>SKU: 226LRE</p>
                                <p>TechBro Latest Ghatchola Bandhani Bandhej Lahanga KML</p>
                                <p className='line-through text-gray-400'>Rs. 3,307.00</p>
                                <p className='text-red-600'>Rs. 2,179.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/IMG-20230203-WA0019_550x.jpg?v=1704526962"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/IMG-20230203-WA0022_350x.jpg?v=1704526962"
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
                                <p>SKU: 1212LRA</p>
                                <p>TechBro Pure Georgette Bandhani Stone Work Lehenga RTK</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>6 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 6,142.00</p>
                                <p className='text-red-600'>Rs. 4,049.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/IMG-20241214-WA0068_350x.jpg?v=1734336779"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/IMG-20241214-WA0058_350x.jpg?v=1739008248"
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
                                <p>SKU: 1202S-1</p>
                                <p>TechBro Latest Upada Silk Fabric Bandhani Ghatchola Meenakari Banarasi Saree DC</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>14 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 2,992.00</p>
                                <p className='text-red-600'>Rs. 1,979.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/f/k/e/free-half-sleeve-pink-goroly-lehenga-choli-cotton-linen-original-imah2ss8xfesvgzd.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/3/6/l/free-half-sleeve-navy-blue-goroly-1-lehenga-choli-cotton-linen-original-imah7x6szrbtgbyt.jpeg?q=70"
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
                                <p>SKU: 518LMU</p>
                                <p>TechBro Pure Chinon Crush With Bandhej Silk Heavy Work Embroidery Lehenga RAJ</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>3 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 6,142.00</p>
                                <p className='text-red-600'>Rs. 4,049.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/IMG-20230413-WA0006_350x.jpg?v=1718172714"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/Lehenga_Size_c0dd1637-8a2d-44b5-be8d-4b25a080b1d8_550x.jpg?v=1737374479"
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
                                <p>SKU: 368LYEGR</p>
                                <p>TechBro Pure Dola Silk Russian Banarasi Meenakari Lehenga Chunni Set BTU</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>3 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 3,150.00</p>
                                <p className='text-red-600'>Rs. 2,079.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/1/l/b/free-na-ss-ak29-shree-sant-sarees-original-imah7pczvppwbybb.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/3/q/h/free-half-sleeve-georgette-fabric-lahnga-rai-bandej-original-imahahg86fqgpre5.jpeg?q=70"
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
                                <p>SKU: 208LORGR</p>
                                <p>TechBro Pure Organza Bright Colour Beautiful Gotapatti Work Lehenga BTU</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>3 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 4,095.00</p>
                                <p className='text-red-600'>Rs. 2,699.00
                                </p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/DES_Lehenga_TNSK_Kota_Silk_Multi_Lahariya_4_1648031803257_350x.jpg?v=1703669753"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/Lehenga_Size_0640e86d-1ebf-4b4a-94a7-9aeef4eb99b6_550x.jpg?v=1729331569"
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
                                <p>SKU: 128LRAPE</p>
                                <p>TechBro Jaipuri Special Kota Doria Gota patti Lehenga KML</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>1 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 2,205.00</p>
                                <p className='text-red-600'>Rs. 1,459.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/kz5vwy80/lehenga-choli/x/r/a/free-3-4-sleeve-chakli-gajari-dishwa-fashion-original-imagb8bzpuxdqznc.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/l1fc0i80/lehenga-choli/q/y/n/free-half-sleeve-modak-bt-green-dishwa-fashion-original-imagczmu4wuvtnqe.jpeg?q=70"
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
                                <p>SKU: 434LPIWI</p>
                                <p>TechBro Pure Banarasi Dola silk With Zari Work Lehenga BTU</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>2 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 3,150.00</p>
                                <p className='text-red-600'>Rs. 2,079.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/kfbfr0w0/lehenga-choli/j/u/g/free-half-sleeve-lehenga-16-aqua-gold-best-seller-sexy-bollywood-original-imafvsg9e6hzkkgd.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/kfbfr0w0/lehenga-choli/h/d/9/free-half-sleeve-lehenga-16-aqua-gold-best-seller-sexy-bollywood-original-imafvsg9uywzjuga.jpeg?q=70"
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
                                <p>SKU: 448LREYE</p>
                                <p>TechBro Pure Kota Doria Bandhej Lehenga Chunni KML</p>
                                <p className='line-through text-gray-400'>RRs. 2,520.00</p>
                                <p className='text-red-600'>Rs. 1,659.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2023-02-10at8.11.19AM_750x.jpg?v=1703698383"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/Lehenga_Size_9e044410-81f7-42c3-8837-41f22b34c7d7_550x.jpg?v=1729331538"
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
                                <p>SKU: 231LRE</p>
                                <p>TechBro Latest Jaipur Patola style kota Doria Gota Patti Lehenga KML</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>3 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 1,575.00</p>
                                <p className='text-red-600'>Rs. 789.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/orignal-hand-bandhej-tapeta-silk-lehnga-805835_550x.jpg?v=1707469112"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/Lehenga_Size_2f1fd44b-d35d-4582-a6cb-e1ac43c3960b_550x.jpg?v=1729331573"
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
                                <p>SKU: 037LBL</p>
                                <p>TechBro Original Handmade Bandhej Tapeta Silk Lehenga KML</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>10 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 3,465.00</p>
                                <p className='text-red-600'>Rs. 2,289.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/kg40k280/lehenga-choli/7/x/a/free-half-sleeve-lehenga-22-aqua-gold-best-seller-sexy-bollywood-original-imafwfdrxrnmdbve.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/kg40k280/lehenga-choli/e/v/x/free-short-sleeve-lehenga-21-aqua-gold-best-seller-sexy-original-imafwffnmbqpw6ch.jpeg?q=70"
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
                                <p>SKU: 141LDE1</p>
                                <p>TechBro Rajasthani Special Jaipuri Gota patti Lehengas chunri set KML</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>3 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 3,307.00</p>
                                <p className='text-red-600'>Rs. 2,179.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/WhatsAppImage2023-02-10at7.53.22AM_350x.jpg?v=1703697834"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/Lehenga_Size_5b75e73a-52e6-434e-b08c-196a3041d70e_550x.jpg?v=1735621164"
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
                                <p>SKU: 226LRE</p>
                                <p>TechBro Latest Ghatchola Bandhani Bandhej Lahanga KML</p>
                                <p className='line-through text-gray-400'>Rs. 3,307.00</p>
                                <p className='text-red-600'>Rs. 2,179.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/IMG-20230203-WA0019_550x.jpg?v=1704526962"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/IMG-20230203-WA0022_350x.jpg?v=1704526962"
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
                                <p>SKU: 1212LRA</p>
                                <p>TechBro Pure Georgette Bandhani Stone Work Lehenga RTK</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>6 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 6,142.00</p>
                                <p className='text-red-600'>Rs. 4,049.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/IMG-20241214-WA0068_350x.jpg?v=1734336779"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/IMG-20241214-WA0058_350x.jpg?v=1739008248"
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
                                <p>SKU: 1202S-1</p>
                                <p>TechBro Latest Upada Silk Fabric Bandhani Ghatchola Meenakari Banarasi Saree DC</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>14 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 2,992.00</p>
                                <p className='text-red-600'>Rs. 1,979.00</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
