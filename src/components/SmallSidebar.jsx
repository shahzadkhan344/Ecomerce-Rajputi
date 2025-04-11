import React, { useState } from 'react'
import { FaAngleRight, FaArrowLeft, FaFilter } from 'react-icons/fa'
import { RiCheckFill } from 'react-icons/ri';
import { TiDelete } from 'react-icons/ti'

export default function SmallSidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const toggles = (menu) => {
    setActive(active == menu ? null : menu)
  }
  return (

    <>
      <div className="w-full">
        <div className='w-full'>
          <h1 className='font-bold text-[20px] my-3 px-2'>ALL PRODUCTS</h1>
          <div className='grid grid-cols-2 w-full'>
            <div className='border border-gray-200 p-2 mb-4 text-center'>Sort By</div>
            <div onClick={() => setOpen(true)} className='border border-gray-200 p-2 mb-4 text-center flex items-center justify-center gap-3'><span>Filter</span><FaFilter /></div>
          </div>
        </div>
        <div className={`fixed top-0 z-40 w-full overflow-y-auto h-full bg-gray-100 left-0 duration-500 ${open == true ? "scale-100" : "scale-0"}`}>
          <span className=' flex justify-between w-full items-center p-2' onClick={() => setOpen(false)}><h1 className='font-semibold text-[20px] flex items-center gap-1'><FaArrowLeft /><span>FILTER</span></h1> <TiDelete className='text-3xl' /></span>
          <div className="h-full w-full">
            <div className="grid grid-cols-3 w-full my-5">
              <div className='bg-gray-200 space-y-5'>
                <div className='flex items-center justify-between p-2'>
                  <span>Price</span><FaAngleRight />
                </div>
                <div onClick={() => toggles(active == "one" ? "" : "one")} className={`flex items-center justify-between p-2 ${active == "one" ? "bg-gray-500 text-white" : ""}`}>
                  <span>Color</span><FaAngleRight />
                </div>

                <div onClick={() => toggles(active == "two" ? "" : "two")} className={`flex items-center justify-between p-2 ${active == "two" ? "bg-gray-500 text-white" : ""}`}>
                  <span>Fabric</span><FaAngleRight />
                </div>
                <div onClick={() => toggles(active == "three" ? "" : "three")} className={`flex items-center justify-between p-2 ${active == "three" ? "bg-gray-500 text-white" : ""}`}>
                  <span>Occasion</span><FaAngleRight />
                </div>
                <div onClick={() => toggles(active == "four" ? "" : "four")} className={`flex items-center justify-between p-2 ${active == "four" ? "bg-gray-500 text-white" : ""}`}>
                  <span>Style</span><FaAngleRight />
                </div>
                <div onClick={() => toggles(active == "five" ? "" : "five")} className={`flex items-center justify-between p-2 ${active == "five" ? "bg-gray-500 text-white" : ""}`}>
                  <span>Work Type</span><FaAngleRight />
                </div>
                <div onClick={() => toggles(active == "six" ? "" : "six")} className={`flex items-center justify-between p-2 ${active == "six" ? "bg-gray-500 text-white" : ""}`}>
                  <span>Category</span><FaAngleRight />
                </div>
                <div onClick={() => toggles(active == "seven" ? "" : "seven")} className={`flex items-center justify-between p-2 ${active == "seven" ? "bg-gray-500 text-white" : ""}`}>
                  <span>Availlability</span><FaAngleRight />
                </div>

              </div>
              <div className="col-span-2 p-2">
                <div className={`overflow-hidden transaction-all ${active === "one" ? "flex" : "hidden"}`}>
                  <ul className='space-y-5 w-full'>
                    <li><input type="text" className='outline-none border-b w-full p-1' placeholder='Search Color' /></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1'><span className='p-2 bg-red-500 rounded-full'></span><span>Red</span></span><span>(842)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1'><span className='p-2 bg-green-500 rounded-full'></span><span>Green</span></span><span>(272)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1'><span className='p-2 bg-pink-500 rounded-full'></span><span>Pink</span></span><span>(420)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1'><span className='p-2 bg-blue-500 rounded-full'></span><span>Blue</span></span><span>(165)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1'><span className='p-2 bg-purple-500 rounded-full'></span><span>Maroon</span></span><span>(70)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1'><span className='p-2 bg-yellow-500 rounded-full'></span><span>Yellow</span></span><span>(262)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1'><span className='p-2 bg-gray-500 rounded-full'></span><span>Gray</span></span><span> (146)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1'><span className='p-2 bg-orange-500 rounded-full'></span><span>Purple</span></span><span>(136)</span></li>
                  </ul>
                </div>
                <div className={`overflow-hidden transaction-all ${active === "two" ? "flex" : "hidden"}`}>
                  <ul className='space-y-5 w-full'>
                    <li><input type="text" className='outline-none border-b w-full p-1' placeholder='Search by Fabric' /></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Chiffon</span></span><span>(243)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Cotton</span></span><span>(158)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Gajji Silk</span></span><span>(502)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Georgette</span></span><span>(403)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Khaddi Georgette</span></span><span>(136)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Kota Doriya</span></span><span>(102)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Ojariya Crepe</span></span><span> (138)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Organza</span></span><span>(113)</span></li>
                  </ul>
                </div>
                <div className={`overflow-hidden transaction-all ${active === "three" ? "flex" : "hidden"}`}>
                  <ul className='space-y-5 w-full'>
                    <li><input type="text" className='outline-none border-b w-full p-1' placeholder='Search by Occasion' /></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Bridal</span></span><span>(243)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Casual</span></span><span>(158)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Daily Wear</span></span><span>(502)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Engagment</span></span><span>(403)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Festive</span></span><span>(136)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Haldi</span></span><span>(102)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Mangal Path</span></span><span> (138)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Mehndi</span></span><span>(113)</span></li>
                  </ul>
                </div>
                <div className={`overflow-hidden transaction-all ${active === "four" ? "flex" : "hidden"}`}>
                  <ul className='space-y-5 w-full'>
                    <li><input type="text" className='outline-none border-b w-full p-1' placeholder='Search By Style' /></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Ajrakh</span></span><span>(243)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Banarasi</span></span><span>(158)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Bandhani</span></span><span>(502)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Bollywood</span></span><span>(403)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Designer</span></span><span>(136)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Kalamkari</span></span><span>(102)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Leheriya </span></span><span> (138)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Paithani</span></span><span>(113)</span></li>
                  </ul>
                </div>
                <div className={`overflow-hidden transaction-all ${active === "five" ? "flex" : "hidden"}`}>
                  <ul className='space-y-5 w-full'>
                    <li><input type="text" className='outline-none border-b w-full p-1' placeholder='Search By Work Type' /></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Aari Tari</span></span><span>(243)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Beads</span></span><span>(158)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Chinkakari</span></span><span>(502)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>CutWork</span></span><span>(403)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Embroidery</span></span><span>(136)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Gota Patti</span></span><span>(102)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Handwork </span></span><span> (138)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span><RiCheckFill /></span><span>Mirror</span></span><span>(113)</span></li>
                  </ul>
                </div>
                <div className={`overflow-hidden transaction-all ${active === "six" ? "flex" : "hidden"}`}>
                  <ul className='space-y-5 w-full'> 
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span></span><span className='text-red-500'>Saress</span></span><span className='text-red-500'>(243)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span></span><span>Lehenga</span></span><span>(158)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span></span><span>Chunri Pila</span></span><span>(502)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span></span><span>Suits</span></span><span>(403)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span></span><span>Dupatta</span></span><span>(136)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span></span><span>Kurtis</span></span><span>(102)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span></span><span>Indo Westron  </span></span><span> (138)</span></li>
                  </ul>
                </div>
                <div className={`overflow-hidden transaction-all ${active === "seven" ? "flex" : "hidden"}`}>
                  <ul className='space-y-5 w-full'> 
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span></span><span>Available</span></span><span>(2376)</span></li>
                    <li className='flex items-center justify-between'><span className='flex items-center gap-1 justify-between'><span></span><span>Out  of stock</span></span><span>(294)</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 w-full">
              <button className='p-3 text-center' onClick={() => setOpen(false)}>Close</button>
              <button className='p-3 text-center bg-blue-500 text-white'>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
