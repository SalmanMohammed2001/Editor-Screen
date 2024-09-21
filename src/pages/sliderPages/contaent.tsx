import React, {useEffect} from 'react'
import menu_icon from '../../assets/images/menu-icon.png'
import fill_setion_icon from '../../assets/images/fill-setion-icon.png'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {setRoute} from '../../slice/welcomePageSliderSlice'

const Contaent = () => {


    const dispatch = useDispatch();


    return (
        <section className='  '>
            <div>

                <div className='flex items-center gap-2 mb-1'>
                    <img src={menu_icon} alt="" className=' h-[15px] w-[20px]'/>
                    <h2 className='font-semibold text-[14px]'>Steps</h2>
                </div>

                <p className='text-xs text-zinc-500 mb-3.5'>The steps users will take to complete the form</p>

                <div className="flex flex-col w-full gap-2 overflow-y-auto min-h-max ">


                    <div className='    bg-black-rgba2 rounded-md flex mb-2 '>

                        <div className=' w-[30px] h-full flex justify-center'>
                            <img src={fill_setion_icon} alt="" className='w-2 py-[15px]'/>
                        </div>


                        <div className='flex-1 flex  justify-center items-center'>
                            <Link to={"/contaent"} className='w-full'>
                                <button className=' w-full text-[12px]' onClick={() => {
                                    dispatch(setRoute("Form"))

                                }}>Welcome Screen
                                </button>
                            </Link>
                        </div>

                    </div>

                    <div className='    bg-black-rgba2 rounded-md flex '>

                        <div className=' w-[30px] h-full flex justify-center'>
                            <img src={fill_setion_icon} alt="" className='w-2 py-[15px]'/>
                        </div>


                        <div className='flex-1 flex  justify-center items-center'>
                            <Link to={"/contaent/email"} className=' w-full'>
                                <button className=' w-full text-[12px]' onClick={() => {
                                    dispatch(setRoute("emailForm"))
                                }}>Email
                                </button>
                            </Link>

                        </div>


                    </div>

                </div>


            </div>
        </section>
    )
}

export default Contaent