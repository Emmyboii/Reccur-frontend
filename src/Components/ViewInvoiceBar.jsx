import React, { useContext } from 'react'
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

    return (
        <div className={`fixed top-0 h-screen bg-white lg:p-10 py-8 px-3 duration-700 text-black z-30 overflow-auto ${viewInvoice ? 'sm:w-[400px] md:w-[510px] 2xl:w-[40%] w-full right-0' : 'right-[-100%] w-[40%]'}`}>
            <div className='flex gap-2 justify-between'>
                <div>
                    <p className='text-[20px] font-medium text-[#1D1C1F]'>Invoice #RC787024</p>
                    <p className='text-[#525154]'>Invoice has not been sent to payer yet.</p>
                </div>
                <img
                    className='size-5 mt-1 cursor-pointer' src={close} alt=""
                    onClick={handleViewInvoice}
                />
            </div>
            <div className='flex gap-[6px] mt-5 sp:text-[14px] text-[12.8px] font-medium'>
                <button
                    onClick={() => {
                        handleDeleteInvoice()
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
                        onClick={() => {
                            handleViewInvoice()
                        }}
                        className={`p-2 px-4 bg-[#531CB3] text-white border rounded-lg ${selectedInvoice.status === 'Paid' && 'hidden'}`}
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
                    <p className='text-[16px] text-[#1D1C1F]'>Aug 1, 2022</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-[#525154] tetx-[14px]'>Date due</p>
                    <p className='text-[16px] text-[#1D1C1F]'>Aug 19, 2022</p>
                </div>
            </div>
            <div className='mt-10'>
                <div className='flex justify-between'>
                    <p className='text-[18px] text-[#1D1C1F]'>Payer</p>
                    <p className='text-[14px] text-[#531CB3]'>View payer</p>
                </div>
                <div className='mt-5'>
                    <h1 className='text-[16px] font-medium text-[#302F33]'>Samantha Tino</h1>
                    <p className='text-[#525154] text-[14px]'><span className='text-[#531CB3]'>sam@tino.com •</span> Biffco Enterprises Ltd.</p>
                </div>
            </div>
            <div className='mt-7'>
                <p className='text-[18px] text-[#1D1C1F]'>Invoice summary</p>
                <div className='flex justify-between my-5'>
                    <p className='text-[#302F33] text-[16px]'>This is the first invoice item.</p>
                    <p className='text-[#302F33] text-[16px]'>$500.00</p>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <p className='text-[#302F33] text-[16px]'>This is the second invoice item.</p>
                        <p className='text-[#302F33] text-[16px]'>$1,500.00</p>
                    </div>
                    <div className='mt-2 flex flex-col gap-2'>
                        <p className='text-[14px] text-[#78757A]'>Unit price: $500</p>
                        <p className='text-[14px] text-[#78757A]'>Quantity: 3</p>
                    </div>
                </div>
                <div className='text-[16px] text-[#1D1C1F] flex justify-between border border-[#F3F0F7] rounded-lg p-4 mt-5'>
                    <p>Total</p>
                    <p className='font-semibold'>$2,000.00</p>
                </div>
            </div>
            <div className='mt-7 flex flex-col gap-3'>
                <p className='text-[18px] text-[#1D1C1F]'>Invoice note</p>
                <p className='text-[#525154] text-[16px]'>This is an invoice note that I am leaving for my payer.. This note is meant to act as a guide for payment and all that.</p>
            </div>
            {selectedInvoice && (
                <button
                    onClick={handleClick}
                    className={`bg-[#1CB353] text-white py-[10px] px-4 w-full rounded-lg mt-9 ${selectedInvoice.status === 'Paid' && 'hidden'}`}
                >
                    Mark as paid
                </button>
            )}

        </div>
    )
}

export default ViewInvoiceBar