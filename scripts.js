const buttons = document.querySelectorAll('.btn')
const textarea = document.querySelector('textarea')

let chars = []

const deleteButton = document.querySelector('.backspace')
//const shiftButton = document.querySelector('.shift')
const spaceButton = document.getElementById("space")
const capslockButton = document.querySelector(".caps-lock")
const tabButton = document.querySelector(".tab")
const enterButton = document.querySelector(".enter")

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        textarea.value += btn.innerText
        chars = textarea.value.split('')
        //console.log(chars)
    })
})

deleteButton.addEventListener("click", () => {
    chars.pop()
    textarea.value = chars.join('')
})

spaceButton.addEventListener("click", () => {
    chars.push(' ')
    textarea.value = chars.join('')
})

capslockButton.addEventListener("click", () => {
    buttons.forEach(btn => {
        btn.classList.toggle('upper')
    })
})

tabButton.addEventListener("click", () => {
    chars.push('    ')
    textarea.value = chars.join('')
})

enterButton.addEventListener("click", () => {
    chars.push('\n')
    textarea.value = chars.join('')
})