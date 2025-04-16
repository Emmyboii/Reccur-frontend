import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateAcct from '../Components/CreateAcct'

const Home = () => {
    return (
        <div>
            <Routes>
                <Route path='/home' element={<CreateAcct />} />
            </Routes>
        </div>
    )
}

export default Home