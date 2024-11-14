import React from 'react';
import ReactDOM from 'react-dom/client';
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
    <button className="cursor-pointer font-bold hover:text-primaryColor"><a href="#section1"></a>About Us</button>
    <button className="cursor-pointer font-bold hover:text-primaryColor"><a href="#section2"></a>Events</button>
    <button className="cursor-pointer font-bold hover:text-primaryColor"><a href="#section3"></a>Humans Of EGG</button>
  </div>
);


export const Btn = () => (
  <div className='flex items-center gap-1'>
    <button className='text-[14px] bg-red-50 p-[1.5px] px-3 py-1 rounded-md cursor-pointer
                      bg-white
                      hover:bg-gray-100 transition duration-300 ease-in-out'>Đăng nhập</button>
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