let result: string = "";

const message: "I have" = "I have";

type Article = "a" | "an";
let article: Article = "a";

const animals: string[] = ["Cat", "Dog", "Ant", "Rabbit", "Tiger"];

animals.map(animal => {
	if(animal.split('')[0].toUpperCase() == "A" || animal.split('')[0].toUpperCase() == "E" || animal.split('')[0].toUpperCase() == "I" || animal.split('')[0].toUpperCase() == "O" || animal.split('')[0].toUpperCase() == "U") {
		article = "an";
	}

	result += `${message} ${article} ${animal.toLowerCase()}.\n`;
});

console.log(result); 