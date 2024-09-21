
import Slidebar from '../components/slidebar/slidebar'
import Routers from '../route/Routers'

const Layout = () => {
  return (
    <div className='h-[100vh] flex '>
        <div className='h-[100%] w-[20rem] '> 
            <Slidebar/>
           </div>
        <div className='h-[100%] flex-1  border'> 
            <Routers/>
        </div>
    </div>
  )
}

export default Layout