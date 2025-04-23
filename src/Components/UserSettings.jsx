import React, { useContext } from 'react'
import Search from '../Components/Images/search.png'
import Bell from '../Components/Images/bell.png'
import Add from '../Components/Images/AddBtn.png'
import smiley from '../Components/Images/smileyFace.png'
import sad from '../Components/Images/SadFace.png'
import close from '../Components/Images/close.png'
import AccountSettings from '../Components/AccountSettings'
import PasswordSettings from '../Components/PasswordSettings'
import KYC from '../Components/KYC'
import InvoiceSettings from '../Components/InvoiceSettings'
import NotificationSettings from '../Components/NotificationSettings'
import AdvancedSettings from '../Components/AdvancedSettings'
import { Context } from '../Context/Context'

const UserSettings = () => {

    const { noDelete, TransactionType, setTransactionType, handleNoDelete, handleDeleted, deleted } = useContext(Context)

    return (

        <div>
            <div className='md:p-10 py-8 px-6 relative'>
                <div className='flex justify-between pb-5'>
                    <div>
                        <p className='text-[28px] font-semibold'>Settings</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img src={Search} alt="" />
                        <img src={Bell} alt="" />
                        <img className='w-8' src={Add} alt="" />
                    </div>
                </div>
                <div className='flex gap-7 border-b-[1.5px] overflow-x-auto scrollbar-hide scroll-smooth snap-x'>
                    <p
                        onClick={() => setTransactionType('account')}
                        className={`snap-start py-3 cursor-pointer font-medium ${TransactionType === 'account'
                            ? 'text-[#491f97] border-b-[#491f97] border-b-2 transition-colors duration-700'
                            : ''
                            }`}
                    >
                        Account
                    </p>
                    <p
                        onClick={() => setTransactionType('password')}
                        className={`snap-start py-3 cursor-pointer font-medium ${TransactionType === 'password'
                            ? 'text-[#491f97] border-b-[#491f97] border-b-2 transition-colors duration-700'
                            : ''
                            }`}
                    >
                        Password
                    </p>
                    <p
                        onClick={() => setTransactionType('KYC')}
                        className={`snap-start py-3 cursor-pointer font-medium ${TransactionType === 'KYC'
                            ? 'text-[#491f97] border-b-[#491f97] border-b-2 transition-colors duration-700'
                            : ''
                            }`}
                    >
                        KYC
                    </p>
                    <p
                        onClick={() => setTransactionType('Invoice')}
                        className={`snap-start py-3 cursor-pointer font-medium ${TransactionType === 'Invoice'
                            ? 'text-[#491f97] border-b-[#491f97] border-b-2 transition-colors duration-700'
                            : ''
                            }`}
                    >
                        Invoice
                    </p>
                    <p
                        onClick={() => setTransactionType('Notifications')}
                        className={`snap-start py-3 cursor-pointer font-medium ${TransactionType === 'Notifications'
                            ? 'text-[#491f97] border-b-[#491f97] border-b-2 transition-colors duration-700'
                            : ''
                            }`}
                    >
                        Notifications
                    </p>
                    <p
                        onClick={() => setTransactionType('Advanced')}
                        className={`snap-start py-3 cursor-pointer font-medium ${TransactionType === 'Advanced'
                            ? 'text-[#491f97] border-b-[#491f97] border-b-2 transition-colors duration-700'
                            : ''
                            }`}
                    >
                        Advanced
                    </p>
                </div>
                {noDelete && (
                    <div className='absolute top-10 sm:right-10 right-2 flex items-center sm:w-[320px] w-[95%] justify-between p-4 rounded-lg bg-[#1D1C1F] text-[#F9F7FC]'>
                        <div className='flex gap-2 items-center'>
                            <img src={smiley} alt="" />
                            <p className='text-[14px] font-medium'>Phew! We almost lost you there.</p>
                        </div>
                        <img
                            onClick={handleNoDelete}
                            className='size-[10px] cursor-pointer'
                            src={close}
                            alt=""
                        />
                    </div>
                )}
                {deleted && (
                    <div className='absolute top-10 sm:right-10 right-2 flex items-center sm:w-[320px] w-[95%] justify-between p-4 rounded-lg bg-[#1D1C1F] text-[#F9F7FC]'>
                        <div className='flex gap-2 items-start'>
                            <img className='mt-1' src={sad} alt="" />
                            <div>
                                <p className='text-[14px] font-medium'>Sorry to see you go!</p>
                                <p className='text-[14px] font-normal'>You'll be redirected out of your dashboard shortly.</p>
                            </div>
                        </div>
                        <img
                            onClick={handleDeleted}
                            className='size-[10px] cursor-pointer'
                            src={close}
                            alt=""
                        />
                    </div>
                )}

                <div className='my-8'>
                    <AccountSettings TransactionType={TransactionType} />
                    <PasswordSettings TransactionType={TransactionType} />
                    <KYC TransactionType={TransactionType} />
                    <InvoiceSettings TransactionType={TransactionType} />
                    <NotificationSettings TransactionType={TransactionType} />
                    <AdvancedSettings TransactionType={TransactionType} />
                </div>
            </div>
        </div>
    )
}

export default UserSettings