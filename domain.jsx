import React,{useState, useEffect} from 'react'
import './Domains.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import webdev from './images/webdev.jpg';
import appdev from './images/appdev.jpg';
import ml from './images/machinelearning.jpg';
import iot from './images/iot.jpg';
import cv from './images/computervision.jpg';


SwiperCore.use([Pagination]);



function Domains() {
    useEffect(() => {
        AOS.init({mirror: true});
        AOS.refresh();
      }, []);
    
      
    return (
       <> 
       <section id="webdev">
       <div className="container" data-aos="fade-right" data-aos-duration="1500" data-aos-mirror="true">  
       <center><h1 className='title'>WEB DEVELOPMENT</h1></center> <br />
       <p className='dom-intro'>Web development is the work involved in developing a Web site for the Internet 
       (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single 
       static page of plain text to complex web applications, electronic businesses, and social network services. A 
       more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web 
       design, Web content development,  client-side/server-side scripting, Web server and network security configuration, and e-commerce development.
       Front-end developers are responsible for behavior and visuals that run in the user browser, while back-end 
       developers deal with the servers.and full stack developers comprising both .
       </p> 
       <br/>
        <div className="row">
         <div className="col-lg-4">
            <img src={webdev} className="dom-img" alt="" /> 
         </div> 
        <div className="col-lg-8" >
            <div className="box"> <div className="container">
            <Swiper pagination={true} grabCursor={true} spaceBetween={30} className="mySwiper">
                <SwiperSlide>
                    <div className="inside-box">
                    <h5> MOTION UI</h5>
                    <p>Innovation web design is one more trend branch in the digital world.
                    From year to year startups keep 
                    paying more attention to user experience and invest fewer resources in the aesthetics. However, 
                    beautifully looking websites and apps have more chances to be noticed by potential users and become
                    viral. Motion UI makes digital products usage more intuitive and clear. The approach involves 
                    custom animation integration and CSS transitions powered by stand-alone libraries with numerous 
                    classes of animated elements.
                    </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="inside-box">
                    <p><b>:)</b> Life Span of Website is Just 3 Years</p>
                    <p>Digital space is continually evolving. From hardware to software, every aspect of the Internet
                         is bound to change in a few years, and its result affects the websites too.</p>
                    <p><b>:)</b> 47% of users expect websites to load within 2 seconds</p>
                    <p>Pay attention to website loading speeds – they must be under 2 seconds. Otherwise you run the risk
                        of frustrating your website visitors. Most people would rather use your competitor than stick 
                        around for slow loading speeds.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="inside-box">
                        <h5>Skills</h5>
                        <ul>
                            <li>Analytical skills</li>
                            <li>Basics of the Backend</li>
                            <li>HTML/CSS Skills</li>
                            <li>JavaScript Skills</li>
                            <li>Responsive Design Skills</li>
                            <li>Interpersonal Skills</li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="inside-box">
                        <h5>Tools</h5>
                        <ul>
                            <li>Sublime Text, VScode</li>
                            <li>Browser Developer Tools</li>
                            <li>Figma</li>
                            <li>Bootstrap</li>
                            <li>React JS</li>
                        </ul>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
            </div>
        </div>
        </div>
        </div>
        </section>
        <section id="appdev">
       <div className="container" data-aos="fade-left" data-aos-duration="1500" data-aos-mirror="true">  
       <center><h1 className='title'>APP DEVELOPMENT</h1></center> <br />
       <p className='dom-intro'>Mobile application development is the process of making software for smartphones and digital 
       assistants, most commonly for Android and iOS. The software can be preinstalled on the device, downloaded from a 
       mobile app store or accessed through a mobile web browser. The programming and markup languages used for this kind 
       of software development include Java, Swift, C# and HTML5.Mobile app development is rapidly growing. From retail, 
       telecommunications and e-commerce to insurance, healthcare and government, organizations across industries must meet 
       user expectations for real-time, convenient ways to conduct transactions and access information.
       Today, mobile devices—and the mobile applications that unlock their value—are the most popular way for people and 
       businesses to connect to the internet. To stay relevant, responsive and successful, organizations need to develop 
       the mobile applications that their customers, partners and employees demand.
       </p> <br />
        <div className="row">
         <div className="col-lg-4">
            <img src={appdev} className="dom-img" alt="" /> 
         </div> 
        <div className="col-lg-8">
            <div className="box"> <div className="container">
            <Swiper pagination={true} grabCursor={true} className="mySwiper">
                <SwiperSlide>
                    <div className="inside-box">
                    <h5> Blockchain Technology</h5>
                    <p>
                    The Blockchain technology provides decentralized app development solutions that boost transparency 
                    and eliminates unauthorized access and intermediates utilizing strong security protocols.
                    This is a perfect Android app development option particularly for the financial segments like banks, 
                    currency exchanges, and more. A survey by PWC shows that 84% of global companies are actively engaged 
                    in Blockchain technologies.
                    </p>
                    <ul>
                        <li>It deploys data for better performance if there is a network failure</li>
                        <li>Blockchain android apps are more secure and safer for data encryption.</li>
                    </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="inside-box">
                        <p>Artificial Intelligence (AI)
Since cloud computing has brought a massive amount of computing strength for each organization, creating AI models that augment regular procedures or perform tasks became easier. As per Accenture, now modern AI accessible can enhance productivity by up to 40%.The versatility of solutions is both the strength and weakness of AI development. You can apply them for automating different tasks, incorporating image identification, natural language processing, or data analytics.

                    </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="inside-box">
                        <h5>Skills</h5>
                        <ul>
                            <li>Product Management</li>
                            <li>Agile Methodologies and Scrum Management</li>
                            <li>User Interface and User Experience</li>
                            <li>Business analysis</li>
                            <li>QA and performance testing</li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="inside-box">
                        <h5>Tools</h5>
                        <ul>
                            <li>Android Studio(Platform for App Development)</li>
                            <li>Java</li>
                            <li>Kotlin</li>
                            <li>Swift, Objective-C</li>
                            <li>Buddy</li>
                            <li>GeneXus</li>
                            <li>Appypie</li>
                            <li>Flutter</li>
                        </ul>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
            </div>
        </div>
        </div>
        </div>
        </section>
        <section id="ml">
       <div className="container" data-aos="fade-right" data-aos-duration="1500" data-aos-mirror="true">  
       <center><h1 className='title'>MACHINE LEARNING</h1></center> <br />
       <p className='dom-intro'>
       Machine learning is the technique of creating systems that can “analyze” pre-existing data and “learn” patterns
        and make decisions/predictions/classifications or other tasks on similar data,with minimal human intervention. 
        An analogy can be made with how humans learn with experiences. Machine learning is a subset of artificial 
        intelligence . It focuses mainly on the designing of systems,thereby allowing them to learn and make predictions 
        based on some experience which is data in case of machines . It is a science of programming machines to think and 
        act like humans without being specifically programmed to we already use machine learning
        in our daily life without knowing it like Email Spam Recognition, Spell Check, Youtube Video Recommendation.
        </p> <br />
        <div className="row">
         <div className="col-lg-4">
            <img src={ml} className="dom-img" alt="" /> 
         </div> 
        <div className="col-lg-8">
            <div className="box"> <div className="container">
            <Swiper pagination={true} grabCursor={true} className="mySwiper">
                <SwiperSlide>
                    <div className="inside-box">
                    <h5>CONVERSATIONAL AI</h5>
                    <p>
                    Conversational AI is a technology where we speak to a chart bot or a pod simply and the bot then 
                    processes the voice after recognizing it could be a voice input or text input as well and then a 
                    certain task or a response is enabled or we can say it is triggered after we give the input so 
                    there are so many real-life examples one of them is Alexa then we have Siri Google Assistant or 
                    there are boards that are not wise enabled as well as you see a lot of chat bots on many websites 
                    on product landing pages where they will simply give you a response based on the input .
                    </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="inside-box">
                    <h5>AI is not going to become self-aware, rise up, and destroy humanity.</h5>
                    <p>
                    Most people create an image of AI in their mind after watching science fiction movies. They find 
                    this technology dangerous for humanity. We should not take these movies' stories as reality. Well, 
                    the machines can learn from data, but they are not so smart that they can consciously become aware 
                    like humans. For example, the car can’t change its context of operations if it is carrying a severe 
                    patient. So there is no possibility now for machines to dominate this world.
                    </p>
                    <p>Now conversational bots in the form of virtual assistants are enabling a new ground for customer 
                       engagement in a way where almost each organization</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="inside-box">
                        <h5>Skills</h5>
                        <ul>
                            <li>Computer Science Fundamentals and Programming</li>
                            <li>Probability and Statistics</li>
                            <li>Data Modeling and Evaluation</li>
                            <li>Applying Machine Learning Algorithms and Libraries</li>
                            <li>Software Engineering and System Design</li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="inside-box">
                        <h5>Top Machine Learning Algorithms</h5>
                        <ul>
                            <li>Naive Bayes Classifier Algorithm</li>
                            <li>K Means Clustering Algorithm</li>
                            <li>Support Vector Machine Algorithm</li>
                            <li>Support Vector Machine Algorithm</li>
                            <li>Linear Regression Algorithm</li>
                            <li>Decision Trees Algorithm</li>
                        </ul>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
            </div>
        </div>
        </div>
        </div>
        </section>
        <section id="iot">
       <div className="container" data-aos="fade-left" data-aos-duration="1500" data-aos-mirror="true">  
       <center><h1 className='title'>INTERNET OF THINGS</h1></center> <br />
       <p className='dom-intro'>
           The internet of things is influencing our lifestyle from the way we react to the way we behave . The Internet 
           of Things (IoT) describes the network of physical objects—“things”—that are embedded with sensors, software, 
           and other technologies for the purpose of connecting and exchanging data with other devices and systems over 
           the internet. These devices range from ordinary household objects to sophisticated industrial tools. With more 
           than 7 billion connected IoT devices today, experts are expecting this number to grow to 10 billion by 2020 
           and 22 billion by 2025 These sensors continuously emit data about the working stage of the devices . IoT 
           provides a platform for all these devices to dump their data  and a common language for all the devices to 
           communicate with each other thus helping us perform our day-to-day tasks with ease..
        </p> <br />
        <div className="row">
         <div className="col-lg-4">
            <img src={iot} className="dom-img" id="img-iot-dom" alt="" /> 
         </div> 
        <div className="col-lg-8">
            <div className="box"> <div className="container">
            <Swiper pagination={true} grabCursor={true} className="mySwiper">
                <SwiperSlide>
                    <div className="inside-box">
                    <h5>Li-Fi</h5>
                    <p>
                    Li-Fi, which stands for Light Fidelity, is a wireless communications technology that uses visible 
                    light to transmit data in real time. It’s up to 100 times faster than standard WiFi. While it’s 
                    yet to reach broad use in the market, Li-Fi has the potential to hugely impact technology and 
                    software development, especially for IoT solutions, across sectors. 
                    Li-Fi comprises multiple light bulbs that form a wireless network.The light of the Li-Fi doesn’t 
                    run through the partition, therefore, it is more protected and hacking is not possible.Li-Fi 
                    technology is much better than Wi-Fi in terms of speed, cost and security.
                    </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="inside-box">
                        <ul>
                            <li> One of the first internet-connected appliances was a Coke machine at Carnegie 
                                Mellon University. Sensors allowed students to see if the machine was stocked 
                                and whether drinks were cold.
                            </li>
                            <li>According to one report, more than ⅔ of companies investing in IoT can’t find the 
                                talent they need. And according to a study conducted by leading internet infrastructure 
                                company Cisco, ~80% of companies investing in IoT fear that they lack the talent and 
                                skills to make use of the data they’re collecting.
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="inside-box">
                        <h5>Skills</h5>
                        <ul>
                            <li>Business intelligence</li>
                            <li>Data security</li>
                            <li>Application design</li>
                            <li>IoT hardware</li>
                            <li>Networks</li>
                        </ul>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="inside-box">
                    <h5>Tools</h5> 
                <ul>
                    <li>Particle</li>
                    <li>BlynkIoT</li>
                    <li>Raspbian</li>
                    <li>Eclipse IoT</li>
                    <li>Node - red</li>
                </ul>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
            </div>
        </div>
        </div>
        </div>
        </section>
        <section id="cv">
       <div className="container" data-aos="fade-right" data-aos-duration="1500" data-aos-mirror="true">   
       <center><h1 className='title'>COMPUTER VISION</h1></center> <br />
       <p className='dom-intro'>
           Computer Vision is a field of study that focuses on developing techniques to help computers see and understand 
           the content of digital images ,such as photographs and videos. In the context of computer vision there are 
           various methods in which machines are able to understand and sense their surroundings. For example facial 
           recognition by object detection.
           (with object detection ,the machine is able to sense the elements of an image by extracting pixels and 
           running them on a machine learning or deep learning algorithm .) and interior designing by 3d scene 
           reconstruction (machine can reconstruct 3d objects from 2d imagery taken from multiple angles to create 
           as realistic of an image as possible).
        </p> <br />
        <div className="row">
         <div className="col-lg-4">
            <img src={cv} className="dom-img" alt="" /> 
         </div> 
        <div className="col-lg-8">
            <div className="box"> <div className="container">
            <Swiper pagination={true} grabCursor={true} className="mySwiper">
                <SwiperSlide>
                    <div className="inside-box">
                    <h5>Computer Vision for Developing Social Distancing Tools</h5>
                    <p>
                    Computer vision technology can play a vital role in this covid -19 scenario. It can be used to track 
                    people in a premise or a particular area to know whether they are following social distancing norms 
                    or not.
                    </p>
                    <p>
                    The social distancing tool is an application of object detection and tracking in real-time. In this 
                    case, to check the social distancing violation, we detect each person present in the video using a 
                    bounding box. Later we track the movement of each box in the frame and calculate the distance 
                    between them. If it detects any violation of the social distancing norm then it highlights those 
                    bounding boxes.
                    </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="inside-box">
                       <ol>
                           <li>Driving requires focus to avoid accidents, self-driving will enable to lessen the risk of accidents</li>
                           <li>In the oil industry, geologists feed a database with high-resolution images of rocks and their 
                            characteristics to classify the different carbonate rocks.</li>
                            <li>In the medical field, it assists doctors to detect cancer.</li>
                            <li>The fields most closely related to computer vision are image processing, image analysis and machine vision.</li>
                       </ol>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="inside-box">
                        <h5>Skills</h5>
                        <ul>
                            <li>Python syntax</li>
                            <li>Mathematical analysis</li>
                            <li>Linear algebra</li>
                            <li>OpenCV library</li>
                            <li>TensorFlow Deep Learning Framework</li>
                        </ul>
                        <p>Some tools used for Computer Vision are Open CV TensorFlow, CUDA, Aforge.Net, Simple CV</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="inside-box">
                        <h5>CV In Augmented Reality & Mixed Reality</h5>
                        <p>
                        Computer vision also plays an important role in augmented and mixed reality, the technology that enables 
                        computing devices such as smartphones, tablets and smart glasses to overlay and embed virtual objects on 
                        real world imagery. Using computer vision, AR gear detects objects in the real world in order to determine 
                        the locations on a device’s display to place a virtual object. For instance, computer vision algorithms can 
                        help AR applications detect planes such as tabletops, walls and floors, a very important part of 
                        establishing depth and dimensions and placing virtual objects in the physical world.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
            </div>
        </div>
        </div>
        </div>
        </section>

       </>
    )
}

export default Domains
