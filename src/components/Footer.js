import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import content from "../content/footer-nav.json";

const Footer = class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer">
          <div className="container container-medium">
            <div className="footer-inner">
              <div className="columns">
                <div className="column">
                  <div className="columns is-mobile">
                    <ul className="footer-list nobullet">
                      <div className="footer-links">
                        {content.pages.map((item, index) => {
                          return (
                            <React.Fragment key={index}>
                              <li className="item-no-bullet">
                                {item.link.match(/^https?:\/\//) ?
                                  item.link.match(/^https?:\/\/docs\./) ? (
                                    <OutboundLink
                                      href={item.link}                                      
                                      rel="noopener noreferrer"
                                    >
                                      {item.text}
                                    </OutboundLink>
                                  )
                                    :
                                    (
                                      <OutboundLink
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {item.text}
                                      </OutboundLink>
                                    ) : (
                                    <Link to={item.link}>{item.text}</Link>
                                  )}
                              </li>
                              {index < content.pages.length - 1 ? (
                                <li className="separator"> | </li>
                              ) : null}
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </ul>
                  </div>
                  <div className="footer-entry">
                    <p>
                      &copy; 2021 Magma Core. Copyright &copy; 2021 Magma Core and Magma are trademarks of LF Projects LLC.
                      For trademark usage guidelines, terms of use, privacy policy and the code of conduct, please see
                      <OutboundLink
                        href="https://www.lfprojects.org/policies/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        " LF Projects Policies"
                      </OutboundLink>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
};

export default Footer;
