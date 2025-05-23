import React, { useRef } from 'react';
import { TiTimes } from 'react-icons/ti';

const ConfirmLogOut = ({ onLogOut, setOnLogOut }) => {
    const logOutModel = useRef();

    const handleRefClick = (e) => {
        if (logOutModel.current === e.target) {
            setOnLogOut(!onLogOut);
        }
    };

    const signOut = () => {
        localStorage.clear();
        window.location.replace('/');
    };

    return (
        <>
            {onLogOut && (
                <div
                    ref={logOutModel}
                    onClick={handleRefClick}
                    className='bg-black/40 fixed inset-0 backdrop-blur-[2px] flex items-center justify-center z-50 bg-opacity-30'
                >
                    <div className='sm:w-[50%] sd:w-[80%] w-[90%] text-black bg-white flex flex-col justify-center p-5 shadow-md shadow-black/50 relative'>
                        <p className='font-bold text-[20px] pb-2'>Log Out?</p>
                        <p>Are you sure you want to proceed?</p>
                        <div className='flex sm:gap-9 gap-4 mt-7 text-white'>
                            <button onClick={() => setOnLogOut(false)} className='w-full rounded-[16px] bg-red-500 py-3'>No</button>
                            <button onClick={signOut} className='w-full rounded-[16px] bg-green-500 py-3'>Yes</button>
                        </div>
                        <TiTimes onClick={() => setOnLogOut(false)} className='absolute top-1 right-2 size-[25px] cursor-pointer' />
                    </div>
                </div>
            )}
        </>
    );
};

export default ConfirmLogOut;
