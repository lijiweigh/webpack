// import _ from 'lodash';
// import printMe from './print.js';
// import "./style.css"
import {cube} from "./math"

  function component() {
    var element = document.createElement('pre');   
    // var btn = document.createElement('button');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = ["hello", "5 cubed equals" + cube(5)].join("\n\n")

    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;
    // console.log("bbbbb")
    // element.appendChild(btn);

    return element;
  }

  document.body.appendChild(component());

//   if(module.hot) {
//       module.hot.accept()
//   }