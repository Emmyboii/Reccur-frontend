import React, { useContext, useRef } from 'react'
import { Context } from '../Context/Context'
import close from '../Components/Images/x-close.png';

const DeleteProfile = () => {
    const { deleteProfile, handleDeleteProfile } = useContext(Context)
    const DeleteModel = useRef()

    const closeRef = (e) => {
        if (DeleteModel.current === e.target) {
            handleDeleteProfile()
        }
    }

    return (
        <div onClick={closeRef} ref={DeleteModel} className={`fixed flex items-center justify-center z-50 inset-0 bg-opacity-30 bg-black/40 ${deleteProfile ? 'block' : 'hidden'}`}>
            <div className='bg-white w-[360px] 2xl:w-[20%] shadow-lg rounded-xl flex flex-col justify-center py-5 px-7'>
                <div className='flex justify-between gap-3'>
                    <div>
                        <p className='text-[18px] text-[#1D1C1F] font-medium mb-2'>Delete information?</p>
                        <p className='text-[#525154] font-normal text-[14px]'>This will permanently delete Samantha Tino from your client list.</p>
                    </div>
                    <img
                        className='size-5 mt-1 cursor-pointer' src={close} alt=""
                        onClick={handleDeleteProfile}
                    />
                </div>
                <div className='flex justify-end gap-2 mt-12'>
                    <button
                        className='p-3 rounded-lg w-[30%] border-[1.5px] text-[#525154] text-[14px] border-black/10'
                        onClick={handleDeleteProfile}
                    >
                        Cancel
                    </button>
                    <button
                        className='p-3 rounded-lg font-medium bg-[#FEEDED] text-[#EF4444] text-[14px] w-[30%]'
                        onClick={() => {
                            handleDeleteProfile()
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteProfile