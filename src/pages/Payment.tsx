import { Button, Col, Row } from "react-bootstrap";
import { useShoppingCart } from "../content/ShoppingCartContext";
import { CartItem } from "../components/CartItem";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utils/formatCurrency";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { SEND_MAIl } from "../Api";
import {EmailTemplate} from "../templates/EmailTemplate";
import { CartItemTemplate } from "../templates/CartItemTemplate";
import { toast } from "react-toastify";
import { removeLocalStorage } from "../hooks/useLocalStorage";


export default function Payment() {
  const { cartItems, user } = useShoppingCart();
  const { request, error } = useFetch();
  const navigate = useNavigate();
  let mail = EmailTemplate();


  async function handleSendEmail() {
    const {url, options} = SEND_MAIl({
      emailFrom: "marketstore@resend.dev",
      emailTo: user.email,
      subject: "Check all your shopping cart items",
      html: mail,
    })
    const {response, json} = await request(url,options);
    if (response?.ok === true ) {
      removeLocalStorage('shopping-cart');
      toast.success("Check your MarketStore Order Summary on the email");
      navigate('/');
    }

  }

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
          <div className="d-flex flex-column ms-auto fw-bold fs-5 justify-content-end align-items-end gap-3">
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
              Close purchase
            </Button>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center">
          <span className="fs-5"  style={{ fontWeight: "700" }}>You don't have any items in your Shopping Cart</span> 
        </div>
      )}
    </>
  );
}
