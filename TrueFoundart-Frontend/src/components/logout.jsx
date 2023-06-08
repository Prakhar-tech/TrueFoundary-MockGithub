import React from 'react';
import { Link } from 'react-router-dom';
import '../style/logout.css';

function LogoutPage() {
    return (
        <div className="logout-container">
            <div className="logout-box">
                <h1>You are logged out</h1>
                <p>Thank you for using our application. You have been logged out successfully.</p>
                <p><Link className='github-button' to="/login">Click here to login again</Link></p>
            </div>
        </div>
    );
}

export default LogoutPage;

