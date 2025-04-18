import React, { useContext, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Context } from '../Context/Context';
import Select from 'react-select';
import { LuArrowLeftRight } from 'react-icons/lu';
import { GoArrowUpRight } from 'react-icons/go';
import { IoCopy } from 'react-icons/io5';

const AcctDetailsBar = () => {

    const { acctDetailsBar, handleAcctDetailsBar } = useContext(Context)

    const [balance, setBalance] = useState(0);

    const [copied, setCopied] = useState(false);
    const textToCopy = "Use this account to receive payments from your clients or friends in the US.";

    const handleCopy = async () => {
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);

    };

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

    const options = [
        {
            value: 'ngn',
            label: (
                <div className="flex items-center gap-2">
                    <img className='w-5' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
                    NGN
                </div>
            )
        },
        {
            value: 'usd',
            label: (
                <div className="flex items-center gap-2">
                    <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                    USD
                </div>
            ),
        },
    ]

    const [selectedCurrency, setSelectedCurrency] = useState(options[0]);
    const [output, setOutput] = useState("");

    const handleChange = (selectedOption) => {
        setSelectedCurrency(selectedOption);
        if (selectedOption.value === 'usd') {
            setOutput("USD");
        } else if (selectedOption.value === 'ngn') {
            setOutput("NGN");
        } else {
            setOutput("");
        }
    };

    return (
        <div className={`fixed top-0 h-screen bg-white py-8 px-5 duration-700 z-50 text-black ${acctDetailsBar ? 'w-[40%] right-0' : 'right-[-100%] w-[40%]'}`}>
            <div className='flex justify-between'>
                <div>
                    <div className='mt-1 flex items-center gap-2'>
                        <Select
                            styles={customStyles}
                            options={options}
                            onChange={handleChange}
                            value={selectedCurrency}
                            isSearchable={false}
                            className='rounded-m outline-none'
                        />
                        {output && <p className="mt-1 text-black/70">{output} Balance</p>}
                    </div>
                    <div className='mt-[13px]'>
                        <p className='text-[46px] font-semibold'>#{balance}</p>
                        <div className='flex gap-4 text-white mt-[12px]'>
                            <button className={`flex items-center w-full gap-2 p-2 rounded-lg ${balance > 0 ? 'bg-[#542d9d]' : 'bg-[#bea3ee] cursor-not-allowed'}`}>
                                <GoArrowUpRight className='mt-1' />
                                Send
                            </button>
                            <button className={`flex items-center w-full gap-2 p-2 rounded-lg ${balance > 0 ? 'bg-[#542d9d]' : 'bg-[#bea3ee] cursor-not-allowed'}`}>
                                <LuArrowLeftRight className='mt-1' />
                                Recieve
                            </button>
                        </div>
                    </div>
                </div>

                <FaTimes
                    className='cursor-pointer mt-6 text-[20px]'
                    onClick={handleAcctDetailsBar}
                />
            </div>
            <div className='mt-[25px]'>
                <div className='flex justify-between items-center'>
                    <p className='text-[21px] font-semibold'>Bank Account Details</p>
                    <p
                        onClick={handleCopy}
                        className='flex items-center gap-2 text-[#542d9d] font-semibold cursor-pointer'
                    >
                        {copied ? 'Copied!' : 'Copy details'}
                        <IoCopy className='mt-1' />
                    </p>
                </div>
                <div>
                    <p className='pr-[120px]'>
                        {textToCopy}
                    </p>
                </div>
            </div>
            <div className='mt-[20px]'>
                <p className='text-black/30'>Bank Information</p>
                <p className='text-[18px] font-semibold'>Union Bank</p>
                <p>1801 Main St., Ikeja City, MO 64108</p>
            </div>
            <div className='mt-[10px]'>
                <p className='text-black/30'>Beneficiary Name</p>
                <p className='text-[18px] font-semibold'>Cooper Bator</p>
            </div>
            <div className='mt-[10px]'>
                <p className='text-black/30'>Account Number</p>
                <p className='text-[18px] font-semibold'>4324456678</p>
            </div>
        </div>
    )
}

export default AcctDetailsBar