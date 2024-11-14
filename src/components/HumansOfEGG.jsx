import React, { useState } from 'react'
import bg from '../assets/Image/bg.jpg'
import cat from '../assets/Image/cat.jpg'
import { TitleWithLines } from '../index'

const HumansOfEGG = () => {
  const [detailInfor, setDetailInfor] = useState(null)

  return (
    <div className="container mx-auto px-4 mb-16 ">
      {TitleWithLines('Humans Of EGG')}

      <div className=" grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-2 border-blue-200">
        {detailInfor !== null ? (
          <div
            style={{
              background: ` url(${bg})`,
              backgroundSize: 'contain',
            }}
            className="relative rounded-xl col-span-4 flex justify-center items-center min-h-screen ">
            <div className="bg-[rgba(255,255,255,0.85)] rounded-xl w-2/3 h-4/5 text-center absolute mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                <img src={cat} alt="Profile" className="object-cover w-full h-full" />
              </div>

              <div className="mt-24">
                <h2 className="text-2xl font-semibold">Họ và tên</h2>
                <p className="text-500">Thành viên gen X</p>
                <p className="mt-2 text-700 font-medium">Thành tích</p>
                <p className="text-500">-----------</p>
              </div>

              <button
                onClick={() => setDetailInfor(null)}
                className="bg-pink-500 text-white border-2 border-blue-200 py-2 px-6 rounded-full mb-1">
                Hide
              </button>
            </div>
          </div>
        ) : (
          [...Array(8)].map((_, index) => (
            <div key={index} className="m-8 flex flex-col items-center" onClick={() => setDetailInfor(index)}>
              <img src={cat} alt="ảnh" className="w-32 h-32 rounded-full mb-2" />
              <h3 className="text-lg font-semibold">Tên</h3>
              <p>Thành viên gen X</p>
              <button onClick={() => setDetailInfor(index)} className="mt-2 text-blue-500 italic underline">
                Chi tiết
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default HumansOfEGG
