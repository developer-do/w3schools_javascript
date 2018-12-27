function changeText(id) {
  id.innerHTML = 'Ooops!!!!!!!!!!!!';
}

document.getElementById("myBtn").onclick = displayDate;

function displayDate() {
  document.getElementById("demo1").innerHTML = Date();
}

document.body.onload = function () {
  var text = "";
  if (navigator.cookieEnabled == true) {
    text = "Cookies are enabled.";
  } else {
    text = "Cookies are not enabled.";
  }
  console.log(text);
}

function upperCase() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

// var mouseover = document.getElementById("mouseover");
// console.log(mouseover);
// mouseover.addEventListener("mouseover", function () {
//   this.innerHTML = "Thank you!!";
// });

// mouseover.addEventListener("mouseout", function () {
//   this.innerHTML = "mouseove!!";
// });

function mOver(elem) {
  elem.innerHTML = "Thank you!";
}

function mOut(elem) {
  elem.innerHTML = "mouseover!!";
}

function mDown(elem) {
  elem.innerHTML = "Release Me!";
}

function mUp(elem) {
  elem.innerHTML = "Thank You!";
}