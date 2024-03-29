import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../content/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utils/formatCurrency";
import storeItems from "../data/items.json";
import { useNavigate } from "react-router-dom";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  const navigate = useNavigate();

  function handleNavigatePayment() {
    navigate("/payment");
    closeCart();
  }
  function handleKeepBuyind() {
    navigate("/store");
    closeCart();
  }

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="fs-2 mb-4" style={{ fontWeight: "bolder" }}>
          Cart
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="d-flex flex-column ms-auto fw-bold fs-5 justify-content-end">
            <div className="d-flex justify-content-end gap-1">
              <span>Total:</span>
              {formatCurrency(
                cartItems.reduce((after, actual) => {
                  const item = storeItems.find((item) => item.id === actual.id);
                  return after + (item?.price || 0) * actual.quantity;
                }, 0)
              )}
            </div>
          </div>
          <div className="d-flex flex-column gap-3">
            <Button
              className="w-100"
              style={{
                background: "#923af4",
                border: "none",
                fontWeight: "bolder",
              }}
              onClick={handleNavigatePayment}
            >
              Close Purchase
            </Button>
            <Button
              className="w-100"
              style={{
                background: "#923af4",
                border: "none",
                fontWeight: "bolder",
              }}
              onClick={handleKeepBuyind}
            >
              Keep Buying
            </Button>
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
