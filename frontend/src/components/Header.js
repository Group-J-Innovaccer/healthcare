import React from 'react';
import { logout } from '../api/auth'
import './Home.css';


const Header = ({ setIsAuthenticated }) => {

    const logoutUser = async () => {
        const res = await logout();
        if (res) {
            localStorage.clear()
            setIsAuthenticated(localStorage.getItem('isAuthenticated'))
        }
    }

    return (
        <div>
            <div className="topnav">
                <a className="active" href="/">DocEasy</a>
                <div className="topnav-right">
                    <a href="/about">About Us</a>
                {!localStorage.getItem('isAuthenticated') ? <><a href="/patientlogin">Patient Portal</a> <a href="/doctor_login">Doctor Portal</a></> : <a role="button" onClick={logoutUser}>Logout</a> }
                </div>
            </div>
        </div>
    )
}

export default Header;