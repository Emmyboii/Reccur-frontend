import React, { useContext, useRef } from 'react'
import { Context } from '../Context/Context'
import close from '../Components/Images/x-close.png';

const DeleteInvoice = () => {
    const { deleteInvoice, handleDeleteInvoice } = useContext(Context)
    const DeleteModel = useRef()

    const closeRef = (e) => {
        if (DeleteModel.current === e.target) {
            handleDeleteInvoice()
        }
    }

    return (
        <div onClick={closeRef} ref={DeleteModel} className={`fixed flex items-center justify-center z-50 inset-0 bg-opacity-30 bg-black/40 ${deleteInvoice ? 'block' : 'hidden'}`}>
            <div className='bg-white w-[35%] ml-[200px] shadow-lg rounded-xl flex flex-col justify-center py-5 px-7'>
                <div className='flex gap-3'>
                    <div>
                        <p className='text-[18px] text-[#1D1C1F] font-medium mb-2'>Delete invoice?</p>
                        <p className='text-[#525154]'>This will permanently delete Samantha Tino from your invoice list.</p>
                    </div>
                    <img
                        className='size-5 mt-1 cursor-pointer' src={close} alt=""
                        onClick={handleDeleteInvoice}
                    />
                </div>
                <div className='flex justify-end gap-2 mt-12'>
                    <button
                        className='p-3 rounded-lg w-[30%] border-[1.5px] text-[#525154] text-[14px] border-black/10'
                        onClick={handleDeleteInvoice}
                    >
                        Cancel
                    </button>
                    <button
                        className='p-3 rounded-lg font-medium bg-[#FEEDED] text-[#EF4444] text-[14px] w-[30%]'
                        onClick={() => {
                            handleDeleteInvoice()
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteInvoice