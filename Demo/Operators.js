
//Logical Operators &&

let a = 10;
let b = 5;


let cond1 = a > b;
let cond2 = a === 10;

// console.log("cond1 && cond2 = ", cond1 && cond2 );

//second method of logical operator, we can pass the direct value

console.log("cond1 && cond2 = ", a < b && a === 10 );


//Logical Operators || OR

let c = 20;
let d = 15;

let cond3 = c < d;
let cond4 = c === 20;

console.log("cond3 || cond4 = ", c < d ||  c === 20 );

//Logical Operator ! "NOT"

console.log("!(c<d) = ", !(c<d) );


// Conditional Statements

let age = 17;

if(age>18) {

    console.log("Yes! you are eligible for Vote");

} else {
    console.log("NO! you are not eligible for Vore")

}


// odd or even

let num = 9;

if (num%2 === 0) {

    console.log (num, "is Even number");
} else {

    console.log (num, "is Odd Number");
}

// Else if condition

let mode = "dark";
let color;

if (mode === "dark") {
    color = "Black";
} else if (mode === "blue") {
    color = "blue";
} else if (mode === "red") {
    color = "Red";
} else {
    color = "white";
}

console.log(color);

if (mode === "dark"){

    console.log(mode);
}



// Ternary operators

let waight = "165 cms";

let result = waight >= 160 ? "eligible" : "Not Eligible";

console.log(result);








