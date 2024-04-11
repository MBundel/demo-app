import { React, useState, useEffect } from "react";
import * as companies from "../../records/companies";
import "./nav.scss";

import { Link, useLocation } from "react-router-dom";

function Navbar({ selectedCompanyName }) {
  const [currentPath, setCurrentPath] = useState("");
  const location = useLocation();




  // -------------------------------------------------------------
  const selectedCompany = companies[selectedCompanyName];

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <div className="nav-container">
        <header role="banner" className="header-box">
          <a href="http://localhost:3000">
            <img src={`${selectedCompany.imageSrc}`} alt="Logo" className="logo" />
          </a>
          <ul className="upper-nav">
   

            <li>
              <a href="#suche">
                <span className="resp">Suche</span>
              </a>
            </li>
            {currentPath === "/pega" ? (
              <li>
                <Link to="/login">
                  <span className="resp">Logout</span>
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login">
                  <span className="resp">Login</span>
                </Link>
              </li>
            )}
          </ul>


        </header>
      </div>
    </>
  );
}

export default Navbar;
