import React, { useContext, useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Context } from '../Context/Context'
import ConfirmConversion from '../Components/ConfirmConversion'

const CreateAcct = React.lazy(() => import('../Components/CreateAcct'));
const Overview = React.lazy(() => import('../Components/Overview'));

const Home = () => {

    const verified = JSON.parse(localStorage.getItem('userCreated'))

    const {
        acctBar,
        acctDetailsBar,
        sendBar,
        convertBar,
        liveRatesBar,
        overViewTransactionDetails
    } = useContext(Context)

    const [acct, setAcct] = useState([])


    const fetchAccount = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/account`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Token ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to fetch beneficiary');
            }

            return data;
        } catch (error) {
            console.error('Error fetching beneficiary:', error.message);
            return null;
        }
    };
    useEffect(() => {
        const getBeneficiaries = async () => {
            const data = await fetchAccount();
            if (data) {
                setAcct(data);
            }
        };

        getBeneficiaries();
    }, []);

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
                        {acct.length > 0 ? (
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
            {acct.length > 0 ? (
                <Navigate to="/home/overview" />
            ) : (
                <Navigate to="/home" />
            )}
        </div>
    )
}

export default Home