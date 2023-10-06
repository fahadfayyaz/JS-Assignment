// ==================================================Chapter 1 ==================================================
//                                                       Q1
var firstName = "Fahad";
var lastName = "Fayyaz";
var email = "m.fahadmun@gmal.com";
var phoneNumber = "03040246913";
var password = "abc123";

alert("First name is: " + firstName);
alert("Last name is: " + lastName);
alert("email is: " + email);
alert("phone number is: " + phoneNumber);
alert("password is: " + password);

//                                                         Q2
alert("You're learning JavaScript!");
//                                                         Q3
alert("A cup of coffee and javascript is best therapy ;)");

// ==================================================Chapter 2 ==================================================
//                                                         Q1
var camelCase;
//                                                         Q2
var myVar;
myVar = "varable initialize";

//                                                         Q3
var teamName = "Pakistan";
alert("My team is :" + teamName);

//                                                         Q4

var bestMan = "Charlie";
bestMan = "smith";

// ==================================================Chapter 3 ==================================================
//                                                         Q1
var caseQty;

//                                                         Q2
caseQty = 144;

//                                                         Q3

var num = "9";
//                                                         Q4

var total;
total = caseQty + num;
alert(total);

//                                                         Q5
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
alert(orderTotal);

//                                                         Q6

let myNumber = 5;
myNumber = myNumber + 3;

// Now, the variable "myNumber" holds the value 8
console.log(myNumber); // Output will be 8

// ==================================================Chapter 04 ==================================================
//                                                         Q1
var productcost = 3.45;
//                                                         Q2
var nameOfBand;
//                                                         Q3
var num1 = 1;
//                                                         Q4
var fahadFayyaz;
//                                                         Q5
// legal vaiable
var myVariable, _privateVar, user123, $price;

// illegal variable
// my Variable, user-name, price@discount , 23invalid, 7up
// var, if, while, function, typeof (reserved keywords)
// Math, console, toString, length(built-in objects, properties, or methods.)

// ==================================================Chapter 05 ==================================================
//                                                         Q1

//                                                         Q2
var num = 20 % 6;
// answer is 2

//                                                         Q3
var largeNum = 1000 * 2000;
//                                                         Q4
let firstNum = 10;
let secondNum = 5;
let result = firstNum - secondNum;
console.log(result);
//                                                         Q5

let myRemainder;
let dividend = 15;
let divisor = 4;

myRemainder = dividend % divisor;
console.log(myRemainder);

//                                                         Q6

alert(largeNum);

// ==================================================Chapter 06 ==================================================
//                                                         Q1
x++;
console.log(x);
//                                                         Q2
x = 100;
--x;
console.log(x); //99

//                                                         Q3
// value of y 50
//                                                         Q4
//value of z 49

//                                                         Q5
let newNum = x--;

//                                                         Q6
let newnum = newNum++;

//                                                         Q7
// Assign a number value to a variable
let myNumber1 = 10;

// Increment the variable
myNumber1++;

// Display the new value in an alert
alert("The new value is: " + myNumber1);

// ==================================================Chapter 07 ==================================================
//                                                         Q1
// calculatedNum is 14.
//                                                         Q2
// calculatedNum is 24.
//                                                         Q3
// calculatedNum is 24.
//                                                         Q4

// calculatedNum is 18.
//                                                         Q5

var cost = (2 + 2) * (4 + 10);
//                                                         Q6
var units = 2 + 2 * 4 + 10;
//                                                         Q7
let pressure = 4 / 2 + (4 - 1); // (2) + (3) = 5;
//not possible to produce 5 from original statement  (4 / 2) * 4

// ==================================================Chapter 08 ==================================================

//                                                         Q1
// num value will be 22
//                                                         Q2
alert("Hello," + "Dolly");
//                                                         Q3
alert("33" + 3);
//333
//                                                         Q4
alert("Pakistan," + "Zindabad");
//                                                         Q5
var textToNum = "8" + 8;
//                                                         Q6
var t1 = "Javascrip";
var t2 = "Assignment";
var t3 = t2 + t3;

// ==================================================Chapter 09 ==================================================

//                                                         Q1
var firstName1 = prompt("Enter first name");

//
var defaultAnswer = "China";
Q2;
var country = prompt("Counter?", defaultAnswer);

//                                                          Q3
var yourName = prompt("Enter Your Name");

//                                                          Q4
const defaultMessage = "Hello";
var message =
  prompt("Enter a message (default is 'Hello'): ") || defaultMessage;

//                                                          Q5
const str1 = "This is the prompt box";
const str2 = "This is the default response";
const str3 = prompt(str1, str2);
//                                                          Q6

