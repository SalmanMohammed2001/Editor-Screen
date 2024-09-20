import React from 'react'
import settion_icon from "../../assets/images/fill-setion-icon.png"
import close_icon from "../../assets/images/close-icon.png"
import { useDispatch } from 'react-redux';
import {setRoute} from '../../slice/welcomePageSliderSlice'

const EmailPageSlider = () => {

  const dispatch=useDispatch();
  return (
    <div className='w-full h-full border border-green-500  relative p-3'>
  
    <div className='  flex items-center mb-5'>
        <div className='  flex  items-center gap-2 ' >
        <div>
        <img src={settion_icon} alt="" className='w-5' />
        </div>
        <h3 className='text-[14px] font-semibold'>Setting</h3>
        </div>


        <div className=' flex-1 flex items-center justify-end'>
         <div className='shadow-lg border rounded-md py-2 px-2' onClick={()=>{
           dispatch(setRoute("close"))
         }}>
      <img src={close_icon} alt="" className='w-4' />
         </div>
        </div>

    </div>

    <div className="flex flex-col  ">
    <div className="flex gap-2 my-1 text-sm flex-col items-start">
    <p className="text-sm font-medium">Title</p>
    <input className="w-full p-2 border border-gray-300 rounded-md focus:border-black focus:outline-none" value="Welcome to our form" ></input>

    <p className="text-sm font-medium">Description</p>
    <input className="w-full p-2 border border-gray-300 rounded-md focus:border-black focus:outline-none" value="This is a description of the form" ></input>

    <div className=' flex w-full justify-between mt-3  '>
    <p className="text-sm font-medium">required</p>
    <label className="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer"/>
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-black-rgba1 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

</label>
    </div>
    

    </div>
    </div>

    


    <div className=' mt-5 flex justify-between'>
        <button className=' bg-black py-[8px] px-[50px] text-white rounded-md'>Save</button>
        <button className=' py-[8px] px-[50px] text-red-500 rounded-md hover:bg-red-200'>Save</button>


    </div>





</div>
  )
}

export default EmailPageSlider;