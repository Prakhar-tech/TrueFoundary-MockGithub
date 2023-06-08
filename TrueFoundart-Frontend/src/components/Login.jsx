import React from "react";
import "../style/Login.css";

const Login = () => {
    const handleLogin = async () => {
        try {

            window.location.assign("https://truefoundary-task-production.up.railway.app/auth/github");


        } catch (error) {
            // Handle error
            console.log(error);
        }
    };

    return (
        <div className="login-container">
            <h1 className="login-heading">Login with GitHub</h1>
            <button className="login-button" onClick={handleLogin}>Login with GitHub</button>
        </div>

    );
};

export default Login;
