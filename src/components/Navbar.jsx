import React, { useState } from 'react'
import { IoCloseCircleOutline, IoMenuOutline } from 'react-icons/io5'
import logo from '../assets/Image/logo.png'
import { Btn, Nav } from '../index.js'

const Navbar = props => {
  const { isMobile } = props
  const [openMenu, setOpenMenu] = useState(false)
  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <nav className="flex items-center border-[1px] border-solid border-black rounded-full mb-16 py-2 px-4">
      <div className="flex items-center mr-auto">
        <div className="flex justify-center">
          <img src={logo} alt="LOGO" className="w-8 h-auto" />
        </div>
        <div className="ml-4 text-[12px] ">
          <h1>
            <span className="font-bold">EGG CLUB</span> <br></br>{' '}
            <span className="hidden md:block text-[10px]">CLB Sáng tạo Công Nghệ</span>
          </h1>
        </div>
      </div>
      {!isMobile && (
        <div className="flex items-center justify-end gap-4 font-bold ">
          <Nav />
          <Btn />
        </div>
      )}
      {isMobile && (
        <div className="flex items-center gap-2 ml-auto font-bold">
          <Btn />
          {openMenu ? (
            <IoCloseCircleOutline size={'24px'} color="red" className="cursor-pointer" onClick={handleMenu} />
          ) : (
            <IoMenuOutline size={'24px'} color="red" className="cursor-pointer" onClick={handleMenu} />
          )}
        </div>
      )}
      {openMenu && isMobile && (
        <div className="absolute mt-[100px] bg-blue-pink px-[12px] py-2 text-13 rounded-xl">
          <ul>
            <li className="cursor-pointer font-bold">About Us</li>
            <li className="cursor-pointer font-bold">Events</li>
            <li className="cursor-pointer font-bold">Humans of EGG</li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
