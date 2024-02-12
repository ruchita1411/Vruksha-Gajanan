import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Label,
  Input,
  CardBody,
  CardHeader,
  Button,
} from "reactstrap";
import { loginUser } from "./Services/UserService";
import { login } from "./Auth";
import { useNavigate } from "react-router-dom";
import Base from "./Base";

const Login = () => {
  //navigation
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const setValue = (event, fieldName) => {
    setLoginData({ ...loginData, [fieldName]: event.target.value });
  };
  const loginFormSubmit = (event) => {
    event.preventDefault();
    console.log("on submit login");
    if (loginData.username.trim() === "" && loginData.password.trim() === "") {
      toast.error("Username and Password fields cannot be empty");

      return;
    }
    loginUser(loginData)
      .then((data) => {
        login(data, () => {});
        navigate("/dashboard");
        toast.success("login successful");
      })
      .catch((error) => {
        toast.error("Invalid Username or Password");
      });
  };
  return (
    <Base>
      <Container>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <Card color="light" className="m-3 shadow-lg">
              <CardHeader>
                <h4 className="text-center m-3 text-success">LOGIN</h4>
              </CardHeader>
              <CardBody>
                <Form onSubmit={loginFormSubmit}>
                  <div className="m-3">
                    <Label id="name" for="username">
                      Username{" "}
                    </Label>
                    <Input
                      value={loginData.username}
                      onChange={(event) => {
                        setValue(event, "username");
                      }}
                      type="text"
                      className="border-1"
                      id="username"
                      placeholder=" Enter Your Username"
                    ></Input>
                  </div>

                  <div className="m-3">
                    <Label id="pass" for="password">
                      Password{" "}
                    </Label>
                    <Input
                      value={loginData.password}
                      onChange={(event) => {
                        setValue(event, "password");
                      }}
                      type="password"
                      className="border-1"
                      id="password"
                      placeholder=" Enter Your Password"
                    ></Input>
                  </div>
                  <div>
                    <Button className="btn btn-success m-3 text-center ">
                      Login
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Login;
