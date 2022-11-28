import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import {Container} from 'reactstrap'
import "./Header.css"



export const Header = () => {
  const navlist=[
    {
      display:"Home",
      url:'#home'
    },
    {
      display:"About Me",
      url:'#about'
    },
    {
      display:"Portfolio",
      url:'#portfolio'
    },
    {
      display:"Contact",
      url:'#contact'
    }
  ]
  const menuRef=useRef(null);
  const headerRef=useRef(null)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop>80 || document.documentElement.scrollTop > 80)
      {
        headerRef.current.classList.add('header_shrink')
      }else
      {
        headerRef.current.classList.remove('header_shrink')
      }
    });
    return ()=>{
      window.removeEventListener('scroll')
    }
  },[])

  const menuToggle= ()=>menuRef.current.classList.toggle('menu_active')

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
      <header className='header' ref={headerRef}>
        <Container>
          <div className="navigation d-flex align-items-center justify-content-between">
            <div className="logo">
              <h5 className='logoSign'>AVI</h5>
            </div>
              <div className="menu" ref={menuRef} onClick={menuToggle}>
                <ul className="navlist">
                  
                  {
                    navlist.map(function(item,index)
                    {
                      return(
                      <li className='navitem' key={index}>
                        <a href={item.url} onClick={handleClick} >{item.display}</a>
                      </li>)
                    })
                  }
                </ul>
              </div>
                <div className="nav_right d-flex align-items-center gap-4">
                  <button className="btn btnk"><a href="#contact">Let's Talk</a></button>
                  <span className='mobile_menu'><i class="ri-menu-line" onClick={menuToggle}></i></span>
                </div>
            
            
          </div>
        </Container>
      </header>
    )
}
