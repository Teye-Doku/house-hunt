import React from 'react';
import Details from '../Details/Details';
import Nav from '../Nav/Nav';
import RentDetails from '../RentDetails/RentDetails';

const DetailsHome = () => {
    return (
        <>
            <Nav></Nav>
            <Details></Details>
            <RentDetails></RentDetails>
        </>
    );
};

export default DetailsHome;