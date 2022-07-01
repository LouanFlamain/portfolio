import React from "react";
import { Link } from "react-router-dom";
export default class Header extends React.Component {
  state = {
    onClick: false,
  };
  constructor() {
    super();
    this.Click = this.Click.bind(this);
  }

  Click() {
    if (this.state.onClick === false) {
      this.setState(() => {
        return {
          onClick: true,
        };
      });
    } else {
      this.setState(() => {
        return {
          onClick: false,
        };
      });
    }
  }
  render() {
    if (this.state.onClick === false) {
      return (
        <nav
          className="navbar has-shadow is-fixed"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://via.placeholder.com/112x28"
                width="112"
                height="28"
              />
            </a>

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={this.Click}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                Home
              </Link>

              <Link to="/about-me" className="navbar-item">
                About me
              </Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Projets</a>

                <div className="navbar-dropdown">
                  <Link to="/ProjetPaint" className="navbar-item">
                    Paint
                  </Link>
                  <Link to="ProjetCinewave" className="navbar-item">
                    Ciné-Wave
                  </Link>
                  <Link to="ProjetReact" className="navbar-item">
                    React
                  </Link>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">Report an issue</a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="/cv" className="button is-primary">
                    <strong>Mon Cv</strong>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <nav
          className="navbar has-shadow is-fixed"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://via.placeholder.com/112x28"
                width="112"
                height="28"
              />
            </a>

            <a
              role="button"
              className="navbar-burger is-active"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={this.Click}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu is-active">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                Home
              </Link>

              <Link to="/about-me" className="navbar-item">
                About me
              </Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Projets</a>

                <div className="navbar-dropdown">
                  <Link to="/ProjetPaint" className="navbar-item">
                    Paint
                  </Link>
                  <Link to="ProjetCinewave" className="navbar-item">
                    Ciné-Wave
                  </Link>
                  <Link to="ProjetReact" className="navbar-item">
                    React
                  </Link>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">Report an issue</a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="/cv" className="button is-primary">
                    <strong>Mon Cv</strong>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
    }
  }
}
