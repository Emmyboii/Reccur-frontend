import React, { useContext, useState } from 'react'
import Search from '../Components/Images/search.png'
import Orange from '../Components/Images/orange.png'
import Red from '../Components/Images/red.png'
import Green from '../Components/Images/green.png'
import { IoArrowDownSharp } from 'react-icons/io5'
import menus from '../Components/Images/menu.png';
import { Context } from '../Context/Context'

const CreatedInvoices = () => {

    const { handleViewInvoice, handleDeleteInvoice, setSelectedInvoice } = useContext(Context)
    const [menu, setMenu] = useState(null)

    const Invoices = [
        {
            invoices: '#RC787024',
            payerName: 'Samantha Tino',
            amount: '$2,097',
            status: 'Draft',
            dueDate: '07/05/2016',
        },
        {
            invoice: '#RC787024',
            payerName: 'Samantha Tino',
            amount: '12',
            status: 'Paid',
            dueDate: '07/05/2016',
        },
        {
            invoice: '#RC787024',
            payerName: 'Samantha Tino',
            amount: '12',
            status: 'Draft',
            dueDate: '07/05/2016',
        },
        {
            invoice: '#RC787024',
            payerName: 'Samantha Tino',
            amount: '12',
            status: 'Unpaid',
            dueDate: '07/05/2016',
        },
        {
            invoice: '#RC787024',
            payerName: 'Samantha Tino',
            amount: '12',
            status: 'Paid',
            dueDate: '07/05/2016',
        },
        {
            invoice: '#RC787024',
            payerName: 'Samantha Tino',
            amount: '12',
            status: 'Unpaid',
            dueDate: '07/05/2016',
        },
        {
            invoice: '#RC787024',
            payerName: 'Samantha Tino',
            amount: '12',
            status: 'Unpaid',
            dueDate: '07/05/2016',
        },
    ]

    return (
        <div className='py-10 px-8'>
            <p className='flex items-center gap-4'><img src={Search} alt="" />Search invoices by number, items, clients or amount</p>
            <div className='grid grid-cols-5 gap-5 border-t-[1.5px] border-b-[1.5px] px-2 text-black/50 border-black/10 mt-3 py-[14px] text-[14px] font-medium text-left'>
                <div className='flex gap-5 items-center min-w-0'>
                    <input className='mt-1 size-4' type="checkbox" />
                    <div className='flex items-center gap-1'>
                        <p>Invoice</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center min-w-0'>
                    <p className='truncate'>Payer name</p>
                </div>
                <div className='flex gap-2 items-center justify-end min-w-0'>
                    <p className='truncate'>Amount</p>
                    <IoArrowDownSharp className='text-[16px]' />
                </div>
                <div className='flex gap-2 items-center min-w-0'>
                    <p className='truncate'>Status</p>
                    <IoArrowDownSharp className='text-[16px]' />
                </div>
                <div className='min-w-0 flex items-center gap-5'>
                    <div className='flex gap-2 items-center min-w-0'>
                        <p className='truncate'>Due date</p>
                        <IoArrowDownSharp className='text-[16px]' />
                    </div>
                    <div className='cursor-pointer mt-[-10px] invisible'>
                        <p className='font-semibold text-[18px] text-black/60'>...</p>
                    </div>
                </div>
            </div>
            {Invoices.map((invoice, i) => {
                return <div
                    key={i}
                    className='grid grid-cols-5 gap-5 hover:bg-[#F3F0F7] cursor-pointer border-b-[1.5px] text-black/50 border-black/10 py-[14px] px-2 text-[14px] font-medium text-left'
                >
                    <div className='flex gap-5 items-center min-w-0'>
                        <input className='mt-1 size-4 cursor-pointer' type="checkbox" />
                        <p className='truncate'>{invoice.invoices}</p>
                    </div>

                    <div className='min-w-0'>
                        <p className='truncate'>{invoice.payerName}</p>
                    </div>
                    <div className='min-w-0 flex items-center justify-end'>
                        {invoice.amount}
                    </div>
                    <div className='min-w-0'>
                        <p className={`flex items-center gap-1 ${invoice.status === 'Draft' ? 'text-[#F59E0B]' : invoice.status === 'Paid' ? 'text-[#1CB353]' : 'text-[#EF4444]'}`}>
                            <img src={invoice.status === 'Draft' ? Orange : invoice.status === 'Paid' ? Green : Red} alt="" />
                            {invoice.status}
                        </p>
                    </div>
                    <div className='min-w-0 flex items-center justify-between gap-5 relative'>
                        <p>{invoice.dueDate}</p>
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
                                        setSelectedInvoice(invoice)
                                        handleViewInvoice()
                                        setMenu(menu === i ? null : i)
                                    }}
                                    className='cursor-pointer hover:bg-[#F9F7FC] px-4 py-1'
                                >
                                    View invoice
                                </p>
                                <p
                                    onClick={() => {
                                        handleDeleteInvoice()
                                        setMenu(menu === i ? null : i)
                                    }}
                                    className='cursor-pointer hover:bg-[#F9F7FC] px-4 py-1'
                                >
                                    Delete invoice
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            })}
            <p className='text-[#78757A] mt-4'>1 Payer</p>
        </div>
    )
}

export default CreatedInvoices