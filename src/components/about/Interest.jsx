import React from 'react'
import './interest.css'
function Interest() {
  return (
    <div className="interest_container d-flex align-items-center flex-wrap justify-content-between">
        <div className="interest_item">
           <InterestItem title={"Competitive programming"} title2={"I like to challenge my mind a lot while competing in online coding contests, pushing the rank and having great coding sessions excites me the most."} 
            />  
        </div>

        <div className="interest_item">
           <InterestItem title={"Content Writing"} title2={"Apart from being a tech enthusiast and a code writer, i also love to write contents and bringing my ideas from my mind on the paper."} 
            />  
        </div>

        <div className="interest_item">
           <InterestItem title={"Web Surfing"} title2={"I am a technology geek. I love to explore the internet and collect intresting informations"} 
            />  
        </div>

        <div className="interest_item">
           <InterestItem title={"Anime series and movies"} title2={"I love to watch anime series and take life lessons from them. Beside that I also like watch Netflixs and sci-fi movies"} 
            />  
        </div>
   
    </div>
  )
}
function InterestItem(props)
{
  return <div className="single_interest">
  <div className="one_interest">{props.title}</div>
  <h6 className="interest_title">{props.title2 }<span>
  </span></h6>
</div>
  
} 
export default Interest