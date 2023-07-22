// @ Author: Abdelaziz Salah.
// @ Date: 22/7/2023. 
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



/*
    to append new item to the end of the array
    we use the push function
*/
myArray.push(["Zizo", 25]);

/*
    to append new item to the begining of the array
    we use the unshift function
*/
myArray.unshift(["okok", 25]);
print(myArray);

/*
    to remove the last item from the array
    we use the pop function
    and it returns the item that we removed. 
*/
print(myArray.pop());
print(myArray);
print(myArray.pop());
print(myArray);


/*
    to remove the first element from the array
    we use the shift function
*/
print(
    '---------------'
)
print(myArray);
print(myArray.shift());
print(myArray);



/*
    Shopping list example
*/
var myShoppingList = [
    ["cereal", 3],
    ["milk", 2],
    ["bananas", 3],
    ["juice", 2],
    ["eggs", 12]
];


/*
    Functions
    we declare it in this formate:
    function functionName(Parametert1,Parametert2,Parametert3) {
        ? Code to be executed
    }; 

    we use it to make the code more cleaner and reusable.
    look at print function above.

    to call it we just call its name and send it some parameters. 
    functionName(Argument1,Argument2,Argument3);

    ? The difference between parameters and arguments is that:
    ? function parameters are the names listed in the function's definition.
    ? function arguments are the real values passed to the function.
    */



/*
Global scope and functions
the global scope, means that we defined the variable outside the function
we can access it from anywhere in the code.
but if we define the variable inside the function, we can not access it from outside the function.
 
if we defined a variable without prefixing it with var, let, or const
it will be a global variable.
*/

print("------------------")
var myGlobal = 10; // this is a global variable
function fun1() {
    oopsGlobal = 5; // this is a global variable
}
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    print(output);
}
fun1();
fun2();


/*
    now you may wonder, what if we named a local variable, with the same name of a global variable
    and we tried to access it inside a function, then which will be used now?
    
    the answer is that the local variable will be used.
    because it takes the priority over the global variable.
    */
function whichFirst() {
    var oopsGlobal = 14;
    print(oopsGlobal);
}


// here 14 will be printed not 5, and if you think that this is because we have overwritten the global variable
//look for the upcoming example.
whichFirst();

oopsGlobal = 1;
whichFirst(); // it will also print 14 not 1.

function add(var1, var2) {
    return var1 + var2;
}



/*
    the created functions may return values, and if it does not return a value
    it will return undefined.
    */
print("------------------")
var sum = add(1, 2);
print(sum);




/*
    lets make a function that simulate a queue data structure .
    */
function queue(arr, item, op) {
    if (op == "push") {
        arr.push(item);
    } else {
        arr.shift();
    }
}

/*
    lets make a function that simulate a queue data structure .
*/
function stack(arr, item, op) {
    if (op == "push") {
        arr.push(item);
    } else {
        arr.pop();
    }
}



/*
to convert an object to string we use 
JSON.stringify()
*/
print("------------------")
var testArr = [1, 2, 3];
print(JSON.stringify(testArr));



/*
    Equality operator
    ==, ===, !=, !==
    == this is an equality operator, it will convert the data type of the two variables to the same type
        by which we mean that if we compare a string with a number, it will convert the string to a number
        and then compare them.
        so if we compare 1 == "1" it will return true.
    === will not convert the data type of the two variables to the same type
        so if we compare 1 === "1" it will return false.
        because they have different data types. 
    so as conclusion, we use === if we want to compare values and exact data types. 
    != will convert the data type of the two variables to the same type
    !== will not convert the data type of the two variables to the same type

    */

/*
logical operators
 &&, ||, !
 && and
 || or
 ! not
*/

print("------------------")
function grades(grade) {
    if (grade < 5)
        return "Tiny";
    else if (grade < 10)
        return "Small";
    else if (grade < 15)
        return "Medium";
    else if (grade < 20)
        return "Large";
    else
        return "Huge";
}

print(grades(4));
print(grades(5));
print(grades(9));
print(grades(10));
print(grades(14));
print(grades(15));
print(grades(19));
print(grades(20));

function mainMenu(selectedOption) {
    switch (selectedOption) {
        case 1:
            print("option 1");
            break;
        case 2:
            print("option 2");
            break;
        case 3:
            print("option 3");
            break;
        default:
            print("invalid option");
    };
}

mainMenu(1);
mainMenu(2);
mainMenu(3);
mainMenu(4);


/*
    Objects: 
    we can create objects in JavaScript using the following syntax:
    var myObject = {
        "name": "Zizo",
        "age": 25,
        "hobbies": ["reading", "programming", "playing games"],
    }; 
    so it is similar to maps in cpp
    to access the values of the object we use the dot notation
    myObject.name
    or we can use the bracket notation
    myObject["name"]
    */
print("------------------")
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

print(ourDog.name);
print(ourDog['legs']);

ourDog.name = "Happy Camper";
print(ourDog.name);


/*
now we can add new properties to the object
like maps, just insert new key
*/
print("------------------")
ourDog.bark = "bow-wow";
print(ourDog.bark);

/*
to delete a property from the object
we use the delete keyword
*/
print("------------------")
delete ourDog.bark;
print(ourDog.bark); // undefined


