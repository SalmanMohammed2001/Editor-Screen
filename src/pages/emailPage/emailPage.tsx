import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import { useSelector } from 'react-redux';

const EmailPage = () => {

  const value=useSelector(((state)=>state.emailPageSliderInfo.details));

  return (
    <section className=' h-full p-1 '>
    <div className=' h-[100%] rounded-md bg-white shadow-md flex items-center px-5 justify-center gap-2 flex-col lg:flex-row'>
        <div className=' min-h-[200px] w-full p-2  flex items-center justify-center  '>
        
            <div className='  flex p-2'>
                <div className='text-[28px] font-normal  font-sans  flex justify-center p-2'><p className='text-[19px]'>1</p> <IoMdArrowForward className='w-[15px]'/></div>
           <div className='pl-2'>
           <h1 className='text-[28px] font-normal  font-sans mb-4'>{value.title}</h1>
            <p className='text-[1.75rem] font-sans mb-3 '>{value.description}</p>
            <input type="email" className="border-b border-black focus:outline-none w-full mt-5" placeholder="Type Here" />
           </div>
            </div>

        </div>
        
    </div>
</section>
  )
}

export default EmailPage