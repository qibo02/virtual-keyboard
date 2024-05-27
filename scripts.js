const buttons = document.querySelectorAll('.btn')
const textarea = document.querySelector('textarea')

let chars = []

const deleteButton = document.querySelector('.backspace')
const shiftButton = document.querySelector('.shift')
const spaceButton = document.getElementById("space")
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
}
)

