// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Button,
//   Card,
//   CardBody,
//   CardImg,
//   CardText,
//   CardTitle,
//   Col,
//   Container,
//   Row,
// } from "reactstrap";
// import styled from "styled-components";
// import backgroundImage from '../images/bluebg.jpg';

// const Section = styled.section`
//   background-image: url(${backgroundImage});
//   background-size: cover;
//   background-position: center;
//   padding: 5vh 0;
//   min-height: 100vh;
// `;

// const ServiceCard = styled(Card)`
//   width: 90%;
//   max-width: 20rem;
//   margin: auto;
//   margin-bottom: 3vh;
//   transition: transform 0.3s ease-in-out;

//   &:hover {
//     transform: translateY(-1vh);
//     box-shadow: 0 0.8vh 1.6vh rgba(0, 0, 0, 0.2);
//   }
// `;

// const ServiceImage = styled(CardImg)`
//   border-radius: 1em;
// `;

// const ServiceTitle = styled(CardTitle)`
//   font-size: 1.8em;
//   font-weight: bold;
//   color: white;
// `;

// const ServiceDescription = styled(CardText)`
//   font-size: 1em;
//   color: black;
// `;

// const ServiceButtonLink = styled(Link)`
//   text-decoration: none;
// `;

// const ServiceButton = styled(Button)`
//   background: linear-gradient(45deg, #007bff, #0056b3);
//   border: none;
//   border-radius: 0.5em;
//   font-size: 1em;
//   font-weight: bold;
//   color: white;
//   padding: 0.5em 1em;
//   display: block;
//   margin: 2vh auto 0;
//   cursor: pointer;
//   transition: background 0.3s ease-in-out;

//   &:hover {
//     background: linear-gradient(45deg, #0056b3, #007bff);
//   }
// `;

// const Services = () => {
//   const services = [
//     {
//       src: require("../images/wash-iron.jpeg"),
//       name: "Wash & Iron",
//       title:
//         "All your regular wear garments will be washed, steam ironed and neatly packed for delivery.",
//       link: "/WashAndIron",
//     },
//     {
//       src: require("../images/wash-fold.jpg"),
//       name: "Wash & Steam",
//       title:
//         "Just in case you choose not to use our steam ironing services we will wash and fold them for you.",
//       link: "/WashAndFold",
//     },
//     {
//       src: require("../images/iron-fold.jpg"),
//       name: "Iron & Fold",
//       title:
//         "Get back your dirty clothes. Your clothes we will ironed and pressed to look the best for you.",
//       link: "/IronAndFold",
//     },
//     {
//       src: require("../images/dry-cleaning.webp"),
//       name: "Dry Cleaning",
//       title:
//         "All your sensitive and special garments will be individually treated for any stains and dry cleaned.",
//       link: "/DryCleaning",
//     },
//     {
//       src: require("../images/emergency.jpg"),
//       name: "Emergency Service",
//       title:
//         "You can use our emergency service to receive services easily and quickly in our machines using very safe.",
//       link: "/EmergencyService",
//     },
//   ];

//   return (
//     <Section id="services">
//       <Container>
//         <div className="d-flex justify-content-center py-3 mt-5">
//           <h2 className="text-title head-title text-white" style={{ fontSize: '2.5em' }}>Our Services</h2>
//         </div>
//         <Row>
//           {services.map((service, index) => (
//             <Col md={4} key={index}>
//               <ServiceCard>
//                 <ServiceImage src={service.src} top />
//                 <CardBody>
//                   <ServiceTitle>{service.name}</ServiceTitle>
//                   <ServiceDescription>{service.title}</ServiceDescription>
//                   <ServiceButtonLink to={service.link}>
//                     <ServiceButton>
//                       <i className="now-ui-icons arrows-1_minimal-right" />
//                       <span className="nav-name">Select Service</span>
//                     </ServiceButton>
//                   </ServiceButtonLink>
//                 </CardBody>
//               </ServiceCard>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </Section>
//   );
// };

// export default Services;
// src/components/Services.js
import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import styled from "styled-components";
import backgroundImage from '../images/bluebg.jpg';

const Section = styled.section`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  padding: 5vh 0;
  min-height: 100vh;
`;

const ServiceCard = styled(Card)`
  width: 90%;
  max-width: 20rem;
  margin: auto;
  margin-bottom: 3vh;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-1vh);
    box-shadow: 0 0.8vh 1.6vh rgba(0, 0, 0, 0.2);
  }
`;

const ServiceImage = styled(CardImg)`
  border-radius: 1em;
`;

const ServiceTitle = styled(CardTitle)`
  font-size: 1.8em;
  font-weight: bold;
  color: white;
`;

const ServiceDescription = styled(CardText)`
  font-size: 1em;
  color: black;
`;

const ServiceButtonLink = styled(Link)`
  text-decoration: none;
`;

const ServiceButton = styled(Button)`
  background: linear-gradient(45deg, #007bff, #0056b3);
  border: none;
  border-radius: 0.5em;
  font-size: 1em;
  font-weight: bold;
  color: white;
  padding: 0.5em 1em;
  display: block;
  margin: 2vh auto 0;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(45deg, #0056b3, #007bff);
  }
`;

const Services = () => {
  const services = [
    {
      src: require("../images/wash-iron.jpeg"),
      name: "Wash & Iron",
      title:
        "All your regular wear garments will be washed, steam ironed and neatly packed for delivery.",
      link: "/WashAndIron",
    },
    {
      src: require("../images/wash-fold.jpg"),
      name: "Wash & Steam",
      title:
        "Just in case you choose not to use our steam ironing services we will wash and fold them for you.",
      link: "/WashAndFold",
    },
    {
      src: require("../images/iron-fold.jpg"),
      name: "Iron & Fold",
      title:
        "Get back your dirty clothes. Your clothes we will ironed and pressed to look the best for you.",
      link: "/IronAndFold",
    },
    {
      src: require("../images/dry-cleaning.webp"),
      name: "Dry Cleaning",
      title:
        "All your sensitive and special garments will be individually treated for any stains and dry cleaned.",
      link: "/DryCleaning",
    },
    {
      src: require("../images/emergency.jpg"),
      name: "Emergency Service",
      title:
        "You can use our emergency service to receive services easily and quickly in our machines using very safe.",
      link: "/EmergencyService",
    },
  ];

  return (
    <Section id="services">
      <Container>
        <div className="d-flex justify-content-center py-3 mt-5">
          <h2 className="text-title head-title text-white" style={{ fontSize: '2.5em' }}>Our Services</h2>
        </div>
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index}>
              <ServiceCard>
                <ServiceImage src={service.src} top />
                <CardBody>
                  <ServiceTitle>{service.name}</ServiceTitle>
                  <ServiceDescription>{service.title}</ServiceDescription>
                  <ServiceButtonLink to={`/service/${encodeURIComponent(service.name)}`}>
                    <ServiceButton>
                      <i className="now-ui-icons arrows-1_minimal-right" />
                      <span className="nav-name">Select Service</span>
                    </ServiceButton>
                  </ServiceButtonLink>
                </CardBody>
              </ServiceCard>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default Services;
