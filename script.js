let mensaje = "mi gato es muy travieso";
let mensajeEncriptado = encriptar(mensaje);
let input = document.querySelector("input");

function write(texto, id) {
  document.getElementById(id).innerHTML = texto;
}

function buttonEncriptar() {
  write(encriptar(input.value), "text");
}

function buttonDesencriptar() {
  write(desencriptar(input.value), "text");
}

function copiar() {
  let aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById("text").innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);

  alert("Texto copiado! :D");
}

let button1 = document.querySelector("#encriptar");
let button2 = document.querySelector("#desencriptar");
let buttonCopiar = document.querySelector("#copy-button");
button1.onclick = buttonEncriptar;
button2.onclick = buttonDesencriptar;
buttonCopiar = copiar;

function encriptar(m) {
  let text = m;
  let textE = "";

  for (let i = 0; i < text.length; i++) {
    switch (text.charAt(i)) {
      case "a":
        textE += "ai";
        break;
      case "e":
        textE += "enter";
        break;
      case "i":
        textE += "imes";
        break;
      case "o":
        textE += "ober";
        break;
      case "u":
        textE += "ufat";
        break;
      default:
        textE += text.charAt(i);
        break;
    }
  }

  return textE;
}

function desencriptar(m) {
  let text = m;
  let textE = "";

  for (let i = 0; i < text.length; i++) {
    switch (text.charAt(i)) {
      case "a":
        textE += "a";
        i++;
        break;
      case "e":
        textE += "e";
        i += 4;
        break;
      case "i":
        textE += "i";
        i += 3;
        break;
      case "o":
        textE += "o";
        i += 3;
        break;
      case "u":
        textE += "u";
        i += 3;
        break;
      default:
        textE += text.charAt(i);
        break;
    }
  }

  return textE;
}
