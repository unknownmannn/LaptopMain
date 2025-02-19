import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaWhatsapp,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaTelegramPlane
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer bg-black text-white py-4">
      <Container>
        <hr className="footer-line" />
        <Row className="align-items-center text-center text-md-start">
          {/* Call-центр */}
          <Col
            xs={12}
            md={4}
            className="mb-3 mb-md-0 d-flex align-items-center justify-content-center justify-content-md-start"
          >
            <FaPhone className="icon me-2" />
            <div>
              <span className="d-block">Позвонить</span>
              <strong>+7(777)-123-45-67</strong>
            </div>
          </Col>

          {/* E-mail */}
          <Col
            xs={12}
            md={4}
            className="mb-3 mb-md-0 d-flex align-items-center justify-content-center"
          >
            <FaEnvelope className="icon me-2" />
            <div>
              <span className="d-block">E-mail</span>
              <strong>example@melauto.kz</strong>
            </div>
          </Col>

          {/* Соц. сети */}
          <Col xs={12} md={4} className="text-center text-md-end">
            <a href="https://wa.me/77086459916" className="social-icon">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com" className="social-icon ms-3">
              <FaInstagram />
            </a>
            <a href="https://t.me/dkikowe" className="social-icon ms-3">
              <FaTelegramPlane />
            </a>
          </Col>
        </Row>

        {/* Копирайт */}
        <Row className="mt-3">
          <Col className="text-center text-md-end">
            <small>2025 © melauto</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
