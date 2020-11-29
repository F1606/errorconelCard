import React, { Component } from "react";
import Card from "../Components/Card";
import { Button } from "react-bootstrap";
import data from "../../Data/data.json";
import { Link } from "react-router-dom";
import ModalFormulario from "../Components/ModalFormulario";

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
        <button type="button" class="btn btn-primary btn-lg btn-block">
          <h1>Bienvenidos!!!</h1>
        </button>
        (Informacion actulizada cada 24 horas)
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        <div className="container">
          <div className="row">
            <Card data={this.state.data} />
          </div>
        </div>
        <ModalFormulario
          tipoModal={this.state.tipoModal}
          show={this.state.show}
          idEstudiante={this.state.idEstudiante}
          form={this.state.form}
          showModal={this.showModal}
          peticionGet={this.peticionGet}
          peticionPost={this.peticionPost}
          peticionPut={this.peticionPut}
          peticionDelete={this.peticionDelete}
          seleccionarEstudiante={this.seleccionarEstudiante}
          handleChange={this.handleChange}
        />
        <Button
          variant="success"
          onClick={() => {
            this.setState({ tipoModal: "Registrarse", form: "" });

            this.showModal();
          }}
        >
          Nuevo Usuario
        </Button>
        &nbsp; &nbsp; &nbsp;
        <Link to="/Login">
          <Button variant="outline-primary">Ingresa</Button>{" "}
        </Link>
      </>
    );
  }
}
