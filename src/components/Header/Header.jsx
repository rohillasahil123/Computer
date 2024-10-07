import React from 'react'

const Header = () => {
  return (
    <>
    <div className='border h-11  w-full flex justify-between shadow-xl'>
        <div className='font-bold text-2xl ml-8 '>Computer-<span className='text-red-700'>Center</span> </div>
        <div className='flex space-x-6 font-medium mr-7 items-center '>
        <div className='hover:cursor-pointer' >Home</div>
        <div className='hover:cursor-pointer'>About</div>
        <div className='hover:cursor-pointer'>Contect-Us</div>
        <div className='hover:cursor-pointer'>Course</div>
        </div>
    </div>
    </>
  )
}

export default Header
