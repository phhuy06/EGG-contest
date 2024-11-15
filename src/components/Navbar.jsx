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
    <nav className="fixed flex justify-center top-0 left-0 right-0
                    items-center border-[1px] border-solid border-black 
                    my-30 px-4 shadow-md
                    bg-gradient-to-b from-white via-red-200 to-white
                    z-50">
      <div className="flex items-center mr-auto ">
        <div className="flex justify-center">
          <img src={logo} alt="LOGO" className="w-10 h-10 cursor-pointer" />
        </div>
        <div className="ml-2 text-[20px] ">
          <h1>
            <span className="font-bold cursor-pointer">EGG CLUB</span> <br></br>
            <span className="hidden md:block text-[13px]">CLB Sáng tạo Công Nghệ</span>
          </h1>
        </div>
      </div>
      {!isMobile && (
        <div className="flex items-center justify-end font-bold ">
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
        <div className="absolute flex flex-col items-start space-y-4 bg-white border-[2px] border-solid border-black right-0 top-0 py-10 pr-20 pl-5 mt-[40px]">
          <button className="cursor-pointer font-bold hover:text-primaryColor">About Us</button>
          <button className="cursor-pointer font-bold hover:text-primaryColor">Events</button>
          <button className="cursor-pointer font-bold hover:text-primaryColor">Humans Of EGG</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
