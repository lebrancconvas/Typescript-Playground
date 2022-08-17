import { Secretword } from '../server/secretword';

const isFullFil = (word: string, input: string[]): boolean => {
	const wordlist = word.toLowerCase().split("");
	const setWordlist = new Set(wordlist);
	const setInput = new Set(input);
	return Array.from(setWordlist).every(element => setInput.has(element));
};

const input: string[] = ["m", "r", "o"];
console.log(isFullFil(Secretword, input));

