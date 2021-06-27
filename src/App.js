
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import { Switch, Route } from "react-router-dom";
import './App.css';
import './styles/sw.css';
import './styles/nav.css';
import {useState} from 'react'
import { NavLink } from "react-router-dom";
function App() {
  
  

  let eng = {
    homeTitle: 'HELLO, MY NAME IS ILIM ASANOV. I AM FRONT-END DEVELOPER',
    homeBtn: 'More',
    navItems1: 'HOME',
    navItems2: 'ABOUT',
    navItems3: 'PORTFOLIO',
    navItems4: 'CONTACT',
    aboutMeTitle: 'ABOUT ME',
    aboutMeText1: "I'm a hardworking, detail-oriented web developer, passionate about creating",
    aboutMeText2: "beautiful code using best practices.",
    aboutMeSubtext1: 'ove learning new and better ways to create user experiences with clean,',
    aboutMeSubtext2: "efficient, and scolable code. | consider work an ongoing education, and I'm",
    aboutMeSubtext3: 'always looking for opportunities to work with those who are willing to share',
    aboutMeSubtext4: 'their knowledge as much as | want to learn. At the end of the doy. my primary',
    aboutMeSubtext5: 'goal is to create something beautiful with people that bring out the best in',
    aboutMeSubtext6: 'me.',
    aboutContentBtn: 'Dowload CV',
    aboutPersonalInfoTitle: 'PERSONAL INFORMATION',
    aboutPersonalInfoRows1: {a1:'Full name:',b2: ' Asanov Ilim'},
    aboutPersonalInfoRows2: {a1:'Date of birth:',b2: ' 13.09.2004'},
    aboutPersonalInfoRows3: {a1:'Place of residence:',b2: ' kyrgyzstan,Bishkek'},
    aboutPersonalInfoRows4: {a1:'Tel:',b2: ' +996(709)04-09-13 '},
    aboutPersonalInfoRows5: {a1:'Email:',b2: ' ilimhdhdhd@gmail.com'},
    aboutSkillsTitle: 'SKILLS',
    aboutSkillsRow1: 'HTML',
    aboutSkillsRow2: 'CSS,FLEX,GRID',
    aboutSkillsRow3: 'PUG,SASS,SCSS',
    aboutSkillsRow4: 'REACT,JS',
    worksNavTitle: 'MY WORKS',
    worksNavItem1: 'All',
    worksNavItem2: 'WebSites',
    works1: 'A small news portal in React',
    works2: 'Layout PUG, SASS + Adaptive',
    works3: 'Layout PUG, SASS + Adaptive',
    works4: 'Layout PUG, SASS + Adaptive',
  }
  let ru = {
    homeTitle: 'ПРИВЕТ, МЕНЯ ЗОВУТ ИЛИМ АСАНОВ. Я FRONT-END РАЗРАБОТЧИК ',
    homeBtn: 'Подробнее',
    navItems1: 'ГЛАВНАЯ',
    navItems2: 'ОБОМНЕ',
    navItems3: 'РАБОТЫ',
    navItems4: 'КОНТАКТ',
    aboutMeTitle: 'ОБО МНЕ',
    aboutMeText1: "Я трудолюбивый, ориентированный на детали веб-разработчик,",
    aboutMeText1: "увлеченный созданием красивого кода с использованием лучших практик.",
    aboutMeSubtext1: 'Изучать новые и лучшие способы создания пользовательского опыта с помощью чистого,',
    aboutMeSubtext2: "эффективного и поддающегося оценке кода.",
    aboutMeSubtext3: 'Я считаю работу непрерывным образованием и всегда ищу возможности работать с теми,',
    aboutMeSubtext4: 'кто готов делиться своими знаниями так же, как я хочу учиться.',
    aboutMeSubtext5: 'В конце дой. Моя основная цель - создать что-то прекрасное с людьми, которые',
    aboutMeSubtext6: 'раскрывают во мне все самое лучшее.',
    aboutContentBtn: 'Скачать CV',
    aboutPersonalInfoTitle: 'ПЕРСОНАЛЬНАЯ ИНФОРМАЦИЯ',
    aboutPersonalInfoRows1: {a1:'ФИО:',b2: ' Асанов Илим'},
    aboutPersonalInfoRows2: {a1:'Дата рождения:',b2: ' 13.09.2004'},
    aboutPersonalInfoRows3: {a1:'Место жительства:',b2: ' Кыргызстан, Бишкек'},
    aboutPersonalInfoRows4: {a1:'Тел:',b2: ' +996(709)04-09-13 '},
    aboutPersonalInfoRows5: {a1:'Email:',b2: ' ilimhdhdhd@gmail.com'},
    aboutSkillsTitle: 'НАВЫКИ',
    aboutSkillsRow1: 'HTML',
    aboutSkillsRow2: 'CSS,FLEX,GRID',
    aboutSkillsRow3: 'PUG,SASS,SCSS',
    aboutSkillsRow4: 'REACT,JS',
    worksNavTitle: 'МОИ РАБОТЫ',
    worksNavItem1: 'Все',
    worksNavItem2: 'Веб-сайты',
    works: 'Небольшой новостной портал на React',
    works: 'Вёрстка PUG, SASS + Адаптив',
    works: 'Вёрстка PUG, SASS + Адаптив',
    works: 'Вёрстка PUG, SASS + Адаптив',
  }
  const [leng, setleng] = useState(eng)





  function switchToEng() {
    setleng(eng)
  }
  
  function switchToRu() {
    setleng(ru)
  }


  return (
    <div>
            <div className="header" id="header">
        <div className="heaer__con conteiner"> 
          <div className="header__logo">
            <svg className="header__logo-svg" width="193" height="45" viewBox="0 0 193 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.5738 44.3165C28.1125 44.3165 25.1258 40.4338 24.6138 32.6685H13.6058C12.7525 34.6312 12.0271 36.4658 11.4298 38.1725L9.7658 43.0365H0.805801L20.9658 0.796497H34.7258L37.4138 31.9005C37.8405 36.3805 38.9071 39.2818 40.6138 40.6045C39.3765 43.0792 37.0298 44.3165 33.5738 44.3165ZM15.5898 27.9965H24.4218L23.6538 11.5485V9.8205L19.1098 19.8685L15.5898 27.9965ZM42.4328 39.2605C42.4328 37.6392 43.0515 36.3805 44.2888 35.4845C45.5688 34.5885 47.1048 34.1405 48.8968 34.1405C50.6888 34.1405 52.1181 34.5885 53.1848 35.4845C54.2941 36.3805 54.8488 37.6392 54.8488 39.2605C54.8488 40.8818 54.2301 42.1405 52.9928 43.0365C51.7981 43.8898 50.3048 44.3165 48.5128 44.3165C46.7208 44.3165 45.2488 43.8898 44.0968 43.0365C42.9875 42.1405 42.4328 40.8818 42.4328 39.2605ZM60.0863 43.0365L68.2143 0.796497H82.2943L74.0383 43.0365H60.0863ZM110.48 33.1805C111.29 34.2045 111.696 35.7192 111.696 37.7245C111.696 39.6872 110.928 41.2872 109.392 42.5245C107.898 43.7192 105.829 44.3165 103.184 44.3165C101.648 44.3165 99.6851 44.1458 97.2958 43.8045C92.6025 43.0792 89.5731 42.7165 88.2078 42.7165C86.8851 42.7165 85.9465 42.7592 85.3918 42.8445C84.8371 42.8872 84.1118 42.9512 83.2158 43.0365L90.9598 0.796497H104.976L98.5758 35.9965C99.1305 36.0818 99.6638 36.1245 100.176 36.1245H101.776C105.36 36.1245 108.261 35.1432 110.48 33.1805ZM115.274 43.0365L123.402 0.796497H137.482L129.226 43.0365H115.274ZM136.995 43.0365L148.579 0.796497H161.955L164.899 24.9245L176.803 0.796497H188.003L189.155 32.4125C189.326 36.5938 190.435 39.3245 192.483 40.6045C192.014 41.4578 191.097 42.2898 189.731 43.1005C188.366 43.9112 186.766 44.3165 184.931 44.3165C183.139 44.3165 181.71 44.0605 180.643 43.5485C179.577 43.0365 178.745 42.3538 178.147 41.5005C177.081 39.9645 176.547 37.7245 176.547 34.7805V15.0045L163.939 43.0365H156.003L151.523 14.3005L144.355 43.0365H136.995Z" fill="#646464"/>
            </svg>
          </div>
          <div class="hamburger-menu">
            <input id="menu__toggle" type="checkbox"/>
            <label class="menu__btn" for="menu__toggle"><span></span></label>
            <ul class="menu__box">
              <li>
                <NavLink  className='nav-items' to="/" exact>{leng.navItems1}</NavLink>
              </li>
              <li>
                <NavLink  className='nav-items' to="/About">{leng.navItems2}</NavLink>
              </li>
              <li>
                <NavLink  className='nav-items' to="/Protfolio/AllProjects">{leng.navItems3}</NavLink>
              </li>
              <li>
                <NavLink  className='nav-items m00' to="/Contact">{leng.navItems4}</NavLink>
              </li> 
              <button className="button mp0 " onClick={switchToEng} >eng</button>
              <button className="button mp0 " onClick={switchToRu} >ru</button>
            </ul>
          </div>
        </div> 
      </div>
    
     
      <Switch>
        <Route  exact path="/" render={ () => <Home thisLeng={leng} />}/>
        <Route exact path="/About" render={ () => <About thisLeng={leng} />} />
        <Route exact path="/Protfolio/AllProjects" render={ () => <Portfolio thisLeng={leng} />} />
        <Route exact path="/Contact" render={ () => <Contact thisLeng={leng} />} />
      </Switch>
      
    </div>
  );
}

export default App;
