import React, { useState, createContext } from 'react'

export const Context = createContext(null);

const ContextProvider = (props) => {

    const [acctBar, setAcctBar] = useState(false)
    const [acctDetailsBar, setAcctDetailsBar] = useState(false)
    const [convertBar, setConvertBar] = useState(false)
    const [liveRatesBar, setLiveRatesBar] = useState(false)
    const [confirmConversion, setConfirmConversion] = useState(false)
    const [sendBar, setSendBar] = useState(false)
    const [viewDetails, setViewDetails] = useState(false)
    const [profileEdit, setProfileEdit] = useState(false)
    const [deleteProfile, setDeleteProfile] = useState(false)
    const [beneficiaryBar, setBeneficiaryBar] = useState(false)
    const [beneficiaryAdded, setBeneficiaryAdded] = useState(false)
    const [checked, setChecked] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)
    const [checked4, setChecked4] = useState(false)
    const [checked5, setChecked5] = useState(false)
    const [checked6, setChecked6] = useState(false)

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
    const handleProfileEdit = () => {
        setProfileEdit(!profileEdit)
    }
    const handleDeleteProfile = () => {
        setDeleteProfile(!deleteProfile)
    }
    const handleBeneficiaryBar = () => {
        setBeneficiaryBar(!beneficiaryBar)
    }
    const handleAddedBeneficiaries = () => {
        setBeneficiaryAdded(!beneficiaryAdded)
    }
    const handleConversion = () => {
        setConfirmConversion(!confirmConversion)
    }
    const handleLiveRates = () => {
        setLiveRatesBar(!liveRatesBar)
    }

    const contextValue = {
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
        handleViewDetails,
        viewDetails,
        profileEdit,
        handleProfileEdit,
        deleteProfile,
        handleDeleteProfile
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider  