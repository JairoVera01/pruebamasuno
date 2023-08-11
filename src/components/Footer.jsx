import LogoMasUno from "../assets/images/LogoMasUno.png";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__container container">
        <div className="footer__content-1">
          <img src={LogoMasUno} alt="Icono de marca" />
          <span>Nosotros</span>
          <span>Somos Mas uno</span>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </section>
  );
}
