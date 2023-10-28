// import { useState } from 'react';

// import logo from './logo.svg';
import './media-queries.css';
import './components/works';

//import Works from './components/works';

import leftArrow from './img/arrow_left.png';
import rightArrow from './img/arrow_right.png';

function App() {

  // const [useJobs, setUseJobs] = useState();

  // const jobs = [
  //   {
  //     id : 0,
  //     type : 'website',
  //     img : './img/works/website-0001.png',
  //     url : 'http://localhost:3000',
  //     github : 'http://github.com'
  //   },
  //   {
  //     id : 1,
  //     type : 'website',
  //     img : './img/works/website-0001.png',
  //     url : 'http://localhost:3000',
  //     github : 'http://github.com'
  //   },
  //   {
  //     id : 2,
  //     type : 'website',
  //     img : './img/works/website-0001.png',
  //     url : 'http://localhost:3000',
  //     github : 'http://github.com'
  //   },
  //   {
  //     id : 3,
  //     type : 'website',
  //     img : './img/works/website-0001.png',
  //     url : 'http://localhost:3000',
  //     github : 'http://github.com'
  //   },
  //   {
  //     id : 4,
  //     type : 'website',
  //     img : './img/works/website-0001.png',
  //     url : 'http://localhost:3000',
  //     github : 'http://github.com'
  //   },
  //   {
  //     id : 5,
  //     type : 'website',
  //     img : './img/works/website-0001.png',
  //     url : 'http://localhost:3000',
  //     github : 'http://github.com'
  //   },
  //   {
  //     id : 6,
  //     type : 'website',
  //     img : './img/works/website-0001.png',
  //     url : 'http://localhost:3000',
  //     github : 'http://github.com'
  //   },
  //   {
  //     id : 7,
  //     type : 'website',
  //     img : './img/works/website-0001.png',
  //     url : 'http://localhost:3000',
  //     github : 'http://github.com'
  //   },
  // ]

  const showDiv = (showStatus) => {
    // WorksContainer Div
    const myDiv = document.getElementById('worksContainer');
    // Exibir a Div
    myDiv.style.display = showStatus
  }

  const getJobs = async (showStatus, jobType) => {
    // General Variable
    // Elemento HTML
    const documentHTMl = document.documentElement;
    // Coletar os dados
    // fetch(`https://api-jobs-91nj.onrender.com`).then(data => data.json()).then(id => alert(id));
    // Exibir Preloading
    
    // Gravar Retorno em Váriavel
    
    // Exibir a Div
    showDiv(showStatus);
    // Mover a Barra de Rolagem
    //window.addEventListener('scroll', scrollCalc);
    const clientHeight = documentHTMl.clientHeight;
    const scrollHeight = documentHTMl.scrollTop = clientHeight ;
    // Exibir Jobs no Site
  }

  return (
        <>
          <div className = "container">
            {/* Preloading */}
            <div className = "preLoading"></div>
            {/* Main */}
            <div className = "header">
              <span className = "logo">Gilliard's Works</span>
            </div>
            <div className = "categories">
              <div className = "box um" onClick = { () => getJobs('block','website') }>
                <div className = "avatar website"></div>
                <div className = "line"></div>
              </div>
              <div className = "box dois" onClick = { () => getJobs('block','mobile') }>
                <div className = "avatar mobile"></div>
                <div className = "line"></div>
              </div>
              <div className = "box tres" onClick = { () => getJobs('block','modeling') }>
                <div className = "avatar modeling"></div>
                <div className = "line"></div>
              </div>
            </div>
          </div>
        
          <div id = "worksContainer" className = "worksContainer">
            <div className = "worksContent">

              <div className = "worksHeader">
                <div></div>
                <span className = "myWorks">My Works</span>
                <div className = "hiddenBtn" onClick = {() => getJobs('none', '')}>
                  <span class="material-symbols-outlined">
                    close
                  </span>
                </div>
              </div>

              <div className = "search">
                
                <input type="text" placeholder = "Type Something" className = "searchBox hoverStyle" />
                
                <select className = "stackBox hoverStyle">
                  <option value="nj">Stack</option>
                  <option value="nj">NodeJS</option>
                  <option value="rj">ReactJS</option>
                  <option value="rn">React Native</option>
                  <option value="bn">Blender</option>
                </select>

                <select className = "yearBox hoverStyle">
                  <option value="au">All</option>
                  <option value="ca">2023</option>
                </select>
              </div>

              <div className = "categories">
                <div className = "arrow">
                  <img className = "arrowIcon" src = { leftArrow } alt = "Arrow Icon" />
                </div>

                <div className = "jobSpace">
                  {/* Job 1 */}
                  <div className = "jobBox" onClick = { () => console.log('Construction') }>
                    <div className = "jobAvatar construction"></div>
                  </div>
                  {/* Job 2 */}
                  <div className = "jobBox" onClick = { () => console.log('Construction') }>
                    <div className = "jobAvatar construction"></div>
                  </div>
                  {/* Job 3 */}
                  <div className = "jobBox" onClick = { () => console.log('Construction') }>
                    <div className = "jobAvatar construction"></div>
                  </div>
                </div>

                <div className = "arrow">
                  <img className = "arrowIcon" src = { rightArrow } alt = "Arrow Icon" />
                </div>
              </div>
            </div>
          </div>
        </>
  );
}

export default App;
