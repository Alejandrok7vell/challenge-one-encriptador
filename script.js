let mensaje = "mi gato es muy travieso";
let mensajeEncriptado = encriptar(mensaje);

write("Mensaje Original: " + mensaje, 3);

write("Mensaje Encriptado: " + encriptar(mensaje), 2);
write("Mensaje Desencriptado: " + desencriptar(mensajeEncriptado), 0);

function write(texto, br) {
  let sl = br || 0;

  document.write(texto);

  for (let i = 0; i < sl; i++) {
    document.write("<br>");
  }
}

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
