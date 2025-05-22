import React, { useContext, useEffect, useState } from 'react'
import OffToggle from '../Components/Images/OffToggle.png';
import OnToggle from '../Components/Images/OnToggle.png';
import { Context } from '../Context/Context'
import Select from 'react-select';
import { AiTwotoneQuestionCircle } from "react-icons/ai";
// import Bank from '../Components/Images/bank.png';
import close from '../Components/Images/x-close.png';
// import user from '../Components/Images/user.png';

const SendBar = ({ accounts, currencyLogos }) => {

    const { handleSendBar, sendBar } = useContext(Context)
    const [method, setMethod] = useState('bank')
    const [toggle, setToggle] = useState(false)
    const [beneficiaries, setBeneficiaries] = useState([])
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        beneficiary: '',
        amount: ''
    })

    const [cryptoformData, setCryptoFormData] = useState({
        beneficiary: '',
        amount: ''
    })

    // const currencyOptions = accounts.map((account) => ({
    //     value: `bank-${account.currency}`,
    //     label: (
    //         <div className="flex items-center gap-2">
    //             <img
    //                 src={currencyLogos[account.currency]}
    //                 alt={account.currency}
    //                 className="w-5"
    //             />
    //             <span>{account.currency}</span>
    //             <span>{account.account_number}</span>
    //         </div>
    //     ),
    // }));

    // const currencyOptionsInCrypto = accounts.map((account) => ({
    //     value: `crypto-${account.currency}`,
    //     label: (
    //         <div className="flex items-center gap-2">
    //             <img
    //                 src={currencyLogos[account.currency]}
    //                 alt={account.currency}
    //                 className="w-5"
    //             />
    //             <span>{account.currency}</span>
    //             <span>{account.account_number}</span>
    //         </div>
    //     ),
    // }));

    const BeneficairyOptions = beneficiaries.map((ben) => ({
        value: `bank-${ben.id}`,
        label: ben.full_name
    }));

    const BeneficairyOptionsInCrypto = beneficiaries.map((ben) => ({
        value: `crypto-${ben.id}`,
        label: ben.full_name
    }));

    const fetchBeneficiary = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/beneficiary`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Token ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to fetch beneficiary');
            }

            return data;
        } catch (error) {
            console.error('Error fetching beneficiary:', error.message);
            return null;
        }
    };

    useEffect(() => {
        const getBeneficiaries = async () => {
            const data = await fetchBeneficiary();
            if (data) {
                setBeneficiaries(data);
            }
        };

        getBeneficiaries();
    }, []);

    const sendMoney = async (e) => {
        e.preventDefault()

        setIsSubmitting(true);

        try {
            const token = localStorage.getItem('token')

            const payload = {
                beneficiary: formData.beneficiary,
                amount: formData.amount.toString()
            };
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/payments/fiat`, {
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
                console.log('moneySent:', data);
                window.scrollTo(0, 0)
                handleSendBar()
                alert('Money sent!')
            }

        } catch (error) {
            console.error('Error while sending money:', error.message);
        } finally {
            setIsSubmitting(false);
        }
    }

    const sendMoneyInCrypto = async (e) => {
        e.preventDefault()

        setIsSubmitting(true);

        try {
            const token = localStorage.getItem('token')

            const payload = {
                beneficiary: cryptoformData.beneficiary,
                amount: cryptoformData.amount.toString()
            };
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/payments/crypto`, {
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
                console.log('moneySent:', data);
                window.scrollTo(0, 0)
                handleSendBar()
                alert('Money sent!')
            }

        } catch (error) {
            console.error('Error while sending money:', error.message);
        } finally {
            setIsSubmitting(false);
        }
    }

    
    const customStyles = {
        indicatorSeparator: () => ({
            display: 'none',
        }),
        control: (base) => ({
            ...base,
            padding: '4px',
            borderRadius: '8px',
            boxShadow: 'none',
            borderWidth: '1.5px'
        }),
        singleValue: (base) => ({
            ...base,
            color: '#78757A',
        }),
        menu: (base) => ({
            ...base,
            zIndex: 999,
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? '#4e22a0' : 'white',
            color: state.isFocused ? 'white' : 'black',
            padding: 10,
            cursor: 'pointer',
        }),
    };

    // const [sourceAcct, setSourceAcct] = useState()
    // const [sourceAcctInCrypto, setSourceAcctInCrypto] = useState()
    const [beneficiaryAcct, setBeneficiaryAcct] = useState()
    const [beneficiaryAcctInCrypto, setBeneficiaryAcctInCrypto] = useState()
    // const [countries, setCountries] = useState(country[0])
    // const [crypto, setCrypto] = useState(CryptocurrencyType[0])
    // const [networkType, setNetworkType] = useState(NetworkType[0])

    // const handleSourceAcctChange = (Option) => {
    //     setSourceAcct(Option)
    // }
    // const handleSourceAcctChangeInCrypto = (Option) => {
    //     setSourceAcctInCrypto(Option)
    // }
    const handleBeneficiaryAcctChange = (Option) => {
        setBeneficiaryAcct(Option);
        setFormData(prev => ({
            ...prev,
            beneficiary: Option.value.replace('bank-', '')
        }));
    };

    const handleBeneficiaryAcctChangeInCrypto = (Option) => {
        setBeneficiaryAcctInCrypto(Option);
        setCryptoFormData(prev => ({
            ...prev,
            beneficiary: Option.value.replace('crypto-', '')
        }));
    };

    // const handleCountries = (Option) => {
    //     setCountries(Option)
    // }
    // const handleCrypto = (Option) => {
    //     setCrypto(Option)
    // }
    // const handleNetworkType = (Option) => {
    //     setNetworkType(Option)
    // }

    return (
        <div className={`fixed top-0 h-screen bg-white lg:p-10 py-8 px-4 duration-700 text-black z-50 overflow-auto ${sendBar ? 'sm:w-[50%] lg:w-[40%] w-full right-0' : 'right-[-100%] w-[40%]'}`}>
            <div className='flex justify-between gap-5'>
                <div>
                    <h1 className='text-[20px] font-medium'>Send Money</h1>
                    <p className='text-[14px] font-normal text-[#525154]'>Easily send funds to anyone, anywhere, in just a few steps.</p>
                </div>
                <img
                    className='size-5 mt-1 cursor-pointer' src={close} alt=""
                    onClick={handleSendBar}
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
                    <div className='mt-7 text-[14px] font-normal text-[#525154]'>
                        {/* <div>
                            <label className='text-black/50' htmlFor="code">Source Account</label>
                            <div className='mt-1'>
                                <Select
                                    styles={customStyles}
                                    options={currencyOptions}
                                    value={sourceAcct}
                                    onChange={handleSourceAcctChange}
                                    isSearchable={false}
                                    className='rounded-m w-full outline-none'
                                />
                            </div>
                        </div> */}

                        <div className='mt-5'>
                            <label className='text-black/50' htmlFor="fullName">Beneficiary Account</label>
                            <div className='mt-1'>
                                <Select
                                    styles={customStyles}
                                    options={BeneficairyOptions}
                                    value={beneficiaryAcct}
                                    onChange={handleBeneficiaryAcctChange}
                                    isSearchable={false}
                                    className='rounded-m w-full outline-none'
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="amount">Amount</label>
                            <div className='flex items-center gap-2'>
                                <div className='flex items-center w-full relative'>
                                    <input
                                        className='border-[1.5px] border-black/20 py-[10px] pl-8 w-full outline-none rounded-md'
                                        placeholder='0'
                                        type="number"
                                        name="amount"
                                        value={formData.amount}
                                        onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))}
                                        id=""
                                        required
                                    />
                                    <p className='absolute ml-3 text-[20px] text-[#525154]'>$</p>
                                </div>
                                <button className='py-[10px] px-4 bg-[#F9F7FC] text-[#E8E1F5] rounded-md'>Max</button>
                            </div>
                        </div>
                        <div className='mt-7'>
                            <div className='flex gap-3 items-center text-black/70'>
                                {toggle ? (
                                    <img
                                        className='cursor-pointer'
                                        src={OnToggle}
                                        alt=""
                                        onClick={() => setToggle(false)}
                                    />

                                ) : (
                                    <img
                                        className='cursor-pointer'
                                        src={OffToggle}
                                        alt=""
                                        onClick={() => setToggle(true)}
                                    />
                                )}
                                <p className='text-[16px] font-medium text-[#525154]'>Convert to client's currency</p>
                            </div>
                        </div>
                        <div className='flex gap-2 mt-12'>
                            <button
                                className='p-3 rounded-lg w-[25%] border-[1.5px] border-black/10'
                                onClick={handleSendBar}
                            >
                                Cancel
                            </button>
                            <button
                                className={`p-3 rounded-lg text-white w-[80%] ${isSubmitting ? 'bg-[#E8E1F5]' : 'bg-[#531CB3]'}`}
                                onClick={(e) => {
                                    sendMoney(e)
                                }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    'Loading...'
                                ) : (
                                    'Send Money'
                                )}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='mt-7 text-[14px] font-normal text-[#525154]'>
                        {/* <div>
                            <label className='text-black/50' htmlFor="code">Source Account</label>
                            <div className='mt-1'>
                                <Select
                                    styles={customStyles}
                                    options={currencyOptionsInCrypto}
                                    value={sourceAcctInCrypto}
                                    onChange={handleSourceAcctChangeInCrypto}
                                    isSearchable={false}
                                    className='rounded-m w-full outline-none'
                                />
                            </div>
                        </div> */}
                        
                        <div className='mt-5'>
                            <label className='text-black/50' htmlFor="fullName">Beneficiary Account</label>
                            <div className='mt-1'>
                                <Select
                                    styles={customStyles}
                                    options={BeneficairyOptionsInCrypto}
                                    value={beneficiaryAcctInCrypto}
                                    onChange={handleBeneficiaryAcctChangeInCrypto}
                                    isSearchable={false}
                                    className='rounded-m w-full outline-none'
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className='text-black/50' htmlFor="amount">Amount</label>
                            <div className='flex items-center w-full relative'>
                                <input
                                    className='border-[1.5px] border-black/20 py-[10px] pl-8 w-full outline-none rounded-md'
                                    placeholder='0'
                                    type="number"
                                    name="amount"
                                    value={cryptoformData.amount}
                                    onChange={(e) => setCryptoFormData(prev => ({ ...prev, amount: e.target.value }))}
                                    id=""
                                    required
                                />
                                <AiTwotoneQuestionCircle className='ml-[-30px]' />
                                <p className='absolute ml-3 text-[20px] text-[#525154]'>$</p>
                            </div>
                        </div>
                        <div className='flex gap-2 mt-12'>
                            <button
                                className='p-3 rounded-lg w-[25%] border-[1.5px] border-black/10'
                                onClick={handleSendBar}
                            >
                                Cancel
                            </button>
                            <button
                                className={`p-3 rounded-lg text-white w-[80%] ${isSubmitting ? 'bg-[#E8E1F5]' : 'bg-[#531CB3]'}`}
                                onClick={(e) => {
                                    sendMoneyInCrypto(e)
                                }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    'Loading...'
                                ) : (
                                    'Send Money'
                                )}
                            </button>
                        </div>
                    </div>
                )}
        </div>
    )
}
export default SendBar