import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateAcct from '../Components/CreateAcct'
import Overview from '../Components/Overview'

const Home = () => {
    return (
        <div>
            <Routes>
                <Route path='/home' element={<CreateAcct />} />
                <Route path='/home/overview' element={<Overview />} />
            </Routes>
        </div>
    )
}

export default Home