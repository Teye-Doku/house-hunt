import React from 'react';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import HotelList from '../HotelList/HotelList';
import Service from '../Services/Service';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <>
            <Nav></Nav>
            <Header></Header>
            <HotelList></HotelList>
            <Service></Service>
            <Footer></Footer>
        </>
    );
};

export default Home;