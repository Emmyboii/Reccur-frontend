import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsThreeDots } from "react-icons/bs";
import { RiHome6Line } from "react-icons/ri";
import Logo from '../Components/Images/Logomark2.png';
import close from '../Components/Images/close.png';
import Beneficiary from '../Components/Images/beneficiary.png';
import Transaction from '../Components/Images/transaction.png';
import Invoice from '../Components/Images/Invoice.png';
import Settings from '../Components/Images/Settings.png';
import { Context } from '../Context/Context';
import ConfirmLogOut from './ConfirmLogOut';

const Sidebar = ({ verified, kyc }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [onLogOut, setOnLogOut] = useState(false)
    const [onClick, setOnclick] = useState(false)


    const [formData, setFormData] = useState({
        fullname: '',
        last_name: '',
        image: null
    })

    const getRandomColor = () => {
        const colors = [
            "#F87171", // red-400
            "#60A5FA", // blue-400
            "#34D399", // green-400
            "#FBBF24", // yellow-400
            "#A78BFA", // purple-400
            "#FB7185", // pink-400
            "#F97316", // orange-400
            "#38BDF8", // sky-400
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const bgColor = useMemo(() => getRandomColor(), []);

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

    const { handleSideBar, sideBar, setSideBar, setTransactionType } = useContext(Context)

    const [isLgScreen, setIsLgScreen] = useState(window.innerWidth > 1024);
    const [isMdScreen, setIsMdScreen] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsLgScreen(window.innerWidth > 1024);
            setIsMdScreen(window.innerWidth <= 1024);
        };

        if (isLgScreen) {
            setSideBar(false)
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [setSideBar, isLgScreen]);

    const handleRedirectIfUnverified = (e, targetPath) => {
        e.preventDefault();
        if (isMdScreen) handleSideBar();
        if (verified === kyc) {
            navigate(targetPath);
        } else {
            navigate('/dashboard', {
                state: { error: 'You need to fill in your KYC data to continue' }
            });
        }
    };

    const menuItems = [
        { path: '/home', label: 'Home', icon: <RiHome6Line className="text-[24px]" /> },
        { path: '/beneficiaries', label: 'Beneficiaries', icon: <img src={Beneficiary} alt="" /> },
        { path: '/invoices', label: 'Invoices', icon: <img src={Invoice} alt="" /> },
        { path: '/transactions', label: 'Transactions', icon: <img src={Transaction} alt="" /> },
        { path: '/settings', label: 'Settings', icon: <img src={Settings} alt="" /> },
    ];

    return (
        <div className={`bg-[#431594] text-white sp:w-[350px] 2xl:w-[550px] w-full h-screen top-0 left-0 px-5 z-50 gap-5 ${sideBar ? 'fixed flex lg:hidden flex-col justify-between' : 'lg:flex sticky hidden lg:flex-col lg:justify-between'}`}>
            <div className='py-8'>
                <div className="flex items-center justify-between">
                    <Link
                        to={verified === kyc ? '/home' : '/dashboard'}
                        onClick={(e) => handleRedirectIfUnverified(e, verified === kyc ? '/home' : '/dashboard')}
                    >
                        <h1 className="flex gap-3 items-center font-semibold ml-2 text-[20px]">
                            <img src={Logo} alt="" className="mt-2 w-7 h-7" />
                            <p>reccur</p>
                        </h1>
                    </Link>
                    <img
                        onClick={handleSideBar}
                        src={close}
                        alt=""
                        className="cursor-pointer lg:hidden"
                    />
                </div>

                {/* Sidebar Menu */}
                <div className="flex flex-col gap-2 mt-5">
                    {menuItems.map(({ path, label, icon }) => (
                        <Link
                            to={path}
                            key={label}
                            onClick={(e) => handleRedirectIfUnverified(e, path)}
                        >
                            <div
                                className={`${location.pathname === path
                                    ? 'bg-[#4e22a0]'
                                    : 'hover:bg-[#4e22a0]'
                                    } flex items-center gap-2 cursor-pointer rounded-md p-2`}
                            >
                                {icon}
                                <p>{label}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Profile Section */}
            <div className='relative'>
                <div className={`w-full text-black bg-white/80 text-[18px] text-center z-0 absolute transition-all duration-500 left-0 ${!onClick ? 'hidden' : 'bottom-[79px]'}`}>
                    <Link
                        to="/settings"
                        onClick={(e) => {
                            setTransactionType('account');
                            setOnclick(false)
                        }}
                    >
                        <p className='py-2'>
                            Account Settings
                        </p>
                    </Link>
                    <hr className='h-[2px] bg-[#431594]' />
                    <p
                        onClick={() => setOnLogOut(!onLogOut)}
                        className='py-2 cursor-pointer'
                    >
                        Log Out
                    </p>
                </div>

                <div onClick={() => setOnclick(!onClick)} className="flex items-center bg-[#431594] pb-8 h-full z-50 justify-between mt-4">
                    <div className="flex w-full items-center cursor-pointer z-50 gap-2">
                        <label htmlFor="ProfilePics">
                            <div className="flex gap-6">
                                {formData.image ? (
                                    <img
                                        src={formData.image}
                                        alt=""
                                        className="rounded-[48px] size-9 cursor-pointer"
                                    />
                                ) : (
                                    <div
                                        className="flex items-center justify-center cursor-pointer rounded-full text-[24px] size-11 text-white font-semibold uppercase"
                                        style={{ backgroundColor: bgColor }}
                                    >
                                        {formData.last_name?.charAt(0) || "?"}
                                    </div>
                                )}
                            </div>
                        </label>
                        <p className='z-50'>{formData.fullname}</p>
                    </div>
                    <p>
                        <BsThreeDots
                            className="text-[20px] z-50 cursor-pointer"
                        />
                    </p>
                </div>
            </div>

            <ConfirmLogOut onLogOut={onLogOut} setOnLogOut={setOnLogOut} />
        </div>
    )
}

export default Sidebar