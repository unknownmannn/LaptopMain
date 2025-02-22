import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  justify-self: center;
  margin-top: 80px;
`;

const Content = styled.div`
  color: #333;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  margin-top: 30px;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const Highlight = styled.span`
  font-weight: 600;
`;

const List = styled.ul`
  padding-left: 20px;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <Image
        src="/5316625005540404375.jpg"
        alt="Aleh Miliakou"
      />

      <Content>
        <Title>О компании Labtop</Title>
        <Text>
          Здравствуйте, Нас зовут <Highlight>Асылжан и Нурахмад</Highlight>, и
          позвольте рассказать немного про нас.
        </Text>

        <Text>
          Мы<Highlight>продаем и покупаем</Highlight> разных видов ноутбука <Highlight>от 2015</Highlight> до нового
          которые в очень хорошем или же в среднем состояний{" "}
          <Highlight>Macbook, Acer,Vivobook, Acer</Highlight> и других.
        </Text>

        <Text>
  Эти годы научили меня{" "}
  <Highlight>технологиям, вниманию к деталям и качественному сервису</Highlight> —  
  качествам, которые я переношу в свою работу и бизнес.
</Text>

<Title>Почему мне можно доверять?</Title>
<List>
  <ListItem>
    <Highlight>Широкий ассортимент</Highlight> — У нас есть ноутбуки для работы, учебы и игр  
    от ведущих мировых брендов.
  </ListItem>
  <ListItem>
    <Highlight>Честность</Highlight> — Мы предлагаем только проверенную технику с  
    официальной гарантией.
  </ListItem>
  <ListItem>
    <Highlight>Клиентоориентированность</Highlight> — Помогаем подобрать ноутбук,  
    который подойдет именно вам.
  </ListItem>
</List>

<Text>
  В компании <Highlight>Labshop</Highlight> мы предлагаем{" "}
  <Highlight>качественные ноутбуки с доставкой по всей стране</Highlight>,  
  делая процесс покупки удобным и надежным.
</Text>

<Text>
  Если вы ищете надежного продавца ноутбуков —{" "}
  <Highlight>вы по адресу!</Highlight>
</Text>
      </Content>
    </AboutContainer>
  );
};

export default About;
