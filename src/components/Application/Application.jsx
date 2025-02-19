import "./Application.css";

import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const Application = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "+7",
    email: "",
    city: "",
    carDetails: "",
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div id="application" className="applContainer container mt-5 mb-5">
      <h2 className="mb-4">ОСТАВИТЬ ЗАЯВКУ</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="fullName">
              <Form.Label>ФИО *</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="phone">
              <Form.Label>Телефон *</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="city">
              <Form.Label>Страна</Form.Label>
              <Form.Select
                name="city"
                value={formData.city}
                onChange={handleChange}
              >
                <option value="">- не выбрано -</option>
                <option value="Азербайджан">Азербайджан</option>
                <option value="Армения">Армения</option>
                <option value="Беларусь">Беларусь</option>
                <option value="Казахстан">Казахстан</option>
                <option value="Кыргызстан">Кыргызстан</option>
                <option value="Молдова">Молдова</option>
                <option value="Россия">Россия</option>
                <option value="Таджикистан">Таджикистан</option>
                <option value="Узбекистан">Узбекистан</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="carDetails" className="mb-3">
          <Form.Label>Укажите желанный автомобиль</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="carDetails"
            value={formData.carDetails}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="consent" className="mb-3">
          <Form.Check
            type="checkbox"
            label="Я даю согласие на сбор и обработку информации"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit" className="btn btn-dark w-50">
          Отправить заявку
        </Button>
      </Form>
    </div>
  );
};

export default Application;
