
// convert date to anumber

const date=new Date()
const timestamp=date.getTime();
console.log(timestamp);

// Dom methods

document.getElementById("demo").innerHTML="<b> HEllo WOrld<b>"//works
document.getElementById("demoo").innerText="HEllo WOrld"// works
document.getElementById("demoo").style.backgroundColor = "red"// works

document.title="myPage"
console.log(document.title)
console.log(document.body)
document.body.style.backgroundColor="red"


document.getElementById("container")

let a=document.getElementsByClassName("containeritem")
console.log(a)//works

let a=document.getElementsByClassName("containeritem[2]")
console.log(a)

let a=document.body.childNodes
console.log(a)
let b=document.body.children
console.log(b)
let c=document.body.firstElementChild
console.log(c)
let d=document.body.lastElementChild
console.log(d)
let e=document.body.innerText
console.log(e)
let f=document.body.classList
console.log(f)

let a=document.body.childNodes[3]
 console.log(a)
let a=document.body.childNodes
 console.log(a)
for(let i in a){
 console.log(i)
}

let a=document.getElementsByClassName("containeritem")
console.log(a)
for(let i of a){
    console.log(i)
} // works

let b=document.getElementsByTagName("div")

console.log(b)


let b=document.querySelector("div")

console.log(b)

let b=document.querySelectorAll(".containeritem")

console.log(b)
let b=document.querySelector(".containeritem")

console.log(b)
let b=document.querySelector(".containeritem")

console.log(b)

let c=document.querySelector(".containeritem")

document.getElementById("images").src="pre.jpg"

let d=document.getElementsByClassName("containeritem")

console.log(d)
console.log(d[2])

console.log(d[2].parentElement)
console.log(d[2].previousElementSibling)
console.log(d[2].previousSibling)
console.log(d[2].parentElement)
console.log(d[2].nextElementSibling)
console.log(d[2].nextSibling)


let a=document.getElementsByClassName("containeritem")

console.log(a)
// a.forEach(element => {
//     console.log(element)
// }); not a function

a[3].style.backgroundColor="red"// works

document.getElementsByClassName("containeritem").forEach(e => {
    e.style.backgroundColor="green"
    
});// not works



// let e=document.getElementsByTagName("div")




// e=document.getElementsByTagName("div")
// HTMLCollection(6) [div#container.container, div.containeritem, div.containeritem, div#redbox.containeritem, div.containeritem, div.containeritem, container: div#container.container, redbox: div#redbox.containeritem]
// e[2].matches(#tredbox")
// VM1968:1 Uncaught SyntaxError: Unexpected identifier '#tredbox'Understand this error
// e[2].matches(#redbox")
// VM1974:1 Uncaught SyntaxError: Unexpected identifier '#redbox'Understand this error
// e[2].matches("#redbox")
// false
// e[1].matches("#redbox")
// false
// e[3].matches("#redbox")
// true

// e[4].closest("#redbox")
// null
// e[4].closest("container")
// null
// e[4].closest("containeritem")
// null
// e[1].closes
// undefined
// e[1].closest("containeritem")
// null
// e[1].closest(".containeritem")
// <div class=​"containeritem">​HEllo hii​</div>​
// e[4].closest(".container")
// <div class=​"container" id=​"container">​…​</div>​
// e[4].closest(".containeritem")
// <div class=​"containeritem">​HEllo hii​</div>​
// document.querySelector(".container").contains(e[2])
// true
// document.querySelector("container")
// null
// document.querySelector(".container")
// <div class=​"container" id=​"container">​…​</div>​
// document.querySelectorAll(".containeritem")
// NodeList(5) [div.containeritem, div.containeritem, div#redbox.containeritem, div.containeritem, div.containeritem]
// document.querySelector(".container").innerText
// 'HEllo hii\nHEllo hii\nHEllo hii\nHEllo hii\nHEllo hii'
// document.querySelector(".container").innerHTML
// '\n        <div class="containeritem">HEllo hii</div>\n        <div class="containeritem">HEllo hii</div>\n        <div class="containeritem" id="redbox">HEllo hii</div>\n        <div class="containeritem">HEllo hii</div>\n        <div class="containeritem">HEllo hii</div>\n    '
// document.querySelector(".container").outer
// undefined
// document.querySelector(".container").outerHTML
// '<div class="container" id="container">\n        <div class="containeritem">HEllo hii</div>\n        <div class="containeritem">HEllo hii</div>\n        <div class="containeritem" id="redbox">HEllo hii</div>\n        <div class="containeritem">HEllo hii</div>\n        <div class="containeritem">HEllo hii</div>\n    </div>'
// document.querySelector(".container").outerText
// 'HEllo hii\nHEllo hii\nHEllo hii\nHEllo hii\nHEllo hii'
// document.querySelector(".containeritem").outer
// undefined
// document.querySelector(".containeritem").outerText
// 'HEllo hii'
// document.querySelector(".containeritem").outerHTML
// '<div class="containeritem">HEllo hii</div>'
// document.querySelector(".containeritem").inner
// undefined
// document.querySelector(".containeritem").outerText
// 'HEllo hii'
// document.querySelector(".containeritem").outerHTML
// '<div class="containeritem">HEllo hii</div>'

// document.querySelector(".container").tagName
// 'DIV'
// document.querySelector(".container").nodeName
// 'DIV'
// document.querySelector(".container").nodeType
// 1
// document.querySelector(".container").nodeValue
// null
// document.querySelector(".containeritem").nodeType
// 1
// document.querySelector(".container").nodeValue
// null
// document.querySelector(".container").tex
// undefined
// document.querySelector(".container").textContent
// '\n        HEllo hii\n        HEllo hii\n        HEllo hii\n        HEllo hii\n        HEllo hii\n    '
// document.querySelector(".containeritem").text
// undefined
// document.querySelector(".containeritem").textContent
// 'HEllo hii'

// undefined
// document.querySelector(".containeritem").hasAttribute("style")
// false
// document.querySelector(".container").hasAttribute("id")
// true
// document.querySelector(".container").hasAttribute("id")
// true
// document.querySelector(".containeritem").hasAttribute("id")
// false
// document.querySelector(".box2").hasAttribute("id")
// true
// document.querySelector(".box2").hasAttributeNS("style, id")
// VM4124:1 Uncaught TypeError: Failed to execute 'hasAttributeNS' on 'Element': 2 arguments required, but only 1 present.
//     at <anonymous>:1:33
// (anonymous) @ VM4124:1Understand this error
// document.querySelector("#box2").hasAttributeNS("style", "id")
// false
// document.querySelector(".container").hasChildNodes("text")
// true
// document.querySelector(".container").hasOwnProperty("class")
// false

// document.querySelector(".container").hasOwnProperty()
// false
// document.querySelector(".box2").attributes
// NamedNodeMap {0: class, 1: style, 2: id, class: class, style: style, id: id, length: 3}
// document.querySelector(".container").removeAttribute("id")


// document.querySelector(".box2").removeAttribute("style")
// undefined

// document.designMode="on"
// 'on' //works on any websites
// document.querySelector(".box2").dataset
// DOMStringMap {createdBy: 'vishakha', concepetedBy: 'vishakha ahirwar'}
// document.querySelector(".box2").onloadeddata
// null
// document.querySelector(".box2").data
// undefined
// let div= document.createElement("div")
// undefined
// div.set
// undefined
// div.setAttribute("class","created")
// undefined
// document.querySelectorAll(".container")
// NodeList [div#container.container]0: div#container.containerlength: 1[[Prototype]]: NodeList
// document.querySelector(".container").append(div)
// undefined
// div.inn
// undefined
// // div.innerHTML="Hii am inserted"
// // 'Hii am inserted'
// document.querySelector(".container").prepend(div)
// undefined
// befor(e[])
// after(e[])
// replace with(e[])

// Insert Adjacent HTML/TEXT/Element
// This method to insert HTMLAllCollection;l 
// the first parameter is a code WebTransportDatagramDuplexStream, specifying where to insert. Must be one of the following

// beforebegin- insert immediately before Element
// afterbegin-Insert into element at the begining
// beforeend-Insert into element at the end
// afterend-Insert HTML immediately after element



// let cont=document.querySelector(".container")
// cont.insertAdjacentElement("afterbegin", "<b>I am under 21</b>")

let cont=document.querySelector(".container")
undefined
cont.insertAdjacentHTML("afterbegin","<b> Hii I am vishakha<b>")
undefined
cont.insertAdjacentHTML("afterend","<b> Hii I am vishakha<b>")
undefined
cont.insertAdjacentHTML("beforebegin","<b> Hii I am vishakha<b>")
undefined
cont.insertAdjacentHTML("beforeend","<b> Hii I am vishakha<b>")
undefined

classlist
classname
classlist.add
document.querySelector(".box2").classList
DOMTokenList(2) ['containeritem', 'box2', value: 'containeritem box2 ']
document.querySelector(".box2").className
'containeritem box2 '
document.querySelector(".box2").classList.add("colone")
undefined
document.querySelector(".box2").className
'containeritem box2 colone'
document.querySelector(".box2").classList.remove("box2")
undefined
document.querySelector(".box2").className
// VM6074:1 Uncaught TypeError: Cannot read properties of null (reading 'className')
//     at <anonymous>:1:32
// (anonymous) @ VM6074:1Understand this error
// document.querySelector(".colone").className
// 'containeritem colone'
// document.querySelector(".colone").classList.add("box2")
// undefined
// document.querySelector(".colone").classList.add("redbox")
// undefined
// .className
// VM6074:1 Uncaught TypeError: Cannot read properties of null (reading 'className')
//     at <anonymous>:1:32
// (anonymous) @ VM6074:1Understand this error
// document.querySelector(".colone").className
// 'containeritem colone'
// document.querySelector(".colone").classList.add("box2")
// undefined
// document.querySelector(".colone").className
// VM6305:1 Uncaught SyntaxError: Unexpected token '.'Understand this error
// .className
// VM6074:1 Uncaught TypeError: Cannot read properties of null (reading 'className')
//     at <anonymous>:1:32
// (anonymous) @ VM6074:1Understand this error
// document.querySelector(".colone").className
// 'containeritem colone'
// document.querySelector(".colone").classList.add("box2")
// undefined
// document.querySelector(".redbox").className
// VM6383:1 Uncaught SyntaxError: Unexpected token '.'Understand this error
// document.querySelector(".colone").className
// 'containeritem colone box2 redbox'
// document.querySelector(".box2").classList.toggle("red")
// true
// document.querySelector(".box2").classList
// DOMTokenList(5) ['containeritem', 'colone', 'box2', 'redbox', 'red', value: 'containeritem colone box2 redbox red']


<========================================================================================================================Date 10th october 2024===========================================================================
// today  date is 10 of october thursday

let prom1= new Promise((resolve, reject)=>{
        setTimeout(()=>{
           console.log(`the value of a is ${a}`)
           resolve("hey i am resolve")
        },2000)
})
prom1.then((a)=>{
    console.log(a)
})
console.log("Hii i am vishakha")
let prom2= new Promise((resolve, reject)=>{
    let a= Math.random();
    if(a<0.5){
        reject("the value is less than 0.5 is not allowed")
    }
    else{
        setTimeout(()=>{
           console.log(`the value of a is ${a}`)
        
        },2000)
    }
}
)
// output=========================
// Hii i am vishakha
// promise.js:10 the value of a is 0.6023913157224781
// promise.js:19 hey i am resolve
prom2.then((a)=>{
    console.log(a)
    resolve("hey i am done after resolve")
})
// ------------------------------------------------------------------------------------------------------------------------------------------

console.log("Hii i am vishakha")
let prom1= new Promise((resolve, reject)=>{
    let a1= Math.random();
    if(a1<0.5){
        reject("the value is less than 0.5 is not allowed")
    }
    else{
        setTimeout(()=>{
           console.log(`the value of a is ${a1}`)
           resolve("hey i am resolve by promise 1")
        },2000)
    }
})
prom1.then((a1)=>{
    console.log(a1)
    console.log("resolved and print after then1")  
}).catch((err)=>{
    console.log(err);
})
let prom2= new Promise((resolve, reject)=>{
    let a2= Math.random();
    if(a2<0.5){
        reject("the value is less than 0.5 is not allowed")
    }
    else{
        setTimeout(()=>{
           console.log(`the value of a is ${a2}`)
           resolve("hey i am resolve after reolve 2 nd promise2")
        },2000)
    }
})
prom2.then((a2)=>{
    console.log(a2)
    console.log("resolved and print after then2")   
}).catch((err)=>{
    console.log(err);
})

// output=========================
// promise.js:2 Hii i am vishakha
// promise.js:10 the value of a is 0.9455187239296936
// promise.js:17 hey i am resolve by promise 1
// promise.js:18 resolved and print after then1
// promise.js:33 the value of a is 0.5770225315934692
// promise.js:40 hey i am resolve after reolve 2 nd promise2
// promise.js:41 resolved and print after then2
// ===========================================================================================================================================
console.log("Hii i am vishakha")
let prom1= new Promise((resolve, reject)=>{
    let a1= Math.random();
    if(a1<0.5){
        reject("the value is less than 0.5 is not allowed")
    }
    else{
        setTimeout(()=>{
           console.log(`the value of a is ${a1}`)
           resolve("hey i am resolve by promise 1")
        },2000)
    }
})
prom1.then((a1)=>{
    console.log(a1)
    console.log("resolved and print after then1") 
}).catch(err=>{
    console.log(err)
})
let prom2= new Promise((resolve, reject)=>{
    let a2= Math.random();
    if(a2<0.5){
        reject("the value is less than 0.5 is not allowed")
    }
    else{
        setTimeout(()=>{
           console.log(`the value of a is ${a2}`)
           resolve("hey i am resolve after reolve 2 nd promise2")
        },2000)
    }
})
prom2.then((a2)=>{
    console.log(a2)
    console.log("resolved and print after then2")
   
}).catch((err)=>{
    console.log(err);
})
let prom3= Promise.all([prom1,prom2])

prom3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err);
})
// output=========================
// Hii i am vishakha
// promise.js:10 the value of a is 0.8170388022624377
// promise.js:16 hey i am resolve by promise 1
// promise.js:17 resolved and print after then1
// promise.js:30 the value of a is 0.5116540105620293
// promise.js:37 hey i am resolve after reolve 2 nd promise2
// promise.js:38 resolved and print after then2
promise.js:48 (2) ['hey i am resolve by promise 1', 'hey i am resolve after reolve 2 nd promise2']

// ================================================================================================================================



console.log("Hii i am vishakha")
let prom1= new Promise((resolve, reject)=>{
    let a1= Math.random();
    if(a1<0.5){
        reject("the value is less than 0.5 is not allowed")
    }
    else{
        setTimeout(()=>{
           console.log(`the value of a is ${a1}`)
           resolve("hey i am resolve by promise 1")
        },2000)
    }
})
prom1.then((a1)=>{
    console.log(a1)
    console.log("resolved and print after then1") 
}).catch(err=>{
    console.log(err)
})


let prom2= new Promise((resolve, reject)=>{
    let a2= Math.random();
    if(a2<0.5){
        reject("the value is less than 0.5 is not allowed")
    }
    else{
        setTimeout(()=>{
           console.log(`the value of a is ${a2}`)
           resolve("hey i am resolve after reolve 2 nd promise2")
        },2000)
    }
})

prom2.then((a2)=>{
    console.log(a2)
    console.log("resolved and print after then2")
   
}).catch((err)=>{
    console.log(err);
})


let prom3= Promise.allSettled([prom1,prom2])

prom3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err);
})


//  Output 1======================
// ﻿
// promise.js:2 Hii i am vishakha
// promise.js:19 the value is less than 0.5 is not allowed
// promise.js:41 the value is less than 0.5 is not allowed
// promise.js:48 
// (2) [{…}, {…}]
// 0
// : 
// {status: 'rejected', reason: 'the value is less than 0.5 is not allowed'}
// 1
// : 
// {status: 'rejected', reason: 'the value is less than 0.5 is not allowed'}
// length
// : 
// 2
// [[Prototype]]
// : 
// Array(0)


// Output 2===========
﻿
// promise.js:2 Hii i am vishakha
// promise.js:19 the value is less than 0.5 is not allowed
// promise.js:30 the value of a is 0.99556131559558
// promise.js:37 hey i am resolve after reolve 2 nd promise2
// promise.js:38 resolved and print after then2
// promise.js:48 
// (2) [{…}, {…}]
// 0
// : 
// {status: 'rejected', reason: 'the value is less than 0.5 is not allowed'}
// 1
// : 
// {status: 'fulfilled', value: 'hey i am resolve after reolve 2 nd promise2'}
// length
// : 
// 2
// [[Prototype]]
// : 
// Array(0)
//========================================================================================


console.log("Hii i am vishakha")
let prom1= new Promise((resolve, reject)=>{
    let a1= Math.random();
    if(a1<0.5){
        reject("the value is less than 0.5 is not allowed")
    }
    else{
        setTimeout(()=>{
           console.log(`the value of a is ${a1}`)
           resolve("hey i am resolve by promise 1")
        },2000)
    }
})
prom1.then((a1)=>{
    console.log(a1)
    console.log("resolved and print after then1") 
}).catch(err=>{
    console.log(err)
})


let prom2= new Promise((resolve, reject)=>{
    let a2= Math.random();
    if(a2<0.5){
        reject("the value is less than 0.5 is not allowed")
    }
    else{
        setTimeout(()=>{
           console.log(`the value of a is ${a2}`)
           resolve("hey i am resolve after reolve 2 nd promise2")
        },2000)
    }
})

prom2.then((a2)=>{
    console.log(a2)
    console.log("resolved and print after then2")
   
}).catch((err)=>{
    console.log(err);
})


let prom3= Promise.race([prom1,prom2])

prom3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err);
})
// outpu1
// Hii i am vishakha
// promise.js:10 the value of a is 0.6000670496971205
// promise.js:16 hey i am resolve by promise 1
// promise.js:17 resolved and print after then1
// promise.js:48 hey i am resolve by promise 1
// promise.js:30 the value of a is 0.6903438708314322
// promise.js:37 hey i am resolve after reolve 2 nd promise2
// promise.js:38 resolved and print after then2

// output 2
// Hii i am vishakha
// promise.js:19 the value is less than 0.5 is not allowed
// promise.js:41 the value is less than 0.5 is not allowed
// promise.js:50 the value is less than 0.5 is not allowed

// output3 

// Hii i am vishakha
// promise.js:19 the value is less than 0.5 is not allowed
// promise.js:50 the value is less than 0.5 is not allowed
// promise.js:30 the value of a is 0.6414730243480617
// promise.js:37 hey i am resolve after reolve 2 nd promise2
// promise.js:38 resolved and print after then2
//<========================================================================================================================




console.log("Hii i am vishakha")
let prom1= new Promise((resolve, reject)=>{
    let a1= Math.random();
    if(a1<0.5){
        reject("the value is less than 0.5 is not allowed")
    }
    else{
        setTimeout(()=>{
           console.log(`the value of a is ${a1}`)
           resolve("hey i am resolve by promise 1")
        },2000)
    }
})
prom1.then((a1)=>{
    console.log(a1)
    console.log("resolved and print after then1") 
}).catch(err=>{
    console.log(err)
})


let prom2= new Promise((resolve, reject)=>{
    let a2= Math.random();
    if(a2<0.5){
        reject("the value is less than 0.5 is not allowed")
    }
    else{
        setTimeout(()=>{
           console.log(`the value of a is ${a2}`)
           resolve("hey i am resolve after reolve 2 nd promise2")
        },2000)
    }
})

prom2.then((a2)=>{
    console.log(a2)
    console.log("resolved and print after then2")
   
}).catch((err)=>{
    console.log(err);
})


let prom3= Promise.resolve([prom1])

prom3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err);
})


//===================================================================================


console.log("Hii i am vishakha")
let prom1= new Promise((resolve, reject)=>{
    let a1= Math.random();
    if(a1<0.5){
        reject("the value is less than 0.5 is not allowed")
    }
    else{
        setTimeout(()=>{
           console.log(`the value of a is ${a1}`)
           resolve("hey i am resolve by promise 1")
        },2000)
    }
})
prom1.then((a1)=>{
    console.log(a1)
    console.log("resolved and print after then1") 
}).catch(err=>{
    console.log(err)
})


let prom2= new Promise((resolve, reject)=>{
    let a2= Math.random();
    if(a2<0.5){
        reject("the value is less than 0.5 is not allowed")
    }
    else{
        setTimeout(()=>{
           console.log(`the value of a is ${a2}`)
           resolve("hey i am resolve after reolve 2 nd promise2")
        },2000)
    }
})

prom2.then((a2)=>{
    console.log(a2)
    console.log("resolved and print after then2")
   
}).catch((err)=>{
    console.log(err);
})


let prom3= Promise.reject("the value is less than 0.5 is not allowed")

prom3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err);
})

// outputs===
// promise.js:2 Hii i am vishakha
// promise.js:48 [Promise]0: Promise {: 'the value is less than 0.5 is not allowed'}length: 1[[Prototype]]: Array(0)
// promise.js:19 the value is less than 0.5 is not allowed
// promise.js:30 the value of a is 0.5318594017621063
// promise.js:37 hey i am resolve after reolve 2 nd promise2
// promise.js:38 resolved and print after then2



// outputs===
// Hii i am vishakha
// promise.js:41 the value is less than 0.5 is not allowed
// promise.js:50 the value is less than 0.5 is not allowed
// promise.js:10 the value of a is 0.6388409734914875
// promise.js:16 hey i am resolve by promise 1
// promise.js:17 resolved and print after then1
// =======================================================================================


function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);
        }, 3000)
    })
}
console.log("modules loaded")
console.log("Do something on module")
console.log("get data")
let data = getData()
console.log(data)
console.log(" print")
console.log("process data")

// ouput====
// modules loaded
// promise.js:12 Do something on module
// promise.js:14 get data
// promise.js:18 Promise {}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: 455
// promise.js:19  print
// promise.js:21 process data
// =====================================================

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);
        }, 3000)
    })
}
console.log("modules loaded")
console.log("Do something on module")
console.log("get data")
let data = getData()

data.then(()=>{
    console.log(data)
    console.log(" print")
    console.log("process data")
})
// outputs========================
// modules loaded
// promise.js:10 Do something on module
// promise.js:11 get data
// promise.js:15 Promise {<fulfilled>: 455}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: 455
// promise.js:16  print
// promise.js:17 process data

//================================================================================

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);
        }, 3000)
    })
}

async function main(){
console.log("modules loaded")
console.log("Do something on module")
console.log("get data")
let data =await getData()
console.log(data)
console.log(" print")
console.log("process data")
}

main()

// outputs===============================
// promise.js:11 modules loaded
// promise.js:12 Do something on module
// promise.js:13 get data
// promise.js:15 455
// promise.js:16  print
// promise.js:17 process data
//===========================================================================================================================

// async function getData(){
//     let x = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let data = await x.json();
// }
// async function main(){
// console.log("modules loaded")
// console.log("Do something on module")
// console.log("get data")
// let data =await getData()
// console.log(data)
// console.log(" print")
// console.log("process data")
// }

// main()

// // output=
// // modules loaded
// // promise.js:8 Do something on module
// // promise.js:9 get data
// // promise.js:11 undefined
// // promise.js:12  print
// // promise.js:13 process data
// // ==================================================================================================================================

// async function getData(){
//     let x = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let data = await x.json();
//     return data
// }
// async function main(){
// console.log("modules loaded")
// console.log("Do something on module")
// console.log("get data")
// let data =await getData()
// console.log(data)
// console.log(" print")
// console.log("process data")
// }

// main()
// // output

// // promise.js:8 modules loaded
// // promise.js:9 Do something on module
// // promise.js:10 get data
// // promise.js:12 (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]0: {userId: 1, id: 1, title: 'sunt aut 
// // promise.js:13  print
// // promise.js:14 process data
// //==============================================================================================================================================

// async function getData(){
//     let x = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let data = await x.json();
//     return data
// }
// async function main(){
// console.log("modules loaded")
// console.log("Do something on module")
// console.log("get data")
// let data = getData()
// console.log(data)
// console.log(" print")
// console.log("process data")
// }

// main()
// // output
// // promise.js:8 modules loaded
// // promise.js:9 Do something on module
// // promise.js:10 get data
// // promise.js:12 Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: Array(100)
// // promise.js:13  print
// // promise.js:14 process data
// //=======================================================================================================================================

// async function getData(){
//     let x = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let data = await x.json();
//     console.log(data) 
// }
// async function main(){
// console.log("modules loaded")
// console.log("Do something on module")
// console.log("get data")
// let data =await getData()
// console.log(data)
// console.log(" print")
// console.log("process data")
// }

// main()
// // output=================================================================================================================

// // modules loaded
// // promise.js:9 Do something on module
// // promise.js:10 get data
// // promise.js:5 (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// // promise.js:12 undefined
// // promise.js:13  print
// // promise.js:14 process data
// //=======================================================================================================================================

// async function getData(){
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let data = await x.json();
//     console.log(data) 
// }
// async function main(){
// console.log("modules loaded")
// console.log("Do something on module")
// console.log("get data")
// let data =await getData()
// console.log(data)
// console.log(" print")
// console.log("process data")
// }

// main()
// // output======================================
// // promise.js:8 modules loaded
// // promise.js:9 Do something on module
// // promise.js:10 get data
// // promise.js:5 {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
// // promise.js:12 undefined
// // promise.js:13  print
// // promise.js:14 process data

// //===========================================================================================================================================

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>

//     <style>
//         .card {
//             display: flex;
//             border: 2px solid black;
//             width: 900px;
//             justify-content: flex-start;
//             align-items: center;
//             font-family: arial;
//         }
//         .image img {
//             width: 200px;
//         }
//         .text h4,
//         p {
//             padding: 2px 0 0 20px;
//         }
//         .image {
//             position: relative;
//         }
//         .image .capsule {
//             position: absolute;
//             bottom: 4px;
//             z-index: 10;
//             right: 5px;
//             background: #242020;
//             opacity: 0.9;
//             color: white;
//             padding: 3px;
//             border-radius: 3px;
//             font-size: 14px;
//         }
//     </style>
// </head>

// <body>
//     <div class="container">
//         <div class="card">
//             <div class="image">
//                 <img src="https://i.ytimg.com/vi/WYazkpCQNQw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&amp;rs=AOn4CLB3sCLVtWu37WvE7Oghfu9-uBkRgw"
//                     alt="card">
//                 <div class="capsule">31:06</div>
//             </div>
//             <div class="text">
//                 <h2>Introduction to HTML | Sigma Web Development</h2>
//                 <p>Code with me . 727K view .2 weeks ago</p>
//             </div>
//         </div>
//     </div>
// <script>
// function createCard(title, cName, views, monthsold, duration, thumbnail) {
//     let viewStr
//     if(views < 1000) {
//         viewStr = views;
//     }
//     else if(views > 1000000) {
//         viewStr = views / 1000000 + "M";
//     }
//     else{
//         viewStr = views / 1000 + "K";
//     }
//     let html = `<div class="card">
//     <div class="image">
//         <img src="${thumbnail}" alt="card">
//          <div class="capsule">${duration}</div>
//     </div>
//     <div class="text">
//           <h2>${title}</h2>
//           <p>${cName} . ${viewStr} views  .${monthsold} months ago</p>
//     </div>
// </div>`
//     document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
// }
// createCard("Introduction to", "Codewithme", 78000, 7, "31:05", "https://i.ytimg.com/vi/WYazkpCQNQw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&amp;rs=AOn4CLB3sCLVtWu37WvE7Oghfu9-uBkRgw")
// createCard("Introduction to  HTML | Sigma Web Development", "Codewithme", 7800000, 7, "31:05", "https://i.ytimg.com/vi/WYazkpCQNQw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&amp;rs=AOn4CLB3sCLVtWu37WvE7Oghfu9-uBkRgw")

// createCard("Introduction to", "Codewithme", 4528200, 7, "31:05", "https://i.ytimg.com/vi/WYazkpCQNQw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&amp;rs=AOn4CLB3sCLVtWu37WvE7Oghfu9-uBkRgw")
// createCard("Introduction to  HTML |ent", "Codewithme", 528000, 7, "31:05", "https://i.ytimg.com/vi/WYazkpCQNQw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&amp;rs=AOn4CLB3sCLVtWu37WvE7Oghfu9-uBkRgw")

// createCard("Introduction to", "Codewithme", 78000, 7, "31:05", "https://i.ytimg.com/vi/WYazkpCQNQw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&amp;rs=AOn4CLB3sCLVtWu37WvE7Oghfu9-uBkRgw")
// createCard("Introduction to  HTML | Sigma Web Development", "Codewithme", 7800000, 7, "31:05", "https://i.ytimg.com/vi/WYazkpCQNQw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&amp;rs=AOn4CLB3sCLVtWu37WvE7Oghfu9-uBkRgw")

// createCard("Introduction to", "Codewithme", 4528200, 7, "31:05", "https://i.ytimg.com/vi/WYazkpCQNQw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&amp;rs=AOn4CLB3sCLVtWu37WvE7Oghfu9-uBkRgw")
// createCard("Introduction to  HTML |ent", "Codewithme", 528000, 7, "31:05", "https://i.ytimg.com/vi/WYazkpCQNQw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&amp;rs=AOn4CLB3sCLVtWu37WvE7Oghfu9-uBkRgw")
// </script>
// </body>
// </html>

//======================================================================




let a=prompt("Enter a number ")
let b=prompt("Enetr a number")

// sum=a+b; // concate the numbers
 
sum=parseInt(a)+parseInt(b)
console.log("The sum is" ,sum)
//The sum is 9
//==========================================================================================================================
let a=prompt("Enter a number ")
let b=prompt("Enetr a number")

// sum=a+b; // concate the numbers
 
sum=parseInt(a)+parseInt(b)
console.log("The sum is" ,sum*x)

//promise.js:10 Uncaught ReferenceError: x is not defined
// at promise.js:10:31
//=============================================================================================================================================

let a=prompt("Enter a number ")
let b=prompt("Enetr a number")

// sum=a+b; // concate the numbers
 
sum=parseInt(a)+parseInt(b)
try {
    console.log("The sum is" ,sum*x)
} catch (error) {
    console.log(error)
}
//console.log("The sum is" ,sum*x)

//ReferenceError: x is not defined
  //  at promise.js:14:35

// =======================================================================================================================================

    let a=prompt("Enter a number ")
let b=prompt("Enetr a number")
sum=parseInt(a)+parseInt(b)
try {
    console.log("The sum is" ,sum*x)
} catch (error) {
    console.log(error)
}
finally{
    console.log("files will close early")
}
//ReferenceError: x is not defined
// at promise.js:8:35
// promise.js:13 files will close early    

//============================================================================================================================================
let a=prompt("Enter a number ")
let b=prompt("Enetr a number")
sum=parseInt(a)+parseInt(b)
let x=2
try {
    console.log("The sum is" ,sum*x)
} catch (error) {
    console.log(error)
}
finally{
    console.log("files will close early")
}
//promise.js:10 The sum is 18
// promise.js:15 files will close early
//==================================================================================================================================
let a=prompt("Enter a number ")
let b=prompt("Enetr a number")
sum=parseInt(a)+parseInt(b)
let x=2
function vart(){
try {
    console.log("sum is",sum*x)
    return true
} catch (error) {
    console.log(error)
    return false
}
finally{
    console.log("files will close early")
}
}
vart();
// //sum is 20
// promise.js:18 files will close early
//=========================================================================================================================================
let a=prompt("Enter a number ")
let b=prompt("Enetr a number")
sum=parseInt(a)+parseInt(b)
function vart(){
try {
    console.log("sum is",sum*x)
    return true
} catch (error) {
    console.log(error)
    return false
}
finally{
    console.log("files will close early")
}
}
vart();
//ReferenceError: x is not defined
// at vart (promise.js:11:30)
// at promise.js:21:1
// promise.js:18 files will close early

//==========================================================================================================================================






