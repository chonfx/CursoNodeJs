var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var realPerson = {
	name:'',
	sayings:[]
};

rl.question("cual es el nombre",function(respuesta){
	realPerson.name = answer;
	rl.setPrompt(`que diria ${realPerson.name}`);
	rl.prompt();
	
	rl.on('line',function(diciendo){
		
		if(diciendo.toLowerCase().trim() === 'exit'){
			rl.close();
		}else{
					rl.setPrompt(`que diria ${realPerson.name}`);
		rl.prompt();
		}
		

		//console.log(diciendo.trim());
	});
	//console.log(answer);
});