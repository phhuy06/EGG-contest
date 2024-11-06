import React from 'react'
import image from '../assets/Image/cat.jpg'
import { TitleWithLines } from '../index'

const Post = () => {
  return (
    <div>
      {TitleWithLines('Events')}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mb-16 ">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden shadow-lg ">
            <img src={image} alt="Post's Image" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-80"></div>
            <div className="absolute bottom-0 p-4 text-white">
              <h3 className="text-sm font-bold bg-gradient-to-r from-custom-red opacity-80 px-2 py-1 rounded">
                Tiêu đề bài đăng
              </h3>
              <p className="text-sm ">Đây là nội dung của bài ...abcdefghi jklmnopqrs tuvwxyz</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Post
