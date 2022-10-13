/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Label,
} from "reactstrap";

import { useEffect, useRef, useState } from "react";
import axios from "api/axios";
import { useHistory, useLocation, useNavigate } from "react-router-dom";

const aler = () => {
  alert("We are Working on it Please sign up with credentials");
};

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EML_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Register = () => {
  //sharedPrfrences
  const data = localStorage.getItem("role");

  const history = useHistory();
  const userRef = useRef();
  const errRef = useRef();
  const emailRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  useEffect(() => {
    setValidEmail(EML_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EML_REGEX.test(email);

    // if (!v1 || !v2 ||! v3) {
    //   setErrMsg("Invalid Entry");
    //   return;
    // }
    try {
      console.log(email);
      const response = await axios.post(
        "/api/v1/auth/signup",
        { fullname: user, password: pwd, email, phone, role_name: data },
        {
          Headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      setSuccess(true);
      ///clear the context in the fields
      setEmail(" ");
      setPwd(" ");
      setPhone(" ");
      setUser("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("server not response");
      } else if (err.response?.status === 409) {
        setErrMsg("UserName Taken");
      } else if (user || pwd || email || phone === "") {
        setErrMsg("Please Fill all requirments");
      } else {
        setErrMsg("Registartion Failed");
      }
      errRef.current.focus();
    }
  };

  console.log(data);
  return (
    <>
      {success ? (
        history.push("/auth/login")
      ) : (
        <Col lg="6" md="8">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <small>Sign up with</small>
              </div>
              <div className="text-center">
                <Button
                  className="btn-neutral btn-icon mr-4"
                  color="default"
                  onClick={aler}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={
                        require("../../assets/img/icons/common/github.svg")
                          .default
                      }
                    />
                  </span>
                  <span className="btn-inner--text">Github</span>
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  onClick={aler}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={
                        require("../../assets/img/icons/common/google.svg")
                          .default
                      }
                    />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>sign up with credentials</small>
              </div>
              <Form role="form">
                <FormGroup>
                  <Label htmlFor="username">UserName</Label>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i
                          className="ni ni-hat-3"
                          aria-invalid={validName ? "false" : "true"}
                        />
                      </InputGroupText>
                    </InputGroupAddon>

                    <Input
                      id="username"
                      ref={userRef}
                      onChange={(e) => setUser(e.target.value)}
                      value={user}
                      required
                      placeholder="username"
                      type="text"
                      onFocus={() => setUserFocus(true)}
                      onBlur={() => setUserFocus(false)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i
                          className="ni ni-email-83"
                          aria-invalid={validEmail ? "false" : "true"}
                        />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="email"
                      ref={emailRef}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                      placeholder="Email"
                      type="email"
                      autoComplete="new-email"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="phone">Phone</Label>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-mobile-button" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="phone"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                      required
                      placeholder="Phone"
                      type="number"
                      autoComplete="new-number"
                      onFocus={() => setPhoneFocus(true)}
                      onBlur={() => setPhoneFocus(false)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password">Password</Label>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i
                          className="ni ni-lock-circle-open"
                          aria-invalid={validPwd ? "false" : "true"}
                        />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="password"
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                      required
                      placeholder="Password"
                      type="password"
                      autoComplete="new-password"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                    />
                  </InputGroup>
                </FormGroup>

                <div className="text-muted font-italic">
                  <small>
                    password strength:{" "}
                    <span className="text-success font-weight-700">strong</span>
                  </small>
                </div>
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          I agree with the{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button
                    className="mt-4"
                    color="primary"
                    type="button"
                    onClick={handleSubmit}

                    //  disabled={!validName || !validPwd || !validMatch ? true : false}
                  >
                    Create account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      )}
    </>
  );
};

export default Register;
