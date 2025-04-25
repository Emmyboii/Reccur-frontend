import React, { useState, createContext } from 'react'

export const Context = createContext(null);

const ContextProvider = (props) => {

    const [sideBar, setSideBar] = useState(false)
    const [acctBar, setAcctBar] = useState(false)
    const [acctDetailsBar, setAcctDetailsBar] = useState(false)
    const [convertBar, setConvertBar] = useState(false)
    const [liveRatesBar, setLiveRatesBar] = useState(false)
    const [confirmConversion, setConfirmConversion] = useState(false)
    const [sendBar, setSendBar] = useState(false)
    const [viewDetails, setViewDetails] = useState(false)
    const [viewInvoice, setViewInvoice] = useState(false)
    const [viewTransactionDetails, setViewTransactionDetails] = useState(false)
    const [overViewTransactionDetails, setOverViewViewTransactionDetails] = useState(false)
    const [profileEdit, setProfileEdit] = useState(false)
    const [deleteProfile, setDeleteProfile] = useState(false)
    const [deleteInvoice, setDeleteInvoice] = useState(false)
    const [beneficiaryBar, setBeneficiaryBar] = useState(false)
    const [beneficiaryAdded, setBeneficiaryAdded] = useState(false)
    const [createInvoice, setCreateInvoice] = useState(false)
    const [invoiceAdded, setInvoiceAdded] = useState(false)
    const [checked, setChecked] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)
    const [checked4, setChecked4] = useState(false)
    const [checked5, setChecked5] = useState(false)
    const [checked6, setChecked6] = useState(false)
    const [noDelete, setNoDelete] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [selectedInvoice, setSelectedInvoice] = useState(null)
    const [selectedTransactionDetails, setSelectedTransactionDetails] = useState(null)
    const [TransactionType, setTransactionType] = useState('account')

    const handleSideBar = () => {
        setSideBar(!sideBar)
    }
    const handleAcctBar = () => {
        setAcctBar(!acctBar)
    }
    const handleAcctDetailsBar = () => {
        setAcctDetailsBar(!acctDetailsBar)
    }
    const handleConvertBar = () => {
        setConvertBar(!convertBar)
    }
    const handleSendBar = () => {
        setSendBar(!sendBar)
    }
    const handleViewDetails = () => {
        setViewDetails(!viewDetails)
    }
    const handleViewInvoice = () => {
        setViewInvoice(!viewInvoice)
    }
    const handleViewTransactionDetails = () => {
        setViewTransactionDetails(!viewTransactionDetails)
    }
    const handleOverViewTransactionDetails = () => {
        setOverViewViewTransactionDetails(!overViewTransactionDetails)
    }
    const handleProfileEdit = () => {
        setProfileEdit(!profileEdit)
    }
    const handleDeleteProfile = () => {
        setDeleteProfile(!deleteProfile)
    }
    const handleDeleteInvoice = () => {
        setDeleteInvoice(!deleteInvoice)
    }
    const handleBeneficiaryBar = () => {
        setBeneficiaryBar(!beneficiaryBar)
    }
    const handleAddedBeneficiaries = () => {
        setBeneficiaryAdded(!beneficiaryAdded)
    }
    const handleAddedInvoice = () => {
        setInvoiceAdded(!invoiceAdded)
    }
    const handleCreateInvoice = () => {
        setCreateInvoice(!createInvoice)
    }
    const handleConversion = () => {
        setConfirmConversion(!confirmConversion)
    }
    const handleLiveRates = () => {
        setLiveRatesBar(!liveRatesBar)
    }
    const handleNoDelete = () => {
        setNoDelete(true)
        setTimeout(() => {
            if (!noDelete) {
                setNoDelete(false)
            }
        }, 3000);
    }
    const handleDeleted = () => {
        setDeleted(!deleted)
    }


    const contextValue = {
        handleSideBar,
        sideBar,
        setSideBar,
        acctBar,
        handleAcctBar,
        checked,
        setChecked,
        checked2,
        setChecked2,
        checked3,
        setChecked3,
        checked4,
        setChecked4,
        checked5,
        setChecked5,
        checked6,
        setChecked6,
        handleAcctDetailsBar,
        acctDetailsBar,
        handleSendBar,
        sendBar,
        handleConvertBar,
        convertBar,
        handleConversion,
        confirmConversion,
        liveRatesBar,
        handleLiveRates,
        handleBeneficiaryBar,
        beneficiaryBar,
        handleAddedBeneficiaries,
        beneficiaryAdded,
        handleAddedInvoice,
        invoiceAdded,
        handleViewDetails,
        viewDetails,
        profileEdit,
        handleProfileEdit,
        deleteProfile,
        handleDeleteProfile,
        deleteInvoice,
        handleDeleteInvoice,
        createInvoice,
        handleCreateInvoice,
        handleViewInvoice,
        viewInvoice,
        selectedInvoice,
        setSelectedInvoice,
        viewTransactionDetails,
        handleViewTransactionDetails,
        overViewTransactionDetails,
        handleOverViewTransactionDetails,
        selectedTransactionDetails,
        setSelectedTransactionDetails,
        handleNoDelete,
        handleDeleted,
        noDelete,
        deleted,
        setDeleted,
        setTransactionType,
        TransactionType
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider  