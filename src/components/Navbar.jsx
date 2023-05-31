import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="">
            <div className="fixed top-0 right-0 left-0 mr-3">
                <nav className='flex py-6 justify-between items-center lg:px-28 '>
                    <a href="#">
                        <img src={logo} className='w-[184px] h-[48px]' alt="Lorem Bank" />
                    </a>

                    <ul className='list-none sm:flex hidden justify-end items-center text-gradient'>
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={` font-semibold cursor-pointer text-[16px] 
                        ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                            >
                                <a href={`#${nav.id}`}> {nav.title} </a>
                            </li>
                        ))}
                    </ul>

                    <div className="sm:hidden flex flex-1 justify-end items-center">
                        <img
                            src={toggle ? close : menu}
                            alt="menu"
                            className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle((prev) => !prev)}
                        />

                        <div
                            className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[230px] rounded-xl sidebar`}>
                            <ul className='list-none flex-col justify-end items-center p-5 text-lg'>
                                {navLinks.map((nav, index) => (
                                    <li
                                        key={nav.id}
                                        className={` font-semibold cursor-pointer text-[16px] 
                        ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}
                                    >
                                        <a href={`#${nav.id}`}> {nav.title} </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </nav>
            </div>
        </div>

    );
}

export default Navbar