import React from 'react'
import Slidebar from '../components/slidebar/slidebar'

const Layout = () => {
  return (
    <div className='h-[100vh] flex '>
        <div className='h-[100%] w-[20rem] border border-black'> 
            <Slidebar/>
           </div>
        <div className='h-[100%] flex-1  border'> 
      
        </div>
    </div>
  )
}

export default Layout