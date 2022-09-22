import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import {FaBeer} from 'react-icons/fa'
import HospitalAdd from "views/examples/HospitalAdd";
import DocBookAppointment from "views/examples/DocBookAppointment";
import AppointmentHistory from "views/examples/appointmentHistory";
import TestHistory from "views/examples/testHistory";
export const DocSideBarItems=[
    {
        path: "/home",
        name: "Home",
        icon: "ni ni-shop text-blue",
        component: Tables, 
        layout: "/patient",
        
      },
    {
        path: "/book appointment",
        name: "Book Appointments",
        icon: "ni ni-book-bookmark text-blue",
        component: DocBookAppointment, 
        layout: "/patient",
        
      },
     
      {
        path: "/view appointment",
        name: "View Appointment",
        icon: "ni ni-ungroup text-blue",
        component: AppointmentHistory,
        layout: "/patient",
      },
      {
        path: "/test report",
        name: "Test Report's",
        component: TestHistory,
        icon:"ni ni-ambulance text-blue",
        layout: "/patient",
      },
      {
        path: "/doctor prescription",
        name: "Prescription",
        icon: "ni ni-badge text-blue",
        component: HospitalAdd,
        layout: "/patient",
      },
      {
        path: "/medinice purchase",
        name: "Medinice",
        icon: "ni ni-check-bold text-blue",
        component: DocBookAppointment,
        layout: "/patient",
      },

] 