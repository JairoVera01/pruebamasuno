import { Splide, SplideSlide } from "@splidejs/react-splide";
import LogoMasUno from "../assets/images/IconBrand.png";
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
            <SplideSlide>hola 1</SplideSlide>
            <SplideSlide>hola 2</SplideSlide>
            <SplideSlide>hola 2</SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
  );
}
