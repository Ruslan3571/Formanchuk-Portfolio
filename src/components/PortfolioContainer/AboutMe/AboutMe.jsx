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
      'As a highly motivated and enthusiastic Full-stack Developer, I am eager to apply my skills and knowledge to contribute to the development of modern applications. With a solid understanding of HTML, CSS, JavaScript (TypeScript in progress), React, Node.js my ability lies in designing and developing intuitive and responsive interfaces that engage and delight users. I am excited to continue developing my skills and contributing to the growth of innovative and user-friendly web applications.',
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
                href="https://drive.google.com/file/d/1r4NpuHHYkkSAhAGroj0NqU-dsnN3Zhlb/view?usp=drive_link"
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
