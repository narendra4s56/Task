import React, { Component } from "react";
import "./NavbarStyle.css";
import { MenuItems } from "./Menuitem";
import "@fortawesome/fontawesome-free/css/all.min.css";

export class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="nav-container">
        <nav className="NavbarItems">
          <div className="left">
            <a href="/">{/* <img src="/logo.png" /> */}</a>
            <a href="/" style={{ textDecoration: "none" }}>
              <h1 className="navbar-logo" style={{ color: "white" }}>
                SINT
              </h1>
            </a>
          </div>
          <div className="menu-icons" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li>
                  <a href={item.url} className={item.cName}>
                    {item.title}
                  </a>
                </li>
              );
            })}
            <button>Sign up</button>
            <button>Search </button>
            
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
