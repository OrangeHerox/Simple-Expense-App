var btnAdd = document.getElementById("add");
var counter = 0;
var fd = document.getElementById("tdFirst");
var amount = document.getElementById("num");
var ca = document.getElementById("ca");
var parent = document.getElementById("table");

ph(counter);

btnAdd.addEventListener("click", AddExpense);

function AddExpense() {
  
  var name = document.getElementById("name");
  var date = document.getElementById("date");

  if (name.value != "" && date.value != "" && amount.value != "") {
    var firstD = document.getElementById("tdFirst").innerHTML = "";
    var nVal = document.createTextNode(name.value);
    var dVal = document.createTextNode(date.value);
    var mVal = document.createTextNode(amount.value);
    const tds = [];
   
    var trParent = document.createElement("tr");
    var x = document.createElement("button");
    
    tds[0] = document.createElement("td");
    tds[1] = document.createElement("td");
    tds[2] = document.createElement("td");

    x.innerHTML = "X";
    color(x);
    
    Appends(tds, nVal, dVal, mVal, x, trParent, parent);
    Remove(tds, trParent, x);
    clearAll(trParent);

    name.value = "";
    date.value = "";
    amount.value = "";

    ph(++counter);
  } else {
    alert("CANNOT ENTER A BLANK FIELDS");
  }
}

function clearAll(trpr) {
  ca.addEventListener("click",function() {
  //for(let i = 0; i < tds.length; i++) {
  //tds[i].innerHTML="";
  trpr.innerHTML="";
  //}
  ph(counter=0);
  });
}

function ph(c) {
  if (c == 0) {
    fd.innerHTML = "No Expenses Added Yet...";
    ca.style.visibility="hidden";
  } else {
    fd.value = "";
    ca.style.visibility="visible";
  }
}

function Remove(tds, trpr, x) {
  x.addEventListener("click", function() {
    for(let i = 0; i < tds.length; i++) {
    trpr.removeChild(tds[i]);
    }
    trpr.removeChild(x);
    ph(--counter);
  });
}

function Appends(tds, n, d, m, x, trpr, pr) {
  for (let i = 0; i < tds.length; i++) {
    switch (i) {
      case 0:
        tds[i].appendChild(n);
        break;
      case 1:
        tds[i].appendChild(d);
        break;
      case 2:
        tds[i].appendChild(m);
        break;
    }
    trpr.appendChild(tds[i]);
    trpr.appendChild(x);
  }
  pr.appendChild(trpr);
}

function color(el) {
  el.style.borderWidth="1px";
  el.style.borderColor="white";
  
  if (el.innerHTML=="X") {
      el.style.backgroundColor="#865049";
  }
}
