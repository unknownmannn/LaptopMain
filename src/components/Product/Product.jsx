import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination"; // Убедитесь, что добавили импорт для пагинации

import "./Product.css";

const Product = ({ product }) => {
  return (
    <>
      <div className="product-card">
        <div className="image-container">
          <Swiper
            pagination={{
              clickable: true,
              dynamicBullets: true,
              renderBullet: (index, className) => (
                <span
                  className={`${className} custom-pagination-bullet`}
                  style={{
                    backgroundColor: index === 0 ? "blue" : "gray", // Можно изменить цвет активной точки
                  }}
                />
              ),
            }}
            modules={[Pagination]}
            className="swiper-container"
          >
            {product.imageUrls.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img.url}
                  alt={`${product.name} ${index + 1}`}
                  className="product-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="product-info">
          <p className="product-price">{product.price.toLocaleString()} $</p>
          <p className="product-name">
            {product.brand.toUpperCase()} {product.model.toUpperCase()}{" "}
            {product.year}
          </p>
        </div>
      </div>
    </>
  );
};

export default Product;
