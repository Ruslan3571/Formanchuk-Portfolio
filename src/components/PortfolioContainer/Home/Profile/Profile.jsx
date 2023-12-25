import React from 'react';
import ScrollService from '../../../../utilites/ScrollService';
import './Profile.css';
import Typewriter from 'typewriter-effect';

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://www.facebook.com/profile.php?id=100003372431767"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://t.me/rus_3_5_7" target="_blank" rel="noreferrer">
                <i className="fa fa-telegram"></i>
              </a>
              <a
                href="https://github.com/Ruslan3571"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ruslan-formanchuk/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M <span className="highlighted-text">Ruslan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typewriter
                  options={{
                    strings: [
                      'Developer',
                      'Ethusiastic Dev 🤩',
                      'Full Stack Developer 💻',
                      'React Dev 😎',
                      'I love what I do - code ⚡',
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building application with front and back and operations.
            </span>
          </div>

          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a
              href="https://drive.google.com/file/d/1gZIS2aVAcJwBUvNzkaP-acYlfDHqnd_A/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              download
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
