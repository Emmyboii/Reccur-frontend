import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateInvoice from '../Components/CreateInvoice'
import { Context } from '../Context/Context'

const Invoice = () => {
    const {
        createInvoice,
        viewInvoice,
        deleteInvoice
    } = useContext(Context)

    useEffect(() => {
        if (createInvoice || viewInvoice || deleteInvoice) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [createInvoice, viewInvoice, deleteInvoice])

    return (
        <div>
            <Routes>
                <Route path='/invoices' element={<CreateInvoice />} />
            </Routes>
        </div>
    )
}

export default Invoice