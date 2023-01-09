import React from "react";
import {AiFillFacebook} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiFillTwitterSquare} from 'react-icons/ai';

const Footer = () => {
  return <footer id="footer">
    <a href="#" className="footer__logo">Nerdkidchiki</a>

    <ul className="permalinks">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#sevices">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="#https://facebook.com"><AiFillFacebook /></a>
      <a href="#https://instagram.com"><AiOutlineInstagram /></a>
      <a href="#https://twitter.com"><AiFillTwitterSquare /></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; NerdkidChiki. All right reserved.</small>
    </div>
  </footer>;
};

export default Footer;
