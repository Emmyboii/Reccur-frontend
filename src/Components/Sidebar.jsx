import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { BsThreeDots } from "react-icons/bs";
import { RiHome6Line } from "react-icons/ri";
import Avatar from '../Components/Images/Avatar.png'
import Logo from '../Components/Images/Logomark2.png';
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
                        <a href='/home' onClick={isMdScreen ? handleSideBar : undefined}>
                            <h1 className='flex gap-3 items-center font-semibold ml-2 text-[20px]'>
                                <img src={Logo} alt="" className='mt-2 w-7 h-7' />
                                <p>reccur</p>
                            </h1>
                        </a>
                    ) : (
                        <a href='/' onClick={isMdScreen ? handleSideBar : undefined} to='/'>
                            <h1 className='flex gap-3 items-center font-semibold ml-2 text-[20px]'>
                                <img src={Logo} alt="" className='mt-2 w-7 h-7' />
                                <p>reccur</p>
                            </h1>
                        </a>
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
                        <a href='/home' onClick={isMdScreen ? handleSideBar : undefined} to='/home'>
                            <div className={location.pathname.startsWith('/home') ? 'bg-[#4e22a0] flex items-center gap-2 cursor-pointer rounded-md p-2' : 'flex items-center gap-2 cursor-pointer hover:bg-[#4e22a0] rounded-md p-2'}>
                                <RiHome6Line className='text-[24px]' />
                                <p>Home</p>
                            </div>
                        </a>
                    ) : (
                        <a href='/' onClick={isMdScreen ? handleSideBar : undefined} to='/'>
                            <div className={location.pathname.startsWith('/') &&
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
                                <p>Home</p>
                            </div>
                        </a>
                    )}

                    <a href='/beneficiaries' onClick={isMdScreen ? handleSideBar : undefined}>
                        <div className={location.pathname === '/beneficiaries' ? 'bg-[#4e22a0] flex items-center gap-2 cursor-pointer rounded-md p-2' : 'flex items-center gap-2 cursor-pointer hover:bg-[#4e22a0] rounded-md p-2'}>
                            <img src={Beneficiary} alt="" />
                            <p>Beneficiaries</p>
                        </div>
                    </a>
                    <a href='/invoices' onClick={isMdScreen ? handleSideBar : undefined}>
                        <div className={location.pathname === '/invoices' ? 'bg-[#4e22a0] flex items-center gap-3 cursor-pointer rounded-md p-2' : 'flex items-center gap-3 cursor-pointer hover:bg-[#4e22a0] rounded-md p-2'}>
                            <img src={Invoice} alt="" />
                            <p>Invoices</p>
                        </div>
                    </a>
                    <a href='/transactions' onClick={isMdScreen ? handleSideBar : undefined}>
                        <div className={location.pathname === '/transactions' ? 'bg-[#4e22a0] flex items-center gap-2 cursor-pointer rounded-md p-2' : 'flex items-center gap-2 cursor-pointer hover:bg-[#4e22a0] rounded-md p-2'}>
                            <img src={Transaction} alt="" />
                            <p>Transactions</p>
                        </div>
                    </a>
                    <a href='/settings' onClick={isMdScreen ? handleSideBar : undefined}>
                        <div className={location.pathname === '/settings' ? 'bg-[#4e22a0] flex items-center gap-3 cursor-pointer rounded-md p-2' : 'flex items-center gap-3 cursor-pointer hover:bg-[#4e22a0] rounded-md p-2'}>
                            <img src={Settings} alt="" />
                            <p>Settings</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <a href='/settings' onClick={() => setTransactionType('account')}>
                    <div onClick={isMdScreen ? handleSideBar : undefined} className='flex items-center cursor-pointer gap-2'>
                        <img src={Avatar} alt='' />
                        <p>Cooper Bator</p>
                    </div>
                </a>
                <a href='/settings' onClick={() => setTransactionType('account')}>
                    <BsThreeDots onClick={isMdScreen ? handleSideBar : undefined} className='text-[20px] cursor-pointer' />
                </a>
            </div>
        </div>
    )
}

export default Sidebar