
let hard = [
  //'j0''j1''j2''j3''j4''j5''j6''j7''j8'
/*'i0'*/['5','3','4','6','7','8','9','1','2'],
/*'i1'*/['6','7','2','1','9','5','3','4','8'],
/*'i2'*/['1','9','8','3','4','2','5','6','7'],
/*'i3'*/['8','5','9','7','6','1','4','2','3'],
/*'i4'*/['4','2','6','8','5','3','7','9','1'],
/*'i5'*/['7','1','3','9','2','4','8','5','6'],
/*'i6'*/['9','6','1','5','3','7','2','8','4'],
/*'i7'*/['2','8','7','4','1','9','6','3','5'],
/*'i8'*/['3','4','5','2','8','6','1','7','9']];

let medium =[
['8','5','6','1','3','9','4','7','2'],
['1','4','7','8','2','6','9','5','3'],
['3','9','2','4','5','7','8','6','1'],
['4','7','1','5','9','3','6','2','8'],
['9','2','8','6','7','4','1','3','5'],
['5','6','3','2','8','1','7','4','9'],
['6','3','5','9','4','8','2','1','7'],
['7','1','9','3','6','2','5','8','4'],
['2','8','4','7','1','5','3','9','6']];
let easy =[
['7','6','1','4','3','9','2','8','5'],
['4','2','9','6','5','8','1','7','3'],
['8','3','5','2','1','7','4','6','9'],
['6','9','2','1','8','3','7','5','4'],
['1','4','7','5','9','2','6','3','8'],
['5','8','3','7','4','6','9','1','2'],
['2','1','4','8','6','5','3','9','7'],
['3','7','8','9','2','1','5','4','6'],
['9','5','6','3','7','4','8','2','1']];
try{
function game(board1,level){
 
for(let i =0; i<9;i++){
for(let j=0; j<9;j++){ 
    document.getElementById('i'+i+'j'+j).value = board1[i][j];
}
}
//count is needed to count how many numbers get in cells
let count =0;
while(count<level){
    let x = Math.floor(Math.random()*9);
    let y = Math.floor(Math.random()*9);
    if(document.getElementById("i"+x+'j'+y).value != ''){
        document.getElementById("i"+x+'j'+y).value = '';
        count++;
    }
    }
}
game(hard,60);}
catch(error){console.error(error);}
// // medium game function
try{
function game1(board2,level){
for(let i =0; i<9;i++){
for(let j=0; j<9;j++){
    document.getElementById('r'+i+'k'+j).value = board2[i][j];
}
}
//count is needed to count how many numbers get in cells
let count =0;
while(count<level){
    let x = Math.floor(Math.random()*9);
    let y = Math.floor(Math.random()*9);
    if(document.getElementById("r"+x+'k'+y).value != ''){
        document.getElementById("r"+x+'k'+y).value = '';
        count++;
    }
    }
}
game1(medium,40);}
catch(error){console.error(error);}
// easy game function
try{
function game2(board3,level){

for(let i =0; i<9;i++){
for(let j=0; j<9;j++){ 
    document.getElementById('o'+i+'p'+j).value = board3[i][j];
}}

//count is needed to count how many numbers get in cells
let count =0;
while(count<level){
    let x = Math.floor(Math.random()*9);
    let y = Math.floor(Math.random()*9);
    if(document.getElementById("o"+x+'p'+y).value != ''){
        document.getElementById("o"+x+'p'+y).value = '';
        count++;
    }
    }
}
game2(easy,20);}
catch(error){console.error(error);}

 

  // new game function
  function news() {
     window.location.href = "suduko-easy.html";
  }

  // difficulty switch buttons
  function easD() {
    window.location.href = "suduko-easy.html";
 
  }
  function meD() {
  //  game1(medium,40);
    window.location.href = "suduko-medium.html";
   }
  
  function haD() {
   window.location.href = "suduko-hard.html";
  }
  //easy function checking mistakes
                  
  function sudokuSE(){ 
    
    let counter = 0;
   
    for(let i =0; i<9;i++){
            for(let j = 0; j<9; j++){
                if(document.getElementById('o'+i+"p"+j).value!=easy[i][j])
                { 
    document.getElementById('o'+i+"p"+j).style.color = "red";
                
                counter++;
                    } else document.getElementById('o'+i+"p"+j).style.color = "green";
                  
                  }
                  document.getElementById('count').value=counter;
                  }}
 //medium function checking mistakes

  function sudokuSM(){ 
    
    let counter = 0;
   
    for(let i =0; i<9;i++){
            for(let j = 0; j<9; j++){
             
                if(document.getElementById('r'+i+"k"+j).value!=medium[i][j])
                { document.getElementById('r'+i+"k"+j).style.color = "red";
                // alert('Try Agian');
                counter++;
                    } else  document.getElementById('r'+i+"k"+j).style.color = "green";
                    }
                  document.getElementById('count').value=counter;
                  }}
 //hard function checking mistakes

  function sudokuSH(){ 
    
    let counter = 0;
   
    for(let i =0; i<9;i++){
            for(let j = 0; j<9; j++){
             
                if(document.getElementById('i'+i+"j"+j).value!=hard[i][j])
                { document.getElementById('i'+i+"j"+j).style.color = "red";
                counter++;
                    } else document.getElementById('i'+i+"j"+j).style.color = "green";}
                  document.getElementById('count').value=counter;
                  }}
