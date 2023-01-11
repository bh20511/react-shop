import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const Nav = () => {
  const { myAuth, logout } = useContext(AuthContext);
  // console.log(myAuth);

  const location = useLocation();
  const seg1 = location.pathname.split("/")[1];

  const actives = {};
  actives[seg1] = {
    backgroundColor: "yellow",
    borderRadius: "10px",
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary "
      style={{ backgroundColor: "lightblue" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          Navbar
        </a>
        {/* <Link to="/#" className="navbar-brand">
          Navbar
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100">
            <li className="nav-item">
              <Link
                to="/home"
                className="nav-link active"
                aria-current="page"
                href="#"
                style={actives.home}
              >
                首頁
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li> */}
            <li className="nav-item">
              <Link
                to="/product"
                className="nav-link"
                href="#"
                style={actives.product}
              >
                購物
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/token"
                className="nav-link"
                href="#"
                style={actives.token}
              >
                測試token頁面
              </Link>
            </li>

            <li
              className="nav-item"
              style={{
                width: "200px",
                margin: "0 0 0 auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {myAuth.authorised ? (
                <>
                  <Link to="/login" className="nav-link" style={actives.login}>
                    {myAuth.nickname}
                  </Link>
                  <a
                    className="nav-link"
                    href="#/"
                    onClick={(e) => {
                      e.preventDefault();
                      logout();
                    }}
                  >
                    登出
                  </a>
                </>
              ) : (
                <>
                  <Link to="/login" className="nav-link" style={actives.login}>
                    Login
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
