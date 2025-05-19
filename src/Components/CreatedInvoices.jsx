import React, { useContext, useEffect, useState } from 'react'
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
    const [searchQuery, setSearchQuery] = useState('');

    const [isSmScreen, setIsSmScreen] = useState(window.innerWidth < 450);

    const [invoice, setInvoice] = useState([])

    useEffect(() => {
        const handleResize = () => {
            setIsSmScreen(window.innerWidth < 450);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleInvoiceClick = (id) => {
        localStorage.setItem('invoiceID', id);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);  // Update the search query state
    };

    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchInvoices = async () => {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/invoice`, {
                method: "GET",
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = await res.json();
            setInvoice(data);
        };

        fetchInvoices();
    }, []);

    const Invoices = [
        {
            reference_number: '#RC787024',
            payerName: 'Samantha Tino',
            amount: '$2,097',
            status: 'Draft',
            due_days: '07/05/2016',
        },
        {
            reference_number: '#RC787024',
            payerName: 'Samantha Tino',
            amount: '12',
            status: 'Paid',
            due_days: '07/05/2016',
        },
        {
            reference_number: '#RC787024',
            payerName: 'Samantha Tino',
            amount: '12',
            status: 'Draft',
            due_days: '07/05/2016',
        },
        {
            reference_number: '#RC787024',
            payerName: 'Samantha Tino',
            amount: '12',
            status: 'Unpaid',
            due_days: '07/05/2016',
        },
        {
            reference_number: '#RC787024',
            payerName: 'Samantha Tino',
            amount: '12',
            status: 'Paid',
            due_days: '07/05/2016',
        },
        {
            reference_number: '#RC787024',
            payerName: 'Samantha Tino',
            amount: '12',
            status: 'Unpaid',
            due_days: '07/05/2016',
        },
        {
            reference_number: '#RC787024',
            payerName: 'Samantha Tino',
            amount: '12',
            status: 'Unpaid',
            due_days: '07/05/2016',
        },
    ]

    return (
        <div className='lg:p-10 lg:py-5 py-5 px-4'>
            <div className='relative'>
                <input
                    type="text"
                    placeholder="Search invoices by number, items, clients or amount"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="px-4 py-2 border-none outline-none border-gray-300 w-full placeholder:text-[14px] placeholder:text-[#78757A] ml-5 rounded-md"
                />
                <img src={Search} alt="" className='absolute top-2' />
            </div>
            <div className='sm:grid md:grid-cols-5 sm:grid-cols-4 flex justify-between gap-5 border-t-[1.5px] border-b-[1.5px] px-2 text-[#78757A] border-black/10 mt-3 py-[14px] text-[14px] font-medium text-left'>
                <div className='flex gap-5 items-center min-w-0'>
                    <input className='mt-1 size-4' type="checkbox" />
                    <div className='flex items-center gap-1'>
                        <p>Invoice</p>
                    </div>
                </div>
                <div className='flex items-center min-w-0'>
                    <p className='truncate'>Payer name</p>
                </div>
                <div className='sm:flex hidden gap-2 items-center justify-end min-w-0'>
                    <p className='truncate'>Amount</p>
                    <IoArrowDownSharp className='text-[16px]' />
                </div>
                <div className='md:flex hidden gap-2 items-center min-w-0'>
                    <p className='truncate'>Status</p>
                    <IoArrowDownSharp className='text-[16px]' />
                </div>
                <div className='min-w-0 sp:flex hidden items-center gap-5'>
                    <div className='flex gap-2 items-center min-w-0'>
                        <p className='truncate'>Due date</p>
                        <IoArrowDownSharp className='text-[16px]' />
                    </div>
                    <div className='cursor-pointer mt-[-10px] invisible'>
                        <p className='font-semibold text-[18px] text-black/60'>...</p>
                    </div>
                </div>
            </div>
            {invoice.map((invoice, i) => {
                return <div
                    key={i}
                    onClick={isSmScreen ? () => {
                        handleViewInvoice(i)
                        setSelectedInvoice(invoice)
                        handleInvoiceClick(invoice.id)
                    }
                        : undefined
                    }
                    className='sm:grid md:grid-cols-5 sm:grid-cols-4 flex justify-between gap-5 hover:bg-[#F3F0F7] cursor-pointer border-b-[1.5px] text-[#525154] border-black/10 py-[14px] px-2 text-[14px] font-medium text-left'
                >
                    <div className='flex gap-5 items-center min-w-0'>
                        <input className='mt-1 size-4 cursor-pointer' type="checkbox" />
                        <p className='truncate'>{invoice.reference_number}</p>
                    </div>

                    <div className='min-w-0'>
                        <p className='truncate'>{invoice.payerName}</p>
                    </div>
                    <div className='min-w-0 sm:flex hidden items-center justify-end'>
                        {invoice.amount}
                    </div>
                    <div className='min-w-0 md:flex hidden'>
                        <p className={`flex items-center gap-1 ${invoice.status === 'Draft' ? 'text-[#F59E0B]' : invoice.status === 'Paid' ? 'text-[#1CB353]' : 'text-[#EF4444]'}`}>
                            <img src={invoice.status === 'Draft' ? Orange : invoice.status === 'Paid' ? Green : Red} alt="" />
                            {invoice.status}
                        </p>
                    </div>
                    <div className='min-w-0 sp:flex hidden items-center justify-between gap-5 relative'>
                        <p>{invoice.due_days}</p>
                        <div
                            onClick={() => setMenu(menu === i ? null : i)}
                            className={`font-semibold text-[18px] text-black/60 ${menu === i ? 'bg-[#E6E4EB] rounded-md p-2 py-3' : 'py-2'}`}
                        >
                            <img src={menus} alt="" />
                        </div>
                        {menu === i && (
                            <div className='bg-white z-10 flex flex-col py-2 right-[-2px] absolute top-[37px] shadow-md rounded-md'>
                                <p
                                    onClick={() => {
                                        setSelectedInvoice(invoice)
                                        handleViewInvoice()
                                        handleInvoiceClick(invoice.id)
                                        setMenu(menu === i ? null : i)
                                    }}
                                    className='cursor-pointer hover:bg-[#F9F7FC] px-2 py-1'
                                >
                                    View invoice
                                </p>
                                <p
                                    onClick={() => {
                                        handleDeleteInvoice()
                                        handleInvoiceClick(invoice.id)
                                        setMenu(menu === i ? null : i)
                                    }}
                                    className='cursor-pointer hover:bg-[#F9F7FC] px-2 py-1'
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