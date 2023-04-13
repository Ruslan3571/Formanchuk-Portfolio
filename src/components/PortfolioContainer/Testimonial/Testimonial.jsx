import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ScreenHeading from '../../../utilites/ScreenHeading/ScreenHeading';
import ScrollService from '../../../utilites/ScrollService';
import Animations from '../../../utilites/Animations';
import './Testimonial.css';

function Testimonial(props) {
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
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: 'bounceInRight',
    animateOut: 'bounceOutRight',
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={'Testimonial'}
        subHeading={'What My Client Say About Me'}
      />
      <section className="testimonial-section " id={props.id || ''}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Ruslan enthusiastic to new tasks and persistent in her
                      work. He's has great attention to details and outstanding
                      communication skills. When other team members had
                      difficulties, he was optimistic and glad to helped. It was
                      a great pleasure to work with Ruslan in the same team!
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={require(`../../../components/assets/img/Testimonial/repak.png`)}
                      alt="no internet connection"
                    ></img>
                    <h5>Yana Repak</h5>
                    <p>Junior Frontend Developer</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />I had the opportunity to
                      work on one project under the leadership of Ruslan as a
                      team leader. He perfectly organized the work and
                      distributed the tasks of the whole team, helped in solving
                      individual problems. I recommend him as a competent
                      specialist and team player.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={require(`../../../components/assets/img/Testimonial/vytyaganets.png`)}
                      alt="no internet connection"
                    ></img>
                    <h5>Yuriy Vytyaganets</h5>
                    <p>Front-end Developer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />I can confidently
                      characterize Ruslan as responsible, intelligent,
                      hardworking, open to communication and mutual assistance.
                      I watched him as a team leader, where he showed himself
                      from the best side, as a mentor for his team, ready to
                      help at any moment.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={require(`../../../components/assets/img/Testimonial/kuzyk.png`)}
                      alt="no internet connection"
                    ></img>
                    <h5>Alina Kuzyk</h5>
                    <p>Front-End developer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I had the pleasure working with Ruslan on team projects.
                      We worked on the Cocktails project, where Ruslan was a
                      team leader, and Slim Mama, where he was a scrum master.
                      He is an open and communicative person who likes to write
                      code and program, and his good skills working with GIT are
                      also worth noting.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={require(`../../../components/assets/img/Testimonial/koriavets.png`)}
                      alt="no internet connection"
                    ></img>
                    <h5>Yuliia Koriavets</h5>
                    <p>Frontend developer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      As a Scrum master in a team project, Ruslan accomplished
                      the work: Lead the team in different scrum processes like
                      sprint planning, sprint review, sprint retrospective,
                      presentation of the project. He has excellent
                      organizational abilities. Also he participated in project
                      development
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={require(`../../../components/assets/img/Testimonial/kaplunivska.png`)}
                      alt="no internet connection"
                    ></img>
                    <h5>Olha Kaplunivska</h5>
                    <p>Front-End Developer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I am pleased to write a recommendation for Ruslan, with
                      whom I had the pleasure of working. We worked on a joint
                      project, and I can confidently say that he is a talented
                      and responsible developer. During our time working
                      together, Ruslan demonstrated excellent results in the
                      development and support of our projects.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={require(`../../../components/assets/img/Testimonial/ivanilov.png`)}
                      alt="no internet connection"
                    ></img>
                    <h5>Vladislav Ivanilov</h5>
                    <p>Front-End Developer</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />I worked with Ruslan as
                      a mentor on GoIT courses and as I remember he was a very
                      productive person, is hardworking, intelligent, ambitious
                      and energetic individual. Ruslan is a strong and goal
                      oriented team player, with every problem there was a
                      solution. Highly recommended!
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={require(`../../../components/assets/img/Testimonial/protsiv.png`)}
                      alt="no internet connection"
                    ></img>
                    <h5>Sofia Protsiv</h5>
                    <p>Education Mentor</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img
          src={require(`../../../components/assets/img/Testimonial/shape-bg.png`)}
          alt="no internet connection"
        />
      </div>
    </div>
  );
}

export default Testimonial;
