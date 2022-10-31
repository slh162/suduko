// function checking mistakes
function sudokuS() {
    let counter = 0;
  
    if (document.getElementById("cell-1").value != 5) {
      counter++;
      document.getElementById("cell-1").style.color = "red";
    } else document.getElementById("cell-1").style.color = "green";
    if (document.getElementById("cell-4").value != 1) {
      counter++;
      document.getElementById("cell-4").style.color = "red";
    } else document.getElementById("cell-4").style.color = "green";
    if (document.getElementById("cell-8").value != 2) {
      counter++;
      document.getElementById("cell-8").style.color = "red";
    } else document.getElementById("cell-8").style.color = "green";
    if (document.getElementById("cell-9").value != 4) {
      counter++;
      document.getElementById("cell-9").style.color = "red";
    } else document.getElementById("cell-9").style.color = "green";
    if (document.getElementById("cell-14").value != 2) {
      counter++;
      document.getElementById("cell-14").style.color = "red";
    } else document.getElementById("cell-14").style.color = "green";
    if (document.getElementById("cell-20").value != 3) {
      counter++;
      document.getElementById("cell-20").style.color = "red";
    } else document.getElementById("cell-20").style.color = "green";
    if (document.getElementById("cell-22").value != 5) {
      counter++;
      document.getElementById("cell-22").style.color = "red";
    } else document.getElementById("cell-22").style.color = "green";
    if (document.getElementById("cell-24").value != 3) {
      counter++;
      document.getElementById("cell-24").style.color = "red";
    } else document.getElementById("cell-24").style.color = "green";
    if (document.getElementById("cell-32").value != 9) {
      counter++;
      document.getElementById("cell-32").style.color = "red";
    } else document.getElementById("cell-32").style.color = "green";
    if (document.getElementById("cell-36").value != 1) {
      counter++;
      document.getElementById("cell-36").style.color = "red";
    } else document.getElementById("cell-36").style.color = "green";
    if (document.getElementById("cell-40").value != 2) {
      counter++;
      document.getElementById("cell-40").style.color = "red";
    } else document.getElementById("cell-40").style.color = "green";
    if (document.getElementById("cell-41").value != 3) {
      counter++;
      document.getElementById("cell-41").style.color = "red";
    } else document.getElementById("cell-41").style.color = "green";
    if (document.getElementById("cell-53").value != 9) {
      counter++;
      document.getElementById("cell-53").style.color = "red";
    } else document.getElementById("cell-53").style.color = "green";
    if (document.getElementById("cell-55").value != 2) {
      counter++;
      document.getElementById("cell-55").style.color = "red";
    } else document.getElementById("cell-55").style.color = "green";
    if (document.getElementById("cell-61").value != 5) {
      counter++;
      document.getElementById("cell-61").style.color = "red";
    } else document.getElementById("cell-61").style.color = "green";
    if (document.getElementById("cell-67").value != 6) {
      counter++;
      document.getElementById("cell-67").style.color = "red";
    } else document.getElementById("cell-67").style.color = "green";
    if (document.getElementById("cell-69").value != 8) {
      counter++;
      document.getElementById("cell-69").style.color = "red";
    } else document.getElementById("cell-69").style.color = "green";
    if (document.getElementById("cell-71").value != 9) {
      counter++;
      document.getElementById("cell-71").style.color = "red";
    } else document.getElementById("cell-71").style.color = "green";
   
    if (document.getElementById("cell-73").value != 7) {
      counter++;
      document.getElementById("cell-73").style.color = "red";
    } else document.getElementById("cell-73").style.color = "green";
    if (document.getElementById("cell-76").value != 9) {
      counter++;
      document.getElementById("cell-76").style.color = "red";
    } else document.getElementById("cell-76").style.color = "green";
    

    console.log(counter);
    document.getElementById('count').value=counter;
  }
  
  
  // new game function
  function news() {
    window.location.href = "suduko-easy.html";
  }
  // once written number disables tile
  function dis1() {
    document.getElementById("cell-1").disabled = true;
  }
  function dis2() {
    document.getElementById("cell-4").disabled = true;
  }
  function dis3() {
    document.getElementById("cell-8").disabled = true;
  }
  function dis4() {
    document.getElementById("cell-9").disabled = true;
  }
  function dis5() {
    document.getElementById("cell-14").disabled = true;
  }
  function dis6() {
    document.getElementById("cell-20").disabled = true;
  }
  function dis7() {
    document.getElementById("cell-22").disabled = true;
  }
  function dis8() {
    document.getElementById("cell-24").disabled = true;
  }
  function dis9() {
    document.getElementById("cell-32").disabled = true;
  }
  function dis10() {
    document.getElementById("cell-36").disabled = true;
  }
  function dis11() {
    document.getElementById("cell-40").disabled = true;
  }
  function dis12() {
    document.getElementById("cell-41").disabled = true;
  }
  function dis13() {
    document.getElementById("cell-53").disabled = true;
  }
  function dis14() {
    document.getElementById("cell-55").disabled = true;
  }
  function dis15() {
    document.getElementById("cell-61").disabled = true;
  }
  function dis16() {
    document.getElementById("cell-67").disabled = true;
  }
  function dis17() {
    document.getElementById("cell-69").disabled = true;
  }
  function dis18() {
    document.getElementById("cell-71").disabled = true;
  }
  function dis19() {
    document.getElementById("cell-73").disabled = true;
  }
  function dis20() {
    document.getElementById("cell-76").disabled = true;
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
  