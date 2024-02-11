import { Img, Text } from "@react-email/components";
import { formatCurrency } from "../utils/formatCurrency";
import storeItems from "../data/items.json";
import { IMAGE_BASE_URL } from "./EmailTemplate";
import { CartItemProps } from "../components/CartItem";

export const CartItemTemplate = ({ id, quantity }: CartItemProps) => {
  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;

  return (
    <div>
      <Img
        src={IMAGE_BASE_URL + item.imageCode}
        alt={item.name}
        width={135}
        height={90}
        style={{
          objectFit: "cover",
          borderRadius: "5px",
        }}
      />
      <div style={{ flex: 1 }}>
        <Text style={{margin:0}}>{item.name}</Text>
        {quantity > 1 && (
          <div style={{display:"flex"}}>
            <Text style={{margin:0}}>{formatCurrency(item.price)}</Text>
            <Text style={{margin:0}}>x{quantity}</Text>
          </div>
        )}
        <Text style={{margin:0}}>{formatCurrency(item.price * quantity)}</Text>
      </div>
    </div>
  );
};
