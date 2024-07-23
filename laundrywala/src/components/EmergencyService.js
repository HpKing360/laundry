import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Link } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";

import houseDress from "../images/household.png";
import manDress from "../images/man.png";
import womanDress from "../images/woman.png";

import "./Services.css";
import Cart from "./Cart";
import { useCart } from "react-use-cart";
import Swal from "sweetalert2";

const EmergencyServiceMan = [
  {
    id: "5101",
    ac: "d-block",
    dc: "d-none",
    name: "Topwear (Shirt / T-shirt / Fatua)",
    category: "Men's Wear",
    service: "Emergency Service",
    subservice: "Wash And Iron",
    price: 100,
    quantity: 1,
  },
  {
    id: "5102",
    ac: "d-block",
    dc: "d-none",
    name: "Topwear (Shirt / T-shirt / Fatua)",
    category: "Men's Wear",
    service: "Emergency Service",
    subservice: "Iron And Fold",
    price: 40,
    quantity: 1,
  },
  {
    id: "5103",
    ac: "d-block",
    dc: "d-none",
    name: "Topwear (Shirt / T-shirt / Fatua)",
    category: "Men's Wear",
    service: "Emergency Service",
    subservice: "Dry Cleaning",
    price: 100,
    quantity: 1,
  },
  {
    id: "5104",
    ac: "d-block",
    dc: "d-none",
    name: "Bottom Wear (Trouser / Jeans / Pajama)",
    category: "Men's Wear",
    service: "Emergency service",
    subservice: "Wash And Iron",
    price: 70,
    quantity: 1,
  },
  {
    id: "5105",
    ac: "d-block",
    dc: "d-none",
    name: "Bottom Wear (Trouser / Jeans / Pajama)",
    category: "Men's Wear",
    service: "Emergency Service",
    subservice: "Iron And Fold",
    price: 45,
    quantity: 1,
  },
  {
    id: "5106",
    ac: "d-block",
    dc: "d-none",
    name: "Bottom Wear (Trouser / Jeans / Pajama)",
    category: "Men's Wear",
    service: "Emergency Service",
    subservice: "Dry Cleaning",
    price: 100,
    quantity: 1,
  },
  {
    id: "5107",
    ac: "d-block",
    dc: "d-none",
    name: "Winter Wear (Sweater / Hoodies)",
    category: "Men's Wear",
    service: "Emergency Service",
    subservice: "Wash And Iron",
    price: 160,
    quantity: 1,
  },
  {
    id: "5108",
    ac: "d-block",
    dc: "d-none",
    name: "Winter Wear (Sweater / Hoodies)",
    category: "Men's Wear",
    service: "Emergency Service",
    subservice: "Iron And Fold",
    price: 85,
    quantity: 1,
  },
  {
    id: "5109",
    ac: "d-block",
    dc: "d-none",
    name: "Winter Wear (Sweater / Hoodies)",
    category: "Men's Wear",
    service: "Emergency Service",
    subservice: "Dry Cleaning",
    price: 210,
    quantity: 1,
  },

  {
    id: "5110",
    ac: "d-block",
    dc: "d-none",
    name: "Premium (Blazer / Coat / Jacket)",
    category: "Men's Wear",
    service: "Emergency Service",
    subservice: "Wash And Iron",
    price: 260,
    quantity: 1,
  },
  {
    id: "5111",
    ac: "d-block",
    dc: "d-none",
    name: "Premium (Blazer / Coat / Jacket)",
    category: "Men's Wear",
    service: "Emergency Service",
    subservice: "Iron And Fold",
    price: 160,
    quantity: 1,
  },
  {
    id: "5112",
    ac: "d-block",
    dc: "d-none",
    name: "Premium (Blazer / Coat / Jacket)",
    category: "Men's Wear",
    service: "Emergency Service",
    subservice: "Dry Cleaning",
    price: 320,
    quantity: 1,
  },

  {
    id: "5113",
    ac: "d-block",
    dc: "d-none",
    name: "Sherwani",
    category: "Men's Wear",
    service: "Emergency Service",
    subservice: "Wash And Iron",
    price: 450,
    quantity: 1,
  },
  {
    id: "5114",
    ac: "d-block",
    dc: "d-none",
    name: "Sherwani",
    category: "Men's Wear",
    service: "Emergency Service",
    subservice: "Iron And Fold",
    price: 250,
    quantity: 1,
  },
  {
    id: "5115",
    ac: "d-block",
    dc: "d-none",
    name: "Sherwani",
    category: "Men's Wear",
    service: "Emergency Service",
    subservice: "Dry Cleaning",
    price: 510,
    quantity: 1,
  },
];
const EmergencyServiceWoman = [
  {
    id: "5201",
    ac: "d-block",
    dc: "d-none",
    name: "Top Wear (Shirt / T-shirt / Fatua)",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Wash And Iron",
    price: 100,
    quantity: 1,
  },
  {
    id: "5202",
    ac: "d-block",
    dc: "d-none",
    name: "Top Wear (Shirt / T-shirt / Fatua)",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Iron And Fold",
    price: 50,
    quantity: 1,
  },

  {
    id: "5203",
    ac: "d-block",
    dc: "d-none",
    name: "Bottom Wear ( Trouser / Slack / Pazama)",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Wash and Iron",
    price: 560,
    quantity: 1,
  },
  {
    id: "5204",
    ac: "d-block",
    dc: "d-none",
    name: "Bottom Wear ( Trouser / Slack / Pazama)",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Iron And Fold",
    price: 360,
    quantity: 1,
  },
  {
    id: "5205",
    ac: "d-block",
    dc: "d-none",
    name: "Bottom Wear ( Trouser / Slack / Pazama)",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Dry Cleaning",
    price: 420,
    quantity: 1,
  },

  {
    id: "5206",
    ac: "d-block",
    dc: "d-none",
    name: "Lehenga (Plain / Heavy)",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Wash and Iron",
    price: 680,
    quantity: 1,
  },
  {
    id: "5207",
    ac: "d-block",
    dc: "d-none",
    name: "Lehenga (Plain / Heavy)",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Iron and Fold",
    price: 380,
    quantity: 1,
  },
  {
    id: "5208",
    ac: "d-block",
    dc: "d-none",
    name: "Lehenga (Plain / Heavy)",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Dry Cleaning",
    price: 780,
    quantity: 1,
  },

  {
    id: "5209",
    ac: "d-block",
    dc: "d-none",
    name: "Kameez / Kaftan / Apron / Tops",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Wash and Iron",
    price: 100,
    quantity: 1,
  },
  {
    id: "5210",
    ac: "d-block",
    dc: "d-none",
    name: "Kameez / Kaftan / Apron / Tops",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Iron And Fold",
    price: 50,
    quantity: 1,
  },
  {
    id: "5211",
    ac: "d-block",
    dc: "d-none",
    name: "Kameez / Kaftan / Apron / Tops",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Dry Cleaning",
    price: 145,
    quantity: 1,
  },

  {
    id: "5212",
    ac: "d-block",
    dc: "d-none",
    name: "Saree (Plain / Fancy)",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Wash and Iron",
    price: 425,
    quantity: 1,
  },
  {
    id: "5213",
    ac: "d-block",
    dc: "d-none",
    name: "Saree (Plain / Fancy)",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Iron And Fold",
    price: 230,
    quantity: 1,
  },
  {
    id: "5214",
    ac: "d-block",
    dc: "d-none",
    name: "Saree (Plain / Fancy)",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Dry Cleaning",
    price: 490,
    quantity: 1,
  },
  {
    id: "5215",
    ac: "d-block",
    dc: "d-none",
    name: "Saree (Silk)",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Wash and Iron",
    price: 340,
    quantity: 1,
  },
  {
    id: "5216",
    ac: "d-block",
    dc: "d-none",
    name: "Saree (Silk)",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Iron And Fold",
    price: 190,
    quantity: 1,
  },
  {
    id: "5217",
    ac: "d-block",
    dc: "d-none",
    name: "Saree (Silk)",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Dry Cleaning",
    price: 630,
    quantity: 1,
  },
  {
    id: "5218",
    ac: "d-block",
    dc: "d-none",
    name: "Saree (Cotton)",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Wash and Iron",
    price: 320,
    quantity: 1,
  },
  {
    id: "5219",
    ac: "d-block",
    dc: "d-none",
    name: "Saree (Cotton)",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Iron And Fold",
    price: 170,
    quantity: 1,
  },
  {
    id: "5220",
    ac: "d-block",
    dc: "d-none",
    name: "Saree (Cotton)",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Dry Cleaning",
    price: 380,
    quantity: 1,
  },

  {
    id: "5221",
    ac: "d-block",
    dc: "d-none",
    name: "Leather Jacket",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Wash and Iron",
    price: 650,
    quantity: 1,
  },
  {
    id: "5222",
    ac: "d-block",
    dc: "d-none",
    name: "Leather Jacket",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Iron And Fold",
    price: 270,
    quantity: 1,
  },
  {
    id: "5223",
    ac: "d-block",
    dc: "d-none",
    name: "Leather Jacket",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Dry Cleaning",
    price: 780,
    quantity: 1,
  },

  {
    id: "5224",
    ac: "d-block",
    dc: "d-none",
    name: "Sweater",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Wash and Iron",
    price: 210,
    quantity: 1,
  },
  {
    id: "5225",
    ac: "d-block",
    dc: "d-none",
    name: "Sweater",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Iron And Fold",
    price: 90,
    quantity: 1,
  },
  {
    id: "5226",
    ac: "d-block",
    dc: "d-none",
    name: "Sweater",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Iron And Fold",
    price: 310,
    quantity: 1,
  },
  {
    id: "5227",
    ac: "d-block",
    dc: "d-none",
    name: "Coat",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Wash and Iron",
    price: 350,
    quantity: 1,
  },
  {
    id: "5228",
    ac: "d-block",
    dc: "d-none",
    name: "Coat",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Iron And Fold",
    price: 170,
    quantity: 1,
  },
  {
    id: "5229",
    ac: "d-block",
    dc: "d-none",
    name: "Coat",
    category: "Women's Wear",
    service: "Emergency Service",
    subservice: "Dry Cleaning",
    price: 370,
    quantity: 1,
  },
];
const EmergencyServiceHouse = [
  {
    id: "5301",
    ac: "d-block",
    dc: "d-none",
    name: "Bed Sheet(Single)",
    category: "Household",
    service: "Emergency Service",
    subservice: "Wash And Iron",
    price: 120,
    quantity: 1,
  },
  {
    id: "5302",
    ac: "d-block",
    dc: "d-none",
    name: "Bed Sheet(Single)",
    category: "Household",
    service: "Emergency Service",
    subservice: "Iron And Fold",
    price: 65,
    quantity: 1,
  },
  {
    id: "5303",
    ac: "d-block",
    dc: "d-none",
    name: "Bed Sheet(Single)",
    category: "Household",
    service: "Emergency Service",
    subservice: "Dry Cleaning",
    price: 150,
    quantity: 1,
  },

  {
    id: "5204",
    ac: "d-block",
    dc: "d-none",
    name: "Bed Sheet(Double)",
    category: "Household",
    service: "Emergency Service",
    subservice: "Wash And Iron",
    price: 230,
    quantity: 1,
  },
  {
    id: "5305",
    ac: "d-block",
    dc: "d-none",
    name: "Bed Sheet(Double)",
    category: "Household",
    service: "Emergency Service",
    subservice: "Iron And Fold",
    price: 130,
    quantity: 1,
  },
  {
    id: "5306",
    ac: "d-block",
    dc: "d-none",
    name: "Bed Sheet(Double)",
    category: "Household",
    service: "Emergency Service",
    subservice: "Dry Cleaning",
    price: 250,
    quantity: 1,
  },

  {
    id: "5307",
    ac: "d-block",
    dc: "d-none",
    name: "Sofa Cover",
    category: "Household",
    service: "Emergency Service",
    subservice: "Wash And Iron",
    price: 150,
    quantity: 1,
  },
  {
    id: "5308",
    ac: "d-block",
    dc: "d-none",
    name: "Sofa Cover",
    category: "Household",
    service: "Emergency Service",
    subservice: "Iron And Fold",
    price: 70,
    quantity: 1,
  },
  {
    id: "5309",
    ac: "d-block",
    dc: "d-none",
    name: "Sofa Cover",
    category: "Household",
    service: "Emergency Service",
    subservice: "Dry Cleaning",
    price: 170,
    quantity: 1,
  },
  {
    id: "5310",
    ac: "d-block",
    dc: "d-none",
    name: "Carpet",
    category: "Household",
    service: "Emergency Service",
    subservice: "Wash And Iron",
    price: 50,
    quantity: 1,
  },
  {
    id: "5311",
    ac: "d-block",
    dc: "d-none",
    name: "Carpet",
    category: "Household",
    service: "Emergency Service",
    subservice: "Iron And Fold",
    price: 25,
    quantity: 1,
  },

  {
    id: "5210",
    ac: "d-block",
    dc: "d-none",
    name: "Travel Bag",
    category: "Household",
    service: "Emergency Service",
    subservice: "Wash And Iron",
    price: 310,
    quantity: 1,
  },
  {
    id: "5210",
    ac: "d-block",
    dc: "d-none",
    name: "Travel Bag",
    category: "Household",
    service: "Emergency Service",
    subservice: "Iron And Fold",
    price: 190,
    quantity: 1,
  },
  {
    id: "5210",
    ac: "d-block",
    dc: "d-none",
    name: "Travel Bag",
    category: "Household",
    service: "Emergency Service",
    subservice: "Dry Cleaning",
    price: 370,
    quantity: 1,
  },
];
const EmergencyService = () => {
  // ADD-TO-CART
  const { addItem } = useCart();
  const addItemHandlar = (item, id) => {
    item.id = id;
    addItem(item);
    Swal.fire({
      icon: "success",
      text: item.name + " Added.",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <>
      <section id="EmergencyService" className="py-5">
        <Container>
          <div className="row justify-content-between py-3">
            <div className="col-md-8">
              <h2 className="text-title">Emergency Service Service</h2>
            </div>
            <div className="col-md-4">
              <span className="mr-3">Want to go another service?</span>
              <Dropdown className="btn-group">
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="primary"
                  data-toggle="dropdown"
                  type="button"
                >
                  Select Service
                </DropdownToggle>
                <DropdownMenu>
                  <Link to="/WashAndFold" className="s">
                    <DropdownItem className="sd">Wash & Steam</DropdownItem>
                  </Link>
                  <Link to="/IronAndFold" className="s">
                    <DropdownItem className="sd">Iron & Fold</DropdownItem>
                  </Link>
                  <Link to="/DryCleaning" className="s">
                    <DropdownItem className="sd">Dry Cleaning</DropdownItem>
                  </Link>
                  <Link to="/EmergencyService" className="s">
                    <DropdownItem className="sd">
                      Emergency Service
                    </DropdownItem>
                  </Link>
                  <Link to="/WashAndIron" className="s">
                    <DropdownItem className="sd">Wash and Iron</DropdownItem>
                  </Link>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <Row className="mb-4">
            <Col md={7} className="my-3">
              <div>
                <Accordion className="p-2">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <img src={manDress} className="mr-3" alt="" />
                    <Typography>Men's Wear</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List component="nav" aria-label="mailbox folders">
                      {EmergencyServiceMan.map((item) => (
                        <div key={item.id}>
                          <Divider className="mb-3" />
                          <ListItem>
                            <h5 className="item-name">{item.name}</h5>
                            <ListItemText primary="" />
                          </ListItem>
                          <ListItem>
                            <Typography>
                              <span className="price">₹ {item.price}</span> /
                              piece
                            </Typography>
                            <ListItemText secondary="" />
                            <div className={item.ac}>
                              <Button
                                className="btn-round"
                                color="primary"
                                onClick={() => {
                                  addItemHandlar(item, item.id);
                                }}
                              >
                                <i class="fa-solid fa-cart-shopping"></i> Add to
                                bag
                              </Button>
                            </div>

                            <div className={item.dc}>
                              <div className="cart-controller">
                                {item.quantity > 1 ? (
                                  <button className="btnQ">-</button>
                                ) : (
                                  <button className="btnQ">-</button>
                                )}
                                <span className="quantity">
                                  {" "}
                                  {item.quantity}
                                </span>
                                <button className="btnQ">+</button>
                              </div>
                            </div>
                          </ListItem>
                        </div>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="p-2">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <img src={womanDress} className="mr-3" alt="" />
                    <Typography>Women's Wear</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List component="nav" aria-label="mailbox folders">
                      {EmergencyServiceWoman.map((item) => (
                        <div key={item.id}>
                          <Divider className="mb-3" />
                          <ListItem>
                            <h5 className="item-name">{item.name}</h5>
                            <ListItemText primary="" />
                          </ListItem>
                          <ListItem>
                            <Typography>
                              <span className="price">₹ {item.price}</span> /
                              piece
                            </Typography>
                            <ListItemText secondary="" />
                            <div className={item.ac}>
                              <Button
                                className="btn-round"
                                color="primary"
                                onClick={() => {
                                  addItemHandlar(item, item.id);
                                }}
                              >
                                <i class="fa-solid fa-cart-shopping"></i> Add to
                                bag
                              </Button>
                            </div>

                            <div className={item.dc}>
                              <div className="cart-controller">
                                {item.quantity > 1 ? (
                                  <button className="btnQ">-</button>
                                ) : (
                                  <button className="btnQ">-</button>
                                )}
                                <span className="quantity">
                                  {" "}
                                  {item.quantity}
                                </span>
                                <button className="btnQ">+</button>
                              </div>
                            </div>
                          </ListItem>
                        </div>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="p-2">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <img src={houseDress} className="mr-3" alt="" />
                    <Typography>Household & Accessories</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List component="nav" aria-label="mailbox folders">
                      {EmergencyServiceHouse.map((item) => (
                        <div key={item.id}>
                          <Divider className="mb-3" />
                          <ListItem>
                            <h5 className="item-name">{item.name}</h5>
                            <ListItemText primary="" />
                          </ListItem>
                          <ListItem>
                            <Typography>
                              <span className="price">₹ {item.price}</span> /
                              piece
                            </Typography>
                            <ListItemText secondary="" />
                            <div className={item.ac}>
                              <Button
                                className="btn-round"
                                color="primary"
                                onClick={() => {
                                  addItemHandlar(item, item.id);
                                }}
                              >
                                <i class="fa-solid fa-cart-shopping"></i> Add to
                                bag
                              </Button>
                            </div>

                            <div className={item.dc}>
                              <div className="cart-controller">
                                {item.quantity > 1 ? (
                                  <button className="btnQ">-</button>
                                ) : (
                                  <button className="btnQ">-</button>
                                )}
                                <span className="quantity">
                                  {" "}
                                  {item.quantity}
                                </span>
                                <button className="btnQ">+</button>
                              </div>
                            </div>
                          </ListItem>
                        </div>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Col>

            <Col md={5}>
              <Cart />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default EmergencyService;
