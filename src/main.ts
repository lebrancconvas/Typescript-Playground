//Typescript uses Language Server Protocal to provide the compiler. 
const add = (a: number, b: number) => a + b; // add(a: any, b: any) => any 
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

const aggresive = (mood: string) => `I am ${mood}`;
console.log(aggresive('happy')); 

const sudoku: Number[] = [1,2,3,4,5];
const sudokuGrid = [[1,2], [3,"Bingo"]]; 
const isCat = (cat: boolean) => !cat;  
const is5: (true | 5)[][] = [[true, 5], [5, true]]; 

const [counter, setCounter] = useEffect();

function useEffect(): [number, () => void] {
	return [1024, () => {}]; 
} 

function adder1(a: any, b: any) {
	a.useState();
}

function adder2(a: unknown, b: unknown) {
	a.useState();
}

function noReturn(): void {
	//return 1024; 
}

function noMoreReturn(Message: string): never {
	throw new Error(Message); 
}