const cowsay = require("cowsay");
import { think, SQUIRREL } from 'cowsay';
console.log(cowsay.say({
    text: "Hello World!",
    e: "Ò Ó",
    T: "ω"
}))

console.log(cowsay.think({
    text: 'grazing in the browser',
    cow: SQUIRREL,
    eyes: 'pp',
    tongue: ';;',
  }));