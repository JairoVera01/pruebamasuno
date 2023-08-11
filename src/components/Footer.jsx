import LogoMasUno from "../assets/images/LogoMasUno.png";
import Social1 from "../assets/images/IconFooter1.png";
import Social2 from "../assets/images/IconFooter2.png";
import Social3 from "../assets/images/IconFooter3.png";
export default function Footer() {
  
  return (
    <section className="footer">
      <div className="footer__container container">
        <div className="footer__content-1">
          <img src={LogoMasUno} alt="Icono de marca" />
          <span className="footer__content-1--title">Nosotros</span>
          <span>Somos Mas uno</span>
        </div>
        <div className="footer__content-2">
          <span className="footer__content-2__title">Te informamos</span>
          <ul className="footer__content-2__list">
            <li className="footer__content-2__item">
              <a className="footer__content-2__link" href="">
                Preguntas frecuentes
              </a>
            </li>
            <li className="footer__content-2__item">
              <a className="footer__content-2__link" href="">
                Términos y condiciones
              </a>
            </li>
            <li className="footer__content-2__item">
              <a className="footer__content-2__link" href="">
                Medios de pago
              </a>
            </li>
            <li className="footer__content-2__item">
              <a className="footer__content-2__link" href="">
                Políticas de entrega
              </a>
            </li>
            <li className="footer__content-2__item">
              <a className="footer__content-2__link" href="">
                Libro de reclamaciones
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__content-3">
          <span className="footer__content-2__title">Contáctanos</span>
          <div className="footer__content-3__tlf">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M23.3707 17.7659L20.0143 14.4096C18.8157 13.2109 16.7779 13.6904 16.2984 15.2486C15.9388 16.3275 14.7401 16.9268 13.6613 16.6871C11.2639 16.0877 8.02748 12.9711 7.42814 10.4539C7.06853 9.37503 7.78775 8.17635 8.86656 7.81679C10.4249 7.33731 10.9043 5.29955 9.70564 4.10086L6.34932 0.744544C5.39038 -0.0945355 3.95195 -0.0945355 3.11287 0.744544L0.835372 3.02205C-1.44213 5.41942 1.07511 11.7724 6.70893 17.4063C12.3428 23.0401 18.6958 25.6772 21.0932 23.2798L23.3707 21.0023C24.2098 20.0434 24.2098 18.605 23.3707 17.7659Z"
                fill="white"
              />
            </svg>
            <span>000 000 000</span>
          </div>
          <div className="footer__content-3__socials">
            <img src={Social1} alt="" />
            <img src={Social2} alt="" />
            <img src={Social3} alt="" />
          </div>
          <span className="footer__content-3__copy">
            © 2022 Mas uno Lima - Perú
          </span>
        </div>
      </div>
    </section>
  );
}
