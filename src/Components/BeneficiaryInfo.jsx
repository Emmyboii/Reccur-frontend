import React, { useContext, useState } from 'react'
import Search from '../Components/Images/search.png'
import { IoArrowDownSharp } from 'react-icons/io5'
import menus from '../Components/Images/menu.png';
import { Context } from '../Context/Context';

const BeneficiaryInfo = () => {

    const [beneficiaryType, setBeneficiaryType] = useState('all')
    const [menu, setMenu] = useState(null)

    const { handleViewDetails, handleProfileEdit, handleDeleteProfile } = useContext(Context)

    const Beneficiary = [
        {
            BeneficiaryName: 'Samantha Tino',
            AccountType: 'Bank Transfer',
            Country: (
                <div className='flex gap-[5px]'>
                    <img className='w-[15px] h-[12px] rounded-[2px] mt-[6px] ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                    <p>USA</p>
                </div>
            ),
            Address: '',
            AccountNumber: '0839409083',
        },
        {
            BeneficiaryName: 'Samantha Tino',
            AccountType: 'Bank Transfer',
            Country: (
                <div className='flex gap-[5px]'>
                    <img className='w-[15px] h-[12px] rounded-[2px] mt-[6px] ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                    <p>USA</p>
                </div>
            ),
            Address: '',
            AccountNumber: '0839409083',
        },
        {
            BeneficiaryName: 'Samantha Tino',
            AccountType: 'Bank Transfer',
            Country: (
                <div className='flex gap-[5px]'>
                    <img className='w-[15px] h-[12px] rounded-[2px] mt-[6px] ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                    <p>USA</p>
                </div>
            ),
            Address: '',
            AccountNumber: '0839409083',
        },
        {
            BeneficiaryName: 'Samantha Tino',
            AccountType: 'Bank Transfer',
            Country: (
                <div className='flex gap-[5px]'>
                    <img className='w-[15px] h-[12px] rounded-[2px] mt-[6px] ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                    <p>USA</p>
                </div>
            ),
            Address: '',
            AccountNumber: '0839409083',
        },
        {
            BeneficiaryName: 'Samantha Tino',
            AccountType: 'USDT',
            Country: '',
            Address: 'T9yv72q1J6xYtX9GJ2FWUQa3tV3pK5XG7',
            AccountNumber: '',
        },
        {
            BeneficiaryName: 'Samantha Tino',
            AccountType: 'Bank Transfer',
            Country: (
                <div className='flex gap-[5px]'>
                    <img className='w-[15px] h-[12px] rounded-[2px] mt-[6px] ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                    <p>USA</p>
                </div>
            ),
            Address: '',
            AccountNumber: '0839409083',
        },
        {
            BeneficiaryName: 'Samantha Tino',
            AccountType: 'USDT',
            Country: '',
            Address: 'T9yv72q1J6xYtX9GJ2FWUQa3tV3pK5XG7',
            AccountNumber: '',
        },
        {
            BeneficiaryName: 'Samantha Tino',
            AccountType: 'USDT',
            Country: '',
            Address: 'T9yv72q1J6xYtX9GJ2FWUQa3tV3pK5XG7',
            AccountNumber: '',
        },
        {
            BeneficiaryName: 'Samantha Tino',
            AccountType: 'USDT',
            Country: '',
            Address: 'T9yv72q1J6xYtX9GJ2FWUQa3tV3pK5XG7',
            AccountNumber: '',
        },
        {
            BeneficiaryName: 'Samantha Tino',
            AccountType: 'USDT',
            Country: '',
            Address: 'T9yv72q1J6xYtX9GJ2FWUQa3tV3pK5XG7',
            AccountNumber: '',
        },
    ]

    return (
        <div className='px-8 text-black/60'>
            <div className='flex gap-5 border-b-[1.5px]'>
                <p
                    onClick={() => setBeneficiaryType('all')}
                    className={beneficiaryType === 'all' ? 'text-[#491f97] border-b-[#491f97] border-b-2 cursor-pointer py-3 transition-colors duration-700 font-medium' : 'font-medium cursor-pointer py-3'}
                >
                    All
                </p>
                <p
                    onClick={() => setBeneficiaryType('BT')}
                    className={beneficiaryType === 'BT' ? 'text-[#491f97] border-b-[#491f97] border-b-2 cursor-pointer py-3 transition-colors duration-700 font-medium' : 'font-medium cursor-pointer py-3'}
                >
                    Bank Transfer
                </p>
                <p
                    onClick={() => setBeneficiaryType('cry')}
                    className={beneficiaryType === 'cry' ? 'text-[#491f97] border-b-[#491f97] border-b-2 cursor-pointer py-3 transition-colors duration-700 font-medium' : 'font-medium cursor-pointer py-3'}
                >
                    Cryptocurrency
                </p>
            </div>
            <div className='py-10'>
                <p className='flex items-center gap-4'><img src={Search} alt="" />Search for beneficiary, by name, email or business</p>
                <div className='grid grid-cols-5 gap-5 border-t-[1.5px] border-b-[1.5px] px-2 text-black/50 border-black/10 mt-3 py-4 text-[14px] font-medium text-left'>
                    <div className='flex gap-5 items-center min-w-0'>
                        <input className='mt-1 size-4' type="checkbox" />
                        <div className='flex items-center gap-1'>
                            <p>Beneficiary name</p>
                            <IoArrowDownSharp className='mt-1 text-[16px]' />
                        </div>
                    </div>
                    <div className='flex gap-2 items-center justify- min-w-0'>
                        <p className='truncate'>Account type</p>
                        <IoArrowDownSharp className='mt-1 text-[16px]' />
                    </div>
                    <div className='flex gap-2 items-center justify- min-w-0'>
                        <p className='truncate'>Country</p>
                        <IoArrowDownSharp className='mt-1 text-[16px]' />
                    </div>
                    <div className='flex items-center justify- min-w-0'>
                        <p className='truncate'>Address</p>
                    </div>
                    <div className='min-w-0 flex items-center justify-end gap-5'>
                        <p className='truncate'>Account number</p>
                        <div className='cursor-pointer mt-[-10px] invisible'>
                            <p className='font-semibold text-[18px] text-black/60'>...</p>
                        </div>
                    </div>
                </div>
                {Beneficiary.map((Ben, i) => {
                    return <div
                        key={i}
                        className='grid grid-cols-5 gap-5 hover:bg-[#F3F0F7] cursor-pointer border-b-[1.5px] text-black/50 border-black/10 py-4 px-2 text-[14px] font-medium text-left'
                    >
                        <div className='flex gap-5 items-center min-w-0'>
                            <input className='mt-1 size-4 cursor-pointer' type="checkbox" />
                            <p className='truncate'>{Ben.BeneficiaryName}</p>
                        </div>

                        <div className='min-w-0'>
                            <p className='truncate'>{Ben.AccountType}</p>
                        </div>
                        <div className='min-w-0'>
                            {Ben.Country !== '' ? (
                                <p className='truncate'>{Ben.Country}</p>
                            ) : (
                                <p>—</p>
                            )}
                        </div>
                        <div className='min-w-0'>
                            {Ben.Address !== '' ? (
                                <p className='truncate'>{Ben.Address}</p>
                            ) : (
                                <p>—</p>
                            )}
                        </div>
                        <div className='min-w-0 flex justify-end items-center gap-5 relative'>
                            {Ben.AccountNumber !== '' ? (
                                <p className='truncate'>{Ben.AccountNumber}</p>
                            ) : (
                                <p>—</p>
                            )}
                            <div
                                onClick={() => setMenu(menu === i ? null : i)}
                                className={`font-semibold text-[18px] text-black/60 ${menu === i ? 'bg-[#E6E4EB] rounded-md p-2 py-3' : 'py-2'}`}
                            >
                                <img src={menus} alt="" />
                            </div>
                            {menu === i && (
                                <div className='bg-white z-10 flex flex-col py-2 px- right-[-2px] absolute top-[37px] shadow-md rounded-md'>
                                    <p
                                        onClick={() => {
                                            handleViewDetails()
                                            setMenu(menu === i ? null : i)
                                        }}
                                        className='cursor-pointer hover:bg-[#F9F7FC] px-4 py-1'
                                    >
                                        View profile
                                    </p>
                                    <p
                                        onClick={() => {
                                            handleProfileEdit()
                                            setMenu(menu === i ? null : i)
                                        }}
                                        className='cursor-pointer hover:bg-[#F9F7FC] px-4 py-1'
                                    >
                                        Edit profile
                                    </p>
                                    <p
                                        onClick={() => {
                                            handleDeleteProfile()
                                            setMenu(menu === i ? null : i)
                                        }}
                                        className='cursor-pointer hover:bg-[#F9F7FC] px-4 py-1'
                                    >
                                        Delete profile
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default BeneficiaryInfo