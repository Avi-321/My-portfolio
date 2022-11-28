import React, { Fragment } from 'react'
import About from '../about/About'
import Contact from '../contact/Contact'
import Footer from '../foooter/Footer'
import { Header } from '../headers/Header'
import Mysection from '../mysections/Mysection'
import Portfolio from '../portfolio/Portfolio'


const Layout = () => {
  return (
    <Fragment>
            <Header/>
            <Mysection/>
            <About/>
            <Portfolio/>
            <Contact/>
            <Footer/>
    </Fragment>
  )
}

export default Layout