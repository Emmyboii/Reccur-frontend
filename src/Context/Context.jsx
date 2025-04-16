import React, { useState, createContext } from 'react'

export const Context = createContext(null);

const ContextProvider = (props) => {

    const [acctBar, setAcctBar] = useState(false)

    const handleAcctBar = () => {
        setAcctBar(!acctBar)
    }

    const contextValue = {
        acctBar,
        handleAcctBar
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider  