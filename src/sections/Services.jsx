import ServicesList from "../components/ServicesList";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX DESIGN</h3>
          </div>
          <ul className="service__list">
            {[1, 2, 3, 4].map((index) => {
              return <ServicesList key={index} />;
            })}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className="service__list">
            {[1, 2, 3, 4].map((index) => {
              return <ServicesList key={index} />;
            })}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>CONTENT CREATION</h3>
          </div>
          <ul className="service__list">
            {[1, 2, 3, 4].map((index) => {
              return <ServicesList key={index} />;
            })}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
