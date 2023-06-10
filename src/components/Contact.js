import React from 'react'

const Contact = (props) => {
  return (
    <div className='bg-[#fef9fa] flex flex-col justify-between md:flex-row py-10' id={props.id}>
      <div className='p-10 md:w-[45%]'>
        <h2 className='text-3xl mb-8 font-bold sm:text-4xl'>If Not Now, When? Let’s Work Together!</h2>
        <p className='leading-8'>Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra.</p>
      </div>
      <div className='space-y-4 flex items-center flex-col font-bold text-gray-500 md:w-[45%]'>
        <input type="text" placeholder='Full Name' className='w-[90%] outline-none bg-white p-4' />
        <input type="email" placeholder='Email Address' className='w-[90%] outline-none bg-white p-4' />
        <textarea name="" id="" cols="20" rows="10" placeholder='Your Message' className='w-[90%] h-32 outline-none bg-white p-4'></textarea>
        <button className='w-[90%] bg-red-500 p-6 text-white'>Send Message</button>
      </div>
    </div>
  )
}

export default Contact
