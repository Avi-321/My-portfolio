import React from 'react'
import './skills.css'


const frontendskills=[
    {
        title:'Javascript',
        
        percentage:'88%'
    },
    {
        title:'React.js',
        
        percentage:'80%'
    },
    {
        title:'CSS',
        
        percentage:'85%'
    },
    {
        title:'Python',
        
        percentage:'65%'
    },
    {
        title:'Java',
        
        percentage:'75%'
    }
]

const backendskills=[
    {
        title:'Node.js',
     
        percentage:'75%'
    },
    {
        title:'C++',
       
        percentage:'90%'
    },
    {
        title:'MongoDB',
       
        percentage:'85%'
    },
    {
        title:'Data structures and algorithms',
        
        percentage:'70%'
    },
    {
        title:'Mysql/database',
        
        percentage:'80%'
    }
]
const Skills = () => {
  return (
    <div className="skills_wrapper d-flex gap-5">
        <div className="frontend__skill w-50">
            {
                frontendskills.map(function(item,index){
                    return(<SkillItem key={index} title={item.title} percentage={item.percentage}/>) 
                    
                })
            }
        </div>
        <div className="backend_skill w-50">
            {
                backendskills.map(function(item,index){
                    return(<SkillItem key={index} title={item.title} percentage={item.percentage}/>) 
                    
                })
            }
        </div>
    </div>
  )
}
function SkillItem({title, percentage}){
    return <div className="skill_data mb-3 ">
                        <div className="skill_title d-flex align-items-center justify-content-between">
                            <h6>{title}</h6>
                            <span>{percentage}</span>
                        </div>
                        <div className='skill_bar'>
                            <span className='skill_bar_percentage' style={{width:`${percentage}`}}></span>
                        </div>
                    </div>
}

export default Skills