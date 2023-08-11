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
            <div className="hero__border">
              <span className="hero__cupon-title">Regístrate y obtén</span>
              <div className="hero__percentage">
                <span className="hero__percentage-number">10%</span>
                <span className="hero__percentage-text">
                  En tu primera <br /> compra de <br />
                  <span>CYBER DAY</span>
                </span>
              </div>
              <div className="hero__disclamer">
                <p>
                  Aplicamos el descuento mediante un código que se te eviará a
                  tu correo registrado.{" "}
                </p>
                <p>Cupón válido del 28 al 30 de marzo.</p>
                <p>*Aplican términos y condiciones</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__form">Item2</div>
      </div>
    </section>
  );
}
