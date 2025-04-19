import React from 'react'
import Beneficiaries from '../Components/Beneficiaries';
import { Route, Routes } from 'react-router-dom';

const Beneficiary = () => {
    return (
        <div>
            <Routes>
                <Route path='/beneficiaries' element={<Beneficiaries />} />
            </Routes>

        </div>
    )
}

export default Beneficiary