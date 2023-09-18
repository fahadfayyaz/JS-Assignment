// ==================================================Chapter 1 ==================================================
//                                                       Q1 
var firstName="Fahad"
var lastName="Fayyaz"
var email="m.fahadmun@gmal.com"
var phoneNumber ="03040246913"
var password="abc123"

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
myVar ="varable initialize";

//                                                         Q3 
var teamName="Pakistan";
alert("My team is :" + teamName);

//                                                         Q4

var bestMan = "Charlie";
bestMan="smith";

// ==================================================Chapter 3 ==================================================
//                                                         Q1
var caseQty;

//                                                         Q2 
caseQty = 144;

//                                                         Q3 

var num = "9";
//                                                         Q4 

var total;
total = caseQty+num;
alert(total)

//                                                         Q5 
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
alert(orderTotal)


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
var largeNum = 1000 *2000
//                                                         Q4 
let firstNum = 10;
let secondNum = 5;
let result = firstNum - secondNum;
console.log(result)
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
x =100
--x;
console.log(x)//99

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
var units = 2 + (2 * 4 )+ 10;
//                                                         Q7 
let pressure = (4 / 2) + (4 - 1); // (2) + (3) = 5;
//not possible to produce 5 from original statement  (4 / 2) * 4 




// ==================================================Chapter 08 ==================================================


//                                                         Q1 
// num value will be 22
//                                                         Q2 
alert("Hello," + "Dolly")
//                                                         Q3 
alert("33" + 3);
//333
//                                                         Q4 
alert("Pakistan," + "Zindabad")
//                                                         Q5 
var textToNum = "8" + 8;
//                                                         Q6
var t1 = "Javascrip"; var t2 = "Assignment";
var t3 = t2+t3;



// ==================================================Chapter 09 ==================================================


                                                         Q1
var firstName1 = prompt("Enter first name");

//
var defaultAnswer="China";                                                        Q2
var country = prompt("Counter?", defaultAnswer);

//                                                          Q3
var yourName = prompt("Enter Your Name");

//                                                          Q4
const defaultMessage = "Hello";
var message = prompt("Enter a message (default is 'Hello'): ") || defaultMessage;

//                                                          Q5
const str1="This is the prompt box";
const str2="This is the default response";
const str3 = prompt(str1,str2);
//                                                          Q6

const strM1="This is the prompt box";
const strM2="This is the default response";
const strM3 = prompt(strM1,strM2);
alert(strM3);