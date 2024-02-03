import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "/assets/logo.png";
import useForm from "../hooks/useForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { AUTHENTICATION_USER } from "../Api";
import useFetch from "../hooks/useFetch";
import { toast } from "react-toastify";
import { useShoppingCart } from "../content/ShoppingCartContext";
import { removeLocalStorage } from "../hooks/useLocalStorage";

export default function Login() {
  const { user, saveUser } = useShoppingCart();

  const email = useForm("email");
  const password = useForm("password");

  const { request, error } = useFetch();
  const navigate = useNavigate();

  async function handleSubmit(event: Event) {
    event.preventDefault();
    email.onBlur();
    if (email.error === null) {
      const { url, options } = AUTHENTICATION_USER({
        email: email.value,
        password: password.value,
      });

      const { response, json } = await request(url, options);
      if (response?.ok === true ) {
        saveUser(email.value, password.value);
        toast.success(json.message);
        navigate("/store");
      } else {
        toast.error(error);
      }
    }
  }

  function handleLogout(){
    removeLocalStorage('user')
    removeLocalStorage('shopping-cart');
  }

  return (
    <div className="d-flex flex-column gap-3 vh-100 align-items-center justify-content-center">
      <div className="d-flex align-items-center gap-1">
        <img src={logo} alt="" style={{ width: "64px", height: "64px" }} />
        <span className="fs-1" style={{ fontWeight: "700" }}>
          MarketStore
        </span>
      </div>
      {user.email !== undefined && user.password !== undefined ?   
      <>
      <div className="d-flex flex-column fs-5 align-items-center" style={{ fontWeight: "700" }}>
        Welcome Back! <br/> 
        <span>{user.email}</span>
      </div>
      <p className="mb-0">
        <a onClick={handleLogout} href="">Sign Out</a>
      </p>
      </>
      : (
        <>
          <Form
            className="d-flex w-25 flex-column gap-3"
            onSubmit={handleSubmit}
          >
            <Form.Group className="d-flex flex-column gap-2">
              <Form.Control type="email" placeholder="Enter email" {...email} />
              {email.error !== null ? (
                <div className="d-flex bg-warning rounded p-1 align-items-center gap-1">
                  <FontAwesomeIcon icon={faInfoCircle} />
                  <span>{email.error} </span>
                </div>
              ) : null}
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="******"
                {...password}
              />
            </Form.Group>

            <Button
              type="submit"
              style={{
                background: "#923af4",
                border: "none",
                fontWeight: "bolder",
              }}
            >
              Sign up
            </Button>
          </Form>
          <div>
            <p className="mb-0">
              Need a Account? <Link to={"/register"}>Sign Up</Link>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
