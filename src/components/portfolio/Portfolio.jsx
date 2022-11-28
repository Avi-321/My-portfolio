import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './portfolio.css'
import portfolio1 from "../../assets/images/portfolio1.2.jpg"
import portfolio2 from "../../assets/images/portfolio1.jpg"
import portfolio3 from "../../assets/images/portfolio2.jpg"
import portfolio4 from "../../assets/images/portfolio3.jpg"

function Portfolio() {
    const portfolioData=[
        {
            imgurl:portfolio1,
            title:'React Portfolio',
            url:'#'
        },
        {
            imgurl:portfolio2,
            title:'NIT Exchange',
            url:'https://github.com/Avi-321/NitExchange-'
        },
        {
            imgurl:portfolio3,
            title:'Shiksha club',
            url:'https://avi-321.github.io/Siksha-project-/'
        },
        {
            imgurl:portfolio4,
            title:'School Management System',
            url:'https://cozy-cat-de90af.netlify.app'
        }
    ]
  return <section id='portfolio'>
    <Container>
       <Row>
        <Col className='portfolio_top mb-' lg='12'>
            <h6>Explore my work and give feedbacks</h6>
            <h2>Portfolio</h2>
        </Col>
        {
            portfolioData.map(function(item,index){
                return <Col lg='4' md='6' sm='6'>
                <div className="portfolio_card" key={index}>
                  <div className="portfolio_img">
                      <img src={item.imgurl} alt='' className='w-100'/>
                  </div>
                      <div className="portfolio_content">
                          <h5>{item.title}</h5>
                          <a href={item.url}>View demo</a>
                      </div>
                 </div>  
              </Col>
            })
        }



        
       </Row>
    </Container>
  </section>
}

export default Portfolio