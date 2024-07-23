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
import { useCart } from "react-use-cart";
import Swal from "sweetalert2";
import Cart from "./Cart";

const DryCleaningMan = [
  {
    id: "4101",
    ac: "d-block",
    dc: "d-none",
    name: "Top Wear (Shirt / T-shirt / Trouser / Pajama)",
    category: "Men's Wear",
    service: "Dry Cleaning",
    price: 40,
    quantity: 1,
  },
  {
    id: "4102",
    ac: "d-block",
    dc: "d-none",
    name: "Suit (2 Psc)",
    category: "Men's Wear",
    service: "Dry Cleaning",
    price: 300,
    quantity: 1,
  },
  {
    id: "4103",
    ac: "d-block",
    dc: "d-none",
    name: "Suit (3 Psc)",
    category: "Men's Wear",
    service: "Dry Cleaning",
    price: 350,
    quantity: 1,
  },
  {
    id: "4104",
    ac: "d-block",
    dc: "d-none",
    name: "Jacket / Coat",
    category: "Men's Wear",
    service: "Dry Cleaning",
    price: 200,
    quantity: 1,
  },
  {
    id: "4105",
    ac: "d-block",
    dc: "d-none",
    name: "Sherwani",
    category: "Men's Wear",
    service: "Dry Cleaning",
    price: 500,
    quantity: 1,
  },
  {
    id: "4106",
    ac: "d-block",
    dc: "d-none",
    name: "Lather Jacket",
    category: "Men's Wear",
    service: "Dry Cleaning",
    price: 400,
    quantity: 1,
  },
  {
    id: "4107",
    ac: "d-block",
    dc: "d-none",
    name: "Kurta",
    category: "Men's Wear",
    service: "Dry Cleaning",
    price: 90,
    quantity: 1,
  },
  {
    id: "4108",
    ac: "d-block",
    dc: "d-none",
    name: "Kurta (Fancy)",
    category: "Men's Wear",
    service: "Dry Cleaning",
    price: 150,
    quantity: 1,
  },
  {
    id: "4109",
    ac: "d-block",
    dc: "d-none",
    name: "Sherwani",
    category: "Men's Wear",
    service: "Dry Cleaning",
    price: 500,
    quantity: 1,
  },

  {
    id: "4110",
    ac: "d-block",
    dc: "d-none",
    name: "Winter Wear (Sweater / Hoodies)",
    category: "Men's Wear",
    service: "Dry Cleaning",
    price: 120,
    quantity: 1,
  },
];
const DryCleaningWoman = [
  {
    id: "4201",
    ac: "d-block",
    dc: "d-none",
    name: "Top Wear (Shirt / T-shirt / Trouser / Pajama)",
    category: "Women's Wear",
    service: "Dry Cleaning",
    price: 25,
    quantity: 1,
  },

  {
    id: "4202",
    ac: "d-block",
    dc: "d-none",
    name: "Lehenga (Plain)",
    category: "Women's Wear",
    service: "Dry Cleaning",
    price: 300,
    quantity: 1,
  },

  {
    id: "4203",
    ac: "d-block",
    dc: "d-none",
    name: "Lehenga (Heavy)",
    category: "Women's Wear",
    service: "Dry Cleaning",
    price: 450,
    quantity: 1,
  },
  {
    id: "4204",
    ac: "d-block",
    dc: "d-none",
    name: "Skirt (Medium)",
    category: "Women's Wear",
    service: "Dry Cleaning",
    price: 80,
    quantity: 1,
  },
  {
    id: "4205",
    ac: "d-block",
    dc: "d-none",
    name: "Skirt (Long)",
    category: "Women's Wear",
    service: "Dry Cleaning",
    price: 150,
    quantity: 1,
  },

  {
    id: "4206",
    ac: "d-block",
    dc: "d-none",
    name: "Saree (Plain)",
    category: "Women's Wear",
    service: "Dry Cleaning",
    price: 180,
    quantity: 1,
  },

  {
    id: "4207",
    ac: "d-block",
    dc: "d-none",
    name: "Saree (Fancy)",
    category: "Women's Wear",
    service: "Dry Cleaning",
    price: 300,
    quantity: 1,
  },
  {
    id: "4208",
    ac: "d-block",
    dc: "d-none",
    name: "Saree (Silk)",
    category: "Women's Wear",
    service: "Dry Cleaning",
    price: 240,
    quantity: 1,
  },
  {
    id: "4209",
    ac: "d-block",
    dc: "d-none",
    name: "Saree (Cotton)",
    category: "Women's Wear",
    service: "Dry Cleaning",
    price: 220,
    quantity: 1,
  },

  {
    id: "4210",
    ac: "d-block",
    dc: "d-none",
    name: "Long Dress",
    category: "Women's Wear",
    service: "Dry Cleaning",
    price: 350,
    quantity: 1,
  },
  {
    id: "4211",
    ac: "d-block",
    dc: "d-none",
    name: "Dupatta",
    category: "Women's Wear",
    service: "Dry Cleaning",
    price: 60,
    quantity: 1,
  },
  {
    id: "4212",
    ac: "d-block",
    dc: "d-none",
    name: "Dupatta (Fancy)",
    category: "Women's Wear",
    service: "Dry Cleaning",
    price: 120,
    quantity: 1,
  },
  {
    id: "4213",
    ac: "d-block",
    dc: "d-none",
    name: "Leather Jacket",
    category: "Women's Wear",
    service: "Dry Cleaning",
    price: 450,
    quantity: 1,
  },
  {
    id: "4214",
    ac: "d-block",
    dc: "d-none",
    name: "Gown",
    category: "Women's Wear",
    service: "Dry Cleaning",
    price: 470,
    quantity: 1,
  },
  {
    id: "4215",
    ac: "d-block",
    dc: "d-none",
    name: "Sweater",
    category: "Women's Wear",
    service: "Dry Cleaning",
    price: 120,
    quantity: 1,
  },
  {
    id: "4216",
    ac: "d-block",
    dc: "d-none",
    name: "Coat",
    category: "Women's Wear",
    service: "Dry Cleaning",
    price: 250,
    quantity: 1,
  },
  {
    id: "4217",
    ac: "d-block",
    dc: "d-none",
    name: "Shawl",
    category: "Women's Wear",
    service: "Dry Cleaning",
    price: 150,
    quantity: 1,
  },
];
const DryCleaningHouse = [
  {
    id: "4301",
    ac: "d-block",
    dc: "d-none",
    name: "Blanket / Quilt / Comforter (Single)",
    category: "Household",
    service: "Dry Cleaning",
    price: 300,
    quantity: 1,
  },
  {
    id: "4302",
    ac: "d-block",
    dc: "d-none",
    name: "Blanket / Quilt / Comforter (Double)",
    category: "Household",
    service: "Dry Cleaning",
    price: 400,
    quantity: 1,
  },
  {
    id: "4303",
    ac: "d-block",
    dc: "d-none",
    name: "Bed Sheet(Single)",
    category: "Household",
    service: "Dry Cleaning",
    price: 80,
    quantity: 1,
  },
  {
    id: "4304",
    ac: "d-block",
    dc: "d-none",
    name: "Bed Sheet(Double)",
    category: "Household",
    service: "Dry Cleaning",
    price: 160,
    quantity: 1,
  },
  {
    id: "4305",
    ac: "d-block",
    dc: "d-none",
    name: "Door Mat",
    category: "Household",
    service: "Dry Cleaning",
    price: 90,
    quantity: 1,
  },
  {
    id: "4306",
    ac: "d-block",
    dc: "d-none",
    name: "Sofa Cover",
    category: "Household",
    service: "Dry Cleaning",
    price: 120,
    quantity: 1,
  },
  {
    id: "4307",
    ac: "d-block",
    dc: "d-none",
    name: "Carpet",
    category: "Household",
    service: "Dry Cleaning",
    price: 30,
    quantity: 1,
  },
  {
    id: "4308",
    ac: "d-block",
    dc: "d-none",
    name: "Towel",
    category: "Household",
    service: "Dry Cleaning",
    price: 50,
    quantity: 1,
  },
  {
    id: "4309",
    ac: "d-block",
    dc: "d-none",
    name: "Pillow",
    category: "Household",
    service: "Dry Cleaning",
    price: 100,
    quantity: 1,
  },
  {
    id: "4310",
    ac: "d-block",
    dc: "d-none",
    name: "Travel Bag",
    category: "Household",
    service: "Dry Cleaning",
    price: 250,
    quantity: 1,
  },
];

const DryCleaning = () => {
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
      <section id="DryCleaning" className="py-5">
        <Container>
          <div className="row justify-content-between py-3">
            <div className="col-md-8">
              <h2 className="text-title">DryCleaning Service</h2>
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
                      {DryCleaningMan.map((item) => (
                        <div key={item.id}>
                          <Divider className="mb-3" />
                          <ListItem>
                            <h5 className="item-name">{item.name}</h5>
                            <ListItemText primary="" />
                          </ListItem>
                          <ListItem>
                            <Typography>
                              <span className="price">₹{item.price}</span> /
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
                      {DryCleaningWoman.map((item) => (
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
                      {DryCleaningHouse.map((item) => (
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

export default DryCleaning;
