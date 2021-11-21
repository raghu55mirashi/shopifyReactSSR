import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import SignIn from './components/signin';
import Dashboard from './components/dashboard';

const RoutesBuilder = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/signin' element={<SignIn />} />
        </Routes>
    )
}

export default RoutesBuilder;
