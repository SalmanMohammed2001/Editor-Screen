import React, { useEffect, useState } from 'react'
import icon from "../../assets/images/menu-icon.png"
import { useSelector } from 'react-redux';




const WelcomePage = () => {

   const value=useSelector(((state)=>state.userInfo.users));

   const imageRoute=useSelector(((state)=>state.imageSectionInfo.imageSectionRoute));

   console.log(imageRoute);
   



  return (
    <section className=' h-full p-1 '>
        <div className=' h-[100%] rounded-md bg-white shadow-md flex items-center '>
           {
            imageRoute == "default" &&   <div className=' h-full w-full flex items-center px-5 justify-center gap-2 flex-col lg:flex-row border'>
              <div className=' min-h-[200px] w-full p-2 '>
             <h1 className='text-[38px] font-bold  font-sans mb-2' >{value.title}</h1>
             <p className='text-[1.75rem] font-sans mb-3 '>{value.description}</p>
             <button className='py-2 px-3 shadow-xl rounded-md bg-black text-white'>{value.buttonText}</button>
            </div>
            <div className=' min-h-[200px] w-full flex justify-center items-center p-2'>
             <img src={value.imageUrl} className='h-[320px]' alt="" />
            </div>
             </div>
           }

{
            imageRoute == "change" &&   <div className=' h-full w-full flex items-center px-5 justify-center gap-2 flex-col lg:flex-row border'>
            
            <div className=' min-h-[200px] w-full flex justify-center items-center p-2'>
             <img src={value.imageUrl} className='h-[320px]' alt="" />
            </div>
             </div>
           }
        </div>
    </section>
  )
}

export default WelcomePage;

// Welcome to our form
// This is a description of the form