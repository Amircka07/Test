const enter = document.querySelector(".enter input");
const result = document.querySelector(".result input");
const btn = document.querySelector(".btn");
const h1 = document.querySelector("h1");

btn.addEventListener("click", () => {
  const num = parseFloat(enter.value);
  const resultNum = result.value;

  const enterNum = (num * resultNum) / 100;
  const finish = num + enterNum;

  h1.textContent = `${finish.toFixed(2)}`;
});
