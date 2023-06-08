import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Routes, Outlet } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import CreateRepository from './components/Create-Repo';
import './style/navbar.css';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import LogoutPage from './components/logout';

function App() {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken') || JSON.stringify(cookies.accessToken);
    setAccessToken(storedToken ? JSON.parse(storedToken) : null);
  }, []);

  /* ----------------------------- To handle login ---------------------------- */
  const handleLogin = (newToken) => {
    setAccessToken(cookies.accessToken);
    console.log("inside handle login accessToken", accessToken);
    setCookie('accessToken', newToken, { path: '/' });
    navigate('/home');
  };

  /* ---------------------------- To Handle Logout ---------------------------- */
  const handleLogout = () => {
    setAccessToken(null);
    removeCookie('accessToken', { path: '/' });
    localStorage.removeItem('accessToken');
    navigate('/', { replace: true })

  };

  /* ---------------------------------- UI/UX --------------------------------- */
  console.log("inside app accessToken", accessToken);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="navbar-link">Home</Link>
          </li>

          {/* Only display Create Repository link if accessToken is present in local storage */}
          {(
            <li>
              <Link to="/create-repository" className="navbar-link">Create Repository</Link>
            </li>
          )}

          {/* Only display Login link if accessToken is not present in local storage */}
          {!accessToken && (
            <li>
              <Link to="/login" className="navbar-link">Login</Link>
            </li>
          )}

          {/* Display Logout link if accessToken is present in local storage */}
          {accessToken && (
            <li>
              <Link to="/logout" className="navbar-link" onClick={handleLogout}>Logout</Link>
            </li>
          )}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        {!accessToken && <Route path="/login" element={<Login onLogin={handleLogin} />} />}
        {!accessToken && <Route path="/logout" element={<LogoutPage />} />}
        {<Route path="/create-repository" element={<CreateRepository />} />}
      </Routes>
    </div>
  );
}

export default App;
