console.log("Running.........");

//======= Section 1 ======///
/**Variables & Data types **/

// A. Variables

// Declare a new constant variable called myName and assign it your name?

const myName = 'Tasha';{
console.log(myName);
}
// Declare a variable called favoriteLanguage and assign it the value of Python?
let favoriteLanguage = "Python";{
console.log(favoriteLanguage);
}

// Declare a new variable called newFavoriteLanguage and assign it JavaScript;
let newFavoriteLanguage = "JavaScript";{
console.log(newFavoriteLanguage);
}
// Assign the value of newFavoriteLanguage to favoriteLanguage referencing each other. ---- NEEDING THIS ONE TO BE CHECKED /////

favoriteLanguage= newFavoriteLanguage;{
console.log(`favoriteLanguage ${newFavoriteLanguage}`);
}

// Finally log or print a message using a Literal String, make use of the variables myName and favoriteLanguage.

// myName = "Tasha"; ---- what I THOUGHT 
// favoriteLanguage = "Python";

text = `This is ${myName}, and is ${favoriteLanguage}`;{
    console.log(text);
}

//  B. Strings

// Create a variable called firstVariable // CHECK PLEASE 

let firstVariable = "";
console.log("");

// Assign it the value of the string "Hello World"

firstVariable = "Hello World";
console.log(firstVariable);

// Change the value of this variable to some number

firstVariable = (5); {
console.log(firstVariable);
}
// Store the value of firstVariable in a new variable called secondVariable

let secondVariable = firstVariable;
console.log(`New variable called secondVariable ${secondVariable}`);

// Change the value of secondVariable to any string. // needing help with this one as well 

secondVariable = "anyString" ;
console.log(secondVariable);

// What is the value of firstVariable? Log it!
console.log(firstVariable);

// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated. ex: Hello, my name is Jean Valjean

const hiGreeting = `Hello`;
const yourname ='Tasha';{

    console.log (hiGreeting +" , my name is " + yourname);
    }

// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console:

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

// console.log(a __ b);

const result = b > a;
console.log(`Is B greater than A?  ${result}`);

// console.log(c __ d);

const isUnder57= d < c;
console.log(`Is d lesser than C? ${isUnder57}`);

console.log('Name' == 'Name');


 // FOR THE NEXT TWO, USE ONLY && OR ||

 console.log(true || false);

//  const thisLogic = b > d && 57 == 57;
//  console.log(`B is Greater than D & C is correct? ${thisLogic}`);
 
// console.log(false __ false __ false __ false __ false __ true);
 console.log(false && false && false && false && false || true);

//  console.log(false __ false)
console.log(false == false) 

// console.log(e ___ 'Kevin');
console.log(e == 'Kevin');

// console.log(a __ b ___ c);// note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a < b + c); 


console.log(a * a == d);
 // note: the answer is a simple arithmetic equation, not something "weird"

console.log(48 == '48');

// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else

let animal = 'Sheep'; 
console.log(animal);

// Write code that will print out "mooooo" if the variable is equal to cow

// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow." Commit.

if (animal == "Cow" ) {
    console.log('You are a cow!');
} else {
    console.log("Hey! You're not a cow");
}

// E. Driver's Ed //***************/
// Make a variable that holds a person's age; be semantic - ASK ABOUT ///````

//  

// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

let properAge = prompt('Enter your age: ');

userAge = parseInt(properAge);
console.log(typeof userAge);

if (properAge >= 16) {
    console.log('Here are the Keys!');
} else {
    console.log('Sorry, You are too young');
}

// F. Biggie Smalls ====== NEED TO FINSH F & G ==//
// Create a variable that contains an integer.

// Write an if ... else statement that:
// console.log() "little number" if the number is entered is less than 100
// console.log()  big number if the number is greater than or equal to 100.

// myInteger = (100)
let myInteger = 105;

if (myInteger <= 100) {
    console.log("little number");
} else {
    console.log("Big Number");
}

// G. Monkey in the Middle
// Write an if ... else if ... else statement:
// console.log() "little number" if the number entered is less than 5.
// If the number entered is more than 10, log "big number".
// Otherwise, log "monkey".

let myInteger2 = 55

if (myInteger2 < 5) {
console.log("Little number");
} 
else if (myInteger2 >= 10){
console.log("Big Number");
}
else (myInteger2 || "Monkey");{

}

// II. Loops ===================//

// Remember: USE let when you initialize your for loops!

// This is GOOD: for(let i = 0; i < 100; i++)

// This is NO GOOD: for(i = 0; i < 100; i++)

//========= A. The basics====///
// Write a loop that will print out all the numbers from 0 to 10, inclusive????

for (let i = 0; i <= 10; i++) {
    console.log(`Countdown is: ${i} `);
}
// Write a loop that will print out all the numbers from 10 up to and including 400
let k= 10;

for (let k= 10; k <=400; k++) {
    console.log(`Countdown #number 2 is:' ${k}`);
}

// Write a loop that will print out every third number starting with 12 and going no higher than 4000 *** NEEDING HELP WITH THIS ******

// let n= 12;

for (let n= 12; n <4000; n++){
   
    console.log(n);

    n+=2
}

//=======B. Get even =========//

// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "is an even number"

for (let h = 1; h <= 100; h++) {
    if (h % 2 === 0) {
        console.log(` Is Even number : ${h}`);
    }
    // Output odd numbers from 1 to 100.
    else if (h % 2 !== 0) {
        console.log(`odd: ${h}`);
    }
}
// C. Give me Five
// For the numbers 0 - 100, print out "I found a <number>. High five!" if the number is a multiple of five Example Output:

for (let t = 5; t <= 100; t ++) {
    console.log(t);{
        if (t % 5 ===0) {

        console.log(`I Found a ${t}. High five !`);
        }
    }
}

// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three Example Output:

// III. Arrays & Control flow

// A. Talk about it in your group:
// What are the things in an array called? 

// Elements ====///

// Do Arrays guarantee those things will be in order? 

//Yes =======///

// What real-life thing could you model with an array? 

// Box of donuts 
// Store book titles in a Library Management System
// Arrange the leader-board of a game

// Easy Does It

// Create an array that contains three quotes and store it in a variable called quotes: 

let quotes = ['Life is Good', 'Never give up','Better days area head'];

console.log(quotes);

// Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?

let randonThings = ['1', '10', "Hello", "true"]; 

    randonThings[0]="World";

console.log(randonThings);
}


// Change the value of "Hello"to "World"

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();