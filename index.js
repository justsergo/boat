import { Coast } from "./src/javascript/coast.js";

const heads = document.getElementsByTagName("head");
if (heads && heads.length > 0) {
  const requireScripts = [
    "canvas.js",
    "boat.js",
    "canon.js",
  ];

  for (let i = 0; i < requireScripts.length; i++) {
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", `./src/javascript/${requireScripts[i]}`);
    heads[0].appendChild(script);
  }
}

window.onload = () => {

    const app = document.getElementById('app');
    app.innerHTML= `${Coast()} `;


    if (app) {
        const canvas = document.createElement('canvas');
        const width = document.body.clientWidth*0.95;
        const height = document.body.clientHeight*0.95;
        canvas.style.width = `${width}px`;
        canvas.style.height =`${height}px`;
        // canvas.style.margin = ' 0 2.5%'
        // canvas.width = 800;
        // canvas.width = '100vw';
        // canvas.height = '100vh';
        // canvas.height = 800;
        if (canvas.getContext) {
            app.appendChild(canvas);
            new InterfaceCanvas(canvas);
        }
    }
}
