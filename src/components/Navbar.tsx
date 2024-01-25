import {
  Button,
  Card,
  Container,
  Nav,
  Navbar as NavbarBs,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "/assets/logo.png";
import shoppingCart from "/assets/shopping-cart.png";
import { useShoppingCart } from "../content/ShoppingCartContext";

export default function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-dark mb-3 p-2">
      <Container className="p-1">
        <Nav>
          <Nav.Link to="/" as={NavLink} className="d-flex text-white gap-2">
            <img
              src={logo}
              alt="MarketStore Logo"
              style={{ width: "24px", height: "24px" }}
            />
            <Card.Title>MarketStore</Card.Title>
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink} className="text-white">
            <Card.Title>Store</Card.Title>
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink} className="text-white">
            <Card.Title>About</Card.Title>
          </Nav.Link>
        </Nav>
        <Button
          style={{
            border: "none",
            padding: "0",
            margin: "0",
            background: "none",
            position: "relative",
          }}
          onClick={() => openCart()}
        >
          <img
            src={shoppingCart}
            alt="Shopping Cart"
            style={{ width: "24px", height: "24px" }}
          />
          {cartQuantity > 0 ? (
            <div
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{
                fontWeight: "700",
                background: "#fff",
                color: "#923af4",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                right: "0",
                bottom: "0",
                transform: "translate(55%,55%",
              }}
            >
              {cartQuantity}
            </div>
          ) : null}
        </Button>
      </Container>
    </NavbarBs>
  );
}
