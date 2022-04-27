const carAI = {
	name: 'Misubishi',
	label: [{
		alphabet: {character: 'AB', num: 625}
	}] 
} 

const characterStat: {
	[keyName: string]: string,
} = {
	name: 'Anima',  
}

interface Animal {
	name: string,
	filum: string,
	age: number 
}

interface Cat extends Animal { 
	barksound: string 
}

const garfield: Cat = {
	name: 'Garfield',
	filum: 'Catophytar',
	age: 50,
	barksound: 'MeowMeow' 
}

type Aeon = {
	name: string,
	mp: number
}

const Ramuh: Aeon = {
	name: 'Ramuh',
	mp: 50
} 

type Angles = 0 | 30 | 45 | 60 | 90;

function setAngle(angle: Angles) {

}

setAngle(90);  

interface G {}
interface C {}
interface A extends C {
	a: string
}

interface B extends C {
	b: string
}

const facebookUser: C = { 
	a: 'Noom',
	b: 'Nim' 
}  