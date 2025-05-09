import React, { useState, useRef, useEffect } from 'react';
import { Country, State, City } from "country-state-city";
import { useLocation } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";
import Select from 'react-select';
import Search from '../Components/Images/search.png'
import Upload from '../Components/Images/upload.png'

const VerifyAddress = () => {
    const location = useLocation()
    const [document, setDocument] = useState(null)
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
    const intervalRef = useRef(null);

    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        country: '',
        state_or_province: '',
        postal_code: '',
        proof_of_address_type: 'UTILITY_BILL',
        street_line_1: '',
        street_line_2: '',
        city: '',
        proof_of_address_document: null
    })

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }


    useEffect(() => {
        const allCountries = Country.getAllCountries();
        setCountries(allCountries);
    }, []);

    const handleCountryChange = (option) => {
        setSelectedCountry(option);
        setFormData(prev => ({ ...prev, country: option.value }));

        const fetchedStates = State.getStatesOfCountry(option.values);
        setStates(fetchedStates);
        setSelectedState(null);
        setCities([]);
        setSelectedCity(null);
        setFormData(prev => ({ ...prev, state_or_province: '', city: '' }));
    };

    const handleStateChange = (option) => {
        setSelectedState(option);
        setFormData(prev => ({ ...prev, state_or_province: option.label }));

        const fetchedCities = City.getCitiesOfState(selectedCountry.values, option.value);
        setCities(fetchedCities);
        setSelectedCity(null);
        setFormData(prev => ({ ...prev, city: '' }));
    };

    const handleCityChange = (option) => {
        setSelectedCity(option);
        setFormData(prev => ({ ...prev, city: option.value }));
    };

    const countryOptions = countries.map((c) => ({
        label: (
            <div className="flex items-center gap-2">
                <img
                    src={`https://flagcdn.com/w40/${c.isoCode.toLowerCase()}.png`}
                    alt={c.name}
                    className="w-5 h-4"
                />
                {c.name}
            </div>
        ),
        value: c.name,
        values: c.isoCode,
        raw: c,
    }));

    const stateOptions = states.map((s) => ({
        label: s.name,
        value: s.isoCode,
        raw: s,
    }));

    const cityOptions = cities.map((c) => ({
        label: c.name,
        value: c.name,
    }));


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

    const customStyles = {
        indicatorSeparator: () => ({
            display: 'none',
        }),
        control: (base) => ({
            ...base,
            paddingTop: '5px',
            paddingBottom: '5px',
            paddingRight: '7px',
            paddingLeft: '7px',
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

    const handleDocumentChange = (e) => {
        const selected = e.target.files[0];
        if (selected) {
            const previewURL = URL.createObjectURL(selected)
            setDocument(selected.name);
            simulateProgress();
            setFormData(prev => ({
                ...prev,
                proof_of_address_document: previewURL
            }));
        }
    };

    const handleCancel = () => {
        clearInterval(intervalRef.current);
        setDocument(null);
        setProgress(0);
        setUploading(false);
        setFormData(prev => ({
            ...prev,
            proof_of_address_type: ''
        }));
    };

    useEffect(() => {
        if (progress === 100) {
            setUploading(false);
        }
    }, [progress]);

    return (
        <div className='flex flex-col max-w-[560px] mx-auto md:p-10 py-10 px-4'>
            <div>
                <h1 className='text-[28px] font-medium text-[#1D1C1F] text-center'>Verify Your Home Address</h1>
                <p className='text-[#525154] text-[14px] font-normal text-center'>
                    Enter your home address to verify your account
                </p>
            </div>
            <div className='flex items-center justify-center gap-2 mt-5 transition-all duration-300'>
                <p className={location.pathname === '/dashboard/verifyaddress' ? 'bg-[#411c87] h-1 w-20 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
                <p className={location.pathname === '/dashboard/verifyidentity' ? 'bg-[#411c87] h-1 w-20 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
                <p className={location.pathname === '/dashboard/uploadDocument' ? 'bg-[#411c87] h-1 w-20 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
            </div>
            <div className='mt-12 flex flex-col gap-6 text-[#525154] font-medium text-[14px]'>
                <div>
                    <label htmlFor="code">Country of Residence</label>
                    <div className='flex items-center mt-1'>
                        <Select
                            styles={customStyles}
                            options={countryOptions}
                            onChange={handleCountryChange}
                            placeholder="Select Country"
                            value={selectedCountry}
                            className="w-full"
                            required
                            menuPlacement="auto"
                        />
                        <img className='ml-[-29px] z-20' src={Search} alt="" />
                    </div>
                </div>
                <div>
                    <label htmlFor="code">State / Province</label>
                    <div className='flex items-center mt-1'>
                        <Select
                            styles={customStyles}
                            options={stateOptions}
                            onChange={handleStateChange}
                            placeholder="Select State"
                            value={selectedState}
                            className="w-full"
                            menuPlacement="auto"
                            required
                        />
                        <img className='ml-[-29px] z-20' src={Search} alt="" />
                    </div>
                </div>
                <div>
                    <label htmlFor="code">City</label>
                    <Select
                        styles={customStyles}
                        options={cityOptions}
                        onChange={handleCityChange}
                        placeholder="Select City"
                        value={selectedCity}
                        className="w-full"
                        menuPlacement="auto"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="code">Street Line 1</label>
                    <input
                        className='border-[1.5px] mt-1 border-black/20 rounded-md w-full py-[10px] px-[14px] outline-none'
                        type="number"
                        name="street_line_1"
                        value={formData.street_line_1}
                        onChange={handleChange}
                        required
                        id=""
                        placeholder='564866'
                    />
                </div>
                <div>
                    <label htmlFor="code">Street Line 2</label>
                    <input
                        className='border-[1.5px] mt-1 border-black/20 rounded-md w-full py-[10px] px-[14px] outline-none'
                        type="number"
                        name="street_line_2"
                        value={formData.street_line_2}
                        onChange={handleChange}
                        id=""
                        required
                        placeholder='564866'
                    />
                </div>
                <div>
                    <label htmlFor="code">Zip / postal code</label>
                    <input
                        className='border-[1.5px] mt-1 border-black/20 rounded-md w-full py-[10px] px-[14px] outline-none'
                        type="number"
                        name="postal_code"
                        value={formData.postal_code}
                        onChange={handleChange}
                        id=""
                        placeholder='564866'
                        required
                    />
                </div>
                <div>
                    <label htmlFor="code">Upload your utility bill</label>
                    <div className='mt-1 relative'>
                        <label htmlFor="upload">
                            <div className='border-[1.5px] cursor-pointer border-black/20 rounded-md w-full py-[10px] px-[14px] outline-none flex gap-2 items-center justify-center'>
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
                                required
                            />
                        </label>
                        {document ? (
                            <FaTimes
                                className='absolute top-[35%] right-2 text-black/30 cursor-pointer'
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
                        className='p-3 rounded-lg w-[25%] border-[1.5px] border-black/10'
                        onClick={() => {
                            window.location.replace('/dashboard/verifynumber')
                        }}
                    >
                        Previous
                    </button>
                    <button
                        className={`p-[10px] px-4 rounded-lg text-white w-[80%] ${isSubmitting ? 'bg-[#E8E1F5]' : 'bg-[#531CB3]'}`}
                        onClick={(e) => {
                            localStorage.setItem('KYC-Data', JSON.stringify(formData))
                            setIsSubmitting(true)
                        }}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            'Loading...'
                        ) : (
                            'Continue'
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VerifyAddress