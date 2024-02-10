import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { formatCurrency } from "../utils/formatCurrency";
import { useShoppingCart } from "../content/ShoppingCartContext";
import storeItems from "../data/items.json";
import { CartItemTemplate } from "./CartItemTemplate";
import ReactDOMServer from "react-dom/server";

export const IMAGE_BASE_URL = "https://drive.google.com/uc?export=view&id=";

export const EmailTemplate = () => {
  const { cartItems } = useShoppingCart();

  const totalAmount = cartItems.reduce((after, actual) => {
    const item = storeItems.find((item) => item.id === actual.id);
    return after + (item?.price || 0) * actual.quantity;
  }, 0);

  const emailContent = () =>
    ReactDOMServer.renderToStaticMarkup(
      <Html>
        <Head />
        <Preview>MarketStore Order Summary</Preview>
        <Body>
          <Container style={{ margin: 0 }}>
            <div style={{display:"flex", marginBottom: "1rem"}}>
                <Img
                  src={IMAGE_BASE_URL + "1J43uGPZbpWquq8iA176GbNlAGX9osael"}
                  width={32}
                  height={32}
                />
                <Text
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: "bold",
                    margin: "0 0 0 4px",
                    padding:"4px 0"
                  }}
                >
                  MarketStore
                </Text>
            </div>
            <Section>
              {cartItems.map((item) => (
                <div key={item.id} style={{ marginBottom: "3px" }}>
                  <CartItemTemplate {...item} />
                </div>
              ))}
            </Section>
            <Section>
              <Text>Total: {formatCurrency(totalAmount)}</Text>
            </Section>
          </Container>
        </Body>
      </Html>
    );

  return emailContent();
};

export default EmailTemplate;
