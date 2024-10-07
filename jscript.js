
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






