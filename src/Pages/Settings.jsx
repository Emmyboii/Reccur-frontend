import React from 'react';
import { Route, Routes } from "react-router-dom"
import UserSettings from "../Components/UserSettings"

const Settings = () => {
    return (
        <Routes>
            <Route path="/settings" element={<UserSettings />} />
        </Routes>
    )
}

export default Settings