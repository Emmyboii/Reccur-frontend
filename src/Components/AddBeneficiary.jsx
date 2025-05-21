import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context/Context';
import Search from '../Components/Images/search.png'
import Bell from '../Components/Images/bell.png'
import Add from '../Components/Images/AddBtn.png'
import BeneficiaryBar from './BeneficiaryBar';
import BeneficiaryInfo from './BeneficiaryInfo';
import ViewDetailsBar from './ViewDetailsBar';
import EditProfileBar from './EditProfileBar';
import DeleteProfile from './DeleteProfile';

const AddBeneficiary = () => {

    const {
        handleBeneficiaryBar,
        beneficiaryBar,
        viewDetails,
        handleViewDetails,
        profileEdit,
        handleProfileEdit
    } = useContext(Context)

    const [beneficiaries, setBeneficiaries] = useState([])

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

    return (
        <div>
            <div
                className={`w-full top-0 h-[200%] text-[#1D1C1F] absolute z-30 ${beneficiaryBar || viewDetails || profileEdit ? 'bg-black/10' : 'hidden'}`}
                onClick={beneficiaryBar ? handleBeneficiaryBar : viewDetails ? handleViewDetails : profileEdit ? handleProfileEdit : null}
            ></div>
            <div className='flex items-start justify-between md:p-10 py-10 px-4'>
                <div>
                    <p className='text-[28px] font-semibold'>Beneficiaries</p>
                    <p className='text-[16px] font-normal text-[#525154]'>View and manage your beneficiaries here.</p>
                </div>
                <div className='flex md:items-center items-start gap-9'>
                    <img className='lg:block hidden cursor-pointer' src={Search} alt="" />
                    <img className='lg:block hidden cursor-pointer' src={Bell} alt="" />
                    <img className='sp:w-8 w-[30px] cursor-pointer' onClick={handleBeneficiaryBar} src={Add} alt="" />
                </div>
            </div>
            <div className={beneficiaries.length > 0 ? 'hidden' : 'flex flex-col items-center gap-9 bg-[#F9F7FC] lg:mx-10 mx-4 px-2 py-16 rounded-md border-2 border-black/50 border-dashed'}>
                <div className='max-w-[500px]'>
                    <p className='text-center font-medium text-[20px]'>Manage your beneficiaries</p>
                    <p className='text-center text-[14px] font-normal text-[#525154] mt-1'>Manage your beneficiaries in one place. Save and organize their details to enable seamless payments and keep track of your transfer history with ease.</p>
                </div>
                <button
                    className="bg-white border-[1.4px] text-[14px] font-medium text-[#525154] border-black/10 text-black/70 p-3 rounded-lg"
                    onClick={handleBeneficiaryBar}
                >
                    Add your first beneficiary
                </button>
            </div>
            <BeneficiaryBar />
            <div className={beneficiaries.length > 0 ? 'block' : 'hidden'}>
                <BeneficiaryInfo />
                <ViewDetailsBar />
                <EditProfileBar />
                <DeleteProfile />
            </div>
        </div>
    )
}

export default AddBeneficiary