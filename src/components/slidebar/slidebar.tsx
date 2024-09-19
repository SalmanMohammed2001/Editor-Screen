import React from 'react'
import icon1 from '../../assets/images/setting-icon.png'

const Slidebar=()=> {
  return (
    <div className='w-full h-full border border-green-500 p-5'>
        <div className='h-[100%] border flex flex-col'>

            <div className='border pt-5 pb-[40px]'>
            <div className='flex  items-center  justify-between border   mb-3'>
                <div className='flex  justify-between items-center'>
                <button className=" text-gray-800 text-[12px] py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-3 w-3 mr-1"><path d="M10.362 1.093a.75.75 0 0 0-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925ZM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0 0 18 14.25V6.443ZM9.25 18.693v-8.25l-7.25-4v7.807a.75.75 0 0 0 .388.657l6.862 3.786Z"></path></svg>
  <span>Document</span>
</button>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-3 w-3"><path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path></svg>
<p className="text-xs font-medium truncate max-w-[10rem]">demo</p>
                </div>
               
            <button>
            <img src={icon1} alt="" className=' h-[20px] w-[30px]'/>
            </button>
            </div>

            
            <div className=' flex w-[100%] items-center justify-between  bg-black-rgba rounded-md p-[5px] gap-[10px] '>
                <div className='w-full'>
                <button className='py-[4px] px-[4px] bg-white text-[12px] rounded-md'>Contaent</button>
                </div>
                <div className='w-full'>
                <button className='py-[4px] px-[4px] text-[12px] rounded-md'>Design</button>
                </div>
                <div className='w-full'>
                <button className='py-[4px] px-[4px] text-[12px] rounded-md'>Share</button>
                </div>
                <div className='w-full'>
                <button className='py-[4px] px-[4px] text-[12px] rounded-md'>Contaent</button>
                </div>
            </div>
            </div>
           
           <div className='flex-1 border border-black'>

           </div>
        
        </div>


    </div>
  )
}

export default Slidebar