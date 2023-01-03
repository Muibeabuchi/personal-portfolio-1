const AboutCard = ({ data }) => {
  const { icon, title, stats } = data;
  return (
    <article className="about__card">
      {icon}
      <h5>{title}</h5>
      <small>{stats}</small>
    </article>
  );
};

export default AboutCard;
