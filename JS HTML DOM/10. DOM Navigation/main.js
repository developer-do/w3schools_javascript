// document.getElementById("id02").innerHTML = document.getElementById("id01").innerHTML;
// document.getElementById("id02").innerHTML = document.getElementById("id01").childNodes[0].nodeValue;
document.getElementById("id02").innerHTML = document.getElementById("id01").firstChild.nodeValue;

console.log(document.body.innerHTML);
console.log(document.documentElement.innerHTML);

document.getElementById("id04").innerHTML = document.getElementById("id03").nodeName;


