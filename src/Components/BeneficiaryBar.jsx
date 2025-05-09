import React, { useContext, useState } from 'react'
import close from '../Components/Images/x-close.png';
import user from '../Components/Images/user.png';
import { Context } from '../Context/Context'
import Select from 'react-select';
import Bank from '../Components/Images/bank.png';
import SouthAfrica from '../Components/Images/SouthAfrica.png';
import UK from '../Components/Images/UK.png';
import Mexico from '../Components/Images/Mexico.png';
import France from '../Components/Images/France.png';
import Philippines from '../Components/Images/Philippines.png';
import India from '../Components/Images/India.png';

const BeneficiaryBar = () => {
    const { handleBeneficiaryBar, beneficiaryBar, handleAddedBeneficiaries } = useContext(Context)
    const [method, setMethod] = useState('bank')

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        bank_name: '',
        bank_account_type: '',
        account_number: '',
        swift_code: '',
        routing_number: '',
        full_name: '',
    })

    const [formDataCrypto, setFormDataCrypto] = useState({
        cryptocurrency_type: '',
        wallet_address: '',
        network_type: '',
        full_name: '',
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
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/beneficiary/create-bank`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Token ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
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
            }

        } catch (error) {
            console.error('Error during cryptoBeneficairy addition:', error.message);
        } finally {
            setIsSubmitting(false);
        }
    }

    const countryOptions = [
        {
            label: "Select Country",
            value: "select",
            isDisabled: true,
        },
        {
            label: "USA",
            value: "usa",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
        },
        {
            label: "South Africa",
            value: "sa",
            icon: SouthAfrica,
        },
        {
            label: "Nigeria",
            value: "ngn",
            icon: "https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg",
        },
        {
            label: "United Kingdom",
            value: "UK",
            icon: UK,
        },
        {
            label: "Mexico",
            value: "Mexico",
            icon: Mexico,
        },
        {
            label: "France",
            value: "France",
            icon: France,
        },
        {
            label: "Philippines",
            value: "Philippines",
            icon: Philippines,
        },
        {
            label: "India",
            value: "India",
            icon: India,
        },
    ];

    const bankOptions = [
        { label: "Select Bank", value: "", isDisabled: true },
        { label: "Sterling Bank PLC", value: "sterling-bank-plc" },
        { label: "Keystone Bank PLC", value: "keystone-bank-plc" },
        { label: "First City Monument Bank PLC", value: "first-city-monument-bank-plc" },
        { label: "United Bank For Africa PLC", value: "united-bank-for-africa-plc" },
        { label: "Jaiz Bank", value: "jaiz-bank" },
        { label: "Fidelity Bank PLC", value: "fidelity-bank-plc" },
        { label: "Polaris Bank PLC", value: "polaris-bank-plc" },
        { label: "CITI Bank", value: "citi-bank" },
        { label: "Ecobank Nigeria PLC", value: "ecobank-nigeria-plc" },
        { label: "Unity Bank PLC", value: "unity-bank-plc" },
        { label: "Stanbic IBTC Bank PLC", value: "stanbic-ibtc-bank-plc" },
        { label: "Access Bank PLC", value: "access-bank-plc" },
        { label: "Zenith International Bank PLC", value: "zenith-international-bank-plc" },
        { label: "First Bank Of Nigeria PLC", value: "first-bank-of-nigeria-plc" },
        { label: "Wema Bank PLC", value: "wema-bank-plc" },
        { label: "Union Bank Of Nigeria PLC", value: "union-bank-of-nigeria-plc" },
        { label: "Heritage Bank PLC", value: "heritage-bank-plc" },
        { label: "Standard Chartered Bank PLC", value: "standard-chartered-bank-plc" },
        { label: "GT Bank", value: "gt-bank" },
        { label: "Suntrust Bank", value: "suntrust-bank" },
        { label: "Providus Bank", value: "providus-bank" },
        { label: "Afribank Nigeria Plc", value: "afribank-nigeria-plc" },
        { label: "Enterprise Bank Limited", value: "enterprise-bank-limited" },
    ];

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
    const customStyles2 = {
        indicatorSeparator: () => ({
            display: 'none',
        }),
        control: (base) => ({
            ...base,
            paddingTop: '3px',
            paddingBottom: '3px',
            paddingLeft: '37px',
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

    const customComponents = {
        DropdownIndicator: () => null,
    };

    const [banks, setBanks] = useState(bankOptions[0])
    const [countries, setCountries] = useState(countryOptions[0])
    const [crypto, setCrypto] = useState(cryptocurrencyOptions[0])
    const [networkType, setNetworkType] = useState(networkOptions[0])

    const handleBanks = (Option) => {
        setBanks(Option)
        setFormData(prev => ({
            ...prev,
            bank_name: Option.value
        }))
    }
    const handleCountries = (Option) => {
        setCountries(Option)
        setFormData(prev => ({
            ...prev,
            bank_account_type: Option.value
        }))
    }
    const handleCrypto = (Option) => {
        setCrypto(Option)
        setFormDataCrypto(prev => ({
            ...prev,
            cryptocurrency_type: Option.value
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
        <div className={`fixed top-0 h-screen bg-white lg:p-10 py-8 px-4 duration-700 text-black z-50 overflow-auto ${beneficiaryBar ? 'sm:w-[40%] w-full right-0' : 'right-[-100%] w-[40%]'}`}>
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
                                    value={formData.full_name}
                                    onChange={handleBankChange}
                                    id=""
                                    required
                                    placeholder='Beneficiary’s full name'
                                />
                                <img className='absolute ml-3' src={user} alt="" />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="code">Beneficiary's Country</label>
                            <div className='mt-1'>
                                <Select
                                    styles={customStyles}
                                    options={countryOptions}
                                    getOptionLabel={(e) => (
                                        <div className="flex items-center gap-2 text-black/50">
                                            {e.icon && (
                                                <img
                                                    src={e.icon}
                                                    alt={e.label}
                                                    className="w-[20px] h-[15px] rounded-[2px]"
                                                />
                                            )}
                                            <span>{e.label}</span>
                                        </div>
                                    )}
                                    value={countries}
                                    onChange={handleCountries}
                                    isSearchable={false}
                                    className='rounded-m w-full outline-none'
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="fullName">Beneficiary's account number</label>
                            <div className='flex items-center mt-2'>
                                <input
                                    className='border-[1.5px] border-black/20 outline-none py-[10px] w-full px-[14px] rounded-md'
                                    type="number"
                                    name="account_number"
                                    value={formData.account_number}
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
                                <Select
                                    options={bankOptions}
                                    styles={customStyles2}
                                    onChange={handleBanks}
                                    value={banks}
                                    isSearchable={true}
                                    components={customComponents}
                                    className='rounded-m w-full outline-none text-black/60'
                                />
                                <img className='absolute ml-3' src={Bank} alt="" />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="fullName">Routing number</label>
                            <div className='flex items-center mt-2'>
                                <input
                                    className='border-[1.5px] border-black/20 outline-none py-[10px] w-full px-[14px] rounded-md'
                                    type="number"
                                    name="routing_number"
                                    value={formData.routing_number}
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
                                    type="number"
                                    name="swift_code"
                                    value={formData.swift_code}
                                    onChange={handleBankChange}
                                    id=""
                                    required
                                    placeholder='Enter swift code'
                                />
                            </div>
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
                                    window.scrollTo(0, 0)
                                    handleAddedBeneficiaries()
                                    handleBeneficiaryBar()
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
                    <div className='mt-7'>
                        <div className='mt-5 text-black/60'>
                            <label className='text-black/60' htmlFor="fullName">Full Name</label>
                            <div className='flex items-center mt-2 relative'>
                                <input
                                    className='border-[1.5px] placeholder:text-black/60 border-black/20 outline-none py-[10px] w-full pl-[35px] rounded-md'
                                    type="text"
                                    name="full_name"
                                    value={formDataCrypto.full_name}
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
                                    value={formDataCrypto.wallet_address}
                                    onChange={handleCryptoChange}
                                    id=""
                                    required
                                    placeholder='Wallet address'
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
                                    window.scrollTo(0, 0)
                                    
                                    handleBeneficiaryBar()
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