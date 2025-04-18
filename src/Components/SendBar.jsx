import React, { useContext, useState } from 'react'
import { FaTimes, FaToggleOff, FaToggleOn } from 'react-icons/fa'
import { Context } from '../Context/Context'
import Select from 'react-select';
import { RiUser6Line } from "react-icons/ri";
import { FaBuildingColumns } from 'react-icons/fa6';
import { AiTwotoneQuestionCircle } from "react-icons/ai";

const SendBar = () => {

    const { handleSendBar, sendBar } = useContext(Context)
    const [method, setMethod] = useState('bank')
    const [toggle, setToggle] = useState(false)

    const options = [
        {
            value: 'sourceAcct',
            label: (
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                        <p>USD</p>
                        <p>-8938798456</p>
                    </div>
                </div>
            ),
        },
    ]
    const country = [
        {
            value: 'usa',
            label: (
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                        <p>USA</p>
                    </div>
                </div>
            ),
        },
        {
            value: 'ngn',
            label: (
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <img className='w-5' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
                        <p>NGN</p>
                    </div>
                </div>
            ),
        },
    ]
    const CryptocurrencyType = [
        {
            value: 'usa',
            label: (
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <p>USDT</p>
                    </div>
                </div>
            ),
        },
        {
            value: 'usa',
            label: (
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <p>NGN</p>
                    </div>
                </div>
            ),
        },
    ]
    const NetworkType = [
        {
            value: 'trc',
            label: 'TRC 20'
        }
    ]
    const customStyles = {
        indicatorSeparator: () => ({
            display: 'none',
        }),
        control: (base) => ({
            ...base,
            backgroundColor: '#f9f9f9',
            borderColor: '#4e22a0',
            padding: '4px',
            boxShadow: 'none',
            '&:hover': {
                borderColor: '#4e22a0',
            },
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

    const [sourceAcct, setSourceAcct] = useState(options[0])
    const [countries, setCountries] = useState(country[0])
    const [crypto, setCrypto] = useState(CryptocurrencyType[0])
    const [networkType, setNetworkType] = useState(NetworkType[0])

    const handleSourceAcctChange = (Option) => {
        setSourceAcct(Option)
    }
    const handleCountries = (Option) => {
        setCountries(Option)
    }
    const handleCrypto = (Option) => {
        setCrypto(Option)
    }
    const handleNetworkType = (Option) => {
        setNetworkType(Option)
    }

    return (
        <div className={`fixed top-0 h-screen bg-white py-8 px-5 duration-700 text-black z-50 overflow-auto ${sendBar ? 'w-[40%] right-0' : 'right-[-100%] w-[40%]'}`}>
            <div className='flex gap-2'>
                <div>
                    <h1 className='text-[19px] font-medium'>Send Money</h1>
                    <p>Easily send funds to anyone, anywhere, in just a few steps.</p>
                </div>
                <FaTimes
                    className='cursor-pointer mt-1'
                    onClick={handleSendBar}
                />
            </div>
            <div className='mt-7 flex gap-4 border-b-black/30 border-b'>
                <p
                    onClick={() => setMethod('bank')}
                    className={method === 'bank' ? 'cursor-pointer text-[#491597] border-b-[#491597] border-b-2 pb-2 duration-700 transition-all' : 'cursor-pointer pb-2 duration-700 transition-all'}>Bank transfer</p>
                <p
                    onClick={() => setMethod('crypto')}
                    className={method === 'crypto' ? 'cursor-pointer text-[#491597] border-b-[#491597] border-b-2 pb-2 duration-700 transition-all' : 'cursor-pointer pb-2 duration-700 transition-all'}>Crytocurrency</p>
            </div>
            {method === 'bank' ?
                (
                    <div className='mt-7'>
                        <div>
                            <label className='text-black/50' htmlFor="code">Source Account</label>
                            <div className='mt-1'>
                                <Select
                                    styles={customStyles}
                                    options={options}
                                    value={sourceAcct}
                                    onChange={handleSourceAcctChange}
                                    isSearchable={false}
                                    className='rounded-m w-full outline-none'
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className='text-black/50' htmlFor="fullName">Full Name</label>
                            <div className='flex items-center mt-2'>
                                <input
                                    className='border-[1.5px] border-black/20 outline-none py-2 w-full pl-[40px] rounded-md'
                                    type="text"
                                    name=""
                                    value={'Samantha Tino'}
                                    id=""
                                />
                                <RiUser6Line className='ml-[-444px] text-[20px]' />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className='text-black/50' htmlFor="code">Beneficiary's Country</label>
                            <div className='mt-1'>
                                <Select
                                    styles={customStyles}
                                    options={country}
                                    value={countries}
                                    onChange={handleCountries}
                                    isSearchable={false}
                                    className='rounded-m w-full outline-none'
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className='text-black/50' htmlFor="fullName">Beneficiary's account number</label>
                            <div className='flex items-center mt-2'>
                                <input
                                    className='border-[1.5px] border-black/20 outline-none py-2 w-full pl-[8px] rounded-md'
                                    type="number"
                                    name=""
                                    id=""
                                    placeholder='Enter account number'
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className='text-black/50' htmlFor="fullName">Bank name</label>
                            <div className='flex items-center mt-2'>
                                <input
                                    className='border-[1.5px] border-black/20 outline-none py-2 w-full pl-[47px] rounded-md'
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder='Enter bank name'
                                />
                                <FaBuildingColumns className='ml-[-440px] text-[20px]' />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className='text-black/50' htmlFor="fullName">Routing number</label>
                            <div className='flex items-center mt-2'>
                                <input
                                    className='border-[1.5px] border-black/20 outline-none py-2 w-full pl-[8px] rounded-md'
                                    type="number"
                                    name=""
                                    id=""
                                    placeholder='Enter routing number'
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className='text-black/50' htmlFor="fullName">Swift code</label>
                            <div className='flex items-center mt-2'>
                                <input
                                    className='border-[1.5px] border-black/20 outline-none py-2 w-full pl-[8px] rounded-md'
                                    type="number"
                                    name=""
                                    id=""
                                    placeholder='Enter swift code'
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="amount">Amount</label>
                            <div className='flex items-center gap-2'>
                                <div className='flex items-center w-full'>
                                    <input className='border-2 border-black/30 p-2 pl-8 w-full outline-none rounded-md' placeholder='0' type="number" name="" id="" />
                                    <p className='ml-[-380px] text-black/50'>$</p>
                                </div>
                                <button className='p-2 px-3 bg-[#a582e6] text-white rounded-md'>Max</button>
                            </div>
                        </div>
                        <div className='mt-7'>
                            <div className='flex gap-3 items-center text-black/70'>
                                {toggle ? (
                                    <FaToggleOn className='text-[33px] text-[#491f97]' onClick={() => setToggle(false)} />
                                ) : (
                                    <FaToggleOff className='text-[33px] text-[#491f97]' onClick={() => setToggle(true)} />
                                )}
                                <p>Convert to client's currency</p>
                            </div>
                        </div>
                        <div className='flex gap-2 mt-12'>
                            <button
                                className='p-3 rounded-lg w-[30%] border-[1.5px] border-black/10'
                                onClick={handleSendBar}
                            >
                                Cancel
                            </button>
                            <button
                                className='p-3 rounded-lg bg-[#491f97] text-white w-[70%]'
                                onClick={() => {
                                    window.scrollTo(0, 0)
                                    // handleConversion()
                                }}
                            >
                                Convert Currency
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='mt-7'>
                        <div>
                            <label className='text-black/50' htmlFor="code">Source Account</label>
                            <div className='mt-1'>
                                <Select
                                    styles={customStyles}
                                    options={options}
                                    value={sourceAcct}
                                    onChange={handleSourceAcctChange}
                                    isSearchable={false}
                                    className='rounded-m w-full outline-none'
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className='text-black/50' htmlFor="fullName">Full Name</label>
                            <div className='flex items-center mt-2'>
                                <input
                                    className='border-[1.5px] border-black/20 outline-none py-2 w-full pl-[40px] rounded-md'
                                    type="text"
                                    name=""
                                    value={'Samantha Tino'}
                                    id=""
                                />
                                <RiUser6Line className='ml-[-444px] text-[20px]' />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className='text-black/50' htmlFor="code">Cryptocurrency type</label>
                            <div className='mt-1'>
                                <Select
                                    styles={customStyles}
                                    options={CryptocurrencyType}
                                    value={crypto}
                                    onChange={handleCrypto}
                                    isSearchable={false}
                                    className='rounded-m w-full outline-none'
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className='text-black/50' htmlFor="fullName">Wallet address</label>
                            <div className='flex items-center mt-2'>
                                <input
                                    className='border-[1.5px] border-black/20 outline-none py-2 w-full pl-[8px] rounded-md'
                                    type="text"
                                    name=""
                                    id=""
                                    value={'T9yv72q1J6xYtX9GJ2FWUQa3tV3pK5XG7'}
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className='text-black/50' htmlFor="code">Cryptocurrency type</label>
                            <div className='mt-1'>
                                <Select
                                    styles={customStyles}
                                    options={NetworkType}
                                    value={networkType}
                                    onChange={handleNetworkType}
                                    isSearchable={false}
                                    className='rounded-m w-full outline-none'
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className='text-black/50' htmlFor="amount">Amount</label>
                            <div className='flex items-center w-full'>
                                <input className='border-2 border-black/30 p-2 pl-8 w-full outline-none rounded-md' placeholder='0' type="number" name="" id="" />
                                <AiTwotoneQuestionCircle className='ml-[-30px]' />
                                <p className='ml-[-425px] text-black/50'>$</p>
                            </div>
                        </div>
                        <div className='flex gap-2 mt-12'>
                            <button
                                className='p-3 rounded-lg w-[30%] border-[1.5px] border-black/10'
                                onClick={handleSendBar}
                            >
                                Cancel
                            </button>
                            <button
                                className='p-3 rounded-lg bg-[#491f97] text-white w-[70%]'
                                onClick={() => {
                                    window.scrollTo(0, 0)
                                    // handleConversion()
                                }}
                            >
                                Convert Currency
                            </button>
                        </div>
                    </div>
                )}
        </div>
    )
}
export default SendBar