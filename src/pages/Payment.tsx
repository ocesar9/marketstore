import { Button, Col, Row } from "react-bootstrap";
import { useShoppingCart } from "../content/ShoppingCartContext";
import { CartItem } from "../components/CartItem";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utils/formatCurrency";

export default function Payment() {
  const { cartItems, user } = useShoppingCart();

  function handleSendEmail() {}

  return (
    <>
      <h1 className="fs-2 mb-4" style={{ fontWeight: "bolder" }}>
        Payment
      </h1>
      {cartItems.length > 0 ? (
        <div className="d-flex flex-column gap-4">
          <Row md={1} xs={1} lg={1} className="gap-3">
            {cartItems.map((item) => (
              <Col key={item.id}>
                <CartItem {...item} />
              </Col>
            ))}
          </Row>
          <div className="d-flex flex-column ms-auto fw-bold fs-5 justify-content-end gap-3">
            <div className="d-flex justify-content-end gap-1">
              <span>Total:</span>
              {formatCurrency(
                cartItems.reduce((after, actual) => {
                  const item = storeItems.find((item) => item.id === actual.id);
                  return after + (item?.price || 0) * actual.quantity;
                }, 0)
              )}
            </div>
            <Button
              style={{
                background: "#923af4",
                border: "none",
                fontWeight: "bolder",
                width: "fit-content",
              }}
              onClick={handleSendEmail}
            >
              Send me payment email
            </Button>
          </div>
          <div></div>
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center">
          <span className="fs-5"  style={{ fontWeight: "700" }}>You don't have any items in your Shopping Cart</span> 
        </div>
      )}
    </>
  );
}
