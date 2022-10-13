import React, { useEffect, useState } from "react";
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
    { id: "1", name: "Monday" },
    { id: "2", name: "Tuesday" },
    { id: "3", name: "Wednesday" },
    { id: "4", name: "Thursday" },
    { id: "5", name: "Friday" },
    { id: "6", name: "Saturday" },
    { id: "7", name: "Sunday" },
  ];
  //   const [loading, setLoading] = useState(true);
  //   const [data, setData] = useState([]);
  //   useEffect(()=>{
  //     setLoading(false)
  //     setData(day)
  //   },[])

  ////////////addding multiple dropdown///////////
  const [optionData, setoptionData] = useState([]);
  const onSelect = (selectedList, selectedItem) => {
    setoptionData(selectedList);
  };
  const onRemove = (selectedList, removedItem) => {
    setoptionData(selectedList);
  };
  return (
    <>
      <HospitalHeader />
      <Col lg="12" md="" className=" center col">
        <Card className="bg-gray  shadow border-0 mt--5">
          <p
            //   ref={errRef}
            //  className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {/* ///  {errMsg} */}
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
                        //   ref={userRef}
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
                        //   onChange={(e) => setPhone(e.target.value)}
                        //   value={phone}
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
                        //   onChange={(e) => setPwd(e.target.value)}
                        //   value={pwd}
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
                        //  onChange={(e) => setState(e.target.value)}
                        //  value={state}
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
                    //   onChange={(e) => setDOB(e.target.value)}
                    //   value={DOB}
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
                <Multiselect
                  className="bg-"
                  options={day}
                  onSelect={onSelect}
                  onRemove={onRemove}
                  displayValue="name"
                />
              </FormGroup>

              <div className="text-center">
                <Button
                  className="mt-4"
                  color="primary"
                  type="button"
                  //onClick={onHandleSubmit}
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
