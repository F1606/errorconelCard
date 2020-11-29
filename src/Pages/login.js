import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      IdUsuario: "",
      password: ""
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    
    console.log(this.state);
    const { IdUsuario, password } = this.state;

    return (
      <form className="mt-5" onSubmit={this.handleSubmit}>

        <div className="form-group">
          <label>Id Usuario</label>
          <br />
          <input
            type="text"
            name="IdUsuario"
            value={IdUsuario}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <Link to="/menu">
        <button type="button" class="btn btn-outline-danger">Entrar</button>
        </Link>
      </form>
    );
  }
}

