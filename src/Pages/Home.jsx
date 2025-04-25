import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateAcct from '../Components/CreateAcct'
import Overview from '../Components/Overview'
import { Context } from '../Context/Context'
import ConfirmConversion from '../Components/ConfirmConversion'

const Home = () => {

    const {
        acctBar,
        acctDetailsBar,
        sendBar,
        convertBar,
        liveRatesBar,
        overViewTransactionDetails
    } = useContext(Context)

    useEffect(() => {
        if (acctBar || acctDetailsBar || sendBar || convertBar || liveRatesBar || overViewTransactionDetails) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [acctBar, acctDetailsBar, sendBar, convertBar, liveRatesBar, overViewTransactionDetails])

    return (
        <div>
            <Routes>
                <Route path='/home' element={<CreateAcct />} />
                <Route path='/home/overview' element={<Overview />} />
            </Routes>
            <ConfirmConversion />
        </div>
    )
}

export default Home