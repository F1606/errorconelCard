import React from "react";
import "./styles.css";
import porcentaje from "./Pages/porcentaje";
import protocolos from "./Pages/protocolos";
import historial from "./Pages/historial";
import Login from "./Pages/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./Pages/Menu";
import Home from "./Pages/home1";
import Carousel from "react-bootstrap/Carousel";
//import Card from 'react-bootstrap/Card'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/porcentaje" component={porcentaje} />
          <Route exact path="/historial" component={historial} />
          <Route exact path="/protocolos" component={protocolos} />
          <Route exact path="/protocolos" component={Carousel} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
