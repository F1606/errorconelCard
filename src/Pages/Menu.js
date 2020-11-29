import React from "react";
import { Link } from "react-router-dom";
class Menu extends React.Component {
  render() {
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
          <Link class="nav-link active" href="Menu">
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
                <a class="nav-link" href="/">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
export default Menu;
