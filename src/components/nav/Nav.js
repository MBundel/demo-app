import { React, useState, useEffect } from "react";
import { uniqa, allianz, zurich } from "../../records/insuranceFirms";
import "./nav.scss";

import { Link, useLocation } from "react-router-dom";

function Navbar({ selectedFirmName }) {
  const [currentPath, setCurrentPath] = useState("");
  const location = useLocation();

  const firms = { uniqa, allianz, zurich };
  const seF = selectedFirmName;

  // -------------------------------------------------------------
  const selectedFirm = firms[seF];

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <div className="homepage-container">
        <header role="banner" className="header-box">
          <a href="http://localhost:3000">
            <img src={`${selectedFirm.imageSrc}`} alt="Logo" className="logo" />
          </a>
          <ul className="upper-nav">
            {/* <li><a href="#privat">Privat</a></li>        |
    <li><a href="#unternehmen">Unternehmen</a></li> */}

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

          {/* <nav className="nav">

    <ul>
        <li><a href="#gesundheit">Gesundheit</a></li>
        <li><a href="#kfz">Kfz</a></li>
        <li><a href="#wohnen">Wohnen</a></li>
        <li><a href="#reise">Reise</a></li>
        <li><a href="#vorsorge">Vorsorge</a></li>
        <li><a href="#unfall">Unfall</a></li>
        <li><a href="#rechtsschutz">Rechtsschutz</a></li>
        <li><a href="#freizeit">Freizeit</a></li>
        <li><a href="#kunst">Kunst</a></li>

    </ul>
</nav> */}
        </header>
      </div>
    </>
  );
}

export default Navbar;