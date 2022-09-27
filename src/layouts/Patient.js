import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes";
import { DocSideBarItems } from "variables/DocSideBarItem";
import UserHeader from "components/Headers/UserHeader";
import HosptialNavBar from "components/Navbars/HosNavBar";
import DoctorNavBar from "components/Navbars/DocNavBar";
import PatientSideBar from "components/Sidebar/PatientSideBar";



const DoctorLayout = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (DocSideBarItems) => {
    return DocSideBarItems.map((prop, key) => {
      if (prop.layout === "/Patient") {
        return (
          <Route
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

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
    
  
      <PatientSideBar
        {...props}
        DocSideBarItems={DocSideBarItems}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("../assets/img/brand/logo.jpg").default,
         imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
      <DoctorNavBar/>
         {/* <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        
        /> 
      */}
        <Switch>
          {getRoutes(DocSideBarItems)}
          <Redirect from="*" to="/admin/index" />
        </Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default DoctorLayout;
