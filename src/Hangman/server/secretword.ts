import { Wordlist } from './wordlist';

const random = Math.floor(Math.random() * Wordlist.length);

console.log(Wordlist[random]);

export const Secretword = Wordlist[random];