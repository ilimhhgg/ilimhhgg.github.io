import React from 'react'
import {useState} from 'react'
import Works from './Works'
import modulegv from '../../../assets/img/workgv.png'
import modulejk from '../../../assets/img/workjk.png'
import modulens from '../../../assets/img/workns.png'
import modulepl from '../../../assets/img/workpl.png'

function ReactProjects() {
  

  const [items, setitems] = useState({
    item1: {
      toLink: "Http://u105884.test-handyhost.ru/", 
      text: "Небольшой новостной портал на React",
      img: modulegv,
    },

  })
  
  return (
    <div className="AllProjects conteiner">
      <div className="works-content">
          <div className="works-content__wrapper">
        {
                Object.keys(items).map(key => {
                  return <Works key={key} data={items[key]}/>
                })
              }
        </div>
      </div>
    </div>
  )
}

export default ReactProjects
