import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../content/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utils/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt={item.name}
        style={{
          width: "135px",
          height: "90px",
          objectFit: "cover",
          borderRadius: "5px",
        }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 ? (
            <span style={{ fontSize: "0.65rem" }}>x{quantity}</span>
          ) : null}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {formatCurrency(item.price)}
        </div>

        <div>{formatCurrency(item.price * quantity)}</div>
      </div>
      <Button
        style={{
          padding: "0",
          margin: "0",
          background: "none",
          color: "red",
          height: "2.3rem",
          width: "2.3rem",
          fontSize: "18px",
          fontWeight: "700",
          border: "2px solid red",
        }}
        onClick={() => removeFromCart(id)}
      >
        x
      </Button>
    </Stack>
  );
}
