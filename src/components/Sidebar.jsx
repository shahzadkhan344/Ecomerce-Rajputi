import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa'

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const toggles = (menu) => {
    setActive(active == menu ? null : menu)
  }

  const colors = [
    { name: 'Red (842)', class: 'bg-red-600' },
    { name: 'Green (272)', class: 'bg-green-600' },
    { name: 'Pink (420)', class: 'bg-pink-600' },
    { name: 'Blue (165)', class: 'bg-blue-600' },
    { name: 'Maroon (70)', class: 'bg-red-900' },
    { name: 'Yellow (262)', class: 'bg-yellow-500' },
    { name: 'Gray (146)', class: 'bg-gray-500' },
    { name: 'Purple (136)', class: 'bg-purple-500' },
  ];
  const items = [
    { name: 'Chiffon (243)' },
    { name: 'Cotton (158)', },
    { name: 'Gajji Silk (502)' },
    { name: 'Georgette (403)', },
    { name: 'Khaddi Georgette (136)', },
    { name: 'Kota Doriya (102)' },
    { name: 'Ojariya Crepe (138)', },
    { name: 'Organza (113)', },
  ];
  const items1 = [
    { name: 'Bridal (510)' },
    { name: 'Casual (548)', },
    { name: 'Daily Wear (69)' },
    { name: 'Engagment (327)', },
    { name: 'Festive (1584)' },
    { name: 'Haldi (112)', },
    { name: 'Mangal Path (210)', },
    { name: 'Mehndi (78)', },
  ];
  const items2 = [
    { name: 'Ajrakh (42)' },
    { name: 'Banarasi (279)', },
    { name: 'Bandhani (914)' },
    { name: 'Bollywood (190)', },
    { name: 'Designer (223)' },
    { name: 'Kalamkari (18)', },
    { name: 'Leheriya (144)', },
    { name: 'Paithani (5)', },
  ];
  const items3 = [
    { name: 'Aari Tari (59)' },
    { name: 'Beads (119)', },
    { name: 'Chinkakari (1)' },
    { name: 'CutWork (121)', },
    { name: 'Embroidery (64)' },
    { name: 'Gota Patti (968)', },
    { name: 'Handwork (105)', },
    { name: 'Mirror (66)', },
  ];
  const items4 = [
    { name: '38 (7)' },
    { name: '40 (33)', },
    { name: '42 (33)' },
    { name: '44 (33)', },
    { name: '46 (26)' },
  ];
  const items5 = [
    { name: 'Saress (1225)' },
    { name: 'Lehenga (509)', },
    { name: 'Chunri Pila (355)' },
    { name: 'Suits (106)', },
    { name: 'Dupatta (391)' },
    { name: 'Kurtis (34)' },
    { name: 'Indo Westron (26)' },
  ];
  const items7 = [
    { name: 'Available (2376)' },
    { name: 'Out  of stock (294)', },
  ];
  const filteredColors = colors.filter(color =>
    color.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredColors1 = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredColors2 = items1.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredColors3 = items2.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredColors4 = items3.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredColors5 = items4.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredColors6 = items5.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredColors8 = items7.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className='w-full bg-gray-100 p-3'>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold text-[20px]'>FILTER</h1>
        <h1 className='hover:text-orange-500 duration-500'><a href="">Clear All</a></h1>
      </div>
      <hr className='my-3 border border-gray-200' />
      <div className='flex items-center gap-2'>
        <input type="checkbox" className='border p-1 cursor-pointer' />
        <span>  New Arrivals</span>
      </div>
      <hr className='my-3 border border-gray-200' />
      <div className='flex items-center justify-between'>
        <h1 className={`${open == true ? "font-bold" : ""}`}>PRICE</h1>
        <FaChevronUp className={`cursor-pointer ${open == true ? "rotate-180" : ""}`} onClick={() => setOpen(!open)} />
      </div>
      <hr className='my-3 border border-gray-200' />
      <div>
        <div onClick={() => { toggles(active === "first" ? "" : "first") }} className='flex my-4 items-center cursor-pointer justify-between'>
          <h1 className={`${active === "first" ? "font-bold" : ""}`}>COLOR</h1>
          <span>{active === "first" ? <FaChevronDown /> : <FaChevronUp />}</span>
        </div>

        <div className={`transition-all space-y-3 overflow-hidden duration-500 px-3 ${active === "first" ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
          <div className='mt-2 flex items-center gap-2'>
            <span><FaSearch /></span>
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              placeholder="Search color..."
              className='border-gray-200 outline-none border-b'
            />
          </div>

          <hr className='my-3 border border-gray-200' />

          {filteredColors.map((color, idx) => (
            <div key={idx} className='mt-2 flex items-center gap-2'>
              <input type="checkbox" className='cursor-pointer' />
              <span className={`${color.class} rounded-full p-2`}></span>
              <span>{color.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div onClick={() => { toggles(active === "second" ? "" : "second")}} className='flex items-center cursor-pointer justify-between'>
          <h1 className={`${active == "second" ? "font-bold" : ""}`}>FABRIC</h1>
          <span>{active === "second" ? <FaChevronDown /> : <FaChevronUp />}</span>
        </div>

        <div className={` px-3 transition-all space-y-3 overflow-hidden duration-500 ${active === "second" ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
          <div className='mt-2 flex items-center gap-2'>
            <span><FaSearch /></span>
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              placeholder="Search..."
              className='border-gray-200 outline-none border-b'
            />
          </div>

          <hr className='my-3 border border-gray-200' />

          {filteredColors1.map((item, idx) => (
            <div key={idx} className='mt-2 flex items-center gap-2'>
              <input type="checkbox" className='cursor-pointer' />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div onClick={() => { toggles(active === "three" ? "" : "three") }} className='flex my-4 items-center cursor-pointer justify-between'>
          <h1 className={`${active == "three" ? "font-bold" : ""}`}>OCCASION</h1>
          <span>{active === "three" ? <FaChevronDown /> : <FaChevronUp />}</span>
        </div>

        <div className={` px-3 transition-all space-y-3 overflow-hidden duration-500 ${active === "three" ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
          <div className='mt-2 flex items-center gap-2'>
            <span><FaSearch /></span>
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              placeholder="Search..."
              className='border-gray-200 outline-none border-b'
            />
          </div>

          <hr className='my-3 border border-gray-200' />

          {filteredColors2.map((item, idx) => (
            <div key={idx} className='mt-2 flex items-center gap-2'>
              <input type="checkbox" className='cursor-pointer' />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div onClick={() => { toggles(active === "four" ? "" : "four")}} className='flex my-4 items-center cursor-pointer justify-between'>
          <h1 className={`${active == "four" ? "font-bold" : ""}`}>STYLE</h1>
          <span>{active === "four" ? <FaChevronDown /> : <FaChevronUp />}</span>
        </div>

        <div className={` px-3 transition-all space-y-3 overflow-hidden duration-500 ${active === "four" ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
          <div className='mt-2 flex items-center gap-2'>
            <span><FaSearch /></span>
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              placeholder="Search..."
              className='border-gray-200 outline-none border-b'
            />
          </div>

          <hr className='my-3 border border-gray-200' />

          {filteredColors3.map((item, idx) => (
            <div key={idx} className='mt-2 flex items-center gap-2'>
              <input type="checkbox" className='cursor-pointer' />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div onClick={() => { toggles(active === "five" ? "" : "five") }} className='flex my-4 items-center cursor-pointer justify-between'>
          <h1 className={`${active == "five" ? "font-bold" : ""}`}>WORK TYPE</h1>
          <span>{active === "five" ? <FaChevronDown /> : <FaChevronUp />}</span>
        </div>

        <div className={` px-3 transition-all space-y-3 overflow-hidden duration-500 ${active === "five" ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
          <div className='mt-2 flex items-center gap-2'>
            <span><FaSearch /></span>
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              placeholder="Search..."
              className='border-gray-200 outline-none border-b'
            />
          </div>

          <hr className='my-3 border border-gray-200' />

          {filteredColors4.map((item, idx) => (
            <div key={idx} className='mt-2 flex items-center gap-2'>
              <input type="checkbox" className='cursor-pointer' />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div onClick={() => { toggles(active === "six" ? "" : "six") }} className='flex my-4 items-center cursor-pointer justify-between'>
          <h1 className={`${active == "six" ? "font-bold" : ""}`}>SIZE</h1>
          <span>{active === "six" ? <FaChevronDown /> : <FaChevronUp />}</span>
        </div>

        <div className={` px-3 transition-all space-y-3 overflow-hidden duration-500 ${active === "six" ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
          <div className='mt-2 flex items-center gap-2'>
            <span><FaSearch /></span>
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              placeholder="Search..."
              className='border-gray-200 outline-none border-b'
            />
          </div>

          <hr className='my-3 border border-gray-200' />

          {filteredColors5.map((item, idx) => (
            <div key={idx} className='mt-2 flex items-center gap-2'>
              <input type="checkbox" className='cursor-pointer' />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div onClick={() => { toggles(active === "seven" ? "" : "seven")}} className='flex my-4 items-center cursor-pointer justify-between'>
          <h1 className={`${active == "seven" ? "font-bold" : ""}`}>CATEGORY</h1>
          <span>{active === "seven" ? <FaChevronDown /> : <FaChevronUp />}</span>
        </div>

        <div className={` px-3 transition-all space-y-3 overflow-hidden duration-500 ${active === "seven" ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
          <div className='mt-2 flex items-center gap-2'>
            <span><FaSearch /></span>
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              placeholder="Search..."
              className='border-gray-200 outline-none border-b'
            />
          </div>

          <hr className='my-3 border border-gray-200' />

          {filteredColors6.map((item, idx) => (
            <div key={idx} className='mt-2 flex items-center gap-2'>
              <input type="checkbox" className='cursor-pointer' />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div onClick={() => { toggles(active === "eight" ? "" : "eight") }} className='flex my-4 items-center cursor-pointer justify-between'>
          <h1 className={`${active == "eight" ? "font-bold" : ""}`}>AVAILABILITY</h1>
          <span>{active === "eight" ? <FaChevronDown /> : <FaChevronUp />}</span>
        </div>

        <div className={` px-3 transition-all space-y-3 overflow-hidden duration-500 ${active === "eight" ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
          <div className='mt-2 flex items-center gap-2'>
            <span><FaSearch /></span>
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              placeholder="Search..."
              className='border-gray-200 outline-none border-b'
            />
          </div>

          <hr className='my-3 border border-gray-200' />

          {filteredColors8.map((item, idx) => (
            <div key={idx} className='mt-2 flex items-center gap-2'>
              <input type="checkbox" className='cursor-pointer' />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
