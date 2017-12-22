var preguntas = [
	"cual es tu nombre?",
	"cual es tu pasatiempo favorito",
	"cual es tu lenguaje de progra preferido"
];

var respuestas = [];

function pregunta(i){
	process.stdout.write(`\n\n\n\n ${preguntas[i]}`);
	process.stdout.write(" --> ");
}

process.stdin.on('data',function(data){
	respuestas.push(data.toString().trim());
	
	if(respuestas.length < preguntas.length){
		pregunta(respuestas.length);
	}else{
		process.exit();
	}
	
	//process.stdout.write('\n' + data.toString().trim() + '\n');
});

process.on('exit',function(){
	process.stdout.write("\n\n\n");
	process.stdout.write(`ve a ${respuestas[1]} ${respuestas[0]} puedes terminar de escribir ${respuestas[2]}`);
	process.stdout.write("\n\n\n");
});

pregunta(0);


/*process.stdout.write("olis");
process.stdout.write("mundis \n\n\n\n");*/