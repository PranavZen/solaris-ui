import React, { useEffect, useState } from "react";
import { logo } from "..";
import { Link } from "react-router-dom";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState(0);

  useEffect(() => {
   
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
    const handleScroll = () => {
      const currentScrollpos = window.pageYOffset;

      if (prevScrollpos > currentScrollpos) {
        document.getElementById("header").style.top = "5%";
      } else if (prevScrollpos > 80) {
        document.getElementById("header").style.top = "-100px";
      }
      setPrevScrollpos(currentScrollpos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);
  return (
    <header id="header" className={scroll ? "header" : "header topClass"}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="#">
            <img src={logo} alt="solaris logo" className="img-fluid" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Link
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled">Disabled</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
