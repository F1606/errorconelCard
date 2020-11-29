import React, { Component } from "react";
import Card from "../Components/Card";
import { Button } from "react-bootstrap";
import data from "../../Data/data1.json";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log("1. constructor()");
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    console.log("3. componentDidMount()");

    this.timeoutId = setTimeout(() => {
      this.setState({ data });
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("5. componenteDidUpdate()");

    console.log({
      prevProps: prevProps,
      prevState: prevState
    });

    console.log({
      props: this.props,
      state: this.state
    });
  }

  componentWillUnmount() {
    console.log("6. componentWillUnMount()");

    clearTimeout(this.timeoutId);
  }

  showModal = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    console.log("2/4. render()");
    return (
      <>
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item">
            <a class="nav-link active" href="/">
              <h1>Inicio</h1>
            </a>
          </li>
        </ul>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link class="nav-link active" href="/">
            Menu{" "}
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp;
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link active" href="porcentaje">
                  Tablas de porcentajes
                </a>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;
              <li class="nav-item">
                <a class="nav-link" href="historial">
                  Historial del covid (Noticias)
                </a>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <li class="nav-item">
                <a class="nav-link" href="protocolos">
                  Protocolos de bioseguridad
                </a>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <button type="button" class="btn btn-primary btn-lg btn-block">
          Informacion sobretablas de porcentajes
        </button>

        <form className="mt-5" onSubmit={this.handleSubmit}></form>

        <div className="container">
          <div className="row">
            <Card data={this.state.data} />
          </div>
        </div>
      </>
    );
  }
}
