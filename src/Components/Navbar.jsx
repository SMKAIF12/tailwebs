import React from 'react'
import logo from '../assets/eGov-Foundation.png'
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light p-4 ps-5 pe-5">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="#">
                        <img src={logo} alt="eGov Logo" className="logo" />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mainNavbar">
                        <ul className="navbar-nav ms-auto d-flex flex-lg-row gap-4 me-3">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    About Us
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Item 1</a></li>
                                    <li><a className="dropdown-item" href="#">Item 2</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    Areas Of Work
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Item 1</a></li>
                                    <li><a className="dropdown-item" href="#">Item 2</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    Products & Solutions
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Item 1</a></li>
                                    <li><a className="dropdown-item" href="#">Item 2</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    Our Platform
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Item 1</a></li>
                                    <li><a className="dropdown-item" href="#">Item 2</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    Eco System
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Item 1</a></li>
                                    <li><a className="dropdown-item" href="#">Item 2</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                   Resources
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Item 1</a></li>
                                    <li><a className="dropdown-item" href="#">Item 2</a></li>
                                </ul>
                            </li>
                        </ul>

                        <i className="bi bi-search me-5"></i>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar