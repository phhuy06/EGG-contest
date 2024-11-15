import React from 'react'

export const Wrapper = ({ children, className }) => {
  return (
    <div className={`xxl:w-[1170px] xxl:mx-auto lg:mx-8 md:mx-6 mx-4 ${className}`}>
        {children}
    </div>
  )
}