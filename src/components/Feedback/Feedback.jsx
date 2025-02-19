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
    role: "Купил Toyota Camry 2021",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    text: "Отличный сервис! Долго искал хороший вариант, и MelAuto помогли мне выбрать идеальный автомобиль. Машина пришла быстро, состояние отличное, никаких проблем!",
  },
  {
    name: "Анна Петрова",
    role: "Купила Renault Logan 2015",
    img: "https://randomuser.me/api/portraits/women/14.jpg",
    text: "Покупка прошла легко и без проблем! Спасибо команде MelAuto за профессионализм. Машина соответствует фото и описанию, без скрытых дефектов.",
  },
  {
    name: "Олег Смирнов",
    role: "Купил Nissan X-Trail 2016",
    img: "feedback/man1.svg",
    text: "MelAuto – настоящие профессионалы! Помогли подобрать отличный кроссовер. Оформление прозрачное, доставка быстрая. Очень доволен покупкой!",
  },
  {
    name: "Екатерина Власова",
    role: "Купила Toyota Corolla 2017",
    img: "https://randomuser.me/api/portraits/women/16.jpg",
    text: "Спасибо MelAuto за быструю сделку! Машина пришла в идеальном состоянии, никаких сюрпризов. Отличный сервис и грамотные специалисты!",
  },
  {
    name: "Максим Кузнецов",
    role: "Купил Lexus ES-250 2019",
    img: "https://randomuser.me/api/portraits/men/17.jpg",
    text: "Лучший сервис! MelAuto помогли с подбором и доставкой автомобиля. Все четко, честно и без лишних затрат. Машина – просто огонь! Рекомендую!",
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
      <h1 className="headerText mb-5 text-dark">О НАС ГОВОРЯТ</h1>
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
