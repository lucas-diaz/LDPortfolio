// == Import npm
import React from 'react';

// == Import
import Counter from 'src/containers/Counter';
import projectImg from './testImg.JPG';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <header className='header'>
      <menu>
        <li>A propos</li>
        <li>Mes realisation</li>
        <li>Competence</li>
        <li>Parcours</li>
        <li>Contact</li>
      </menu>
    </header>
    <main>
    { /* section a propos*/}
      <section className="about">
      <div className='test'></div>
        <div className="about_text">        
          <div>Lucas Diaz</div>
          <h1>Developpeur Web</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia voluptas consequuntur a culpa iure est omnis amet quisquam nemo qui!</p>
        </div>
      </section>
      { /* section realisation*/}
      <section className="portfolio">
        <h2>Mes Réalisation</h2>
        { /* projet 1*/}
        <div className="project">
          <img className='project_img' alt=' du projet' src={projectImg} />
          <div className='project_description'>
            <h3 className='project_title'>Site personnel</h3>
            <p>Premiere version de mon site personnel qui contient mes réalisation ainsi que des information me concernant, Réalisé avec React en utilisant scss</p>
            <div className='links'>
              <div className='project_link'><a href='' >Demo</a></div>
              <div className='project_link'><a href='' >Github</a></div>
            </div>
          </div>
        </div>
        { /* projet 2*/}
        <div className="project">
          <img className='project_img' alt=' du projet' src={projectImg} />
          <div className='project_description'>
            <h3 className='project_title'>E-commerce</h3>
            <p>SIte d'e-comerce blablalbalblalbalbla blablalba lbalbla balbla bb alblblbal</p>
            <div>
              <div><a href='' >Demo</a></div>
              <div><a href='' >Github</a></div>
            </div>
          </div>
        </div>  
        { /* projet 3*/}
        <div className="project">
          <img className='project_img' alt=' du projet' src={projectImg} />
          <div className='project_description'>
            <h3 className='project_title'>Jeux candy crush</h3>
            <p>une version de candy crush pour comprendre certaine fonctionalité  </p>
            <div>
              <div><a href='' >Demo</a></div>
              <div><a href='' >Github</a></div>
            </div>
          </div>
        </div>
      </section>
      { /* section competence*/}
      <section>
        <h2>Competences</h2>
        <div>
          <h3>au travail</h3>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <h3>personnel</h3>
          <div>1</div>
          <div>2</div>
        </div>
        <div>
          <h3>TECHNOLOGIES ET LANGAGES DE PROGRAMMATION</h3>
          <div>
            <p>Front-end</p>
            <span>HTLM5</span>
            <span>CSS3</span>
            <span>JAVASCRIPT</span>
            <span>REACT</span>
          </div>
          <div>
            <h3>Outils, Méthodologie</h3>
            <div>
              <p>Environnement de Développement</p>
              <span>GITHUB</span>
              <span>GIT</span>
              <span>VISUAL STUDIO CODE</span>
            </div>
            <div>
              <h3>Gestion de Projet</h3>
              <span>TRELLO</span>
              <span>SLACK</span>
              <span>PRATIQUE AGILES & SCRUM</span>
            </div>
          </div>
        </div>
      </section>
      { /* section formation*/}
      <section>
        <div> A FAIRE</div>
      </section>
      <footer>
        <h2>Me contacter</h2>
        <div>
          <p>Retrouvez mon cv en format PDF sur l'icone situé a droite</p>
          <p>ICON CV</p>
        </div>
        <div>
        <p>Vous pouvez également me contacter via l'adresse mail lucasdiaz01120@gmail.com ou me retrouver sur les sites suivants</p>
        <p>Linkedin</p>
        <p>Github</p>
        </div>
      </footer>
    </main>
  </div>
);

// == Export
export default App;
