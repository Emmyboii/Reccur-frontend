import React, { useContext, useState } from 'react'
import Select from 'react-select';
import currencyCountryMap from './CurrencyCountryMap ';
import { useNavigate } from 'react-router-dom';
import close from '../Components/Images/x-close.png';
import { Context } from '../Context/Context';

const CreateAcctBar = () => {
    const navigate = useNavigate();

    const { acctBar, handleAcctBar, setChecked } = useContext(Context)

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        currency: ''
    })

    const userAcct = localStorage.getItem('UserAcct')

    const createAccount = async (e) => {
        e.preventDefault()

        setIsSubmitting(true);

        try {
            const token = localStorage.getItem('token')
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/account`, {
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
                console.log('currencyAdded:', data);
                localStorage.setItem('AcctCreated', 'Yes')
                navigate('/home/overview')
                setChecked(true)
                window.scrollTo(0, 0)
                handleAcctBar()
            }

        } catch (error) {
            console.error('Error during currency addition:', error.message);
        } finally {
            setIsSubmitting(false);
        }
    }

    const allowedCurrencies = ['USD', 'EUR'];

    const currencyOptions = Object.keys(currencyCountryMap)
        .filter(code => allowedCurrencies.includes(code))
        .map(code => {
            const countryCode = currencyCountryMap[code];
            return {
                value: code,
                label: (
                    <div className="flex items-center gap-2">
                        <img
                            src={`https://flagcdn.com/w40/${countryCode}.png`}
                            alt={code}
                            className="w-[20px] h-4 rounded-sm"
                        />
                        {code}
                    </div>
                )
            };
        });


    const customStyles = {
        indicatorSeparator: () => ({
            display: 'none',
        }),
        control: (base) => ({
            ...base,
            borderWidth: '1.5px',
            padding: '4px',
            boxShadow: 'none',
            borderRadius: '10px',
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

    const [selectedCurrency, setSelectedCurrency] = useState(null);
    const [output, setOutput] = useState("");

    const handleChange = (selectedOption) => {
        setSelectedCurrency(selectedOption);
        if (selectedOption.value) {
            setOutput(`Your ${selectedOption.value} account comes with a unique account number, making it easy to share with anyone sending you payments in ${selectedOption.value}. Enjoy seamless transactions without hidden fees or unfavorable exchange rates.`);
        }
        setFormData(prev => ({
            ...prev,
            currency: selectedOption.value
        }))
    };

    return (
        <div>
            {userAcct === 2 && (
                <div className={`fixed lg:top-0 top-[60px] h-screen bg-white z-50 lg:p-10 py-8 px-4 duration-700 ${acctBar ? 'sm:w-[50%] lg:w-[40%] w-full right-0' : 'right-[-100%] w-[40%]'}`}>
                    <div className='flex justify-between gap-2'>
                        <div>
                            <h1 className='text-[20px] font-medium text-[#1D1C1F]'>Create Account</h1>
                            <p className='text-[#525154] text-[14px]'>Open a bank account in your preferred country and start receiving payments effortlessly.</p>
                        </div>
                        <img
                            className='size-5 mt-1 cursor-pointer' src={close} alt=""
                            onClick={handleAcctBar}
                        />
                    </div>
                    <div className='mt-7 font-medium text-[14px]'>
                        <label htmlFor="code">Currency</label>
                        <div className='mt-1'>
                            <Select
                                styles={customStyles}
                                options={currencyOptions}
                                onChange={handleChange}
                                value={selectedCurrency}
                                isSearchable={true}
                                className='rounded-m w-full outline-none'
                            />
                            {output && <p className="mt-1 text-black/70">{output}</p>}
                        </div>
                        <div className='flex gap-2 mt-4'>
                            <button
                                className='p-3 rounded-lg w-[25%] border-[1.5px] border-black/10'
                                onClick={handleAcctBar}
                            >
                                Cancel
                            </button>
                            <button
                                className={`p-[10px] px-4 rounded-lg text-white w-[80%] ${isSubmitting ? 'bg-[#E8E1F5]' : 'bg-[#531CB3]'}`}
                                onClick={(e) => {
                                    createAccount(e)
                                }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    'Loading...'
                                ) : (
                                    'Create Account'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CreateAcctBar