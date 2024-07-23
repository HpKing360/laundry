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

const WashAndFoldMan = [
  {
    id: "2101",
    ac: "d-block",
    dc: "d-none",
    name: "Top Wear (Shirt / T-shirt / Fatua)",
    service: "Wash And Fold",
    category: "Mans wear",
    price: 40,
    quantity: 1,
  },

  {
    id: "2102",
    ac: "d-block",
    dc: "d-none",
    name: "Bottom Wear (Trouser / jeans / Pajama)",
    service: "Wash And Steam",
    category: "Mans wear",
    price: 40,
    quantity: 1,
  },

  {
    id: "2103",
    ac: "d-block",
    dc: "d-none",
    name: "Blazer / Coat / Jacket",
    category: "Mans wear",
    service: "Wash And Steam",
    price: 150,
    quantity: 1,
  },

  {
    id: "2104",
    ac: "d-block",
    dc: "d-none",
    name: "Winter Wear (Sweater / Hoodies)",
    category: "Mans wear",
    service: "Wash And Steam",
    price: 85,
    quantity: 1,
  },

  {
    id: "2105",
    ac: "d-block",
    dc: "d-none",
    name: "Home Wear (Sleeping suit / Nightdress)",
    category: "Mans wear",
    service: "Wash And Steam",
    price: 60,
    quantity: 1,
  },

  {
    id: "2106",
    ac: "d-block",
    dc: "d-none",
    name: "Jubba / Kabuli suit",
    category: "Mans wear",
    service: "Wash And Steam",
    price: 60,
    quantity: 1,
  },

  {
    id: "2107",
    ac: "d-block",
    dc: "d-none",
    name: "Accessories (Muffler / Scarf / Cap / Tie)",
    category: "Mans wear",
    service: "Wash And Steam",
    price: 40,
    quantity: 1,
  },

  {
    id: "2108",
    ac: "d-block",
    dc: "d-none",
    name: "Top Wear (Waist Coat)",
    category: "Mans wear",
    service: "Wash And Steam",
    price: 80,
    quantity: 1,
  },

  {
    id: "2109",
    ac: "d-block",
    dc: "d-none",
    name: "Inner Wear (Socks / Shorts / Under Garments)",
    category: "Mans wear",
    service: "Wash And Steam",
    price: 30,
    quantity: 1,
  },

  {
    id: "2110",
    ac: "d-block",
    dc: "d-none",
    name: "Panjabi",
    category: "Mans wear",
    service: "Wash And Steam",
    price: 45,
    quantity: 1,
  },

  {
    id: "2111",
    ac: "d-block",
    dc: "d-none",
    name: "Exclusive Punjabi",
    category: "Mans wear",
    service: "Wash And Steam",
    price: 120,
    quantity: 1,
  },

  {
    id: "2112",
    ac: "d-block",
    dc: "d-none",
    name: "Leather Jacket",
    category: "Mans wear",
    service: "Wash And Steam",
    price: 450,
    quantity: 1,
  },

  {
    id: "2113",
    ac: "d-block",
    dc: "d-none",
    name: "Suit (Blazer + Trouser)",
    category: "Mans wear",
    service: "Wash And Steam",
    price: 210,
    quantity: 1,
  },

  {
    id: "2114",
    ac: "d-block",
    dc: "d-none",
    name: "Suit (Blazer + Trouser + Waist Coat)",
    category: "Mans wear",
    service: "Wash And Steam",
    price: 280,
    quantity: 1,
  },

  {
    id: "2115",
    ac: "d-block",
    dc: "d-none",
    name: "Overcoat / Overall",
    category: "Mans wear",
    service: "Wash And Steam",
    price: 300,
    quantity: 1,
  },

  {
    id: "2116",
    ac: "d-block",
    dc: "d-none",
    name: "Sherwani",
    category: "Mans wear",
    service: "Wash And Steam",
    price: 350,
    quantity: 1,
  },

  {
    id: "2117",
    ac: "d-block",
    dc: "d-none",
    name: "Shawl",
    category: "Mans wear",
    service: "Wash And Steam",
    price: 100,
    quantity: 1,
  },
];

