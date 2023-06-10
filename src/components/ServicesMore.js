import React, { useState } from 'react'
import img1 from "../img/img-01.png"
import img2 from "../img/img-02.png"
import img3 from "../img/img-03.png"
import img4 from "../img/img-04.png"
import img5 from "../img/img-05.png"
import img6 from "../img/img-06.png"

const ServicesMore = (props) => {
    const [selected, setSelected] =  useState(1);

  return (
    <div id={props.id}>
      <div className='p-10 flex gap-6 flex-wrap justify-between'>
      <h2 className="text-3xl font-bold md:text-5xl md:w-[45%]">What Services you will Get from me!</h2>
        <ul className='flex items-center text-xl'>
            <li><a href="" className={`px-4 underline underline-offset-8 hover:decoration-[#1e90ff] ${selected === 1 ? "decoration-[#ff3d1c]" : "decoration-gray-300"}`} onClick={(e)=>{setSelected(1); e.preventDefault()}}>All</a></li>
            <li><a href="" className={`px-4 underline underline-offset-8 hover:decoration-[#1e90ff] ${selected === 2 ? "decoration-[#ff3d1c]" : "decoration-gray-300"}`} onClick={(e)=>{setSelected(2); e.preventDefault()}}>Branding</a></li>
            <li><a href="" className={`px-4 underline underline-offset-8 hover:decoration-[#1e90ff] ${selected === 3 ? "decoration-[#ff3d1c]" : "decoration-gray-300"}`} onClick={(e)=>{setSelected(3); e.preventDefault()}}>Logo</a></li>
            <li><a href="" className={`px-4 underline underline-offset-8 hover:decoration-[#1e90ff] ${selected === 4 ? "decoration-[#ff3d1c]" : "decoration-gray-300"}`} onClick={(e)=>{setSelected(4); e.preventDefault()}}>UI/UX</a></li>
            <li><a href="" className={`px-4 underline underline-offset-8 hover:decoration-[#1e90ff] ${selected === 5 ? "decoration-[#ff3d1c]" : "decoration-gray-300"}`} onClick={(e)=>{setSelected(5); e.preventDefault()}}>We Design</a></li>
        </ul>
      </div>

      <div className='images grid grid-cols-3 gap-4 p-10'>
        <img src={selected === 1 ? img1 : selected === 2 ? img2 : selected === 3 ? img3 : selected === 4 ? img5 : img6} alt="" className='row-span-2 col-span-2 w-full'/>
        <img src={selected === 1 ? img2 : selected === 2 ? img3 : selected === 3 ? img4 : selected === 4 ? img6 : img1} alt="" className='w-full'/>
        <img src={selected === 1 ? img3 : selected === 2 ? img4 : selected === 3 ? img5 : selected === 4 ? img1 : img2} alt="" className='w-full'/>
        <img src={selected === 1 ? img4 : selected === 2 ? img5 : selected === 3 ? img6 : selected === 4 ? img2 : img3} alt="" className='w-full'/>
        <img src={selected === 1 ? img5 : selected === 2 ? img6 : selected === 3 ? img1 : selected === 4 ? img3 : img4} alt="" className='w-full'/>
        <img src={selected === 1 ? img6 : selected === 2 ? img1 : selected === 3 ? img2 : selected === 4 ? img4 : img5} alt="" className='w-full'/>
      </div>
    </div>
  )
}

export default ServicesMore
