//Typescript uses Language Server Protocal to provide the compiler. 
const add = (a, b) => a + b; // add(a: any, b: any) => any 
add(1, 2); 

//VSCode always use "Typescript Compiler". 

/**
 * @param a {number} 
 * @param b {number}  
*/

function add2(a: number, b: number) {
	return a + b; 
}

const person = {
	name: "Bob",
	atk: 30 
};

// /** @type {{something: string}} */ 
// const stat: { something: string; } = {
// 	something, 
// }


//Type Inference 
//Literal 
const cat = 'meow';

const catBark = (bark: 'Meow' | 'MeowMeow') => `Cat: ${bark}`; 
console.log(catBark('MeowMeow')); //Argument of type '"MeowMeow"' is not assignable to parameter of type '"Meow"'.  

const flip = (n: true) => !n; 
console.log(flip(true));

const aggresive: (arg0: string) => any (mood: 'angry'): String => `I am ${mood}`;
console.log(aggresive('happy'));

const sudoku: Number[] = [1,2,3,4,5];
const sudokuGrid = [[1,2], [3,"Bingo"]]; 
const isCat = cat => !cat; 
const is5: (true | 5)[][] = [[true, 5], [5, true]]; 