import React, { useContext, useState } from 'react'
import OffToggle from '../Components/Images/OffToggle.png';
import OnToggle from '../Components/Images/OnToggle.png';
import { Context } from '../Context/Context'
import Select from 'react-select';
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import Bank from '../Components/Images/bank.png';
import close from '../Components/Images/x-close.png';
import user from '../Components/Images/user.png';

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
            value: 'select',
            label: (
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <p>Select Country</p>
                    </div>
                </div>
            ),
            isDisabled: true
        },
        {
            value: 'usa',
            label: (
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <img className='w-[20px] h-4 rounded-sm' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
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
                        <img className='w-[20px] h-4 rounded-sm' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
                        <p>NGN</p>
                    </div>
                </div>
            ),
        },
    ]
    const CryptocurrencyType = [
        {
            value: 'usdt',
            label: (
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <p>USDT</p>
                    </div>
                </div>
            ),
        },
        {
            value: 'usdc',
            label: (
                <div className="flex items-center gap-2 text-black/60">
                    <p>USDC</p>
                </div>
            ),
        },
        {
            value: 'BTC',
            label: (
                <div className="flex items-center gap-2 text-black/60">
                    <p>BTC</p>
                </div>
            ),
        },
        {
            value: 'SOL',
            label: (
                <div className="flex items-center gap-2 text-black/60">
                    <p>SOL</p>
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
            padding: '4px',
            borderRadius: '8px',
            boxShadow: 'none',
            borderWidth: '1.5px'
        }),
        singleValue: (base) => ({
            ...base,
            color: '#78757A',
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
        <div className={`fixed top-0 h-screen bg-white lg:p-10 py-8 px-4 duration-700 text-black z-50 overflow-auto ${sendBar ? 'sm:w-[40%] w-full right-0' : 'right-[-100%] w-[40%]'}`}>
            <div className='flex justify-between gap-5'>
                <div>
                    <h1 className='text-[20px] font-medium'>Send Money</h1>
                    <p className='text-[14px] font-normal text-[#525154]'>Easily send funds to anyone, anywhere, in just a few steps.</p>
                </div>
                <img
                    className='size-5 mt-1 cursor-pointer' src={close} alt=""
                    onClick={handleSendBar}
                />
            </div>
            <div className='mt-7 flex gap-4 border-b-black/30 border-b'>
                <p
                    onClick={() => setMethod('bank')}
                    className={method === 'bank' ? 'cursor-pointer text-[#491597] border-b-[#491597] border-b-2 pb-2 duration-700 transition-all' : 'cursor-pointer pb-2 duration-700 transition-all'}>Bank transfer</p>
                <p
                    onClick={() => setMethod('crypto')}
                    className={method === 'crypto' ? 'cursor-pointer text-[#491597] border-b-[#491597] border-b-2 pb-2 duration-700 transition-all' : 'cursor-pointer pb-2 duration-700 transition-all'}>Cryptocurrency</p>
            </div>
            {method === 'bank' ?
                (
                    <div className='mt-7 text-[14px] font-normal text-[#525154]'>
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
                            <div className='flex items-center mt-2 relative'>
                                <input
                                    className='border-[1.5px] border-black/20 outline-none py-[10px] w-full pl-[40px] rounded-md'
                                    type="text"
                                    name=""
                                    // value={'Samantha Tino'}
                                    id=""
                                    required
                                />
                                <img className='absolute ml-3' src={user} alt="" />
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
                                    className='border-[1.5px] border-black/20 outline-none py-[10px] w-full pl-[14px] rounded-md'
                                    type="number"
                                    name=""
                                    id=""
                                    required
                                    placeholder='Enter account number'
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className='text-black/50' htmlFor="fullName">Bank name</label>
                            <div className='flex items-center mt-2 relative'>
                                <input
                                    className='border-[1.5px] border-black/20 outline-none py-2 w-full pl-[47px] rounded-md'
                                    type="text"
                                    name=""
                                    id=""
                                    required
                                    placeholder='Enter bank name'
                                />
                                <img className='absolute ml-3' src={Bank} alt="" />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className='text-black/50' htmlFor="fullName">Routing number</label>
                            <div className='flex items-center mt-2'>
                                <input
                                    className='border-[1.5px] border-black/20 outline-none py-[10px] w-full pl-[14px] rounded-md'
                                    type="number"
                                    name=""
                                    id=""
                                    required
                                    placeholder='Enter routing number'
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className='text-black/50' htmlFor="fullName">Swift code</label>
                            <div className='flex items-center mt-2'>
                                <input
                                    className='border-[1.5px] border-black/20 outline-none py-[10px] w-full pl-[14px] rounded-md'
                                    type="number"
                                    name=""
                                    id=""
                                    required
                                    placeholder='Enter swift code'
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="amount">Amount</label>
                            <div className='flex items-center gap-2'>
                                <div className='flex items-center w-full relative'>
                                    <input className='border-[1.5px] border-black/20 outline-none p-2 pl-8 w-full rounded-md' type="number" name="" id=""
                                        required />
                                    <p className='absolute ml-3 text-[20px] text-[#525154]'>$</p>
                                </div>
                                <button className='py-[10px] px-4 bg-[#F9F7FC] text-[#E8E1F5] rounded-md'>Max</button>
                            </div>
                        </div>
                        <div className='mt-7'>
                            <div className='flex gap-3 items-center text-black/70'>
                                {toggle ? (
                                    <img
                                        className='cursor-pointer'
                                        src={OnToggle}
                                        alt=""
                                        onClick={() => setToggle(false)}
                                    />

                                ) : (
                                    <img
                                        className='cursor-pointer'
                                        src={OffToggle}
                                        alt=""
                                        onClick={() => setToggle(true)}
                                    />
                                )}
                                <p className='text-[16px] font-medium text-[#525154]'>Convert to client's currency</p>
                            </div>
                        </div>
                        <div className='flex gap-2 mt-12'>
                            <button
                                className='p-3 rounded-lg w-[25%] border-[1.5px] border-black/10'
                                onClick={handleSendBar}
                            >
                                Cancel
                            </button>
                            <button
                                className='p-3 rounded-lg bg-[#531CB3] text-white w-[80%]'
                                onClick={() => {
                                    window.scrollTo(0, 0)
                                    // handleConversion()
                                }}
                            >
                                Send money
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='mt-7 text-[14px] font-normal text-[#525154]'>
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
                            <div className='flex items-center mt-2 relative'>
                                <input
                                    className='border-[1.5px] border-black/20 outline-none py-[10px] w-full pl-[40px] rounded-md'
                                    type="text"
                                    name=""
                                    value={'Samantha Tino'}
                                    id=""
                                    required
                                />
                                <img className='absolute ml-3' src={user} alt="" />
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
                                    className='border-[1.5px] border-black/20 outline-none py-[10px] px-[14px] w-full  rounded-md'
                                    type="text"
                                    name=""
                                    id=""
                                    required
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
                            <div className='flex items-center w-full relative'>
                                <input className='border-[1.5px] border-black/20 py-[10px] pl-8 w-full outline-none rounded-md' placeholder='0' type="number" name="" id=""
                                    required />
                                <AiTwotoneQuestionCircle className='ml-[-30px]' />
                                <p className='absolute ml-3 text-[20px] text-[#525154]'>$</p>
                            </div>
                        </div>
                        <div className='flex gap-2 mt-12'>
                            <button
                                className='p-3 rounded-lg w-[25%] border-[1.5px] border-black/10'
                                onClick={handleSendBar}
                            >
                                Cancel
                            </button>
                            <button
                                className='p-3 rounded-lg bg-[#531CB3] text-white w-[80%]'
                                onClick={() => {
                                    window.scrollTo(0, 0)
                                    // handleConversion()
                                }}
                            >
                                Send Money
                            </button>
                        </div>
                    </div>
                )}
        </div>
    )
}
export default SendBar