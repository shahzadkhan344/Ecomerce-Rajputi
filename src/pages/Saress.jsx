import React from 'react'
import Sidebar from '../components/Sidebar'
import Container from '../components/Container'
import SmallSidebar from '../components/SmallSidebar'
import { FaCartArrowDown, FaSearchPlus, FaStar } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'

export default function Saress() {
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
                    <h1 className='font-bold text-[20px]'>SARESS</h1>
                    <div className="grid lg:grid-cols-4 gap-2  md:grid-cols-3 grid-cols-2 my-5">


                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_0e1419d7-b8d8-457e-8700-e789a7a3e045_350x.jpg?v=1734332843"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_276ebedf-8578-4f6b-8702-93cf38120b18_350x.jpg?v=1734332843"
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
                                <p>SKU: 0853PSRA</p>
                                <p>TechBro New Launch Munga silk Fabric Banarsi Zari weaving saree DC</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>40 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 3,150.00</p>
                                <p className='text-red-600'>Rs. 2,079.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/400s2_350x.webp?v=1740502082"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/400s3_350x.webp?v=1740502082"
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
                                <p>SKU: 400SREGR</p>
                                <p>TechBro Beautiful Moos Chiffon Georgette Bandhani Sarees</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>64 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 1,354.00</p>
                                <p className='text-red-600'> Rs. 500.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/m/i/8/free-brasosari2-0-lorofy-unstitched-original-imah892kdvyxvgna.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/m/b/q/free-jac02-anjavi-fashion-unstitched-original-imah87ymhhecswer.jpeg?q=70"
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
                                <p>SKU: 415SRE</p>
                                <p>TechBro Handmade Bandhej Bandhani Viscos Silk Saree</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>20 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 2,000.00</p>
                                <p className='text-red-600'> Rs. 999.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-02-07_at_12.50.17_PM_350x.jpg?v=1738916297"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-02-07_at_12.50.17_PM_1_350x.jpg?v=1738916297"
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
                                <p>SKU: 883SRE</p>
                                <p>TechBro Beautiful Moss Chiffon Georgette Bandhani Sarees Red</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>27 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 1,323.00</p>
                                <p className='text-red-600'>  Rs. 500.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/t/o/m/free-hatti-superlaxmi-unstitched-original-imagvtzd6sxgwu2f.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/k/3/j/free-1401-salco-unstitched-original-imah2y4fqzenn2ae.jpeg?q=70"
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
                                <p>SKU: 1734SNABL</p>
                                <p>TechBro Latest Jaipuri Traditional Chinon Bandhani Saree Navy Blue</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>16 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 1,197.00</p>
                                <p className='text-red-600'>Rs. 599.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-03-08_at_11.14.24_AM_1_350x.jpg?v=1741420436"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-03-08_at_11.14.21_AM_350x.jpg?v=1741420436"
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
                                <p>SKU: 1718SSKBL</p>
                                <p>TechBro Summer Special Rajasthani Royal Georgette Bandhani Sarees Sky Blue</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>12 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 626.00</p>
                                <p className='text-red-600'>Rs. 309.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/k/3/j/free-1401-salco-unstitched-original-imah2y4fqzenn2ae.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/t/o/m/free-hatti-superlaxmi-unstitched-original-imagvtzd6sxgwu2f.jpeg?q=70"
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
                                <p>SKU: 864SGR-4</p>
                                <p>TechBro New Pashmina Cotton Silk Printed Saree</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>19 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 1,386.00</p>
                                <p className='text-red-600'>Rs. 689.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-02-07_at_4.44.51_PM_350x.jpg?v=1739255447"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-02-07_at_4.44.55_PM_1_350x.jpg?v=1739255447"
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
                                <p>SKU: 1542S-4</p>
                                <p>TechBro Rajwadi Style Royal Georgette Bandhani Sarees Rani</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>5 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 626.00</p>
                                <p className='text-red-600'>Rs. 309.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/8/e/q/free-kanjivaram-avantika-fashion-unstitched-original-imah2tz66dwg8ppq.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/6/b/f/free-banarasi-yg015-green-01-tapovan-fashion-unstitched-original-imah3npean8cgbzt.jpeg?q=70"
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
                                <p>SKU: 549SMU1</p>
                                <p>TechBro Originals Latest Bandhani Come Leheriya Exclusive Banarasi Border Saree STL</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>13 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 1,228.00</p>
                                <p className='text-red-600'>Rs. 619.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/a/8/p/free-white-pink-velvet-lace-harshit-designer-unstitched-original-imahy9m7swr2jvp5.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/6/f/v/free-kanjivaram-green-saree-01-kevamifashion-unstitched-original-imagynnymxvkanwh.jpeg?q=70"
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
                                <p>SKU: 1578S</p>
                                <p>TechBro New Dola Silk MX Zari Banarasi Weaving luxury Saree</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>19 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 2,504.00</p>
                                <p className='text-red-600'>Rs. 1,649.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/t/n/z/free-hal1-red-awesome-unstitched-original-imah76czz7paxskc.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/n/3/r/free-n-gulzar-bpink-patlani-style-unstitched-original-imah9qs7kxcvggx8.jpeg?q=70"
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
                                <p>SKU: 207L</p>
                                <p>TechBro New Designer Patola Lehenga Chunni set KML</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>19 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 3,465.00</p>
                                <p className='text-red-600'>Rs. 2,289.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_132585de-8520-4f32-af23-f429173380c6_350x.jpg?v=1730701447"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_e186729f-eef8-4891-af7d-6053d0de3c39_350x.jpg?v=1730701447"
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
                                <p>SKU: 1577SWH</p>
                                <p>TechBro24 Special Pure Georgette Jaipuri Tie Dye Zari Weaving Saree</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>44 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 2,504.00</p>
                                <p className='text-red-600'>Rs. 1,649.00</p>
                            </span>
                        </div>

                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_0e1419d7-b8d8-457e-8700-e789a7a3e045_350x.jpg?v=1734332843"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_276ebedf-8578-4f6b-8702-93cf38120b18_350x.jpg?v=1734332843"
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
                                <p>SKU: 0853PSRA</p>
                                <p>TechBro New Launch Munga silk Fabric Banarsi Zari weaving saree DC</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>40 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 3,150.00</p>
                                <p className='text-red-600'>Rs. 2,079.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/400s2_350x.webp?v=1740502082"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/400s3_350x.webp?v=1740502082"
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
                                <p>SKU: 400SREGR</p>
                                <p>TechBro Beautiful Moos Chiffon Georgette Bandhani Sarees</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>64 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 1,354.00</p>
                                <p className='text-red-600'> Rs. 500.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/m/i/8/free-brasosari2-0-lorofy-unstitched-original-imah892kdvyxvgna.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/m/b/q/free-jac02-anjavi-fashion-unstitched-original-imah87ymhhecswer.jpeg?q=70"
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
                                <p>SKU: 415SRE</p>
                                <p>TechBro Handmade Bandhej Bandhani Viscos Silk Saree</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>20 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 2,000.00</p>
                                <p className='text-red-600'> Rs. 999.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-02-07_at_12.50.17_PM_350x.jpg?v=1738916297"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-02-07_at_12.50.17_PM_1_350x.jpg?v=1738916297"
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
                                <p>SKU: 883SRE</p>
                                <p>TechBro Beautiful Moss Chiffon Georgette Bandhani Sarees Red</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>27 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 1,323.00</p>
                                <p className='text-red-600'>  Rs. 500.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/t/o/m/free-hatti-superlaxmi-unstitched-original-imagvtzd6sxgwu2f.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/k/3/j/free-1401-salco-unstitched-original-imah2y4fqzenn2ae.jpeg?q=70"
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
                                <p>SKU: 1734SNABL</p>
                                <p>TechBro Latest Jaipuri Traditional Chinon Bandhani Saree Navy Blue</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>16 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 1,197.00</p>
                                <p className='text-red-600'>Rs. 599.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-03-08_at_11.14.24_AM_1_350x.jpg?v=1741420436"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-03-08_at_11.14.21_AM_350x.jpg?v=1741420436"
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
                                <p>SKU: 1718SSKBL</p>
                                <p>TechBro Summer Special Rajasthani Royal Georgette Bandhani Sarees Sky Blue</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>12 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 626.00</p>
                                <p className='text-red-600'>Rs. 309.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/k/3/j/free-1401-salco-unstitched-original-imah2y4fqzenn2ae.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/t/o/m/free-hatti-superlaxmi-unstitched-original-imagvtzd6sxgwu2f.jpeg?q=70"
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
                                <p>SKU: 864SGR-4</p>
                                <p>TechBro New Pashmina Cotton Silk Printed Saree</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>19 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 1,386.00</p>
                                <p className='text-red-600'>Rs. 689.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-02-07_at_4.44.51_PM_350x.jpg?v=1739255447"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/WhatsApp_Image_2025-02-07_at_4.44.55_PM_1_350x.jpg?v=1739255447"
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
                                <p>SKU: 1542S-4</p>
                                <p>TechBro Rajwadi Style Royal Georgette Bandhani Sarees Rani</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>5 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 626.00</p>
                                <p className='text-red-600'>Rs. 309.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/8/e/q/free-kanjivaram-avantika-fashion-unstitched-original-imah2tz66dwg8ppq.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/6/b/f/free-banarasi-yg015-green-01-tapovan-fashion-unstitched-original-imah3npean8cgbzt.jpeg?q=70"
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
                                <p>SKU: 549SMU1</p>
                                <p>TechBro Originals Latest Bandhani Come Leheriya Exclusive Banarasi Border Saree STL</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>13 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 1,228.00</p>
                                <p className='text-red-600'>Rs. 619.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/a/8/p/free-white-pink-velvet-lace-harshit-designer-unstitched-original-imahy9m7swr2jvp5.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/6/f/v/free-kanjivaram-green-saree-01-kevamifashion-unstitched-original-imagynnymxvkanwh.jpeg?q=70"
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
                                <p>SKU: 1578S</p>
                                <p>TechBro New Dola Silk MX Zari Banarasi Weaving luxury Saree</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>19 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 2,504.00</p>
                                <p className='text-red-600'>Rs. 1,649.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/t/n/z/free-hal1-red-awesome-unstitched-original-imah76czz7paxskc.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/n/3/r/free-n-gulzar-bpink-patlani-style-unstitched-original-imah9qs7kxcvggx8.jpeg?q=70"
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
                                <p>SKU: 207L</p>
                                <p>TechBro New Designer Patola Lehenga Chunni set KML</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>19 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 3,465.00</p>
                                <p className='text-red-600'>Rs. 2,289.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_132585de-8520-4f32-af23-f429173380c6_350x.jpg?v=1730701447"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_e186729f-eef8-4891-af7d-6053d0de3c39_350x.jpg?v=1730701447"
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
                                <p>SKU: 1577SWH</p>
                                <p>TechBro24 Special Pure Georgette Jaipuri Tie Dye Zari Weaving Saree</p>
                                <p className='flex items-center justify-center gap-1 text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>44 reviews</p></p>
                                <p className='line-through text-gray-400'>Rs. 2,504.00</p>
                                <p className='text-red-600'>Rs. 1,649.00</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
