import React from 'react'
import Sidebar from '../components/Sidebar'
import Container from '../components/Container'
import SmallSidebar from '../components/SmallSidebar'
import { FaCartArrowDown, FaSearchPlus, FaStar } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'

export default function All() {
    return (
        <Container>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-1'>
                <div className=' lg:flex hidden '>
                    <Sidebar />
                </div>
                <div className="lg:hidden flex">
                    <SmallSidebar />
                </div>
                <div className='lg:col-span-3 p-2'>
                    <h1 className='font-bold text-[20px]'>ALL PRODUCTS</h1>
                    <div className="grid lg:grid-cols-4 gap-2  md:grid-cols-3 grid-cols-2 my-5">
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
                                        <a href="/addtocart"><FaCartArrowDown className='p-1 bg-black rounded' /></a>
                                        <FaSearchPlus className='p-1 bg-black rounded' />
                                    </span>
                                </div>
                            </a>


                            <span className='text-center text-[14px]'>
                                <p>SKU: 1577SWH</p>
                                <p>TechBro Special Pure Georgette Jaipuri Tie Dye Zari Weaving Saree</p>
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
                        {/* yaha sa start */}

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

                        {/* yaha sa end */}
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
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 "
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/o/c/x/m-127-yellow-sa-rasa-original-imahyshxatuhdp7t.jpeg?q=70"
                                        alt="First"
                                    />
                                    <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                                        <CiHeart className='p-1 bg-black rounded' />
                                        <FaCartArrowDown className='p-1 bg-black rounded' />
                                        <FaSearchPlus className='p-1 bg-black rounded' />
                                    </span>
                                </div>
                            </a>
                            <span className='text-center text-[14px]'>
                                <p>SKU: 4STRK40</p>
                                <p>TechBro Trending Exclusive Jaipuri Designer Straight Kurtis Long Kurtis</p>
                                <p className='line-through text-gray-400'>Rs. 2,677.00</p>
                                <p className='text-red-600'>Rs. 1,606.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/m/g/z/xl-rayon-22-bright-world-original-imagkmffysg8e9gv.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/ktd9mkw0/kurta/w/v/8/6xl-katha-plus-lashkarina-original-imag6q6s8s28xm6r.jpeg?q=70"
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
                                <p>SKU: 1486K40</p>
                                <p>TechBro New Arrival Jaipuri Traditional Marwadi Gotapatti Handwork Long Straight Kurtis</p>
                                <p className='line-through text-gray-400'>Rs. 2,598.00</p>
                                <p className='text-red-600'>Rs. 1,558.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 "
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/k/e/a/xl-124-black-line-kurta-bkapparels-original-imah9vbpkuatnz4j.jpeg?q=70"
                                        alt="First"
                                    />
                                    <span className="absolute text-[35px] bottom-0 group-hover:bottom-2 left-0 w-full text-white flex gap-2 items-center justify-center  bg-opacity-50 py-1 opacity-0 group-hover:opacity-100 duration-1000">
                                        <CiHeart className='p-1 bg-black rounded' />
                                        <FaCartArrowDown className='p-1 bg-black rounded' />
                                        <FaSearchPlus className='p-1 bg-black rounded' />
                                    </span>
                                </div>
                            </a>
                            <span className='text-center text-[14px]'>
                                <p>SKU: 1386K40</p>
                                <p>TechBro Jaipuri Traditional Marwadi Gotapatti Handwork Long Straight Kurti KML</p>
                                <p className='line-through text-gray-400'>Rs. 2,598.00</p>
                                <p className='text-red-600'>Rs. 1,558.00</p>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 cursor-pointer'>
                            <a href="/detailspage">
                                <div className="relative w-[150px] lg:w-[210px] md:w-[180px] md:h-[250px] lg:h-[300px] h-[200px] overflow-hidden group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-100 group-hover:opacity-0"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/0/h/o/free-chifon-silk-saree-sathiya-creation-unstitched-original-imagdh2humfhc9fq.jpeg?q=70"
                                        alt="First"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 opacity-0 group-hover:opacity-100"
                                        src="https://rukminim2.flixcart.com/image/612/612/kq9ta4w0/sari/5/l/3/free-ruffle-plain-premium-qualityroyalblue-red-yellow-fabric-original-imag4bgjjhvztk5j.jpeg?q=70"
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
                                <p>SKU: 1330KRE40</p>
                                <p>TechBro Latest Pure Georgette Marwadi Chunri Bandhej Gotapatti Zaridoji work Kurtis KML</p>
                                <p className='line-through text-gray-400'>Rs. 2,598.00</p>
                                <p className='text-red-600'>Rs. 1,558.00</p>
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
                                <p>TechBro New Latest Georgette Fabric Cutdana kashida work indo western Dress MUL</p>
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
                                <p>TechBro New Latest Chinon Silk Cutdana work indo western Dress MUL</p>
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
                                <p>TechBro New Beautiful Chinon Silk Cutdana work indo western Dress MUL</p>
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
                                <p>TechBro New Latest Munga silk Zardoji work indo western Dress MUL</p>
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
                                <p>TechBro New Beautiful Munga silk Zardoji work indo western Dress MUL</p>
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
                                <p>TechBro New Latest Chinon Silk Bollywood Gotapatti work indo western Dress MUL</p>
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
                                <p>TechBro New Chinon Silk Bollywood White beads work indo western Dress MUL</p>
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
                                <p>TechBro New Pure Georgette Crop Top Style With Zardoji Work indo western Dress MUL</p>
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
                                <p>TechBro New Georgette Bollywood Fabric Cutdana kashida work indo western Dress MUL</p>
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
                                <p>TechBro New Crap Silk Bollywood Cutdana kashida work indo western Dress MUL</p>
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
                                <p>TechBro New H O silk Crop Top Style With Kashida Cutdana Work indo western Dress MUL</p>
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
                                <p>TechBro New Gaji Silk Bandhani Style With Gotapatti Work indo western Dress RGC</p>
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
