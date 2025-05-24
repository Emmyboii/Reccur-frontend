import React, { useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Context } from '../Context/Context'
import ConfirmConversion from '../Components/ConfirmConversion'
import ViewDetailsBar from '../Components/ViewDetailsBar';

const CreateAcct = React.lazy(() => import('../Components/CreateAcct'));
const Overview = React.lazy(() => import('../Components/Overview'));

const Home = ({ loading, acct }) => {

    const navigate = useNavigate();

    const {
        acctBar,
        acctDetailsBar,
        sendBar,
        convertBar,
        liveRatesBar,
        overViewTransactionDetails
    } = useContext(Context)


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