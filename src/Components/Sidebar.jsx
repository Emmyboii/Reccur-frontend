import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BsThreeDots } from "react-icons/bs";
import { RiHome6Line } from "react-icons/ri";
import Avatar from '../Components/Images/Avatar.png'
import Logo from '../Components/Images/Logomark.png';
import close from '../Components/Images/close.png';
import Beneficiary from '../Components/Images/beneficiary.png';
import Transaction from '../Components/Images/transaction.png';
import Invoice from '../Components/Images/Invoice.png';
import Settings from '../Components/Images/Settings.png';
import { Context } from '../Context/Context';

const Sidebar = () => {
    const location = useLocation()

    const verified = JSON.parse(localStorage.getItem('detailsVerified'))

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

    return (
        <div className={`bg-[#431594] text-white sp:w-[350px] 2xl:w-[550px] w-full h-screen top-0 left-0 py-8 px-5 z-50 gap-5 ${sideBar ? 'fixed flex lg:hidden flex-col justify-between' : 'lg:flex sticky hidden lg:flex-col lg:justify-between'}`}>
            <div>
                <div className='flex items-center justify-between'>
                    {verified ? (
                        <Link onClick={isMdScreen ? handleSideBar : undefined} to='/home'>
                            <h1 className='flex gap-3 items-center font-semibold ml-2 text-[20px]'>
                                <img src={Logo} alt="" className='mt-2 w-7 h-7' />
                                reccur
                            </h1>
                        </Link>
                    ) : (
                        <Link onClick={isMdScreen ? handleSideBar : undefined} to='/'>
                            <h1 className='flex gap-3 items-center font-semibold ml-2 text-[20px]'>
                                <img src={Logo} alt="" className='mt-2 w-7 h-7' />
                                reccur
                            </h1>
                        </Link>
                    )}
                    <img
                        onClick={handleSideBar}
                        src={close}
                        alt=""
                        className='cursor-pointer lg:hidden'
                    />
                </div>

                <div className='flex flex-col gap-2 mt-5'>
                    {verified ? (
                        <Link onClick={isMdScreen ? handleSideBar : undefined} to='/home'>
                            <p className={location.pathname.startsWith('/home') ? 'bg-[#4e22a0] flex items-center gap-2 cursor-pointer rounded-md p-2' : 'flex items-center gap-2 cursor-pointer hover:bg-[#4e22a0] rounded-md p-2'}>
                                <RiHome6Line className='text-[24px]' />
                                Home
                            </p>
                        </Link>
                    ) : (
                        <Link onClick={isMdScreen ? handleSideBar : undefined} to='/'>
                            <p className={location.pathname.startsWith('/') &&
                                location.pathname !== '/beneficiaries' &&
                                location.pathname !== '/beneficiaries' &&
                                location.pathname !== '/invoices' &&
                                location.pathname !== '/transactions' &&
                                location.pathname !== '/settings' ?
                                'bg-[#4e22a0] flex items-center gap-2 cursor-pointer rounded-md p-2'
                                :
                                'flex items-center gap-2 cursor-pointer hover:bg-[#4e22a0] rounded-md p-2'
                            }
                            >
                                <RiHome6Line className='text-[24px]' />
                                Home
                            </p>
                        </Link>
                    )}

                    <Link onClick={isMdScreen ? handleSideBar : undefined} to='/beneficiaries'>
                        <p className={location.pathname === '/beneficiaries' ? 'bg-[#4e22a0] flex items-center gap-2 cursor-pointer rounded-md p-2' : 'flex items-center gap-2 cursor-pointer hover:bg-[#4e22a0] rounded-md p-2'}>
                            <img src={Beneficiary} alt="" />
                            Beneficiaries
                        </p>
                    </Link>
                    <Link onClick={isMdScreen ? handleSideBar : undefined} to='/invoices'>
                        <p className={location.pathname === '/invoices' ? 'bg-[#4e22a0] flex items-center gap-2 cursor-pointer rounded-md p-2' : 'flex items-center gap-2 cursor-pointer hover:bg-[#4e22a0] rounded-md p-2'}>
                            <img src={Invoice} alt="" />
                            Invoices
                        </p>
                    </Link>
                    <Link onClick={isMdScreen ? handleSideBar : undefined} to='/transactions'>
                        <p className={location.pathname === '/transactions' ? 'bg-[#4e22a0] flex items-center gap-2 cursor-pointer rounded-md p-2' : 'flex items-center gap-2 cursor-pointer hover:bg-[#4e22a0] rounded-md p-2'}>
                            <img src={Transaction} alt="" />
                            Transactions
                        </p>
                    </Link>
                    <Link onClick={isMdScreen ? handleSideBar : undefined} to='/settings'>
                        <p className={location.pathname === '/settings' ? 'bg-[#4e22a0] flex items-center gap-2 cursor-pointer rounded-md p-2' : 'flex items-center gap-2 cursor-pointer hover:bg-[#4e22a0] rounded-md p-2'}>
                            <img src={Settings} alt="" />
                            Settings
                        </p>
                    </Link>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <Link
                    onClick={() => setTransactionType('account')}
                    to='/settings'>
                    <div onClick={isMdScreen ? handleSideBar : undefined} className='flex items-center cursor-pointer gap-2'>
                        <img src={Avatar} alt='' />
                        <p>Cooper Bator</p>
                    </div>
                </Link>
                <Link
                    onClick={() => setTransactionType('account')}
                    to='/settings'>
                    <BsThreeDots onClick={isMdScreen ? handleSideBar : undefined} className='text-[20px] cursor-pointer' />
                </Link>
            </div>
        </div>
    )
}

export default Sidebar