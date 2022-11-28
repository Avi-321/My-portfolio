import React from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import myimg from "../../assets/images/myimg.jpg"
import "./about.css"
import Education from './Education'
import Interest from './Interest'
import Skills from './Skills'

function About() {
    const [aboutfilter,setAboutfilter]=useState('ABOUT')
  return (
    <section id="about">
        <Container>
            <Row>
                <Col lg='12' className='mb-5'><h2>About Me</h2></Col>
                <Col lg='4' md='3'>
                    <div className='about_btns d-flex flex-column align-items-center'>
                        <button className={`about_btn ${aboutfilter === 'ABOUT'?'about_btn-active':''}`} onClick={function(){
                            return setAboutfilter('ABOUT')
                        }}> About Me
                        </button>
                        <button className={`about_btn ${aboutfilter === 'EDUCATION'?'about_btn-active':''}`} onClick={function(){
                            return setAboutfilter('EDUCATION')
                        }}> Education
                        </button>
                        <button className={`about_btn ${aboutfilter === 'SKILLS'?'about_btn-active':''}`} onClick={function(){
                            return setAboutfilter('SKILLS')
                        }}> Skills
                        </button>
                        <button className={`about_btn ${aboutfilter === 'INTEREST'?'about_btn-active':''}`} onClick={function(){
                            return setAboutfilter('INTEREST')
                        }}> Interests
                        </button>
                    </div>
                </Col>
                <Col lg='8' md='9'>
                    {
                        aboutfilter ==='ABOUT' && <div className='about_content_wrap d-flex gap-5'>
                        <div className="about_img w-25">
                        <img src={myimg} alt="" className='about_img w-100 '/>
                        </div>
                        <div className="about_content w-75">
                            <h2>I'm Abhishek Kumar Shah</h2>
                            <p>I am a passionate web developer and a  programmer. A quick learner with a
                                self-learning attitude. I love to learn and explore new technologies and am 
                                passionate about provlem solving. Love almost all the stacks of software engineering. 
                            </p>
                            <div className="social_link">
                              <h6 className='mb-3'>Connect with me...</h6>
                              <span className='S_icon'><a href='https://www.facebook.com/profile.php?id=100010055460070'><i class="ri-facebook-fill"></i></a></span>  
                              <span className='S_icon'><a href='https://www.instagram.com/avisekh_shah/'><i class="ri-instagram-line"></i></a></span>
                              <span className='S_icon'><a href='https://github.com/Avi-321'><i class="ri-github-fill"></i></a></span>
                              <span className='S_icon'><a href='https://www.linkedin.com/in/abhishek-shah-03a8b91ab/'><i class="ri-linkedin-box-fill"></i></a></span>  
                            
                            </div>
                        </div>

                        
                    </div>
                    }
                    {
                        aboutfilter ==='EDUCATION' && <Education/>
                    }
                    {
                        aboutfilter ==='SKILLS' && <Skills/>
                    }
                    {
                        aboutfilter ==='INTEREST' && <Interest/>
                    }

                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About