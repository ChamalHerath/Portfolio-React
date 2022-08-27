import React, {Component, useRef, useState} from 'react';
import './testimonial.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination, Autoplay} from "swiper";

const testimonialData = [
    {
        id: 1,
        img: AVTR1,
        clientsName: 'Chamal Janadara',
        feedback: 'SAMPATH ADVERTISING was incorporated in the year 2016 as both indoor and outdoor advertising company in Sri Lanka'
    },
    {
        id: 2,
        img: AVTR2,
        clientsName: 'Chamal Janadara',
        feedback: 'SAMPATH ADVERTISING was incorporated in the year 2016 as both indoor and outdoor advertising company in Sri Lanka'
    },
    {
        id: 3,
        img: AVTR3,
        clientsName: 'Chamal Janadara',
        feedback: 'SAMPATH ADVERTISING was incorporated in the year 2016 as both indoor and outdoor advertising company in Sri Lanka'
    },
    {
        id: 4,
        img: AVTR4,
        clientsName: 'Chamal Janadara',
        feedback: 'SAMPATH ADVERTISING was incorporated in the year 2016 as both indoor and outdoor advertising company in Sri Lanka'
    },
]

class Testimonial extends Component {
    render() {
        return (
            <section id='testimonial'>
                <h5>Review from Clients</h5>
                <h2>Testimonial</h2>

                <Swiper className="container testimonial_container" pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                        modules={[Pagination, Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={40}
                        slidesPerView={1}>
                    {
                        testimonialData.map(({id, img, clientsName, feedback}) => {
                            return (
                                <SwiperSlide className="testimonial" key={id}>
                                    <div className="client_avatar">
                                        <img src={img} alt="Avatar"/>
                                    </div>
                                    <h5 className="client_name">{clientsName}</h5>
                                    <small className="client_review">
                                        {feedback}
                                    </small>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </section>
        );
    }
}

export default Testimonial;