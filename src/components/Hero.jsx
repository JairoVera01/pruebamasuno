import icon1 from "../assets/images/IconosHero.png";
import subrayadoRojo from "../assets/images/SubrayadoRojo.png";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__wrapper container">
        <div className="hero__content">
          <div className="hero__icons-1">
            <img src={icon1} alt="" />
            <span className="hero__icons-1__text">ES HORA DE</span>
          </div>
          <div className="hero__container-title">
            <h1 className="hero__title">
              CYBER DAYS <br /> EN Más Uno
            </h1>
            <img src={subrayadoRojo} alt="" />
          </div>

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
        <div className="hero__form">
          <h2 className="hero__form-title">Completa tus datos</h2>

          <form action="">
            <div className="hero__form-container">
              <div className="hero__form-input">
                <label className="hero__form-input-label" htmlFor="name">
                  Nombres *
                </label>
                <input
                  className="hero__form-input-field"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="hero__form-input">
                <label className="hero__form-input-label" htmlFor="name">
                  Apellidos *
                </label>
                <input
                  className="hero__form-input-field"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="hero__form-input">
                <label className="hero__form-input-label" htmlFor="name">
                  Teléfono *
                </label>
                <input
                  className="hero__form-input-field"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="hero__form-input">
                <label className="hero__form-input-label" htmlFor="name">
                  Correo electrónico *
                </label>
                <input
                  className="hero__form-input-field"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="hero__form-input">
                <label className="hero__form-input-label" htmlFor="name">
                  Tus favoritos
                </label>
                {/* Select input */}
                <select
                  className="hero__form-input-field"
                  name="favorites"
                  id="favorites"
                >
                  <option value="pollo">Pollo</option>
                  <option value="cerdo">Cerdo</option>
                  <option value="res">Res</option>
                  <option value="pescado">Pescado</option>
                </select>
              </div>
            </div>
            <div className="hero__form-checks">
              <div className="hero__form-check">
                <input type="checkbox" name="terms" id="terms" />
                <label className="hero__form-check-label" htmlFor="terms">
                  Acepto los <span>Términos y políticas de privacidad</span>
                </label>
              </div>
              <div className="hero__form-check">
                <input type="checkbox" name="terms" id="terms" />
                <label className="hero__form-check-label" htmlFor="terms">
                  Acepto el <span>Uso de datos personales</span>
                </label>
              </div>
            </div>
            <div className="hero__form-button-container">
              <button type="button" className="hero__form-button">
                Registrarme
              </button>
            </div>
            <p className="hero__form-text">
              Aprovecha las mejores ofertas y descuentos en cerdo, congelados,
              embutidos y <span>mucho más. </span>
              No te pierdas de nada estos Cyberdays registrándote y obteniendo
              grandes descuentos exclusivos.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
