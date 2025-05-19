import React, { useEffect, useState } from 'react'
import { Country } from "country-state-city";
import { useLocation, useNavigate } from 'react-router-dom';
import Search from '../Components/Images/search.png'
import Select from 'react-select';
import CountryCode from './CountryCode';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const VerifyIdentity = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCode, setSelectedCode] = useState(CountryCode[122]);
    const [isOpen, setIsOpen] = useState(false);
    const [validationError, setValidationError] = useState({})

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        tax_identification_number: '',
        date_of_birth: '',
        document_number: '',
        document_issuance_date: '',
        document_expiration_date: '',
        citizenship: '',
        phone_number: '',
        phone_country_code: ''
    })

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleDateChange = (date, fieldName) => {
        if (!date) return;

        const formattedDate = format(date, 'yyyy-MM-dd');
        setFormData(prev => ({
            ...prev,
            [fieldName]: formattedDate
        }));
    };

    useEffect(() => {
        const prevData = JSON.parse(localStorage.getItem('KYC-Data')) || {};
        const updatedData = {
            ...prevData,
            phone_country_code: selectedCode.code,
        };
        localStorage.setItem('KYC-Data', JSON.stringify(updatedData));

        setFormData((prev) => ({
            ...prev,
            phone_country_code: selectedCode.code,
        }));
    }, [selectedCode]);


    const toggleDropdown = () => setIsOpen(!isOpen);


    const handleSelect = (country) => {
        setSelectedCode(country);
        setIsOpen(false);

        setFormData((prev) => ({
            ...prev,
            phone_country_code: country.code,
        }));
    };

    useEffect(() => {
        const allCountries = Country.getAllCountries();
        setCountries(allCountries);
    }, []);

    const handleCountryChange = (option) => {
        setSelectedCountry(option);
        setFormData(prev => ({ ...prev, citizenship: option.value }));
    };

    const validateForm = () => {
        const phone_NumberRegex = /^.{10,}$/;

        let error = {}

        if (!phone_NumberRegex.test(formData.phone_number)) {
            error.phone_number = 'Phone number must contain a minimum of 10 digits.'
        }

        setValidationError(error)
        return Object.keys(error).length === 0;
    }

    const handleClick = () => {
        setIsSubmitting(true);
        validateForm()

        const prevData = JSON.parse(localStorage.getItem('KYC-Data')) || {};
        const updatedData = {
            ...prevData,
            ...formData,
        };

        localStorage.setItem('KYC-Data', JSON.stringify(updatedData));

        setTimeout(() => {
            setIsSubmitting(false);
            window.scrollTo(0, 0)
            navigate('/dashboard/uploadDocument');
        }, 2500);
    };

    useEffect(() => {
        const KYC_Data = JSON.parse(localStorage.getItem('KYC-Data'))
        if (KYC_Data) setFormData(KYC_Data)
    }, [])

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
        raw: c,
    }));

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

    return (
        <div className='flex flex-col max-w-[560px] mx-auto md:p-10 py-10 px-4'>
            <div>
                <h1 className='text-[28px] font-medium text-[#1D1C1F] text-center'>Verify Your Identity</h1>
                <p className='text-[#525154] text-[14px] font-normal text-center'>
                    Reccur is required by law and/or industry regulation to collect this information.
                </p>
            </div>
            <div className='flex items-center justify-center gap-2 mt-5 transition-all duration-300'>
                <p className={location.pathname === '/dashboard/verifyaddress' ? 'bg-[#411c87] h-1 w-20 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
                <p className={location.pathname === '/dashboard/verifyidentity' ? 'bg-[#411c87] h-1 w-20 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
                <p className={location.pathname === '/dashboard/uploadDocument' ? 'bg-[#411c87] h-1 w-20 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
            </div>
            <div className='mt-12 flex flex-col gap-6 text-[#525154] font-medium text-[14px]'>
                <div>
                    <label htmlFor="code">Tax identification number</label>
                    <input
                        className='border-[1.5px] mt-1 border-black/20 rounded-lg w-full py-[10px] px-[14px] outline-none'
                        type="number"
                        name="tax_identification_number"
                        value={formData.tax_identification_number}
                        onChange={handleChange}
                        id=""
                        placeholder='Enter your TIN'
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="document_expiration_date">Date of birth</label>
                    <DatePicker
                        selected={
                            formData.date_of_birth
                                ? new Date(formData.date_of_birth.replace(/\//g, '-'))
                                : null
                        }
                        onChange={(date) => handleDateChange(date, 'date_of_birth')}
                        dateFormat="yyyy-MM-dd"
                        customInput={
                            <input
                                type="text"
                                className="border-[1.5px] mt-1 border-black/20 rounded-md w-full py-[10px] px-[14px] outline-none"
                                placeholder="yyyy-MM-dd"
                            />
                        }
                        popperPlacement="bottom"
                    />
                </div>
                <div>
                    <label htmlFor="code">Citizenship</label>
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
                    <label htmlFor="number">Phone Number</label>
                    <div className='mt-1 relative'>
                        <input
                            className='border-[1.5px] border-black/20 rounded-md placeholder-black/4- w-full pl-[110px] p-2 outline-none'
                            type="text"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            id="number"
                            maxLength="11"
                             pattern="^\d{1,11}$"
                            inputMode="numeric"
                            required
                            placeholder='9000000000'
                        />
                        <div className="absolute top-[5px] left-1 w-[120px]">
                            <div
                                className="flex items-center gap-3 p-1 border-none rounded cursor-pointer bg-transparent"
                                onClick={toggleDropdown}
                            >
                                {selectedCode.name} ({selectedCode.code})
                                {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>

                            {isOpen && (
                                <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow-md max-h-60 overflow-y-auto">
                                    {CountryCode.map((country, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleSelect(country)}
                                            className="p-2 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {country.name} ({country.code})
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        {validationError.phone_number && <p className='text-red-500 text-[14px]'>{validationError.phone_number}</p>}
                    </div>
                </div>
                <div>
                    <label htmlFor="code">Document Number</label>
                    <input
                        className='border-[1.5px] mt-1 border-black/20 rounded-md w-full py-[10px] px-[14px] outline-none'
                        type="text"
                        name="document_number"
                        value={formData.document_number}
                        onChange={handleChange}
                        id=""
                        required
                        placeholder='Enter your document number'
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="document_expiration_date">Document issuance date</label>
                    <DatePicker
                        selected={
                            formData.document_issuance_date
                                ? new Date(formData.document_issuance_date.replace(/\//g, '-'))
                                : null
                        }
                        onChange={(date) => handleDateChange(date, 'document_issuance_date')}
                        dateFormat="yyyy-MM-dd"
                        customInput={
                            <input
                                type="text"
                                className="border-[1.5px] mt-1 border-black/20 rounded-md w-full py-[10px] px-[14px] outline-none"
                                placeholder="yyyy-MM-dd"
                            />
                        }
                        popperPlacement="bottom"
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="document_expiration_date">Document expiration date</label>
                    <DatePicker
                        selected={
                            formData.document_expiration_date
                                ? new Date(formData.document_expiration_date.replace(/\//g, '-'))
                                : null
                        }
                        onChange={(date) => handleDateChange(date, 'document_expiration_date')}
                        dateFormat="yyyy-MM-dd"
                        customInput={
                            <input
                                type="text"
                                className="border-[1.5px] mt-1 border-black/20 rounded-md w-full py-[10px] px-[14px] outline-none"
                                placeholder="yyyy-MM-dd"
                            />
                        }
                        popperPlacement="bottom"
                    />
                </div>
                <div className='flex gap-2 mt-4'>
                    <button
                        className='p-3 rounded-lg w-[25%] border-[1.5px] border-black/10'
                        onClick={() => {
                            navigate('/dashboard/verifyaddress')
                            window.scrollTo(0, 0)
                        }}
                    >
                        Previous
                    </button>
                    <button
                        className={`p-[10px] px-4 rounded-lg text-white w-[80%] ${isSubmitting ? 'bg-[#E8E1F5]' : 'bg-[#531CB3]'}`}
                        onClick={handleClick}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            'Loading...'
                        ) : (
                            'Submit Application'
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VerifyIdentity