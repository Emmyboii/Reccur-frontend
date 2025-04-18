import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BsThreeDots, BsTransparency } from "react-icons/bs";
import { RiHome6Line } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { TbAlignBoxLeftStretch } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import { FaRegUserCircle } from 'react-icons/fa';

const Sidebar = () => {
    const location = useLocation()

    const verified = JSON.parse(localStorage.getItem('detailsVerified'))

    return (
        <div className='bg-[#411c87] text-white w-[20%] h-screen py-8 px-5 flex flex-col justify-between gap-5'>
            <div>
                {verified ? (
                    <Link to='/home'>
                        <h1 className='font-semibold ml-7 text-[20px]'>reccur</h1>
                    </Link>
                ) : (
                    <Link to='/'>
                        <h1 className='font-semibold ml-7 text-[20px]'>reccur</h1>
                    </Link>
                )}
                <div className='flex flex-col gap-2 mt-5'>
                    {verified ? (
                        <Link to='/home'>
                            <p className={location.pathname.startsWith('/home') ? 'bg-[#4e22a0] flex items-center gap-2 cursor-pointer rounded-md p-2' : 'flex items-center gap-2 cursor-pointer hover:bg-[#4e22a0] rounded-md p-2'}>
                                <RiHome6Line className='text-[20px]' />
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
                                <RiHome6Line className='text-[20px]' />
                                Home
                            </p>
                        </Link>
                    )}

                    <Link to='/beneficiaries'>
                        <p className={location.pathname === '/beneficiaries' ? 'bg-[#4e22a0] flex items-center gap-2 cursor-pointer rounded-md p-2' : 'flex items-center gap-2 cursor-pointer hover:bg-[#4e22a0] rounded-md p-2'}>
                            <GoPeople className='text-[20px]' />
                            Beneficiaries
                        </p>
                    </Link>
                    <Link to='/invoices'>
                        <p className={location.pathname === '/invoices' ? 'bg-[#4e22a0] flex items-center gap-2 cursor-pointer rounded-md p-2' : 'flex items-center gap-2 cursor-pointer hover:bg-[#4e22a0] rounded-md p-2'}>
                            <TbAlignBoxLeftStretch className='text-[20px]' />
                            Invoices
                        </p>
                    </Link>
                    <Link to='/transactions'>
                        <p className={location.pathname === '/transactions' ? 'bg-[#4e22a0] flex items-center gap-2 cursor-pointer rounded-md p-2' : 'flex items-center gap-2 cursor-pointer hover:bg-[#4e22a0] rounded-md p-2'}>
                            <BsTransparency className='text-[20px]' />
                            Transactions
                        </p>
                    </Link>
                    <Link to='settings'>
                        <p className={location.pathname === '/settings' ? 'bg-[#4e22a0] flex items-center gap-2 cursor-pointer rounded-md p-2' : 'flex items-center gap-2 cursor-pointer hover:bg-[#4e22a0] rounded-md p-2'}>
                            <MdOutlineSettings className='text-[20px]' />
                            Settings
                        </p>
                    </Link>
                </div>
            </div>
            <div className='flex items-center gap-[70px] cursor-pointer'>
                <div className='flex items-center gap-2'>
                    <FaRegUserCircle className='text-[21px]' />
                    <p>Cooper Bator</p>
                </div>
                <BsThreeDots className='text-[20px]' />
            </div>
        </div>
    )
}

export default Sidebar