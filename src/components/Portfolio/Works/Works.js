import React from 'react'
import {useState} from 'react'
import moduleName from '../../../assets/img/workns.png'
function Works(props) {

  const [color, setcolor] = useState('subblock')
  const [btn, setbtn] = useState('testblock1__btn button hide')


  function gg() {
    setcolor('subblock100 ')
    setbtn('testblock1__btn button')
  }
  function hh() {
    setcolor('subblock')
    setbtn('testblock1__btn button hide')
  }

  
  return (
      <div 
            
            onFocus={gg}
            onMouseEnter={gg} 
            onMouseLeave={hh} 
            className="testblock1"
            onFocusout={hh}
            >
              <img src={props.data.img} alt="" />
              <div className={color}>
                {props.data.text}
                <a href={props.data.toLink} className={btn}>go over</a>
              </div>
            </div>
  )
}

export default Works
