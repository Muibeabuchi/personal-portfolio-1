import CTA from "../components/CTA";
import profilePicture from "../assets/pic2.jpg";
import HeaderSocials from "../components/HeaderSocials";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [scrollLength, setScrollLength] = useState(true);
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__container-left">
          <h5>Hello I'm</h5>
          <h1>Miracle Chiki</h1>
          <h5 className="text-light">Full Stack Developer</h5>
          <CTA />
          <HeaderSocials />
          {scrollLength ? (
            <a href="#contact" className="scroll">
              <AiOutlineDown />
            </a>
          ) : (
            <a href="#contact" className="scroll">
              <AiOutlineUp />
            </a>
          )}
        </div>
        <div className="header__container-right">
          <div className="me">
            <img src={profilePicture} alt="profile picture" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
