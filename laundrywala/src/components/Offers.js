import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardText, Col, Container, Row, Badge } from "reactstrap";
import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

const Section = styled.section`
  background: #acb6e5;
  background: -webkit-linear-gradient(to right, #86fde8, #acb6e5);
  background: linear-gradient(to right, #86fde8, #acb6e5);
  padding: 5vw 0;
  position: relative;
  overflow: hidden;
`;

const bubbleAnimation = keyframes`
  0% {
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-1000px) translateX(100px);
    opacity: 0;
  }
`;

const bubbleSideAnimation = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(1000px);
    opacity: 0;
  }
`;

const Bubble = styled.div`
  position: absolute;
  width: 4vw;
  height: 4vw;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: ${bubbleAnimation} 20s infinite;
  opacity: 0;

  &:nth-child(odd) {
    width: 6vw;
    height: 6vw;
    animation-duration: 25s;
  }

  &:nth-child(even) {
    animation-duration: 15s;
  }
`;

const BubbleSide = styled(Bubble)`
  animation: ${bubbleSideAnimation} 20s infinite;

  &:nth-child(odd) {
    animation-duration: 25s;
  }

  &:nth-child(even) {
    animation-duration: 15s;
  }
`;

const OfferCard = styled(Card)`
  background-color: #ffffff;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3);
  }
  text-align: center;
  margin: 2vw;
`;

const OfferCardBody = styled(CardBody)`
  padding: 2rem;
`;

const OfferTitle = styled(CardTitle)`
  color: ${props => (props.clicked ? "black" : "black")};
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #333;
  }
`;

const OfferText = styled(CardText)`
  color: #666;
  font-size: 1.2rem;
`;

const moveLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-10px);
  }
`;

const OfferLogo = styled.div`
  font-size: 3rem;
  color: ${props => (props.clicked ? "#007bff" : "#ff6347")};
  margin-bottom: 1rem;
  cursor: pointer;
  ${props =>
    props.clicked &&
    css`
      animation: ${moveLeft} 0.5s forwards;
    `}
`;

const OfferCardComponent = ({ title, text, isPopular, isBestValue }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <Col md={6} lg={3} className="d-flex justify-content-center mt-4">
      <OfferCard>
        <OfferCardBody>
          <OfferLogo clicked={clicked} onClick={handleClick}>
            <FontAwesomeIcon icon={faTag} />
          </OfferLogo>
          <OfferTitle clicked={clicked}>{title}</OfferTitle>
          <OfferText>{text}</OfferText>
          {isPopular && <Badge color="warning" className="mt-2">Popular</Badge>}
          {isBestValue && <Badge color="danger" className="mt-2">Best Value</Badge>}
        </OfferCardBody>
      </OfferCard>
    </Col>
  );
};

const Offers = () => {
  return (
    <Section id="offers">
      <Container>
        <div className="d-flex justify-content-center py-3">
          <h2 className="text-title head-title" style={{ color: "black" }}>Our Membership Plans</h2>
        </div>
        <Row className="justify-content-center">
          <OfferCardComponent title="₹99 / 1 Month" text="3 free pickups and deliveries in a month" />
          <OfferCardComponent title="₹199 / 3 Months" text="15 free pickups and deliveries" isPopular />
          <OfferCardComponent title="₹299 / 6 Months" text="Unlimited free pickups and deliveries with semi laundry" />
          <OfferCardComponent title="₹499 / 12 Months" text="Unlimited free pickups and deliveries with more offers" isBestValue />
        </Row>
      </Container>
      {[...Array(20)].map((_, i) => (
        <Bubble key={i} style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 20}s` }} />
      ))}
      {[...Array(20)].map((_, i) => (
        <BubbleSide key={i} style={{ bottom: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 20}s` }} />
      ))}
    </Section>
  );
};

export default Offers;
