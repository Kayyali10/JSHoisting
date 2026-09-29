//1-Predict the Output

// The output will be:

// undefined
// 20

// Why?

// var name is hoisted to the top of its scope, but its value "Jone" is not assigned until the line:

// var name = "Jone";

// is executed.

// So when console.log(name) runs, the variable exists but its value is still undefined.

// The variable y is declared using var inside the if block. Since var is function-scoped, y is accessible throughout the test() function. Therefore, console.log(y) prints 20.


// 2- How Hoisting Works with var

// Hoisting means that JavaScript processes variable and function declarations before executing the code.

// With var, the declaration is hoisted, but the assignment is not.

// This:

// console.log(name);

// var name = "Jone";

// is conceptually similar to:

// var name;

// console.log(name);

// name = "Jone";

// Therefore, the first console.log() prints:

// undefined


// 4- Function Scope vs Block Scope
// Function Scope

// var is function-scoped.

// In this example:

// function test() {
//     var x = 10;
// }

// x exists inside the test() function, but it cannot be accessed outside the function.

// Block Scope

// let and const are block-scoped.

// A block is code inside { }, such as an if statement:

// if (true) {
//     let y = 20;
// }

// Here, y can only be accessed inside the if block.

// Unlike var, let does not escape the block.



// 4-rewrite the code 
// Orignal code
// console.log(Name);
// var Name = "Jone";

// function test() {
//   var x = 10;
//   if (true) {
//     var y = 20;
//   }
//   console.log(y);
// }

// test();
// console.log(x);


// code after Rewrite 
let name = "Jone";
console.log(name);

function test() {
  let x = 10;
  if (true) {
    let y = 20;
    console.log(y);
  }
  console.log(x);
}

test();
