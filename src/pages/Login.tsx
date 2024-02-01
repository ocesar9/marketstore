import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "/assets/logo.png";

export default function Login() {
  


  return (
    <div className="d-flex flex-column gap-4 vh-100 align-items-center justify-content-center">
      <div className="d-flex align-items-center gap-1">
        <img src={logo} alt="" style={{ width: "64px", height: "64px" }} />
        <span className="fs-1" style={{ fontWeight: "700" }}>
          MarketStore
        </span>
      </div>
      <Form className="d-flex w-25 flex-column gap-3">
        <Form.Group>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="password" placeholder="******" />
        </Form.Group>

        <Button
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
    </div>
  );
}
