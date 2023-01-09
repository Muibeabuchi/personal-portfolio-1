import aboutMe from "../assets/pic1.jpg";
import AboutCard from "../components/AboutCard";
import aboutCardData from "../data/aboutCardData";

const About = () => {
  // console.log(aboutCardData);
  return (
    <section id="about" className="about">
      <h5>Get To Know</h5>
      <h2>More About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={aboutMe} alt="about me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {aboutCardData.map((data) => {
              // console.log(data);
              return <AboutCard key={data.id} data={data} />;
            })}
          </div>
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            minima, a voluptas esse facere placeat at saepe fugit. Repellat
            aliquid voluptatibus nulla dolorum sunt laboriosam repudiandae
            recusandae quo laborum ipsum.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
