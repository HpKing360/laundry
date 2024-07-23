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
const WashAndIronMan = [
  {
    id: "1101",
    ac: "d-block",
    dc: "d-none",
    name: "Topwear (Shirt / T-shirt / Fatua)",
    category: "Men's Wear",
    service: "Wash And Iron",
    price: 40,
    quantity: 1,
  },
  {
    id: "1102",
    ac: "d-block",
    dc: "d-none",
    name: "Bottom Wear (Trouser / Jeans / Pajama)",
    category: "Men's Wear",
    service: "Wash And Iron",
    price: 45,
    quantity: 1,
  },
  {
    id: "1103",
    ac: "d-block",
    dc: "d-none",
    name: "Winter Wear (Sweater / Hoodies)",
    category: "Men's Wear",
    service: "Wash And Iron",
    price: 85,
    quantity: 1,
  },
  {
    id: "1104",
    ac: "d-block",
    dc: "d-none",
    name: "Home Wear (Sleeping suit / Nightdress)",
    category: "Men's Wear",
    service: "Wash And Iron",
    price: 55,
    quantity: 1,
  },
  {
    id: "1105",
    ac: "d-block",
    dc: "d-none",
    name: "Premium (Blazer / Coat / Jacket)",
    category: "Men's Wear",
    service: "Wash And Iron",
    price: 140,
    quantity: 1,
  },
  {
    id: "1107",
    ac: "d-block",
    dc: "d-none",
    name: "Jubba / Kabuli suit",
    category: "Men's Wear",
    service: "Wash And Iron",
    price: 55,
    quantity: 1,
  },
  {
    id: "1108",
    ac: "d-block",
    dc: "d-none",
    name: "Inner Wear (Socks / Shorts / Under Garments)",
    category: "Men's Wear",
    service: "Wash And Iron",
    price: 25,
    quantity: 1,
  },
  {
    id: "1109",
    ac: "d-block",
    dc: "d-none",
    name: "Exclusive Panjabi",
    category: "Men's Wear",
    service: "Wash And Iron",
    price: 100,
    quantity: 1,
  },
  {
    id: "1110",
    ac: "d-block",
    dc: "d-none",
    name: "Suit (Blazer + Trouser)",
    category: "Men's Wear",
    service: "Wash And Iron",
    price: 180,
    quantity: 1,
  },
  {
    id: "1111",
    ac: "d-block",
    dc: "d-none",
    name: "Suit (Blazer + Trouser + Waist Coat)",
    category: "Men's Wear",
    service: "Wash And Iron",
    price: 220,
    quantity: 1,
  },
  {
    id: "1112",
    ac: "d-block",
    dc: "d-none",
    name: "Sherwani",
    category: "Men's Wear",
    service: "Wash And Iron",
    price: 300,
    quantity: 1,
  },
  {
    id: "1113",
    ac: "d-block",
    dc: "d-none",
    name: "Shawl",
    category: "Men's Wear",
    service: "Wash And Iron",
    price: 70,
    quantity: 1,
  },
];

