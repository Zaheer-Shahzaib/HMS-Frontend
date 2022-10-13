import React, { useState } from "react";
import PatientHeader from "components/Headers/Patient";
import {
  Button,
  Card,
  CardHeader,
  Col,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
import { useEffect } from "react";
import axios from "api/axios";
import AsyncSelect from "react-select/async";
import Form from "react-bootstrap/Form";
const DocBookAppointment = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get("/api/v1/users");
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <PatientHeader />
      <Col lg={12} className="center">
        <Card className="bg-gray  shadow border-0 mt--5">
          <CardHeader className="bg-transparent border-0">
            <h3 className=" text-white">Book Appointment's</h3>
          </CardHeader>
          <Form role="form">
            <Row className="ml-4 row-cols-3">
              {/* {JSON.stringify(selectedValue || {},null,1)} */}

              {/* <AsyncSelect
                cacheOptions
                defaultOptions
                getOptionLabel={(e) => e.fullname}
                getOptionValue={(e) => e.id}
                onInputChange={handleInputChange}
                onChange={handleChange}
                loadOptions={fetchData}
              /> */}
              {/* {loading && <div>Loading</div>}
    {!loading && (
    <Form.Select aria-label="Default select example" role="form">
       
        {data.map(item => (
        <option value={item.fullname} key={item.id}>{item.fullname}</option>
        ))}
        </Form.Select>

    )} */}
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleSelect">Select Doctor</Label>

                {loading && <div>Loading</div>}
                {!loading && (
                  <Input type="select" name="select" id="exampleSelect">
                    {data.map((item) => (
                      <option value={item.fullname} key={item.id}>
                        {item.fullname}
                      </option>
                    ))}
                  </Input>
                )}
              </FormGroup>

              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label className=" text-capitalize text-black">Date</Label>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>

                  <Input
                    //   ref={userRef}
                    //   onChange={(e) => setUser(e.target.value)}
                    //   value={user}
                    required
                    placeholder="Date "
                    type="date"
                    //   onFocus={() => setUserFocus(true)}
                    //   onBlur={() => setUserFocus(false)}
                  />
                </InputGroup>
              </FormGroup>
            </Row>
            <FormGroup className="mb-2 ml-4 mr-sm-2 mb-sm-0">
              <Label className="text-capitalize text-black">TimeSlot</Label>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-hat-3" />
                  </InputGroupText>
                </InputGroupAddon>

                <Input
                  //   ref={userRef}
                  //   onChange={(e) => setUser(e.target.value)}
                  //   value={user}
                  required
                  placeholder="TimeSlot"
                  type="datetime"
                  //   onFocus={() => setUserFocus(true)}
                  //   onBlur={() => setUserFocus(false)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup className="mb-2 ml-4 mr-sm-2 mb-sm-0">
              <Label className=" text-capitalize text-black">Fee</Label>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-hat-3" />
                  </InputGroupText>
                </InputGroupAddon>

                <Input
                  //   ref={userRef}
                  //   onChange={(e) => setUser(e.target.value)}
                  //   value={user}
                  required
                  placeholder="e.g 1000"
                  type="number"
                  //   onFocus={() => setUserFocus(true)}
                  //   onBlur={() => setUserFocus(false)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup className="mb-2 ml-4 mr-sm-2 mb-sm-0">
              <Label className=" text-capitalize text-black">Contact</Label>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-hat-3" />
                  </InputGroupText>
                </InputGroupAddon>

                <Input
                  //   ref={userRef}
                  //   onChange={(e) => setUser(e.target.value)}
                  //   value={user}
                  required
                  placeholder="e.g +92300880880"
                  type="number"
                  //   onFocus={() => setUserFocus(true)}
                  //   onBlur={() => setUserFocus(false)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup className="mb-2 ml-4 mr-sm-2 mb-sm-0">
              <Label className=" text-capitalize text-black">address</Label>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-hat-3" />
                  </InputGroupText>
                </InputGroupAddon>

                <Input
                  //   ref={userRef}
                  //   onChange={(e) => setUser(e.target.value)}
                  //   value={user}
                  required
                  placeholder="e.g Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678"
                  type="text"
                  //   onFocus={() => setUserFocus(true)}
                  //   onBlur={() => setUserFocus(false)}
                />
              </InputGroup>
            </FormGroup>
          </Form>
          <Button className=" bg-gradient-blue m-5 btn-outline-success">
            <span>Book Now</span>
          </Button>
        </Card>
      </Col>
    </>
  );
};
export default DocBookAppointment;
