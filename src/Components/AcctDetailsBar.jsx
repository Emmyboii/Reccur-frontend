import React, { useContext, useState } from 'react'
import close from '../Components/Images/x-close.png';
import copy from '../Components/Images/copy.png';
import { Context } from '../Context/Context';
import Select from 'react-select';
import { LuArrowLeftRight } from 'react-icons/lu';
import { GoArrowUpRight } from 'react-icons/go';

const AcctDetailsBar = ({ selectedCurrency, balance, handleCurrencyChange, currencyOptions, output, selectedAccount }) => {

    const { acctDetailsBar, handleAcctDetailsBar, handleSendBar } = useContext(Context)

    const [copied, setCopied] = useState(false);
    const textToCopy = `${selectedAccount.account_number ? selectedAccount.account_number : null}`
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



    return (
        <div className={`fixed top-0 h-screen bg-white lg:p-10 py-8 px-4 duration-700 z-50 text-[#1D1C1F] ${acctDetailsBar ? 'sm:w-[50%] lg:w-[40%] w-full right-0' : 'right-[-100%] w-[40%]'}`}>
            <div className='flex justify-between'>
                <div>
                    <div className='mt-1 flex items-center gap-2'>
                        <Select
                            styles={customStyles}
                            options={currencyOptions}
                            onChange={handleCurrencyChange}
                            value={selectedCurrency}
                            isSearchable={false}
                            className='rounded-m outline-none'
                        />
                        {output && <p className="mt-1 text-[14px]">{output} Balance</p>}
                    </div>
                    <div className='mt-[13px]'>
                        <p className="text-[36px] font-semibold">
                            {selectedCurrency && selectedAccount && (
                                <>
                                    {selectedCurrency.value === 'USD' && '$'}
                                    {selectedCurrency.value === 'EUR' && '€'}
                                    {balance.balance}
                                </>
                            )}
                        </p>
                        <div className='flex gap-4 text-white mt-[12px]'>
                            <button
                                onClick={() => {
                                    handleSendBar()
                                    handleAcctDetailsBar()
                                }}
                                className={`flex items-center w-full gap-2 p-2 rounded-lg ${balance.balance > 0.00 ? 'bg-[#531CB3]' : 'bg-[#E8E1F5] cursor-not-allowed'}`}>
                                <GoArrowUpRight className='mt-1' />
                                Send
                            </button>
                            <button className={`flex items-center w-full gap-2 p-2 rounded-lg ${balance.balance > 0.00 ? 'bg-[#531CB3]' : 'bg-[#E8E1F5] cursor-not-allowed'}`}>
                                <LuArrowLeftRight className='mt-1' />
                                Recieve
                            </button>
                        </div>
                    </div>
                </div>
                <img
                    className='size-5 mt-1 cursor-pointer' src={close} alt=""
                    onClick={handleAcctDetailsBar}
                />
            </div>
            <div className='mt-[25px]'>
                <div className='flex justify-between items-center'>
                    <p className='text-[18px] font-medium'>Bank Account Details</p>
                    <p
                        onClick={handleCopy}
                        className='flex items-center gap-2 text-[#542d9d] text-[14px] font-semibold cursor-pointer'
                    >
                        {copied ? 'Copied!' : 'Copy details'}
                        <img className='size-4' src={copy} alt="" />
                    </p>
                </div>
                <div>
                    <p className='pr-[120px] text-[#525154] text-[14px]'>
                        Use this account to receive payments from your clients or friends in the US.
                    </p>
                </div>
            </div>
            <div className='mt-[20px]'>
                <p className='text-[#B5B3BA]'>Bank Information</p>
                <p className='text-[16px] font-medium'>
                    {selectedAccount.bank_name ? selectedAccount.bank_name : 'N/A'}
                </p>
                <p className="text-[14px] text-[#525154]">
                    {selectedAccount?.address &&
                        (selectedAccount.address.streetLine1 ||
                            selectedAccount.address.city ||
                            selectedAccount.address.stateOrProvince ||
                            selectedAccount.address.postalCode ||
                            selectedAccount.address.countryCode) ? (
                        [
                            selectedAccount.address.streetLine1,
                            selectedAccount.address.streetLine2,
                            selectedAccount.address.city,
                            selectedAccount.address.stateOrProvince,
                            selectedAccount.address.postalCode,
                            selectedAccount.address.countryCode
                        ].filter(Boolean).join(', ')
                    ) : 'N/A'}
                </p>

            </div>
            <div className='mt-[10px]'>
                <p className='text-[#B5B3BA]'>Beneficiary Name</p>
                <p className='text-[16px] font-medium'>
                    {selectedAccount.first_name ? selectedAccount.first_name : 'N/A'} {selectedAccount.last_name ? selectedAccount.last_name : 'N/A'}
                </p>
            </div>
            <div className='mt-[10px]'>
                <p className='text-[#B5B3BA]'>Account Number</p>
                <p className='text-[16px] font-medium'>{selectedAccount.account_number ? selectedAccount.account_number : 'N/A'}</p>
            </div>
        </div>
    )
}

export default AcctDetailsBar