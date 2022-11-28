import React, {useRef,useEffect} from 'react'
import { Col, Container, Row } from 'reactstrap'
import "./mysection.css"
import { init } from 'ityped'
import coding from "../../assets/lottie/coding.json"
import Lottie from "lottie-react"

function Mysection() {
  const textRef=useRef()
  useEffect(()=>{
    init(textRef.current,{
        backDelay:1500,
        showCursor:true,
        strings:[
            ' Abhishek Kumar Shah',
            ' a Web developer',
            ' an Anime lover',
            ' Competitive Coder'
        ]
    })
  },[])
  const handleClick=e=>{
    e.preventDefault()
    const targetAttr=e.target.getAttribute('href')
    const location=document.querySelector(targetAttr).offsetTop
    window.scrollTo({
      left:0,
      top: location-70,
    })
  }
    return (
    
    <section className='my_section' id='home'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="mycontent">
                    <p className='mb-3'></p>
                    <h5 className='mb-4'>Hi, </h5>
                    <h2 className='mytitle mb-4'>I'm <span ref={textRef}> </span></h2>
                    <p>
                        I am an creative MERN stack web developer and a programmer
                         . A quick learner with a self-learning attitude. I love to learn and explore new technologies and am Passionate about Problem Solving.   
                    </p>
                    <div className="social_link">
                              <span className='S_icon'><a href='https://www.facebook.com/profile.php?id=100010055460070'><i class="ri-facebook-fill"></i></a></span>  
                              <span className='S_icon'><a href='https://www.instagram.com/avisekh_shah/'><i class="ri-instagram-line"></i></a></span>
                              <span className='S_icon'><a href='https://github.com/Avi-321'><i class="ri-github-fill"></i></a></span>
                              <span className='S_icon'><a href='https://www.linkedin.com/in/abhishek-shah-03a8b91ab/'><i class="ri-linkedin-box-fill"></i></a></span>  
                            
                            </div>
                        <div className="mybtns mb-4 d-flex align-items-center gap-4">
                            <button className='btn hire_btn' onClick={handleClick}><a href="#contact">Hire Me</a></button>
                            <button className='btn'><a href='abhishekResume.pdf' download='abhishekResume.pdf'>Resume</a></button>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                   <div className="myimg">
                    <Lottie animationData={coding}/>
                   </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Mysection