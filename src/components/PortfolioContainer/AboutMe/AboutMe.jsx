import React, { useEffect } from 'react';
import ScreenHeading from '../../../utilites/ScreenHeading/ScreenHeading';
import ScrollService from '../../../utilites/ScrollService';
import Animations from '../../../utilites/Animations';
import './AboutMe.css';

function AboutMe(props) {
  let fadeInScreenHandler = screen => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  const SCREEN_CONSTSANTS = {
    description:
      'I am a Junior Front End developer. I focus on HTML5, CSS3, JS, React, English. Development, practice and work for the result are important for me. I am skillful in analyzing problems and thinking of solutions to accurately troubleshoot and solve technical problems',
    highlights: {
      bullets: [
        'Full Stack web development',
        'Interactive Front End development',
        'React development',
      ],
      heading: 'Here are a Few Highlights',
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"> </div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container " id={props.id || ''}>
      <div className="about-me-parent">
        <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlights-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-option">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                Hire Me
              </button>
              <a
                href="https://drive.google.com/file/d/1tcxLfhEalmmwhGKr9WIr5BUtHdmt3MP-/view?usp=drive_link"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