const washAndIronWoman = [
  {
    id: "1201",
    ac: "d-block",
    dc: "d-none",
    name: "Top Wear (Shirt / T-shirt / Fatua)",
    category: "Women's Wear",
    service: "Wash And Iron",
    price: 40,
    quantity: 1,
  },
  {
    id: "1202",
    ac: "d-block",
    dc: "d-none",
    name: "Bottom Wear (Trouser / Slack / Pazama)",
    category: "Women's Wear",
    service: "Wash And Iron",
    price: 45,
    quantity: 1,
  },
  {
    id: "1203",
    ac: "d-block",
    dc: "d-none",
    name: "Accessories (Scarf / Dupatta / Orna / Muffler)",
    category: "Women's Wear",
    service: "Wash And Iron",
    price: 50,
    quantity: 1,
  },
  {
    id: "1204",
    ac: "d-block",
    dc: "d-none",
    name: "Winter Wear (Sweater / Cardigan)",
    category: "Women's Wear",
    service: "Wash And Iron",
    price: 80,
    quantity: 1,
  },
  {
    id: "1205",
    ac: "d-block",
    dc: "d-none",
    name: "Home Wear (Nightdress / Normal Maxi)",
    category: "Women's Wear",
    service: "Wash And Iron",
    price: 40,
    quantity: 1,
  },
  {
    id: "1206",
    ac: "d-block",
    dc: "d-none",
    name: "Long Dress (Borka /Jumpsuit / Arabian Dress)",
    category: "Women's Wear",
    service: "Wash And Iron",
    price: 60,
    quantity: 1,
  },
  {
    id: "1207",
    ac: "d-block",
    dc: "d-none",
    name: "Inner Wear (Blous / Petticoat / Under Garments)",
    category: "Women's Wear",
    service: "Wash And Iron",
    price: 35,
    quantity: 1,
  },
  {
    id: "1208",
    ac: "d-block",
    dc: "d-none",
    name: "Saree (Plain Cotton / Plain Silk / Cotton Design)",
    category: "Women's Wear",
    service: "Wash And Iron",
    price: 100,
    quantity: 1,
  },
  {
    id: "1209",
    ac: "d-block",
    dc: "d-none",
    name: "Kameez / Kaftan / Apron / Tops",
    category: "Women's Wear",
    service: "Wash And Iron",
    price: 40,
    quantity: 1,
  },
  {
    id: "1210",
    ac: "d-block",
    dc: "d-none",
    name: "Blazer / Coat / Jacket",
    category: "Women's Wear",
    service: "Wash And Iron",
    price: 140,
    quantity: 1,
  },
  {
    id: "1211",
    ac: "d-block",
    dc: "d-none",
    name: "Saree - Exclusive (Benarasi / Jamdani / Katan)",
    category: "Women's wear",
    service: "Wash And Iron",
    price: 250,
    quantity: 1,
  },
  {
    id: "1212",
    ac: "d-block",
    dc: "d-none",
    name: "Exclusive Kameez",
    category: "Women's wear",
    service: "Wash And Iron",
    price: 100,
    quantity: 1,
  },
  {
    id: "1213",
    ac: "d-block",
    dc: "d-none",
    name: "Waist Coat / Coati",
    category: "Women's wear",
    service: "Wash And Iron",
    price: 80,
    quantity: 1,
  },
  {
    id: "1214",
    ac: "d-block",
    dc: "d-none",
    name: "Overcoat",
    category: "Women's wear",
    service: "Wash And Iron",
    price: 300,
    quantity: 1,
  },
];

const washAndIronHouse = [
  {
    id: "1301",
    ac: "d-block",
    dc: "d-none",
    name: "Bed Sheet",
    category: "Household",
    service: "Wash And Iron",
    price: 80,
    quantity: 1,
  },
  {
    id: "1302",
    ac: "d-block",
    dc: "d-none",
    name: "Pillow Case",
    category: "Household",
    service: "Wash And Iron",
    price: 40,
    quantity: 1,
  },
  {
    id: "1303",
    ac: "d-block",
    dc: "d-none",
    name: "Towel",
    category: "Household",
    service: "Wash And Iron",
    price: 50,
    quantity: 1,
  },
  {
    id: "1304",
    ac: "d-block",
    dc: "d-none",
    name: "Blanket",
    category: "Household",
    service: "Wash And Iron",
    price: 250,
    quantity: 1,
  },
  {
    id: "1305",
    ac: "d-block",
    dc: "d-none",
    name: "Blanket",
    category: "Household",
    service: "Wash And Iron",
    price: 15,
    quantity: 1,
  },
  {
    id: "1306",
    ac: "d-block",
    dc: "d-none",
    name: "Accessories (Prayer Cap / Napkin etc)",
    category: "Household",
    service: "Wash And Iron",
    price: 45,
    quantity: 1,
  },
  {
    id: "1307",
    ac: "d-block",
    dc: "d-none",
    name: "Travel WashAndIron",
    category: "Household",
    service: "Wash And Iron",
    price: 200,
    quantity: 1,
  },
];

const WashAndIron = () => {
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
      <section id="WashAndIron" className="py-5">
        <Container>
          <div className="row justify-content-between py-3">
            <div className="col-md-8">
              <h2 className="text-title">Wash And Iron Service</h2>
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
                      {WashAndIronMan.map((item) => (
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
                      {washAndIronWoman.map((item) => (
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
                      {washAndIronHouse.map((item) => (
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

export default WashAndIron;
