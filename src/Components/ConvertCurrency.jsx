import React, { useContext, useState } from 'react'
import { Context } from '../Context/Context'
import close from '../Components/Images/x-close.png';
import Select from 'react-select';
import Bank from '../Components/Images/bank.png';

const ConvertCurrency = () => {

    const { convertBar, handleConvertBar, handleConversion } = useContext(Context)
    const options = [
        {
            value: 'placeholder',
            label: (
                <div className="flex items-center gap-2 text-[16px]">
                    <img src={Bank} alt="" /> Select the account to be debited
                </div>
            ),
            isDisabled: true
        },
    ]
    const option2 = [
        {
            value: 'placeholder',
            label: (
                <div className="flex items-center gap-2 text-[16px]">
                    <img src={Bank} alt="" /> Select the account to be credited
                </div>
            ),
            isDisabled: true
        },
    ]

    const customStyles = {
        indicatorSeparator: () => ({
            display: 'none',
        }),
        control: (base) => ({
            ...base,
            padding: '4px',
            boxShadow: 'none',
            borderRadius: '6px',
            borderWidth: '1.5px',
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
    const [targetAcct, setTargetAcct] = useState(option2[0])

    const handleSourceAcctChange = () => {
        setSourceAcct(sourceAcct)
    }
    const handleTargetAcctChange = () => {
        setTargetAcct(targetAcct)
    }

    return (
        <div className={`fixed top-0 h-screen bg-white lg:p-10 py-8 px-4 duration-700 text-[#1D1C1F] z-50 ${convertBar ? 'sm:w-[50%] lg:w-[40%] w-full right-0' : 'right-[-100%] w-[40%]'}`}>
            <div className='flex gap-5 justify-between'>
                <div>
                    <h1 className='text-[20px] font-medium'>Convert currency</h1>
                    <p className='text-[14px] font-normal text-[#525154]'>Easily exchange funds between your accounts in different currencies.</p>
                </div>
                <img
                    className='size-5 mt-1 cursor-pointer' src={close} alt=""
                    onClick={handleConvertBar}
                />
            </div>
            <div className='mt-7 text-[#525154]'>
                <div>
                    <label htmlFor="code">Source Account</label>
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
                    <label htmlFor="code">Target Account</label>
                    <div className='mt-1'>
                        <Select
                            styles={customStyles}
                            options={option2}
                            value={targetAcct}
                            onChange={handleTargetAcctChange}
                            isSearchable={false}
                            className='rounded-m w-full outline-none'
                        />
                    </div>
                </div>
                <div className='mt-5'>
                    <label htmlFor="amount">Amount</label>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center w-full relative'>
                            <input className='border-[1.5px] border-black/30 outline-none p-2 pl-8 w-full rounded-md' type="number" name="" id=""
required />
                            <p className='text-[20px] text-[#525154] absolute ml-3'>$</p>
                        </div>
                        <button className='py-[10px] px-4 bg-[#F9F7FC] text-[#E8E1F5] rounded-md'>Max</button>
                    </div>
                </div>
                <div className='flex gap-2 mt-12'>
                    <button
                        className='p-3 rounded-lg w-[25%] border-[1.5px] border-black/10'
                        onClick={handleConvertBar}
                    >
                        Cancel
                    </button>
                    <button
                        className='p-3 rounded-lg bg-[#531CB3] text-white w-[80%]'
                        onClick={() => {
                            window.scrollTo(0, 0)
                            handleConversion()
                        }}
                    >
                        Convert Currency
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConvertCurrency