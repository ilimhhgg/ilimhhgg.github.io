import React from 'react'
import {useState} from 'react'
import AllProjects from './Works/AllProjects'
import ReactProjects from './Works/ReactProjects'
import WebSites from './Works/WebSites'
import modulegv from '../../assets/img/workgv.png'
import modulejk from '../../assets/img/workjk.png'
import modulens from '../../assets/img/workns.png'
import modulepl from '../../assets/img/workpl.png'
import { Switch, Route, NavLink, BrowserRouter } from "react-router-dom";

function Portfolio(props) {
  
  const [color, setcolor] = useState('subblock')
  const [btn, setbtn] = useState('subblock__btn')


  function gg() {
    setcolor('subblock100')
  }
  function hh() {
    setcolor('subblock')
  }
  function gg() {
    setbtn('subblock__btn none')
  }
  function hh() {
    setbtn('subblock__btn')
  }
  return (
    <BrowserRouter>
    <div className="works">
      <div className="works__con conteiner">
        <div className="works-nav">
          <h1 className="works-nav__title">{props.thisLeng.worksNavTitle}</h1>
          <div className="works-nav__items"> 

            <NavLink  className='works-nav__item acivea' to="/Protfolio/AllProjects">{props.thisLeng.worksNavItem1}</NavLink>
            <NavLink  className='works-nav__item' to="/ReactProjects">REACT</NavLink>
            <NavLink  className='works-nav__item' to="/WebSites">{props.thisLeng.worksNavItem2}</NavLink>
          
          </div> 
        </div>
          <div>
              <Route path='/Protfolio/AllProjects' component={AllProjects}/>
              <Route path='/ReactProjects' component={ReactProjects}/>
              <Route path='/WebSites' render={ () => <WebSites />} />
            
            </div>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default Portfolio
