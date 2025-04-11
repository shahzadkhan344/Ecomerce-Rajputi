import React, { useState } from 'react'
import Container from './Container'
import { FaAngleDown, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaSquarePhone, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa6'
import { MdOutlineEmail } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { CiHeart, CiUser } from 'react-icons/ci';
import { FaShoppingBag } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TiDelete } from 'react-icons/ti';


export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [accordian, setAccordian] = useState(null);
  const topbottoms = (keys) => {
    setAccordian(accordian == keys ? null : keys)
  }
  const togglebar = (menu) => {
    setActive(active == menu ? null : menu)
  }
  return (
    <>
      <div className="bg-red-950">
        <Container>
          <header className='p-2'>
            <div className="bg-red-950 flex lg:justify-between justify-center items-center text-[13px] text-white">
              <span className="lg:flex gap-2 items-center hidden"><span className='flex items-center gap-2'><FaSquarePhone /><span> +91-0987654321</span></span><span className='flex items-center gap-2'><MdOutlineEmail /> <span>anujsaini@gmail.com</span> </span></span>
              <span>FREE SHIPPING on order above ₹499</span>
              <span className="lg:flex hidden items-center gap-2">
                <span>Follow Us:</span>
                <span><FaFacebookF /> </span>
                <span><FaTwitter /> </span>
                <span><FaPinterestP /> </span>
                <span><FaInstagram /> </span>
                <span><FaLinkedinIn /> </span>
                <span><FaYoutube /> </span>
                <span><FaWhatsapp /> </span>
              </span>
            </div>
          </header>
        </Container>
      </div>
      <Container>
        <header className='my-3 lg:block hidden'>
          <div className="grid grid-cols-6">
            <div className='flex justify-center'>
              <a href="/"><img width={100} src="https://www.techbro24.com/img/logo.png" alt="" /></a>
            </div>
            <div className="text-[12px] flex col-span-3 flex-col gap-5">
              <div className="flex flex-nowrap items-center gap-2">
                <span className="hover:text-orange-500 duration-500 cursor-pointer"><a href="/all">ALL</a></span>

                <span className="relative group cursor-pointer">
                  <div className="hover:text-orange-500 duration-500 ">
                    <a className='flex items-center gap-1' href="/saress">SARESS <FaAngleDown /></a>
                  </div>
                  <div className="absolute left-0 hidden group-hover:block bg-white shadow-md z-10">
                    <div className="flex gap-8 p-4 text-black text-[12px]">
                      <ul>
                        <li><strong>BY STYLE</strong></li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Ajrakh Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Bandhani Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Banarasi Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Bollywood Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Designer Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Kalamkari Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Leheriya Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Patola Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Printed Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Paithani Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Traditional Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Ready to Wear Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Readymade Blouse Saree</li>
                      </ul>
                      <ul>
                        <li><strong>BY FABRIC</strong></li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Cotton Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Silk Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Chiffon Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Goorgette Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Khaddi Georgette Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Kota Doriya Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Ojariya Crepesaree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Gaji Silk Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Irganze Saree</li>
                      </ul>
                      <ul>
                        <li><strong>BY OCCASION</strong></li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Daily Wear Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Party Wear Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Causal Wear Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Mangal Path Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Bridal Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Festive Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Engagment Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Haldi Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Mehndi Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Offical wear Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Reception Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Sangeet Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Wedding Saree</li>
                      </ul>
                      <ul>
                        <li><strong>BY WORK</strong></li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Gota Patti Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>HandWork Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Sequence Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Aari Tari Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Mirror Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Chikankari Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Beds Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Embroidery Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Zardosi Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Stone Saree</li>
                        <li className='hover:text-orange-500 translate-[-5px] hover:translate-1 my-1 duration-500'>Cutwork Saree</li>
                      </ul>
                      <ul>
                        <li><strong>BY PRICE</strong></li>
                        <li className='hover:text-orange-500 hover:translate-1 my-1 duration-500 translate-[-5px] whitespace-nowrap'>0-500</li>
                        <li className='hover:text-orange-500 hover:translate-1 my-1 duration-500 translate-[-5px] whitespace-nowrap'>500-999</li>
                        <li className='hover:text-orange-500 hover:translate-1 my-1 duration-500 translate-[-5px] whitespace-nowrap'>1000-1999</li>
                        <li className='hover:text-orange-500 hover:translate-1 my-1 duration-500 translate-[-5px] whitespace-nowrap'>2000-2999</li>
                        <li className='hover:text-orange-500 hover:translate-1 my-1 duration-500 translate-[-5px] whitespace-nowrap'>3000-4999</li>
                        <li className='hover:text-orange-500 hover:translate-1 my-1 duration-500 translate-[-5px] whitespace-nowrap'>5000-9999</li>
                        <li className='hover:text-orange-500 hover:translate-1 my-1 duration-500 translate-[-5px] whitespace-nowrap'>10000 & Above</li>
                      </ul>
                    </div>
                  </div>
                </span>

                <span className="relative group cursor-pointer">
                  <div className="hover:text-orange-500 duration-500 ">
                    <a className='flex items-center gap-1' href="/lehnga">LEHENGA <FaAngleDown /></a>
                  </div>
                  <div className="absolute left-0 hidden group-hover:block bg-white shadow-md p-4 text-black z-10">
                    <ul className="text-[12px]">
                      <li className='whitespace-nowrap my-1 hover:translate-1 hover:text-orange-500 duration-500'>Lehenga Under 1500</li>
                      <li className='whitespace-nowrap my-1 hover:translate-1 hover:text-orange-500 duration-500'>Lehenga Under 2000</li>
                      <li className='whitespace-nowrap my-1 hover:translate-1 hover:text-orange-500 duration-500'>Lehenga Under 2500</li>
                      <li className='whitespace-nowrap my-1 hover:translate-1 hover:text-orange-500 duration-500'>Lehenga Under 3000</li>
                      <li className='whitespace-nowrap my-1 hover:translate-1 hover:text-orange-500 duration-500'>Lehenga Under 4000</li>
                      <li className='whitespace-nowrap my-1 hover:translate-1 hover:text-orange-500 duration-500'>Lehenga Under 5000</li>
                      <li className='whitespace-nowrap my-1 hover:translate-1 hover:text-orange-500 duration-500'>Lehenga Under 7000</li>
                      <li className='whitespace-nowrap my-1 hover:translate-1 hover:text-orange-500 duration-500'>Lehenga Under 10000</li>
                      <li className='whitespace-nowrap my-1 hover:translate-1 hover:text-orange-500 duration-500'>Lehenga Under 15000</li>
                      <li className='whitespace-nowrap my-1 hover:translate-1 hover:text-orange-500 duration-500'>Lehenga Under 20000</li>
                      <li className='whitespace-nowrap my-1 hover:translate-1 hover:text-orange-500 duration-500'>Lehenga Under 30000</li>
                    </ul>
                  </div>
                </span>

                <span className="relative group cursor-pointer">
                  <div className="hover:text-orange-500 duration-500 ">
                    <a className='flex items-center gap-1' href="/chunripila">CHUNRI PILA <FaAngleDown /></a>
                  </div>
                  <div className="absolute left-0 hidden group-hover:block bg-white shadow-md p-4 text-black z-10">
                    <ul className="text-[12px]">
                      <li className='whitespace-nowrap hover:translate-1 hover:text-orange-500 duration-500 my-1'>Broach Stall</li>
                      <li className='whitespace-nowrap hover:translate-1 hover:text-orange-500 duration-500 my-1'>Belbuti Odhani</li>
                      <li className='whitespace-nowrap hover:translate-1 hover:text-orange-500 duration-500 my-1'>Secha Maal & Aaritari Odhani</li>
                      <li className='whitespace-nowrap hover:translate-1 hover:text-orange-500 duration-500 my-1'>Marwadi Chunri Pila Dupatta</li>
                      <li className='whitespace-nowrap hover:translate-1 hover:text-orange-500 duration-500 my-1'>Mata Ki Chunari</li>
                    </ul>
                  </div>
                </span>

                <span className="hover:text-orange-500 duration-500 cursor-pointer"><a href="/suits">SUITS</a></span>

                <span className="relative group cursor-pointer">
                  <div className="hover:text-orange-500 duration-500">
                    <a className='flex items-center gap-1' href="/dupatta">DUPATTA <FaAngleDown /></a>
                  </div>
                  <div className="absolute left-0 hidden group-hover:block bg-white shadow-md p-4 text-black z-10">
                    <ul className="text-[12px]">
                      <li className='whitespace-nowrap hover:text-orange-500 hover:translate-1 my-1 duration-500'>Bandhani Dupatta</li>
                      <li className='whitespace-nowrap hover:text-orange-500 hover:translate-1 my-1 duration-500'>Leheriya Dupatta</li>
                      <li className='whitespace-nowrap hover:text-orange-500 hover:translate-1 my-1 duration-500'>Bridal Dupatta</li>
                      <li className='whitespace-nowrap hover:text-orange-500 hover:translate-1 my-1 duration-500'>Chunripila Dupatta</li>
                      <li className='whitespace-nowrap hover:text-orange-500 hover:translate-1 my-1 duration-500'>Ajrakh Dupatta</li>
                      <li className='whitespace-nowrap hover:text-orange-500 hover:translate-1 my-1 duration-500'>Patola Dupatta</li>
                      <li className='whitespace-nowrap hover:text-orange-500 hover:translate-1 my-1 duration-500'>Banarasi Dupatta</li>
                      <li className='whitespace-nowrap hover:text-orange-500 hover:translate-1 my-1 duration-500'>GottaPatti Dupatta</li>
                      <li className='whitespace-nowrap hover:text-orange-500 hover:translate-1 my-1 duration-500'>Men's Dupatta</li>
                    </ul>
                  </div>
                </span>

                <span className="hover:text-orange-500 duration-500 cursor-pointer"><a href="/kurtis">KURTIS</a></span>
                <span className="hover:text-orange-500 duration-500 cursor-pointer"><a href="/indowestron">INDO WESTRON</a></span>
              </div>

              <div className="flex flex-nowrap items-center justify-center gap-2">
                <span className="hover:text-orange-500 duration-500 cursor-pointer"><a href="/reviews">REVIEWS</a></span>
                <span className="hover:text-orange-500 duration-500 cursor-pointer"><a href="/trackorder">TRACK ORDER</a></span>
              </div>
            </div>

            <div className='col-span-2 grid grid-cols-2 items-center justify-center gap-4'>
              <span className='w-full'>
                <input type="text" className='w-full outline-none rounded p-2 border border-gray-200' placeholder='Search For Products' />
              </span>
              <span className='flex items-center text-2xl gap-3'>
                <a href="/login"><CiUser /></a>
                <CiHeart />
                <a href="/addtocart"><FaShoppingBag /></a>
              </span>
            </div>
          </div>
        </header>
      </Container>
      <Container>
        <header className='my-3 lg:hidden block'>
          <div className="grid grid-cols-3 items-center p-2">
            <div className='text-2xl'>
              <GiHamburgerMenu onClick={() => setOpen(!open)} />
            </div>
            <div>
              <a href="/"><img width={100} src="https://www.techbro24.com/img/logo.png" alt="" /></a>
            </div>
            <div className=''>

              <span className='flex justify-end  text-2xl gap-3'>
                <a href="/login"><CiUser /></a>
                <CiHeart />
                <a href="/addtocart"><FaShoppingBag /></a>
              </span>
            </div>
          </div>
        </header>
      </Container>
      <Container>
        <div className={`relative `}>
          <div className={`fixed flex-wrap lg:hidden inline overflow-y-auto bg-white z-50 duration-700 w-[100%] left-0 top-0  h-screen ${open == true ? "scale-100 " : "scale-0"}`}>
            <div className='duration-500 border-b border-gray-200 p-1 flex justify-end items-center gap-1 bg-red-900 text-white rounded'><TiDelete className='text-3xl' onClick={() => setOpen(false)} /></div>
            <div className="p-1">
              <div className='duration-500 border-b border-gray-200 p-1'><a href="/all">ALL</a></div>
              <div>
                <div className="flex border-b border-gray-200 p-1 items-center gap-1">
                  <span className="flex items-center justify-between w-full">
                    <span className="flex items-center gap-1">
                      <span> <a href="/saress">SARESS</a>  </span>
                    </span>
                    <span className="text-3xl cursor-pointer" onClick={() => togglebar("first")}>
                      {active === "first" ? "-" : "+"} </span>
                  </span>
                </div>
                <div className={`overflow-hidden transition-all px-2 duration-500 bg-gray-100 ${active === "first" ? "h-auto opacity-100" : "h-0 opacity-0"}`} >
                  <div className="space-y-3 w-full">
                    <div>
                      <div className="flex justify-between items-center"><span>BY STYLE</span> <span className="text-[22px]" onClick={() => topbottoms("one")}>{accordian == "one" ? "-" : "+"}</span>  </div>
                      <div className={`transition-all space-y-3 overflow-hidden duration-500 px-3 ${accordian === "one" ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
                        <div>AJRAKH SAREE</div>
                        <div>BANDHANI SAREE</div>
                        <div>BANARASI SAREE</div>
                        <div>BOLLYWOOD SAREE</div>
                        <div>DESIGNER SAREE</div>
                        <div>KALAMKARI SAREE</div>
                        <div>LEHERIYA SAREE</div>
                        <div>PATOLA SAREE</div>
                        <div>PRINTED SAREE</div>
                        <div>PAITHANI SAREE</div>
                        <div>TRADITIONAL SAREE</div>
                        <div>READY TO WEAR SAREE</div>
                        <div>READYMADE BLOUSE SAREE</div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        <span>BY FABRIC</span>
                        <span className="text-[22px] cursor-pointer" onClick={() => setAccordian(accordian === "two" ? "" : "two")}>  {accordian === "two" ? "-" : "+"} </span>
                      </div>
                      <div className={`transition-all space-y-3 overflow-hidden px-3 duration-500 ${accordian === "two" ? "h-auto opacity-100" : "h-0 opacity-0"}`}   >
                        <div>COTTON SAREE</div>
                        <div>SILK SAREE</div>
                        <div>CHIFFON SAREE</div>
                        <div>GEORGETTE SAREE</div>
                        <div>KHADI GEORGETTE SAREE</div>
                        <div>KOTA DORIA SAREE</div>
                        <div>OJARIYA SAREE</div>
                        <div>GAJI SILK SAREE</div>
                        <div>ORGANZA SAREE</div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center"><span>BY OCCASION</span> <span className="text-[22px]" onClick={() => setAccordian(accordian === "ten" ? "" : "ten")}>{accordian === "ten" ? "-" : "+"}</span></div>
                      <div className={`transition-all space-y-3 overflow-hidden px-3 duration-500 ${accordian === "ten" ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
                        <div>DAILY WEAR SAREE</div>
                        <div>PARTY WEAR SAREE</div>
                        <div>CAUSAL WEAR SAREE</div>
                        <div>MANGAL PATH SAREE</div>
                        <div>BRIDAL SAREE</div>
                        <div>FESTIVE SAREE</div>
                        <div>ENGAGEMENT SAREE</div>
                        <div>HALDI SAREE</div>
                        <div>MEHNDI SAREE</div>
                        <div>OFFICE WEAR SAREE</div>
                        <div>RECEPTION SAREE</div>
                        <div>SANGEET SAREE</div>
                        <div>WEDDING SAREE</div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center"><span>BY WORK</span> <span className="text-[22px]" onClick={() => setAccordian(accordian === "eleven" ? "" : "eleven")}>{accordian === "eleven" ? "-" : "+"}</span> </div>
                      <div className={`transition-all space-y-3 overflow-hidden px-3 duration-500 ${accordian === "eleven" ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
                        <div>GOTTAPATTI SAREE</div>
                        <div>HANDWORK SAREE</div>
                        <div>SEQUENCE SAREE</div>
                        <div>AARI TARI SAREE</div>
                        <div>MIRROR SAREE</div>
                        <div>CHIKANKARI SAREE</div>
                        <div>BEADS SAREE</div>
                        <div>EMBROIDERY SAREE</div>
                        <div>ZARDOSI SAREE</div>
                        <div>STONE SAREE</div>
                        <div>CUTWORK SAREE</div>
                      </div>

                    </div>
                    <div>
                      <div className="flex justify-between items-center"><span>BY PRICE</span><span className="text-[22px]" onClick={() => setAccordian(accordian == "twel" ? "" : "twel")}>{accordian === "twel" ? "-" : "+"}</span> </div>
                      <div className={`transition-all space-y-3 px-3 overflow-hidden duration-500 ${accordian === "twel" ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
                        <div>0-500</div>
                        <div>500-999</div>
                        <div>1000-1999</div>
                        <div>2000-2999</div>
                        <div>3000-4999</div>
                        <div>5000-9999</div>
                        <div>10000 & Above</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="border-b border-gray-200 p-1">
                  <span className="flex items-center justify-between w-full">
                    <span className="flex items-center gap-1">
                      <span>  <a href="/lehnga">LEHENGA</a>  </span>
                    </span>
                    <span className="text-[30px] cursor-pointer" onClick={() => togglebar("second")}>{active === "second" ? "-" : "+"} </span>
                  </span>
                </div>
                <div className={`overflow-hidden space-y-3  transition-all duration-500 bg-gray-200 px-2 ${active === "second" ? "h-auto opacity-100" : "h-0 opacity-0"}`}  >
                  <div>LEHENGA UNDER 1500</div>
                  <div>LEHENGA UNDER 2000</div>
                  <div>LEHENGA UNDER 2500</div>
                  <div>LEHENGA UNDER 3000</div>
                  <div>LEHENGA UNDER 4000</div>
                  <div>LEHENGA UNDER 5000</div>
                  <div>LEHENGA UNDER 7000</div>
                  <div>LEHENGA UNDER 10000</div>
                  <div>LEHENGA UNDER 15000</div>
                  <div>LEHENGA UNDER 20000</div>
                  <div>LEHENGA UNDER 30000</div>
                </div>
              </div>
              <div>
                <div className='duration-500 border-b border-gray-200 p-1'> <span className='flex items-center justify-between w-full' ><span className='flex items-center gap-1'><span><a href="/chunripila">CHUNRI PILA</a></span></span><span className='text-[30px]' onClick={() => togglebar("three")}>{active == "three" ? "-" : "+"}</span></span></div>
                <div className={`overflow-hidden space-y-3 duration-500 transition-all px-2 bg-gray-200 ${active == "three" ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
                  <div>BROACH STOLE</div>
                  <div>BELBUTI ODHANI</div>
                  <div>SACHA MAAL & AARITARI ODHNA</div>
                  <div>MARWADI CHUNRI PILA DUPATTA</div>
                  <div>MATA CHUNRI</div>
                </div>
              </div>
              <div className='duration-500 border-b border-gray-200 p-1'><a href="/suits">SUITS</a></div>
              <div>
                <div className='duration-500 border-b border-gray-200 p-1'>
                  <span className='flex items-center justify-between w-full'>
                    <span><a href="/dupatta">DUPATTA</a></span>
                    <span
                      onClick={() => setActive(active === "four" ? "" : "four")}
                      className='text-[30px] cursor-pointer'
                    >
                      {active === "four" ? "-" : "+"}
                    </span>
                  </span>
                </div>
                <div className={`transition-all space-y-3 overflow-hidden duration-500 bg-gray-200 p-2 ${active === "four" ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
                  <div>BANDHANI DUPATTA</div>
                  <div>LEHERIYA DUPATTA</div>
                  <div>BRIDAL DUPATTA</div>
                  <div>CHUNRI PILA DUPATTA</div>
                  <div>AJRAKH DUPATTA</div>
                  <div>PATOLA DUPATTA</div>
                  <div>BANARSI  DUPATTA</div>
                  <div>GOTTAPATTI DUPATTA</div>
                  <div>MEN'S DUPATTA</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className='duration-500 border-b border-gray-200 p-1'><a href="/kurtis">KURTIS</a></div>
                <div className='duration-500 border-b border-gray-200 p-1'><a href="/indowestron">INDO WESTRON</a></div>
                <div className='duration-500 border-b border-gray-200 p-1'><a href="/reviews">REVIEWS</a></div>
                <div className='duration-500 border-b border-gray-200 p-1'><a href="/trackorder">TRACK ORDER</a></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <header className='my-3 lg:hidden inline w-full'>
          <div className=" w-full p-2">
            <input type="text" className='w-full outline-none rounded p-2 border border-gray-200' placeholder='Search For Products' />
          </div>
        </header>
      </Container>
      <div className='p-2 text-center bg-red-200 text-[12px] lg:text-[16px]'>Click Here to Join Our Whatesapp Channel For Latest Collection & Product Updates</div>
    </>
  )
}
