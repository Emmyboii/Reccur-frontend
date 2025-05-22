import React, { useContext } from 'react'
import menu from '../Components/Images/nav_menu.png';
import Logo from '../Components/Images/Logomark2.png';
import Search from '../Components/Images/search2.png'
import Bell from '../Components/Images/notification2.png'
import { Context } from '../Context/Context';

const NavBar = ({verified, kyc}) => {


    const { handleSideBar } = useContext(Context)

    return (
        <div className='bg-[#431594] z-30 sticky top-0 flex lg:hidden justify-between py-3 px-5'>
            <div className='flex items-center gap-4'>
                <img
                onClick={handleSideBar}
                    className='size-9 cursor-pointer'
                    src={menu}
                    alt=""
                />
                {verified === kyc ? (
                    <a href='/home'>
                        <img src={Logo} alt="" className='w-7 h-7' />
                    </a>
                ) : (
                    <a href='/dashboard'>
                        <img src={Logo} alt="" className='w-7 h-7' />
                    </a>
                )}
            </div>
            <div className='flex items-center gap-8'>
                <img className='cursor-pointer' src={Search} alt="" />
                <img className='cursor-pointer' src={Bell} alt="" />
            </div>
        </div>
    )
}

export default NavBar