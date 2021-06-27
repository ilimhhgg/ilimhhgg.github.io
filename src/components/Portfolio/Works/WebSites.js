import React from 'react'
import {useState} from 'react'
import Works from './Works'
import modulegv from '../../../assets/img/workgv.png'
import modulejk from '../../../assets/img/workjk.png'
import modulens from '../../../assets/img/workns.png'
import modulepl from '../../../assets/img/workpl.png'

function WebSites() {
  

  const [items, setitems] = useState({
    item2: {
      toLink: "https://Ilimhhgg.github.io/my-project/", 
      text: "Верстка PUG,SASS + Адаптив", 
      img: modulejk,
    },
    item3: {
      toLink: "Http://u105884.test-handyhost.ru/", 
      text: "Верстка PUG,SASS + Адапти",
      img: modulepl,
    },
    item4: {
      toLink: "https://ilimhhgg.github.io/test-task/", 
      text: "Верстка PUG,SASS + Адапти",
      img: modulens,
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

export default WebSites
