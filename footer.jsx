import React from 'react'
import './footer.css'
import start from './images/navlogo.png'
import {FiMapPin, FiPhone} from 'react-icons/fi'
import {IoMdMail} from 'react-icons/io'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {IoLogoInstagram} from 'react-icons/io'
import {AiOutlineYoutube} from 'react-icons/ai'




function footer() {
    return (
        <>
        <br />
        <footer id='footer'>
        <div className="pc-view-footer">
            <div className="row">
                <div className="col-lg-4">
                    <img src={start} className='start-footer' alt="" />
                </div>
                <div className="col-lg-4 vaksfdnv">
                    <div className="row-lg-4"><FiMapPin className='icon-footer map' />
                    <p className="footer-details"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Room no.3614, Block 3, GRIET, <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bachupally, Kukatpally, Hyderabad-500090.</p>
                    </div> 
                    <div className="row-lg-4">
                        <FiPhone className='icon-footer phone' /> <p className='footer-details phn-num'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+91 9014534883
                        </p>
                    </div>
                    <div className="row-lg-4">
                    <IoMdMail className='icon-footer mail-foot' /><p className='footer-details mail-id-foot'><a className='j324423n' href="mailto:aacgriet@gmail.com"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aacgriet.org@gmail.com</a></p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row-lg-6">
                        <div className="footer-nav "> <a href="#">Home</a> | <a href="#about">About</a> | <a href="#webdev">Domains</a> | <a href="#resources">Resources</a></div>
                    </div>
                    <div className="row-lg-6" id="foot-icon">
                     <a href="https://www.linkedin.com/school/advanced-academic-center/"> <FaLinkedin className='footer-icons-links'/> </a>
                     <a href="https://www.instagram.com/aac_grietofficial/?utm_medium=copy_link"> <IoLogoInstagram className='footer-icons-links'/> </a>
                     <a href="https://github.com/advanced-academic-center"> <FaGithub className='footer-icons-links' /> </a>
                     <a href="https://www.youtube.com/channel/UCqpWtDtDLxBLy8yJZO_-eBw/featured"> <AiOutlineYoutube className='footer-icons-links' /> </a>
                    </div>
                </div> 
                <h4 className='aac73'>Designed and Developed by Team 21AAC73.</h4> 
            </div>
        </div>
        <div className="mobile-footer"> 
            <div className="container">
                <div className="footer-logo-start">
                    <center><img src={start} width={200} alt="" /></center>
                </div>
                <FiMapPin className='icon-footerm sdffdssfs' /><p className='fadwefefdc'> Room no.3614, Block 3, GRIET, <br /> Bachupally, Kukatpally, Hyderabad-500090.</p>
                <FiPhone className='icon-footerm' /> <p className='kdsndkns'>+91 9014534883</p>
                 <IoMdMail className='icon-footerm sdfvfsd' /> <p className='aitsura'><a className='j324423n' href="mailto:aacgriet@gmail.com">aacgriet.org@gmail.com</a></p>
                <br />
                <center className='sdcfkwdjk'>
                <a href="#">Home</a> | <a href="#about">About</a> | <a href="#webdev">Domains</a> | <a href="#resources">Resources</a>  
                </center> <br />
                <center className='ghjk'> <br />
                  <a href="https://www.linkedin.com/school/advanced-academic-center/"> <FaLinkedin className='footer-icons-links-sjscd'/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </a>
                  <a href="https://www.instagram.com/aac_grietofficial/?utm_medium=copy_link"> <IoLogoInstagram className='footer-icons-links-sjscd'/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </a>
                  <a href="https://github.com/advanced-academic-center"> <FaGithub className='footer-icons-links-sjscd' />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </a>
                  <a href="https://www.youtube.com/channel/UCqpWtDtDLxBLy8yJZO_-eBw/featured"> <AiOutlineYoutube className='footer-icons-links-sjscd' /></a>
                </center> <br /> <br /> 
                <center className='dskdnksw'>Designed and Developed by Team 21AAC73.</center>

            </div>
        </div>
        </footer>
        </>
    )
}

export default footer
