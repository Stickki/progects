import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("darkMode") === "dark" ||
      (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "light");
    }
  }, [isDark]);


  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <Link to="/" className="logo">
            <strong>Freelancer</strong> portfolio
          </Link>

          <ul className="nav-list">
            <li className="nav-list__item">
              <Link to="/" className="nav-list__link ">
                Home
              </Link>
            </li>
            <li className="nav-list__item">
              <Link to="/progects" className="nav-list__link">
                Projects
              </Link>
            </li>
            <li className="nav-list__item">
              <Link to="/contacts" className="nav-list__link">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
