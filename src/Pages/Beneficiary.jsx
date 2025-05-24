import React, { useContext, useEffect } from 'react'
import AddBeneficiaries from '../Components/AddBeneficiary';
import { Context } from '../Context/Context';

const Beneficiary = ({beneficiaries}) => {

    const {
        viewDetails,
        profileEdit,
        deleteProfile,
        beneficiaryBar
    } = useContext(Context)

    useEffect(() => {
        if (viewDetails || profileEdit || deleteProfile || beneficiaryBar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [viewDetails, profileEdit, deleteProfile, beneficiaryBar])

    return <AddBeneficiaries beneficiaries={beneficiaries} />;
}

export default Beneficiary