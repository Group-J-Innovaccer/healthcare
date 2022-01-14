import './Home.css';
import React from 'react';
const Header = () => {
    return (
        <div>
            <div className="topnav">
                <a className="active" href="/home">DocEasy</a>
                <div className="topnav-right">
                    <a href="/about">About Us</a>
                    <a href="/patientlogin">Patient Portal</a>
                    <a href="/doctorlogin">Doctor Portal</a>
                </div>
            </div>
        </div>
    )
}

export default Header;