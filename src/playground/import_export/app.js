// for default imports, naming doesn't have to match, otw they do
import anythingIwant, { square, add } from './utils.js';
import dude, {isAdult, canDrink} from './person.js';
import validator from 'validator';

console.log("square of 4 = " + square(4));
console.log("add " + add(100,4));
console.log("subtract - " + anythingIwant(10,20));

console.log("17 is an Adult = " + isAdult(17));
console.log("21 means I can drink = " + canDrink(21));
console.log(dude(65));

console.log("dudeman$dumb.com is email = " + validator.isEmail('dudeman$dumb.com'));
console.log("dudeman@dumb.com is email = " + validator.isEmail('dudeman@dumb.com'));