/*
    we can check if the object has a certain property or not
    using the hasOwnProperty() function
*/
print("------------------")
function checkObj(checkProp) {
    if (ourDog.hasOwnProperty(checkProp)) {
        return ourDog[checkProp];
    } else {
        return "Not Found";
    }
}

print(checkObj("name"));
print(checkObj("legs"));
print(checkObj("ears"));


/*
    note that from this idea, we created the JSON files, which is a java script file contains objects. 
    so it looks like an array of objects
*/
var jsonFile = [
    {
        "name": "Zizo",
        "age": 25,
        "hobbies": ["reading", "programming", "playing games"],
    },
    {
        "name": "Ahmed",
        "age": 25,
        "hobbies": ["reading", "programming", "playing games"],
    },
    {
        "name": "Mohamed",
        "age": 25,
        "hobbies": ["reading", "programming", "playing games"],
    }
];

print(jsonFile[0].name);


/*
    we can create a nested objects
*/
print("------------------")
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

print(myStorage.car.inside["glove box"]);



/*
     loops 
        for, while, do while, nested loops
*/
print("------------------")

var myArray = [];
for (var i = 0; i < 5; i++) {
    myArray.push(i);
}
print(myArray);

var myArray = [];
var itemsCounter = 4;
while (itemsCounter >= 0) {
    myArray.push(itemsCounter);
    itemsCounter--;
}



/*
    random numbers, and whole numbers
*/
print("------------------")
var randomNumber = Math.random();
print(randomNumber);

var randomNumber = Math.floor(Math.random() * 20); // between 0 and 19
print(randomNumber);


// to make it in certain range we do this 
function ourRandomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

print(ourRandomRange(1, 9));


/*
    we can convert a string to an integer using parseInt() function
*/
print("------------------")
var a = parseInt("007");
print(a);



/*
    conditional statements 
    if, else if, else, ternary operator, switch
    ternary operator is like if statement but in one line
    condition ? statement-if-true : statement-if-false;
    we can have multiple ternary operators
    condition1 ? statement-if-true : condition2 ? statement-if-true : statement-if-false;
*/
print("------------------")
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

print(checkSign(10));
print(checkSign(-10));



/*
    Difference between var and let
    var is function scoped
    let is block scoped

    so if we define a variable using var inside a function, we can access it from anywhere inside the function
    but if we define a variable using let inside a function, we can access it only inside the block where it is defined.
    let does not allow us to declare a variable twice in the same scope. 
    ie:     
        var a = 1;
        var a = 2; // this will work
        let b = 1;
        let b = 2; // this will not work
    but we can change the value of the variable
        var a = 1;  
        a = 2; // this will work
        let b = 1;
        b = 2; // this will also work
*/


/*
    Mutations and arrays:
        Mutations means that we can change the value of the variable
        we can change the value of an array element
        but we can not change the value of a string element
    if we created a constant array, we can change the value of its elements
    but we can not change the value of the array itself
    ie: 
        const arr = [1,3,5];
        arr[1] = 12; // this will work
        arr = [1,2,3]; // this will not work
    but what if we want to make sure that we will not change the value of the array itself
    we can use Object.freeze(arr);
    this will make the array immutable
    ie:
        const arr = [1,3,5];
        arr[1] = 12; // this will work
        arr = [1,2,3]; // this will not work
        Object.freeze(arr);
        arr[1] = 12; // this will not work
        arr = [1,2,3]; // this will not work too. 

*/


/*
    Arrow functions
    we can use it to make the code more cleaner
    we use it with anonymous functions, which are functions without names

*/
var magic = function () {
    return new Date();
}

var magic = () => {
    return new Date();
}


/*
    writing arrow function with parameters
*/
var myConcat = function (arr1, arr2) {
    return arr1.concat(arr2);
}
// or 
var myConcat2 = (arr1, arr2) => arr1 + arr2;
print(myConcat2('ahmed', ' Salah'))



/*
    arrow functions with higher order functions
*/
const squareList = (arr = []) => {
    /*
        the next line means,
            pass over the elements of the array sent (arr)
            each element in the arr we will call it num
            apply on it the arrow function which we should return true if it satisfies 
            the conditions.
            then on that returned list, which contains the elements which satisfies the condtions
            apply on it the map function, which will apply the arrow function on each element
            so we call each element in the returned array as x. and the applied function 
            is to return the square of the element.
    */
    return arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
}

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
print(squaredIntegers);


/*
    Rest operator
    it is like the *args in python
    it is used to pass a variable number of arguments to a function
    we use it with the spread operator
    ...args
    we can use it to pass a variable number of arguments to a function
*/
const getSum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}

print(getSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // (10 * 11 ) / 2 = 55


/*
    spread operator (...)
    it is used to expand an array into all its elements
    we can use it to pass a variable number of arguments to a function
    
*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
    arr2 = [...arr1];
    arr1[0] = 'potato'
}
)();
print(arr2);



/*
    the destructing assignment
    we can use it to assign values from objects to variables
    we can use it to assign values from arrays to variables
    we can use it to pass a variable number of arguments to a function
    we can use it to assign values from nested objects to variables
*/
var voxel = { x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;
print(x, y, z);
