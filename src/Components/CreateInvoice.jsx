import React, { useContext } from 'react'
import Search from '../Components/Images/search.png'
import Bell from '../Components/Images/bell.png'
import Add from '../Components/Images/AddBtn.png'
import { Context } from '../Context/Context'
import CreateInvoiceBar from './CreateInvoiceBar'
import CreatedInvoices from './CreatedInvoices'
import DeleteInvoice from './DeleteInvoice'
import ViewInvoiceBar from './ViewInvoiceBar'

const CreateInvoice = () => {

    const { handleCreateInvoice, handleViewInvoice, createInvoice, invoiceAdded, viewInvoice } = useContext(Context)

    return (
        <div>
            <div
                className={`w-full h-[200%] absolute ${createInvoice || viewInvoice ? 'bg-black/20' : 'hidden'}`}
                onClick={createInvoice ? handleCreateInvoice : viewInvoice ? handleViewInvoice : null}
            ></div>
            <div className='flex items-start justify-between lg:p-10 py-8 px-4'>
                <div>
                    <p className='text-[28px] text-[#1D1C1F] font-semibold'>Invoices</p>
                    <p className='text-[16px] font-normal text-[#525154]'>View and manage your created and sent invoices here.</p>
                </div>
                <div className='flex md:items-center items-start gap-9'>
                    <img className='md:block hidden' src={Search} alt="" />
                    <img className='md:block hidden' src={Bell} alt="" />
                    <img className='sp:w-8 w-[30px]' src={Add} alt="" />
                </div>
            </div>
            {invoiceAdded ? (
                <CreatedInvoices />
            ) : (
                <div className='flex flex-col items-center gap-9 bg-[#F9F7FC] lg:mx-10 mx-4 px-2 py-16 rounded-md border-2 border-black/50 border-dashed'>
                    <div>
                        <p className='text-center font-medium text-[20px]'>Create your first quote!</p>
                        <p className='text-center font-normal mt-1 text-[#525154]'>Create and share your invoices to start earning today!</p>
                    </div>
                    <button
                        className="bg-[#531CB3] text-white py-[10px] px-4 rounded-lg"
                        onClick={() => {
                            window.scrollTo(0, 0)
                            handleCreateInvoice()
                        }}
                    >
                        Create invoice
                    </button>
                </div>
            )}
            <CreateInvoiceBar />
            <DeleteInvoice />
            <ViewInvoiceBar />
        </div>
    )
}

export default CreateInvoice