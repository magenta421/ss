import React from 'react'
import './resources.css';
import Ca from './images/webdevres.png'
import Cb from './images/appdevres.png'
import Cc from './images/mlres.png'
import Cd from './images/iotres.png'
import Ce from './images/cvres.png'
import {Card} from 'react-bootstrap'
import { SwiperSlide, Swiper } from 'swiper/react'
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import { Pagination, Navigation } from 'swiper/core'
import SwiperCore from 'swiper/core'
import 'aos/dist/aos.css'
import AOS from 'aos';



SwiperCore.use([Pagination, Navigation]);

const SwiperCarousel = require('swiper').default;


function resources() {

   

    return (
        <>
        <section id='resources'>
        <h1 className='title res' data-aos="fade-in" data-aos-duration="2500" data-aos-mirror="true"> <center>RESOURCES</center></h1>
        <div className="container pc" data-aos="fade-in" data-aos-duration="2500" data-aos-mirror="true">
        <div className="row">
        <div className="col-lg-4 resource-padding">
          <div className="box resources">
            <center><img className='res-ico' src={Ca}  alt="" /></center><br/>
            <ol>
              <li> <a href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" target="_blank" rel="noreferrer">Traversy Media</a> </li>
              <li> <a href="https://www.youtube.com/c/WebDevSimplified" target="_blank" rel="noreferrer">Webdev Simplified</a> </li>
              <li> <a href="https://www.w3schools.com/" target="_blank" rel="noreferrer">W3 Schools</a> </li>
              <li> <a href="https://www.udemy.com/topic/web-development/" target="_blank" rel="noreferrer">Udemy</a> </li>
              <li> <a href="https://developer.mozilla.org/en-US/docs/Learn" target="_blank" rel="noreferrer">MDN Web</a> </li>
              <li> <a href="https://www.coursera.org/courses?query=web%20development" target="_blank" rel="noreferrer">Coursera</a> </li>
            </ol>
          </div>
        </div>
        <div className="col-lg-4 resource-padding">
          <div className="box resources">
            <center><img className='res-ico' src={Cb}  alt="" /></center><br/>
            <ol>
              <li> <a href="https://www.coursera.org/search?query=app%20development" target="_blank" rel="noreferrer">Coursera</a></li>
              <li> <a href="https://www.pluralsight.com/browse/software-development/mobile-development" target="_blank" rel="noreferrer">Pluralsight</a></li>
              <li> <a href="https://training.mammothinteractive.com/" target="_blank" rel="noreferrer">Mammoth Interactive</a></li>
              <li> <a href="https://itunes.apple.com/in/course/developing-ios-11-apps-with-swift/id1309275316" target="_blank" rel="noreferrer">iTunesU</a></li>
              <li> <a href="https://www.udemy.com/courses/development/mobile-apps/" target="_blank" rel="noreferrer">Udemy</a></li>
              <li> <a href="https://www.raywenderlich.com/" target="_blank" rel="noreferrer">Ray Wenderlich</a></li>
            </ol>
          </div>
        </div>
        <div className="col-lg-4 resource-padding">
          <div className="box resources">
            <center><img className='res-ico' src={Cc}  alt="" /></center><br/>
            <ol>
              <li> <a href="https://www.simplilearn.com/artificial-intelligence-masters-program-training-course?utm_source=google&utm_medium=cpc&utm_term=simplilearn%20machine%20learning&utm_content=802977548-77390364864-487569527650&utm_device=c&utm_campaign=Search-Brand-Exact-IN-AllDevice-adgroup-Brand-Cat-ML&gclid=CjwKCAjwgviIBhBkEiwA10D2j4jjG8lbimPRKF9TohHjJ4NGw2_5r9adKxeQILSlrsFPzLR86cZdZBoCsG8QAvD_BwE" target="_blank" rel="noreferrer">Simplilearn</a></li>
              <li> <a href="https://www.coursera.org/learn/machine-learning?utm_source=gg&utm_medium=sem&utm_campaign=07-StanfordML-IN&utm_content=07-StanfordML-IN&campaignid=1950458127&adgroupid=71501032500&device=c&keyword=coursera%20machine%20learning&matchtype=e&network=g&devicemodel=&adpostion=&creativeid=351294671923&hide_mobile_promo&gclid=CjwKCAjwgviIBhBkEiwA10D2j7cQjQ2oH7lE5EbY1R96ZzDm-GwcJLMrb_8jy_muGoH8FoMjEUnTohoCQboQAvD_BwE" target="_blank" rel="noreferrer">Coursera</a></li>
              <li> <a href="https://openai.com/" target="_blank" rel="noreferrer">Open AI</a></li>
              <li> <a href="https://www.edx.org/course/machine-learning" target="_blank" rel="noreferrer">edX</a></li>
              <li> <a href="https://www.fast.ai/" target="_blank" rel="noreferrer">Fast.ai</a></li> 
              <li> <a href="https://deepmind.com/learning-resources/deep-learning-lecture-series-2020" target="_blank" rel="noreferrer">Deepmind</a></li>
            </ol>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-4 resource-padding">
          <div className="box resources">
            <center><img className='res-ico' src={Ce}  alt=""/></center><br/>
            <ol>
              <li> <a href="https://www.pyimagesearch.com/" target="_blank" rel="noreferrer">PyImage Search</a></li>
              <li> <a href="https://www.reddit.com/r/computervision/" target="_blank" rel="noreferrer">Reditt</a></li>
              <li> <a href="https://www.kdnuggets.com/2016/08/seven-steps-understanding-computer-vision.html" target="_blank" rel="noreferrer">KDNuggets</a></li>
              <li> <a href="https://zbigatron.com/" target="_blank" rel="noreferrer">Zbigatron</a></li>
              <li> <a href="https://www.analyticsvidhya.com/blog/2020/01/computer-vision-learning-path-2020/" target="_blank" rel="noreferrer">Analytics Vidya</a></li>
              <li> <a href="https://hackernoon.com/computer-vision-is-solving-problems-that-werent-even-on-our-list-ybfu3ys2" target="_blank" rel="noreferrer">Hackernoon</a></li>
            </ol>
          </div>
        </div>
        <div className="col-lg-4 resource-padding">
          <div className="box resources">
            <center><img className='res-ico' src={Cd}  alt=""/></center><br/>
            <ol>
              <li> <a href="https://iot.stackexchange.com/" target="_blank" rel="noreferrer">Stack Exchange IoT</a></li>
              <li> <a href="https://www.theinternetofthings.eu/" target="_blank" rel="noreferrer">IoT Council</a></li>
              <li> <a href="https://www.iotone.com/" target="_blank" rel="noreferrer">IoT One</a></li>
              <li> <a href="https://www.edx.org/course/introduction-to-the-internet-of-things-iot" target="_blank" rel="noreferrer">edX</a></li>
              <li> <a href="https://www.coursera.org/courses?query=iot" target="_blank" rel="noreferrer">Coursera</a></li>
              <li> <a href="https://www.netacad.com/courses/iot/introduction-iot" target="_blank" rel="noreferrer">Cisco Netcad</a></li> 
            </ol>
          </div>
        </div>
        <div className="col-lg-2 "></div>
      </div>
    </div> 
    </section>
        <div className="mob-only container">
            <Swiper slidesPerView={1}  spaceBetween={8} loop={true} pagination={{"clickable": false}} grabCursor={true}   centeredSlides={true}  speed={1000} className="mySwiper">
        <SwiperSlide>
             <Card style={{ width: '18rem' }} className='shadow  mb-5 bg-white'>
              <Card.Body>
                <center><img src={Ca} className='res-ico' alt="" /></center>
                 <br />
                 <ol>
              <li> <a href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" target="_blank" rel="noreferrer">Traversy Media</a> </li>
              <li> <a href="https://www.youtube.com/c/WebDevSimplified" target="_blank" rel="noreferrer">Webdev Simplified</a> </li>
              <li> <a href="https://www.w3schools.com/" target="_blank" rel="noreferrer">W3 Schools</a> </li>
              <li> <a href="https://www.udemy.com/topic/web-development/" target="_blank" rel="noreferrer">Udemy</a> </li>
              <li> <a href="https://developer.mozilla.org/en-US/docs/Learn" target="_blank" rel="noreferrer">MDN Web</a> </li>
              <li> <a href="https://www.coursera.org/courses?query=web%20development" target="_blank" rel="noreferrer">Coursera</a> </li>
            </ol>               
              </Card.Body>
             </Card>
           </SwiperSlide>
           <SwiperSlide>
             <Card style={{ width: '18rem' }} className='shadow  mb-5 bg-white rounded'>
              <Card.Body>
              <center><img src={Cb} className='res-ico' alt="" /></center>
                <br />
                <ol>
              <li> <a href="https://www.coursera.org/search?query=app%20development" target="_blank" rel="noreferrer">Coursera</a></li>
              <li> <a href="https://www.pluralsight.com/browse/software-development/mobile-development" target="_blank" rel="noreferrer">Pluralsight</a></li>
              <li> <a href="https://training.mammothinteractive.com/" target="_blank" rel="noreferrer">Mammoth Interactive</a></li>
              <li> <a href="https://itunes.apple.com/in/course/developing-ios-11-apps-with-swift/id1309275316" target="_blank" rel="noreferrer">iTunesU</a></li>
              <li> <a href="https://www.udemy.com/courses/development/mobile-apps/" target="_blank" rel="noreferrer">Udemy</a></li>
              <li> <a href="https://www.raywenderlich.com/" target="_blank" rel="noreferrer">Ray Wenderlich</a></li>
            </ol>    
                
              </Card.Body>
             </Card>
           </SwiperSlide>
           <SwiperSlide>
             <Card style={{ width: '18rem' }} className='shadow  mb-5 bg-white rounded'>
              <Card.Body>
                <center><img src={Cc} className='res-ico' alt="" /></center>
                <br />
                <ol>
              <li> <a href="https://www.simplilearn.com/artificial-intelligence-masters-program-training-course?utm_source=google&utm_medium=cpc&utm_term=simplilearn%20machine%20learning&utm_content=802977548-77390364864-487569527650&utm_device=c&utm_campaign=Search-Brand-Exact-IN-AllDevice-adgroup-Brand-Cat-ML&gclid=CjwKCAjwgviIBhBkEiwA10D2j4jjG8lbimPRKF9TohHjJ4NGw2_5r9adKxeQILSlrsFPzLR86cZdZBoCsG8QAvD_BwE" target="_blank" rel="noreferrer">Simplilearn</a></li>
              <li> <a href="https://www.coursera.org/learn/machine-learning?utm_source=gg&utm_medium=sem&utm_campaign=07-StanfordML-IN&utm_content=07-StanfordML-IN&campaignid=1950458127&adgroupid=71501032500&device=c&keyword=coursera%20machine%20learning&matchtype=e&network=g&devicemodel=&adpostion=&creativeid=351294671923&hide_mobile_promo&gclid=CjwKCAjwgviIBhBkEiwA10D2j7cQjQ2oH7lE5EbY1R96ZzDm-GwcJLMrb_8jy_muGoH8FoMjEUnTohoCQboQAvD_BwE" target="_blank" rel="noreferrer">Coursera</a></li>
              <li> <a href="https://openai.com/" target="_blank" rel="noreferrer">Open AI</a></li>
              <li> <a href="https://www.edx.org/course/machine-learning" target="_blank" rel="noreferrer">edX</a></li>
              <li> <a href="https://www.fast.ai/" target="_blank" rel="noreferrer">Fast.ai</a></li> 
              <li> <a href="https://deepmind.com/learning-resources/deep-learning-lecture-series-2020" target="_blank" rel="noreferrer">Deepmind</a></li>
            </ol>  
              </Card.Body>
             </Card>
           </SwiperSlide>
           <SwiperSlide>
             <Card style={{ width: '18rem' }} className='shadow  mb-5 bg-white rounded'>
              <Card.Body>
                <center><img src={Ce} className='res-ico' alt="" /></center>
                <br />
                <ol>
              <li> <a href="https://iot.stackexchange.com/" target="_blank" rel="noreferrer">Stack Exchange IoT</a></li>
              <li> <a href="https://www.theinternetofthings.eu/" target="_blank" rel="noreferrer">IoT Council</a></li>
              <li> <a href="https://www.iotone.com/" target="_blank" rel="noreferrer">IoT One</a></li>
              <li> <a href="https://www.edx.org/course/introduction-to-the-internet-of-things-iot" target="_blank" rel="noreferrer">edX</a></li>
              <li> <a href="https://www.coursera.org/courses?query=iot" target="_blank" rel="noreferrer">Coursera</a></li>
              <li> <a href="https://www.netacad.com/courses/iot/introduction-iot" target="_blank" rel="noreferrer">Cisco Netcad</a></li> 
            </ol>                
              </Card.Body>
             </Card>
           </SwiperSlide>
           <SwiperSlide>
             <Card style={{ width: '18rem' }} className='shadow  mb-5 bg-white rounded'>
              <Card.Body>
                <center><img src={Cd} className='res-ico' alt="" /></center>
                <br /> 
                <ol>
              <li> <a href="https://www.pyimagesearch.com/" target="_blank" rel="noreferrer">PyImage Search</a></li>
              <li> <a href="https://www.reddit.com/r/computervision/" target="_blank" rel="noreferrer">Reditt</a></li>
              <li> <a href="https://www.kdnuggets.com/2016/08/seven-steps-understanding-computer-vision.html" target="_blank" rel="noreferrer">KDNuggets</a></li>
              <li> <a href="https://zbigatron.com/" target="_blank" rel="noreferrer">Zbigatron</a></li>
              <li> <a href="https://www.analyticsvidhya.com/blog/2020/01/computer-vision-learning-path-2020/" target="_blank" rel="noreferrer">Analytics Vidya</a></li>
              <li> <a href="https://hackernoon.com/computer-vision-is-solving-problems-that-werent-even-on-our-list-ybfu3ys2" target="_blank" rel="noreferrer">Hackernoon</a></li>
            </ol>                
              </Card.Body>
             </Card>
           </SwiperSlide>
           </Swiper>           
        </div>

        </>
    )
}

export default resources
