import logo from "../assets/images/LogoMasUno.png";
export default function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="" className="header__logo" />
      </header>
    </>
  );
}
