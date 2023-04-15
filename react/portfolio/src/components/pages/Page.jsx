import React from 'react'
import projectImg from '../../img/projects/02-big.jpg';
import gitHubIcon from '../../img/icons/gitHub-black.svg';
import Navigation from '../Navigation';
import Footer from '../Footer';

const Page = () => {
  return (
    <div>
        <Navigation />
        <main className="section">
      <div className="container">
        <div className="project-details">

          <h1 className="title-1">Video service</h1>

          <img src={projectImg} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>Skills: React, Node.js, MongoDB</p>
          </div>

          <a href="#!" className="btn-outline">
            <img src={gitHubIcon} alt="" />
            GitHub repo
          </a>

        </div>
      </div>
    </main>
    <Footer/>
    </div>
  )
}

export default Page