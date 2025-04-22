import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Transactions from '../Components/Transactions'
import { Context } from '../Context/Context'

const Transaction = () => {

    const {
        viewTransactionDetails
    } = useContext(Context)

    useEffect(() => {
        if (viewTransactionDetails) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [viewTransactionDetails])

    return (
        <div>
            <Routes>
                <Route path='/transactions' element={<Transactions />} />
            </Routes>
        </div>
    )
}

export default Transaction