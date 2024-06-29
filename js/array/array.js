//this i am just traversing an array here

let array = [10,20,30,40,50,60,70,80,90,100];

function  getElement(){

  let el = document.getElementById("element").value

  if( el < array.length && typeof parseInt(el) === "number"){
  alert(array[el]);
  }else{
    alert("sorry invalid input");
  }
    
}



















/*
 *
 for(let start=0;start < array.length;start++){
  console.log(array[start]);
}

*/



// now lets checek if the input matches with an number inside the array then we 
// will print something and if it's dosent then we will print another









/*
//this here checks the element and 
//if found will return something and 
//if it dosen't found then it will show another 







let userInput = 400;
let showErrorMessage = true;
for(let i = 0; i < array.length;i++){
  if(array[i] === userInput){
  console.log(`hurray user input ${userInput} is inside the array at index ${i}`);    
    showErrorMessage = false;
    return
  }
}

if(showErrorMessage == true){
  console.log(`sorry your input isnt on array`);
}else{
  console.log('exited');
}





*/









