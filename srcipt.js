
//Arrays in javascript

//Arrays are mutable can be change

// arr=[5,5,8,36,45,54]
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// console.log(arr.toString()) // shows string in
// result=arr.toString()

// console.log(typeof(result))
// console.log(arr)

// console.log("Array" +arr)// by default make array a string that is we want
// arr.pop();    // delete from last
// console.log(arr)
// // arr.delete()   // delete is not a function in array in js
// arr.delete    // delete at last but  not delete at any index

// console.log(arr)
// arr.shift()    // delete from starts
// console.log(arr)
// arr.unshift(100) // insert at  first
// console.log(arr)

// arr.push(54) // insert at last
// console.log(arr)
// arr3=[56,5,48,52,45,78,9]
// arr4=[16,8,88,62,85,89,99]
// arr.join("arr")   // joins the single array with the keyword arr
// console.log(arr.join("arr3"))

// arr.concat(arr3)
// arr.concat(arr3,arr4)
// console.log(arr.concat(arr3))
// console.log(arr.concat(arr3,arr4))
// console.log(arr3)
// console.log(arr4)
// console.log(arr)
// console.log(arr)
// console.log(arr.sort())
// console.log(arr3)
// arr3.sort((a,b)=>a-b)
// console.log(arr3)
// console.log(arr4)
// arr4.sort((a,b)=>b-a)
// console.log(arr4)

// arr3=[56,5,48,52,45,78,9]
// arr4=[16,8,88,62,85,89,99]

// // sort a array in case sensitive manner
// let arr=['apple','Cherry','Banana','date','app'];
// arr.sort((a,b)=> a.toLowerCase().localeCompare(b.toLowerCase()))

// console.log(arr)  // sorts the string array in a case sensitive manner
 // starts with index 2 and remains only 6 items

//  console.log(arr1)
//  console.log(arr1.splice(2,9))

// console.log(arr1.slice(2,9)) // from  index 2 to 9

// for(let i=0; i<arr1.length;i++){
//     const element=arr1[i];
//     console.log(i,element)
// }
// arr1.forEach(element => {
//     console.log(element)
// });              // uses only for array objects
// both loops works  same but the first one is more efficient than the second one
arr1.forEach((value,index)=>{
    console.log(value,index)
    console.log(index,value)
}
)

array loops 

arr1=[5,5,8,36,45,54,6,54,45,8,9,36]

// for(const value of arr1){
//     console.log(value)
// }

// map function-- creates a new array by performing some operation on each array element

const arr3=[2,5,4,8]

const a=arr3.map(value=>{
    return value*value
})
console.log(arr3)    // works 
// console.log(a)   // works an array
// filter function -- creates a new array with all elements that pass the test implemented by the provided function



console.log(a)
const graterThanFive=(e)=>{
      if(e>5){
        return true
      }
        return false
      
}

console.log(a.filter(graterThanFive))



















































