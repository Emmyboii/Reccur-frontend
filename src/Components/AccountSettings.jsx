import React, { useState } from 'react'
import M from '../Components/Images/m.png';
import Select from 'react-select';

const AccountSettings = (props) => {

    const { TransactionType } = props
    const [profilePics, setProfilePics] = useState(null)

    const handleProfilePics = (e) => {
        const selectedPics = e.target.files[0]
        if (selectedPics) {
            setProfilePics(selectedPics)
        }
    }

    const options = [
        {
            value: 'usa',
            label: (
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <img className='w-5 h-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
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
                        <img className='w-5 h-4' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
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
    const [location, setLocation] = useState(options[1])

    const handleLocation = (option) => {
        setLocation(option)
    }

    return (
        <div className={TransactionType === 'account' ? 'flex flex-col gap-10 lg:w-[80%]' : 'hidden'}>
            <div className='sa:flex justify-between'>
                <div className='flex flex-col gap-1'>
                    <p className='text-[18px] font-medium text-[#1D1C1F]'>Your information</p>
                    <p className='text-[14px] font-normal text-[#525154]'>View and update information related to  your account.</p>
                </div>
                <button className='text-[#531CB3] sa:block hidden text-[14px] font-medium bg-[#E8E1F5] px-4 py-[10px] rounded-lg'>Save changes</button>
            </div>
            <div className='flex sm:flex-row flex-col sm:items-center gap-5'>
                <div className='sm:w-[40%]'>
                    <p className='text-[14px] font-medium text-[#1D1C1F]'>Name</p>
                    <p className='text-[14px] font-normal text-[#525154]'>This will appear on receipts, invoices, and others...</p>
                </div>
                <input
                    type="text"
                    name=""
                    id=""
                    className='rounded-lg py-[10px] sm:w-[70%] px-[14px] border border-[#D2D0D6]'
                    placeholder='John Doe'
                />
            </div>
            <div className='flex sm:flex-row flex-col sm:items-center gap-5'>
                <div className='sm:w-[40%]'>
                    <p className='text-[14px] font-medium text-[#1D1C1F]'>Email</p>
                    <p className='text-[14px] font-normal text-[#525154]'>This is how we'll contact you or send you account account activities.</p>
                </div>
                <input
                    type="text"
                    name=""
                    id=""
                    className='rounded-lg py-[10px] sm:w-[70%] px-[14px] border border-[#D2D0D6]'
                    placeholder='john@doe.com'
                />
            </div>
            <div className='flex sm:flex-row flex-col sm:items-center gap-5'>
                <div className='sm:w-[40%]'>
                    <p className='text-[14px] font-medium text-[#1D1C1F]'>Profile picture</p>
                    <p className='text-[14px] font-normal text-[#525154]'>Upload a picture. 1MB max</p>
                </div>
                <div className='flex gap-6 sm:w-[70%]'>
                    {profilePics ? (
                        <img
                            src={URL.createObjectURL(profilePics)}
                            alt=""
                            className='rounded-[48px] size-12'
                        />
                    ) : (
                        <img src={M} alt="" />
                    )}
                    <label htmlFor="ProfilePics">
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
                    </label>
                </div>
            </div>
            <div className='flex sm:flex-row flex-col sm:items-center gap-5'>
                <div className='sm:w-[40%]'>
                    <p className='text-[14px] font-medium text-[#1D1C1F]'>Location</p>
                </div>
                <Select
                    styles={customStyles}
                    options={options}
                    value={location}
                    onChange={handleLocation}
                    isSearchable={false}
                    className='rounded-lg sm:w-[70%]'
                />
            </div>
            <button className='text-[#531CB3] text-[14px] font-medium bg-[#E8E1F5] px-4 py-[10px] rounded-lg'>Save changes</button>

        </div>
    )
}

export default AccountSettings