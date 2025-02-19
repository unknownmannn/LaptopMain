import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Catalog.css"; // Подключаем стили
import { useNavigate } from "react-router-dom";

const cars = [
  { name: "G70 SHOOTING BRAKE", image: "/slidercatalog/car1.jpg" },
  { name: "GV80", image: "/slidercatalog/car1.jpg" },
  { name: "GV70", image: "/slidercatalog/car1.jpg" },
  { name: "BMW X5", image: "/slidercatalog/car1.jpg" },
  { name: "Audi A6", image: "/slidercatalog/car1.jpg" }
];

const Catalog = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/catalog"); // Переход на страницу "каталог"
  };

  const settings = {
    dots: true, // Включаем точки переключения
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 3, // По умолчанию 3 автомобиля
    slidesToScroll: 1,
    autoplay: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2 // На планшете 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1 // На телефоне 1
        }
      }
    ]
  };

  return (
    <div className="car-catalog bg-black">
      <div className="titles">
        <h2 className="catalog-title">Каталог автомобилей</h2>
        <h2 onClick={handleNavigate} className="lookforall">
          Посмотреть все {">"}
        </h2>
      </div>
      <Slider {...settings}>
        {cars.map((car, index) => (
          <div
            key={index}
            className="car-item d-flex justify-content-center align-center"
          >
            <div className="car-name">{car.name}</div>
            <img src={car.image} alt={car.name} className="car-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Catalog;
