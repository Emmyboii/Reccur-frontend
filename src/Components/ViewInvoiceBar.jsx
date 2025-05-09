import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context/Context'
import close from '../Components/Images/x-close.png';
import Orange from '../Components/Images/orange.png'
import Red from '../Components/Images/red.png'
import Green from '../Components/Images/green.png'

const ViewInvoiceBar = () => {

    const { handleViewInvoice, viewInvoice, handleDeleteInvoice, selectedInvoice, setSelectedInvoice } = useContext(Context)

    const handleClick = () => {
        setSelectedInvoice(prev => ({
            ...prev,
            status: 'Paid'
        }))
    }
    const [is_sent, setIs_sent] = useState(false)
    const [is_paid, setIs_paid] = useState(false)

    const [invoiceDetails, setInvoiceDetails] = useState([])

    const handleDelete = (id) => {
        localStorage.setItem('invoiceID', id);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        const invoiceID = localStorage.getItem('invoiceID');

        const fetchInvoices = async () => {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/invoice/${invoiceID}`, {
                method: "GET",
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = await res.json();
            setInvoiceDetails(data);
        };

        fetchInvoices();
    }, []);

    const updateInvoice = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token');
        const invoiceID = localStorage.getItem('invoiceID');

        const body = JSON.stringify({
            is_sent: true,
        });

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/invoices/${invoiceID}`, {
            method: "PUT",
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json",

            },
            body: body,
        });
        const data = await res.json();
        setInvoiceDetails(prev =>
            prev.map(invoice =>
                invoice.id === data.id
                    ? { ...invoice, is_sent: data.is_sent }
                    : invoice
            )
        );
    }
    const updateInvoice2 = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token');
        const invoiceID = localStorage.getItem('invoiceID');

        const body = JSON.stringify({
            is_paid: true,
        });

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/invoices/${invoiceID}`, {
            method: "PUT",
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json",

            },
            body: body,
        });
        const data = await res.json();
        setInvoiceDetails(prev =>
            prev.map(invoice =>
                invoice.id === data.id
                    ? { ...invoice, is_paid: data.is_paid }
                    : invoice
            )
        );
    }

    return (
        <div className={`fixed top-0 h-screen bg-white lg:p-10 py-8 px-3 duration-700 text-black z-30 overflow-auto ${viewInvoice ? 'sm:w-[400px] md:w-[510px] 2xl:w-[40%] w-full right-0' : 'right-[-100%] w-[40%]'}`}>
            <div className='flex gap-2 justify-between'>
                <div>
                    <p className='text-[20px] font-medium text-[#1D1C1F]'>Invoice #{invoiceDetails.reference_number}</p>
                    {selectedInvoice && (
                        selectedInvoice.status === 'Paid' || is_sent ? (
                            <p className='text-[#525154]'>Invoice has been sent to payer.</p>
                        ) : (
                            <p className='text-[#525154]'>Invoice has not been sent to payer yet.</p>
                        )
                    )}
                </div>
                <img
                    className='size-5 mt-1 cursor-pointer' src={close} alt=""
                    onClick={handleViewInvoice}
                />
            </div>
            <div className='flex gap-[6px] mt-5 sp:text-[14px] text-[12.8px] font-medium'>
                <button
                    onClick={(e) => {
                        handleDeleteInvoice()
                        handleDelete(invoiceDetails.id)
                    }}
                    className='p-2 px-4 border-[1.5px] border-[#FCA5A5] text-[#EF4444] rounded-lg'
                >
                    Delete
                </button>
                <button
                    onClick={() => {
                        handleViewInvoice()
                    }}
                    className='p-2 px-4 border-[#E6E4EB] text-[#525154] border rounded-lg'
                >
                    Download
                </button>
                {selectedInvoice && (
                    <button
                        onClick={(e) => {
                            setIs_sent(!is_sent)
                            updateInvoice(e)
                        }}
                        className={`p-2 px-4 bg-[#531CB3] text-white border rounded-lg ${(selectedInvoice.status === 'Paid' || is_sent) && 'hidden'}`}
                    >
                        Send invoice
                    </button>
                )}
            </div>
            <div className='mt-10 flex justify-between border-[1.5px] rounded-lg border-[#F3F0F7] p-5'>
                <div className='flex flex-col gap-2'>
                    <p className='text-[#525154] tetx-[14px]'>Status</p>
                    {selectedInvoice && (
                        <p className={`flex items-center gap-1 ${selectedInvoice.status === 'Draft' ? 'text-[#F59E0B]' : selectedInvoice.status === 'Paid' ? 'text-[#1CB353]' : 'text-[#EF4444]'}`}>
                            <img src={selectedInvoice.status === 'Draft' ? Orange : selectedInvoice.status === 'Paid' ? Green : Red} alt="" />
                            {` ${selectedInvoice.status}`}
                        </p>
                    )}
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-[#525154] tetx-[14px]'>Date created</p>
                    <p className='text-[16px] text-[#1D1C1F]'>{invoiceDetails.date_created}</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-[#525154] tetx-[14px]'>Date due</p>
                    <p className='text-[16px] text-[#1D1C1F]'>{invoiceDetails.due_days}</p>
                </div>
            </div>
            <div className='mt-10'>
                <div className='flex justify-between'>
                    <p className='text-[18px] text-[#1D1C1F]'>Payer</p>
                    <p className='text-[14px] text-[#531CB3] cursor-pointer'>View payer</p>
                </div>
                <div className='mt-5'>
                    <h1 className='text-[16px] font-medium text-[#302F33]'>{invoiceDetails.payer_name}</h1>
                    <p className='text-[#525154] text-[14px]'><span className='text-[#531CB3]'>{invoiceDetails.payer_email} •</span> Biffco Enterprises Ltd.</p>
                </div>
            </div>
            <div className='mt-7'>
                <p className='text-[18px] text-[#1D1C1F]'>Invoice summary</p>

                {invoiceDetails?.items?.map((item, index) => (
                    <div key={index}>
                        <div className='flex justify-between my-5'>
                            <p className='text-[#302F33] text-[16px]'>{item.name}</p>
                            {item.price && item.quantity ? (
                                <p className='text-[#302F33] text-[16px]'>
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>
                            ) : (
                                <p className='text-[#302F33] text-[16px]'>
                                    ${item.net_price && item.net_price.toFixed(2)}
                                </p>
                            )}
                        </div>

                        {item.price && item.quantity && (
                            <div className='mt-2 flex flex-col gap-2'>
                                <p className='text-[14px] text-[#78757A]'>Unit price: ${item.price}</p>
                                <p className='text-[14px] text-[#78757A]'>Quantity: {item.quantity}</p>
                            </div>
                        )}
                    </div>
                ))}


                <div className='text-[16px] text-[#1D1C1F] flex justify-between border border-[#F3F0F7] rounded-lg p-4 mt-5'>
                    <p>Total</p>
                    <p className='font-semibold'>
                        ${invoiceDetails?.breakdown?.reduce((total, item) => {
                            // Calculate amount if unit_price and quantity exist
                            const itemAmount = item.price && item.quantity
                                ? item.price * item.quantity
                                : item.net_price || 0; // Fallback to manually entered amount or 0 if not available
                            return total + itemAmount;
                        }, 0).toFixed(2)}
                    </p>
                </div>

            </div>
            <div className='mt-7 flex flex-col gap-3'>
                <p className='text-[18px] text-[#1D1C1F]'>Invoice note</p>
                <p className='text-[#525154] text-[16px]'>{invoiceDetails.detail}</p>
            </div>
            {selectedInvoice && (
                <button
                    onClick={(e) => {
                        handleClick()
                        updateInvoice2(e)
                        setIs_paid(true)
                    }}
                    className={`bg-[#1CB353] text-white py-[10px] px-4 w-full rounded-lg mt-9 ${(!is_sent || is_paid) && 'hidden'}`}
                >
                    Mark as paid
                </button>
            )}

        </div>
    )
}

export default ViewInvoiceBar