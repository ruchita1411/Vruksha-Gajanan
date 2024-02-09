import React, { useState } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Form,
} from "reactstrap";
import { createUser } from "./Services/UserService";
import Base from "./Base";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const onFieldChange = (event, fieldName) => {
    console.log(event.target.value);
    setUser({ ...user, [fieldName]: event.target.value });
  };
  const registerUser = (event) => {
    event.preventDefault();
    console.log("submit button clicked");
    if (user.name === "") {
      alert("name is required!");
      return;
    }
    if (user.email === "") {
      alert("email is required!");
      return;
    }
    if (user.address === "") {
      alert("address is required!");
      return;
    }
    if (user.phone === "") {
      alert("phone is required!");
      return;
    }
    if (user.password === "") {
      alert("password is required!");
      return;
    }

    if (user.password !== user.confirm) {
      alert("Passwords do not match!");
      return;
    }

    createUser(user)
      .then((data) => {
        console.log(data);
        alert("user saved!");
      })
      .catch((error) => {
        alert("error");
        console.log("error");
      });
  };
  return (
    <Base>
      <Container>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <Card
              className="shadow-sm mt-3"
              color="light"
              style={{ marginLeft: 150 }}
            >
              <CardHeader>
                <h4
                  className="text-center text-success"
                  style={{ marginTop: 10 }}
                >
                  SIGN UP
                </h4>
              </CardHeader>
              <CardBody>
                <Form onSubmit={registerUser}>
                  <div class="form-group" style={{ marginLeft: 10 }}>
                    <label for="name">Name</label>
                    <input
                      value={user.name}
                      onChange={(event) => onFieldChange(event, "name")}
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter Your Name"
                    />
                    {user.name ? (
                      ""
                    ) : (
                      <span
                        style={{
                          color: "red",
                          marginLeft: "50px",
                          marginTop: "4px",
                        }}
                      >
                        Name is required
                      </span>
                    )}
                  </div>
                  <div class="form-group" style={{ marginLeft: 10 }}>
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      value={user.email}
                      onChange={(event) => onFieldChange(event, "email")}
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Email"
                    />
                    {user.email ? (
                      ""
                    ) : (
                      <span
                        style={{
                          color: "red",
                          marginLeft: "50px",
                          marginTop: "4px",
                        }}
                      >
                        Email is required
                      </span>
                    )}
                  </div>

                  <div class="form-group" style={{ marginLeft: 10 }}>
                    <label for="address">Address</label>
                    <input
                      value={user.address}
                      onChange={(event) => onFieldChange(event, "address")}
                      type="text-area"
                      class="form-control"
                      id="address"
                      placeholder="Address"
                    />
                    {user.address ? (
                      ""
                    ) : (
                      <span
                        style={{
                          color: "red",
                          marginLeft: "50px",
                          marginTop: "4px",
                        }}
                      >
                        Address is required
                      </span>
                    )}
                  </div>
                  <div class="form-group" style={{ marginLeft: 10 }}>
                    <label for="phone">Phone Number</label>
                    <input
                      value={user.phone}
                      onChange={(event) => onFieldChange(event, "phone")}
                      type="text"
                      class="form-control"
                      id="phone"
                      placeholder="Phone Number"
                    />
                    {user.phone ? (
                      ""
                    ) : (
                      <span
                        style={{
                          color: "red",
                          marginLeft: "50px",
                          marginTop: "4px",
                        }}
                      >
                        Phone is required
                      </span>
                    )}
                  </div>
                  <div class="form-group" style={{ marginLeft: 10 }}>
                    <label for="exampleInputPassword1">Password</label>

                    <input
                      value={user.password}
                      onChange={(event) => onFieldChange(event, "password")}
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                    {user.password ? (
                      ""
                    ) : (
                      <span
                        style={{
                          color: "red",
                          marginLeft: "50px",
                          marginTop: "4px",
                        }}
                      >
                        Password is required
                      </span>
                    )}
                  </div>
                  <div class="form-group" style={{ marginLeft: 10 }}>
                    <label for="exampleInputPassword2">Confirm Password</label>
                    <input
                      value={user.confirm}
                      onChange={(event) => onFieldChange(event, "confirm")}
                      type="password"
                      class="form-control"
                      id="exampleInputPassword2"
                      placeholder="Confirm Password"
                    />
                    {user.confirm ? (
                      ""
                    ) : (
                      <span
                        style={{
                          color: "red",
                          marginLeft: "50px",
                          marginTop: "4px",
                        }}
                      >
                        Password must be same
                      </span>
                    )}
                  </div>
                  <div class="form-check" style={{ marginLeft: 10 }}></div>
                  <button
                    type="submit"
                    class="btn btn-success"
                    style={{ marginLeft: 10 }}
                  >
                    Submit
                  </button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default SignUp;
