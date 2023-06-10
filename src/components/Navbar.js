import React, { useState } from 'react'
import logo from '../img/logo.png'
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className='flex flex-wrap items-center justify-between px-12 py-4 gap-x-32 mdl:gap-x-0 sticky top-0 bg-white drop-shadow-xl'>
        <div className='logo'>
            <img className='w-48' src={logo} alt="Logo" />
        </div>
        <div className='hamburger mdl:hidden'>
            <RxHamburgerMenu className='text-2xl cursor-pointer' onClick={() => {navOpen ? setNavOpen(false) : setNavOpen(true)}}/>
        </div>
        <div className={`flex items-center w-full overflow-hidden mdl:w-fit gap-14 transition-[height] duration-200 ease-in-out h-0 mdl:h-auto  ${navOpen ? 'h-[256px]' : 'h-0'}`}>
            <ul className='flex flex-col justify-center flex-grow-0 w-full gap-1 font-bold text-center mdl:w-fit mdl:flex-row'>
                <li><Link to='home' offset={-88} duration={500} smooth={true} className='py-3 cursor-pointer mdl:py-4 px-7 hover:text-red-500'>Home</Link></li>
                <li><Link to='about' offset={-88} duration={500} smooth={true} className='py-3 cursor-pointer mdl:py-4 px-7 hover:text-red-500'>About</Link></li>
                <li><Link to='services' offset={-88} duration={500} smooth={true} className='py-3 cursor-pointer mdl:py-4 px-7 hover:text-red-500'>Services</Link></li>
                <li><Link to='portfolio' offset={-88} duration={500} smooth={true} className='py-3 cursor-pointer mdl:py-4 px-7 hover:text-red-500'>Portfolio</Link></li>
                <li><Link to='contact' offset={-88} duration={500} smooth={true} className='py-3 cursor-pointer mdl:py-4 px-7 hover:text-red-500'>Contact</Link></li>
            </ul>
            <button className='hidden px-5 py-4 font-bold text-white bg-red-500 rounded-md cursor-pointer xl:block hover:bg-red-600'>Get Free Consultent</button>
        </div>
    </nav>
  )
}

export default Navbar
