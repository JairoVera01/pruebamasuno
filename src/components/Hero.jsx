import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import icon1 from "../assets/images/IconosHero.png";
import subrayadoRojo from "../assets/images/SubrayadoRojo.png";
import { useState } from "react";
import { Toaster, toast } from "sonner";
export default function Hero() {
  //Referencia a la colección de "contactos" en Firestore
  const dataCollection = collection(db, "datamasuno");
  //Estados para almacenar los valores de los campos del formulario
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [favorite, setFavorite] = useState("");
  const [terms, setTerms] = useState(false);
  const [data, setData] = useState(false);
  const [sending, setSending] = useState(false); // Nuevo estado para enviar formulario
  //Funcion para obtener fecha y hora
  const getDateTime = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  //Funcion para enviar los datos del formulario a Firestore
  const sendData = async () => {
    // Validar formatos de los campos con regex
    const regexName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const regexPhone = /^[0-9]{7,10}$/;
    const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    //Validar que todos los campos esten llenos
    if (
      name === "" ||
      lastName === "" ||
      phone === "" ||
      email === "" ||
      favorite === ""
    ) {
      toast.error("Debes llenar todos los campos");
      return;
    }
    //Validar que cumplan los regex
    if (!regexName.test(name)) {
      toast.error("El nombre no es válido");
      return;
    }
    if (!regexName.test(lastName)) {
      toast.error("El apellido no es válido");
      return;
    }
    if (!regexPhone.test(phone)) {
      toast.error("El teléfono no es válido");
      return;
    }
    if (!regexEmail.test(email)) {
      toast.error("El correo no es válido");
      return;
    }

    //Validar que los checkbox esten seleccionados
    if (!terms || !data) {
      toast.error("Debes aceptar los términos y condiciones");
      return;
    }

    try {
      setSending(true); // Cambiar el estado de "sending" a true
      await addDoc(dataCollection, {
        name: name,
        lastName: lastName,
        phone: phone,
        email: email,
        favorite: favorite,
        terms: terms,
        data: data,
        date: getDateTime(),
      });
      toast.success("Datos enviados correctamente");
    } catch (error) {
      console.log(error);
      toast.error("Error al enviar los datos");
    } finally {
      setName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setFavorite("");
      setTerms(false);
      setData(false);
      setSending(false); // Cambiar el estado de "sending" a false
    }
  };

  return (
    <section className="hero">
      <div className="hero__wrapper container">
        <div className="hero__content">
          <div className="hero__icons-1">
            <img src={icon1} alt="Iconos descriptivos" />
            <span className="hero__icons-1__text">ES HORA DE</span>
          </div>
          <div className="hero__container-title">
            <h1 className="hero__title">
              CYBER DAYS <br /> EN Más Uno
            </h1>
            <img src={subrayadoRojo} alt="Linea Roja de subrayado" />
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="hero__form-input">
                <label className="hero__form-input-label" htmlFor="lastname">
                  Apellidos *
                </label>
                <input
                  className="hero__form-input-field"
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="hero__form-input">
                <label className="hero__form-input-label" htmlFor="tlf">
                  Teléfono *
                </label>
                <input
                  className="hero__form-input-field"
                  type="number"
                  name="tlf"
                  id="tlf"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="hero__form-input">
                <label className="hero__form-input-label" htmlFor="email">
                  Correo electrónico *
                </label>
                <input
                  className="hero__form-input-field"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="hero__form-input">
                <label className="hero__form-input-label" htmlFor="favorite">
                  Tus favoritos
                </label>
                {/* Select input */}
                <select
                  className="hero__form-input-field"
                  name="favorites"
                  id="favorites"
                  value={favorite}
                  onChange={(e) => setFavorite(e.target.value)}
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
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  value={terms}
                  onChange={(e) => setTerms(e.target.value)}
                />
                <label className="hero__form-check-label" htmlFor="terms">
                  Acepto los <span>Términos y políticas de privacidad</span>
                </label>
              </div>
              <div className="hero__form-check">
                <input
                  type="checkbox"
                  name="data"
                  id="data"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
                <label className="hero__form-check-label" htmlFor="data">
                  Acepto el <span>Uso de datos personales</span>
                </label>
              </div>
            </div>
            <div className="hero__form-button-container">
              <Toaster richColors duration={5000} position="top-right" />
              <button
                type="button"
                className="hero__form-button"
                onClick={() => sendData()}
                disabled={sending} // Deshabilitar el botón si "sending" es true
              >
                {sending ? "Enviando información..." : "Registrarme"}
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
