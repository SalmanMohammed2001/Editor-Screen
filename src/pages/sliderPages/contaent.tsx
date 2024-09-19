import React from 'react'
import menu_icon from '../../assets/images/menu-icon.png'
import fill_setion_icon from '../../assets/images/fill-setion-icon.png'
const Contaent = () => {
  return (
    <section className='  '>
        <div>

          <div className='flex items-center gap-2 mb-1'>
          <img src={menu_icon} alt="" className=' h-[15px] w-[20px]'/>
          <h2 className='font-semibold text-[14px]'>Steps</h2>
          </div>

        <p className='text-xs text-zinc-500 mb-3.5'>The steps users will take to complete the form</p>
      
<div className="flex flex-col w-full gap-2 overflow-y-auto min-h-max ">
    {/* <button className="relative flex items-center w-full pl-1 transition duration-150  rounded-lg cursor-pointer hover:bg-zinc-100 bg-zinc-50" fdprocessedid="vnwhqa"><div className="absolute w-2 h-8 transform -translate-y-1/2 bg-black rounded-r-full -left-6 top-1/2"></div>
    <button className="pl-1 pr-1.5 h-8 " fdprocessedid="g1wmlc"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="text-zinc-400 h-2.5 w-2.5"><path fill-rule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm5-2.25A.75.75 0 0 1 7.75 7h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5Z" clip-rule="evenodd"></path></svg></button><button className="text-xs px-1.5  w-full focus:outline-none py-3" fdprocessedid="5dwgag">Welcome screen</button><button className=" hidden"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-3 w-3 text-zinc-400 group-hover:text-zinc-900"><path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"></path></svg></button></button><ul className="reorder-ul fill-available"></ul><button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50   border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 w-[90px]  rounded-lg text-xs h-7 px-2.5 gap-0.5" fdprocessedid="4owplo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-3 w-3 -ml-0.5 mr-0.5"><path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"></path></svg>Add field</button><div class="ant-divider css-1jmz7pr ant-divider-horizontal" role="separator"></div><button class="relative flex items-center w-full pl-1 transition duration-150  rounded-lg cursor-pointer hover:bg-zinc-100 bg-zinc-50" fdprocessedid="hectq"><div class="absolute w-2 h-8 transform -translate-y-1/2 bg-black rounded-r-full -left-6 top-1/2"></div><button class="pl-1 pr-1.5 h-8 " fdprocessedid="sbtkni"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="text-zinc-400 h-2.5 w-2.5"><path fill-rule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm5-2.25A.75.75 0 0 1 7.75 7h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5Z" clip-rule="evenodd"></path></svg></button><button class="text-xs px-1.5  w-full focus:outline-none py-3" fdprocessedid="44gg1t">End screen</button><button class=" hidden"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-3 w-3 text-zinc-400 group-hover:text-zinc-900"><path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"></path></svg></button></button></div> */}

  <div className='    bg-black-rgba2 rounded-md flex mb-2 '>

    <div className=' w-[30px] h-full flex justify-center'>
   <img src={fill_setion_icon} alt="" className='w-2 py-[15px]' />
    </div>
      
         
       
    
    <div className='flex-1 flex  justify-center'>
            <button className=' w-full text-[12px]'>Welcome Screen</button>      
        </div>
        
    </div>   

    <div className='    bg-black-rgba2 rounded-md flex '>

<div className=' w-[30px] h-full flex justify-center'>
<img src={fill_setion_icon} alt="" className='w-2 py-[15px]' />
</div>
  
     
   

<div className='flex-1 flex  justify-center'>
        <button className=' w-full text-[12px]'>Email</button>
      
    </div>
    
</div>   

</div>


        </div>
    </section>
  )
}

export default Contaent