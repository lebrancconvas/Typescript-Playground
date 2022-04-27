function callOut<T>(input: T): T {
	return input; 
}

const outputstring = callOut<string>("Generic Type.");
const outputnumber = callOut<number>(999);  

console.log(`String: ${outputstring}\nNumber: ${outputnumber}`);

function arrayLen<T>(input: Array<T>): Array<T> {
	console.log(input.length); 
	return input; 
}

function processEditor<Type extends string | number>(editingpoint: Type): Type {
	return editingpoint;  
}

const procrssing = processEditor("Bridgestone."); 

interface GameList {
	id: string,
	name: string
}
                                             
function setGameStore<key extends keyof GameList, value extends GameList[key]>(GameKey: key, GameValue: value) {
	return `${GameKey}: ${GameValue}`; 
}
console.log(setGameStore('id', 'ST-9082'));  
console.log(setGameStore('name', 'The Return of Nagoya Kids.')); 