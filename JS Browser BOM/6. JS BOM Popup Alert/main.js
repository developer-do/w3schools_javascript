
function confi() {
  var txt = "";
  if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo1").innerHTML = txt;
};
// confi();


var person = prompt("Please enter your name", "Harry Potter");

if(person == null || person == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + person + "! How are you today?";
}
document.getElementById("demo2").innerHTML = txt;김도