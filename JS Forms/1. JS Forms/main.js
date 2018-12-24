function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x === "") {
    alert("Name must be filled out");
    return false;
  } 
}

function myFunction() {
  var x = document.getElementById("numb").value;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input Not valid";
  } else {
    text = "Input OK! x is " + x;
  }
  document.getElementById("numTxt").innerHTML = text;
}