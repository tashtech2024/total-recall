console.log("Running.....");

// IV. Functions

//?  A.printGreeting

// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?

// function printGreeting(greeting){
  
// }


//? B. printCool

// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

// function printCool(message){
//     console.log(printCool);
// }


// C. calculateCube - Check 

// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number. SEE whats going on with this one 

function calculateCube(number){
    console.log('Volume of ${number} cube ${number * number *number}');
}
calculateCube(6);

// D. isVowel

// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want. 

function isVowel(letter){
   letter = letter.toLowerCase();
    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
        return true ; 
    }else{
        return false; 
    }
}
console.log(isVowel("a"));

// E. getTwoLengths

// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

function getTwoLengths(string1, string2) {
console.log(string1.length, string2.length) 
    return [
string1.length,
string2.length
 ];
} 
console.log(getTwoLengths("Hank", "Hippopopalous"));


// F. getMultipleLengths

// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

function getMultipleLengths(array) {
// console.log(array);
const result = []; 
for (let string of array) { 
    // console.log(str.length);
    result.push(string.length);
}
console.log(result);
return result 
}
getMultipleLengths(["Hello", "what", "is", "up", "Guy!"]);
console.log("Hello", "what", "is", "up", "Guy!");


//? G. maxOfThree

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// H. printLongestWord

// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// let count = 0;

//   function inner() {
//       count += 1;

//      return count;
// }

// const increment = outer();

// console.log(increment());

// console.log(increment());