
import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";

export default class Formulario extends Component {
  render() {
    console.log(this.props.handleChange);
    const form = this.props.form;
    return (
      <>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="nombres">
              <Form.Label>Nombre(s) *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre(s) completo(s)"
                name="nombres"
                required="required"
                onChange={this.props.handleChange}
                defaultValue={form ? form.nombres : ""}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="apellidos">
              <Form.Label>Apellido(s)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Apellidos completo"
                name="apellidos"
                onChange={this.props.handleChange}
                defaultValue={form ? form.apellidos : ""}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="documento">
              <Form.Label>Documento *</Form.Label>
              <Form.Control
                type="text"
                minLength="7"
                maxLength="11"
                name="documento"
                placeholder="Documento de identidad"
                onChange={this.props.handleChange}
                defaultValue={form ? form.documento : ""}
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="tipo_documento">
              <Form.Label>Tipo de Documento (*)</Form.Label>
              <Form.Control
                as="select"
                name="tipo_documento"
                onChange={this.props.handleChange}
                defaultValue={form ? form.tipo_documento : ""}
                required
              >
                <option value="">seleccione...</option>
                <option value="CC">CC</option>
                <option value="TI">TI</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row></Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="Clave">
              <Form.Label>clave</Form.Label>
              <Form.Control
                type="password"
                minLength="5"
                maxLength="11"
                placeholder="Digite Clave"
                name="Password"
                defaultValue={form ? form.telefono_celular : ""}
                onChange={this.props.handleChange}
              />
            </Form.Group>
          </Form.Row>
        </Form>
      </>
    );
  }
}
