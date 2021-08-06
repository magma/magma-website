import React from "react";
import USImageOne from "../../static/img/usi1.jpg";
import USImageTwo from "../../static/img/usi2.jpg";
import USImageThree from "../../static/img/usi3.jpg";

const UserStories = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { userStories: { display, tag, stories } } = this.props;

    if (display) {
      return (
        <React.Fragment>
          <section className="user-stories">
            <h5 id="user-stories" className="section-tag">{tag}</h5>
            <div className="three-col">
              {stories.map((s, index) => {
                return (
                  <div className={`user-story-lt-rt ${index === 1 ? 'user-story-middle' : 'user-story-lt-rt'}`} key={index}>
                    <div className="img-container-user-story">
                      <a className="img-user-story" href={s.link}><img className="img-user-story" src={s.image.publicURL} /></a>
                    </div>
                    <h3 className="user-story-title">{s.title}</h3>
                    <p>{s.description}</p>
                    <a className="img-user-story" href={s.link} className="text-cta">Learn More</a>
                  </div>
                )
              })}
            </div>
          </section>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
};
export default UserStories;
