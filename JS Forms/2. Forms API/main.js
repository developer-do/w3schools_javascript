function myFunction() {
  var inpObj = document.getElementById("id1");
  if(!inpObj.checkValidity()) {
    document.getElementById("demo1").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("demo1").innerHTML = inpObj.value;
  }
}

function myFunction2() {
  var txt = "";
  if (document.getElementById("id2").validity.rangeOverflow) {
    txt = "Value too large";
  }
  document.getElementById("demo2").innerHTML = txt;
}


function myFunction3() {
  var txt = "";
  if (document.getElementById("id3").validity.rangeUnderflow) {
    txt = "Value too small";
  }
  document.getElementById("demo3").innerHTML = txt;
}
