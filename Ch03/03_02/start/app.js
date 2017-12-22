function agarrar(bandera){
	var index = process.argv.indexOf(bandera);
	return (index === -1) ? null : process.argv[index+1];
}

var saludo = agarrar('--saludo');
var usuario = agarrar('--usuario')

if(!usuario || !saludo){
	console.log("trono algo bien");
}else{
	console.log(`bienvenido ${usuario}, ${saludo}`);
}


console.log(process.argv);