import React from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../images/logo.svg';
import './nav.css'

const Nav = () => {
    return (
        <div className="mh-header fixed-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#0">
                            <img src={logo} alt="" className="img-fluid"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#0">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#0">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#0">Service</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#0">Concerns</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#0">Event</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#0">Contact</a>
                                </li>
                                <li className="nav-item nav_btn">
                                    <a className="nav-link btn btn-primary" href="#0">Login</a>
                                </li>                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Nav;