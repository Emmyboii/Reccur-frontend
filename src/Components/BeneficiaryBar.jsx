import React, { useContext, useEffect, useState } from 'react'
import { Country, State, City } from "country-state-city";
import close from '../Components/Images/x-close.png';
import user from '../Components/Images/user.png';
import { Context } from '../Context/Context'
import Select from 'react-select';
import Bank from '../Components/Images/bank.png';
// import SouthAfrica from '../Components/Images/SouthAfrica.png';
// import UK from '../Components/Images/UK.png';
// import Mexico from '../Components/Images/Mexico.png';
// import France from '../Components/Images/France.png';
// import Philippines from '../Components/Images/Philippines.png';
// import India from '../Components/Images/India.png';

const BeneficiaryBar = () => {
    const { handleBeneficiaryBar, beneficiaryBar, handleAddedBeneficiaries } = useContext(Context)
    const [method, setMethod] = useState('bank')
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCountryCode, setSelectedCountryCode] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
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


    const createBankBeneficairy = async (e) => {
        e.preventDefault()

        setIsSubmitting(true);

        try {
            const token = localStorage.getItem('token')

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

            console.log(payload);

            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/beneficiary/create-bank`, {
                method: 'POST',
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
                window.scrollTo(0, 0)
                handleAddedBeneficiaries()
                handleBeneficiaryBar()
            }

        } catch (error) {
            console.error('Error during Beneficairy addition:', error.message);
        } finally {
            setIsSubmitting(false);
        }
    }

    const createCryptoBeneficairy = async (e) => {
        e.preventDefault()

        setIsSubmitting(true);

        try {
            const token = localStorage.getItem('token')
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/beneficiary/create-crypto`, {
                method: 'POST',
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
                window.scrollTo(0, 0)
                handleAddedBeneficiaries()
                handleBeneficiaryBar()
            }

        } catch (error) {
            console.error('Error during cryptoBeneficairy addition:', error.message);
        } finally {
            setIsSubmitting(false);
        }
    }

    // const bankOptions = [
    //     { label: "Select Bank", value: "", isDisabled: true },
    //     { label: "Sterling Bank PLC", value: "Sterling Bank PLC" },
    //     { label: "Keystone Bank PLC", value: "Keystone Bank PLC" },
    //     { label: "First City Monument Bank PLC", value: "First City Monument Bank PLC" },
    //     { label: "United Bank For Africa PLC", value: "United Bank For Africa PLC" },
    //     { label: "Jaiz Bank", value: "Jaiz Bank" },
    //     { label: "Fidelity Bank PLC", value: "Fidelity Bank PLC" },
    //     { label: "Polaris Bank PLC", value: "Polaris Bank PLC" },
    //     { label: "CITI Bank", value: "CITI Bank" },
    //     { label: "Ecobank Nigeria PLC", value: "Ecobank Nigeria PLC" },
    //     { label: "Unity Bank PLC", value: "Unity Bank PLC" },
    //     { label: "Stanbic IBTC Bank PLC", value: "Stanbic IBTC Bank PLC" },
    //     { label: "Access Bank PLC", value: "Access Bank PLC" },
    //     { label: "Zenith International Bank PLC", value: "Zenith International Bank PLC" },
    //     { label: "First Bank Of Nigeria PLC", value: "First Bank Of Nigeria PLC" },
    //     { label: "Wema Bank PLC", value: "Wema Bank PLC" },
    //     { label: "Union Bank Of Nigeria PLC", value: "Union Bank Of Nigeria PLC" },
    //     { label: "Heritage Bank PLC", value: "Heritage Bank PLC" },
    //     { label: "Standard Chartered Bank PLC", value: "Standard Chartered Bank PLC" },
    //     { label: "GT Bank", value: "GT Bank" },
    //     { label: "Suntrust Bank", value: "Suntrust Bank" },
    //     { label: "Providus Bank", value: "Providus Bank" },
    //     { label: "Afribank Nigeria Plc", value: "Afribank Nigeria Plc" },
    //     { label: "Enterprise Bank Limited", value: "Enterprise Bank Limited" },
    // ];

    const cryptocurrencyOptions = [
        { label: "Cryptocurrency Type", value: "", isDisabled: true },
        { label: "USDT", value: "USDT" },
        { label: "USDC", value: "USDC" },
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
    const [acctType, setAcctType] = useState(acctTypeOptions[0])

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
    //         country: Option.value
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
        setAcctType(Option)
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
        <div className={`fixed top-0 h-screen bg-white lg:p-10 py-8 px-4 duration-700 text-black z-50 overflow-auto ${beneficiaryBar ? 'sm:w-[50%] lg:w-[40%] w-full right-0' : 'right-[-100%] w-[40%]'}`}>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-[28px] font-semibold'>Add beneficiary</h1>
                    <p className='text-[14px] font-normal text-[#525154]'>No emails will be sent to your beneficiary when you add them here - that is, unless you tell us to.</p>
                </div>
                <img
                    className='size-5 mt-1 cursor-pointer' src={close} alt=""
                    onClick={handleBeneficiaryBar}
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
                                onChange={handleBankChange}
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
                                onChange={handleBankChange}
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
                                onChange={handleBankChange}
                                id=""
                                placeholder='564866'
                                required
                            />
                        </div>
                        <div className='flex gap-4 mt-10'>
                            <button
                                className='p-3 rounded-lg w-[25%] border-[1.5px] border-black/10'
                                onClick={handleBeneficiaryBar}
                            >
                                Cancel
                            </button>
                            <button
                                className={`p-[10px] px-4 rounded-lg text-white w-[80%] ${isSubmitting ? 'bg-[#E8E1F5]' : 'bg-[#531CB3]'}`}
                                onClick={(e) => {
                                    handleAddedBeneficiaries()
                                    createBankBeneficairy(e)
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
                                onClick={handleBeneficiaryBar}
                            >
                                Cancel
                            </button>
                            <button
                                className={`p-[10px] px-4 rounded-lg text-white w-[80%] ${isSubmitting ? 'bg-[#E8E1F5]' : 'bg-[#531CB3]'}`}
                                onClick={(e) => {
                                    createCryptoBeneficairy(e)
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

export default BeneficiaryBar