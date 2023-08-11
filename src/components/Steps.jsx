import iconSteps from "../assets/images/IconSteps.png";
export default function Steps() {
  return (
    <section className="steps container">
      <div className="steps__separator">
        <img src={iconSteps} alt="" />
      </div>
      <div className="steps__content">
        <h2 className="steps__title">
          ¿Como obtengo el descuento por Cyber Days?
        </h2>
      </div>
      <div className="steps__separator">
        <img src={iconSteps} alt="" />
      </div>
    </section>
  );
}
