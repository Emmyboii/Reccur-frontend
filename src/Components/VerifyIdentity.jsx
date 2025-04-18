import React from 'react'
import { IoSearch } from "react-icons/io5";
import { useLocation, useNavigate } from 'react-router-dom';

const VerifyIdentity = () => {
    const navigate = useNavigate();
    const location = useLocation()
    return (
        <div className='flex flex-col max-w-[560px] mx-auto py-[30px]'>
            <div>
                <h1 className='text-[30px] text-center'>Verify Your Identity</h1>
                <p className='text-black/60 text-center'>
                    Reccur is required by law and/or industry regulation to collect this information.
                </p>
            </div>
            <div className='flex items-center justify-center gap-2 mt-5 transition-all duration-300'>
                <p className={location.pathname === '/verifynumber' ? 'bg-[#411c87] h-1 w-20 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
                <p className={location.pathname === '/verifyaddress' ? 'bg-[#411c87] h-1 w-20 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
                <p className={location.pathname === '/verifyidentity' ? 'bg-[#411c87] h-1 w-20 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
                <p className={location.pathname === '/uploadDocument' ? 'bg-[#411c87] h-1 w-20 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
            </div>
            <div className='mt-12 flex flex-col gap-4 text-black/70'>
                <div>
                    <label htmlFor="code">Tax identification number</label>
                    <input
                        className='border-[1.5px] mt-1 border-black/20 rounded-md w-full p-2 outline-none'
                        type="number"
                        name=""
                        id=""
                        placeholder='Enter your TIN'
                    />
                </div>
                <div>
                    <label htmlFor="code">Date of birth</label>
                    <input
                        className='border-[1.5px] mt-1 border-black/20 rounded-md w-full p-2 outline-none'
                        type="date"
                        name=""
                        id=""
                    />
                </div>
                <div>
                    <label htmlFor="code">Citizenship</label>
                    <div className='flex items-center mt-1'>
                        <select className='select border-[1.5px] border-black/20 rounded-md w-full p-2 outline-none'>
                            <option value="nigeria">Nigeria</option>
                            <option value="nigeria">Nigeria</option>
                            <option value="nigeria">Nigeria</option>
                            <option value="nigeria">Nigeria</option>
                            <option value="nigeria">Nigeria</option>
                            <option value="nigeria">Nigeria</option>
                            <option value="nigeria">Nigeria</option>
                            <option value="nigeria">Nigeria</option>
                        </select>
                        <IoSearch className='ml-[-25px] text-[20px] text-gray-300' />
                    </div>
                </div>
                <div>
                    <label htmlFor="code">Document Number</label>
                    <input
                        className='border-[1.5px] mt-1 border-black/20 rounded-md w-full p-2 outline-none'
                        type="number"
                        name=""
                        id=""
                        placeholder='Enter your document number'
                    />
                </div>
                <div>
                    <label htmlFor="code">Document issuance date</label>
                    <input
                        className='border-[1.5px] mt-1 border-black/20 rounded-md w-full p-2 outline-none'
                        type="date"
                        name=""
                        id=""
                    />
                </div>
                <div>
                    <label htmlFor="code">Document expiration date</label>
                    <input
                        className='border-[1.5px] mt-1 border-black/20 rounded-md w-full p-2 outline-none'
                        type="date"
                        name=""
                        id=""
                    />
                </div>
                <div className='flex gap-2 mt-4'>
                    <button
                        className='p-3 rounded-lg w-[30%] border-[1.5px] border-black/10'
                        onClick={() => {
                            navigate(-1)
                            window.scrollTo(0, 0)
                        }}
                    >
                        Previous
                    </button>
                    <button
                        className='p-3 rounded-lg bg-[#411c87] text-white w-[70%]'
                        onClick={() => {
                            navigate('/uploadDocument')
                            window.scrollTo(0, 0)
                        }}
                    >
                        Submit application
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VerifyIdentity