import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import { Pagination, Navigation } from 'swiper/core'
import SwiperCore from 'swiper/core'
import './ourteam.css'
import {Card} from 'react-bootstrap'
import jithin from './images/Team/Jithin.png'
import harsha from './images/Team/Harsha.png'
import suhas from './images/Team/suhas.png'
import deepshika from './images/Team/Deepshika.png'
import nikhil from './images/Team/Nikhil.png'
import sriram from './images/Team/Sriram.png'
import nik from './images/Team/nik1.jpeg'
import jith from './images/Team/jithin1.jpeg'
import deep from './images/Team/deepshika1.jpeg'
import suh from './images/Team/suhas1.jpeg'
import bread from './images/Team/brownbread1.jpeg'
import harshini from './images/Team/harsha1.jpeg'




SwiperCore.use([Pagination, Navigation]);

const SwiperCarousel = require('swiper').default;


 
function ourteam() {
    return (
        <>
        <section id="ourteam1321212"  >
        <h1 className='title dasn132'><center> OUR TEAM </center></h1>
        <center>
          <div className="pc-ourteam container"> 
         <Swiper slidesPerView={2}  spaceBetween={70} loop={true} pagination={{"clickable": false}} grabCursor={true}   centeredSlides={false}  speed={1000} className="mySwiper">
            <SwiperSlide>
             <Card style={{ width: '22rem' }} className='shadow  mb-5 bg-white rounded'>
              <Card.Img variant="top" src={nik} />
              <Card.Body>
                <Card.Title>Nikhil Chitte</Card.Title> 
                <Card.Text>
                 React - Front End Developer 
                </Card.Text>
              </Card.Body>
             </Card>
           </SwiperSlide>
           <SwiperSlide>
             <Card style={{ width: '22rem' }} className='shadow  mb-5 bg-white rounded'>
              <Card.Img variant="top" src={harshini} />
              <Card.Body>
                <Card.Title>Harshavardini Kyatam</Card.Title>
                <Card.Text>
                  UI/UX Designer, Content Writer
                </Card.Text>
              </Card.Body>
             </Card>
           </SwiperSlide>
           <SwiperSlide>
             <Card style={{ width: '22rem' }} className='shadow  mb-5 bg-white rounded'>
              <Card.Img variant="top" src={deep} />
              <Card.Body>
                <Card.Title>Deepshika Reddy</Card.Title>
                <Card.Text>
                  UI/UX Designer
                </Card.Text>
              </Card.Body>
             </Card>
           </SwiperSlide>   
           <SwiperSlide>
             <Card style={{ width: '22rem' }} className='shadow  mb-5 bg-white rounded'>
              <Card.Img variant="top" src={jith} />
              <Card.Body>
                <Card.Title>Jithin Gunnu</Card.Title>
                <Card.Text>
                  Front End - Animations 
                </Card.Text>
              </Card.Body>
             </Card>
           </SwiperSlide>
           <SwiperSlide>
             <Card style={{ width: '22rem' }} className='shadow  mb-5 bg-white rounded'>
              <Card.Img variant="top" src={bread} />
              <Card.Body>
                <Card.Title>Sriram</Card.Title>
                <Card.Text>
                  Front End Developer   
                </Card.Text>
              </Card.Body>
             </Card>
           </SwiperSlide>
           <SwiperSlide>
             <Card style={{ width: '22rem' }} className='shadow  mb-5 bg-white rounded'>
              <Card.Img variant="top" src={suh} />
              <Card.Body>
                <Card.Title>Suhas Bheemisetty</Card.Title>
                <Card.Text>
                Creative Director 
                </Card.Text>
              </Card.Body>
             </Card>
           </SwiperSlide>
        </Swiper> 
        </div>
        </center>
        <div className="mobile-ourteam">
          <Swiper slidesPerView={2}  spaceBetween={220} loop={true} pagination={{"clickable": false}} grabCursor={true}   centeredSlides={false}  speed={1000} className="mySwiper">
            <SwiperSlide>
            <Card style={{ width: '15rem' }} className='shadow  mb-5 bg-white rounded'>
              <Card.Img variant="top" src={nikhil} alt='Nikhil Chitte' />
              <Card.Body>
                <Card.Title>Nikhil Chitte</Card.Title>
                <Card.Text>
                  React - Front End Developer   
                </Card.Text>
              </Card.Body>
             </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card style={{ width: '15rem' }} className='shadow  mb-5 bg-white rounded'>
              <Card.Img variant="top" src={deepshika} />
              <Card.Body>
                <Card.Title>Deepshika Reddy</Card.Title>
                <Card.Text>
                  UI/UX Designer  
                </Card.Text>
              </Card.Body>
             </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card style={{ width: '15rem' }} className='shadow  mb-5 bg-white rounded'>
              <Card.Img variant="top" src={harsha} />
              <Card.Body>
                <Card.Title>Harshavardini</Card.Title>
                <Card.Text>
                  UI/UX Designer
                </Card.Text>
              </Card.Body>
             </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card style={{ width: '15rem' }} className='shadow  mb-5 bg-white rounded'>
              <Card.Img variant="top" src={jithin} />
              <Card.Body>
                <Card.Title>Jithin Gunnu</Card.Title>
                <Card.Text>
                  Front End - Animations     
                </Card.Text>
              </Card.Body> 
             </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card style={{ width: '15rem' }} className='shadow  mb-5 bg-white rounded'>
              <Card.Img variant="top" src={sriram} />
              <Card.Body>
                <Card.Title>Sriram</Card.Title>
                <Card.Text>
                  Front End Developer   
                </Card.Text>
              </Card.Body>
             </Card>
            </SwiperSlide>
            <SwiperSlide>
             <Card style={{ width: '15rem' }} className='shadow  mb-5 bg-white rounded'>
              <Card.Img variant="top" src={suhas} />
              <Card.Body>
                <Card.Title>Suhas Bheemisetty</Card.Title>
                <Card.Text>
                Creative Director 
                </Card.Text>
              </Card.Body>
             </Card>
           </SwiperSlide>
          </Swiper>
        </div>  
        </section>
        </>
    )
}

export default ourteam
