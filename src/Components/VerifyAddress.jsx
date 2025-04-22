import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";
import Select from 'react-select';
import Search from '../Components/Images/search.png'
import Upload from '../Components/Images/upload.png'

const VerifyAddress = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [document, setDocument] = useState(null)
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
    const intervalRef = useRef(null);

    const simulateProgress = () => {
        setUploading(true);
        setProgress(0);

        intervalRef.current = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(intervalRef.current);
                    return 100;
                }
                return prev + 5;
            });
        }, 100);
    };

    const options = [
        {
            value: 'usa',
            label: (
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <img className='w-7' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                        <p>USA</p>
                    </div>
                </div>
            ),
        },
        {
            value: 'ngn',
            label: (
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <img className='w-7' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
                        <p>Nigeria</p>
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
            padding: '1px',
            boxShadow: 'none',
            borderRadius: '6px',
            borderWidth: '1.5px'
        }),
        menu: (base) => ({
            ...base,
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? '#4e22a0' : 'white',
            color: state.isFocused ? 'white' : 'black',
            padding: 10,
            cursor: 'pointer',
        }),
    };
    const [convert, setConvert] = useState(options[0])

    const handleConvert = (option) => {
        setConvert(option)
    }

    const handleDocumentChange = (e) => {
        const selected = e.target.files[0];
        if (selected) {
            setDocument(selected.name);
            simulateProgress();
        }
    };

    const handleCancel = () => {
        clearInterval(intervalRef.current);
        setDocument(null);
        setProgress(0);
        setUploading(false);
    };

    useEffect(() => {
        if (progress === 100) {
            setUploading(false);
        }
    }, [progress]);

    return (
        <div className='flex flex-col max-w-[560px] mx-auto  py-[30px]'>
            <div>
                <h1 className='text-[30px] text-center'>Verify Your Home Address</h1>
                <p className='text-black/60 text-center'>
                    Enter your home address to verify your account
                </p>
            </div>
            <div className='flex items-center justify-center gap-2 mt-5 transition-all duration-300'>
                <p className={location.pathname === '/verifynumber' ? 'bg-[#411c87] h-1 w-20 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
                <p className={location.pathname === '/verifyaddress' ? 'bg-[#411c87] h-1 w-20 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
                <p className={location.pathname === '/verifyidentity' ? 'bg-[#411c87] h-1 w-20 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
                <p className={location.pathname === '/uploadDocument' ? 'bg-[#411c87] h-1 w-20 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
            </div>
            <div className='mt-12 flex flex-col gap-6 text-black/70'>
                <div>
                    <label htmlFor="code">Country of Residence</label>
                    <div className='flex items-center mt-1'>
                        <Select
                            styles={customStyles}
                            options={options}
                            value={convert}
                            onChange={handleConvert}
                            isSearchable={false}
                            className='w-full outline-none appearance-none'
                        />
                        <img className='ml-[-29px] z-50' src={Search} alt="" />
                    </div>
                </div>
                <div>
                    <label htmlFor="code">State / Province</label>
                    <div className='flex items-center mt-1'>
                        <select className='select border-[1.5px] border-black/20 rounded-md w-full p-2 outline-none'>
                            <option value="nigeria">Lagos</option>
                            <option value="nigeria">Lagos</option>
                            <option value="nigeria">Lagos</option>
                            <option value="nigeria">Lagos</option>
                            <option value="nigeria">Lagos</option>
                            <option value="nigeria">Lagos</option>
                        </select>
                        <img className='ml-[-29px] z-50' src={Search} alt="" />
                    </div>
                </div>
                <div>
                    <label htmlFor="code">City</label>
                    <select className='border-[1.5px] mt-1 border-black/20 rounded-md w-full p-2 outline-none'>
                        <option value="nigeria">Lekki</option>
                        <option value="nigeria">Lekki</option>
                        <option value="nigeria">Lekki</option>
                        <option value="nigeria">Lekki</option>
                        <option value="nigeria">Lekki</option>
                        <option value="nigeria">Lekki</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="code">Street Line 1</label>
                    <input
                        className='border-[1.5px] mt-1 border-black/20 rounded-md w-full p-2 outline-none'
                        type="number"
                        name=""
                        id=""
                        placeholder='564866'
                    />
                </div>
                <div>
                    <label htmlFor="code">Street Line 2</label>
                    <input
                        className='border-[1.5px] mt-1 border-black/20 rounded-md w-full p-2 outline-none'
                        type="number"
                        name=""
                        id=""
                        placeholder='564866'
                    />
                </div>
                <div>
                    <label htmlFor="code">Zip / postal code</label>
                    <input
                        className='border-[1.5px] mt-1 border-black/20 rounded-md w-full p-2 outline-none'
                        type="number"
                        name=""
                        id=""
                        placeholder='564866'
                    />
                </div>
                <div>
                    <label htmlFor="code">Upload your utility bill</label>
                    <div className='mt-1 relative'>
                        <label htmlFor="upload">
                            <div className='border-[1.5px] cursor-pointer border-black/20 rounded-md w-full p-2 outline-none flex gap-2 items-center justify-center'>
                                <div className='flex gap-2 items-center'>
                                    <img src={Upload} alt="" />
                                    {document ? (
                                        <p>{document}</p>
                                    ) : (
                                        <p>Upload document</p>
                                    )}
                                </div>
                            </div>
                            <input
                                className='border-[1.5px] border-black/20 rounded-md w-full p-2 outline-none'
                                type="file"
                                name=""
                                id="upload"
                                onChange={handleDocumentChange}
                                hidden
                            />
                        </label>
                        {document ? (
                            <FaTimes
                                className='absolute top-[30%] right-2 text-black/30 cursor-pointer'
                                onClick={() => setDocument('')}
                            />
                        ) : (
                            <></>
                        )}
                    </div>
                    {uploading && (
                        <div className='flex items-center justify-center gap-5 mt-4'>
                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                <div
                                    className="bg-[#411c87] h-3 transition-all duration-200"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <FaTimes className='mt-[-2px]' onClick={handleCancel} />
                        </div>
                    )}
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
                            navigate('/verifyidentity')
                            window.scrollTo(0, 0)
                        }}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VerifyAddress