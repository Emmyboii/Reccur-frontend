import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Search from '../Components/Images/search.png'
import Select from 'react-select';

const VerifyIdentity = () => {
    const navigate = useNavigate();
    const location = useLocation()

    const options = [
        {
            value: 'ngn',
            label: (
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <img className='w-[20px] h-4 rounded-sm' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
                        <p>Nigeria</p>
                    </div>
                </div>
            ),
        },
        {
            value: 'usa',
            label: (
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <img className='w-[20px] h-4 rounded-sm' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                        <p>USA</p>
                    </div>
                </div>
            ),
        },
    ]

    const customStyles = {
        indicatorSeparator: () => ({
            display: 'none',
        }),
        control: (base) => ({
            ...base,
            paddingTop: '10px',
            paddingBottom: '10px',
            paddingRight: '14px',
            paddingLeft: '14px',
            boxShadow: 'none',
            borderRadius: '8px',
            borderWidth: '1.5px'
        }),
        menu: (base) => ({
            ...base,
            zIndex: 9999
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? '#4e22a0' : 'white',
            color: state.isFocused ? 'white' : 'black',
            padding: 10,
            cursor: 'pointer',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            display: 'none'
        }),
    };
    const [convert, setConvert] = useState(options[0])

    const handleConvert = (option) => {
        setConvert(option)
    }

    return (
        <div className='flex flex-col max-w-[560px] mx-auto md:p-10 py-10 px-4'>
            <div>
                <h1 className='text-[28px] font-medium text-[#1D1C1F] text-center'>Verify Your Identity</h1>
                <p className='text-[#525154] text-[14px] font-normal text-center'>
                    Reccur is required by law and/or industry regulation to collect this information.
                </p>
            </div>
            <div className='flex items-center justify-center gap-2 mt-5 transition-all duration-300'>
                <p className={location.pathname === '/verifynumber' ? 'bg-[#411c87] h-1 w-20 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
                <p className={location.pathname === '/verifyaddress' ? 'bg-[#411c87] h-1 w-20 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
                <p className={location.pathname === '/verifyidentity' ? 'bg-[#411c87] h-1 w-20 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
                <p className={location.pathname === '/uploadDocument' ? 'bg-[#411c87] h-1 w-20 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
            </div>
            <div className='mt-12 flex flex-col gap-6 text-[#525154] font-medium text-[14px]'>
                <div>
                    <label htmlFor="code">Tax identification number</label>
                    <input
                        className='border-[1.5px] mt-1 border-black/20 rounded-lg w-full py-[10px] px-[14px] outline-none'
                        type="number"
                        name=""
                        id=""
                        placeholder='Enter your TIN'
                    />
                </div>
                <div>
                    <label htmlFor="code">Date of birth</label>
                    <input
                        className='border-[1.5px] mt-1 border-black/20 rounded-md w-full py-[10px] px-[14px] outline-none'
                        type="date"
                        name=""
                        id=""
                    />
                </div>
                <div>
                    <label htmlFor="code">Citizenship</label>
                    <div className='flex items-center mt-1'>
                        <Select
                            styles={customStyles}
                            options={options}
                            value={convert}
                            onChange={handleConvert}
                            isSearchable={false}
                            className='w-full outline-none appearance-none'
                        />
                        <img className='ml-[-29px] z-20' src={Search} alt="" />
                    </div>
                </div>
                <div>
                    <label htmlFor="code">Document Number</label>
                    <input
                        className='border-[1.5px] mt-1 border-black/20 rounded-md w-full py-[10px] px-[14px] outline-none'
                        type="number"
                        name=""
                        id=""
                        placeholder='Enter your document number'
                    />
                </div>
                <div>
                    <label htmlFor="code">Document issuance date</label>
                    <input
                        className='border-[1.5px] mt-1 border-black/20 rounded-md w-full py-[10px] px-[14px] outline-none'
                        type="date"
                        name=""
                        id=""
                    />
                </div>
                <div>
                    <label htmlFor="code">Document expiration date</label>
                    <input
                        className='border-[1.5px] mt-1 border-black/20 rounded-md w-full py-[10px] px-[14px] outline-none'
                        type="date"
                        name=""
                        id=""
                    />
                </div>
                <div className='flex gap-2 mt-4'>
                    <button
                        className='p-3 rounded-lg w-[25%] border-[1.5px] border-black/10'
                        onClick={() => {
                            navigate(-1)
                            window.scrollTo(0, 0)
                        }}
                    >
                        Previous
                    </button>
                    <button
                        className='p-3 rounded-lg bg-[#531CB3] text-white w-[80%]'
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