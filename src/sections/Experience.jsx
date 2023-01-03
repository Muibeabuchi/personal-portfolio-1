import ExperienceCard from "../components/ExperienceCard";
import frontEndData from "../data/experienceData";
import { backEndData } from "../data/experienceData";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontEndData.map((data) => {
              return <ExperienceCard key={data.id} data={data} />;
            })}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backEndData.map((data) => {
              return <ExperienceCard key={data.id} data={data} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
