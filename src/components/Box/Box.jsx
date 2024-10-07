import React from 'react'
import productsfile from "../../Data/data"
import toast from 'react-hot-toast'

const Box = () => {

const HandelAdd = () => {
  console.log('Product added');
};

  return (
    <div className='w-[100%] h-[100vh]'>
      
        <h1 className='text-center font-bold text-4xl'>Our <span className='text-teal-800'>Products</span> </h1>
      <div className='w-[100%] h-[80%] flex text-center justify-around mt-3'>
        {
          productsfile.map((product, i) => (
            <div key={i}>
              <div className='h-[60%] w-[230px] border mt-6 flex shadow-xl'>
                <img
                  src={product.thumbnail}
                  className='object-cover overflow-hidden'
                  alt={product.title}
                />
              </div>
              <div className='border h-[100px] w-[230px]'>
                <h1 className='font-bold text-ml'>Price: {product.price}</h1>
                <h1 className='font-bold text-sm'>Title: {product.title}</h1>
                <h1 className='font-bold text-sm'>Quantity: {product.quantity}</h1>
                <div>
                  <button
                    className='bg-blue-800 text-white h-[30px] w-[210px]'
                    onClick={() => {
                      HandelAdd();
                      toast.success(`Product Added: ${product.title}`);
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Box
