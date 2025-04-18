import React from 'react'
import { useNavigate } from 'react-router-dom';
import Search from '../Components/Images/search.png'
import Bell from '../Components/Images/bell.png'
import Add from '../Components/Images/AddBtn.png'

const WelcomePage = () => {
    const navigate = useNavigate();

    return (
        <div className='my-5'>
            <div className='flex items-center justify-between px-8 py-5'>
                <div>
                    <p className='text-[20px] font-semibold'>Home</p>
                    <p className='text-[18px]'>Welcome, Cooper!</p>
                </div>
                <div className='flex items-center gap-4'>
                    <img src={Search} alt="" />
                    <img src={Bell} alt="" />
                    <img className='w-8' src={Add} alt="" />
                </div>
            </div>
            <div className='flex flex-col items-center gap-9 mt-[60px] bg-[#f3f0f6] mx-8 py-10 rounded-md border-2 border-black/70 border-dashed'>
                <div>
                    <p className='text-center font-semibold'>Welcome!</p>
                    <p className='text-center mt-1'>Get started in just a few steps and unlock seamless transactions<br /> worldwide.</p>
                </div>
                <button
                    className="bg-[#411c87] text-white p-3 rounded-lg"
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