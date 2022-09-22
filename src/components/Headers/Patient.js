import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const PatientHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "400px",
          backgroundImage:
            "url(" +
            require("../../assets/img/theme/doctor.jpg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-6" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Hello Patient's</h1>
              <p className="text-white mt-0 mb-5">
              Whenever we get sick we go to the doctor for treatment or consult a doctor.
A Doctor is essential for every society.
              </p>
            
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default  PatientHeader 