const WashAndFoldWoman = [
  {
    id: "2201",
    ac: "d-block",
    dc: "d-none",
    name: "Top Wear (Shirt / T-shirt / Fatua)",
    category: "Women's wear",
    service: "Wash And Steam",
    price: 45,
    quantity: 1,
  },

  {
    id: "2202",
    ac: "d-block",
    dc: "d-none",
    name: "Bottom Wear (Trouser / Slack / Pazama)",
    category: "Women's wear",
    service: "Wash And Steam",
    price: 45,
    quantity: 1,
  },

  {
    id: "2203",
    ac: "d-block",
    dc: "d-none",
    name: "Accessories (Scarf / Dupatta / Orna / Muffler)",
    category: "Women's wear",
    service: "Wash And Steam",
    price: 45,
    quantity: 1,
  },

  {
    id: "2204",
    ac: "d-block",
    dc: "d-none",
    name: "Winter Wear (Sweater / Cardigan)",
    category: "Women's wear",
    service: "Wash And Steam",
    price: 85,
    quantity: 1,
  },

  {
    id: "2205",
    ac: "d-block",
    dc: "d-none",
    name: "Home Wear (Nightdress / Normal Maxi)",
    category: "Women's wear",
    service: "Wash And Steam",
    price: 45,
    quantity: 1,
  },

  {
    id: "2206",
    ac: "d-block",
    dc: "d-none",
    name: "Long Dress(Borka / Jumpsuit / Arabian Dress)",
    category: "Women's wear",
    service: "Wash And Steam",
    price: 60,
    quantity: 1,
  },

  {
    id: "2207",
    ac: "d-block",
    dc: "d-none",
    name: "Inner Wear (Blous / Petticoat / Under Garments)",
    category: "Women's wear",
    service: "Wash And Steam",
    price: 45,
    quantity: 1,
  },

  {
    id: "2208",
    ac: "d-block",
    dc: "d-none",
    name: "Saree (Plain Cotton / Plain Silk / Cotton Design)",
    category: "Women's wear",
    service: "Wash And Steam",
    price: 125,
    quantity: 1,
  },

  {
    id: "2209",
    ac: "d-block",
    dc: "d-none",
    name: "Saree - Exclusive (Benarasi / Jamdani / Katan)",
    category: "Women's wear",
    service: "Wash And Steam",
    price: 200,
    quantity: 1,
  },

  {
    id: "2210",
    ac: "d-block",
    dc: "d-none",
    name: "Kameez / Kaftan / Apron / Tops",
    category: "Women's wear",
    service: "Wash And Steam",
    price: 45,
    quantity: 1,
  },

  {
    id: "2211",
    ac: "d-block",
    dc: "d-none",
    name: "Exclusive Kameez",
    category: "Women's wear",
    service: "Wash And Steam",
    price: 80,
    quantity: 1,
  },

  {
    id: "2212",
    ac: "d-block",
    dc: "d-none",
    name: "Waist Coat / Coati",
    category: "Women's wear",
    service: "Wash And Steam",
    price: 60,
    quantity: 1,
  },

  {
    id: "2213",
    ac: "d-block",
    dc: "d-none",
    name: "Skirt",
    category: "Women's wear",
    service: "Wash And Steam",
    price: 80,
    quantity: 1,
  },

  {
    id: "2214",
    ac: "d-block",
    dc: "d-none",
    name: "Kameez",
    category: "Women's wear",
    service: "Wash And Steam",
    price: 130,
    quantity: 1,
  },

  {
    id: "2215",
    ac: "d-block",
    dc: "d-none",
    name: "Dress / Gown",
    category: "Women's wear",
    service: "Wash And Steam",
    price: 250,
    quantity: 1,
  },

  {
    id: "2216",
    ac: "d-block",
    dc: "d-none",
    name: "Skirt Suit",
    category: "Women's wear",
    service: "Wash And Steam",
    price: 200,
    quantity: 1,
  },

  {
    id: "2217",
    ac: "d-block",
    dc: "d-none",
    name: "Shawl",
    category: "Women's wear",
    service: "Wash And Steam",
    price: 100,
    quantity: 1,
  },

  {
    id: "2218",
    ac: "d-block",
    dc: "d-none",
    name: "Blazer / Coat / Jacket",
    category: "Women's wear",
    service: "Wash And Steam",
    price: 100,
    quantity: 1,
  },

  {
    id: "2219",
    ac: "d-block",
    dc: "d-none",
    name: "Leather Jacket",
    category: "Women's wear",
    service: "Wash And Steam",
    price: 450,
    quantity: 1,
  },

  {
    id: "2220",
    ac: "d-block",
    dc: "d-none",
    name: "Overcoat",
    category: "Women's wear",
    service: "Wash And Steam",
    price: 300,
    quantity: 1,
  },
];

