const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const my = rl("Hello, what is your name?");
console.log(`Name ${my}`);