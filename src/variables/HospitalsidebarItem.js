import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import {FaBeer} from 'react-icons/fa'
import HospitalAdd from "views/examples/HospitalAdd";
import DoctorList from "views/examples/listdoctor";
import CreateSchedule from "views/examples/createSchedule";
export const HospitalSideBarItem=[
    {
        path: "/index",
        name: "Add Doctor",
        icon: "ni ni-fat-add text-blue",
        component: HospitalAdd, 
        layout: "/hospital",
        
      },
     
      {
        path: "/list doctor",
        name: "Doctor List",
        icon: "ni ni-ungroup text-blue",
        component: DoctorList,
        layout: "/hospital",
      },
      {
        path: "/createSchedule",
        name: "Create Schedule",
        icon: "ni ni-ungroup text-blue",
        component: CreateSchedule,
        layout: "/hospital",
      },
      {
        path: "/add_appointment",
        name: "Add Appointement",
        component: Icons,
        icon:"ni ni-fat-add text-blue",
        layout: "/hospital",
      },
      {
        path: "/list_appointment",
        name: "Appointment List",
        icon: "ni ni-ungroup text-blue",
        component: HospitalAdd,
        layout: "/hospital",
      },

] 