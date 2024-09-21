import React, {useEffect, useRef, useState} from 'react'
import settion_icon from "../../assets/images/fill-setion-icon.png"
import close_icon from "../../assets/images/close-icon.png"
import {useDispatch, useSelector} from 'react-redux';
import {setRoute} from '../../slice/welcomePageSliderSlice'
import {setUser} from '../../slice/userSlice'
import {removeImageUrl} from '../../slice/userSlice'
import {setImageRoute} from "../../slice/imageSectionSlice"
import {Link} from 'react-router-dom';


const WelcomePageSlider = () => {

    const value = useSelector(((state: any) => state.userInfo.users));


    const dispatch = useDispatch();

    // const [previewUrl, setPreviewUrl] = useState("");
    const [formData, setFormData] = useState({
        title: value.title,
        description: value.description,
        buttonText: value.buttonText,
        imageUrl: value.imageUrl
    })


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});

    }


    useEffect(() => {

        dispatch(setUser(formData))

        console.log(value);
        console.log("salman");


    }, [formData]);


    const handleFileInputChange = async (e: any) => {
        const file: any = e.target.files[0]

        const reader = new FileReader();
        reader.onloadend = () => {
            //  setPreviewUrl(reader.result);
            setFormData({...formData, imageUrl: reader.result})
            ;

        };
        reader.readAsDataURL(file);


    }


    return (
        <div className='w-full h-full  relative p-3 transition-opacity duration-300 '>

            <div className='  flex items-center mb-5 transition-transform duration-300 transform'>
                <div className='  flex  items-center gap-2 '>
                    <div>
                        <img src={settion_icon} alt="" className='w-5'/>
                    </div>
                    <h3 className='text-[14px] font-semibold'>Setting</h3>
                </div>


                <div className=' flex-1 flex items-center justify-end '>
                    <div className='shadow-lg border rounded-md py-2 px-2 ' onClick={() => {
                        dispatch(setRoute("close"))
                    }}>
                        <img src={close_icon} alt="" className='w-4'/>
                    </div>
                </div>

            </div>

            <div className="flex flex-col  ">
                <form action="">

                    <div className="flex gap-2 my-1 text-sm flex-col items-start">
                        <p className="text-sm font-medium">Title</p>
                        <input
                            className="w-full p-2 border border-gray-300 rounded-md focus:border-black focus:outline-none"
                            name='title' value={value.title} onChange={handleInputChange}></input>

                        <p className="text-sm font-medium">Description</p>
                        <input
                            className="w-full p-2 border border-gray-300 rounded-md focus:border-black focus:outline-none"
                            name='description' value={value.description} onChange={handleInputChange}></input>

                        <p className="text-sm font-medium">Button Text</p>
                        <input
                            className="w-full p-2 border border-gray-300 rounded-md focus:border-black focus:outline-none"
                            name='buttonText' value={value.buttonText} onChange={handleInputChange}></input>

                        <label htmlFor="imageId"
                               className="flex items-center gap-2 p-1 font-medium border border-gray-300 rounded-md focus:border-black focus:outline-none hover:border-black"><span
                            role="img" aria-label="upload" className="anticon anticon-upload"><svg
                            viewBox="64 64 896 896" focusable="false" data-icon="upload" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true"><path
                            d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg></span>Upload</label>
                        <input type="file" id="imageId" accept="image/*" className="hidden"
                               onChange={handleFileInputChange}></input>
                    </div>


                </form>

            </div>

            {
                formData.imageUrl != "" && <div className=''>
                    <div className="mt-4">
                        <img src={formData.imageUrl} alt="Image Preview"
                             className=" max-w-full border border-gray-300 w-full h-[180px] bg-cover  rounded-lg"/>
                        <div className='flex items-center justify-center'>
                            <button
                                className="p-1 mt-2 font-medium border border-gray-300 rounded-md focus:border-black focus:outline-none hover:border-black"
                                onClick={() => {
                                    dispatch(removeImageUrl())
                                    formData.imageUrl = "";
                                }}>Remove Image
                            </button>
                        </div>


                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <p className="text-sm font-medium">Placement</p>
                        <button onClick={() => {
                            dispatch(setImageRoute('default'))
                            console.log("salman");


                        }}
                                className="p-1 border border-gray-300 rounded-md focus:border-black focus:outline-none hover:border-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20"
                                 fill="none">
                                <path
                                    d="M14 1C14 0.447715 14.4477 0 15 0H26C27.1046 0 28 0.895431 28 2V18C28 19.1046 27.1046 20 26 20H15C14.4477 20 14 19.5523 14 19V1ZM3 11.75C3 11.3358 3.33579 11 3.75 11H8.25C8.66421 11 9 11.3358 9 11.75C9 12.1642 8.66421 12.5 8.25 12.5H3.75C3.33579 12.5 3 12.1642 3 11.75ZM3.75 8C3.33579 8 3 8.33579 3 8.75C3 9.16421 3.33579 9.5 3.75 9.5H10.25C10.6642 9.5 11 9.16421 11 8.75C11 8.33579 10.6642 8 10.25 8H3.75Z"
                                    fill="currentColor"></path>
                            </svg>
                        </button>

                        <button onClick={() => {
                            dispatch(setImageRoute('change'))

                        }}
                                className="p-1 border border-gray-300 rounded-md focus:border-black focus:outline-none hover:border-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20"
                                 fill="none">
                                <path
                                    d="M0 2C0 0.895431 0.895431 0 2 0H13C13.5523 0 14 0.447716 14 1V19C14 19.5523 13.5523 20 13 20H2C0.895431 20 0 19.1046 0 18V2ZM17 11.75C17 11.3358 17.3358 11 17.75 11H22.25C22.6642 11 23 11.3358 23 11.75C23 12.1642 22.6642 12.5 22.25 12.5H17.75C17.3358 12.5 17 12.1642 17 11.75ZM17.75 8C17.3358 8 17 8.33579 17 8.75C17 9.16421 17.3358 9.5 17.75 9.5H24.25C24.6642 9.5 25 9.16421 25 8.75C25 8.33579 24.6642 8 24.25 8H17.75Z"
                                    fill="currentColor"></path>
                            </svg>
                        </button>


                    </div>

                </div>
            }


            <div className=' mt-5 flex justify-between'>
                <Link to={"/"}>
                    <button className=' bg-black py-[8px] px-[50px] text-white rounded-md' onClick={() => {
                        dispatch(setRoute("close"))
                    }}>Save
                    </button>
                </Link>
                <button className=' py-[8px] px-[50px] text-red-500 rounded-md hover:bg-red-200'>Delete</button>


            </div>


        </div>)
}

export default WelcomePageSlider;