import React, { useContext, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Context } from '../Context/Context'
import Select from 'react-select';
import { RiUser6Line } from "react-icons/ri";
import Bank from '../Components/Images/bank.png';
import SouthAfrica from '../Components/Images/SouthAfrica.png';
import UK from '../Components/Images/UK.png';
import Mexico from '../Components/Images/Mexico.png';
import France from '../Components/Images/France.png';
import Philippines from '../Components/Images/Philippines.png';
import India from '../Components/Images/India.png';

const BeneficiaryBar = () => {
    const { handleBeneficiaryBar, beneficiaryBar } = useContext(Context)
    const [method, setMethod] = useState('bank')

    const country = [
        {
            value: 'select',
            label: (
                <div className="flex items-center gap-2 text-black/50">
                    <p>Select Country</p>
                </div>
            ),
            isDisabled: true
        },
        {
            value: 'usa',
            label: (
                <div className="flex items-center gap-2 text-black/50">
                    <img className='w-[20px] h-[15px] rounded-[2px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                    <p>USA</p>
                </div>
            ),
        },
        {
            value: 'sa',
            label: (
                <div className="flex items-center gap-2 text-black/50">
                    <img src={SouthAfrica} alt="" />
                    <p>South Africa</p>
                </div>
            ),
        },
        {
            value: 'ngn',
            label: (
                <div className="flex items-center gap-2 text-black/50">
                    <img className='w-[20px] h-[15px] rounded-[2px]' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
                    <p>NGN</p>
                </div>
            ),
        },
        {
            value: 'UK',
            label: (
                <div className="flex items-center gap- text-black/50">
                    <img src={UK} alt="" />
                    <p>United Kingdom</p>
                </div>
            ),
        },
        {
            value: 'Mexico',
            label: (
                <div className="flex items-center gap-2 text-black/50">
                    <img src={Mexico} alt="" />
                    <p>Mexico</p>
                </div>
            ),
        },
        {
            value: 'France',
            label: (
                <div className="flex items-center gap-2 text-black/50">
                    <img src={France} alt="" />
                    <p>France</p>
                </div>
            ),
        },
        {
            value: 'Philippines',
            label: (
                <div className="flex items-center gap-2 text-black/50">
                    <img src={Philippines} alt="" />
                    <p>Philippines</p>
                </div>
            ),
        },
        {
            value: 'India',
            label: (
                <div className="flex items-center gap-2 text-black/50">
                    <img src={India} alt="" />
                    <p>India</p>
                </div>
            ),
        },
    ]
    const CryptocurrencyType = [
        {
            value: 'type',
            label: (
                <div className="flex items-center gap-2 text-black/60">
                    <p>Cryptocurrency Type</p>
                </div>
            ),
        },
        {
            value: 'usa',
            label: (
                <div className="flex items-center gap-2 text-black/60">
                    <p>USDT</p>
                </div>
            ),
        },
        {
            value: 'ngn',
            label: (
                <div className="flex items-center gap-2 text-black/60">
                    <p>NGN</p>
                </div>
            ),
        },
    ]
    const NetworkType = [
        {
            value: 'type',
            label: <p className='text-black/60'>Network Type</p>
        },
        {
            value: 'trc',
            label: <p className='text-black/60'>TRC 20</p>
        }
    ]
    const customStyles = {
        indicatorSeparator: () => ({
            display: 'none',
        }),
        control: (base) => ({
            ...base,
            padding: '4px',
            borderRadius: '6px',
            boxShadow: 'none',
            borderWidth: '1.5px'
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

    const [countries, setCountries] = useState(country[0])
    const [crypto, setCrypto] = useState(CryptocurrencyType[0])
    const [networkType, setNetworkType] = useState(NetworkType[0])

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
        <div className={`fixed top-0 h-screen bg-white p-10 px- duration-700 text-black z-50 overflow-auto ${beneficiaryBar ? 'w-[40%] right-0' : 'right-[-100%] w-[40%]'}`}>
            <div className='flex gap-2'>
                <div>
                    <h1 className='text-[19px] font-medium'>Add beneficiary</h1>
                    <p>No emails will be sent to your beneficiary when you add them here - that is, unless you tell us to.</p>
                </div>
                <FaTimes
                    className='cursor-pointer mt-1'
                    onClick={handleBeneficiaryBar}
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
                    <div className='mt-7 text-black/60'>
                        <div className='mt-5'>
                            <label className='text-black/60' htmlFor="fullName">Full Name</label>
                            <div className='flex items-center mt-2'>
                                <input
                                    className='border-[1.5px] border-black/20 outline-none py-2 w-full pl-[40px] rounded-md'
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder='Beneficiary’s full name'
                                />
                                <RiUser6Line className='ml-[-404px] text-[20px]' />
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
                                    placeholder='Account number'
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
                                    placeholder='Bank name'
                                />
                                <img className='ml-[-400px]' src={Bank} alt="" />
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
                                    placeholder='Routing number'
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
                        <div className='flex gap-2 mt-10'>
                            <button
                                className='p-3 rounded-lg w-[30%] border-[1.5px] border-black/10'
                                onClick={handleBeneficiaryBar}
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
                                Save Information
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='mt-7'>
                        <div className='mt-5 text-black/60'>
                            <label className='text-black/60' htmlFor="fullName">Full Name</label>
                            <div className='flex items-center mt-2'>
                                <input
                                    className='border-[1.5px] placeholder:text-black/60 border-black/20 outline-none py-2 w-full pl-[40px] rounded-md'
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder='Beneficiary’s full name'
                                />
                                <RiUser6Line className='ml-[-404px] text-[20px]' />
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
                                    className='border-[1.5px] placeholder:text-black/60 border-black/20 outline-none py-2 w-full pl-[8px] rounded-md'
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder='Wallet address'
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
                        <div className='flex gap-2 mt-12'>
                            <button
                                className='p-3 rounded-lg w-[30%] border-[1.5px] border-black/10'
                                onClick={handleBeneficiaryBar}
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
                                Save Information
                            </button>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default BeneficiaryBar