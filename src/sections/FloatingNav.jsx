import { useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const FloatingNav = () => {
  const [active, setActive] = useState("home");
  return (
    <nav id="floating-nav">
      <a
        href="#header"
        onClick={() => setActive("home")}
        className={`${active == "home" && "active"} `}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("about")}
        className={`${active == "about" && "active"} `}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("experience")}
        className={`${active == "experience" && "active"} `}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActive("services")}
        className={`${active == "services" && "active"} `}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("contact")}
        className={`${active == "contact" && "active"} `}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default FloatingNav;
