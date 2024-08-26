// function sum(a: number, b: number) : number {
//     return a + b
// }

// let getValue : number = sum(10,10)
// let getValue2 : number = sum(20,10)
// let getValue3 : number = sum(20,30)

// console.log(getValue)
// console.log(getValue2)
// console.log(getValue3)

let addBtn = document.getElementById("add") as HTMLButtonElement;
let displayNum = document.getElementById("num") as HTMLHeadingElement;
let subBtn = document.getElementById("sub") as HTMLButtonElement;

subBtn.disabled = true;

let tsNum = 0;

function click(clickOn: "plus" | "minus") {
  if (displayNu "0") {
    subBtn.disabled = true;
  } else {
    if (clickOn == "plus") tsNum++;
    if (clickOn == "minus") tsNum--;
    displayNum.innerText = tsNum.toString();
  }
}

addBtn.addEventListener("click", () => click("plus"));
subBtn.addEventListener("click", () => click("minus"));
