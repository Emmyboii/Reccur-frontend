import React, { useContext, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Context } from '../Context/Context'
import Select from 'react-select';
import { LuArrowLeftRight } from 'react-icons/lu';
import { IoIosArrowDown } from 'react-icons/io';

const LiveRates = () => {

    const { handleLiveRates, liveRatesBar } = useContext(Context)
    const [toggle, setToggle] = useState(false)
    const [toggle2, setToggle2] = useState(false)

    const options = [
        {
            value: 'usa',
            label: (
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <img className='w-7' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                        <p>USD</p>
                    </div>
                </div>
            ),
        },
        {
            value: 'ngn',
            label: (
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <img className='w-7' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
                        <p>NGN</p>
                    </div>
                </div>
            ),
        },
    ]

    const customStyles = {
        indicatorSeparator: () => ({
            display: 'none',
        }),
        control: (base) => ({
            ...base,
            backgroundColor: '#f9f9f9',
            borderColor: '#4e22a0',
            padding: '1px',
            boxShadow: 'none',
            '&:hover': {
                borderColor: '#4e22a0',
            },
            borderRadius: '10px'
        }),
        menu: (base) => ({
            ...base,
            zIndex: 999,
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? '#4e22a0' : 'white',
            color: state.isFocused ? 'white' : 'black',
            padding: 10,
            cursor: 'pointer',
        }),
    };
    const [convert, setConvert] = useState(options[0])

    const handleConvert = (option) => {
        setConvert(option)
    }

    return (
        <div className={`fixed top-0 h-screen bg-white py-8 px-6 duration-700 text-black z-50 overflow-auto ${liveRatesBar ? 'w-[40%] right-0' : 'right-[-100%] w-[40%]'}`}>
            <div className='flex gap-2'>
                <div>
                    <h1 className='text-[19px] font-medium'>Live Market Rates</h1>
                    <p>Check real-time exchange rates before converting your funds.</p>
                </div>
                <FaTimes
                    className='cursor-pointer mt-1'
                    onClick={handleLiveRates}
                />
            </div>
            <div className='flex justify-between items-center mt-7'>
                <p className='text-[20px]'>Converting to</p>
                <div className='mt-1'>
                    <Select
                        styles={customStyles}
                        options={options}
                        value={convert}
                        onChange={handleConvert}
                        isSearchable={false}
                        className='rounded-m w-full outline-none'
                    />
                </div>
            </div>
            <div className='mt-7'>
                <div>
                    <div className='flex gap-3'>
                        <div className='flex items-center gap-2'>
                            <img className='w-7' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                            <p>1 USD</p>
                        </div>
                        ➔
                        <div className='flex items-center gap-2'>
                            <img className='w-7' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
                            <p>1600 NGN</p>
                        </div>
                    </div>
                    <p className='text-black/70 mt-2'>Updated 5min ago</p>
                </div>
                <div className='mt-7'>
                    <div className='flex gap-3'>
                        <div className='flex items-center gap-2'>
                            <img className='w-7' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                            <p>1 INR</p>
                        </div>
                        ➔
                        <div className='flex items-center gap-2'>
                            <img className='w-7' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
                            <p>300 NGN</p>
                        </div>
                    </div>
                    <p className='text-black/70 mt-2'>Updated 5min ago</p>
                </div>
                <div className='mt-7'>
                    <div className='flex gap-3'>
                        <div className='flex items-center gap-2'>
                            <img className='w-7' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                            <p>1 USD</p>
                        </div>
                        ➔
                        <div className='flex items-center gap-2'>
                            <img className='w-7' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
                            <p>1600 NGN</p>
                        </div>
                    </div>
                    <p className='text-black/70 mt-2'>Updated 5min ago</p>
                </div>
                <div className='mt-7'>
                    <div className='flex gap-3'>
                        <div className='flex items-center gap-2'>
                            <img className='w-7' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                            <p>1 INR</p>
                        </div>
                        ➔
                        <div className='flex items-center gap-2'>
                            <img className='w-7' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
                            <p>300 NGN</p>
                        </div>
                    </div>
                    <p className='text-black/70 mt-2'>Updated 5min ago</p>
                </div>
                <button
                    className='border border-black/40 p-2 rounded-md w-full flex items-center justify-center gap-2 mt-7 text-black/70 font-medium hover:bg-black/10 active:scale-95 duration-500 transition-all'
                >
                    <LuArrowLeftRight className='mt-1' /><span>Convert</span>
                </button>
            </div>
            <div className='border border-black/50 mt-7 rounded-md p-5'>
                <p>Calculator</p>
                <div className='mt-7'>
                    <label htmlFor="code">Base Currency</label>
                    <div className='mt-1 flex items-center'>
                        <input
                            type="number"
                            name=""
                            id=""
                            className='border-[1.5px] border-black/20 outline-none py-2 w-full pl-[80px] rounded-md'
                            placeholder='Amount'
                        />
                        <div
                            onClick={() => setToggle(!toggle)}
                            className="flex items-center gap-2 ml-[-400px] cursor-pointer"
                        >
                            NGN <IoIosArrowDown className={toggle ? 'rotate-180' : 'rotate-0'} />
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <label htmlFor="code">Target Currency</label>
                    <div className='mt-1 flex items-center'>
                        <input
                            type="number"
                            name=""
                            id=""
                            className='border-[1.5px] border-black/20 outline-none py-2 w-full pl-[80px] rounded-md'
                            placeholder='--'
                            disabled
                        />
                        <div
                            onClick={() => setToggle2(!toggle2)}
                            className="flex items-center gap-2 ml-[-400px] cursor-pointer"
                        >
                            USA <IoIosArrowDown className={toggle2 ? 'rotate-180' : 'rotate-0'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveRates