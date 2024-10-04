
console.log("hello");
document.title="intro to js"
var a=10;
var b=10;
console.log(a+b)
console.log(a+b+8)
var a=alert("hey next is prompt")
var a=prompt("Enter your name")
console.log(a);
var a=confirm("Do you want to quit this game?")
console.log(a)
document.body.style.background="red";
var a=10;
var b="strinh";
var c=false;
var d=null;
var  e=undefined;
var f=Symbol;
console.log(typeof a,typeof b,typeof c,typeof d,typeof e,typeof f)
// number string boolean object undefined function
var a=5;
let b=5; //error
const c=6;
var a=6;
let b=6; //error
const d; //error
var e;
let v;
var f=undefined;
let g=undefined
let b=prompt("Enter a number");
if(b!=0){
    console.log("number is "+b)
}
else{
    console.log("number is zero");
}
let c=prompt("Enter a num")
c!=0?console.log("number is "+c):console.log("number is zero")
var a=prompt("Enter a number for print the table")
for(i=1; i<=10;i++){
    console.log(a +"*"+ i +"=" +(a*i));
}
var a=prompt("Enter a number for print the table")
var i=1;
while(i<=10){
    console.log(a +"*"+ i +"=" +(a*i));
    i++;
}
switch
if eles if else
logicaland or not
var a=prompt("Enter a day in small letters");
switch(a!=""){
    case (a=="monday"):
        console.log("Its monday today");
        break;
    case (a=="tuesday"):
        console.log("ItS tuesday today") ;
        break;
    case (a=="wednesday"):
            console.log("Its wednesday today");
            break;
    case (a=="thursday"):
            console.log("ItS thursday today") ;
            break;
    case (a=="friday"):
                console.log("Its friday today");
                break;
    case (a=="saturday"):
                console.log("IYS saturday today") ; 
                break; 
    default:
        console.log("Today is Sunday");                  
}
let b=prompt("Enter  a number");
let c=prompt("Enter a number")
if(b!=0){
    console.log("b is not zero")
    if(b%c==0){
        console.log("b is divisible by c");
        console.log("remainer is" +b%c);
    }else{
        console.log("b is not divisible by c");
        console.log("remainer is" +b%c);
    }
}else{
   console.log("enter valid number")
}
let d=prompt("Enter a number");
let b=prompt("Enter a number");
if(d==2 && b==3){
   console.log("d=2, b=3")
}
if(d==2 || b==3){
    console.log("d=2 or b=3")
 }
 if(b!=3){
    console.log("b!=3")
 }
console.log("Hello");

// <------------------------------------------------------------------------------------------------------------------------------------------------
Functions
function displayname(){
    console.log("Hello World");
}
displayname();
(function(){
    console.log("Hello world");
})(); // not running

function executeCallback(callback){
    callback();
}
executeCallback(function(){
    console.log("Hello World");
});
executeCallback(function(){
    console.log("Hello World");
}); /////// pass as a callback 
console.log("hello")
document.addEventListener("DOMContentLoaded", function(){
    console.log("Hello World");
}) // auto run when dom is loaded
console.log("Hello World");
// set timeout or set Interval function
const greet=function(name){
    console.log('hello,${name1}!')
}
greet.function ("vish");//not works
setTimeout(function(){
    console.log("Hello World");
},5000)  /// works loads 8 sec past
const person={
    name:"John",
    sayHello:function(){
        console.log('Hello, my name is ${this.name}');
    }
}
person.sayHello();// not works
function Person(name){
    this.name=name;
}
const person=new Person('John') not works
function* generator(){
    yield 1;
    yield 2;
    yield 3;
}
const gen=generator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
let object={
    name:"John",
    class:12,
    comapnay:"info"
}
for (const key in object) {{
        const element = object[key];
        console.log(key,element);// prints the values
    }
}
function functionname(name){
    console.log("Hello, " + name+ "You are too good ");
}
functionname("harry")// works
function sum (a,b){
    console.log("The sum of" +a+ "and" +b+ "is" +(a+b))
}
sum(58,52)
sum(58) /// not works returns undefined
function sum(a,b,c){
    return a+b+c;
}
function sum(a,b,c=3){  
    return a+b+c;
}
var result=sum(53,54,25)
console.log("The result is" ,result) // works
var result=sum(53,54)
console.log(result) // works
var result=sum(53)
console.log(result) // works
// arrow functions----------
const func1=(param)=>{
    console.log("Hello, " + param);
}
func1("hello")
func1(1545)
// functions are done 
// =========================================================================================================================================
let a=prompt("Enter the first number ")
let b=prompt("Enter the second number")
let c=prompt("Enter the operation")
console.log(a)
console.log(b)
console.log(c)
let random=Math.random();
let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}
c=obj[c]
console.log(random);
if(random>1.6){
    console.log(` The result of ${a}, ${b}, ${c}`)
    console.log(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    console.log(` The result of ${a}, ${b}, ${c}`)
    console.log(`the result is ${eval(`${a} ${c} ${b}`)}`)
// }
// Strings===================================================================================================
let name="Vishakha hello"
console.log(name.toUpperCase())
console.log(name.length);// function of length
console.log(name[0])  // function to get index
console.log(name[1])
console.log(name[2])
console.log(name[3])
let b="Harry"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.replace("rr","bb"))
console.log(b.split(""))
console.log(name.trim())
console.log(b.split("r"))
console.log(b.endsWith("ry"))
console.log(b.startsWith("H"))
console.log(name.concat(b))
console.log(b.startsWith("l"))
console.log(b.charAt(4))
console.log(name.charAt(5))
console.log(b.slice(1,4))
console.log(name.slice(3,7))




//Arrays in javascript

//Arrays are mutable can be change

arr=[5,5,8,36,45,54]
console.log(arr.length)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])

console.log(arr.toString()) // shows string in
result=arr.toString()

console.log(typeof(result))
console.log(arr)

console.log("Array" +arr)// by default make array a string that is we want
arr.pop();    // delete from last
console.log(arr)
arr.delete()   // delete is not a function in array in js
arr.delete    // delete at last but  not delete at any index

console.log(arr)
arr.shift()    // delete from starts
console.log(arr)
arr.unshift(100) // insert at  first
console.log(arr)

arr.push(54) // insert at last
console.log(arr)
arr3=[56,5,48,52,45,78,9]
arr4=[16,8,88,62,85,89,99]
arr.join("arr")   // joins the single array with the keyword arr
console.log(arr.join("arr3"))

arr.concat(arr3)
arr.concat(arr3,arr4)
console.log(arr.concat(arr3))
console.log(arr.concat(arr3,arr4))
console.log(arr3)
console.log(arr4)
console.log(arr)
console.log(arr)
console.log(arr.sort())
console.log(arr3)
arr3.sort((a,b)=>a-b)
console.log(arr3)
console.log(arr4)
arr4.sort((a,b)=>b-a)
console.log(arr4)

arr3=[56,5,48,52,45,78,9]
arr4=[16,8,88,62,85,89,99]

// sort a array in case sensitive manner
let arr=['apple','Cherry','Banana','date','app'];
arr.sort((a,b)=> a.toLowerCase().localeCompare(b.toLowerCase()))

console.log(arr)  // sorts the string array in a case sensitive manner
 starts with index 2 and remains only 6 items

 console.log(arr1)
 console.log(arr1.splice(2,9))

console.log(arr1.slice(2,9)) // from  index 2 to 9

for(let i=0; i<arr1.length;i++){
    const element=arr1[i];
    console.log(i,element)
}
arr1.forEach(element => {
    console.log(element)
});              // uses only for array objects
// both loops works  same but the first one is more efficient than the second one
arr1.forEach((value,index)=>{
    console.log(value,index)
    console.log(index,value)
}
)

array loops 

arr1=[5,5,8,36,45,54,6,54,45,8,9,36]

for(const value of arr1){
    console.log(value)
}

// map function-- creates a new array by performing some operation on each array element

const arr3=[2,5,4,8]

const a=arr3.map(value=>{
    return value*value
})
console.log(arr3)    // works 
console.log(a)   // works an array
// filter function -- creates a new array with all elements that pass the test implemented by the provided function



console.log(a)
const graterThanFive=(e)=>{
      if(e>5){
        return true
      }
        return false
      
}

console.log(a.filter(graterThanFive))



