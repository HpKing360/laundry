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

const IronAndFoldMan = [
  {
    id: "3101",
    ac: "d-block",
    dc: "d-none",
    name: "Top Wear (Shirt / T-shirt / Fatua)",
    category: "Men's Wear",
    service: "Iron And Fold",
    price: 10,
    quantity: 1,
  },
  {
    id: "3102",
    ac: "d-block",
    dc: "d-none",
    name: "Bottom Wear (Trouser / Jeans / Pajama)",
    category: "Men's Wear",
    service: "Iron And Fold",
    price: 10,
    quantity: 1,
  },
  {
    id: "3103",
    ac: "d-block",
    dc: "d-none",
    name: "Blazer / Coat / Jacket",
    category: "Men's Wear",
    service: "Iron And Fold",
    price: 60,
    quantity: 1,
  },
  {
    id: "3104",
    ac: "d-block",
    dc: "d-none",
    name: "Winter Wear (Sweater / Hoodies)",
    category: "Men's Wear",
    service: "Iron And Fold",
    price: 30,
    quantity: 1,
  },
  {
    id: "3105",
    ac: "d-block",
    dc: "d-none",
    name: "Waist Coat",
    category: "Men's Wear",
    service: "Iron And Fold",
    price: 50,
    quantity: 1,
  },
  {
    id: "3106",
    ac: "d-block",
    dc: "d-none",
    name: "Inner Wear (Socks / Shorts / Under Shirt)",
    category: "Men's Wear",
    service: "Iron And Fold",
    price: 10,
    quantity: 1,
  },
  {
    id: "3107",
    ac: "d-block",
    dc: "d-none",
    name: "Panjabi",
    category: "Men's Wear",
    service: "Iron And Fold",
    price: 10,
    quantity: 1,
  },
  {
    id: "3108",
    ac: "d-block",
    dc: "d-none",
    name: "Exclusive Panjabi",
    category: "Men's Wear",
    service: "Iron And Fold",
    price: 30,
    quantity: 1,
  },
  {
    id: "3109",
    ac: "d-block",
    dc: "d-none",
    name: "Lather Jacket",
    category: "Men's Wear",
    service: "Iron And Fold",
    price: 500,
    quantity: 1,
  },

  {
    id: "3110",
    ac: "d-block",
    dc: "d-none",
    name: "Suit (Blazer + Trouser)",
    category: "Men's Wear",
    service: "Iron And Fold",
    price: 100,
    quantity: 1,
  },
  {
    id: "3111",
    ac: "d-block",
    dc: "d-none",
    name: "Suit (Blazer + Trouser + Waist Coat)",
    category: "Men's Wear",
    service: "Iron And Fold",
    price: 160,
    quantity: 1,
  },
  {
    id: "3112",
    ac: "d-block",
    dc: "d-none",
    name: "Overcoat / Overall",
    category: "Men's Wear",
    service: "Iron And Fold",
    price: 300,
    quantity: 1,
  },
  {
    id: "3113",
    ac: "d-block",
    dc: "d-none",
    name: "Sherwani",
    category: "Men's Wear",
    service: "Iron And Fold",
    price: 350,
    quantity: 1,
  },
  {
    id: "3114",
    ac: "d-block",
    dc: "d-none",
    name: "Shawl",
    category: "Men's Wear",
    service: "Iron And Fold",
    price: 30,
    quantity: 1,
  },
  {
    id: "3115",
    ac: "d-block",
    dc: "d-none",
    name: "Accessories (Muffler / Scarf / Cap / Tie)",
    category: "Men's Wear",
    service: "Iron And Fold",
    price: 10,
    quantity: 1,
  },
  {
    id: "3116",
    ac: "d-block",
    dc: "d-none",
    name: "Home Wear (Sleeping suit / Nightdress)",
    category: "Men's Wear",
    service: "Iron And Fold",
    price: 15,
    quantity: 1,
  },
];

