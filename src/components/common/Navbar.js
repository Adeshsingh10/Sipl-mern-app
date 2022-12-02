import React from 'react';
import { useSelector } from 'react-redux';
import { Link , useNavigate } from 'react-router-dom';

const Navbar = () => {
    const loggedUserDetail = useSelector((state) => { return state.login });
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("auth-token");
        navigate('/');

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/dashboard">Dashboard</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">About</Link>
                            </li>
                        </ul>
                        <li className="nav-item dropdown d-block" style={{ marginRight: "6%" }}>
                            <a className="dropdown-toggle" style={{ textDecoration: "none", color: "#fff" }} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {loggedUserDetail.name}
                            </a>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item">View Profile</li>
                                <li className="dropdown-item" onClick={logout}>logout</li>
                            </ul>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;