import React from 'react';
import ReactDOM from 'react-dom/client';
import { MdSunny } from "react-icons/md";
import App from './App';
import './index.css';


export const TitleWithLines = (title) => (
  <div className="flex items-center justify-center space-x-4 w-2/3 mx-auto">
    <div className="flex-grow h-px bg-gradient-to-r from-white via-blue-500 via-purple-500 to-pink-500"></div>
    <h1 className="title text-center">{title}</h1>
    <div className="flex-grow h-px bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-white"></div>
  </div>
);

export const Nav = () => (
  <div className='flex items-center gap-8 mr-16'>
    <div className='cursor-pointer hover:text-primaryColor'>About Us</div>
    <div className='cursor-pointer hover:text-primaryColor'>Events</div>
    <div className='cursor-pointer hover:text-primaryColor'>Humans of EGG</div>
  </div>
);


export const Btn = () => (
  <div className='flex items-center gap-1'>
    <MdSunny size={"18px"} color='red' className='cursor-pointer' />
    <div className='text-[12px] bg-red-50 p-[1.5px] px-2 rounded-xl cursor-pointer'>Sign In</div>
    <div className='text-[12px] bg-red-200 p-[1.5px] px-2 rounded-xl cursor-pointer'>Register</div>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals