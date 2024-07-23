import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Carousel,
  CarouselIndicators,
  CarouselItem,
  Col,
  Container,
  Row,
} from "reactstrap";
import styled, { keyframes } from "styled-components";

const items = [
  {
    src: require("../images/1716555978595.webp"),
  },
  {
    src: require("../images/1716555680392.jpg"),
  },
  {
    src: require("../images/1716555680373.jpg"),
  },
  {
    src: require("../images/1716555680353.jpg"),
  },
  {
    src: require("../images/1716815586898.png"),
  },
  {
    src: require("../images/1716815586860.webp"),
  },
  {
    src: require("../images/1716815586877.jpg"),
  },
];

const Section = styled.section`
  background: linear-gradient(89.2deg, rgb(191, 241, 236) 22.3%, rgb(109, 192, 236) 84.1%);
  padding: 80px 0;
  display: flex;
  min-height: 87vh;
  position: relative;
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
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: ${bubbleAnimation} 20s infinite;
  opacity: 0;

  &:nth-child(odd) {
    width: 80px;
    height: 80px;
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

const SlideText = styled.div`
  margin-top: 100px;
  color: white;
  text-align: left;
  z-index: 1; /* Ensure text is above bubbles */
`;

const SlideTitle = styled.h2`
  font-size: 4rem; /* Increased font size */
  font-weight: bold;
  color: black; /* Changed color to black */
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  .text-title {
    color: yellow;
  }
`;

const SlideDescription = styled.p`
  font-size: 1.6rem; /* Increased font size */
  color: black;
  padding-right: 20px;
  font-family: 'Arial', sans-serif; /* Changed to a professional font style */
  line-height: 1.4; /* Added line height for better readability */
`;

const SlideButtonLink = styled(Link)`
  text-decoration: none;
`;

const SlideButton = styled(Button)`
  background: linear-gradient(45deg, #007bff, #0056b3);
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  padding: 10px 20px;
  margin: 20px auto 0;
  display: block;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(45deg, #0056b3, #007bff);
  }
`;

const CarouselImage = styled.img`
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 500px;
  object-fit: cover;
  width: 100%;
`;

const HomeSlideshow = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <Section id="Homeslideshow">
      <Container>
        <Row>
          <Col md={7}>
            <SlideText>
              <SlideTitle>
                Best <span className="text-title">Wash and Iron Service</span> <br /> at Your Doorstep...
              </SlideTitle>
              <SlideDescription>
                <b>
                LaundryWala is an Online Laundry Platform with the latest technology in washing, dry cleaning, and laundry. Our services combine our expertise and experience acquired over a period of time to provide you with clean laundry in the shortest possible turnaround time.
              </b>
              </SlideDescription>
              <SlideButtonLink to="/services">
                <SlideButton color="primary">View Services</SlideButton>
              </SlideButtonLink>
            </SlideText>
          </Col>

          <Col md={5} className="d-flex align-items-center">
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              interval={3000}  // Set interval to 3 seconds for automatic transition
            >
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {items.map((item, index) => (
                <CarouselItem
                  key={index}
                  onExiting={onExiting}
                  onExited={onExited}
                >
                  <CarouselImage src={item.src} alt={`Slide ${index}`} className="img-fluid" />
                </CarouselItem>
              ))}
              <a
                className="carousel-control-prev"
                data-slide="prev"
                onClick={(e) => {
                  e.preventDefault();
                  previous();
                }}
                role="button"
                href="/"
              >
                <i className="now-ui-icons arrows-1_minimal-left" />
              </a>
              <a
                className="carousel-control-next"
                data-slide="next"
                onClick={(e) => {
                  e.preventDefault();
                  next();
                }}
                role="button"
                href="/"
              >
                <i className="now-ui-icons arrows-1_minimal-right" />
              </a>
            </Carousel>
          </Col>
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

export default HomeSlideshow;
