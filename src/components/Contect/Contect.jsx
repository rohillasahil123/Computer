import React, { useState } from 'react'
import ContectImage from "../../assets/contect.webp"
import contectIamgestand from "../../assets/contectStand.avif"

const Contect = () => {

    const [obj , setObj] = useState({
        name:"",
        number:"",
        email:""
    })

    const handelInput = (e)=>{
        const {name , value} = e.target
        setObj({
            ...obj,[name]:value
        })
    }

    const handelSave = (e)=>{
        e.preventDefault()
        console.log(obj)
    }




    return (
        <div className='h-[100vh] w-full text-center flex justify-around'>
            <div>
                <div className='w-[240px] h-[50px] rounded-lg ml-20 bg-red-600 shadow-2xl'>
                    <h1 className='font-bold text-4xl mt-6 text-white'>Contect-Us</h1>
                </div>
                <img src={contectIamgestand} alt="" srcset=""
                    className='h-[300px] w-[400px] mt-20' />
            </div>
            <div className='h-[90%] w-[350px] border  rounded-md items-center justify-center text-center mt-3 '>
                <div>
                    <img src={ContectImage} alt="" srcset=""
                        className='w-[300px] h-[250px]'
                    />
                </div>
                <div className='h-full w-full space-y-5 mt-3 '>
                    <input type="text"
                        className='w-[80%] rounded h-[40px] shadow-md'
                        placeholder='enter your name'
                        onChange={handelInput}
                        name='name'
                        value={obj.name} /> <br />
                    <input type="text"
                        className='w-[80%] rounded h-[40px] shadow-md'
                        placeholder='enter your number'
                        onChange={handelInput} 
                        name='number'
                        value={obj.number}/> <br />
                    <input type="text"
                        className='w-[80%] rounded h-[40px] shadow-md'
                        placeholder='enter your email'
                        name='email'
                        value={obj.email}
                        onChange={handelInput} /> <br />
                    <button className='text-xl font-bold h-9 rounded text-white w-20 bg-teal-600 hover:bg-teal-900' onClick={handelSave}>Send</button>
                </div>

            </div>
        </div>
    )
}

export default Contect
