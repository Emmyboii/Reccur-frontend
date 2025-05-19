import React, { useEffect, useState } from 'react'
import Search from '../Components/Images/search.png'
import Bell from '../Components/Images/bell.png'
import Add from '../Components/Images/AddBtn.png'
import { useLocation, useNavigate } from 'react-router-dom'

const WelcomePage = () => {

    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false)

    const location = useLocation();
    const [error, setError] = useState(null);

    useEffect(() => {
        localStorage.setItem('userCreated', JSON.stringify('NotVerified'));
    }, [])

    useEffect(() => {
        if (location.state?.error) {
            setError(location.state.error);

            const timer = setTimeout(() => {
                setError(null);
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [location]);

    const handleDismiss = () => {
        setError(null);
    };

    const handleClick = () => {
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            window.scrollTo(0, 0)
            navigate('/dashboard/getready')
        }, 2000);
    };

    const [formData, setFormData] = useState({
        first_name: '',
    })

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
        <div className='flex flex-col md:p-10 py-10 px-4 w-full'>
            {error && (
                <div className="absolute top-4 right-4 bg-red-100 text-red-800 border border-red-400 px-4 py-3 rounded shadow-md z-50 w-fit max-w-sm flex items-center justify-between gap-4">
                    <span>{error}</span>
                    <button
                        onClick={handleDismiss}
                        className="text-red-600 font-bold hover:text-red-800"
                    >
                        ×
                    </button>
                </div>
            )}
            <div className='flex items-start justify-between'>
                <div>
                    <p className='text-[16px] font-medium'>Home</p>
                    <p className='text-[16px] text-[#525154] font-medium text-black/60'>Welcome, {formData.first_name}!</p>
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