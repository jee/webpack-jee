import React from "react";
import ReactDOM from "react-dom";
import commanderKeen from'../src/Commander_keen.png';
import manySVGIcons from '../src/manyIcons.svg';
import telephone from '../src/telephone.svg';
import '../src/styles.scss';

const App = () => {
  return (
    <div>
      <h3>{'Webpack 4 Configuration Demonstration'}</h3>
      <p>{'PNG File'}</p>
      <img src={commanderKeen} />
      <br />
      <p>{'SVG < 1mb'}</p>
      <img src={telephone} height="auto" width="auto" />
      <br />
      <p>{'SVG > 1mb'}</p>
      <img src={manySVGIcons} height="auto" width="auto" />
      <br />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
