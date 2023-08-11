import logo from "../assets/images/LogoMasUno.png";
export default function Header() {
  return (
    <>
      <header className="header">
        <img
          src={logo}
          alt="Logo de la compañia"
          title="Logo de la Compañoa Mas uno"
          className="header__logo"
        />
      </header>
    </>
  );
}
