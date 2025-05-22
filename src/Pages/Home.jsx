import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Context } from '../Context/Context'
import ConfirmConversion from '../Components/ConfirmConversion'
import ViewDetailsBar from '../Components/ViewDetailsBar';

const CreateAcct = React.lazy(() => import('../Components/CreateAcct'));
const Overview = React.lazy(() => import('../Components/Overview'));

const Home = () => {

    const navigate = useNavigate();

    const {
        acctBar,
        acctDetailsBar,
        sendBar,
        convertBar,
        liveRatesBar,
        overViewTransactionDetails
    } = useContext(Context)

    const [acct, setAcct] = useState()
    const [loading, setLoading] = useState(true);

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
                throw new Error(data.message || 'Failed to fetch account');
            }
            return data;
        } catch (error) {
            console.error('Error fetching account:', error.message);
            return null;
        }
    };
    useEffect(() => {
        const getAccount = async () => {
            const data = await fetchAccount();
            if (data) {
                setAcct(data.length);
            }
            setLoading(false);
        };

        getAccount();
    }, []);

    useEffect(() => {
        if (!loading) {
            if (acct > 0) {
                navigate('/home/overview');
            } else {
                navigate('/home');
            }
        }
    }, [loading, acct, navigate]);

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
                {!loading && acct > 0 ? (
                    <Route path='overview' element={<Overview acct={acct} loading={loading} />} />
                ) : (
                    <Route path='/' element={<CreateAcct acct={acct} loading={loading} />} />
                )}
            </Routes>
            <ConfirmConversion />
            <ViewDetailsBar />
        </div>
    )
}

export default Home