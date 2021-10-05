import React from 'react';
import './Footer.css';
import locations from '../../../images/locations.svg'

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 px-0">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="d-flex img_top">
                                    <img src={locations} alt="" className="img-fluid"/>
                                    <h4> H#340 (4th Floor), Road #24, <br/> New DOHS, Mohakhali, Dhaka, Bangladesh <br/> Phone: 018XXXXXXXX <br/> E-mail: info@company.com</h4>
                                </div>
                            </div>
                            <div className="col-md-7 px-0">
                                <div className="row">
                                    <div className="col-md-4">
                                        <ul className="list-unstyled nav_item">
                                            <li>Company</li>
                                            <li>About</li>
                                            <li>Site Map</li>
                                            <li>Support Center</li>
                                            <li>Terms Conditions</li>
                                            <li>Submit Listing</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <ul className="list-unstyled nav_item">
                                            <li>Quick Links</li>
                                            <li>Quick Links</li>
                                            <li>Rentals</li>
                                            <li>Sales</li>
                                            <li>Contact</li>
                                            <li>Terms Conditions</li>
                                        </ul>
                                    </div>  
                                    <div className="col-md-4">
                                        <ul className="list-unstyled nav_item">
                                            <li>About us</li>
                                            <li className="extra">We are the top real estate agency in Sydney, with agents available to answer any question 24/7.</li>
                                        </ul>
                                        {/* <div className="footer-social">
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;