import React from 'react';
import './HotelList.css';
import SingleHotel from './SingleHotel';

const hotels = [
    {
        id: 1,
        name: 'American House',
        place: 'Nasirabad H/S, Chattogram',
        bed: '3 Bedrooms',
        bathroom: '2 Bathroom',
        price: '$194',
        img: 'https://i.ibb.co/2kXfz4Z/hotel-1.png'
    },
    {
        id: 2,
        name: 'Washington Avenue',
        place: 'Nasirabad H/S, Chattogram',
        bed: '3 Bedrooms',
        bathroom: '2 Bathroom',
        price: '$194',
        img: 'https://i.ibb.co/1d3W2h2/hotel-2.png'
    },
    {
        id: 3,
        name: 'American House',
        place: 'Nasirabad H/S, Chattogram',
        bed: '3 Bedrooms',
        bathroom: '2 Bathroom',
        price: '$194',
        img: 'https://i.ibb.co/7RXNBDn/hotel-3.png'
    },
    {
        id: 4,
        name: 'Washington Avenue',
        place: 'Nasirabad H/S, Chattogram',
        bed: '3 Bedrooms',
        bathroom: '2 Bathroom',
        price: '$194',
        img: 'https://i.ibb.co/2kXfz4Z/hotel-1.png'
    },
    {
        id: 5,
        name: 'American House',
        place: 'Nasirabad H/S, Chattogram',
        bed: '3 Bedrooms',
        bathroom: '2 Bathroom',
        price: '$194',
        img: 'https://i.ibb.co/1d3W2h2/hotel-2.png'
    },
    {
        id: 6,
        name: 'Washington Avenue',
        place: 'Nasirabad H/S, Chattogram',
        bed: '3 Bedrooms',
        bathroom: '2 Bathroom',
        price: '$194',
        img: 'https://i.ibb.co/7RXNBDn/hotel-3.png'
    }
];

const HotelList = () => {
    return (
        <section className="hotel-list-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="headlines text-center">
                            <p>House Rent</p>
                            <h2>Discover the latest Rent <br/> available today</h2>
                        </div>
                        <div className="row">
                            {
                                hotels.map(hotel => <SingleHotel key={hotel.id} hotel={hotel}></SingleHotel>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HotelList;