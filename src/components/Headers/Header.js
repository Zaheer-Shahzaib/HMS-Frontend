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
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { Link, NavLink, Route, useHistory } from "react-router-dom";
import routes from "routes";
import Login from "views/examples/Login";

import { headerItems } from "variables/Constants";

const getRoutes = (routes) => {
  return routes.map((prop, key) => {
    if (prop.layout === "/auth") {
      return (
        <Route
          exact
          path={prop.layout + prop.path}
          component={prop.component}
          key={key}
        />
      );
    } else {
      return null;
    }
  });
};

const Header = () => {
  const history = useHistory();

  return (
    <>
      {headerItems.map((data) => {
        return (
          <Col lg="4" xl="2" className=" mr-xl-auto">
            <Card
              color="light"
              style={{
                width: "18rem",
              }}
            >
              <img alt="..." height={190} src={data.image} />
              <CardBody>
                <CardTitle tag="h3">{`Become a ${data.name}`}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h5">
                  Lets get started as a {data.name}
                </CardSubtitle>

                <Button
                  color="primary"
                  onClick={function clicked() {
                    history.push("/auth/login");
                    localStorage.setItem('role',`${data.name}`)
                  }}
                >
                  Get Started
                </Button>
              </CardBody>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

export default Header;
