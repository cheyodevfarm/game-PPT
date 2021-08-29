let piedraBtn = document.getElementById("piedra");
let papelBtn = document.getElementById("papel");
let tijeraBtn = document.getElementById("tijera");
let atacarBtn = document.getElementById("atacar");

let poderes = ["piedra", "papel", "tijera"];
let poderUsuario = "";
let poderMaquina = "";

piedraBtn.onclick = () => {
  // defino el poder del usuario con lo que selcciono
  poderUsuario = poderes[piedraBtn.getAttribute("poder")];

  // elegi PIEDRA entonces desactivo los demas
  papelBtn.disabled = !papelBtn.disabled;
  tijeraBtn.disabled = !tijeraBtn.disabled;
};

papelBtn.onclick = () => {
  // defino el poder del usuario con lo que selcciono
  poderUsuario = poderes[papelBtn.getAttribute("poder")];

  // elegi PAPEL entonces desactivo los demas
  piedraBtn.disabled = !piedraBtn.disabled;
  tijeraBtn.disabled = !tijeraBtn.disabled;
};

tijeraBtn.onclick = () => {
  // defino el poder del usuario con lo que selcciono
  poderUsuario = poderes[tijeraBtn.getAttribute("poder")];

  // elegi TIJERA entonces desactivo los demas
  piedraBtn.disabled = !piedraBtn.disabled;
  papelBtn.disabled = !papelBtn.disabled;
};

atacarBtn.onclick = () => {
  poderDeLaMaquina();
};

const poderDeLaMaquina = () => {
  const poderIndex = Math.floor(Math.random() * 3);
  poderMaquina = poderes[poderIndex];
  alert(poderMaquina);
};

const WhoWin = () => {};
