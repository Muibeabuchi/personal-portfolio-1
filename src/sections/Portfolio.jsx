import PortfolioCard from "../components/PortfolioCard";
import PortFolioCardData from "../data/portfolioData";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {PortFolioCardData.map((data) => {
          return <PortfolioCard key={data.id} data={data} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
