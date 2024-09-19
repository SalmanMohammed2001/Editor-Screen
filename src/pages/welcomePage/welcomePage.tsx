import React from 'react'
import settion_icon from "../../assets/images/fill-setion-icon.png"
import close_icon from "../../assets/images/close-icon.png"

const WelcomePage = () => {
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
             <div className='shadow-lg border rounded-md py-2 px-2'>
          <img src={close_icon} alt="" className='w-4' />
             </div>
            </div>

        </div>

        <div className="flex flex-col ">
        <div className="flex gap-2 my-1 text-sm flex-col items-start">
        <p className="text-sm font-medium">Title</p>
        <input className="w-full p-2 border border-gray-300 rounded-md focus:border-black focus:outline-none" value="Welcome to our form" ></input>

        <p className="text-sm font-medium">Description</p>
        <input className="w-full p-2 border border-gray-300 rounded-md focus:border-black focus:outline-none" value="This is a description of the form" ></input>

        <p className="text-sm font-medium">Button Text</p>
        <input className="w-full p-2 border border-gray-300 rounded-md focus:border-black focus:outline-none" value="Start" ></input>
      
        <label htmlFor="imageId"  className="flex items-center gap-2 p-1 font-medium border border-gray-300 rounded-md focus:border-black focus:outline-none hover:border-black" ><span role="img" aria-label="upload" className="anticon anticon-upload"><svg viewBox="64 64 896 896" focusable="false" data-icon="upload" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg></span>Upload</label>

        <input type="file" id="imageId" accept="image/*" className="hidden"></input>  
        </div>
        </div>



    </div>)
}

export default WelcomePage;