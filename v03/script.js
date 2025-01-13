let btn = document.getElementById("myButton");
btn.onclick = function (event) {
  console.log("Externt JavaScript säger: Klickade på knappen.");
};

let btn2 = document.getElementById("myButton2");
btn2.addEventListener("click", function (event) {
  console.log("Klickade på knappen igen.");
});
