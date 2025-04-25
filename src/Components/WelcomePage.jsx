import React from 'react'
import { useNavigate } from 'react-router-dom';
import Search from '../Components/Images/search.png'
import Bell from '../Components/Images/bell.png'
import Add from '../Components/Images/AddBtn.png'

const WelcomePage = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col md:p-10 py-10 px-4 w-full'>
            <div className='flex items-center justify-between py-5'>
                <div>
                    <p className='text-[16px] font-medium'>Home</p>
                    <p className='text-[16px] text-[#525154] font-medium text-black/60'>Welcome, Cooper!</p>
                </div>
                <div className='flex items-center gap-7'>
                    <img className='cursor-pointer' src={Search} alt="" />
                    <img className='cursor-pointer' src={Bell} alt="" />
                    <img className='w-8 cursor-pointer' src={Add} alt="" />
                </div>
            </div>
            <div className='flex flex-col items-center gap-9 mt-[10px] bg-[#F9F7FC] py-[64px] rounded-md border-2 border-black/70 border-dashed'>
                <div>
                    <p className='text-center text-[16px] text-[#1D1C1F] font-medium'>Welcome!</p>
                    <p className='text-center mt-1 text-[#525154] text-[16px] font-medium'>Get started in just a few steps and unlock seamless transactions<br /> worldwide.</p>
                </div>
                <button
                    className="bg-[#531CB3] text-white py-[10px] w-[117px] px-4 rounded-lg"
                    onClick={() => {
                        navigate('/getready')
                        window.scrollTo(0, 0)
                    }}
                >
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default WelcomePage