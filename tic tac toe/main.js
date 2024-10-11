///
let audioMusic= new Audio("music.mp3")
let gameoverAudio= new Audio("gameover.mp3")
let turnMusic=new Audio("ting.mp3")

let turn="X"
let isgameover=false;
let changeTurn=()=>{
     return turn==="X"? "0":"X"
}

let checkWin=()=>{
   let boxtext=document.getElementsByClassName("boxtext");

  let wins=[[0,1,2], [3,4,5],[6,7,8],[0,3,6],[2,4,7],[2,5,8],[0,4,8],[2,4,6]]
 

wins.forEach(e=>{
   if((boxtext[e[0]].innerText=== boxtext[e[1]].innerText) && (boxtext[e[2]].innerText=== boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") )
      {
      document.getElementsByClassName("info")[0].innerText=boxtext[e[0]].innerText+"  is Won"
      isgameover=true;
      gameoverAudio.play()
      
      document.querySelector('.image').getElementsByTagName('img')[0].style.width = "200px";
    
   }
})

}



// change turn and write x,0
// win game parameters by indexin gsequence
// restart game

// audioMusic.play();
let boxes=document.getElementsByClassName("boxCell")

Array.from(boxes).forEach(element=>{
   let boxtext=element.querySelector(".boxtext")
   element.addEventListener("click",()=>{
      if(boxtext.innerText===''){
         boxtext.innerText=turn;  
         turn=changeTurn()
         turnMusic.play()
         checkWin();
         if (!isgameover){
            document.getElementsByClassName("info")[0].innerText="Turn for"+turn;
        } 
      }
   })

})


let resetButton=document.getElementById("reset")

reset.addEventListener("click",()=>{
   let boxtext=document.querySelectorAll(".boxtext")
   Array.from(boxtext).forEach(element=>{
      element.innerText=" ";

   })
   turn="X"
   document.getElementsByClassName("info")[0].innerText="Turn for"+turn;
   document.querySelector('.image').getElementsByTagName('img')[0].style.width = "0px";
})

















