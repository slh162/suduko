let easy = [
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

let board2 =[
['8','5','6','1','3','9','4','7','2'],
['1','4','7','8','2','6','9','5','3'],
['3','9','2','4','5','7','8','6','1'],
['4','7','1','5','9','3','6','2','8'],
['9','2','8','6','7','4','1','3','5'],
['5','6','3','2','8','1','7','4','9'],
['6','3','5','9','4','8','2','1','7'],
['7','1','9','3','6','2','5','8','4'],
['2','8','4','7','1','5','3','9','6']];
let board3 =[
['7','6','1','4','3','9','2','8','5'],
['4','2','9','6','5','8','1','7','3'],
['8','3','5','2','1','7','4','6','9'],
['6','9','2','1','8','3','7','5','4'],
['1','4','7','5','9','2','6','3','8'],
['5','8','3','7','4','6','9','1','2'],
['2','1','4','8','6','5','3','9','7'],
['3','7','8','9','2','1','5','4','6'],
['9','5','6','3','7','4','8','2','1']];

function game(board1,level){
for(let i =0; i<9;i++){
for(let j=0; j<9;j++){
    document.getElementById('i'+i+'j'+j).value = board1[i][j];
}
}
//count is variable that need to count for us 
let count =0;
while(count<level){
    let x = Math.floor(Math.random()*9);
    let y = Math.floor(Math.random()*9);
    if(document.getElementById("i"+x+'i'+y).value != ''){
        document.getElementById("i"+x+'j'+y).value = '';
        count++;
    }
    }
}
game(easy,20);
function again(){

        game(easy,20);}
// function checking mistakes
function sudokuS() {
  let counter = 0;

  if (document.getElementById("cell-0").value != 5) {
    counter++;
    document.getElementById("cell-0").style.color = "red";
  } else document.getElementById("cell-0").style.color = "green";
  if (document.getElementById("cell-2").value != 1) {
    counter++;
    document.getElementById("cell-2").style.color = "red";
  } else document.getElementById("cell-2").style.color = "green";
  if (document.getElementById("cell-5").value != 2) {
    counter++;
    document.getElementById("cell-5").style.color = "red";
  } else document.getElementById("cell-5").style.color = "green";
  if (document.getElementById("cell-6").value != 4) {
    counter++;
    document.getElementById("cell-6").style.color = "red";
  } else document.getElementById("cell-6").style.color = "green";
  if (document.getElementById("cell-11").value != 2) {
    counter++;
    document.getElementById("cell-11").style.color = "red";
  } else document.getElementById("cell-11").style.color = "green";
  if (document.getElementById("cell-14").value != 3) {
    counter++;
    document.getElementById("cell-14").style.color = "red";
  } else document.getElementById("cell-14").style.color = "green";
  if (document.getElementById("cell-16").value != 5) {
    counter++;
    document.getElementById("cell-16").style.color = "red";
  } else document.getElementById("cell-16").style.color = "green";
  if (document.getElementById("cell-18").value != 3) {
    counter++;
    document.getElementById("cell-18").style.color = "red";
  } else document.getElementById("cell-18").style.color = "green";
  if (document.getElementById("cell-22").value != 9) {
    counter++;
    document.getElementById("cell-22").style.color = "red";
  } else document.getElementById("cell-22").style.color = "green";
  if (document.getElementById("cell-23").value != 1) {
    counter++;
    document.getElementById("cell-23").style.color = "red";
  } else document.getElementById("cell-23").style.color = "green";
  if (document.getElementById("cell-26").value != 2) {
    counter++;
    document.getElementById("cell-26").style.color = "red";
  } else document.getElementById("cell-26").style.color = "green";
  if (document.getElementById("cell-28").value != 3) {
    counter++;
    document.getElementById("cell-28").style.color = "red";
  } else document.getElementById("cell-28").style.color = "green";
  if (document.getElementById("cell-30").value != 9) {
    counter++;
    document.getElementById("cell-30").style.color = "red";
  } else document.getElementById("cell-30").style.color = "green";
  if (document.getElementById("cell-33").value != 2) {
    counter++;
    document.getElementById("cell-33").style.color = "red";
  } else document.getElementById("cell-33").style.color = "green";
  if (document.getElementById("cell-37").value != 5) {
    counter++;
    document.getElementById("cell-37").style.color = "red";
  } else document.getElementById("cell-37").style.color = "green";
  if (document.getElementById("cell-38").value != 6) {
    counter++;
    document.getElementById("cell-38").style.color = "red";
  } else document.getElementById("cell-38").style.color = "green";
  if (document.getElementById("cell-40").value != 8) {
    counter++;
    document.getElementById("cell-40").style.color = "red";
  } else document.getElementById("cell-40").style.color = "green";
  if (document.getElementById("cell-42").value != 9) {
    counter++;
    document.getElementById("cell-42").style.color = "red";
  } else document.getElementById("cell-42").style.color = "green";
 
  if (document.getElementById("cell-46").value != 7) {
    counter++;
    document.getElementById("cell-46").style.color = "red";
  } else document.getElementById("cell-46").style.color = "green";
  if (document.getElementById("cell-47").value != 9) {
    counter++;
    document.getElementById("cell-47").style.color = "red";
  } else document.getElementById("cell-47").style.color = "green";
  if (document.getElementById("cell-50").value != 6) {
    counter++;
    document.getElementById("cell-50").style.color = "red";
  } else document.getElementById("cell-50").style.color = "green";
  if (document.getElementById("cell-51").value != 8) {
    counter++;
    document.getElementById("cell-51").style.color = "red";
  } else document.getElementById("cell-51").style.color = "green";
  if (document.getElementById("cell-52").value != 4) {
    counter++;
    document.getElementById("cell-52").style.color = "red";
  } else document.getElementById("cell-52").style.color = "green";
  if (document.getElementById("cell-56").value != 5) {
    counter++;
    document.getElementById("cell-56").style.color = "red";
  } else document.getElementById("cell-56").style.color = "green";
  if (document.getElementById("cell-57").value != 2) {
    counter++;
    document.getElementById("cell-57").style.color = "red";
  } else document.getElementById("cell-57").style.color = "green";
  if (document.getElementById("cell-59").value != 9) {
    counter++;
    document.getElementById("cell-59").style.color = "red";
  } else document.getElementById("cell-59").style.color = "green";
  if (document.getElementById("cell-62").value != 7) {
    counter++;
    document.getElementById("cell-62").style.color = "red";
  } else document.getElementById("cell-62").style.color = "green";
  if (document.getElementById("cell-63").value != 9) {
    counter++;
    document.getElementById("cell-63").style.color = "red";
  } else document.getElementById("cell-63").style.color = "green";

  if (document.getElementById("cell-65").value != 3) {
    counter++;
    document.getElementById("cell-65").style.color = "red";
  } else document.getElementById("cell-65").style.color = "green";
  if (document.getElementById("cell-69").value != 5) {
    counter++;
    document.getElementById("cell-69").style.color = "red";
  } else document.getElementById("cell-69").style.color = "green";
  if (document.getElementById("cell-70").value != 2) {
    counter++;
    document.getElementById("cell-70").style.color = "red";
  } else document.getElementById("cell-70").style.color = "green";
  if (document.getElementById("cell-73").value != 2) {
    counter++;
    document.getElementById("cell-73").style.color = "red";
  } else document.getElementById("cell-73").style.color = "green";
  if (document.getElementById("cell-74").value != 7) {
    counter++;
    document.getElementById("cell-74").style.color = "red";
  } else document.getElementById("cell-74").style.color = "green";
  if (document.getElementById("cell-75").value != 4) {
    counter++;
    document.getElementById("cell-75").style.color = "red";
  } else document.getElementById("cell-75").style.color = "green";
  if (document.getElementById("cell-77").value != 5) {
    counter++;
    document.getElementById("cell-77").style.color = "red";
  } else document.getElementById("cell-77").style.color = "green";
  if (document.getElementById("cell-78").value != 1) {
    counter++;
    document.getElementById("cell-78").style.color = "red";
  } else document.getElementById("cell-78").style.color = "green";

 
  console.log(counter);
  document.getElementById('count').value=counter;
}


// new game function
function news() {
  window.location.href = "suduko-easy.html";
}
// once written number disables tile
function disA() {
  document.getElementById("cell-0").disabled = true;
}
function disB() {
  document.getElementById("cell-2").disabled = true;
}
function disC() {
  document.getElementById("cell-5").disabled = true;
}
function disE() {
  document.getElementById("cell-6").disabled = true;
}
function disF() {
  document.getElementById("cell-11").disabled = true;
}
function disG() {
  document.getElementById("cell-14").disabled = true;
}
function disH() {
  document.getElementById("cell-16").disabled = true;
}
function disI() {
  document.getElementById("cell-18").disabled = true;
}
function disJ() {
  document.getElementById("cell-22").disabled = true;
}
function disK() {
  document.getElementById("cell-23").disabled = true;
}
function disL() {
  document.getElementById("cell-26").disabled = true;
}
function disM() {
  document.getElementById("cell-28").disabled = true;
}
function disN() {
  document.getElementById("cell-30").disabled = true;
}
function disO() {
  document.getElementById("cell-33").disabled = true;
}
function disP() {
  document.getElementById("cell-37").disabled = true;
}
function disQ() {
  document.getElementById("cell-38").disabled = true;
}
function disR() {
  document.getElementById("cell-40").disabled = true;
}
function disS() {
  document.getElementById("cell-42").disabled = true;
}
function disT() {
  document.getElementById("cell-46").disabled = true;
}
function disU() {
  document.getElementById("cell-47").disabled = true;
}
function disV() {
  document.getElementById("cell-50").disabled = true;
}
function disW() {
  document.getElementById("cell-51").disabled = true;
}
function disX() {
  document.getElementById("cell-52").disabled = true;
}
function disY() {
  document.getElementById("cell-56").disabled = true;
}
function disZ() {
  document.getElementById("cell-57").disabled = true;
}
function disAB() {
  document.getElementById("cell-59").disabled = true;
}
function disCD() {
  document.getElementById("cell-62").disabled = true;
}
function disEF() {
  document.getElementById("cell-63").disabled = true;
}
function disGH() {
  document.getElementById("cell-65").disabled = true;
}
function disIJ() {
  document.getElementById("cell-69").disabled = true;
}
function disKL() {
  document.getElementById("cell-70").disabled = true;
}
function disMN() {
  document.getElementById("cell-73").disabled = true;
}
function disYZ() {
  document.getElementById("cell-74").disabled = true;
}
function disOP() {
  document.getElementById("cell-75").disabled = true;
}
function disQR() {
  document.getElementById("cell-77").disabled = true;
}
function disST() {
  document.getElementById("cell-78").disabled = true;
}
// difficulty switch buttons
function easD() {
  window.location.href = "suduko-easy.html";
}
function meD() {
  window.location.href = "suduko-medium.html";
}
function haD() {
  window.location.href = "suduko-hard.html";
}
