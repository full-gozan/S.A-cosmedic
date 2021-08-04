import React from "react";
import Home from "./component/pages/home/Home";
import Botox_treatment from "../src/component/pages/Treatments/botox_treatment";
import Filler_treatment from "../src/component/pages/Treatments//filler_treatment";
import Dark_circle_treatment from "../src/component/pages/Treatments//dark_circle_treatment";
import Fat_reducering_treatment from "../src/component/pages/Treatments//fat_reducering_treatment";
import Profilo_treatment from "../src/component/pages/Treatments//profilo_treatment";
import Sunekos_treatment from "../src/component/pages/Treatments//sunekos_treatment";
import PRP_treatment from "../src/component/pages/Treatments//PRP_treatment";
import Error from "./component/pages/404/404";
import Treatments from "./component/pages/Treatments/Treatments";
import Offers from "./component/pages/Offers/Offers";
import AboutUs from "./component/pages/AboutUs/AboutUs";
import Prices from "./component/pages/Prices/Prices";

import { Redirect, Route, Switch } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

 const Routers =()=> {
    return (

          <div style={{ textAlign: "center" }}>
            <Route path="/Treatments" component={Treatments} />
            <Route path="/treatment/botox" component={Botox_treatment} />
            <Route path="/treatment/filler" component={Filler_treatment} />
            <Route path="/treatment/prp" component={PRP_treatment} />
            <Route path="/treatment/sunekos" component={Sunekos_treatment} />
            <Route path="/treatment/profilo" component={Profilo_treatment} />
            <Route path="/treatment/dark-circle" component={Dark_circle_treatment}/>
            <Route path="/treatment/fat-reducering"component={Fat_reducering_treatment}/>
            <Route path="/Offers" component={Offers} />
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/Prices" component={Prices} />
            <Route path="/" component={Home} exact />
            <Route  component={Error} />


   </div>

    );
  }
export default Routers;

