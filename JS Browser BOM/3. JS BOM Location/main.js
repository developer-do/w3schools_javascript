console.log("window.location.href :",window.location.href);
console.log("window.location.hostname :",window.location.hostname);
console.log("window.location.pathname :",window.location.pathname);
console.log("window.location.protocol :",window.location.protocol);
console.log("window.location.port :", window.location.port);
console.log("window.assign :", window.assign);


// window.onload = newDoc();

function newDoc() {
  window.location.assign("https://www.w3schools.com");
}