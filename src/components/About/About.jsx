import React from 'react'
import AboutImage from "../../assets/About.png"

const About = () => {
    return (
        <div className='h-[100vh] w-full'>

            <div className='h-[30vh] w-full items-center justify-center flex'>
                <h1 className='text-3xl font-semibold text-green-500'>About </h1>
                <img src={AboutImage} alt=""
                    className='w-[50%]' />
                <h1 className='text-3xl font-semibold text-red-500'>Page</h1>
            </div>
            <div className=' mt-[120px] text-center '>
                <div >
                    <h1 className='font-bold text-4xl' > You Know <span className='text-yellow-700' >Who we</span> are best </h1>
                    <h1 className='mt-3'>A computer center is a facility equipped with a range of hardware, software, and network resources designed to support various computational tasks. These centers serve as hubs for data processing, research, learning, and IT support. They can be found in educational institutions, businesses, government agencies, and specialized industries. A well-established computer center often includes powerful servers, workstations, internet connectivity, and storage solutions.
                        In educational environments, computer centers provide students and staff with access to essential learning tools, such as software for programming, graphic design, data analysis, and simulations. They are key to promoting digital literacy and enabling research activities that require high computational power.
                        For businesses, computer centers are crucial for managing daily operations, including data storage, cybersecurity, customer support, and networking. They also play a role in business continuity, providing backup systems and disaster recovery solutions.Additionally, computer centers can act as public resources in communities, offering internet access, training, and technical assistance to bridge the digital divide. Overall, these centers are vital for ensuring that individuals and organizations stay connected, efficient, and informed in today’s digital age.</h1>
                </div>

            </div>
        </div>
    )
}

export default About
