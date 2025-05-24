import React, { useContext, useEffect, useState } from 'react'
import close from '../Components/Images/x-close.png';
import user from '../Components/Images/user.png';
import { Context } from '../Context/Context'
import Select from 'react-select'; import { Country, State, City } from "country-state-city";

import Bank from '../Components/Images/bank.png';
// import SouthAfrica from '../Components/Images/SouthAfrica.png';
// import UK from '../Components/Images/UK.png';
// import Mexico from '../Components/Images/Mexico.png';
// import France from '../Components/Images/France.png';
// import Philippines from '../Components/Images/Philippines.png';
// import India from '../Components/Images/India.png';

const EditProfileBar = () => {
    const { handleProfileEdit, profileEdit } = useContext(Context)
    const [method, setMethod] = useState('bank')
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCountryCode, setSelectedCountryCode] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    const [formData, setFormData] = useState({
        bank_name: "",
        bank_account_type: "",
        account_number: "",
        swift_code: "",
        routing_number: "",
        full_name: "",
        countryCode: '',
        country: '',
        stateOrProvince: '',
        postalCode: '',
        streetLine1: '',
        streetLine2: '',
        city: '',
    })

    const [formDataCrypto, setFormDataCrypto] = useState({
        cryptocurrency_type: '',
        wallet_address: '',
        network_type: '',
        full_name: '',
        account_type: ''
    })

    useEffect(() => {

        if (!profileEdit) return;

        const token = localStorage.getItem('token');
        const BeneficairyID = localStorage.getItem('BeneficairyID');

        const fetchBeneficiaries = async () => {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/beneficiary/${BeneficairyID}`, {
                method: "GET",
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = await res.json();
            setFormDataCrypto(prev => ({
                ...prev,
                cryptocurrency_type: data.cryptocurrency_type,
                wallet_address: data.wallet_address,
                network_type: data.network_type,
                full_name: data.full_name,
                account_type: data.account_type,
            }));
            setFormData(prev => ({
                ...prev,
                bank_name: data.bank_name,
                bank_account_type: data.bank_account_type,
                account_number: data.account_number,
                swift_code: data.swift_code,
                routing_number: data.routing_number,
                full_name: data.full_name,
                country: data.country,
                countryCode: data.address.countryCode,
                stateOrProvince: data.address.stateOrProvince,
                postalCode: data.address.postalCode,
                streetLine1: data.address.streetLine1,
                streetLine2: data.address.streetLine2,
                city: data.address.city,
            }));
            if (data.account_type === 'crypto') {
                setMethod('crypto')
            } else {
                setMethod('bank')

            }
        };

        fetchBeneficiaries();
    }, [profileEdit])

    const handleBankChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleCryptoChange = (e) => {
        setFormDataCrypto(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const editBankBeneficairy = async (e) => {
        e.preventDefault()

        setIsSubmitting(true);

        try {
            const token = localStorage.getItem('token')
            const BeneficairyID = localStorage.getItem('BeneficairyID');

            const payload = {
                bank_name: formData.bank_name,
                bank_account_type: formData.bank_account_type,
                account_number: formData.account_number,
                swift_code: formData.swift_code,
                routing_number: formData.routing_number,
                full_name: formData.full_name,
                country: formData.country,
                address: {
                    countryCode: formData.countryCode,
                    stateOrProvince: formData.stateOrProvince,
                    postalCode: formData.postalCode,
                    streetLine1: formData.streetLine1,
                    streetLine2: formData.streetLine2,
                    city: formData.city,
                },
            };

            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/beneficiary/${BeneficairyID}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Token ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'failed');
            } else {
                console.log('beneficairyAdded:', data);
            }

        } catch (error) {
            console.error('Error during Beneficairy addition:', error.message);
        } finally {
            setIsSubmitting(false);
        }
    }

    const editCryptoBeneficairy = async (e) => {
        e.preventDefault()

        setIsSubmitting(true);

        try {
            const token = localStorage.getItem('token')
            const BeneficairyID = localStorage.getItem('BeneficairyID');

            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/beneficiary/${BeneficairyID}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Token ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formDataCrypto)
            })

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'failed');
            } else {
                console.log('CryptoBeneficairyAdded:', data);
            }

        } catch (error) {
            console.error('Error during cryptoBeneficairy addition:', error.message);
        } finally {
            setIsSubmitting(false);
        }
    }


    // const countryOptions = [
    //     {
    //         label: "Select Country",
    //         value: "select",
    //         isDisabled: true,
    //     },
    //     {
    //         label: "USA",
    //         value: "usa",
    //         icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
    //     },
    //     {
    //         label: "South Africa",
    //         value: "sa",
    //         icon: SouthAfrica,
    //     },
    //     {
    //         label: "Nigeria",
    //         value: "ngn",
    //         icon: "https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg",
    //     },
    //     {
    //         label: "United Kingdom",
    //         value: "UK",
    //         icon: UK,
    //     },
    //     {
    //         label: "Mexico",
    //         value: "Mexico",
    //         icon: Mexico,
    //     },
    //     {
    //         label: "France",
    //         value: "France",
    //         icon: France,
    //     },
    //     {
    //         label: "Philippines",
    //         value: "Philippines",
    //         icon: Philippines,
    //     },
    //     {
    //         label: "India",
    //         value: "India",
    //         icon: India,
    //     },
    // ];

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    // const bankOptions = [
    //     { label: "Select Bank", value: "", isDisabled: true },
    //     { label: "Sterling Bank PLC", value: "sterling-bank-plc" },
    //     { label: "Keystone Bank PLC", value: "keystone-bank-plc" },
    //     { label: "First City Monument Bank PLC", value: "first-city-monument-bank-plc" },
    //     { label: "United Bank For Africa PLC", value: "united-bank-for-africa-plc" },
    //     { label: "Jaiz Bank", value: "jaiz-bank" },
    //     { label: "Fidelity Bank PLC", value: "fidelity-bank-plc" },
    //     { label: "Polaris Bank PLC", value: "polaris-bank-plc" },
    //     { label: "CITI Bank", value: "citi-bank" },
    //     { label: "Ecobank Nigeria PLC", value: "ecobank-nigeria-plc" },
    //     { label: "Unity Bank PLC", value: "unity-bank-plc" },
    //     { label: "Stanbic IBTC Bank PLC", value: "stanbic-ibtc-bank-plc" },
    //     { label: "Access Bank PLC", value: "access-bank-plc" },
    //     { label: "Zenith International Bank PLC", value: "zenith-international-bank-plc" },
    //     { label: "First Bank Of Nigeria PLC", value: "first-bank-of-nigeria-plc" },
    //     { label: "Wema Bank PLC", value: "wema-bank-plc" },
    //     { label: "Union Bank Of Nigeria PLC", value: "union-bank-of-nigeria-plc" },
    //     { label: "Heritage Bank PLC", value: "heritage-bank-plc" },
    //     { label: "Standard Chartered Bank PLC", value: "standard-chartered-bank-plc" },
    //     { label: "GT Bank", value: "gt-bank" },
    //     { label: "Suntrust Bank", value: "suntrust-bank" },
    //     { label: "Providus Bank", value: "providus-bank" },
    //     { label: "Afribank Nigeria Plc", value: "afribank-nigeria-plc" },
    //     { label: "Enterprise Bank Limited", value: "enterprise-bank-limited" },
    // ];

    const cryptocurrencyOptions = [
        { label: "Cryptocurrency Type", value: "", isDisabled: true },
        { label: "USDT", value: "usdt" },
        { label: "USDC", value: "usdc" },
        { label: "BTC", value: "BTC" },
        { label: "SOL", value: "SOL" },
        { label: "ETH", value: "ETH" },
        { label: "BNB", value: "BNB" },
    ];

    const networkOptions = [
        { label: "Network Type", value: "type", isDisabled: true },
        { label: "SOL", value: "SOL" },
        { label: "ETH", value: "ETH" },
    ];

    const acctTypeOptions = [
        { label: "Account Type", value: "type", isDisabled: true },
        { label: "Fait", value: "fait" },
        { label: "Crypto", value: "crypto" },
    ];

    const bankAcctTypeOptions = [
        { label: "Bank Account Type", value: "type", isDisabled: true },
        { label: "Savings", value: "SAVING" },
        { label: "Checking", value: "CHECKING" },
    ];

    useEffect(() => {
        const allCountries = Country.getAllCountries();
        setCountries(allCountries);
    }, []);

    const handleCountryCodeChange = (option) => {
        setSelectedCountryCode(option);
        setFormData(prev => ({ ...prev, countryCode: option.values }));

        const fetchedStates = State.getStatesOfCountry(option.values);
        setStates(fetchedStates);
        setSelectedState(null);
        setCities([]);
        setSelectedCity(null);
        setFormData(prev => ({ ...prev, stateOrProvince: '', city: '' }));
    };

    const handleCountryChange = (option) => {
        setSelectedCountry(option);
        setFormData(prev => ({ ...prev, country: option.values }));
    };

    const handleStateChange = (option) => {
        setSelectedState(option);
        setFormData(prev => ({ ...prev, stateOrProvince: option.label }));

        const fetchedCities = City.getCitiesOfState(selectedCountryCode.values, option.value);
        setCities(fetchedCities);
        setSelectedCity(null);
        setFormData(prev => ({ ...prev, city: '' }));
    };

    const handleCityChange = (option) => {
        setSelectedCity(option);
        setFormData(prev => ({ ...prev, city: option.value }));
    };

    const countryCodeOptions = countries.map((c) => ({
        label: (
            <div className="flex items-center gap-2">
                <img
                    src={`https://flagcdn.com/w40/${c.isoCode.toLowerCase()}.png`}
                    alt={c.name}
                    className="w-5 h-4"
                />
                {c.isoCode}
            </div>
        ),
        value: c.isoCode,
        values: c.isoCode,
        raw: c,
    }));

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
        values: c.name,
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

    const customStyles = {
        indicatorSeparator: () => ({
            display: 'none',
        }),
        control: (base) => ({
            ...base,
            paddingTop: '3px',
            paddingBottom: '3px',
            paddingLeft: '7px',
            paddingRight: '7px',
            borderRadius: '6px',
            boxShadow: 'none',
            borderWidth: '1.5px',
            color: 'rgb(0, 0, 0, 0.6)'
        }),
        singleValue: (base) => ({
            ...base,
            color: 'rgba(0, 0, 0, 0.6)',
        }),
        menu: (base) => ({
            ...base,
            zIndex: 999,
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? '#4e22a0' : 'white',
            color: state.isFocused ? 'white' : 'rgb(0, 0, 0, 0.6)',
            padding: 10,
            cursor: 'pointer',
        }),
    };
    // const customStyles2 = {
    //     indicatorSeparator: () => ({
    //         display: 'none',
    //     }),
    //     control: (base) => ({
    //         ...base,
    //         paddingTop: '3px',
    //         paddingBottom: '3px',
    //         paddingLeft: '37px',
    //         paddingRight: '7px',
    //         borderRadius: '6px',
    //         boxShadow: 'none',
    //         borderWidth: '1.5px',
    //         color: 'rgb(0, 0, 0, 0.6)'
    //     }),
    //     singleValue: (base) => ({
    //         ...base,
    //         color: 'rgba(0, 0, 0, 0.6)',
    //     }),
    //     menu: (base) => ({
    //         ...base,
    //         zIndex: 999,
    //     }),
    //     option: (base, state) => ({
    //         ...base,
    //         backgroundColor: state.isFocused ? '#4e22a0' : 'white',
    //         color: state.isFocused ? 'white' : 'rgb(0, 0, 0, 0.6)',
    //         padding: 10,
    //         cursor: 'pointer',
    //     }),
    // };

    // const customComponents = {
    //     DropdownIndicator: () => null,
    // };

    // const [banks, setBanks] = useState(bankOptions[0])
    const [bankAcctType, setBankAcctType] = useState(bankAcctTypeOptions[0])
    // const [countries, setCountries] = useState(countryOptions[0])
    const [crypto, setCrypto] = useState(cryptocurrencyOptions[0])
    const [networkType, setNetworkType] = useState(networkOptions[0])
    const [acctType, setacctType] = useState(acctTypeOptions[0])

    // const handleBanks = (Option) => {
    //     setBanks(Option)
    //     setFormData(prev => ({
    //         ...prev,
    //         bank_name: Option.value
    //     }))
    // }

    const handleBankAcctType = (Option) => {
        setBankAcctType(Option)
        setFormData(prev => ({
            ...prev,
            bank_account_type: Option.value
        }))
    }
    // const handleCountries = (Option) => {
    //     setCountries(Option)
    //     setFormData(prev => ({
    //         ...prev,
    //         bank_account_type: Option.value
    //     }))
    // }
    const handleCrypto = (Option) => {
        setCrypto(Option)
        setFormDataCrypto(prev => ({
            ...prev,
            cryptocurrency_type: Option.value
        }))
    }
    const handleAccountType = (Option) => {
        setacctType(Option)
        setFormDataCrypto(prev => ({
            ...prev,
            account_type: Option.value
        }))
    }

    const handleNetworkType = (Option) => {
        setNetworkType(Option)
        setFormDataCrypto(prev => ({
            ...prev,
            network_type: Option.value
        }))
    }

    return (
        <div className={`fixed top-0 h-screen bg-white lg:p-10 py-8 px-4 duration-700 text-black z-50 overflow-auto ${profileEdit ? 'sm:w-[50%] lg:w-[40%] w-full right-0' : 'right-[-100%] w-[40%]'}`}>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-[28px] font-semibold'>Edit beneficiary</h1>
                    <p className='text-[14px] font-normal text-[#525154]'>No emails will be sent to your beneficiary when you add them here - that is, unless you tell us to.</p>
                </div>
                <img
                    className='size-5 mt-1 cursor-pointer' src={close} alt=""
                    onClick={handleProfileEdit}
                />
            </div>
            <div className='mt-7 flex gap-4 border-b-black/30 border-b'>
                <p
                    onClick={() => setMethod('bank')}
                    className={method === 'bank' ? 'cursor-pointer text-[#491597] border-b-[#491597] border-b-2 pb-2 duration-700 transition-all' : 'cursor-pointer pb-2 duration-700 transition-all'}>Bank transfer</p>
                <p
                    onClick={() => setMethod('crypto')}
                    className={method === 'crypto' ? 'cursor-pointer text-[#491597] border-b-[#491597] border-b-2 pb-2 duration-700 transition-all' : 'cursor-pointer pb-2 duration-700 transition-all'}>Cryptocurrency</p>
            </div>
            {method === 'bank' ?
                (
                    <div className='mt-7 text-[#525154] text-[14px] font-medium'>
                        <div className='mt-5'>
                            <label htmlFor="fullName">Full Name</label>
                            <div className='flex items-center mt-2 relative'>
                                <input
                                    className='border-[1.5px] border-black/20 outline-none py-[10px] w-full pl-[35px] rounded-md'
                                    type="text"
                                    name="full_name"
                                    value={formData.full_name || ''}
                                    onChange={handleBankChange}
                                    id=""
                                    required
                                    placeholder='Beneficiary’s full name'
                                />
                                <img className='absolute ml-3' src={user} alt="" />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="fullName">Beneficiary's account number</label>
                            <div className='flex items-center mt-2'>
                                <input
                                    className='border-[1.5px] border-black/20 outline-none py-[10px] w-full px-[14px] rounded-md'
                                    type="number"
                                    name="account_number"
                                    value={formData.account_number || ''}
                                    onChange={handleBankChange}
                                    id=""
                                    required
                                    placeholder='Account number'
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="fullName">Bank name</label>
                            <div className='flex items-center mt-2 relative'>
                                <input
                                    className='border-[1.5px] border-black/20 outline-none py-[10px] w-full pl-[35px] rounded-md'
                                    type="text"
                                    name="bank_name"
                                    value={formData.bank_name || ''}
                                    onChange={handleBankChange}
                                    id=""
                                    required
                                    placeholder='Enter your bank name'
                                />
                                <img className='absolute ml-3' src={Bank} alt="" />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="code">Country</label>
                            <div className='flex items-center mt-2'>
                                <Select
                                    styles={customStyles}
                                    options={countryOptions}
                                    onChange={handleCountryChange}
                                    placeholder="Select Country Code"
                                    value={selectedCountry}
                                    className="w-full"
                                    required
                                    menuPlacement="auto"
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className='text-black/50' htmlFor="fullName">Bank account type</label>
                            <div className='mt-1'>
                                <Select
                                    styles={customStyles}
                                    options={bankAcctTypeOptions}
                                    value={bankAcctType}
                                    onChange={handleBankAcctType}
                                    isSearchable={false}
                                    className='rounded-m w-full outline-none'
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="fullName">Routing number</label>
                            <div className='flex items-center mt-2'>
                                <input
                                    className='border-[1.5px] border-black/20 outline-none py-[10px] w-full px-[14px] rounded-md'
                                    type="number"
                                    name="routing_number"
                                    value={formData.routing_number || ''}
                                    onChange={handleBankChange}
                                    id=""
                                    required
                                    placeholder='Routing number'
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="fullName">Swift code</label>
                            <div className='flex items-center mt-2'>
                                <input
                                    className='border-[1.5px] border-black/20 outline-none py-[10px] w-full px-[14px] rounded-md'
                                    type="text"
                                    name="swift_code"
                                    value={formData.swift_code || ''}
                                    onChange={handleBankChange}
                                    id=""
                                    required
                                    placeholder='Enter swift code'
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="code">Country Code</label>
                            <div className='flex items-center mt-2'>
                                <Select
                                    styles={customStyles}
                                    options={countryCodeOptions}
                                    onChange={handleCountryCodeChange}
                                    placeholder="Select Country Code"
                                    value={selectedCountryCode}
                                    className="w-full"
                                    required
                                    menuPlacement="auto"
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="code">State / Province</label>
                            <div className='flex items-center mt-2'>
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
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="code">City</label>
                            <Select
                                styles={customStyles}
                                options={cityOptions}
                                onChange={handleCityChange}
                                placeholder="Select City"
                                value={selectedCity}
                                className="w-full mt-2"
                                menuPlacement="auto"
                                required
                            />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="code">Street Line 1</label>
                            <input
                                className='border-[1.5px] mt-2 border-black/20 rounded-md w-full py-[10px] px-[14px] outline-none'
                                type="text"
                                name="streetLine1"
                                value={formData.streetLine1}
                                onChange={handleChange}
                                required
                                placeholder='564866'
                            />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="code">Street Line 2</label>
                            <input
                                className='border-[1.5px] mt-2 border-black/20 rounded-md w-full py-[10px] px-[14px] outline-none'
                                type="text"
                                name="streetLine2"
                                value={formData.streetLine2}
                                onChange={handleChange}
                                id=""
                                required
                                placeholder='564866'
                            />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="code">Zip / postal code</label>
                            <input
                                className='border-[1.5px] mt-2 border-black/20 rounded-md w-full py-[10px] px-[14px] outline-none'
                                type="number"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                                id=""
                                placeholder='564866'
                                required
                            />
                        </div>
                        <div className='flex gap-4 mt-10'>
                            <button
                                className='p-3 rounded-lg w-[25%] border-[1.5px] border-black/10'
                                onClick={handleProfileEdit}
                            >
                                Cancel
                            </button>
                            <button
                                className={`p-[10px] px-4 rounded-lg text-white w-[80%] ${isSubmitting ? 'bg-[#E8E1F5]' : 'bg-[#531CB3]'}`}
                                onClick={(e) => {
                                    window.scrollTo(0, 0)
                                    handleProfileEdit()
                                    editBankBeneficairy(e)
                                }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    'Loading...'
                                ) : (
                                    'Save information'
                                )}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='mt-7 text-[#525154] text-[14px] font-medium'>
                        <div className='mt-5 text-black/60'>
                            <label className='text-black/60' htmlFor="fullName">Full Name</label>
                            <div className='flex items-center mt-2 relative'>
                                <input
                                    className='border-[1.5px] placeholder:text-black/60 border-black/20 outline-none py-[10px] w-full pl-[35px] rounded-md'
                                    type="text"
                                    name="full_name"
                                    value={formDataCrypto.full_name || ''}
                                    onChange={handleCryptoChange}
                                    id=""
                                    required
                                    placeholder='Beneficiary’s full name'
                                />
                                <img className='absolute ml-3' src={user} alt="" />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className='text-black/50' htmlFor="code">Cryptocurrency type</label>
                            <div className='mt-1'>
                                <Select
                                    styles={customStyles}
                                    options={cryptocurrencyOptions}
                                    value={crypto}
                                    onChange={handleCrypto}
                                    isSearchable={false}
                                    className='rounded-m w-full outline-none'
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className='text-black/50' htmlFor="fullName">Wallet address</label>
                            <div className='flex items-center mt-2'>
                                <input
                                    className='border-[1.5px] placeholder:text-black/60 border-black/20 outline-none py-[10px] w-full pl-[14px] rounded-md'
                                    type="text"
                                    name="wallet_address"
                                    value={formDataCrypto.wallet_address || ''}
                                    onChange={handleCryptoChange}
                                    id=""
                                    required
                                    placeholder='Wallet address'
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className='text-black/50' htmlFor="fullName">Account type</label>
                            <div className='mt-1'>
                                <Select
                                    styles={customStyles}
                                    options={acctTypeOptions}
                                    value={acctType}
                                    onChange={handleAccountType}
                                    isSearchable={false}
                                    className='rounded-m w-full outline-none'
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className='text-black/50' htmlFor="code">Network type</label>
                            <div className='mt-1'>
                                <Select
                                    styles={customStyles}
                                    options={networkOptions}
                                    value={networkType}
                                    onChange={handleNetworkType}
                                    isSearchable={false}
                                    className='rounded-m w-full outline-none'
                                />
                            </div>
                        </div>
                        <div className='flex gap-4 mt-12'>
                            <button
                                className='p-3 rounded-lg w-[25%] border-[1.5px] border-black/10'
                                onClick={handleProfileEdit}
                            >
                                Cancel
                            </button>
                            <button
                                className={`p-[10px] px-4 rounded-lg text-white w-[80%] ${isSubmitting ? 'bg-[#E8E1F5]' : 'bg-[#531CB3]'}`}
                                onClick={(e) => {
                                    window.scrollTo(0, 0)
                                    handleProfileEdit()
                                    editCryptoBeneficairy(e)
                                }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    'Loading...'
                                ) : (
                                    'Save information'
                                )}
                            </button>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default EditProfileBar