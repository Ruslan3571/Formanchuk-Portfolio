import React, { useEffect, useState } from 'react';
import ScreenHeading from '../../../utilites/ScreenHeading/ScreenHeading';
import ScrollService from '../../../utilites/ScrollService';
import Animations from '../../../utilites/Animations';
import './Resume.css';

function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = screen => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = props => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"> </div>
          <span>{props.heading ? props.heading : ''}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + '-' + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ''}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ''}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: 'Education', logoSrc: 'education.svg' },
    { label: 'Work History', logoSrc: 'work-history.svg' },
    { label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
    { label: 'Projects', logoSrc: 'projects.svg' },
    { label: 'Interest', logoSrc: 'interests.svg' },
  ];

  const programmingSlillDetails = [
    { skill: 'JavaScript', ratingPercentage: 85 },
    { skill: 'React Js', ratingPercentage: 75 },
    { skill: 'Node Js', ratingPercentage: 55 },
    { skill: 'HTML', ratingPercentage: 85 },
    { skill: 'CSS', ratingPercentage: 80 },
    { skill: 'Mongo Db', ratingPercentage: 60 },
  ];

  const projectDetails = [
    {
      title: 'SlimMom',
      duration: { fromDate: '2022', toDate: '2023' },
      description:
        'SlimMom is a website designed for busy moms who want to achieve their weight loss goals in a healthy and sustainable way. The site features an adaptive layout, meaning its optimized for viewing on different devices, such as desktop computers, laptops, tablets, and smartphones.',
      subHeading: 'Techonologies Used: SCSS, JS, React, Rest API',
    },
    {
      title: 'Сocktails',
      duration: { fromDate: '2022', toDate: '2023' },
      description:
        'A simple service connected to a server API - you can add,remove or filter cocktails Role: Team lead: organization ofprocesses, pagination, receiving data from Api',
      subHeading:
        'Techonologies Used: Parcel, SCSS, JS, HTML, Node.js, Rest API',
    },
    {
      title: 'Donut',
      duration: { fromDate: '2022', toDate: '2022' },
      description:
        'An interesting layout for selling your services - you can simply go to course registration Role:Developer: development of menu, header and section of hero',
      subHeading: 'Techonologies Used: HTML, SASS, Parcel, JS',
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={'IT School GoIT'}
        subHeading={'Fullstack Developer'}
        fromDate={'2022'}
        toDate={'2023'}
      />
      <ResumeHeading
        heading={'Vinnytsia Cooperative Institute'}
        subHeading={'Bachelor in Finance and Credit specialty'}
        fromDate={'2015'}
        toDate={'2018'}
      />
    </div>,

    /* WORK EXPERIENCE */

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={'Quantula Group'}
          subHeading={'Head of Sales Department'}
          fromDate={'2018'}
          toDate={'2022'}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Achievement: I've increased the sales plan by 35%
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Processing requests from customers
          </span>
          <br />
          <span className="resume-description-text">
            - Coordination of team work
          </span>
          <br />
          <span className="resume-description-text"> - Product sales</span>
          <br />
        </div>
      </div>

      <div className="experience-container">
        <ResumeHeading
          heading={'Rosa Danica'}
          subHeading={'Manager'}
          fromDate={'2017'}
          toDate={'2018'}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Achievement: I've developed a process that allows worked twice as
            fast
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Control of packaging machines
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSlillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + '%' }}
              className="active-percentage"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interest">
      <ResumeHeading
        heading="Hiking"
        description="I love spending time outdoors and exploring nature, hiking could be a great interest for you."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Volleyball"
        description="Whether it's playing on a team or just for fun, playing volleyball can be a great way to stay active and improve your coordination, strength, and agility."
      />
    </div>,
  ];

  const handleCarousal = index => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: 'translateY(' + index * offsetHeight * -1 + 'px)' },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? 'bullet selected-bullet ' : 'bullet'
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };
  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map(ResumeDetail => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container " id={props.id || ''}>
      <div className="resume-content">
        <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
