import React, { useContext, useEffect } from 'react'
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

    return <Transactions />
}

export default Transaction