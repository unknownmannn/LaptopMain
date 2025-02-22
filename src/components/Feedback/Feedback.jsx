import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Feedback.css";

const feedbacks = [
  {
    name: "Иван Касаткин",
    role: "Купил Skoda Octavia 2019",
    img: "https://randomuser.me/api/portraits/men/10.jpg",
    text: "Огромное спасибо компании MelAuto! Оформление прошло быстро, все документы в порядке. Машина в идеальном состоянии, полностью соответствует описанию!",
  },
  {
    name: "Станислав Корниловский",
    role: "Купил Macbook Pro 2025",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    text: "Отличный сервис! Долго искал хороший вариант, и Labshop помогли мне выбрать идеальный ноутбук. Ноутбук пришел быстро, состояние отличное, никаких проблем!",
  },
  {
    name: "Анна Петрова",
    role: "Купила Asus TUF Gaming 2022",
    img: "https://randomuser.me/api/portraits/women/14.jpg",
    text: "Покупка прошла легко и без проблем! Спасибо команде Labshop за профессионализм. Машина соответствует фото и описанию, без скрытых дефектов.",
  },
  {
    name: "Екатерина Власова",
    role: "Купила Macbook Air 2023",
    img: "https://randomuser.me/api/portraits/women/16.jpg",
    text: "Спасибо labshop за быструю сделку! Ноутбук пришел в идеальном состоянии, никаких сюрпризов. Отличный сервис и грамотные специалисты!",
  },
  {
    name: "Максим Кузнецов",
    role: "Купил Acer-Gadget 2019",
    img: "https://randomuser.me/api/portraits/men/17.jpg",
    text: "Лучший сервис!Labshop помогли с подбором и доставкой Ноутбука. Все четко, честно. Ноутбук – просто огонь! Рекомендую!",
  },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

export default function Feedback() {
  return (
    <div className="feedback-container mb-5" id="feedback">
      <h1 className="headerText mb-5 text-dark">Наши клиенты</h1>
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        dotListClass="custom-dots"
      >
        {feedbacks.map((feedback, index) => (
          <div className="feedback-card" key={index}>
            <img src={feedback.img} alt={feedback.name} className="avatar" />
            <h3>{feedback.name}</h3>
            <p className="role">{feedback.role}</p>
            <div className="stars">★★★★★</div>
            <p className="textFeedback">{feedback.text}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
