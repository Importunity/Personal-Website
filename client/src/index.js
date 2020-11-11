import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'popper.js';
import 'jquery/dist/jquery';


var isMobile = false;
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  isMobile = true;
}else{
  // false for not mobile device
  isMobile = false;
}
//console.log(isMobile);

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);*/
if(!isMobile){
    ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}else{
  ReactDOM.render(
    <div>
      <h1>Hello, I am currently in the process of optimizing my personal website for mobile, so please use a computer. Thank you.</h1>
    </div>,
  document.getElementById('root')
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
