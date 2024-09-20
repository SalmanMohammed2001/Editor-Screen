import React from 'react'
import icon from "../../assets/images/menu-icon.png"

const WelcomePage = () => {
  return (
    <section className=' h-full p-1 '>
        <div className=' h-[100%] rounded-md bg-white shadow-md flex items-center px-5 justify-center gap-2 flex-col lg:flex-row'>
            <div className=' min-h-[200px] w-full p-2 '>
             <h1 className='text-[38px] font-bold  font-sans mb-2'>Welcome to our form</h1>
             <p className='text-[1.75rem] font-sans mb-3 '>This is a description of the form</p>
             <button className='py-2 px-3 shadow-xl rounded-md bg-black text-white'>start</button>
            </div>
            <div className=' min-h-[200px] w-full flex justify-center items-center p-2'>
             <img src={icon} className='h-[320px]' alt="" />
            </div>
        </div>
    </section>
  )
}

export default WelcomePage;