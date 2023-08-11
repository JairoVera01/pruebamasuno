import icon1 from "../assets/images/IconosHero.png";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__wrapper container">
        <div className="hero__content">
          <div className="hero__icons-1">
            <img src={icon1} alt="" />
            <span className="hero__icons-1__text">ES HORA DE</span>
          </div>
          <h1 className="hero__title">
            CYBER DAYS <br /> EN Más Uno
          </h1>
          <p className="hero__dates">Del 28 al 30 de marzo</p>
          <div className="hero__cupon">
            <span>Registrate y obten</span>
          </div>
        </div>
        <div className="hero__form">Item2</div>
      </div>
    </section>
  );
}
