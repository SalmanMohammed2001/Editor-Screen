import React, {useEffect, useState} from 'react'
import {IoMdArrowForward} from 'react-icons/io'
import {useDispatch, useSelector} from 'react-redux';
import {setDetails} from '../../slice/emailPageSliderSlice.ts'


const EmailPage = () => {

    const values = useSelector(((state: any) => state.emailPageSliderInfo.details));


    const dispatch = useDispatch();

    const [data, setData] = useState(values.email);
    const [error, setError] = useState('');

    const [state, setState] = useState(values);

    const handleChange = (e: any) => {
        const value = e.target.value;
        setData(value);

        setState((prevState: any) => ({
            ...prevState,

            ...prevState.details,
            email: value, // Update only the email value

        }));


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setError('Please enter a valid email address');
        } else {
            setError('');
        }


    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!error && data) {

            console.log('Email submitted:', data);

            //   setEmail('');
        }
    };

    useEffect(() => {

        console.log(state);

        dispatch(setDetails(state))

        console.log(values);

    }, [data])

    return (
        <section className=' h-full p-1 '>
            <div
                className=' h-[100%]  rounded-lg  bg-white shadow-2xl flex items-center px-5 justify-center gap-2 flex-col lg:flex-row'>
                <div className=' min-h-[200px] w-full p-2  flex items-center justify-center  '>

                    <form onSubmit={handleSubmit} className='  flex p-2'>
                        <div className='text-[28px] font-normal  font-sans  flex justify-center p-2'><p
                            className='text-[19px]'>1</p> <IoMdArrowForward className='w-[15px]'/></div>
                        <div className='pl-2'>
                            <h1 className='text-[28px] font-normal  font-sans mb-4'>{values.title}</h1>
                            <p className='text-[1.75rem] font-sans mb-3 '>{values.description}</p>
                            <input type="email" className="border-b border-black focus:outline-none w-full mt-5"
                                   placeholder="Type Here" value={data}
                                   onChange={handleChange}/>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                        </div>

                    </form>

                </div>

            </div>
        </section>
    )
}

export default EmailPage