const IronAndFoldWoman = [
  {
    id: "3201",
    ac: "d-block",
    dc: "d-none",
    name: "Top Wear (Shirt / T-shirt / Fatua)",
    category: "Women's Wear",
    service: "Iron And Fold",
    price: 10,
    quantity: 1,
  },

  {
    id: "3202",
    ac: "d-block",
    dc: "d-none",
    name: "Bottom Wear ( Trouser / Slack / Pazama)",
    category: "Women's Wear",
    service: "Iron And Fold",
    price: 10,
    quantity: 1,
  },

  {
    id: "3203",
    ac: "d-block",
    dc: "d-none",
    name: "Long Dress (Borka / Jumpsuit / Arabian Dress)",
    category: "Women's Wear",
    service: "Iron And Fold",
    price: 20,
    quantity: 1,
  },
  {
    id: "3204",
    ac: "d-block",
    dc: "d-none",
    name: "Inner Wear (Blous / Petticoat / Under Garments)",
    category: "Women's Wear",
    service: "Iron And Fold",
    price: 12,
    quantity: 1,
  },
  {
    id: "3205",
    ac: "d-block",
    dc: "d-none",
    name: "Saree (Plain Cotton / Plain Silk / Cotton Design)",
    category: "Women's Wear",
    service: "Iron And Fold",
    price: 40,
    quantity: 1,
  },

  {
    id: "3206",
    ac: "d-block",
    dc: "d-none",
    name: "Saree - Exclusive (Benarasi / Jamdani / Katan)",
    category: "Women's Wear",
    service: "Iron And Fold",
    price: 60,
    quantity: 1,
  },

  {
    id: "3207",
    ac: "d-block",
    dc: "d-none",
    name: "Kameez / Kaftan / Apron / Tops",
    category: "Women's Wear",
    service: "Iron And Fold",
    price: 80,
    quantity: 1,
  },
  {
    id: "3208",
    ac: "d-block",
    dc: "d-none",
    name: "Exclusive Kameez",
    category: "Women's Wear",
    service: "Iron And Fold",
    price: 30,
    quantity: 1,
  },
  {
    id: "3209",
    ac: "d-block",
    dc: "d-none",
    name: "Accessories (Scarf / Dupatta / Orna / Muffler)",
    category: "Women's Wear",
    service: "Iron And Fold",
    price: 10,
    quantity: 1,
  },

  {
    id: "3210",
    ac: "d-block",
    dc: "d-none",
    name: "Winter Wear (Sweater / Cardigan)",
    category: "Women's Wear",
    service: "Iron And Fold",
    price: 25,
    quantity: 1,
  },

  {
    id: "3211",
    ac: "d-block",
    dc: "d-none",
    name: "Home Wear (Nightdress / Normal Maxi)",
    category: "Women's Wear",
    service: "Iron And Fold",
    price: 12,
    quantity: 1,
  },

  {
    id: "3212",
    ac: "d-block",
    dc: "d-none",
    name: "Waist Coat/ Coati",
    category: "Women's Wear",
    service: "Iron And Fold",
    price: 30,
    quantity: 1,
  },

  {
    id: "3213",
    ac: "d-block",
    dc: "d-none",
    name: "Skirt",
    category: "Women's Wear",
    service: "Iron And Fold",
    price: 40,
    quantity: 1,
  },

  {
    id: "3214",
    ac: "d-block",
    dc: "d-none",
    name: "Kameez (2 Pcs)",
    category: "Women's Wear",
    service: "Iron And Fold",
    price: 20,
    quantity: 1,
  },

  {
    id: "3215",
    ac: "d-block",
    dc: "d-none",
    name: "Kameez (3 Pcs)",
    category: "Women's Wear",
    service: "Iron And Fold",
    price: 30,
    quantity: 1,
  },

  {
    id: "3216",
    ac: "d-block",
    dc: "d-none",
    name: "Skirt Suit (2 Pcs)",
    category: "Women's Wear",
    service: "Iron And Fold",
    price: 70,
    quantity: 1,
  },

  {
    id: "3217",
    ac: "d-block",
    dc: "d-none",
    name: "Shawl",
    category: "Women's Wear",
    service: "Iron And Fold",
    price: 30,
    quantity: 1,
  },

  {
    id: "3218",
    ac: "d-block",
    dc: "d-none",
    name: "Blazer / Coat / Jacket",
    category: "Women's Wear",
    service: "Iron And Fold",
    price: 60,
    quantity: 1,
  },

  {
    id: "3219",
    ac: "d-block",
    dc: "d-none",
    name: "Leather Jacket",
    category: "Women's Wear",
    service: "Iron And Fold",
    price: 450,
    quantity: 1,
  },

  {
    id: "3219",
    ac: "d-block",
    dc: "d-none",
    name: "Overcoat",
    category: "Women's Wear",
    service: "Iron And Fold",
    price: 300,
    quantity: 1,
  },
];

const IronAndFoldHouse = [
  {
    id: "3301",
    ac: "d-block",
    dc: "d-none",
    name: "Bed Sheet",
    category: "Household",
    service: "Iron And Fold",
    price: 30,
    quantity: 1,
  },
  {
    id: "3302",
    ac: "d-block",
    dc: "d-none",
    name: "Pillow Case",
    category: "Household",
    service: "Iron And Fold",
    price: 10,
    quantity: 1,
  },
  {
    id: "3303",
    ac: "d-block",
    dc: "d-none",
    name: "Towel",
    category: "Household",
    service: "Iron And Fold",
    price: 60,
    quantity: 1,
  },
  {
    id: "3304",
    ac: "d-block",
    dc: "d-none",
    name: "Quilt",
    category: "Household",
    service: "Iron And Fold",
    price: 350,
    quantity: 1,
  },
  {
    id: "3305",
    ac: "d-block",
    dc: "d-none",
    name: "Blanket (Single)",
    category: "Household",
    service: "Iron And Fold",
    price: 300,
    quantity: 1,
  },
  {
    id: "3306",
    ac: "d-block",
    dc: "d-none",
    name: "Blanket (Double)",
    category: "Household",
    service: "Iron And Fold",
    price: 380,
    quantity: 1,
  },
  {
    id: "3307",
    ac: "d-block",
    dc: "d-none",
    name: "Blanket Cover/ Bed Cover",
    category: "Household",
    service: "Iron And Fold",
    price: 45,
    quantity: 1,
  },
  {
    id: "3308",
    ac: "d-block",
    dc: "d-none",
    name: "Curtain (Per ft Width)",
    category: "Household",
    service: "Iron And Fold",
    price: 7,
    quantity: 1,
  },
  {
    id: "3309",
    ac: "d-block",
    dc: "d-none",
    name: "Table Cover / Sofa Cover / Chair Cover",
    category: "Household",
    service: "Iron And Fold",
    price: 15,
    quantity: 1,
  },
];
const IronAndFold = () => {
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
      <section id="IronAndFold" className="py-5">
        <Container>
          <div className="row justify-content-between py-3">
            <div className="col-md-8">
              <h2 className="text-title">Iron And Fold Service</h2>
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
                      {IronAndFoldMan.map((item) => (
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
                      {IronAndFoldWoman.map((item) => (
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
                      {IronAndFoldHouse.map((item) => (
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

export default IronAndFold;
