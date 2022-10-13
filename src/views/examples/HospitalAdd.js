import HospitalHeader from "components/Headers/HospitalHeader";
import React from "react";
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
  FormFeedback,
  FormText,
} from "reactstrap";
import axios from "api/axios";
import { useEffect, useRef, useState } from "react";
import {  useHistory, useNavigate } from "react-router-dom";

const HospitalAdd = () => {
  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const EML_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const userRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();
  const history=useHistory();
  //name
  const [name, setName] = useState("");
  //date of birth
  const [DOB, setDOB] = useState("");
  //username
  const [userName, setUserName] = useState("");
  const [valdUserName, setValidUserName] = useState(false);
  //password
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  //address
  const [address, setAddress] = useState("");
  ///specialist
  const[specialist,setSpecialist]=useState('');
  //city
  const [city, setCity] = useState("");
  //state
  const [state, setState] = useState("");
  //Country
  const [country, setCountry] = useState("");
  ///postal code
  const [postalCode, setPostalCode] = useState("");
  ///doc email
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  ///doc phone
  const [phone, setPhone] = useState("");
  const [phoneFocus, setPhoneFocus] = useState(false);
  ///errmsg
  const [errMsg, setErrMsg] = useState("");
  ///if success
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    userRef.current.focus();
  },[])

  useEffect(() => {
    setValidUserName(USER_REGEX.test(userName));
  }, [userName]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  useEffect(() => {
    setValidEmail(EML_REGEX.test(email));
  }, [email]);

  useEffect(()=>{
    emailRef.current.focus();
  },[])

  useEffect(() => {
    setErrMsg("");
  }, [userName, pwd, email]);

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(userName);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EML_REGEX.test(email);
    // if (!v1 || !v2 || !v3) {
    //   setErrMsg("Invalid Entry");
    //   return;
    // }
    try {
      const response = await axios.post(
        "/api/v1/doctor/",
        {
          fullname: name,
          userName: userName,
          password: pwd,
          email,
          phone,
          DOB,
          address,
          city,
          state,
          country,
          postalCode,
          specialist
        },
        {
          Headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data))
      setSuccess(true)
      //clear the text in fileds
      setName('')
      setAddress('')
      setCity('')
      setCountry('')
      setDOB('');
      setUserName('')
      setEmail('');
      setPhone('');
      setState('')
      setPostalCode('')
      setPwd('')
      setSpecialist('')
      
    } catch (err) {
      if (!err?.response) {
        setErrMsg("server not response");
      } else if (err.response?.status === 409) {
        setErrMsg("UserName Taken");
      } else if (userName || pwd || email || phone||name||state||country||postalCode||specialist||DOB||city||address === "") {
        setErrMsg("Please Fill all requirments");
      } else {
        setErrMsg("Registartion Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <HospitalHeader />
      
 {
  success? (
    history.push("/auth/login")
  ):(
<Col lg="12" md="" className=" center col">
      
        <Card className="bg-gray  shadow border-0 mt--5">
        <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <CardHeader className="bg-transparent border-0">
            <h3 className=" text-white mb-0">Add Doctor</h3>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-4">
            <Form role="form" >
              <Row className="row-cols-3 mb-1">
                <Col>
                <FormGroup className="m--2">
                  <Label className="mr-sm-2 text-black">Name</Label>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>

                    <Input
                      //   ref={userRef}
                        onChange={(e) =>setName(e.target.value)}
                        value={name}
                      required
                      placeholder="e.g Albertson"
                      type="text"
                      //   onFocus={() => setUserFocus(true)}
                      //   onBlur={() => setUserFocus(false)}
                    />
                  </InputGroup>
                </FormGroup>
                </Col>
                
              <Col>
              <FormGroup className="m--2">
                  <Label>UserName</Label>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i
                          className="ni ni-hat-3"
                          // aria-invalid={validEmail ? "false" : "true"}
                        />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        ref={userRef}
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName}
                      //   required
                      placeholder="e.g albert7788"
                      type="text"
                      autoComplete="new-text"
                      //   onFocus={() => setEmailFocus(true)}
                      //   onBlur={() => setEmailFocus(false)}
                    />
                  </InputGroup>
                </FormGroup>
                </Col>
                <Col>
                <FormGroup className="m--2">
                  <Label className="mr-sm-2 text-black">Specialist</Label>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>

                    <Input
                      //   ref={userRef}
                        onChange={(e) =>setSpecialist(e.target.value)}
                        value={specialist}
                      required
                      placeholder="e.g Albertson"
                      type="text"
                      //   onFocus={() => setUserFocus(true)}
                      //   onBlur={() => setUserFocus(false)}
                    />
                  </InputGroup>
                </FormGroup>
                </Col>
              </Row>
              <Row className="row-cols-2">
                <Col>
                <FormGroup className="m--2">
                  <Label>Mobile</Label>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-mobile-button" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                      required
                      placeholder="Phone"
                      type="number"
                      autoComplete="new-number"
                      //   onFocus={() => setPhoneFocus(true)}
                      //   onBlur={() => setPhoneFocus(false)}
                    />
                  </InputGroup>
                </FormGroup>
                </Col>
               <Col>
               <FormGroup className="m--2">
                  <Label htmlFor="password">Password</Label>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i
                          className="ni ni-lock-circle-open"
                          //   aria-invalid={validPwd ? "false" : "true"}
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
                </Col>
              </Row>
              <FormGroup className="m-2 ml--2">
                <Label>Email</Label>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i
                        className="ni ni-email-83"
                        //   aria-invalid={validPwd ? "false" : "true"}
                      />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                  ref={emailRef}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    required
                    placeholder="e.g albertson@gmail.com"
                    type="Email"
                    autoComplete="new-email"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup className="ml--2">
                <Label>Date of Birth</Label>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i
                        className="ni ni-calendar-grid-58"
                        //   aria-invalid={validPwd ? "false" : "true"}
                      />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                      onChange={(e) => setDOB(e.target.value)}
                      value={DOB}
                    required
                    placeholder="e.g 27/02/1986"
                    type="date"
                    autoComplete="new-date"
                    //   onFocus={() => setPwdFocus(true)}
                    //   onBlur={() => setPwdFocus(false)}
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup className="ml--2">
                <Label>Address</Label>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i
                        className="ni ni-building"
                        //   aria-invalid={validPwd ? "false" : "true"}
                      />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                    required
                    placeholder="e.g Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678."
                    type="text"
                    autoComplete="new-address"
                    //   onFocus={() => setPwdFocus(true)}
                    //   onBlur={() => setPwdFocus(false)}
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup className="ml--2">
                <Label>City</Label>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i
                        className="ni ni-shop"
                        //   aria-invalid={validPwd ? "false" : "true"}
                      />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                      onChange={(e) => setCity(e.target.value)}
                      value={city}
                    required
                    placeholder="e.g Islamabad"
                    type="text"
                    autoComplete="new-text"
                    //   onFocus={() => setPwdFocus(true)}
                    //   onBlur={() => setPwdFocus(false)}
                  />
                </InputGroup>
              </FormGroup>
              <Row className="row-cols-3">
                <Col>
                  <FormGroup className="ml--2">
                    <Label>State</Label>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i
                            className="ni ni-shop"
                            //   aria-invalid={validPwd ? "false" : "true"}
                          />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                          onChange={(e) => setState(e.target.value)}
                          value={state}
                        required
                        placeholder="e.g New york"
                        type="text"
                        autoComplete="new-text"
                        //   onFocus={() => setPwdFocus(true)}
                        //   onBlur={() => setPwdFocus(false)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup className="ml--2">
                    <Label>Country</Label>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i
                            className="ni ni-world-2"
                            //   aria-invalid={validPwd ? "false" : "true"}
                          />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                          onChange={(e) => setCountry(e.target.value)}
                          value={country}
                        required
                        placeholder="e.g Pakistan"
                        type="text"
                        autoComplete="new-text"
                        //   onFocus={() => setPwdFocus(true)}
                        //   onBlur={() => setPwdFocus(false)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup className="ml--2">
                    <Label>Postal Code</Label>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i
                            className="ni ni-istanbul "
                            //   aria-invalid={validPwd ? "false" : "true"}
                          />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                          onChange={(e) => setPostalCode(e.target.value)}
                          value={postalCode}
                        required
                        placeholder="e.g 30000"
                        type="text"
                        autoComplete="new-text"
                        //   onFocus={() => setPwdFocus(true)}
                        //   onBlur={() => setPwdFocus(false)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>

              <div className="text-center">
                <Button
                  className="mt-4"
                  color="primary"
                  type="button"
                  onClick={onHandleSubmit}
                  //  disabled={!validName || !validPwd || !validMatch ? true : false}
                >
                  Add Doctor
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
  )
 }
      
    </>
  );
};
export default HospitalAdd;
