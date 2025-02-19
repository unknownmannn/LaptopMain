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
        src="https://media.istockphoto.com/id/1044744690/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D1%81-%D0%B1%D0%BE%D1%80%D0%BE%D0%B4%D0%BE%D0%B9-%D0%BF%D0%BE%D0%B7%D0%B8%D1%80%D1%83%D0%B5%D1%82-%D0%B2-%D0%B4%D0%B5%D0%BB%D0%BE%D0%B2%D0%BE%D0%BC-%D0%BA%D0%BE%D1%81%D1%82%D1%8E%D0%BC%D0%B5.jpg?s=1024x1024&w=is&k=20&c=cNOhfqfF03re5dRWndY5hD5vH9nf_AuWkHtESUCXv5A="
        alt="Aleh Miliakou"
      />

      <Content>
        <Title>О компании Melauto</Title>
        <Text>
          Здравствуйте, меня зовут <Highlight>Aleh Miliakou</Highlight>, и
          позвольте рассказать немного о себе.
        </Text>

        <Text>
          Более <Highlight>20 лет</Highlight> я посвятил боевым единоборствам:
          от бокса и Кудо до ММА. В последние <Highlight>10 лет</Highlight> я
          работаю судьей и рефери на крупнейших международных турнирах:{" "}
          <Highlight>UFC, M1 Global, ACA, Brave FC</Highlight> и других.
        </Text>

        <Text>
          Эти годы научили меня{" "}
          <Highlight>дисциплине, честности и ответственности</Highlight> —
          качествам, которые я переношу в свою работу и бизнес.
        </Text>

        <Title>Почему мне можно доверять?</Title>
        <List>
          <ListItem>
            <Highlight>Опыт и профессионализм</Highlight> — Работа на
            международной арене научила меня точности и ответственности.
          </ListItem>
          <ListItem>
            <Highlight>Прозрачность</Highlight> — Я делаю процесс покупки
            автомобиля честным и понятным.
          </ListItem>
          <ListItem>
            <Highlight>Публичный статус</Highlight> — Работа с топовыми
            спортсменами подтверждает мою надежность.
          </ListItem>
        </List>

        <Text>
          В компании <Highlight>Melauto</Highlight> мы занимаемся{" "}
          <Highlight>экспортом автомобилей из Европы в СНГ</Highlight>, делая
          этот процесс удобным и безопасным.
        </Text>

        <Text>
          Если вы ищете надежного партнера для покупки авто —{" "}
          <Highlight>вы по адресу!</Highlight>
        </Text>
      </Content>
    </AboutContainer>
  );
};

export default About;
