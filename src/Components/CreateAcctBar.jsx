import React, { useContext, useState } from 'react'
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { BsCurrencyDollar } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'
import { Context } from '../Context/Context';

const CreateAcctBar = () => {
    const navigate = useNavigate();

    const { acctBar, handleAcctBar, setChecked } = useContext(Context)

    const customStyles = {
        indicatorSeparator: () => ({
            display: 'none',
        }),
        control: (base) => ({
            ...base,
            borderWidth: '1.5px',
            padding: '4px',
            boxShadow: 'none',
            borderRadius: '10px'
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

    const options = [
        {
            value: 'placeholder',
            label: (
                <div className="flex items-center gap-2">
                    <BsCurrencyDollar /> Choose Currency
                </div>
            ),
            isDisabled: true
        },
        {
            value: 'usd',
            label: (
                <div className="flex items-center gap-2">
                    <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                    USD
                </div>
            ),
        },
        {
            value: 'ngn',
            label: (
                <div className="flex items-center gap-2">
                    <img className='w-5' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
                    NGN
                </div>
            )
        }
    ];
    const [selectedCurrency, setSelectedCurrency] = useState(options[0]);
    const [output, setOutput] = useState("");

    const handleChange = (selectedOption) => {
        setSelectedCurrency(selectedOption);
        if (selectedOption.value === 'usd') {
            setOutput("Your USD account comes with a unique account number, making it easy to share with anyone sending you payments in USD. Enjoy seamless transactions without hidden fees or unfavorable exchange rates.");
        } else if (selectedOption.value === 'eur') {
            setOutput("Your NGN account comes with a unique account number, making it easy to share with anyone sending you payments in USD. Enjoy seamless transactions without hidden fees or unfavorable exchange rates.");
        } else {
            setOutput("");
        }
    };

    return (
        <div className={`fixed top-0 h-screen bg-white p-5 duration-700 ${acctBar ? 'w-[40%] right-0' : 'right-[-100%] w-[40%]'}`}>
            <div className='flex gap-2'>
                <div>
                    <h1 className='text-[19px] font-medium'>Create Account</h1>
                    <p className='text-black/60'>Open a bank account in your preferred country and start receiving payments effortlessly.</p>
                </div>
                <FaTimes
                    className='cursor-pointer mt-1'
                    onClick={handleAcctBar}
                />
            </div>
            <div className='mt-7'>
                <label htmlFor="code">Currency</label>
                <div className='mt-1'>
                    <Select
                        styles={customStyles}
                        options={options}
                        onChange={handleChange}
                        value={selectedCurrency}
                        isSearchable={false}
                        className='rounded-m w-full outline-none'
                    />
                    {output && <p className="mt-1 text-black/70">{output}</p>}
                </div>
                <div className='flex gap-2 mt-4'>
                    <button
                        className='p-3 rounded-lg w-[30%] border-[1.5px] border-black/10'
                        onClick={handleAcctBar}
                    >
                        Cancel
                    </button>
                    <button
                        className='p-3 rounded-lg bg-[#411c87] text-white w-[70%]'
                        onClick={() => {
                            setChecked(true)
                            window.scrollTo(0, 0)
                            navigate('/home/overview')
                            handleAcctBar()
                        }}
                    >
                        Create Account
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateAcctBar