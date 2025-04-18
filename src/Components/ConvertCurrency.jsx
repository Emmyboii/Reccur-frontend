import React, { useContext, useState } from 'react'
import { Context } from '../Context/Context'
import { FaTimes } from 'react-icons/fa'
import Select from 'react-select';
import { FaBuildingColumns } from 'react-icons/fa6';

const ConvertCurrency = () => {

    const { convertBar, handleConvertBar, handleConversion } = useContext(Context)
    const options = [
        {
            value: 'placeholder',
            label: (
                <div className="flex items-center gap-2">
                    <FaBuildingColumns /> Select the account to be debited
                </div>
            ),
            isDisabled: true
        },
    ]
    const option2 = [
        {
            value: 'placeholder',
            label: (
                <div className="flex items-center gap-2">
                    <FaBuildingColumns /> Select the account to be credited
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

    const [sourceAcct, setSourceAcct] = useState(options[0])
    const [targetAcct, setTargetAcct] = useState(option2[0])

    const handleSourceAcctChange = () => {
        setSourceAcct(sourceAcct)
    }
    const handleTargetAcctChange = () => {
        setTargetAcct(targetAcct)
    }

    return (
        <div className={`fixed top-0 h-screen bg-white py-8 px-5 duration-700 text-black z-50 ${convertBar ? 'w-[40%] right-0' : 'right-[-100%] w-[40%]'}`}>
            <div className='flex gap-2'>
                <div>
                    <h1 className='text-[19px] font-medium'>Convert currency</h1>
                    <p>Easily exchange funds between your accounts in different currencies.</p>
                </div>
                <FaTimes
                    className='cursor-pointer mt-1'
                    onClick={handleConvertBar}
                />
            </div>
            <div className='mt-7'>
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
                        <div className='flex items-center w-full'>
                            <input className='border-2 border-black/30 outline-none p-2 pl-8 w-full rounded-md' type="number" name="" id="" />
                            <p className='ml-[-380px]'>$</p>
                        </div>
                        <button className='p-2 px-3 bg-[#a582e6] text-white rounded-md'>Max</button>
                    </div>

                </div>
                <div className='flex gap-2 mt-12'>
                    <button
                        className='p-3 rounded-lg w-[30%] border-[1.5px] border-black/10'
                        onClick={handleConvertBar}
                    >
                        Cancel
                    </button>
                    <button
                        className='p-3 rounded-lg bg-[#491f97] text-white w-[70%]'
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