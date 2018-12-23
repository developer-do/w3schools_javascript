/* text 변경 */
btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function () {
  document.getElementById("btn_p1").innerHTML = "Hello JavaScript";
});

/* img src 제어 */
lightOn = document.getElementById("lightOn");
lightOff = document.getElementById("lightOff");
imgLight = document.getElementById("imgLight");

lightOn.addEventListener("click", function() {
  console.log(imgLight.src = "pic_bulbon.gif");
});
lightOff.addEventListener("click", function () {
  console.log(imgLight.src = "pic_bulboff.gif");
});

/* font-size 변경 */
fontSize = document.getElementById("fontSize");

fontSize.addEventListener("click", function () {
  document.getElementById("btn_p2").style.fontSize = "35px";
});

/* display 변경 */
disNone = document.getElementById("disNone");
disBlock = document.getElementById("disBlock");
treePoem = document.getElementById("treePoem");

disNone.addEventListener("click", function () {
  treePoem.style.display = "none";
});

disBlock.addEventListener("click", function () {
  treePoem.style.display = "block";
});
