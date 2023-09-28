// const btn = document.querySelector("button");
// const inputFirst = document.querySelector("#first-input");
// const inputSecond = document.querySelector("#second-input");

// btn.addEventListener('click', onValueChange)

// function onValueChange() {
//   const firstValue = inputFirst.value;
//   inputFirst.value = inputSecond.value;
//   inputSecond.value = firstValue;
// }

const links = document.querySelector("div");

links.addEventListener('mouseover', onTitleChange);

function onTitleChange(event) {
  if (event.target.nodeName !== 'A') {
    return
  }
  event.target.title = event.target.textContent;
}

console.log();