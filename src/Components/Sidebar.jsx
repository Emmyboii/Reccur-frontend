import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BsThreeDots, BsTransparency } from "react-icons/bs";
import { RiHome6Line } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { TbAlignBoxLeftStretch } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";

const Sidebar = () => {
    const location = useLocation()


    return (
        <div className='bg-[#411c87] text-white w-[20%] h-screen py-8 px-5 flex flex-col gap-5'>
            <h1 className='font-semibold ml-7 text-[20px]'>reccur</h1>
            <div className='flex flex-col gap-2'>
                <Link to='/'>
                    <p className={location.pathname === '/' ? 'bg-[#4e22a0] flex items-center gap-2 cursor-pointer rounded-md p-2' : 'flex items-center gap-2 cursor-pointer hover:bg-[#4e22a0] rounded-md p-2'}>
                        <RiHome6Line className='text-[20px]' />
                        Home
                    </p>
                </Link>
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
            <div className='flex items-center gap-[90px] mt-[115%]'>
                <p>Cooper Bator</p>
                <BsThreeDots className='text-[20px]' />
            </div>
        </div>
    )
}

export default Sidebar