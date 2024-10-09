import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='border h-11  w-full flex justify-between shadow-xl'>
        <div className='font-bold text-2xl ml-8 '>Computer-<span className='text-red-700'>Center</span> </div>
        <div className='flex space-x-6 font-medium mr-7 items-center '>
        <div className='hover:cursor-pointer' > <Link to='/'>Home</Link> </div>
        <div className='hover:cursor-pointer'><Link to='/about'>About</Link> </div>
        <div className='hover:cursor-pointer'><Link to='/contect-us'>Context-Us</Link> </div>
        <div className='hover:cursor-pointer'>Course</div>
        </div>
    </div>
    </>
  )
}

export default Header
