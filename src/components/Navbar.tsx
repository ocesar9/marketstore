import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../content/ShoppingCartContext";

export default function Navbar() {
  const { user, openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-dark mb-3 p-2">
      <Container className="p-1">
        <Nav>
            <Nav.Link to="/" as={NavLink} className="d-flex text-white gap-2">
              <img
                src="/assets/logo.png"
                alt="MarketStore Logo"
                style={{ width: "36px", height: "36px" }}
              />
              <span className="fs-4" style={{ fontWeight: "600" }}>
                MarketStore
              </span>
            </Nav.Link>
          {user.email !== "" && user.password !== "" ? (
            <>
              <Nav.Link to="/store" as={NavLink} className="text-white">
                <span className="fs-4" style={{ fontWeight: "600" }}>
                  Store
                </span>
              </Nav.Link>
              <Nav.Link to="/about" as={NavLink} className="text-white">
                <span className="fs-4" style={{ fontWeight: "600" }}>
                  About
                </span>
              </Nav.Link>
            </>
          ) : null}
        </Nav>
        {user.email !== "" && user.password !== "" ? (
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
              src="/assets/shopping-cart.png"
              alt="Shopping Cart"
              style={{ width: "36px", height: "36px" }}
            />
            {cartQuantity > 0 ? (
              <div
                className="rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  fontWeight: "700",
                  background: "#923af4",
                  color: "#fff",
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
        ) : null}
      </Container>
    </NavbarBs>
  );
}
