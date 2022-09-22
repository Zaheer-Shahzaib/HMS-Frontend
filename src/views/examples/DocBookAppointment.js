
import React from "react";
import PatientHeader from "components/Headers/Patient";
import {
    Button,
  Card,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";

const DocBookAppointment = () => {
  return (
    <>
   <PatientHeader/>
      <Col lg={12} className="center">
        <Card className="bg-gray  shadow border-0 mt--5">
          <CardHeader className="bg-transparent border-0">
            <h3 className=" text-white">Book Appointment's</h3>
          </CardHeader>
          <Form role="form">
            <Row  className="ml-4 row-cols-3">
            <FormGroup className="mb-2 mr-sm-4 mb-sm-0 ">
                <Label className=" text-capitalize text-black">Doctor Name</Label>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i
                          className="ni ni-hat-3"
                         
                        />
                      </InputGroupText>
                    </InputGroupAddon>

                    <Input
                    
                    //   ref={userRef}
                    //   onChange={(e) => setUser(e.target.value)}
                    //   value={user}
                      required
                      placeholder="e.g Robert Alsen"
                      type="text"
                    //   onFocus={() => setUserFocus(true)}
                    //   onBlur={() => setUserFocus(false)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label className=" text-capitalize text-black">Date</Label>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i
                          className="ni ni-hat-3"
                         
                        />
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
                        <i
                          className="ni ni-hat-3"
                        />
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
                        <i
                          className="ni ni-hat-3"
                         
                        />
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
                        <i
                          className="ni ni-hat-3"
                         
                        />
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
                        <i
                          className="ni ni-hat-3"
                         
                        />
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
          <Button className=" bg-gradient-blue m-5 btn-outline-success"
          onClick={(e)=> e.preventDefault(e)}>
            <span>Book Now</span>
          </Button>
        </Card>
      </Col>
    </>
  );
};
export default DocBookAppointment;
