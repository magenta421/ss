import React from 'react'
import aaclogo from './images/AAClogo.png'
import './Homepage.css'
import webdev from './images/webdev.jpg'
import appdev from './images/appdev.jpg'
import iot from './images/iot.jpg'
import ml from './images/machinelearning.jpg'
import cv from './images/computervision.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import bg_video from './videos/video-1.mp4';
import {Autoplay} from 'swiper' 



SwiperCore.use([Pagination, Navigation, Autoplay]);

const SwiperCarousel = require('swiper').default;



function Homepage() {

    return (
        <>
        <section id="homepage">
            <video src={bg_video} className="bg_Video" loop autoPlay muted></video>
            <center><img src={aaclogo} className='aaclogo' alt="" /></center>
            <div className="pc-only-home-swiper">
                <center>
            <Swiper autoplay={{delay: 2000}} slidesPerView={3} spaceBetween={90} loop={true} pagination={{"clickable": false}}   centeredSlides={true} grabCursor={true} speed={500} className="mySwiper" > 
                <SwiperSlide><img src={webdev} className='carousel-homepage' alt="" /></SwiperSlide>
                <SwiperSlide><img src={appdev} className='carousel-homepage' alt="" /></SwiperSlide>
                <SwiperSlide><img src={ml} className='carousel-homepage' alt="" /></SwiperSlide>
                <SwiperSlide><img src={cv} className='carousel-homepage' alt="" /></SwiperSlide>
                <SwiperSlide><img src={iot} className='carousel-homepage' alt="" /></SwiperSlide>
            </Swiper>
                </center>
            </div>
            <div className="mobile-only-home-swiper">
                <center>
            <Swiper slidesPerView={1} spaceBetween={40} loop={true} pagination={{"clickable": false}}   centeredSlides={false}  speed={800} className="mySwiper" > 
                <SwiperSlide><img src={webdev} className='carousel-homepage' alt="" /></SwiperSlide>
                <SwiperSlide><img src={appdev} className='carousel-homepage' alt="" /></SwiperSlide>
                <SwiperSlide><img src={ml} className='carousel-homepage' alt="" /></SwiperSlide>
                <SwiperSlide><img src={cv} className='carousel-homepage' alt="" /></SwiperSlide>
                <SwiperSlide><img src={iot} className='carousel-homepage' alt="" /></SwiperSlide>
            </Swiper>
                </center>
            </div>
        </section>

        </>
    )
}

export default Homepage
