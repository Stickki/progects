import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import { Link } from 'react-router-dom';

import project1Img from '../img/projects/01.jpg';
import project2Img from '../img/projects/02.jpg';
import project3Img from '../img/projects/03.jpg';


const Progects = () => {
  return (
    <div>
        <Navigation/>
        <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          <li className="project">
            <Link to="/page">
              <img src={project1Img} alt="Project img" className="project__img" />
              <h3 className="project__title">Gaming streaming portal</h3>
            </Link>
          </li>
          <li className="project">
            <Link to="/page">
              <img src={project2Img} alt="Project img" className="project__img" />
              <h3 className="project__title">Video service</h3>
            </Link>
          </li>
          <li className="project">
            <Link to="/page">
              <img src={project3Img} alt="Project img" className="project__img" />
              <h3 className="project__title">Video portal</h3>
            </Link>
          </li>
          <li className="project">
            <Link to="/page">
              <img src={project1Img} alt="Project img" className="project__img" />
              <h3 className="project__title">Gaming streaming portal</h3>
            </Link>
          </li>
          <li className="project">
            <Link to="/page">
              <img src={project2Img} alt="Project img" className="project__img" />
              <h3 className="project__title">Video service</h3>
            </Link>
          </li>
          <li className="project">
            <Link to="/page">
              <img src={project3Img} alt="Project img" className="project__img" />
              <h3 className="project__title">Video portal</h3>
            </Link>
          </li>
        </ul>
      </div>
    </main>
        <Footer/>
    </div>
  )
}

export default Progects