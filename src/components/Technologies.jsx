import { Splide, SplideSlide } from "@splidejs/react-splide";
import slide1 from "../assets/images/slide-1.jpg";
import slide2 from "../assets/images/slide-2.jpg";
import slide3 from "../assets/images/slide-3.jpg";
import LogoMasUno from "../assets/images/IconBrand.png";
import iconslide1 from "../assets/images/icon-slide-1.png";
export default function Technologies() {
  return (
    <section className="technologies">
      <div className="technologies__container ">
        <div className="technologies__wrapper container">
          <img src={LogoMasUno} alt="" />
          <h2 className="technologies__title">
            Las mejores tecnologias de Más uno
          </h2>
        </div>
        <div className="technologies__slider">
          <Splide
            options={{
              rewind: true,
              type: "loop",
              breakpoints: {
                640: {
                  perPage: 1,
                },
              },
              speed: 200,
              interval: 3000,
            }}
          >
            <SplideSlide>
              <div className="technologies__slide">
                <div className="technologies__slide__content">
                  <img src={iconslide1} alt="" />
                  <h3 className="technologies__slide-title">PHP</h3>
                  <p className="technologies__slide-text">
                    Lorem ipsum dolor sit amet consectetur. Cursus cursus erat
                    massa vel id nunc. Ultricies dui pharetra laoreet laoreet
                    laoreet habitasse iaculis lobortis. Amet diam dolor
                    tincidunt congue sagittis in.
                  </p>
                  <button className="technologies__button">
                    Ver tecnología
                  </button>
                </div>
                <img src={slide1} alt="" />
              </div>
            </SplideSlide>
            <SplideSlide>
              {" "}
              <div className="technologies__slide">
                <div className="technologies__slide__content">
                  <img src={iconslide1} alt="" />
                  <h3 className="technologies__slide-title">Flutter</h3>
                  <p className="technologies__slide-text">
                    Lorem ipsum dolor sit amet consectetur. Cursus cursus erat
                    massa vel id nunc. Ultricies dui pharetra laoreet laoreet
                    laoreet habitasse iaculis lobortis. Amet diam dolor
                    tincidunt congue sagittis in.
                  </p>
                  <button className="technologies__button">
                    Ver tecnología
                  </button>
                </div>
                <img src={slide2} alt="" />
              </div>
            </SplideSlide>
            <SplideSlide>
              {" "}
              <div className="technologies__slide">
                <div className="technologies__slide__content">
                  <img src={iconslide1} alt="" />
                  <h3 className="technologies__slide-title">Diseño UX/UI</h3>
                  <p className="technologies__slide-text">
                    Lorem ipsum dolor sit amet consectetur. Cursus cursus erat
                    massa vel id nunc. Ultricies dui pharetra laoreet laoreet
                    laoreet habitasse iaculis lobortis. Amet diam dolor
                    tincidunt congue sagittis in.
                  </p>
                  <button className="technologies__button">
                    Ver tecnología
                  </button>
                </div>
                <img src={slide3} alt="" />
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
  );
}
