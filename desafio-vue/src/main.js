import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


//fondo feliz porque me estrese :C

const colors = ["silver", "gold", "yellow", "orange", "cyan", "blue", "magenta", "purple"];
let body = document.getElementsByTagName("body")[0];


for (let index = 1; index <= 2000; index++){
   
    let element = document.createElement("div");
    let length = (Math.random() * 3) + "px";
    element.style.height = length;
    element.style.width = length;
    element.style.borderRadius = "50%";
    element.style.position = "fixed";
    element.style.top = (Math.random() * 100 + 1) + "%";
    element.style.left = (Math.random() * 100 + 1) + "%";

    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.backgroundColor = randomColor;
    body.appendChild(element);
}


body.style.backgroundColor = "#ccc";