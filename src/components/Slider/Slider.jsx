import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const SliderData = () => {
  const imageUrl = [
    {
      url: "src/assets/computer1.avif"
    },
    {
      url: "src/assets/computer2.avif"
    },
    {
      url: "src/assets/computer3.avif"
    }
  ]

  const [move, setMove] = useState(0)
  const handleLeft = () => {
    setMove(move === 0 ? imageUrl.length - 1 : move - 1)
  }

  const handleright = () => {
    setMove(move === imageUrl.length - 1 ? 0 : move + 1)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      handleLeft()
    }, 2000)
    return () => {
      clearInterval(timer)
    }
  }, [move])

  return (
    <div className='w-[90%] mx-auto h-[100vh] my-5 relative' >
      {
        imageUrl.map((item, i) => (
          <div key={i} className={`${move === i ? "block" : "hidden"}`} >
            <img
              src={item.url}
              className='w-full h-[80vh] rounded-2xl object-cover '
            />
          </div>
        ))}

      <div className='absolute flex justify-between top-[50%] w-full'>
        <FaArrowAltCircleLeft onClick={handleLeft} size={30} />
        <FaArrowAltCircleRight onClick={handleright} size={30} />
      </div>
    </div>
  )
}

export default SliderData