const WashAndFoldHouse = [
  {
    id: "2301",
    ac: "d-block",
    dc: "d-none",
    name: "Bed Sheet",
    category: "Household ",
    service: "Wash And Steam",
    price: 80,
    quantity: 1,
  },
  {
    id: "2302",
    ac: "d-block",
    dc: "d-none",
    name: "Pillow Case",
    category: "Household ",
    service: "Wash And Steam",
    price: 40,
    quantity: 1,
  },

  {
    id: "2303",
    ac: "d-block",
    dc: "d-none",
    name: "Towel",
    category: "Household ",
    service: "Wash And Steam",
    price: 50,
    quantity: 1,
  },

  {
    id: "2304",
    ac: "d-block",
    dc: "d-none",
    name: "Quilt",
    category: "Household ",
    service: "Wash And Steam",
    price: 350,
    quantity: 1,
  },

  {
    id: "2305",
    ac: "d-block",
    dc: "d-none",
    name: "Blanket (Single)",
    category: "Household ",
    service: "Wash And Steam",
    price: 300,
    quantity: 1,
  },

  {
    id: "2306",
    ac: "d-block",
    dc: "d-none",
    name: "Blanket (Double)",
    category: "Household ",
    service: "Wash And Steam",
    price: 380,
    quantity: 1,
  },

  {
    id: "2307",
    ac: "d-block",
    dc: "d-none",
    name: "Blanket Cover / Bed Cover",
    category: "Household ",
    service: "Wash And Steam",
    price: 120,
    quantity: 1,
  },

  {
    id: "2308",
    ac: "d-block",
    dc: "d-none",
    name: "Table Cover",
    category: "Household ",
    service: "Wash And Steam",
    price: 45,
    quantity: 1,
  },

  {
    id: "2309",
    ac: "d-block",
    dc: "d-none",
    name: "Curtain (Per ft Width)",
    category: "Household ",
    service: "Wash And Steam",
    price: 18,
    quantity: 1,
  },

  {
    id: "2310",
    ac: "d-block",
    dc: "d-none",
    name: "Sofa Cover",
    category: "Household ",
    service: "Wash And Steam",
    price: 45,
    quantity: 1,
  },

  {
    id: "2311",
    ac: "d-block",
    dc: "d-none",
    name: "Chair / Cushion Cover",
    category: "Household ",
    service: "Wash And Steam",
    price: 45,
    quantity: 1,
  },

  {
    id: "2312",
    ac: "d-block",
    dc: "d-none",
    name: "Cushion / Pillow",
    category: "Household",
    service: "Wash And Steam",
    price: 100,
    quantity: 1,
  },

  {
    id: "2313",
    ac: "d-block",
    dc: "d-none",
    name: "Floor / Prayer Mat",
    category: "Household",
    service: "Wash And Steam",
    price: 55,
    quantity: 1,
  },

  {
    id: "2314",
    ac: "d-block",
    dc: "d-none",
    name: "Doll (Big)",
    category: "Household",
    service: "Wash And Steam",
    price: 320,
    quantity: 1,
  },

  {
    id: "2315",
    ac: "d-block",
    dc: "d-none",
    name: "Doll(Small)",
    category: "Household",
    service: "Wash And Steam",
    price: 200,
    quantity: 1,
  },

  {
    id: "2316",
    ac: "d-block",
    dc: "d-none",
    name: "Car Seat Cover",
    category: "Household ",
    service: "Wash And Steam",
    price: 100,
    quantity: 1,
  },

  {
    id: "2317",
    ac: "d-block",
    dc: "d-none",
    name: "Accessories (Prayer Cap / Napkin)",
    category: "Household ",
    service: "Wash And Steam",
    price: 45,
    quantity: 1,
  },

  {
    id: "2318",
    ac: "d-block",
    dc: "d-none",
    name: "Travel Bag",
    category: "Household ",
    service: "Wash And Steam",
    price: 280,
    quantity: 1,
  },
];
const WashAndFold = () => {
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
      <section id="WashAndFold" className="py-5">
        <Container>
          <div className="row justify-content-between py-3">
            <div className="col-md-8">
              <h2 className="text-title">Wash And Steam Service</h2>
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
                      {WashAndFoldMan.map((item) => (
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
                      {WashAndFoldWoman.map((item) => (
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
                      {WashAndFoldHouse.map((item) => (
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

export default WashAndFold;
