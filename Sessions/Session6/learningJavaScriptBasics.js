// to be able to run the file
// navigate to the folder where the file is located
// then type node learningJavaScriptBasics.js in the terminal. 
// and by the way this is how we can add comments in JavaScript using (//)
/*
    And this is how we can make a multi-line comment in JavaScript using (/* star/)
*/


// to print something in the console
// we use console.log() function
console.log('Hello World!');

// Data types and variables
/*
    undefined, null, boolean, string, symbol, number, and object
    undefined: means that the variable is not assigned to any value yet
    null: means that the variable is empty (nothing)
    boolean: means that the variable can have only two values (true or false)
    string: means that the variable can have any value (text)
    symbol: means that the variable can have any value (text)
    number: means that the variable can have any value (number)
    object: means that the variable can have any value (object) -> class or structs

    To declate a variable, there are three main ways:
    1. *var* keyword, and it automatically know the data type
    2. *let* keyword, which will define a variable only inside its scope. 
    -- both of the above ways, we can change the value of the variable
    3. *const* keyword, which will define a variable only inside its scope. 
    we can never change the value of this variable. 
    
*/
function print(vari) {
    console.log(vari);
}

var myName = 'Ahmed'; // this is how we can declare a variable in JavaScript
print(myName)
myName = 8; // this is how we can declare a variable in JavaScript
print(myName)
let myAge = 25; // this is how we can declare a variable in JavaScript
print(myAge)
myAge = 41;
print(myAge)
const pi = 3.14; // this is how we can declare a variable in JavaScript
print(pi)

// Storing values with the assignment operator
/*
    There is a difference between declaring a variable and assigning a value to it.
    var a; -> this is declaring a variable
    a = 7; -> this is assigning a value to the variable
    we end the line with a semicolon (;)
    we can declare a variable and assign a value to it in the same line
    var a = 7;.

    assignment operators:
    =, +=, -=, *=, /=, %=
*/

var a; // initially it has null value. 
print(a);
var b = 2;
a = 7;
b = a;
print(a);
print(b);

/*
    JavaScript is a case sensitive language
    it is recommended to use camelCase for naming variables
    camelCaseLooksLikeThis
*/


/*
    Arithmetic operations in JavaScript
    +, -, *, /, %, ++, --
*/

/*
    Escaping literal quotes in strings
    we can use backslash (\) to escape the literal quotes
    after it we have multiple options: 
    \' single quote 
    \" double quote
    \\ backslash
    \n newline
    \r carriage return
    \t tab
    \b backspace
    \f form feed
*/


/*
    we can define string using multiple ways
    1. using single quotes ''
    2. using double quotes ""
    3. using backticks ``

    and to concatenate strings we use the plus (+) operator or (+=) operator 
*/
var myString1 = 'I am a "double quoted" string inside "double quotes"';
myString1 += "I am a 'single quoted' string inside 'single quotes'";
var myString2 = "I am a 'single quoted' string inside 'single quotes'";
var myString3 = `I am a "single quoted" string inside 'single quotes'`;

print(myString1 + myString2 + myString3);



/*
    Constructing Strings with variables
*/

var myName = 'Zizo';
var ahmedAge = 25;
var myString = "My name is " + myName + " and I am " + ahmedAge + " years old.";
print(myString);



/*
    Finding the length of the string
    we just use the property length.
*/
var myName = 'Zizo';
var myNameLength = myName.length;
print(myNameLength);


/*
    Bracket notation to find the cetain character in a certain position in a string.
    []
    js is zero-indexed language
*/

print(myName[3]); // o


/*
    Strings in javaScript are immutable
    this means that we can not change a certain character in a string
    var myString = "Jello World";
    myString[0] = "H"; // this will not work
    to change it we need to create a new string

    search for why they make strings immutable in javaScript??
*/


/*
    find the last character in a string
    we use the length property
*/
var myName = 'Zizo';
var lastCharacter = myName[myName.length - 1];
print(lastCharacter);


/*
    creating a function
*/
function wordBlanks(myNoun, myAdj, myVerb, myAdv) {
    var result = "";
    result += "The " + myAdj + " " + myNoun + " " + myVerb + " to the store " + myAdv;
    return result;
}

print(wordBlanks("dog", "big", "ran", "quickly"));


/*
    Arrays
    like python, we can create arrays which contains variables, with different data types.
*/
var ourArray = ["John", 23];


/*
    Multi-dimensional arrays
    we can create arrays which contains arrays  
      */

var myArray = [["the universe", 42], ["everything", 101010]];
