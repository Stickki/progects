import React from 'react'
import vkIcon from "../img/icons/vk.svg";
import instagramIcon from "../img/icons/instagram.svg";
import twitterIcon from "../img/icons/twitter.svg";
import gitHubIcon from "../img/icons/gitHub.svg";
import linkedInIcon from "../img/icons/linkedIn.svg";
import adminIcon from "../img/icons/admin.svg";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <div className="footer__wrapper">
        <ul className="social">
          <li className="social__item">
            <a href="https://vk.com/id492224400">
              <img src={vkIcon} alt="Link" />
            </a>
          </li>
          <li className="social__item">
            <a href="https://www.instagram.com/pal_palychka/">
              <img src={instagramIcon} alt="Link" />
            </a>
          </li>
          <li className="social__item">
            <a href="#!">
              <img src={twitterIcon} alt="Link" />
            </a>
          </li>
          <li className="social__item">
            <a href="https://github.com/Stickki/progects.git">
              <img src={gitHubIcon} alt="Link" />
            </a>
          </li>
          <li className="social__item">
            <a href="#!">
              <img src={linkedInIcon} alt="Link" />
            </a>
          </li>
          <li className="social__item">
            <Link to="/validate">
              <img src={adminIcon} alt="Link" />
            </Link>
          </li>
        </ul>
        <div className="copyright">
          <p>© 2023 http://localhost:5173.com</p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer