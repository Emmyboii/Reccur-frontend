import React, { useContext } from 'react'
import menu from '../Components/Images/nav_menu.png';
import Logo from '../Components/Images/Logomark.png';
import Search from '../Components/Images/search2.png'
import Bell from '../Components/Images/notification2.png'
import { Link } from 'react-router-dom';
import { Context } from '../Context/Context';

const NavBar = () => {

    const verified = JSON.parse(localStorage.getItem('detailsVerified'))

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
                {verified ? (
                    <Link to='/home'>
                        <img src={Logo} alt="" className='w-7 h-7' />
                    </Link>
                ) : (
                    <Link to='/'>
                        <img src={Logo} alt="" className='w-7 h-7' />
                    </Link>
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