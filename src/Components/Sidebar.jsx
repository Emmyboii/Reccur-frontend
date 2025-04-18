import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BsThreeDots } from "react-icons/bs";
import { RiHome6Line } from "react-icons/ri";
import Avatar from '../Components/Images/Avatar.png'
import Logo from '../Components/Images/Logomark.png';
import Beneficiary from '../Components/Images/beneficiary.png';
import Transaction from '../Components/Images/transaction.png';
import Invoice from '../Components/Images/Invoice.png';
import Settings from '../Components/Images/Settings.png';

const Sidebar = () => {
    const location = useLocation()

    const verified = JSON.parse(localStorage.getItem('detailsVerified'))

    return (
        <div className='bg-[#411c87] text-white w-[20%] h-screen py-8 px-5 flex flex-col justify-between gap-5'>
            <div>
                {verified ? (
                    <Link to='/home'>
                        <h1 className='flex gap-3 items-center font-semibold ml-2 text-[20px]'>
                            <img src={Logo} alt="" className='mt-2 w-7 h-7' />
                            reccur
                        </h1>
                    </Link>
                ) : (
                    <Link to='/'>
                        <h1 className='flex gap-3 items-center font-semibold ml-2 text-[20px]'>
                            <img src={Logo} alt="" className='mt-2 w-7 h-7' />
                            reccur
                        </h1>
                    </Link>
                )}
                <div className='flex flex-col gap-2 mt-5'>
                    {verified ? (
                        <Link to='/home'>
                            <p className={location.pathname.startsWith('/home') ? 'bg-[#4e22a0] flex items-center gap-2 cursor-pointer rounded-md p-2' : 'flex items-center gap-2 cursor-pointer hover:bg-[#4e22a0] rounded-md p-2'}>
                                <RiHome6Line className='text-[24px]' />
                                Home
                            </p>
                        </Link>
                    ) : (
                        <Link to='/'>
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

                    <Link to='/beneficiaries'>
                        <p className={location.pathname === '/beneficiaries' ? 'bg-[#4e22a0] flex items-center gap-2 cursor-pointer rounded-md p-2' : 'flex items-center gap-2 cursor-pointer hover:bg-[#4e22a0] rounded-md p-2'}>
                            <img src={Beneficiary} alt="" />
                            Beneficiaries
                        </p>
                    </Link>
                    <Link to='/invoices'>
                        <p className={location.pathname === '/invoices' ? 'bg-[#4e22a0] flex items-center gap-2 cursor-pointer rounded-md p-2' : 'flex items-center gap-2 cursor-pointer hover:bg-[#4e22a0] rounded-md p-2'}>
                            <img src={Invoice} alt="" />
                            Invoices
                        </p>
                    </Link>
                    <Link to='/transactions'>
                        <p className={location.pathname === '/transactions' ? 'bg-[#4e22a0] flex items-center gap-2 cursor-pointer rounded-md p-2' : 'flex items-center gap-2 cursor-pointer hover:bg-[#4e22a0] rounded-md p-2'}>
                            <img src={Transaction} alt="" />
                            Transactions
                        </p>
                    </Link>
                    <Link to='settings'>
                        <p className={location.pathname === '/settings' ? 'bg-[#4e22a0] flex items-center gap-2 cursor-pointer rounded-md p-2' : 'flex items-center gap-2 cursor-pointer hover:bg-[#4e22a0] rounded-md p-2'}>
                            <img src={Settings} alt="" />
                            Settings
                        </p>
                    </Link>
                </div>
            </div>
            <div className='flex items-center justify-between cursor-pointer'>
                <div className='flex items-center gap-2'>
                    <img src={Avatar} alt='' />
                    <p>Cooper Bator</p>
                </div>
                <BsThreeDots className='text-[20px]' />
            </div>
        </div>
    )
}

export default Sidebar