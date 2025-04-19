import React, { useContext, useEffect } from 'react'
import AddBeneficiaries from '../Components/AddBeneficiary';
import { Route, Routes } from 'react-router-dom';
import { Context } from '../Context/Context';

const Beneficiary = () => {

    const {
        viewDetails,
        profileEdit,
        deleteProfile
    } = useContext(Context)

    useEffect(() => {
        if (viewDetails || profileEdit || deleteProfile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [viewDetails, profileEdit, deleteProfile])

    return (
        <div>
            <Routes>
                <Route path='/beneficiaries' element={<AddBeneficiaries />} />
            </Routes>

        </div>
    )
}

export default Beneficiary