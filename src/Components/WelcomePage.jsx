import React, { useState } from 'react'
import Search from '../Components/Images/search.png'
import Bell from '../Components/Images/bell.png'
import Add from '../Components/Images/AddBtn.png'
import { useNavigate } from 'react-router-dom'

const WelcomePage = () => {

    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleClick = () => {
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
window.scrollTo(0,0)
            navigate('/dashboard/getready')
        }, 2000);
    };

    return (
        <div className='flex flex-col md:p-10 py-10 px-4 w-full'>
            <div className='flex items-start justify-between'>
                <div>
                    <p className='text-[16px] font-medium'>Home</p>
                    <p className='text-[16px] text-[#525154] font-medium text-black/60'>Welcome, Cooper!</p>
                </div>
                <div className='flex items-center gap-9'>
                    <img className='lg:block hidden cursor-pointer' src={Search} alt="" />
                    <img className='lg:block hidden cursor-pointer' src={Bell} alt="" />
                    <img className='w-8 cursor-pointer' src={Add} alt="" />
                </div>
            </div>
            <div className='flex flex-col items-center gap-9 mt-10 bg-[#F9F7FC] py-[64px] rounded-md border-2 border-black/70 border-dashed'>
                <div>
                    <p className='text-center text-[16px] text-[#1D1C1F] font-medium'>Welcome!</p>
                    <p className='text-center mt-1 text-[#525154] text-[16px] font-medium'>Get started in just a few steps and unlock seamless transactions<br /> worldwide.</p>
                </div>

                <button
                    className={`p-[10px] px-4 rounded-lg text-white w-[117px] ${isSubmitting ? 'bg-[#E8E1F5]' : 'bg-[#531CB3]'}`}
                    onClick={handleClick}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        'Loading...'
                    ) : (
                        'Get Started'
                    )}
                </button>
            </div>
        </div>
    )
}

export default WelcomePage