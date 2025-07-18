
// 1. var keyword

// Declaration of Variable/Identifier

var firstname;

// Value Assigning / Initialization of Identifier
firstname = "Aditya";


//printing Value of indetifier / variable
console.log(firstname);


//Value can be Reassigned Later / Changed Later
firstname = "Om";
console.log(firstname);


//can be declared with same variable and overwrite value.
var firstname ="Aditya "
console.log(firstname)


// ############### Rules for Naming variables #################

// # 1 . You cannot start with number.

// example :

// var 1value = 10;  // (invalid)
//  var value1 = 10 ; // (valid)
//  console.log(value1);
//  console.log(value1/2);  // division
//  console.log(value1*2);  // Multiply
//  console.log(value1+2);  // addition
//  console.log(value1-2);  // Subtract
//  console.log(value1 ** 2); // 10^2 --> 10 power 2 -> 100
//  console.log(value1 ** 0.5); // 10 root 2 --> 3.

// # 2 . You can use only underscore _ or dollar Symbol
//      from special Symbol only this are valid.

//  firstname_ = "abc";
//  _firstname = "abc";

//  firstname$ = "absd";
//  $firstname = "adaaw";

// # 3 . You can use Space in between variable declaration.

// first Name = "Dhanraj"; // Invalid

// Instead We can Do is that :

// var first_name = "Dhanraj"  // Snake Case Writing.
// var firstName = "Raj"; // Camel Case Writing.

// ########### JS Naming Convention for Variables ##########

// Naming Convention :
// - Start with small letter and use CamelCase.