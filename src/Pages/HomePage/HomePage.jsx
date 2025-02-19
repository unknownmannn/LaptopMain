import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css";
import Application from "../../components/Application/Application";
import Catalog from "../../components/Catalog/Catalog";
import Services from "../../components/Servises/Services";
import About from "../../components/AboutPage/About";
import Feedback from "../../components/Feedback/Feedback";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  const images = [
    "/slider/car4.jpg",
    "/slider/car2.jpg",
    "/slider/car1.jpg",
    "/slider/car3.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800, // Плавность
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    fade: false, // Отключил fade для нормального переключения
    arrows: false,
  };

  const scrollToSection = () => {
    const formSection = document.getElementById("application");
    if (formSection) {
      const offset = 115; // Изменяй отступ по высоте хедера
      const elementPosition =
        formSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="slider-container">
        <div className="bannerText">
          <h2 className="text">
            Автомобили из Европы под ключ. Качество и надежность на каждом
            этапе.
          </h2>
          <button onClick={scrollToSection} className="buttonBanner">
            Оставить заявку
          </button>
        </div>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slider-item">
              <div
                className="banner"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="bannerOverlay"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <About />
      <Feedback />
      <Catalog />
      <Services />
      <Application />
      <Footer />
    </div>
  );
}
