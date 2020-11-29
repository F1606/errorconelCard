import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
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
          <Link class="nav-link active" href="/menu">
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

        <Card>
          <Card.Body>
            <Card.Title>
              <h1>
                Lavarse las manos es una de las mejores formas de protegerse y
                de proteger a su familia para que no se enfermen. Sepa cuándo y
                cómo se debe lavar las manos para mantenerse sano.
              </h1>{" "}
            </Card.Title>
            <Card.Text>
              1) Mójese las manos con agua corriente limpia (tibia o fría),
              cierre el grifo y enjabónese las manos.
              <form className="mt-2" onSubmit={this.handleSubmit}></form>
              2) Frótese las manos con el jabón hasta que haga espuma. Frótese
              la espuma por el dorso de las manos, entre los dedos y debajo de
              las uñas.
              <form className="mt-2" onSubmit={this.handleSubmit}></form>
              3) Restriéguese las manos durante al menos 20 segundos. ¿Necesita
              algo para medir el tiempo? Tararee dos veces la canción de “Feliz
              cumpleaños” de principio a fin.
              <form className="mt-2" onSubmit={this.handleSubmit}></form>
              4) Enjuáguese bien las manos con agua corriente limpia.
              <form className="mt-2" onSubmit={this.handleSubmit}></form>
              5) Séqueselas con una toalla limpia o al aire.
            </Card.Text>
            <form className="mt-2" onSubmit={this.handleSubmit}></form>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              <h1>¿Cuándo debería usar…?</h1>
            </Card.Title>
            <Card.Text>
              Agua y jabón
              <form className="mt-2" onSubmit={this.handleSubmit}></form>
              Antes, durante y después de preparar alimentos.
              <form className="mt-2" onSubmit={this.handleSubmit}></form>
              Antes de comer.
              <form className="mt-2" onSubmit={this.handleSubmit}></form>
              Antes y después de atender a alguien que esté enfermo con diarrea
              o vómitos.
              <form className="mt-2" onSubmit={this.handleSubmit}></form>
              Antes y después de tratar cortaduras o heridas.
              <form className="mt-2" onSubmit={this.handleSubmit}></form>
              Después de ir al baño.
              <form className="mt-2" onSubmit={this.handleSubmit}></form>
              Después de cambiar pañales o de limpiar a un niño que haya ido al
              baño.
              <form className="mt-2" onSubmit={this.handleSubmit}></form>
              Después de tocar a un animal, alimento para animales o excremento
              de animales.
              <form className="mt-2" onSubmit={this.handleSubmit}></form>
              Después de manipular alimentos o golosinas para mascotas.
              <form className="mt-2" onSubmit={this.handleSubmit}></form>
              Después de tocar la basura.
              <form className="mt-2" onSubmit={this.handleSubmit}></form>
              Si tiene las manos visiblemente sucias o engrasadas.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              <h1>¿Cuándo debería usar…?</h1>
            </Card.Title>
            <Card.Text>
              Desinfectante de manos a base de alcohol
              <form className="mt-2" onSubmit={this.handleSubmit}></form>
              Antes y después de visitar a un amigo o ser querido en el hospital
              u hogar de ancianos, a menos que esta persona esté enferma por
              Clostridioides difficile (en tal caso, use agua y jabón para
              lavarse las manos).
              <form className="mt-2" onSubmit={this.handleSubmit}></form>
              Si no tiene agua y jabón fácilmente disponibles, use un
              desinfectante de manos que contenga al menos un 60 % de alcohol, y
              láveselas con agua y jabón en cuanto pueda.
              <form className="mt-2" onSubmit={this.handleSubmit}></form>
              NO use un desinfectante de manos si sus manos están visiblemente
              sucias o engrasadas; por ejemplo, después de trabajar en el
              jardín, jugar al aire libre, o pescar o ir de campamento. Si hay
              una estación de lavado de manos disponible, láveselas con agua y
              jabón en lugar de usar desinfectante de manos.
              <form className="mt-2" onSubmit={this.handleSubmit}></form>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Después de sonarse la nariz, toser o estornudar, debería limpiarse
              las manos de inmediato con agua y jabón o con un desinfectante de
              manos a base de alcohol para evitar la propagación de microbios.
            </small>
          </Card.Footer>
        </Card>
      </>
    );
  }
}
export default Menu;
