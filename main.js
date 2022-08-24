// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// // You may write your code here!

// // store for color in forloop
// const chosenColor = null

// // lets grab our colors
// const colors = document.querySelectorAll('.color')
// console.log(colors[0])
// // let user grab the color
// // first lets grab our pallete
// const pallete = document.querySelectorAll('#pallete')
// console.log(pallete)
// // start listening for input ( click ) using for each method
// colors.forEach((color) => {
//   color.addEventListener('click', (event) => {
//     console.log(event.target.style.backgroundColor)
//     // if (event.ta)

//   })
// })

// grabbing our action items
const color = document.querySelectorAll('.color')
const currentColor = document.querySelector('#current-color')
const palette = document.querySelectorAll('#palette .color')
const cell = document.querySelectorAll('.cell')

// changing the current color when user clicks on pallete
color.forEach((col)=> {
  col.addEventListener('click',(event)=> {
    currentColor.style.backgroundColor = event.target.style.backgroundColor
  })
})

// changing the color of the cell clicked on to the color inside the current color variable
cell.forEach((cel) => {
  cel.addEventListener('click', () => {
    cel.style.backgroundColor = currentColor.style.backgroundColor
  })
})