const strM1 = "This is the prompt box";
const strM2 = "This is the default response";
const strM3 = prompt(strM1, strM2);
alert(strM3);

// ==================================================Chapter 10 ==================================================

//                                                         Q1

var city = "Karachi";
if ((city = "Karachi")) {
  console.log("The City OF Lights");
}
//                                                         Q2

if (X === Y) {
  var input = prompt("Enter the value of Z : ");
}

//                                                         Q3
var zipCode = "10010";
if (zipCode === "10010") {
  alert("Karachi");
} else {
  prompt("Please write correct city");
}

//                                                         Q4

var check = 1;

if (check === 1) {
  check = 2;
} else {
  console.log("Do nothing");
}

// ==================================================Chapter 11 ==================================================

//                                                         Q1
var a = 3,
  b = 2;
if (a !== b) {
}
//                                                         Q2
if (a >= b) {
}
//                                                         Q3
if (a !== b) {
  a = b;
}
//                                                         Q4
if (1 !== 2) {
  alert("Congratulations");
}
//                                                         Q5

var myname = prompt("Enter your name : ");
if (myname !== "Ali") {
  alert("No match");
}

// ==================================================Chapter 12 ==================================================

//                                                         Q1
if (a >= b) {
  alert("Match");
} else {
  alert("No match");
}
//                                                         Q2
var marks = +prompt("Enter your marks");

if (marks >= 90 && marks <= 100) {
  alert("Grade A+");
} else if (marks >= 80 && marks <= 89) {
  alert("Grade A");
} else if (marks >= 70 && marks <= 79) {
  alert("Grade B");
} else if (marks >= 60 && marks <= 69) {
  alert("Grade C");
} else if (marks >= 1 && marks <= 59) {
  alert("Grade F");
} else {
  alert("Please enter correct value.");
}
//                                                         Q3
if (a === 10) {
  alert("a is 10");
} else if (a !== 10) {
  alert("The correct value of a is 10");
}
//                                                         Q4
var city = prompt("Enter your city : ");

if (city === "Karachi") {
  alert("It's karachi");
} else if (city === "Lahore") {
  alert("It's Lahore");
} else {
  alert("Other city");
}

// ==================================================Chapter 13 ==================================================

//                                                         Q1
if (a === b && c === d) {
}

//                                                         Q2
if (a === b || c !== d) {
}
//                                                         Q3

var name1;

if ((name1 = "Hamza" || name1 === "Arsalan") && age < 60) {
}
//                                                         Q4

var num1 = 2;
var num2 = 3;
if (num1 < num2 || num1 > num2) {
  alert("both variables are not equal");
}
//                                                         Q5
firstname = "fahad";
lastName = "fayyaz";

var firstp = prompt("Enter you first name : ");
var secondp = prompt("Enter you last name : ");

if (firstp === firstName && secondp === lastName) {
  alert("Welcome");
}

// ==================================================Chapter 14 ==================================================

// 
var password="12343";                                                        Q1
if(password.length !== ''){
  
    if(password.length<=5){
      alert('Password must be greater than 5');
    }
    else if(password.length>5){
      alert('OK')
    }

}
//                                                         Q2
if (a === 1) {
  if (c === "Max") {
   alert("OK");
   }
  }

//                                                         Q3
if(a===1 && c==="Max"){
  alert("Ok")
}
//                                                         Q4
var a1 = 2, a2 = 2;                                                       
if(a1===a2){
  if(a1<=a2){
    alert("IN 2nd if");
  }

}


// ==================================================Chapter 15 ==================================================

//                                                          Q1
var pets=[];
//                                                          Q2
var arry = ["sets"];
//                                                          Q3
var alphabet = ["h","i","j","k"];
alert(alphabet[2]);

//                                                          Q4
var alphabet1=["h","i","j","k", "l","m", "n", "o"];
alphabet.length
//                                                          Q5

var arry1 = ["test"];

arry1[1] = "test2";

alert(arry1[1]);

// ==================================================Chapter 16 ==================================================

//                                                          Q1

var arry3 = ["test"];

arry3.push("test2");
alert(arry3[1]);

//                                                          Q2
var Alphabet=["h","i","j","k"];
alphabet.pop();
//                                                          Q3

var Alphabet=["h","i","j","k"];
alphabet.push(1);




// ==================================================Chapter 16-III ==================================================

//                                                          Q1

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
//                                                          Q2
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift("1","2","3");
//                                                          Q3
var sizes = ["S"];
sizes.shift("L");
alert(sizes[0]);
//                                                          Q4
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2,"L");
//                                                          Q5
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var newsize = sizes.slice(0,3);
//                                                          Q6
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1,3,"lion","snake");
//                                                          Q7
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1,2);
//                                                          Q8
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var newpets = pets.slice(3,5);