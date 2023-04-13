import React, { useEffect, useState } from 'react';
// import Typical from 'react-typical';
import axios from 'axios';
import { toast } from 'react-toastify';
import imgBack from '../../assets/img/images/mailz.jpeg';
import load1 from '../../assets/img/images/load2.gif';
import ScreenHeading from '../../../utilites/ScreenHeading/ScreenHeading';
import ScrollService from '../../../utilites/ScrollService';
import Animations from '../../../utilites/Animations';
import './ContactMe.css';

function ContactMe(props) {
  let fadeInScreenHandler = screen => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [banner, setBanner] = useState('');
  const [bool, setBool] = useState(false);

  const handleName = e => {
    setName(e.target.value);
  };
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handleMessage = e => {
    setMessage(e.target.value);
  };

  const submitForm = async e => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="main-container " id={props.id || ''}>
      <ScreenHeading subHeading={'Lets Keep In Touch'} title={'Contact Me'} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            'Get In Touch 📧'
            {/* <Typical loop={Infinity} steps={['Get In Touch 📧', 1000]} /> */}
          </h2>
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
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt=" not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label className="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label className="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label className="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                send <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="not responding" />
                  </b>
                ) : (
                  ''
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
