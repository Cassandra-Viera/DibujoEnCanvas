let d = document.getElementById("draw");
let lienzo = d.getContext("2d");

dibujarLinea("yellow", 1, 1, 1, 399);
dibujarLinea("yellow", 1, 399, 399, 399);
dibujarLinea("magenta", 1, 1, 399, 1);
dibujarLinea("magenta", 399, 1, 399, 399);

let lineas = 40;
let l = 0;

for(l=0; l < lineas; l++) {
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea("magenta", 400, yi, xf, 0);
    console.log("Linea " + l);
}

for(l=0; l < lineas; l++) {
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea("yellow", 0, yi, xf, 400);
    console.log("Linea " + l);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
};

