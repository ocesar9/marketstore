import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../content/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utils/formatCurrency";

export type CartItemProps = {
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
        <div>{item.name}</div>
        {quantity > 1 ? (
          <div
            className="text-muted"
            style={{
              display: "flex",
              fontSize: "0.75rem",
              gap: "6px",
              alignItems: "end",
            }}
          >
            <span>{formatCurrency(item.price)}</span>
            <span style={{ fontSize: "0.65rem" }}>x{quantity}</span>
          </div>
        ) : null}

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
