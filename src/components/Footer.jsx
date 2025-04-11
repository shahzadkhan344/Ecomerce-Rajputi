import React from 'react'
import Container from './Container'

export default function Footer() {
    return (
        <>

            <Container>
                <div className="my-5 lg:w-[1150px] mx-auto w-full p-2">
                    <h1 className='text-center text-2xl font-bold my-4'>We Are Featured On</h1>
                    <div className='grid my-5 gap-3 grid-cols-3'>
                        <div className='flex flex-col items-center gap-4'>
                            <img src="https://onlinebandhej.com/cdn/shop/files/1.png?v=1736753570" alt="" />
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                            <img src="https://onlinebandhej.com/cdn/shop/files/3.png?v=1736753570" alt="" />
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                            <img src="https://onlinebandhej.com/cdn/shop/files/Untitled_design_7.png?v=1736753854" alt="" />
                        </div>
                    </div>
                </div>
            </Container>
            <div className="bg-gray-100 py-2">
                <Container>
                    <div className="lg:w-[1130px] px-2 mx-auto w-full">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                            <div>
                                <h3 class="font-bold text-black mb-2">TechBro24</h3>
                                <p>Jaipur Rajasthan 303707</p>
                                <p><strong>Phone:</strong> +91-0987654321</p>
                            </div>

                            <div>
                                <h3 class="font-bold text-black mb-2 ">INFORMATION</h3>
                                <ul class="space-y-1">
                                    <li className='hover:translate-1 cursor-pointer duration-500 hover:text-orange-600'>Become a Partner</li>
                                    <li className='hover:translate-1 cursor-pointer duration-500 hover:text-orange-600'>Career</li>
                                    <li className='hover:translate-1 cursor-pointer duration-500 hover:text-orange-600'>About Us</li>
                                    <li className='hover:translate-1 cursor-pointer duration-500 hover:text-orange-600'>Contact Us</li>
                                    <li className='hover:translate-1 cursor-pointer duration-500 hover:text-orange-600'>Privacy Policy</li>
                                    <li className='hover:translate-1 cursor-pointer duration-500 hover:text-orange-600'>Return Policy</li>
                                    <li className='hover:translate-1 cursor-pointer duration-500 hover:text-orange-600'>Shipping Policy</li>
                                    <li className='hover:translate-1 cursor-pointer duration-500 hover:text-orange-600'>Terms & Conditions</li>
                                    <li className='hover:translate-1 cursor-pointer duration-500 hover:text-orange-600'>Copyright FAQ's</li>
                                    <li className='hover:translate-1 cursor-pointer duration-500 hover:text-orange-600'>Site Map</li>
                                </ul>
                            </div>

                            <div>
                                <h3 class="font-bold text-black mb-2">QUICK SHOP</h3>
                                <ul class="space-y-1">
                                    <li className='hover:translate-1 duration-500 hover:text-orange-600 cursor-pointer'>Sarees</li>
                                    <li className='hover:translate-1 duration-500 hover:text-orange-600 cursor-pointer'>Marwadi Chunri Pila</li>
                                    <li className='hover:translate-1 duration-500 hover:text-orange-600 cursor-pointer'>Dupatta</li>
                                    <li className='hover:translate-1 duration-500 hover:text-orange-600 cursor-pointer'>Lehengas</li>
                                    <li className='hover:translate-1 duration-500 hover:text-orange-600 cursor-pointer'>Salwar Suits</li>
                                    <li className='hover:translate-1 duration-500 hover:text-orange-600 cursor-pointer'>Ladies Kurtis</li>
                                    <li className='hover:translate-1 duration-500 hover:text-orange-600 cursor-pointer'>Return Gifts</li>
                                    <li className='hover:translate-1 duration-500 hover:text-orange-600 cursor-pointer'>Value For Money</li>
                                    <li className='hover:translate-1 duration-500 hover:text-orange-600 cursor-pointer'>Premium Sarees</li>
                                    <li className='hover:translate-1 duration-500 hover:text-orange-600 cursor-pointer'>Sale</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-black mb-2">NEWSLETTER</h3>
                                <p className="mb-2">Enter your email to receive daily updates</p>
                                <div className="flex lg:flex-row md:flex-col mb-4">
                                    <input type="email" placeholder="Email address" className="border outline-none border-gray-300 p-2 flex" />
                                    <button className="bg-black text-white px-4">SUBSCRIBE</button>
                                </div>
                                <h3 className="font-bold text-black mb-2">Follow Us</h3>
                                <div className="flex space-x-4 text-xl text-gray-700">
                                    <i className="fab fa-facebook-f" />
                                    <i className="fab fa-twitter" />
                                    <i className="fab fa-pinterest-p" />
                                    <i className="fab fa-instagram" />
                                    <i className="fab fa-linkedin-in" />
                                    <i className="fab fa-youtube" />
                                    <i className="fab fa-whatsapp" />
                                </div>
                                <div className="text-center mt-6 text-gray-500">
                                    © 2025 <a href="https://www.techbro24.com/">TechBro24</a>  <br />
                                    Customers rate us 4.8/5 based on 5683 reviews.
                                </div>
                            </div>

                        </div>
                    </div>
                </Container>
            </div>
        </>

    )
}
