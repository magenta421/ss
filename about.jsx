import React from 'react'
import Typical from 'react-typical'
import './about.css'
import laba from './images/aaclab.jpeg'
import labb from './images/aaclaba.jpeg'



function about() {
    return (
        <>
        <div className='container about' id="about">
           <center>
               <h1 className='title'>ADVANCED ACADEMIC CENTER</h1> 
               <h6>THE EPICENTER FOR CREATIVE SOLUTIONS</h6>
           </center> <br />
           <div className="row">
               <div className="col-lg-6">
                   <p className='fdssdfsd'>Advanced Academic Centre as the name suggests, is a centre that gives scope to knowledge and innovation, beyond just academics. It gives you a platform to make your idea an accomplishment. With mentors guiding you at each step, learn about the newest technologies and find your fields of interest. </p>
                </div>
               <div className="col-lg-2"></div>
               <div className="col-lg-4">
                  <center> <img src={laba} className='about-img' alt="" /> </center>
               </div>
           </div>
           <div className="row">
               <div className="col-lg-4 order-lg-3"> <br /> <br /> <br /> 
                 <center>  <img src={labb} className='about-img img-21489' alt="" /> </center>
               </div>
               <div className="col-lg-2 order-lg-2"></div>
               <div className="col-lg-6 order-lg-1"><h2>
               <center> <Typical loop={Infinity} wrapper="b" className='typing-animation' steps={[
                    'What is START?', 2000,
                    "How to 'START' in AAC?", 2000,
                    'What are the domains in AAC?', 2000
                ]} /> </center></h2>
                <p className='box container'>  START - Student-guide To AAC’s Research and Training is a brief overview into AAC that is created by students just like you. Through this website, we aim to reach out to all the freshers joining in GRIET and guide them through every aspect of AAC for better understanding. Although the official website of AAC is concised, we felt the need to lend you a little help in choosing your domain from the domains that AAC offers. </p> 
               </div>
           </div>
        </div>
        </>
    )
}


export default about 
