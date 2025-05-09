import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Context } from '../Context/Context'
import ConfirmConversion from '../Components/ConfirmConversion'

const CreateAcct = React.lazy(() => import('../Components/CreateAcct'));
const Overview = React.lazy(() => import('../Components/Overview'));

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
                <Route path='/' element={<CreateAcct />} />
                <Route path='overview' element={<Overview />} />
            </Routes>
            <ConfirmConversion />
        </div>
    )
}

export default Home