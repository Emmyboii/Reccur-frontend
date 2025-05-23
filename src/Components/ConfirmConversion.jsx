import React, { useContext, useRef } from 'react'
import { Context } from '../Context/Context'
import close from '../Components/Images/x-close.png';

const ConfirmConversion = () => {
    const { handleConversion, confirmConversion, handleAcctDetailsBar, handleConvertBar } = useContext(Context)
    const ConversionModel = useRef()

    const closeRef = (e) => {
        if (ConversionModel.current === e.target) {
            handleConversion()
        }
    }

    return (
        <div onClick={closeRef} ref={ConversionModel} className={`backdrop-blur-[1px] fixed flex items-center justify-center z-50 inset-0 bg-opacity-30 bg-black/40 ${confirmConversion ? 'block' : 'hidden'}`}>
            <div className='bg-white w-[35%] rounded-xl flex flex-col justify-center p-6'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-[18px] font-medium mb-2'>Confirm Conversion</p>
                        <p className='text-[#525154] font-normal text-[14px]'>Funds will be available in your NGN account immediately after the conversion.</p>
                    </div>
                    <img
                        className='size-5 mt-1 cursor-pointer' src={close} alt=""
                        onClick={handleConversion}
                    />
                </div>
                <div className='flex justify-end gap-3 mt-12'>
                    <button
                        className='p-3 rounded-lg w-[25%] border-[1.5px] text-[14px] border-black/10'
                        onClick={handleConversion}
                    >
                        Cancel
                    </button>
                    <button
                        className='p-3 rounded-lg bg-[#531CB3] text-white text-[14px] w-[45%]'
                        onClick={() => {
                            handleAcctDetailsBar()
                            handleConversion()
                            handleConvertBar()
                        }}
                    >
                        Confirm Conversion
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmConversion