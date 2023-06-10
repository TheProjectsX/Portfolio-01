import React from 'react'
import logo from "../img/logo.png"

const Footer = (props) => {
  return (
    <div className='bg-[#080827] p-12 flex flex-col items-center' id={props.id}>
      <img src={logo} alt="" className='h-12 w-40 mb-6'/>
      <p className='text-5xl pb-14 text-white'>hireme@portfolio.com</p>
      <p className='text-lg text-gray-300 pb-3'>221B Baker Street, Post office Box 353</p>
      <p className='text-lg text-gray-300 pb-10'>Park Road, USA - 215431</p>

      <p className='text-white'>Copyright © Modasser Hasan. All rights reserved</p>
    </div>
  )
}

export default Footer
