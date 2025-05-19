import React, { useContext, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Context } from '../Context/Context'
import ConfirmConversion from '../Components/ConfirmConversion'

const CreateAcct = React.lazy(() => import('../Components/CreateAcct'));
const Overview = React.lazy(() => import('../Components/Overview'));

const Home = () => {

    const verified = JSON.parse(localStorage.getItem('userCreated'))
    const acctCreated = JSON.parse(localStorage.getItem('AcctCreated'));

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
            {verified === 'verified' ? (
                <div>
                    <Routes>
                        {acctCreated === 'Yes' ? (
                            <Route path='overview' element={<Overview />} />
                        ) : (
                            <Route path='/' element={<CreateAcct />} />
                        )}
                    </Routes>
                    <ConfirmConversion />
                </div>
            ) : (
                <Navigate to="/dashboard" replace state={{ error: 'You need to fill in your KYC data to continue' }} />
            )}
            {acctCreated === 'Yes' ? (
                <Navigate to="/home/overview" replace state={{ error: 'You need to fill in your KYC data to continue' }} />
            ) : (
                <Navigate to="/home" replace state={{ error: 'You need to fill in your KYC data to continue' }} />

            )}
        </div>
    )
}

export default Home