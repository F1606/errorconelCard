import React from "react";
import ReactDOM from "react-dom";
import GifPlayer from "/";

import recipeImg from "../static/recipeApp.jpg";
import recipeGif from "../static/recipeApp.gif";
import recipeImg1 from "../static/1b.png";
import "./gifplayer.scss";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <GifPlayer gif={recipeGif} still={recipeImg} />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <GifPlayer gif={recipeGif} still={recipeImg} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
