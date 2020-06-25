import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import leftArrow from "../img/svg/arrow-left.svg";

const Reviews = class extends React.Component {
  render() {
    const {
      review: { title, text, opinions, bottom, display },
    } = this.props;

    // function SamplePrevArrow(props) {
    //   const { style, onClick } = props;
    //   return (
    //     <a role="button" data-slide="prev" className="carousel-control-prev" style={{ ...style, display: 'flex' }} onClick={onClick}>
    //       <span aria-hidden="true" className="carousel-control-prev-icon"></span>
    //           <img src="/img/symbols/logo-arrow-left.svg" alt="Previous" className="home-s8-container-child" />
    //     </a>
    //   );
    // }

    // function SampleNextArrow(props) {
    //   const { style, onClick } = props;
    //   return (
    //     <a role="button" data-slide="next" className="carousel-control-next" style={{ ...style, display: 'flex' }} onClick={onClick}>
    //       <span aria-hidden="true" className="carousel-control-next-icon"></span>
    //       <img src="/img/symbols/logo-arrow-right.svg" alt="Next" className="home-s8-container-child" />
    //     </a>
    //   );
    // }

    let slideSettings = {
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />
    };

    if (display) {
      return (
        <React.Fragment>
          <section className="reviews">
            <div className="container">
              <h2>{title}</h2>
              <div className="sub-wrapper">
                <p>{text}</p>
              </div>
              <div className="slider-wrapper">
                <Slider {...slideSettings} style={{ margin: "50px 10%" }}>
                  {opinions.map((o, index) => {
                    return (
                      <div key={index}>
                        <h3>{o.opinion}</h3>
                        <p className="quote-name">{`${o.person}, ${o.title}`}</p>
                        <p className="quote-org">{o.company}</p>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
            <div className="bottom">
              <p>
                {bottom.text}
                <a
                  href={bottom.button.link}
                  className="is-link"
                  style={{ margin: "0 5px" }}
                >
                  <span>{bottom.button.text}</span>{" "}
                </a>
              </p>
            </div>
          </section>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
};

export default Reviews;
