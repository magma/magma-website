import React from "react";

const Features = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let {
      features: { title, rows, display },
    } = this.props;
    if (display) {
      return (
        <React.Fragment>
          <section className="section-article">
            <div className="container">
              <div className="article-content">
                <h2>{title}</h2>
                <div className="section section-body">
                  <div className="columns is-multiline">
                    {rows.map((feature, index) => {
                      return (
                        <div className="column is-one-third" key={index}>
                          <div className="article-small">
                            <div className="article-small__content">
                              <h3 className="article-small__title">
                                {feature.title}
                              </h3>
                              <p className="article-small__entry">
                                {feature.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <footer className="section-foot"></footer>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
};

export default Features;
