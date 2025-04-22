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
                className={`w-[80%] h-[200%] absolute ${createInvoice || viewInvoice ? 'bg-black/20' : 'hidden'}`}
                onClick={createInvoice ? handleCreateInvoice : viewInvoice ? handleViewInvoice : null}
            ></div>
            <div className='flex items-center justify-between px-8 py-5'>
                <div>
                    <p className='text-[28px] font-semibold'>Invoices</p>
                    <p className='text-[14px] text-black/60'>View and manage your created and sent invoices here.</p>
                </div>
                <div className='flex items-center gap-4'>
                    <img src={Search} alt="" />
                    <img src={Bell} alt="" />
                    <img className='w-8' src={Add} alt="" />
                </div>
            </div>
            {invoiceAdded ? (
                <CreatedInvoices />
            ) : (
                <div className='flex flex-col items-center gap-9 mt-[10px] bg-[#F9F7FC] mx-8 py-16 rounded-md border-2 border-black/50 border-dashed'>
                    <div>
                        <p className='text-center font-medium text-[20px]'>Create your first quote!</p>
                        <p className='text-center mt-1 text-[#525154]'>Create and share your invoices to start earning today!</p>
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