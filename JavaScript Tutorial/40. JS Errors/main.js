try {
  adddlert("Welcome guest!");
}
catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}

function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo1").value;
  try {
    if (x == "") {
      throw "empty";
    }
    if (isNaN(x)) {
      throw "not a number";
    }
    x = Number(x);
    if (x < 5) {
      throw "too low";
    }
    if (x > 10) {
      throw "too high";
    }
  }
  catch (err) {
    message.innerHTML = "Input is " + err;
  }
}

function myFunction2() {
  var message, x;
  message = document.getElementById("p02");
  message.innerHTML = "";
  x = document.getElementById("demo2").value;
  try { 
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
  finally {
    document.getElementById("demo2").value = "finally";
  }
}