import React from "react";
import Navigation from './Navigation'
import Footer from './Footer'

const Contacts = () => {
  return (
    <div>
    <Navigation />
      <main className="section">
        <div className="container">
          <h1 className="title-1">Contacts</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>Poltava, Ukraine</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Telegram / Viber</h2>
              <p>
                <a href="tel:+79051234567">+380 95 472 25 46</a>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p>
                <a href="mailto:palkovlad64@gmail.com">palkovlad64@gmail.com</a>
              </p>
            </li>
          </ul>
        </div>
      </main>
    <Footer/>
    </div>
  );
};

export default Contacts;
