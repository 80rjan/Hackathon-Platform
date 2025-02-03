import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Auth from './LogIn-SignUp/Auth';
import UserDetails from "./Details/UserDetails/UserDetails";
import Navbar from "./Navigation/Navbar";
import Footer from "./Navigation/Footer";
import HackathonDetails from "./CvetanComp/HackathonDetails";
import { Outlet } from 'react-router-dom';  // Import the Outlet component
import Cvetan from "./CvetanComp/Cvetan";  // Hero component (Cvetan)
import AccountUser from "./DavorComp/accountUser/AccountUser";
import AccountOrganizator from "./DavorComp/accountOrganizator/AccountOrganizator";

function App() {
    return (
        <Routes>
            {/* Redirect from root to /auth */}
            <Route path="/" element={<Navigate to="/auth" />} />

            {/* Auth route */}
            <Route path="auth" element={<Auth />} />

            <Route path="account" element={<AccountOrganizator />} />

            {/* Main route */}
            <Route path="main" element={
                <>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </>
            }>
                <Route index element={<Cvetan />} />
                <Route path="hackathon" element={<HackathonDetails />} />
                <Route path="user" element={<UserDetails />} />
                {/*<Route path="account" element={<AccountUser />} />*/}
            </Route>
        </Routes>
    );
}

export default App;
