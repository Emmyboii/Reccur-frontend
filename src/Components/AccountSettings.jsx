import React, { useEffect, useMemo, useState } from 'react'
import { Country } from "country-state-city";
import Select from 'react-select';
import { IoMdWarning } from 'react-icons/io';

const AccountSettings = (props) => {

    const { TransactionType } = props
    const [profilePics, setProfilePics] = useState(null)
    const [validationError, setValidationError] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ message: '', type: '' });
    const [showModal, setShowModal] = useState(false);

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        image: null,
    })

    const [initialFormData, setInitialFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        image: null,
    });
    const [isDirty, setIsDirty] = useState(false);

    const getRandomColor = () => {
        const colors = [
            "#F87171", // red-400
            "#60A5FA", // blue-400
            "#34D399", // green-400
            "#FBBF24", // yellow-400
            "#A78BFA", // purple-400
            "#FB7185", // pink-400
            "#F97316", // orange-400
            "#38BDF8", // sky-400
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const bgColor = useMemo(() => getRandomColor(), []);

    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchProfile = async () => {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/profile`, {
                method: "GET",
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = await res.json();
            setFormData(data);
            setInitialFormData(data);
        };

        fetchProfile();
    }, []);

    useEffect(() => {
        if (
            formData.first_name !== initialFormData.first_name ||
            formData.last_name !== initialFormData.last_name ||
            formData.email !== initialFormData.email ||
            formData.image !== initialFormData.image
        ) {
            setIsDirty(true)
        } else {
            setIsDirty(false)
        }
    }, [formData, initialFormData])

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value })
        setValidationError((prev) => ({ ...prev, [name]: '' }));
    }

    if (showModal) {
        setTimeout(() => {
            setShowModal(false)
        }, 3000);
    }

    const handleProfilePics = (e) => {
        const selectedPics = e.target.files[0]
        if (selectedPics) {
            setProfilePics(selectedPics)
            setFormData(prev => ({
                ...prev,
                image: selectedPics
            }))
        }
    }

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let error = {}

        if (!emailRegex.test(formData.email)) {
            error.email = 'Please Enter a Valid Email address.'
        }

        setValidationError(error)
        return Object.keys(error).length === 0;
    }



    const update = async (e) => {
        e.preventDefault()

        if (!validateForm()) {
            console.log("Validation failed!");
            return;
        }

        setIsSubmitting(true);

        try {
            const token = localStorage.getItem('token');


            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/update-profile`, {
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Token ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json();

            if (!response.ok) {
                setShowModal(true)
                throw new Error(data.message || 'Update failed');
            } else {
                setStatus({ message: 'Profile Updated', type: 'success' })
                setShowModal(true)
                console.log('Update successful:', data);
            }

        } catch (error) {
            console.error('Error during update:', error.message);
            setStatus({ message: error.message, type: 'error' })
        } finally {
            setIsSubmitting(false);
            setIsDirty(false)
        }
    }

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");

    useEffect(() => {
        const allCountries = Country.getAllCountries();
        setCountries(allCountries);
    }, []);

    const handleCountryChange = (option) => {
        setSelectedCountry(option);
        // setFormData(prev => ({ ...prev, country_code: option.value }));
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
            paddingLeft: '7px',
            boxShadow: 'none',
            borderRadius: '8px',
            borderWidth: '1px',
            borderColor: '#D2D0D6'
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

    return (
        <div className={TransactionType === 'account' ? 'flex flex-col gap-10 lg:w-[90%]' : 'hidden'}>
            <div className='sa:flex justify-between relative'>
                <div className='flex flex-col gap-1'>
                    <p className='text-[18px] font-medium text-[#1D1C1F]'>Your information</p>
                    <p className='text-[14px] font-normal text-[#525154]'>View and update information related to  your account.</p>
                </div>
                <button
                    onClick={update}
                    className={`text-[#531CB3] sa:block hidden text-[14px] font-medium px-4 py-[10px] rounded-lg ${isSubmitting || !isDirty ? 'bg-[#E8E1F5] cursor-not-allowed' : 'bg-[#531CB3] cursor-pointer text-white'}`}
                    disabled={isSubmitting || !isDirty}
                >
                    {isSubmitting ? (
                        'Loading...'
                    ) : (
                        'Save Changes'
                    )}
                </button>
                {showModal && (
                    <div className={status.type === 'error' ? 'bg-red-500 absolute top-3 left-1/2 -translate-x-1/2 text-white p-2 rounded-md flex items-center justify-between' : 'bg-green-500 absolute top-3 left-1/2 -translate-x-1/2 text-white p-2 rounded-md flex items-center justify-between'}>
                        <p className='text-[16px] font-bold'>
                            {status.message}
                        </p>
                        {status.type === 'error' && <IoMdWarning className='text-[25px]' />}
                    </div>
                )}
            </div>
            <div className='flex sm:flex-row flex-col sm:items-center gap-5'>
                <div className='sm:w-[40%]'>
                    <p className='text-[14px] font-medium text-[#1D1C1F]'>First Name</p>
                    <p className='text-[14px] font-normal text-[#525154]'>This will appear on receipts, invoices, and others...</p>
                </div>
                <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                    className='rounded-lg py-[10px] sm:w-[70%] px-[14px] border border-[#D2D0D6]'
                    placeholder='John'
                />
            </div>
            <div className='flex sm:flex-row flex-col sm:items-center gap-5'>
                <div className='sm:w-[40%]'>
                    <p className='text-[14px] font-medium text-[#1D1C1F]'>Last Name</p>
                    <p className='text-[14px] font-normal text-[#525154]'>This will appear on receipts, invoices, and others...</p>
                </div>
                <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                    className='rounded-lg py-[10px] sm:w-[70%] px-[14px] border border-[#D2D0D6]'
                    placeholder='Doe'
                />
            </div>
            <div className='flex sm:flex-row flex-col sm:items-center gap-5'>
                <div className='sm:w-[40%]'>
                    <p className='text-[14px] font-medium text-[#1D1C1F]'>Email</p>
                    <p className='text-[14px] font-normal text-[#525154]'>This is how we'll contact you or send you account account activities.</p>
                </div>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='rounded-lg py-[10px] sm:w-[70%] px-[14px] border border-[#D2D0D6]'
                    placeholder='john@doe.com'
                />
                {validationError.email && <p className='text-red-500 text-[14px]'>{validationError.email}</p>}
            </div>
            <div className='flex sm:flex-row flex-col sm:items-center gap-5'>
                <div className='sm:w-[40%]'>
                    <p className='text-[14px] font-medium text-[#1D1C1F]'>Profile picture</p>
                    <p className='text-[14px] font-normal text-[#525154]'>Upload a picture. 1MB max</p>
                </div>
                <label className='sm:w-[70%]' htmlFor="ProfilePics">
                    <div className='flex gap-6'>
                        {formData.image ? (
                            <img
                                src={URL.createObjectURL(formData.image)}
                                alt=""
                                className='rounded-[48px] size-12 cursor-pointer'
                            />
                        ) : (
                            <div
                                className="flex items-center justify-center cursor-pointer rounded-full text-[25px] size-12 text-white font-semibold uppercase"
                                style={{ backgroundColor: bgColor }}
                            >
                                {formData.last_name?.charAt(0) || "?"}
                            </div>
                        )}
                        <p className='rounded-lg cursor-pointer py-[10px]  px-[14px] border border-[#D2D0D6]'>Upload Image</p>
                        <input
                            type="file"
                            name=""
                            id="ProfilePics"
                            className='rounded-lg py-[10px] px-[14px] border border-[#D2D0D6]'
                            placeholder='John Doe'
                            onChange={handleProfilePics}
                            hidden
                        />
                    </div>
                </label>
            </div>
            <div className='flex sm:flex-row flex-col sm:items-center gap-5'>
                <div className='sm:w-[40%]'>
                    <p className='text-[14px] font-medium text-[#1D1C1F]'>Location</p>
                </div>
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
            </div>
            <button
                onClick={update}
                className={`text-[#531CB3] block sa:hidden text-[14px] font-medium px-4 py-[10px] rounded-lg ${isSubmitting || !isDirty ? 'bg-[#E8E1F5] cursor-not-allowed' : 'bg-[#531CB3] cursor-pointer text-white'}`}
                disabled={isSubmitting || !isDirty}
            >
                {isSubmitting ? (
                    'Loading...'
                ) : (
                    'Save Changes'
                )}
            </button>

        </div>
    )
}

export default AccountSettings