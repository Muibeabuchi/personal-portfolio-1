const PortfolioCard = ({ data }) => {
  const { img, link, github, title } = data;
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-img">
        <img src={img} alt="portfolio image" />
      </div>
      <h3>{title}</h3>
      <div className="portfolio__item-cta">
        <a href={github} className="btn" target="_blank">
          Github
        </a>
        <a href={link} className="btn btn-primary" target="_blank">
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default PortfolioCard;
