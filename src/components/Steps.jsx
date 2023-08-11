import iconSteps from "../assets/images/IconSteps.png";
export default function Steps() {
  return (
    <section className="steps ">
      <div className="steps__contaienr container">
        <div className="steps__separator">
          <img src={iconSteps} alt="" />
        </div>
        <h2>¿Como obtengo el descuento por Cyber Days?</h2>
      </div>
    </section>
  );
}
