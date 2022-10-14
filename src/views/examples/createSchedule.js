import React, { useEffect, useRef, useState } from "react";
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
  Control,
  FormFeedback,
  FormText,
} from "reactstrap";

import axios from "api/axios";
import Select from "react-select/async";
import Multiselect from "multiselect-react-dropdown";
import HospitalHeader from "components/Headers/HospitalHeader";

const CreateSchedule = () => {
  const day = [
    {  name: "Monday" },
    {  name: "Tuesday" },
    {  name: "Wednesday" },
    {  name: "Thursday" },
    {  name: "Friday" },
    {  name: "Saturday" },
    {  name: "Sunday" },
  ];
  //   const [loading, setLoading] = useState(true);
  //   const [data, setData] = useState([]);
  //   useEffect(()=>{
  //     setLoading(false)
  //     setData(day)
  //   },[])
  const errRef = useRef();
  const userRef = useRef();
  ////////////addding multiple dropdown///////////
  const [optionData, setoptionData] = useState([]);
  const onSelect = (selectedList, selectedItem) => {
    setoptionData(selectedList);
  };
  const onRemove = (selectedList, removedItem) => {
    setoptionData(selectedList);
  };

  const [starttime, setStartTime] = useState("");
  const [endtime, setEndTime] = useState("");
  const [date, setDate] = useState("");
  const [startBreak, setStartBreak] = useState("");
  const [user, setUser] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setLoading(true);
  //       try {
  //         const { data: response } = await axios.get("/api/v1/users");
  //         setData(response);
  //       } catch (error) {
  //         console.error(error.message);
  //       }
  //       setLoading(false);
  //     };

  //     fetchData();
  //   }, []);

  useEffect(() => {
    setErrMsg("");
  }, [date, endtime]);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "/api/v1/schedule/createschedule",
    
        {
          userId:'16',
          startTime: starttime,
          endTime: endtime,
          date: date,
          breakTime: startBreak,
          days: optionData,
        },
        {
          Headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
    // console.log(JSON.stringify(response.data));
    //   console.log(role[0].User.fullName)
    } catch (error) {
        if (!error.response?.status===400) {
            setErrMsg('No Server Response');
        }
      else if (starttime || endtime || date || startBreak === "") {
        setErrMsg("Please Fill all requirments");
      } else {
        console.log("data");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <HospitalHeader />
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
            <h3 className=" text-white mb-0">Create Schedule</h3>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-4">
            <Form role="form">
              <Row className="row-cols-1 mb-1">
                <Col>
                  <FormGroup className="m--2">
                    <Label className="mr-sm-2 text-black">Doctor's</Label>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-hat-3" />
                        </InputGroupText>
                      </InputGroupAddon>

                      <Input
                        ref={userRef}
                        // onChange={(e) =>setName(e.target.value)}
                        //  value={name}
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
                    <Label>Start Time</Label>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-calendar-grid-58" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        onChange={(e) => setStartTime(e.target.value)}
                        value={starttime}
                        required
                        placeholder="Start Time"
                        type="time"
                        autoComplete="new-number"
                        //   onFocus={() => setPhoneFocus(true)}
                        //   onBlur={() => setPhoneFocus(false)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup className="m--2">
                    <Label htmlFor="endtime">End Time</Label>
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
                        id="endtime"
                        onChange={(e) => setEndTime(e.target.value)}
                        value={endtime}
                        required
                        placeholder="End Time"
                        type="Time"
                        autoComplete="new-password"
                        //  onFocus={() => setPwdFocus(true)}
                        //  onBlur={() => setPwdFocus(false)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="row-cols-1">
                <Col>
                  <FormGroup className="ml--2 mt-3">
                    <Label>Break Time</Label>
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
                        onChange={(e) => setStartBreak(e.target.value)}
                        value={startBreak}
                        required
                        enterKeyHint="Start time"
                        type="time"
                        autoComplete="new-text"
                        //   onFocus={() => setPwdFocus(true)}
                        //   onBlur={() => setPwdFocus(false)}
                      />
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i
                            className="ni ni-shop"
                            //   aria-invalid={validPwd ? "false" : "true"}
                          />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        //  onChange={(e) => setCountry(e.target.value)}
                        //  value={country}
                        required
                        placeholder="e.g end time"
                        type="time"
                        autoComplete="new-text"
                        //   onFocus={() => setPwdFocus(true)}
                        //   onBlur={() => setPwdFocus(false)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup className=" ml--2">
                <Label>Date</Label>
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
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    required
                    placeholder="e.g 27/02/1986"
                    type="date"
                    autoComplete="new-date"
                    //   onFocus={() => setPwdFocus(true)}
                    //   onBlur={() => setPwdFocus(false)}
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup className="mb-2 mr-sm-2 mb-sm-0 ml--2">
                <Label for="exampleSelect">Select Doctor</Label>
                {optionData.map((item) => {
                  
                })}
                <Multiselect
                    className="bg-white"
                    options={day}
                    onChange={(e) => setoptionData(e.target.displayValue)}
                  //  value={item.name}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    displayValue="name"
                  />;
              </FormGroup>

              <div className="text-center">
                <Button
                  className="mt-4"
                  color="primary"
                  type="button"
                  onClick={handleSubmit}
                  //  disabled={!validName || !validPwd || !validMatch ? true : false}
                >
                  Add Doctor
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default CreateSchedule;
