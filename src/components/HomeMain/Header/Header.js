import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <section className="rent-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 mx-auto">
                        <h1>FIND YOUR HOUSE RENT</h1>
                        <div className="d-flex">
                            <input className="form-control" type="text" placeholder="Search......."/>
                            <button className="btn btn-primary default-btn">Find Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;