import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const iconStyle = {
    fontSize: "2vw",
    color: "#fff",
    width: "5vw",
    height: "5vw",
    lineHeight: "5vw",
    textAlign: "center",
    borderRadius: "50%",
    display: "inline-block",
    margin: "0 1vw",
    transition: "opacity 0.3s",
  };

  const facebookStyle = { ...iconStyle, backgroundColor: "#3b5998" };
  const youtubeStyle = { ...iconStyle, backgroundColor: "#ff0000" };
  const instagramStyle = { ...iconStyle, backgroundColor: "#e1306c" };

  const footerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "3vh 0",
  };

  const textTitleStyle = {
    fontSize: "2vw",
    marginBottom: "1vh",
  };

  const linkStyle = {
    color: "#bbb",
    textDecoration: "none",
    transition: "color 0.3s",
  };

  const linkHoverStyle = {
    color: "#fff",
  };

  const socialIconsStyle = {
    display: "flex",
    paddingLeft: 0,
  };

  const footerBottomStyle = {
    borderTop: "0.1vw solid #444",
    paddingTop: "1vh",
    marginTop: "2vh",
    textAlign: "center",
  };

  const footerBottomTextStyle = {
    fontSize: "1.5vw",
  };

  return (
    <footer id="Footer" style={footerStyle}>
      <Container>
        <Row className="py-3">
          <Col md={6} className="py-3">
            <h4 className="text-title" style={textTitleStyle}>
              Spin Cycle Online Laundry Service
            </h4>
            <br />
            <p>
              Email:{" "}
              <a href="mailto:laundrywala.support@gmail.com" style={linkStyle}>
                spincycle.support@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+919234567890" style={linkStyle}>
                +91 9234567890
              </a>
            </p>
            <p>
              <a
                href="https://www.google.com/maps/place/Your+Location+Here"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: "0.5vw" }} />
                Find Us on Google Maps
              </a>
            </p>
          </Col>
          <Col md={3} className="py-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="py-2">
                <Link to="/get-help" style={linkStyle}>
                  Get Help
                </Link>
              </li>
              <li className="py-2">
                <Link to="/privacy-policy" style={linkStyle}>
                  Privacy Policy
                </Link>
              </li>
              <li className="py-2">
                <Link to="/cookie-policy" style={linkStyle}>
                  Cookie Policy
                </Link>
              </li>
              <li className="py-2">
                <Link to="/about-us" style={linkStyle}>
                  About Us
                </Link>
              </li>
              <li className="py-2">
                <Link to="/contact-us" style={linkStyle}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={3} className="py-3">
            <h5>Follow Us On</h5>
            <ul className="list-unstyled" style={socialIconsStyle}>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  style={facebookStyle}
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  style={youtubeStyle}
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  style={instagramStyle}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
            <h5>Login</h5>
            <ul className="list-unstyled">
              <li className="py-2">
                <a href="http://localhost:2000/" target="_blank" rel="noreferrer" style={linkStyle}>
                  Admin Login
                </a>
              </li>
              <li className="py-2">
                <Link to="/delivery-login" style={linkStyle}>
                  Delivery Login
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="footer-bottom" style={footerBottomStyle}>
          <p className="text-secondary" style={footerBottomTextStyle}>
            Copyright &copy; Developed by{" "}
            <a href="" target="_blank" rel="noreferrer" style={linkStyle}>
              HPAA
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
