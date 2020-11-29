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
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <button type="button" class="btn btn-primary btn-lg btn-block">
          El coronavirus en Colombia sigue llegando a las diferentes ciudades y
          municipios del país. Acá el reporte diario del número de contagios que
          presenta la cuidad de Medellin.
        </button>
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        23 de noviembre El Ministerio de Salud informó que el departamento de
        Antioquia presenta un total de 203.968 casos de covid-19.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        19 de noviembre El Ministerio de Salud reportó que el departamento de
        Antioquia presenta un total de 198.257 casos de covid-19.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        15 de noviembre El Ministerio de Salud informó que, el departamento de
        Antioquia registra un total de 194.398 casos de covid-19.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        11 de noviembre El Ministerio de Salud informó que el departamento de
        Antioquia registra un total de 187.837 casos de covid-19.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        10 de noviembre 186.183 personas han sido diagnosticadas con covid-19.
        1.629 personas fueron reportadas como nuevos casos en el nuevo informe
        del Ministerio de Salud.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>9 de
        noviembre 184.554 personas han sido diagnosticadas con covid-19 desde
        que inició la pandemia. El incremento de casos continúa siendo muy
        acelerado en esta zona del país.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>5 de
        noviembre El Ministerio de Salud informó que el departamento de
        Antioquia presenta un total de 178.735 casos de covid-19.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>3 de
        noviembre 174.345 personas han sido como casos positivos de covid-19
        ante el Ministerio de Salud. 1127 se registraron en las últimas 24
        horas.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>2 de
        noviembre El departamento de Antioquia suma un total de 173.219
        contagios por covid-19, según reporte del Ministerio de Salud.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        30 de octubre Según reportó el Ministerio de Salud, el departamento de
        Antioquia registra un total de 167.328 casos de covid-19.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        29 de octubre El departamento de Antioquia registra un total de 164.814
        casos de covid-19, según informó el Ministerio de Salud.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        27 de octubre 160.040 personas han sido diagnosticadas con covid-19 en
        este departamento. 2.135 personas dieron positivo en las últimas 24
        horas y es el departamento con más casos nuevos de contagiados en este
        día.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        24 de octubre El Ministerio de Salud reportó un total de 153.283
        personas con contagio de covid-19.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        23 de octubre 151.420 personas han sido diagnosticadas con covid-19 en
        este departamento.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        21 de octubre 147.450 personas han dado positivo en las pruebas del
        covid-19. El Ministerio de Salud informó que son 1.365 casos hoy.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        20 de octubre 146.086 personas han dado positivo en el test de covid-19
        desde que inició la pandemia.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        18 de octubre El Ministerio de Salud reportó un total de 143.531
        personas con contagio de covid-19.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        16 de octubre El departamento de Antioquia registra un total de 139.833
        casos de covid-19, según el último reporte del Ministerio de Salud
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        15 de octubre El departamento de Antioquia registra un total de 137.953
        casos de covid-19, según el último reporte de Minsalud.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        13 de octubre 135.372 personas han dado positivo en las pruebas de
        covid-19 desde que comenzó la pandemia.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>6 de octubre
        El Ministerio de Salud ha reportado un total de 121.792 casos de
        covid-19 en el departamento de Antioquia.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        28 de septiembre 417 personas fueron diagnosticadas con covid-19 en este
        departamento en las últimas 24 horas. En total son 112.886 en este
        departamento desde que comenzó la pandemia.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        26 de septiembre El departamento de Antioquia registra un total de
        110.870 casos de covid-19, según el último reporte del Ministerio de
        Salud.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        24 de septiembre El Ministerio de Salud informó que, el departamento de
        Antioquia registra un total de 108.353 casos de covid-19.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        23 de septiembre El Ministerio de Salud ha reportado un total de 107.331
        contagios por covid-19 en el departamento de Antioquia.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        22 de septiembre El departamento de Antioquia registra un total de
        106.11 casos de covid-19, según el último reporte del Ministerio de
        Salud.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        20 de septiembre Antioquia registra 103.915 casos de covid-19 desde que
        comenzó la pandemia.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        15 de septiembre Para este martes, el Ministerio de Salud informó que,
        el Departamento de Antioquia registra un total de 98.062 casos de
        covid-19.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        14 de septiembre El departamento de Antioquia suma un total de 96.979
        contagios por covid-19, según reporte del Ministerio de Salud.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        12 de septiembre 720 personas fueron diagnosticadas con covid-19 en este
        departamento en las últimas 24 horas. En total son 94.447 los casos
        positivos en este departamento desde que inició la pandemia.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>
        11 de septiembre 93.727 personas han dado positivo en los test de
        coronavirus desde inició la pandemia del covid-19.
        <form className="mt-5" onSubmit={this.handleSubmit}></form>8 de
        septiembre 90.481 personas han sido diagnosticadas con covid-19 en este
        departamento .
        <form className="mt-5" onSubmit={this.handleSubmit}></form>7 de
        septiembre El Ministerio de Salud informó que, el departamento de
        Antioquia registra un total de 89.759 casos de covid-19. 5 de septiembre
        87.797 personas han sido diagnosticas con covid-19. 1.371 personas han
        sido diagnosticadas con este virus en las últimas 24 horas, según el
        Ministerio de Salud. 4 de septiembre 86.426 personas se han reportado a
        la fecha. El Ministerio de Salud informó que son 1.661 los nuevos casos
        en la últimas 24 horas. Reapertura en Medellín de buses, gimnasios,
        restaurantes y discotecas: fechas y protocolos 3 de septiembre El
        Ministerio de Salud ha reportado 84.765 casos de coronavirus en el
        departamento de Antioquia. 2 de septiembre Antioquia registra un total
        de 83.248 casos de covid-19 hasta la fecha, según el reporte del
        Ministerio de Salud. 31 de agosto El Ministerio de Salud informó que el
        departamento de Antioquia llegó a un total de 80.996 casos de covid-19.
        29 de agosto Este sábado se reportó un total de 78.939 de contagios por
        covid-19 en la región. 27 de agosto El Ministerio de Salud informó que
        el departamento de Antioquia registra un total de 77.709 casos de
        covid-19. 26 de agosto 74.796 personas han sido diagnosticadas con
        covid-19 hasta este momento. 1.881 fueron reportadas en el nuevo informe
        del Ministerio de Salud. 25 de agosto 72.915 personas personas han dado
        positivo en la prueba del covid-19 a la fecha. 24 de agosto 71.983
        personas se han contagiado de covid-19 en este departamento que poco a
        poco se prepara para la reapertura de varios sectores. 22 de agosto
        69.615 personas han sido diagnosticadas con covid-19 en este
        departamento. Así será el toque de queda nocturno en Medellín, este fin
        de semana 21 de agosto El Ministerio de Salud informó que, el
        departamento de Antioquia registra un total de 68.313 casos de covid-19.
        20 de agosto El departamento de Antioquia registra un total de 67.033
        casos de covid-19, según el último reporte del Ministerio de Salud. 19
        de agosto A la fecha, el departamento de Antioquia registra un total de
        66.206 casos de covid-19. 18 de agosto El Ministerio de Salud informó
        que el departamento de Antioquia registra un total de 64.679 casos de
        covid-19. 15 de agosto 60.873 personas han sido diagnosticadas con
        covid-19 en este departamento. 1751 personas fueron dadas como positivas
        en las últimas 24 horas. 14 de agosto 59.122 personas han sido
        diagnosticadas con covid-19 a la fecha en este departamento. 12 de
        agosto El Ministerio de Salud informó que el departamento de Antioquia
        registra un total de 57.360 casos de covid-19. 11 de agosto El
        departamento de Antioquia registra un total de 54.165 casos de
        coronavirus, según el último reporte del Ministerio de Salud. 10 de
        agosto El departamento de Antioquia suma un total de 52.417 casos de
        covid-19, según reportes del Ministerio de Salud. 8 de agosto 48.342
        personas han sido las personas que han sido diagnosticadas con covid-19
        en esta región del país. En el nuevo informe se sumaron 1.508 personas.
        7 de agosto El Ministerio de Salud informó que el departamento de
        Antioquia registró un total de 46.834 casos de covid-19. 6 de agosto
        44.730 personas han sido diagnosticadas hasta la fecha con este virus.
        1.360 personas dieron positivo para covid-19 en las últimas 24 horas. 5
        de agosto El Ministerio de Salud informó que el departamento de
        Antioquia registra un total de 43.370 casos de covid-19. 4 de agosto El
        Ministerio de Salud informó que el departamento de Antioquia registra un
        total de 41.978 casos de coronavirus. 3 de agosto El Ministerio de Salud
        reportó un total de 40.927 casos de covid-19 en el departamento de
        Antioquia. 1 de agosto El Ministerio de Salud informó que hay 2.988
        nuevas personas con covid-19. En total han sido diagnosticadas 35.746
        personas en este departamento. 31 de julio 32.759 personas han sido
        diagnosticas con covid-19 en esta región del país. 2.074 personas
        ingresaron a la lista en las últimas 24 horas. 30 de julio El Ministerio
        de Salud reportó que el departamento de Antioquia registra 30.685 casos
        de coronavirus. 29 de julio El departamento de Antioquia acumula 28.645
        contagios de covid-19, según reportes del Ministerio de Salud. 28 de
        julio El Ministerio de Salud informó que el departamento de Antioquia
        suma un total de 27.226 casos de coronaviurs hasta el momento. 27 de
        julio Según informó el Ministerio de Salud, el departamento de
        Antioquia, registra un total de 26.117 casos de covid-19. 25 de julio El
        departamento de Antioquia acumula 23.035 contagios de covid-19, según
        reportes del Ministerio de Salud. 24 de julio El Ministerio de Salud
        informó que Antioquia registra un total de 21.922 casos de coronavirus.
        23 de julio El Ministerio de Salud informó que el departamento de
        Antioquia, registra un total de 20.613 casos de covid-19. 22 de julio El
        Ministerio de Salud informó que el departamento de Antioquia suma un
        total de 19.751 contagios de covid-19. 21 de julio Las cifras en este
        departamento continúan creciendo y este 21 de julio llegaron a 18.690
        casos de covid-19 en toda esta región. 17 de julio El Ministerio de
        Salud informó que el departamento de Antioquia ha reportado un total de
        13.335 casos de covid-19. 16 de julio 12.282 personas contagiadas
        reporta Antioquia hasta la fecha. En el nuevo informe del Ministerio de
        Salud se sumaron 931 personas. 15 de julio Con 11.351 casos, este
        departamento presenta 775 casos nuevos de covid-19 en las últimas horas,
        según datos del Ministerio de Salud. 14 de julio Antoquia sigue sumando
        más contagios y este martes el Ministerio de Salud reportó que hay
        10.576 casos de covid-19. 13 de julio 9.582 personas han sido
        diagnosticadas con covid-19. Entre los equipos de fútbol se ha informado
        que Nacional y Envigado han dado casos positivos. Dos nuevos casos de
        covid-19 en el fútbol colombiano reporta Envigado Alerta en Atlético
        Nacional: dos casos positivos por coronavirus 12 de julio El Ministerio
        de Salud reportó que en el departamento de Antioquia se han presentado
        un total de 9.253 casos de covid-19. 11 de julio El Ministerio de Salud
        reportó que en el departamento de Antioquia se han presentado un total
        de 8.744 casos de covid-19. 10 de julio El Ministerio de Salud informó
        que el departamento de Antioquia registra a la fecha un total de 8.455
        casos de covid-19. 9 de julio En Antioquia se han registrado 7.825 casos
        de covid-19. Recientemente se diagnosticaron 579 casos. 8 de julio El
        Ministerio de Salud confirmó que el departamento de Antioquia presenta
        un total de 7.246 casos de covid-19.. 7 de julio El Ministerio de Salud
        informó que el departamento de Antioquia ha presentado un total de 6.773
        contagios. 6 de julio El Ministerio de Salud reportó un total de 6.385
        casos de covid-19 en el departamento de Antioquia. 4 de julio Luego de
        un nuevo reporte del Ministerio de Salud, se confirmó que el
        departamento de Antioquia registra un total de 5.675 casos de covid-19.
        3 de julio ​ El Ministerio de Salud informó que el departamento de
        Antioquia presenta un total de 5.263 casos confirmados de covid-19. 2 de
        julio El Ministerio de Salud confirmó que el departamento de Antioquia
        registra un total de 4.981 casos de covid-19. 1 de julio El Ministerio
        de Salud reportó que en el departamento de Antioquia se han presentado
        un total de 4.660 casos de covid-19. 30 de junio El Ministerio de Salud
        informó que el departamento de Antioquia presenta a la fecha un total de
        4.442 casos de covid-19. 28 de junio El Ministerio de Salud reportó que
        en el departamento de Antioquia hay un total de 4.089 casos de covid-19.
        27 de junio El Ministerio de Salud reportó que en el departamento de
        Antioquia hay un total de 3.873 casos de coronavirus. 26 de junio El
        Ministerio de Salud dio confirmó que el departamento de Antioquia
        presenta un total de 3.647 casos de covid-19- 25 de junio Luego del
        último reporte del Ministerio de Salud, se informó que Antioquia
        registra un total de 3.457 casos de covid-19. 24 de junio 3.239 personas
        han sido diagnosticadas con covid-19 en este departamento. 141 personas
        dieron positivo en las muestras realizadas en las últimas 24 horas. 23
        de junio El Ministerio de Salud informó que el departamento de Antioquia
        presenta a la fecha un total de 3.098 casos de covid-19. 20 de junio El
        Ministerio de Salud confirmó que el departamento de Antioquia llegó a un
        total de 2.758 casos de covid-19. 19 de junio El Ministerio de Salud
        informó que a la fecha, el departamento de Antioquia registra un total
        de 2.660 casos de covid-19. 18 de junio Según informó el Ministerio de
        Salud, el departamento de Antioquia cuenta con 2.498 casos de covid-19.
        17 de junio 99 personas se han confirmado con este virus en el nuevo
        reporte del Ministerio de Salud. En total, este departamento tiene 2.369
        personas diagnosticadas con esta enfermedad. 16 de junio 2.270 personas
        se han diagnosticado con coronavirus en este departamento. En los
        últimos dos días se han sumado 123 personas. 14 de junio El Ministerio
        de Salud reportó que el departamento de Antioquia tiene un total de
        2.147 casos de coronavirus. 13 de junio El Ministerio de Salud reporta
        un total de 1.884 casos de covid-19 en el departamento de Antioquia. 12
        de junio El departamento de Antioquia registró 51 nuevos casos de
        covid-19 en el país, luego del último reporte del Ministerio de Salud.
        Llegó a un total de 1782 casos confirmados. 11 de junio
      </>
    );
  }
}
