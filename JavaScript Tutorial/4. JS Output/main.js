/* innerHTML 사용 */
inhtml = document.getElementById("inhtml");
inhtmlBtn = document.getElementById("inhtmlBtn");

inhtmlBtn.addEventListener("click", function () {
  inhtml.innerHTML = 5 + 6;
});

/* document.write() 사용 */
docuhtmlBtn = document.getElementById("docuhtmlBtn");

docuhtmlBtn.addEventListener("click", function () {
  document.write("이것은 document.write() 로 만든것 입니다.");
});

/* window.alert() 사용 */
alertBtn = document.getElementById("alertBtn");

alertBtn.addEventListener("click", function () {
  window.alert("공부해 이 쉐끼야!!");
});

/* console.log() 사용 */
conhtml = document.getElementById("conhtml");
conhtmlBtn = document.getElementById("conhtmlBtn");

conhtmlBtn.addEventListener("click", function () {
  console.log(conhtml.innerHTML = "공부해 새꺄!!");
});