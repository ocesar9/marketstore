import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMatch from "../hooks/useMatch";
import { CREATE_USER } from "../Api";
import useFetch from "../hooks/useFetch";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { FormEvent } from "react";


export default function Register() {
  const email = useForm("email");
  const password1 = useForm("password");
  const match = useMatch(password1.value);

  const {request,error} = useFetch();
  const navigate = useNavigate();
  
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    email.onBlur();
    password1.onBlur();
    match.onBlur();
    if(email.error === null && password1.error === null && match.match === true){
      const {url, options} = CREATE_USER({
        email: email.value,
        password: password1.value
      })

      const {response, json} = await request(url,options);
      if(response?.ok === true){
        toast.success(json.message);
        navigate('/');
      }else {
        toast.error(error);
      }
    }
  }

  return (
    <div className="d-flex flex-column gap-4 vh-100 align-items-center justify-content-center">
      <h1 className="fs-2" style={{ fontWeight: "700" }}>
        Create an account
      </h1>
      <Form className="d-flex w-25 flex-column gap-2" onSubmit={handleSubmit}>
        <Form.Group className="d-flex flex-column gap-2">
          <Form.Control type="email" placeholder="Enter email" {...email} />
          {email.error !== null ? (
            <div className="d-flex bg-warning rounded p-1 align-items-center gap-1">
              <FontAwesomeIcon icon={faInfoCircle} />
              <span>{email.error} </span>
            </div>
          ) : null}
        </Form.Group>
        <Form.Group className="d-flex flex-column gap-2">
          <Form.Control type="password" placeholder="******" {...password1}/>
          {password1.error !== null ? (
            <div className="d-flex bg-warning rounded p-1 align-items-start gap-1">
              <FontAwesomeIcon icon={faInfoCircle} className="p-1" />
              <span>{password1.error}</span>
            </div>
          ) : null}
        </Form.Group>
        <Form.Group>
          <Form.Control type="password" placeholder="******" {...match} />
          <Form.Text className="text-muted">Confirm your password.</Form.Text>
          {match.matchError !== null ? (
            <div className="d-flex bg-warning rounded p-1 align-items-start gap-1">
              <FontAwesomeIcon icon={faInfoCircle} className="p-1" />
              <span>{match.matchError}</span>
            </div>
          ) : null}
        </Form.Group>
        <Button
          style={{
            background: "#923af4",
            border: "none",
            fontWeight: "bolder",
          }}
          type="submit"
        >
          Sign up
        </Button>
      </Form>
      <div>
        <p className="mb-0">
          Need a Account? <Link to={"/"}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
