import React, {useEffect, useState} from 'react'
import icon from "../../assets/images/menu-icon.png"
import {useSelector} from 'react-redux';


const WelcomePage = () => {

    const value = useSelector(((state: any) => state.userInfo.users));

    const imageRoute = useSelector(((state: any) => state.imageSectionInfo.imageSectionRoute));

    console.log(imageRoute);


    return (
        <section className=' h-full p-1 '>
            <div className=' h-[100%] rounded-lg bg-white shadow-2xl flex items-center '>
                {
                    imageRoute == "default" && <div
                        className=' h-full w-full flex items-center px-5 justify-center gap-2 flex-col lg:flex-row border'>
                        <div className=' min-h-[200px] w-full p-2 '>
                            <h1 className='text-[38px] font-bold  font-sans mb-2 animate-fadeInUp'>{value.title}</h1>
                            <p className='text-[1.75rem] font-sans mb-3 animate-fadeInUp'>{value.description}</p>
                            <button
                                className='py-2 px-3 shadow-xl rounded-md bg-black text-white animate-fadeInUp'>{value.buttonText}</button>
                        </div>
                        <div className=' min-h-[200px] w-full flex justify-center items-center p-2'>
                            <img src={value.imageUrl} className='h-[320px]' alt=""/>
                        </div>
                    </div>
                }

                {
                    imageRoute == "change" && <div
                        className=' h-full w-full flex items-center px-5 justify-center gap-2 flex-col lg:flex-row border'>

                        <div className=' min-h-[200px] w-full flex justify-center items-center p-2'>
                            <img src={value.imageUrl} className='h-[320px]' alt=""/>
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}

export default WelcomePage;

