import React from "react";

import { Link } from "gatsby";
import Menu from "../content/navbar.json";

const Header = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { title, subTitle, image, buttons, display } = this.props;
    if (display) {
      return (
        <section className="hero-main hero no-border">
          <div className="hero-body">
            <div className="container">
              {Menu.logo && (
                <div className="nav-brand">
                {/* Big logo in header
                  <Link to="/" title="Logo" className="main-logo">
                    <img src={Menu.logo} alt="Magma" />
                  </Link>
                  */}
                  {/* Hamburger menu */}
                </div>
              )}
              <div className="hero-content">
                <h1 className="hero-title">{title}</h1>
                <div className="hero-subhead">
                  {subTitle.map((line, index) => {
                    return (
                      <React.Fragment key={index}>
                        {line.text}
                        {index === subTitle.length - 1 ? "" : <br />}
                      </React.Fragment>
                    );
                  })}
                </div>
                <div className="hero-actions">
                  {buttons.map((button, index) => {
                    return (
                      <a
                        href={button.link}
                        className="button is-outlined"
                        key={index}
                        style={{ margin: "0 5px" }}
                      >
                        <span>{button.text}</span>{" "}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
};

export default Header;
