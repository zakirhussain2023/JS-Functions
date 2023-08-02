//1. Display a Text - Display any value in the log using function.
console.log("1. Display a Text - Display any value in the log using function.")
let a=prompt("Enter a text");
let b=parseInt(prompt("Enter a value"));
display();
function display(){
    console.log(`${a}`);
    console.log(`${b}`);
}

//2. Function with Parameters -  Using two parameter values and return value in the console.
console.log("2. Function with Parameters -  Using two parameter values and return value in the console.")
function division(d,e){
    division=d/e;
    console.log(`${division}`);
}
division(10,2);

//3. Add Two Numbers  - Using two number add and return value in the console.
console.log("3. Add Two Numbers  - Using two number add and return value in the console.")
let u=parseInt(prompt("Enter 1st value: "));
let v=parseInt(prompt("Enter 2nd value: "));
add();
function add(){
    add=u+v;
    console.log(`${add}`)
}

//4. Sum of Two Numbers -  Addition, Subtraction, Multiplication, Division.
console.log("4. Sum of Two Numbers -  Addition, Subtraction, Multiplication, Division.")
let y=parseInt(prompt("Enter 1st value: "));
let z=parseInt(prompt("Enter 2nd value: "));
addition();
sub();
mul();
div();
function addition(){
    addition=y+z;
    console.log("Addition");
    console.log(`${addition}`);
}
function sub(){
    sub=y-z;
    console.log("Subtraction");
    console.log(`${sub}`);
}
function mul(){
    mul=y*z;
    console.log("Multiplication");
    console.log(`${mul}`);
}
function div(){
    div=y/z;
    console.log("Division");
    console.log(`${div}`);
}
