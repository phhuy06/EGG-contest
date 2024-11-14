import React from 'react';
import image from "../assets/Image/egg.jpg";

import { TitleWithLines } from "../index";

const AboutUs = () => {
  return (
    <div>
      {TitleWithLines("About Us")}
      <div className='md:flex mt-4 mb-16 gap-16'>
        <div className='flex-1 text-center'>
          <h2 className='text-xl font-bold my-4'>Giới thiệu</h2>
          <p>We were frustrated because content tools hadn't innovated,
            so we sat down and drew up what we thought a new product could look like.</p>
        </div>
        <div className='flex-1'>
          <img src={image} alt="Slider" className='border rounded-[14px] w-full h-auto' />
        </div>
      </div>
      <div className='text-center mb-16' >
        <h2 className='text-xl font-bold my-4'>Thành tích clb</h2>
        <p className=" text-lg text-center">Đây là phần flex thành tích clb</p>
      </div>
      <div className='text-center mb-16'>
        <h2 className='text-xl font-bold my-8 '>Ban chủ nhiệm hiện tại</h2>
        <div className='grid grid-cols-2 gap-x-8 md:flex items-center justify-around '>
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex flex-col items-center ">
              <img src="" alt="Avatar" />
              <div className="text-center border-2 border-primaryColor bg-secondaryColor shadow-lg rounded-lg w-32">
                <h3 className="font-bold">Tên</h3>
                <p>Chức vụ</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
