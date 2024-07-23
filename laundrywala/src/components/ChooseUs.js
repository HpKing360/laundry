import React, { useState } from "react";
import { Card, CardBody, CardHeader, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faLiraSign, faMedal, faMoneyBillAlt, faSoap, faTruck } from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";

const details = [
  {
    src: <FontAwesomeIcon icon={faTruck} />,
    name: "Free Pickup & Delivery",
    title: "Doorstep Pickup and Your clothes will be delivered at your doorstep on time and as fresh as daisy.",
  },
  {
    src: <FontAwesomeIcon icon={faSoap} />,
    name: "Hygienic",
    title: "Your clothes are hygienically washed so they are germ free and clean. The way you think about laundry!",
  },
  {
    src: <FontAwesomeIcon icon={faLiraSign} />,
    name: "Affordable",
    title: "No Additional Cost! You pay just as same as the price set by your selected laundry vendor.",
  },
  {
    src: <FontAwesomeIcon icon={faLeaf} />,
    name: "Eco Friendly",
    title: "Local residents love on our reliable laundry & dry cleaning details for the fast, accurate, top-quality results.",
  },
  {
    src: <FontAwesomeIcon icon={faMedal} />,
    name: "Quality Guarantee",
    title: "We are professionals in the laundry business, which means we are always up to date on the latest technologies.",
  },
  {
    src: <FontAwesomeIcon icon={faMoneyBillAlt} />,
    name: "Transparent Pricing",
    title: "In Affordable price our details in the same budget or less than any other local laundry details near you.",
  },
];

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-0.5rem);
  }
  60% {
    transform: translateY(-0.25rem);
  }
`;

const Section = styled.section`
  padding: 5vw 0;
  background: linear-gradient(109.5deg, rgb(13, 11, 136) 9.4%, rgb(86, 255, 248) 78.4%);
  animation: ${fadeIn} 1s ease-in-out;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 5vw;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ selected }) => (selected ? "black" : "white")};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: black;
  }
`;

const DetailsCard = styled(Card)`
  animation: ${fadeIn} 1s ease-in-out;
  transition: transform 0.3s, box-shadow 0.3s;
  border: none;
  border-radius: 1rem;
  margin: 2vw;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-1rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
`;

const DetailsCardHeader = styled(CardHeader)`
  background: transparent;
  border: none;
  font-size: 4rem;
  color: #ff8c00;
  animation: ${bounce} 2s infinite;
`;

const DetailsCardBody = styled(CardBody)`
  padding: 2rem;
`;

const DetailsCardTitle = styled(CardTitle)`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const DetailsCardText = styled(CardText)`
  font-size: 1rem;
  color: #666;
  transition: color 0.3s;

  ${DetailsCard}:hover & {
    color: blue;
  }
`;

const ChooseUs = () => {
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleTitleClick = (name) => {
    setSelectedTitle(name);
  };

  return (
    <Section id="ChooseUs">
      <Container>
        <Header>
          <Title selected={selectedTitle === "Why Choose Us ?"} onClick={() => handleTitleClick("Why Choose Us ?")}>
            Why Choose Us?
          </Title>
        </Header>
        <Row>
          {details.map((item, index) => (
            <Col md={4} key={index}>
              <DetailsCard className="details-card p-4 my-3 text-center">
                <DetailsCardHeader className={`shape-${index + 1}`}>
                  <span className="icon-size">{item.src}</span>
                </DetailsCardHeader>
                <DetailsCardBody>
                  <DetailsCardTitle>{item.name}</DetailsCardTitle>
                  <DetailsCardText>{item.title}</DetailsCardText>
                </DetailsCardBody>
              </DetailsCard>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default ChooseUs;
