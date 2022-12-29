import { Coast } from "./src/javascript/coast.js";

const heads = document.getElementsByTagName("head");
if (heads && heads.length > 0) {
  const requireScripts = [
    "canvas.js",
    "boat.js",
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
        canvas.width = 800;
        canvas.height = 800;
        if (canvas.getContext) {
            app.appendChild(canvas);
            new InterfaceCanvas(canvas);
        }
    }
}
