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
  
 console.log(false || false || false || false || false || true);


console.log(false == false) 

console.log(e == 'Kevin');

console.log(a < b + c); // note: a < b < c 
// is NOT CORRECT (and is not a valid JS expression, think about using other math operations)


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

// F. Biggie Smalls
// Create a variable that contains an integer.
myInteger = (100)

// Write an if ... else statement that:

if (myInteger <= 100) {
    console.log('little number');
} else {
    console.log(18);
}
