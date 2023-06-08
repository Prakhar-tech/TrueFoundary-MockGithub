import React from "react";
import "../style/Home.css";

export default function Home() {
    return (
        <div className="home-container">
            <h1 className="home-heading">Welcome to Mock GitHub APP</h1>
            <p className="home-paragraph">
                This is an example application that demonstrates GitHub authentication and repository creation using the GitHub API.
            </p>
        </div>
    );
}

//add some styling css to this component