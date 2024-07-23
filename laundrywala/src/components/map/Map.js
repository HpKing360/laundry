import React from "react";
import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap";
import "./Map.css"; // Import CSS for styling

const Map = () => {
  // Define an array of nearby laundry services with map links
  const nearbyLaundryServices = [
    { name: "Tumble Dry Laundry", location: "Bellandur, Bangalore", link: "https://maps.app.goo.gl/zgtchEyzugZBU32UA" },
    { name: "Laundrokart Laundry", location: "Doddakannelli, Bangalore", link: "https://maps.app.goo.gl/g5ns7mWq2tbrGTEh8" },
    { name: "Clean Genie Express Laundry", location: "Whitefield, Bangalore", link: "https://maps.app.goo.gl/gHpYnQ5TvV15CYsX8" },
    { name: "Coin Laundromart Laundry", location: "Kasavanahalli Village,Munnekollal, Bangalore", link: "https://maps.app.goo.gl/9Khm2Xk2ZPXMnMEq5" },
    { name: "One Wash Laundry", location: "Aswath Nagar,Marathahalli, Bangalore", link: "https://maps.app.goo.gl/xcJ7eNb5NW1gr9Zh7" },
    { name: "A1 Laundry Service", location: "Trinity school road,Marathahalli, Bangalore", link: "https://maps.app.goo.gl/zVkMGHFDEAwqhzpf6" },
    { name: "Instawash Laundry", location: "Marathahalli, Bangalore", link: "https://maps.app.goo.gl/Hz7ZKY3RTk6MEFU99" },
  ];

  return (
    <section className="mb-5 py-5" id="google_map">
      <Container>
        <div className="d-flex justify-content-center mt-5">
          <h2 className="text-title head-title">Nearby Laundry Services</h2>
        </div>
        <Row>
          {nearbyLaundryServices.map((service, index) => (
            <Col md={4} className="d-flex justify-content-center mt-4" key={index}>
              <Card style={{ width: "20rem" }}>
                <div
                  className="map-iframe-container"
                  onClick={() => window.open(service.link, "_blank")}
                  style={{ cursor: "pointer" }}
                >
                  <iframe
                    title={service.name}
                    src={`https://maps.google.com/maps?hl=en&q=${encodeURIComponent(service.location)}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
                <CardBody>
                  <CardTitle tag="h5" className="text-danger">
                    {service.name}
                  </CardTitle>
                  <div className="view-on-map">
                    <a href={service.link} target="_blank" rel="noopener noreferrer">View on Map</a>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Map;