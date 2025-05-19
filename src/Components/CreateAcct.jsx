import React, { useContext, useEffect, useState } from 'react'
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import CreateAcctBar from './CreateAcctBar';
import { Context } from '../Context/Context';
import Search from '../Components/Images/search.png'
import Bell from '../Components/Images/bell.png'
import Add from '../Components/Images/AddBtn.png'

const CreateAcct = () => {

    const {
        handleAcctBar,
        acctBar,
        checked2,
        setChecked2,
        checked3,
        setChecked3,
        checked4,
        setChecked4,
        checked5,
        setChecked5,
        checked6,
        setChecked6
    } = useContext(Context)

    const [formData, setFormData] = useState({
        first_name: '',
    })

    useEffect(() => {
        localStorage.setItem('AcctCreated', JSON.stringify('No'));
    }, [])

    const acctCreated = JSON.parse(localStorage.getItem('AcctCreated'));

    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchProfile = async () => {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/profile`, {
                method: "GET",
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = await res.json();
            setFormData(data);
        };

        fetchProfile();
    }, []);

    return (
        <div>
            <div
                className={`w-full top-0 h-[200%] absolute ${acctBar ? 'bg-black/30' : 'hidden'}`}
                onClick={handleAcctBar}
            ></div>
            <div className='flex items-start justify-between md:p-10 py-10 px-4 w-full'>
                <div>
                    <p className='text-[28px] font-semibold'>Home</p>
                    <p className='text-[16px] font-normal text-[#525154]'>Welcome back, {formData.first_name}!</p>
                </div>
                <div className='flex md:items-center items-start gap-9'>
                    <img className='lg:block hidden cursor-pointer' src={Search} alt="" />
                    <img className='lg:block hidden cursor-pointer' src={Bell} alt="" />
                    <img className='sp:w-8 w-[30px] cursor-pointer' src={Add} alt="" />
                </div>
            </div>
            <div className='flex flex-col items-center gap-9 bg-[#fbf9fd] lg:mx-10 mx-4 py-16 px-2 rounded-md border-2 border-black/50 border-dashed'>
                <div className='max-w-[500px]'>
                    <p className='text-center font-medium text-[19px] text-[#1D1C1F]'>We are here to help you get paid for your work.</p>
                    <p className='text-center mt-1 text-[14px] font-normal text-[#525154]'>Get started by creating your first bank account for any supported country (e.g., USA, Canada, UK)</p>
                </div>
                <button
                    className="bg-[#531CB3] text-white p-3 text-[14px] rounded-lg"
                    onClick={handleAcctBar}
                >
                    Create your first bank account
                </button>
            </div>
            <div className='mt-[25px] pb-10 px-4'>
                <h1 className='font-medium text-[18px] text-[#1D1C1F]'>Congratulations on taking the first step!</h1>
                <p className='text-[#525154] text-[14px]'>Complete these simple steps to get started using reccur.</p>
                <div className='flex sm:flex-row flex-col text-[14px] justify-between gap-4 w-[80%] mt-4'>
                    <div className='flex flex-col gap-4'>
                        <div
                            className={`flex items-center gap-2 cursor-pointer ${acctCreated === 'Yes' ? 'text-black/50 line-through' : 'text-[#542d9d] underline'}`}
                            onClick={acctCreated === 'No' ? handleAcctBar : null}
                        >
                            {acctCreated === 'Yes' ? (
                                <FaCheckCircle className='mt-1 text-[#542d9d]' />
                            ) : (
                                <FaRegCircle className='mt-1 text-black/50' />
                            )}
                            <p>Create your first bank account</p>
                        </div>
                        <div
                            className={`flex items-center gap-2 cursor-pointer ${checked2 ? 'text-black/50 line-through' : 'text-[#542d9d] underline'}`}
                            onClick={() => setChecked2(!checked2)}
                        >
                            {checked2 ? (
                                <FaCheckCircle className='mt-1 text-[#542d9d]' />
                            ) : (
                                <FaRegCircle className='mt-1 text-black/50' />
                            )}
                            <p>Create your first invoice</p>
                        </div>
                        <div
                            className={`flex items-center gap-2 cursor-pointer ${checked3 ? 'text-black/50 line-through' : 'text-[#542d9d] underline'}`}
                            onClick={() => setChecked3(!checked3)}
                        >
                            {checked3 ? (
                                <FaCheckCircle className='mt-1 text-[#542d9d]' />
                            ) : (
                                <FaRegCircle className='mt-1 text-black/50' />
                            )}
                            <p>Get your first payment</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div
                            className={`flex items-center gap-2 cursor-pointer ${checked4 ? 'text-black/50 line-through' : 'text-[#542d9d] underline'}`}
                            onClick={() => setChecked4(!checked4)}
                        >
                            {checked4 ? (
                                <FaCheckCircle className='mt-1 text-[#542d9d]' />
                            ) : (
                                <FaRegCircle className='mt-1 text-black/50' />
                            )}
                            <p>Create your KYC verification</p>
                        </div>
                        <div
                            className={`flex items-center gap-2 cursor-pointer ${checked5 ? 'text-black/50 line-through' : 'text-[#542d9d] underline'}`}
                            onClick={() => setChecked5(!checked5)}
                        >
                            {checked5 ? (
                                <FaCheckCircle className='mt-1 text-[#542d9d]' />
                            ) : (
                                <FaRegCircle className='mt-1 text-black/50' />
                            )}
                            <p>Make your first withdrawal</p>
                        </div>
                        <div
                            className={`flex items-center gap-2 cursor-pointer ${checked6 ? 'text-black/50 line-through' : 'text-[#542d9d] underline'}`}
                            onClick={() => setChecked6(!checked6)}
                        >
                            {checked6 ? (
                                <FaCheckCircle className='mt-1 text-[#542d9d]' />
                            ) : (
                                <FaRegCircle className='mt-1 text-black/50' />
                            )}
                            <p>Update your profile</p>
                        </div>
                    </div>
                </div>
            </div>
            <CreateAcctBar />
        </div>
    )
}

export default CreateAcct