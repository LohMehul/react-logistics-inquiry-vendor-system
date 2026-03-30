import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("User logged out");
        navigate("/")
        localStorage.clear();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">

            <Link className="navbar-brand fw-bold" to="/dashboard">
                LOGO
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/inquiry">Inquiry</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/inquiry-list">Inquiry List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/vendor-quote-get">Vendors Quote Get</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/vendor-quote-actual">Vendor Actual Quotes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users">User</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/roles">Role</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/role-mapping">Role Mapping</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/branch-role-access">Branch role Access</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/reports">Reports</Link>
                    </li>
                </ul>

                <button className="btn btn-outline-light" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;