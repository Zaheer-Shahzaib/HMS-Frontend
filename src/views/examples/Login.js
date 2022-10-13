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
} from "reactstrap";
import React from "react";
import { Link, useHistory, useNavigate ,Redirect,Route} from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { useLocation ,} from "react-router-dom";
import useAuth from "Hooks/useAuth";
import axios from "api/axios";
import AuthContext from "context/authProvider";

const Login = () => {
  const aler = () => {
    alert("We are Working on it Please sign up with credentials");
  };

  const userRef = useRef();
  const errRef = useRef();
 const setAuth=useAuth();

 const data = localStorage.getItem("role");
 const location=useLocation();
 const from = location.state?.from?.pathname || "/";
  const history=useHistory();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState(" ");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "api/v1/auth/signin",
        { email: user, password: pwd, role_name:data },
        {
          Headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const role = JSON.stringify(response?.data?.success)
      console.log(role)
      const accessToken = JSON.stringify(response?.data?.token)
      console.log(accessToken);
      console.log(user,pwd);
      setAuth({ user, pwd, data, accessToken });
     
      setUser("");
      setPwd("");
      history.replace(from);
    } catch (error) {
      if (!error.response?.status===400) {
        setErrMsg('No Server Response');
    } else if (error.response?.status === 401) {
        setErrMsg("Worng Password Or Email Please Check Credentials");
      } else if (error.response?.status === 401) {
        setErrMsg("Unauthorized User");
      } else {
        setErrMsg("Login");
        setSuccess(true)
      }
    }
    errRef.current.focus();
   
  };

 
  return (
    <>
     
        <Col lg="5" md="7">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Sign in with</small>
              </div>
              <div className="btn-wrapper text-center">
                <Button
                  className="btn-neutral btn-icon"
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
              {/* <div className="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
            </div> */}
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      ref={userRef}
                      onChange={(e) => setUser(e.target.value)}
                      value={user}
                      placeholder="Email"
                      type="email"
                      autoComplete="new-email"
                      required
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                      valid={true}
                      placeholder="Password"
                      type="password"
                      autoComplete="new-password"
                    />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button
                    className="my-4"
                    color="primary"
                    type="button"
                    onClick={handleSubmit}
                  
                    
                  >
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a className="text-light" onClick={(e) => e.preventDefault()}>
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <Link to={'auth/register'}>
              <a className="text-light">
                <small>Create new account</small>
              </a>
              </Link>
            </Col>
          </Row>
        </Col>
     
    </>
  );
};

export default Login;
