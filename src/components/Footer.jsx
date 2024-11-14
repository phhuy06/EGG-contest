import React from 'react';
import logo from '../assets/Image/logo.png';
import { useIsMobile } from './hooks/useIsMobile';

const Footer = () => {
  const {isMobile} = useIsMobile();
  return (
    <footer className="bg-gradient-to-b from-white via-red-200 to-white text-black p-6 md:p-10">
  <div className={`container mx-auto flex flex-col md:flex-row justify-between ${isMobile ? 'items-center' : 'items-start'} md:items-center space-y-6 md:space-y-0`}>
    <div className="flex flex-col items-center md:items-start">
      <div className="flex items-center mr-auto">
        <div className="flex justify-center">
          <img src={logo} alt="LOGO" className="w-10 h-10 cursor-pointer" />
        </div>
        <div className="ml-2 text-[20px]">
          <h1>
            <span className="font-bold cursor-pointer">EGG CLUB</span> <br />
          </h1>
        </div>
      </div>
      <p className="text-black text-sm">Nourishing the EGG of future</p>
    </div>

    <div className="flex flex-col items-center md:items-start space-y-1 text-sm">
      <p>Số điện thoại: <a href="tel:+123456789" className="text-gray-600 hover:text-white">+1 234 567 89</a></p>
      <p>Email: <a href="mailto:info@company.com" className="text-gray-600 hover:text-white">info@company.com</a></p>
      <p>Địa chỉ: <span className="text-gray-600 hover:text-white cursor-pointer">Khoải vì không biết heheheh</span></p>
    </div>

    <div className="flex flex-col items-center md:items-start space-y-1">
      <a href="/about" className="text-gray-600 hover:text-white">About Us</a>
      <a href="/services" className="text-gray-600 hover:text-white">Events</a>
      <a href="/contact" className="text-gray-600 hover:text-white">Humans of EGG</a>
    </div>
  </div>

  <div className="mt-6 border-t border-gray-600 pt-4">
    <p className="text-center text-gray-500 text-xs">&copy; {new Date().getFullYear()} EGG Club. All rights reserved.</p>
  </div>
</footer>

  );
}

export default Footer
