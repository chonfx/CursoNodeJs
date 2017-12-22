var tiempoEspera = 3000;
var tiempoActual = 0;
var intervaloDeEspera = 10;
var porcentajeEsperado = 0;

function escribirPorcentajeEspera(p) {
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`esperando ... ${p}%`);
}

var intervalo = setInterval(function() {
	tiempoActual += intervaloDeEspera;
	porcentajeEsperado = Math.floor((tiempoActual/tiempoEspera) * 100);
	escribirPorcentajeEspera(porcentajeEsperado);
}, intervaloDeEspera);


setTimeout(function() {
	clearInterval(intervalo);
	escribirPorcentajeEspera(100);
	console.log("\n\n terminado \n\n");
}, tiempoEspera);

process.stdout.write("\n\n");
escribirPorcentajeEspera(porcentajeEsperado);