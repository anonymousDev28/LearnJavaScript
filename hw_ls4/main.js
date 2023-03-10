let boxes = document.querySelector(".boxes");
let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];
let rand = () => {
  return Math.floor(Math.random() * (colors.length - 1));
};
colors.map((col) => {
  let dummyBox = document.createElement("div");
  dummyBox.classList.add("box");
  dummyBox.style.backgroundColor = col;
  boxes.insertAdjacentElement("beforebegin", dummyBox);
});
let totalBoxs = document.querySelector("#score");
let countBox = colors.length;
totalBoxs.insertAdjacentText("beforeend", countBox);
let btn = document.querySelector("#btn");
let addBox = () => {
  let dummyBox = document.createElement("div");
  dummyBox.classList.add("box");
  dummyBox.style.backgroundColor = colors[rand()];
  countBox++;
  totalBoxs.innerText = "";
  totalBoxs.insertAdjacentText("beforeend", "Total box:" + countBox);
  dummyBox.addEventListener("click", () => {
    dummyBox.remove();
    countBox--;
    totalBoxs.innerText = "";
    totalBoxs.insertAdjacentText("beforeend", "Total box:" + countBox);
  });
  boxes.insertAdjacentElement("beforebegin", dummyBox);
};
btn.addEventListener("click", (e) => {
  for (let index = 0; index < 5; index++) {
    addBox();
  }
});
let boxs = document.querySelectorAll(".box");
Array.from(boxs).map((box) => {
  box.addEventListener("click", () => {
    box.remove();
    countBox--;
    totalBoxs.innerText = "";
    totalBoxs.insertAdjacentText("beforeend", "Total box:" + countBox);
  });
});
