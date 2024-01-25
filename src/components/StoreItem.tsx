import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";
import { useShoppingCart } from "../content/ShoppingCartContext";

type StoreItemProps = {
  id?: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-4">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100"
              style={{
                background: "#923af4",
                border: "none",
                fontWeight: "bolder",
              }}
              onClick={() => increaseCartQuantity(id)}
            >
              + Add to Cart
            </Button>
          ) : (
            <div className="d-flex align-items-center flex-column">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button
                  className="rounded-circle"
                  style={{
                    background: "#923af4",
                    border: "none",
                    height: "2.5rem",
                    width: "2.5rem",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </Button>
                <div className="d-flex align-items-end gap-2">
                  <p className="fs-4 mb-0">{quantity}</p>
                  <span className="fs-5 font-weight-bold">in Cart</span>
                </div>
                <Button
                  className="rounded-circle"
                  style={{
                    background: "#923af4",
                    border: "none",
                    height: "2.5rem",
                    width: "2.5rem",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </Button>
              </div>
              <Button
                style={{
                  border: "none",
                  padding: "0",
                  margin: "0",
                  background: "none",
                }}
                onClick={() => removeFromCart(id)}
              >
                <span
                  className="text-secondary text-decoration-underline"
                  style={{ fontSize: "0.75rem" }}
                >
                  Remove all Items
                </span>
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
