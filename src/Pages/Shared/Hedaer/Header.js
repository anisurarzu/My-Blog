import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div>
            <Link to="/home">
              <img src="https://i.ibb.co/mTdNW94/logo.png" alt="" />
            </Link>
          </div>
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
                <Link
                  className="nav-link active text-green-500 bangla "
                  aria-current="page"
                  to="/home"
                >
                  আনিসুর রহমান
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link bangla" to="#">
                  ব্লগ
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link bangla"
                  to="/postblog"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  পোস্ট ব্লগ
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link bangla"
                  to="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  আপডেট ব্লগ
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2 bangla"
                type="search"
                placeholder="ব্লগ এর নাম দিয়ে খুজে বের করুন"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary bangla" type="submit">
                সার্চ
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
