import React from 'react'
import person from "../img/theMan.png"

const Introduction = (props) => {
  return (
    <div className='flex justify-evenly bg-[#e3e4e8]' id={props.id}>
        <div className="intro my-12 max-w-[350px] md:max-w-none md:p-12 md:w-1/2">
            <h2 className='text-xl uppercase text-red-500 pb-2 '>Get every single solutions</h2>
            <h1 className='text-4xl text-blue-800 font-semibold pb-7 md:text-6xl'>I'm Designer Rahat Khan</h1>
            <p className='text-gray-700 pb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet esse officiis expedita ea deleniti nisi ut a perspiciatis dolores error!</p>
            <div className="buttons space-x-4 md:space-x-0">
                <button className='bg-red-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-600 md:ml-4 md:mt-4'>Learn More</button>
                <button className='bg-transparent border border-red-500 border-spacing-1 rounded-md px-11 py-3 font-semibold hover:bg-red-500 hover:text-white md:!ml-4 md:mt-4'>Hire Me</button>
            </div>
        </div>
        <img src={person} alt="The Man" className='hidden md:inline mr-4 lg:mr-14 '/>
    </div>
  )
}

export default Introduction
