import React from 'react'
import Center from "../../assets/i.png"

const First = () => {
  return (
    <div className=' h-[100vh] flex justify-around mx-auto text-center items-center  '>
      <div className='w-[45%] h-[250px]  overflow-hidden'>
        <img src={Center} alt="" className='h-full w-full' />
      </div>
      <div className='w-[45%] space-y-3'>
    <h1 className='text-5xl font-bold'> Join Our <span className='text-red-700 '>Center</span> and <br /> Build your <span className='text-green-700'>Future</span> </h1>
    <p>The Best Computer Center is a premier destination for all your technology needs. Offering expert services in computer repairs, software installations, and upgrades, our skilled technicians ensure optimal performance. We provide personalized support, training, and high-quality hardware, making technology accessible and efficient for everyone. Experience exceptional service and reliability today!</p>
      </div>
    </div>
  )
}

export default First
